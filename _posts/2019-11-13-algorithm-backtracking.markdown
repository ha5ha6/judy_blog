---
layout: single
type: posts
title:  "ALgorithms 3 - back tracking"
date:   2019-11-13 15:33:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Back Tracking
  - Parentheses
  - Recursion
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition
If cannot go forward, go back!

### Parentheses

**leetcode 22 - Generate Parentheses [M]**  
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.  

For example, given n = 3, a solution set is:  
["((()))",  
  "(()())",  
  "(())()",  
  "()(())",  
  "()()()"]  

### Palindrome  

**leetcode 131 - Palindrome Partitioning [M]**  
Given a string s, partition s such that every substring of the partition is a palindrome.  
Return all possible palindrome partitioning of s.  

Input: "aab"  
Output:   
[["aa","b"],  
["a","a","b"]]  

```python
class Solution():
    def partition(self,s):
        res=[]
        self.helper(s,res,[])
        return res

    def helper(self,s,res,path):
        if not s:
            res.append(path)
        for i in range(1,len(s)+1):
            prefix=s[:i]
            if prefix==prefix[::-1]:
                self.helper(s[i:],res,path+[s[:i]])
```

### Combinations

A Combination is a selection of items from a collection, such that the order of selection does not matter.  
Combinations refer to the combination of n things taken k at a time without repetition.

             (n)   n(n-1)...(n-k+1)      n!
    C(k,n) = ( ) = ---------------- = --------
             (k)      k(k-1)...1      k!(n-k)!

    C(2,3) = 3!/(2!1!)=3
    C(2,4) = 4!/(2!2!)=6
    C(3,4) = 4!/(3!1!)=4

    from 3 types of {apple, orange, pear} select 2 combinations
    -> {apple+orange, orange+pear, pear+apple}


**leetcode 77 - Combinations [M]**  
Given two integers n and k, return all possible combinations of k numbers out of 1...n.  

Example 1:   
Input: n=4, k=2   
Output:
[[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]  
Note: C(2,4)=4!/(2!2!)=6  

Example 2:  
Input: n=4, k=3  
Output:  
[[1,2,3], [1,2,4], [1,3,4], [2,3,4]]  
Note: C(3,4)=4!/(3!1!)=4

Solution 1: itertools.combinations

```python
class Solution():
    def combine(self,n,k):

        return list(itertools.combinations(range(1,n+1),k))
```

Solution 2: recursion  

```python
class Solution():
    def combine(self,n,k):
        res=[]
        self.dfs(range(1,n+1),k,res,[])
        return res

    def dfs(self,arr,k,res,path):
        if k>len(arr):
            return
        if k==0:
            res.append(path)
        else:
            self.dfs(arr[1:],k-1,res,path+[arr[0]])
            self.dfs(arr[1:],k,res,path)
```

Solution 3: backtracking  
after appending return to upper function, run next i  

    dfs([1,2,3,4],2,[]) <- path=[]
        i=0 dfs([2,3,4],1,[1])
            i=0 dfs([3,4],0,[1,2]) res+[1,2]
            i=1 dfs([4],0,[1,3]) res+[1,3]
            i=2 dfs([],0,[1,4]) res+[1,4]
        i=1 dfs([3,4],1,[2])
            i=0 dfs([4],0,[2,3]) res+[2,3]
            i=1 dfs([],0,[2,4]) res+[2,4]
        i=2 dfs([4],1,[3])
            i=0 dfs([],0,[3,4]) res+[3,4]


```python
class Solution():
    def combine(self,n,k):
        res=[]
        self.dfs(range(1,n+1),k,res,[])
        return res

    def dfs(self,arr,k,res,path):
        if k>len(arr):
            return
        if k==0:
            res.append(path)
        else:
            for i in range(len(arr)):
                self.dfs(arr[i+1:],k-1,res,path+[arr[i]])
```

**leetcode 39 - Combination Sum [M] - dups**  
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.  
The same repeated number may be chosen from candidates unlimited number of times.  

Example 1:  
Input: candidates = [2,3,6,7], target = 7,  
A solution set is:  
[[7],[2,2,3]]  

Example 2:  
Input: candidates = [2,3,5], target = 8,  
A solution set is:  
[[2,2,2,2],[2,3,3],[3,5]]  

Solution:  

    dfs(0,7,[],[2,3,6,7]) <- path=[]
        dfs(i=0,5,[2])
            dfs(i=0,3=5-2,[2,2])
                dfs(i=0,1=3-2,[2,2,2])  k=0,arr[k]=2>target=1 return
                dfs(i=1,0*=3-3,[2,2,3]) append, return
                dfs(i=2,-3=3-6,[2,2,6]) return
                dfs(i=3,-4=3-7,[2,2,7]) return
            dfs(i=1,2=5-3,[2,3])        k=1,arr[k]=3>target=2 return
            dfs(i=2,-1=5-6,[2,6]) return
            dfs(i=3,-2=5-7,[2,7]) return
        dfs(i=1,4=7-3,[3])              
            dfs(i=1,1=4-3,[3,3]) return k=1,arr[1]=3>target=1 return
            dfs(i=2,-2=4-6,[3,6]) return
            dfs(i=3,-3=4-7,[3,7]) return
        dfs(i=2,1=7-6,[6])              k=2,arr[k]=2>target=1 return
        dfs(i=3,0*,[7]) append, return

```python
class Solution():
    def combinationSum(self,cand,target): #candidate
        res=[]
        self.dfs(cand,target,0,res,[])
        return res

    def dfs(self,arr,target,k,res,path): #k = start from 0
        if target<0:
            return
        elif target==0:
            res.append(path)
            return

        for i in range(k,len(arr)):
            if arr[k]>target:
                return
            self.dfs(arr,target-arr[i],i,res,path+[arr[i]])
```

**leetcode 40 - Combination Sum II [M] - no dups**  
Each number in candidates may only be used once in the combination.  

Example 1:  
Input: candidates = [10,1,2,7,6,1,5], target = 8,    
A solution set is:  
[[1, 7],[1, 2, 5],[2, 6],[1, 1, 6]]  

Example 2:  
Input: candidates = [2,5,2,1,2], target = 5,  
A solution set is:  
[[1,2,2],[5]]  

Solution for [10,1,2,7,6,1,5], target=8:  

    [1,1,2,5,6,7,10] sorted
    dfs(can,8,k=0,[])

      i, k,tar,path
     (0, 0, 7, [1])
     (1, 1, 6, [1, 1])
     (2, 2, 4, [1, 1, 2])
     (3, 3, -1, [1, 1, 2, 5])  return
     arr[k]>target
     (3, 2, 1, [1, 1, 5])
     (4, 4, -5, [1, 1, 5, 6])  return
     arr[k]>target
     (4, 2, 0*, [1, 1, 6])   append
     (5, 2, -1, [1, 1, 7])   return
     (6, 2, -4, [1, 1, 10])  return
     (2, 1, 5, [1, 2])
     (3, 3, 0*, [1, 2, 5])  append
     (4, 3, -1, [1, 2, 6])  return
     (5, 3, -2, [1, 2, 7])  return
     (6, 3, -5, [1, 2, 10]) return
     (3, 1, 2, [1, 5])
     (4, 4, -4, [1, 5, 6])  return
     arr[k]>target
     (4, 1, 1, [1, 6])
     (5, 5, -6, [1, 6, 7])  return
     arr[k]>target
     (5, 1, 0*, [1, 7])     append
     (6, 1, -3, [1, 10])    return
     (1, 0, 7, [1])         [1,1,2,5,6,7,10]
     continue                  ^     arr[1]==arr[0] and i>k
     (2, 0, 6, [2])
     (3, 3, 1, [2, 5])
     (4, 4, -5, [2, 5, 6])  return
     arr[k]>target
     (4, 3, 0*, [2, 6])     append
     (5, 3, -1, [2, 7])     return
     (6, 3, -4, [2, 10])    return
     (3, 0, 3, [5])
     (4, 4, -3, [5, 6])     return
     arr[k]>target
     (4, 0, 2, [6])         
     (5, 5, -5, [6, 7])     return
     arr[k]>target
     (5, 0, 1, [7])
     (6, 6, -9, [7, 10])    return
     arr[k]>target
     (6, 0, -2, [10])       return


```python
class Solution():
    def combinationSum(self,cand,target): #candidate
        res=[]
        cand.sort()
        self.dfs(cand,target,0,res,[])
        return res

    def dfs(self,arr,target,k,res,path): #k = start from 0
        if target<0:
            return
        elif target==0:
            res.append(path)
            return

        for i in range(k,len(arr)):
            if i>k and arr[i]==arr[i-1]:
                continue
            if arr[k]>target:
                return

            self.dfs(arr,target-arr[i],i+1,res,path+[arr[i]])
```

**leetcode 216 - Combination Sum III [M] - no dups**  
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.  

Example 1:  
Input: k=3, n=7  
Output: [[1,2,4]]  
Explanation: 3 numbers from 1 to 9 add up to 7  

Example 2:  
Input: k=3, n=9  
Output: [[1,2,6],[1,3,5],[2,3,4]]  

```python
class Solution():
    #k number of required elements
    #n is the target sum
    def combinationSum(self,k,n):
        res=[]
        self.dfs(k,n,0,res,[])
        return res

    #k->n number of required elements
    #n->target
    #new k is the start index from 0
    def dfs(self,n,target,k,res,path):
        if target<0:
            return
        if n==0 and target==0:
            res.append(path)
            return

        for i in range(k+1,10):
            self.dfs(n-1,target-i,i,res,path+[i])
```

**leetcode 254 - Factor Combinations [M]**  
Numbers can be regarded as product of its factors  
i.e. 8=2x2x2=2x4  
Write a function that takes an integer n and return all possible combinations of its factors  

Input: 1  
Output: []  
Input: 37  
Output: []  
Input: 12  
Output: [[2,6],[2,2,3],[3,4]]  
Input: 32  
Output: [[2,16],[2,2,8],[2,2,2,4],[2,2,2,2,2],[2,4,4],[4,8]]  

Solution of 12:  

      f(12,2,[])
      while1 2*2<12
             res+[6,2]
             f(6,2,[2])
             while2 2*2<6
                    res+[2,3,2]
                    f(3,2,[2,2])
                    2*2>3 no while3 return
                    de=3
                    3*3>6 end while2 return
             de=3
             3*3<12
             res+[4,3]
             f(4,3,[3])
             3*3>4 no while4 return  
             de=4
             4*4>12 end while1 return


```python
class Solution():
    def getFactors(self,n):
        return self.factorize(n,2,[],[])

    def factorize(self,n,de,path,res):
        while de*de<=n:
            if n%de==0:
                res.append(path+[n//de,de])
                self.factorize(n//de,de,path+[de],res)
            de+=1

        return res
```



### Permutations

Permutation is the act of arranging the members of a set into a sequence or order, or, if the set is already ordered, rearranging (reordering) its elements — a process called permuting.  
Permutations differ from combinations, which are selections of some members of a set regardless of order.  

For example, written as tuples, there are six permutations of the set {1,2,3}, namely:
(1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), and (3,2,1).   
These are all the possible orderings of this three-element set.  

Anagrams of words whose letters are different are also permutations: the letters are already ordered in the original word, and the anagram is a reordering of the letters.  

Number of permutations of n things, taken k at a time:


               n!                      n!      P(k,n)
    P(k,n) = ------         C(k,n)= ------- = --------
             (n-k)!                 k!(n-k)!   P(k,k)

    P(2,3) = 3!/(2-1)!=3*2
    P(3,6) = 6!/(6-3)!=6*5*4
    P(4,9) = 9!/(9-4)!=9*8*7*6
    P(4,4) = 4!/0!=4*3*2*1

    from 3 types of {apple, orange, pear} select 2 for permutations
          3      2
    -> {apple, orange}
       {apple, pear}
       {orange, apple}
       {orange, pear}
       {pear, orange}
       {pear, apple}


**leetcode 46 - Permutations [M]**  
Given a collection of distinct integers, return all possible permutations.  

Input: [1,2,3]  
Output:  
[ [1,2,3],  
  [1,3,2],  
  [2,1,3],  
  [2,3,1],  
  [3,1,2],  
  [3,2,1]]  

Solution 1: itertools.permutations  

```python
from itertools import permutations
class Solution():
    def permute(self,nums):

        return list(permutations(nums))

s=Solution()
print(s.permute([1,2,3]))
>>
[(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]
```

Solution 2: recursion  

    [1,2,3]     path
    dfs([1,2,3],[])
    i=0 dfs([]+[2,3],[1])
        i=0 dfs([]+[3],[1,2])
            i=0 dfs([],[1,2,3]) append res
        i=1 dfs([2]+[],[1,3])
            i=0 dfs([],[1,3,2]) append res
    i=1 dfs([1]+[3],[2])
        i=0 dfs([]+[3],[2,1])
            i=0 dfs([],[2,1,3]) append res
        i=1 dfs([1]+[],[2,3])
            i=0 dfs([],[2,3,1]) append res
    i=2 dfs([1,2],[3])
        i=0 dfs([]+[2],[3,1])
            i=0 dfs([],[3,1,2]) append res
        i=1 dfs([1]+[],[3,2])
            i=0 dfs([],[3,2,1]) append res  

```python
class Solution():
    def permute(self,nums):
        res=[]
        self.dfs(nums,res,[])
        return res

    def dfs(self,nums,res,path):
        if not nums:
            res.append(path)
        else:
            for i in range(len(nums)):
                self.dfs(nums[:i]+nums[i+1:],res,path+[nums[i]])
```

Solution 3: backtracking

    nums     visited   path
    [1,2,3]  [0,0,0]   

             [1,0,0]   [1]
             [1,1,0]   [1,2]
             [1,1,1]   [1,2,3]
             [1,0,1]   [1,3]
             [1,1,1]   [1,3,2]

             [0,1,0]   [2]
             [1,1,0]   [2,1]
             [1,1,1]   [2,1,3]
             [0,1,1]   [2,3]
             [1,1,1]   [2,3,1]

             [0,0,1]   [3]
             [1,0,1]   [3,1]
             [1,1,1]   [3,1,2]
             [0,1,1]   [3,2]
             [1,1,1]   [3,1,1]

        path visited
    dfs([],  [0,0,0])
    i=0 dfs([1],[1,0,0])
        i=0 visited
        i=1 dfs([1,2],[1,1,0])
            i=0 visited
            i=1 visited
            i=2 dfs([1,2,3],[1,1,1]) append res
        i=2 dfs([1,3],[1,0,1])
            i=0 visited
            i=1 dfs([1,3,2],[1,1,1]) append res
    i=1 dfs([2],[0,1,0])
        i=0 dfs([2,1],[1,1,0])
            i=0 visited
            i=1 visited
            i=2 dfs([2,1,3],[1,1,1]) append res
        i=1 visited
        i=2 dfs([2,3],[0,1,1])
            i=0 dfs([2,3,1],[1,1,1]) append res
    i=2 dfs([3],[0,0,1])
        i=0 dfs([3,1],[1,0,1])
            i=0 visited
            i=1 dfs([3,1,2],[1,1,1]) append res
        i=1 dfs([3,2],[0,1,1])
            i=0 dfs([3,2,1],[1,1,1]) append res  


```python
class Solution():
    def permute(self,nums):
        visited=[0]*len(nums)
        res=[]
        self.dfs(nums,[],res,visited)
        return res

    def dfs(self,nums,path,res,visited):
        if len(path)==len(nums):
            res.append(path)
        else:
            for i in range(len(nums)):
                if not visited[i]:
                    visited[i]=1
                    self.dfs(nums,path+[nums[i]],res,visited)
                    visited[i]=0  
```

**leetcode 47 - Permutation II (dups) [M]**  
Given a collection of numbers that might contain duplicates, return all possible unique permutations.  

Input: [1,1,2]  
Output:  
[ [1,1,2],  
  [1,2,1],  
  [2,1,1]]  

Solution 1: recursion  

```python
class Solution():
    def permute(self,nums):
        res=[]
        self.dfs(nums,res,[])
        return res

    def dfs(self,nums,res,path):
        if not nums and path not in res:
            res.append(path)
        else:
            for i in range(len(nums)):
                self.dfs(nums[:i]+nums[i+1:],res,path+[nums[i]])
```

Solution 2: backtracking, backtracking should not change nums

```python
class Solution():
    def permuteUnique(self,nums):
        visited=[0]*len(nums)
        res=[]
        nums.sort()
        self.dfs(nums,[],res,visited)
        return res

    def dfs(self,nums,path,res,visited):
        if len(path)==len(nums):
            res.append(path)
        else:
            for i in range(len(nums)):
                if i>0 and not visited[i-1] and nums[i-1]==nums[i]:
                    continue
                if not visited[i]:            
                    visited[i]=1
                    self.dfs(nums,path+[nums[i]],res,visited)
                    visited[i]=0  
```

**leetcode 267 - Palindrome Permutation [M]** need to pass online!!  
Given a string, return all the palindromic permutations (without dups) of it. Return an empty list if no palindromic permutaiton could be formed.  

Input: 'aabb'  
Output: ['abba','baab']  
Input: 'abc'  
Output: []  

Solution:  
1. separate even and odd  
2. do permutation with even  


```python
from collections import Counter
class Solution():
    def generatePalindromes(self,s):
        cnt=Counter(s)
        even=[]
        odd=[]
        for c in cnt:
            if cnt[c]%2==0:
                even.append(c)
            else:
                odd.append(c)

        if len(odd)>1:
            return []

        res=[]
        self.dfs(even,[],res,odd)
        return res

    def dfs(self,s,path,res,odd):
        if not s:
            res.append(''.join(path+odd+path[::-1]))
        else:
            for i in range(len(s)):
                self.dfs(s[:i]+s[i+1:],path+[s[i]],res,odd)
```

### N Queens

### Matrix Region Search  

**leetcode 200 - Number of Islands [M] - backtracking**  
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.  
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.  

Example 1:  
Input:  

    11110
    11010
    11000
    00000

Output: 1  

Example 2:  
Input:  

    11000
    11000
    00100
    00011

Output: 3

Solution:  
1. scan rows and cols and check if '1', island+=1  
2. dfs check its adjacents are '1'  
3. if neighbor is '1', replace '1' with '0', check next neighbor (4 in total)  
4. if neighbor is '0', return      

```python
class Solution():
    def numIslands(self,grid):
        if not grid:
            return 0

        rows,cols=len(grid),len(grid[0])
        islands=0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c]=='1':
                    islands+=1
                    self.hasNeighbor(r,c,grid)

        return islands

    def hasNeighbor(self,r,c,grid):
        if r<0 or r>=len(grid) or c<0 or c>=len(grid[0]):
            return
        if grid[r][c]=='0':
            return

        grid[r][c]='0' #can change 1d/2d array grid value as global, but cannot change variable
        self.hasNeighbor(r+1,c,grid)
        self.hasNeighbor(r-1,c,grid)
        self.hasNeighbor(r,c+1,grid)
        self.hasNeighbor(r,c-1,grid)
```

### Matrix Word Search

**leetcode 79 - Word Search [M]** see also [matrix #word search](https://ha5ha6.github.io/judy_blog/programming/2019/10/29/data-structrue-matrix.html#word-search)  
Given a 2D board and a word, find if the word exists in the grid.  

Example:  
board=  
[['A','B','C','E'],  
['S','F','C','S'],  
['A','D','E','E']]  

word="ABCCED" return True  
word="SEE" return True  
word="ABCB" return False  

Solution:  
1. scan x,y of board, find the first char of word  
2. search four directions, if out of border or not equal to word[i], return F  
3. until i==len(word)  

        A, B, C, E     x=0,1,2
        S, F, C, S     y=0,1,2,3
        A, D, E, E  -> ABCCED

                             board  word
        exit(0,0,0)            A      A  check
          exit(1,0,1)          S      B
          exit(-1,0,1)         out    B
          exit(0,1,1)          B      B  check
            exit(1,1,2)        F      C
            exit(-1,1,2)       out    C
            exit(0,2,2)        C      C  check
              exit(1,2,3)      C      C  check
                exit(2,2,4)    E      E  check
                  exit(2,1,5)  D      D  check   i=5==len(word)


```python
class Solution():
    def exist(self,board,word):
        for r in range(len(board)): #3
            for c in range(len(board[0])): #4
                if self.exit(board,word,r,c,0):
                    return True

        return False

    def exit(self,b,w,r,c,i):  #board,word,x,y,i
        #i is the ith element of word
        if i==len(w):
            return True

        #out of border
        if r<0 or r>=len(b) or c<0 or c>=len(b[0]):
            return False

        if b[r][c]!=w[i]:
            return False

        return self.exit(b,w,r+1,c,i+1) or #down
               self.exit(b,w,r-1,c,i+1) or #up
               self.exit(b,w,r,c+1,i+1) or #right
               self.exit(b,w,r,c-1,i+1) #left
```

**leetcode 212 - Word Search II [H] - backtracking + trie**  
Given a 2D board and a list of words, find all words in the grid.  

Example:  
board=  
[['o','a','a','n'],   
['e','t','a','e'],   
['i','h','k','r'],  
['i','f','l','v']]  

words=['oath','pea','eat','rain']   
output: ['eat',oath]  

Solution:  
1. creat trie node, tree end is the word  
2. insert all words into trie  
3. grid search each letter from board  
4. stop condition: r,c out of board, letter not in trie, if reach terminal: node.word exist, res append(word)  
5. recursion part: first temporarily set board[r][c]='\*', do four direction search, set board[r][c]=letter back   

```python
class TrieNode():
    def __init__(self):
        self.children={}
        self.word=None

class Solution():
    def findWords(self,board,words):
        root=TrieNode()
        for word in words:
            node=root
            for c in word:
                if c not in node.children:
                    node.children[c]=TrieNode()
                node=node.children[c]
            node.word=word  #tree end is the word

        res=[]
        for r in range(len(board)):
            for c in range(len(board[0])):
                self.search(board,root,r,c,res)

        return res

    def search(self,board,node,r,c,res):
        if r<0 or r>=len(board) or c<0 or c>=len(board[0]):
            return

        letter=board[r][c]
        if letter not in node.children:
            return

        node=node.children[letter]
        if node.word:
            res.append(node.word)
            node.word=None

        board[r][c]='*'
        self.search(board,node,r+1,c,res)
        self.search(board,node,r-1,c,res)
        self.search(board,node,r,c+1,res)
        self.search(board,node,r,c-1,res)

        board[r][c]=letter
```
