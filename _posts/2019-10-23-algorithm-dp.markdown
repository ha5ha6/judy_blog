---
layout: single
type: posts
title:  "ALgorithms 5 - dynamic programming"
date:   2019-10-23 20:48:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - DP
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### Triangle

**leetcode 118 - Pascal's Triangle [E]** <br/>
**leetcode 119 - Pascal's Triangle II [E]** <br/>

Input: 5 <br/>
Output: <br/>
[[1], <br/>
 [1,1], <br/>
 [1,2,1], <br/>
 [1,3,3,1], <br/>
 [1,4,6,4,1]] <br/>

```python
class Solution(object):
    #leetcode 118
    def generate(self, n):
        if n==0:
            return []

        dp=[[1]]       
        for i in range(1,n):           
            temp=[]          
            for j in range(i-1):
                temp.append(dp[i-1][j]+dp[i-1][j+1])

            temp.insert(0,1)
            temp.insert(len(temp),1)            
            dp.append(temp)

        return dp

    #leetcode 119
    def getRow(self,r):
        row=[1]
        for i in range(r):
            row=[1]+[row[j]+row[j+1] for j in range(len(row)-1)]+[1]

        return row
```

**leetcode 120 - Triangle [M]** <br/>

Input: <br/>
[[2], <br/>
 [3,4], <br/>
 [6,5,7], <br/>
 [4,1,8,3]] <br/>
Output: 11 <br/>
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11) <br/>

Solution: dp bottom up <br/>
Initialization: <br/>
dp = [4,1,8,3] <- last layer <br/>
Transition: <br/>
i = 0,1,2 <- len of upperlayer <br/>
dp[i] = min(dp[i],dp[i+1]) + triangle[upperlayer][i] <br/>

```python    
class Solution(object):
    def minSum(self, tri):      
        n=len(tri)
        dp=tri[-1]
        for l in range(n-2,-1,-1): #l=2,1,0
            for j in range(l+1):  #l=2,i=0,1,2 | l=1,i=0,1 | l=0,i=0
                dp[j]=min(dp[j],dp[j+1])+tri[l][j]

        return dp[0]
```

### Paint House  

**leetcode 256 - Paint House (3 colors) [E]**  
There are a row of n houses, each house can be painted with one
of the three colors: red, blue or green. The cost of painting
each house with a certain color is different. You have to paint
all the houses such that no two adjacent houses have the same color.  

The cost of painting each house with a certain color is represented
by a n x 3 cost matrix. For example, costs[0][0] is the
cost of painting house 0 with color red; costs[1][2] is
the cost of painting house 1 with color green, and so on...
Find the minimum cost to paint all houses.  

Note:  
All costs are positive integers.  

Input: [[17,2,17],[16,16,5],[14,3,19]]  
Output: 10=2+5+3  

Explanation:  

     r   b   g
    [17, 2,  17] house 1
    [16, 16, 5]  house 2
    [14, 3,  19] house 3

    dp ini: cost matrix, i starts from 1
    dp transition:  
    dp[i][0]+=min(dp[i-1][1],dp[i-1][2])
    dp[i][1]+=min(dp[i-1][0],dp[i-1][2])
    dp[i][2]+=min(dp[i-1][0],dp[i-1][1])

    [17,      2,     17]
         \ /      \
         / \       \
    [16+2*,   16+17,  5+2]
                    /
         -----------  
        /       /   
    [14+7,   3+7,   19+18*]


```python    
class Solution():
    def minCost(self,cost):
        if not cost:
            return 0

        dp=cost
        for i in range(1,len(cost)):
            dp[i][0]+=min(dp[i-1][1],dp[i-1][2])
            dp[i][1]+=min(dp[i-1][0],dp[i-1][2])
            dp[i][2]+=min(dp[i-1][0],dp[i-1][1])

        return min(dp[-1])

```

**leetcode 265 - Paint House (k colors) [H]**  
There are a row of n houses, each house can be painted with one
of the k colors. The cost of painting
each house with a certain color is different. You have to paint
all the houses such that no two adjacent houses have the same color.  

The cost of painting each house with a certain color is represented
by a n x k cost matrix. For example, costs[0][0] is the
cost of painting house 0 with color 0; costs[1][2] is
the cost of painting house 1 with color 2, and so on...
Find the minimum cost to paint all houses.  

Input: [[1,5,3],[2,9,4]]  
Output: 5
Explanation:

     0 1 2   color
    [1,5,3]  house 0
     ^   ¥
    [2,9,4]  house 1
     ¥   ^



Solution 1: TO(nk^2)

```python    
class Solution():
    def minCost(self,cost):
        if not cost:
            return 0

        dp=cost
        for i in range(1,len(cost)):
            for k in range(len(cost[i])):
                dp[i][k]+=self.getMin(cost,i-1,k)

        return min(dp[-1])

    def getMin(self,cost,i,k):
        minn=max(cost[i])
        for i,c in enumerate(cost[i]):
            if i==k:
                continue
            minn=min(minn,c)

        return minn
```

Solution 2: TO(nk)  
1. use a list min_c to record min and second min idx of each house  
2. add previous cost of non current idx min  
dp transition: dp[i][k]+=dp[i-1][min_c[k==min_c[0]]]   
k=0, if min_c[0,x], k==0, +dp[i-1][min_c[1]]  
k=1, if min_c[0,x], k!=0, +dp[i-1][min_c[0]]  

Details:  

     0  1  2  3   color  k     min_c     dp ini:
    [1, 8, 4, 9]  house 0      [0,2]     dp=cost
     ^     ^                             dp transition:
    [6, 0, 3, 1]  house 1      [1,3]     dp[i][k]+=dp[i-1][min_c[k==min_c[0]]]
        ^     ^
    [3, 7, 5, 4]  house 2      [0,3]
     ^        ^
    [2, 1, 9, 3]  house 3      [1,0]
     ^  ^
    [5, 0, 4, 7]  house 4      [1,2]
        ^  ^


```python    
class Solution():
    def minCost(self,cost):
        if not cost or not cost[0]:
            return 0

        for i in range(1,len(cost)):
            min_c=[0,1]  #min and second min color idx
            if cost[i-1][0]>cost[i-1][1]:
                min_c=[1,0]

            for c in range(2,len(cost[0])):
                if cost[i-1][c]<=cost[i-1][min_c[0]]:
                    min_c[1],min_c[0]=min_c[0],c
                elif cost[i-1][c]<cost[i-1][min_c[1]]:
                    min_c[1]=c

            print(min_c)
            for c in range(len(cost[0])):
                cost[i][c]+=cost[i-1][min_c[c==min_c[0]]]

        return min(cost[-1])
```


### String Subsequence

**leetcode 115 - Distinct Subsequences [H]**  

<img src="https://ha5ha6.github.io/judy_blog/assets/images/115e.png" width="600"/>

note: subsequence can jump some char but should be in order

<img src="https://ha5ha6.github.io/judy_blog/assets/images/115s.png" width="600"/>

```python    
class Solution(object):
    def numDistinct(self, s, t):      
        dp=[[0 for j in range(len(s)+1)] for i in range(len(t)+1)]        
        for j in range(len(s)+1):
            dp[0][j]=1

        for i in range(1,len(t)+1):
            for j in range(1,len(s)+1):
                if t[i-1]==s[j-1]:
                    dp[i][j]=dp[i][j-1]+dp[i-1][j-1]
                else:
                    dp[i][j]=dp[i][j-1]

        return dp[-1][-1]
```

### Word Break

**leetcode 139 - Word Break [M]**  
Example 1:  
Input: s = "leetcode", wordDict = ["leet", "code"]   
Output: true   
Explanation: Return true because "leetcode" can be segmented as "leet code".  

Example 2:  
Input: s = "applepenapple", wordDict = ["apple", "pen"]   
Output: true  
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".  
             Note that you are allowed to reuse a dictionary word.  

Example 3:  
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]  
Output: false  

Example 1 Solution:  
Initialization:   
dp=[T,F,F,F,F,...] (len=len(s)+1)  
i is for s[:i]  

            l e e t c o d e
            0 1 2 3 4 5 6 7 8
    initial T F F F F F F F F
    i=4 k=0 T F F F T F F F F
    i=8 k=4 T F F F T F F F T

    i=1 k=0 dp[0]=T, s[0:1] not in Dict
    i=2 k=0 dp[0]=T, s[0:2] not in Dict
        k=1 dp[1]=F, s[1:2] not in Dict
    i=3 k=0 dp[0]=T, s[0:3] not in Dict
        k=1 dp[1]=F, s[1:3] not in Dict
        k=2 dp[2]=F, s[2:3] not in Dict
    i=4 k=0 dp[0]=T, s[0:4] 'leet' in Dict -> dp[4]=T
      ...   
    i=8 k=4 dp[4]=T, s[4:8] 'code' in Dict -> dp[8]=T
      ...

```python  
class Solution(object):
    def wordBreak(self, s, wordDict):
        dp=[False]*(len(s)+1)
        dp[0]=True

        for i in range(1,len(s)+1):
            for k in range(i):
                if dp[k] and s[k:i] in wordDict:
                    dp[i]=True

        return dp.pop()
```

**leetcode 140 - Word Break II [H] - dp + dfs**  
Example 2:  
Input:  
s = "pineapplepenapple"   
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]  
Output:  
[ "pine apple pen apple",  
  "pine applepen apple",  
  "pineapple pen apple"]  
Explanation: Note that you are allowed to reuse a dictionary word.  

Example 2 Solution:  
1. check if s can be broken into dict words  


         |dfs('pineapplepenapple',dict,'',res)
             |#s[:4]='pine' in dict
             |dfs('applepenapple',dict,'pine ',res)
                 |~s[:5]='apple' in dict
                 |dfs('penapple',dict,'pine apple ',res)
                     |s[:3]='pen' in dict
                     |dfs('apple',dict,'pine apple pen ',res)
                         |s[:5]='apple' in dict
                         |dfs('',dict,'pine apple pen apple',res) <- append res
                 |~s[:8]='applepen' in dict
                 |dfs('apple',dict,'pine applepen ',res)
                     |s[:5]='apple' in dict
                     |dfs('',dict,'pine applepen apple',res) <- append res
             |#s[:9]='pineapple' in dict
             |dfs('penapple',dict,'pineapple ',res)
                 |s[:3]='pen' in dict
                 |dfs('apple',dict,'pineapple pen ',res)
                     |s[:5]='apple' in dict
                     |dfs('',dict,'pineapple pen apple',res) <- append res


```python  
class Solution():
    def wordBreak(self, s, wordDict):
        res = []
        self.dfs(s, wordDict, '', res)
        return res

    def check(self, s, dict):
        dp = [False for i in range(len(s)+1)]
        dp[0] = True
        for i in range(1, len(s)+1):
            for k in range(i):
                if dp[k] and s[k:i] in dict:
                    dp[i] = True
        return dp.pop()

    def dfs(self, s, dict, stringlist, res):
        if self.check(s, dict):
            if not s:
                res.append(stringlist[1:])
            for i in range(1, len(s)+1):
                if s[:i] in dict:
                    self.dfs(s[i:], dict, stringlist+' '+s[:i])
```

### Matrix Region Search

**leetcode 221 - Maximal Square [M] - dp**
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.  

Example:  
Input:   

    1  0  1  0  0
    1  0  1* 1* 1
    1  1  1* 1* 1
    1  0  0  1  0

Output: 4  

Solution:  
dp[i][j] is the length of constructable rectangle, as the lower right point

      dp initial, start from dp[1][1]
      1 0 1 0 0
      1 s
      1
      1

      dp transit  
      dp[i][j]=min(dp[i-1][j-1]+dp[i-1][j]+dp[i][j-1])+1


```python  
class Solution():
    def maximalSquare(self,matrix):
        if not matrix:
            return 0

        row,col=len(matrix),len(matrix[0])
        dp=[[1 if matrix[i][j]=='1' else 0 for j in range(col)] for i in range(row)]

        for i in range(1,row):
            for j in range(1,col):
                if matrix[i][j]=='1':
                    dp[i][j]=min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1
                else:
                    dp[i][j]=0

        res=[i for sub in dp for i in sub]

        return max(res)**2
```
