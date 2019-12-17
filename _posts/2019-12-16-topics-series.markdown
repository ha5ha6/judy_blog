---
layout: single
type: posts
title:  "Topics 3 - series"
date:   2019-10-25 15:58:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - MinMax
  - Bfs
  - Dfs
  - DP
  - Recursion
  - Topics
  - Hash Table
  - Binary Search
  - N-Sum
  - Sorting
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### Best Time Buy n Sell  

**leetcode 121 - Best Time to Buy and Sell Stock (Once) [E] - record min and max**  
Input: [7,1,5,3,6,4]  
Output: 5  
Explanation: Buy on 1 and sell on 6, profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price.  

Solution 1 - straightforward understandable  

```python      
class Solution1(object):
    def maxProfit(self,prices):
        if not prices:
            return 0

        minp=prices[0]
        maxp=0 #maxprofit
        for p in prices:
            if p<minp:
                minp=p
            elif p-minp>maxp:
                maxp=p-minp

        return maxp
```

Solution 2 - advanced  
minp <- find the min price, and remember it  
maxp <- find the max of p-minp, and remember it  
Input: [7,1,5,3,6,4]  


    (minp,maxp) =  
      (7, 0)  
      (1, 0)  
      (1, 4)  
      (1, 4)  
      (1, 5)  
      (1, 5)  

```python      
class Solution2(object):
    def maxProfit(self,prices):
        minp=float('inf')
        maxp=0
        for p in prices:
            minp=min(p,minp)
            maxp=max(p-minp,maxp)

        return maxp
```

**leetcode 122 - Best Time to Buy and Sell Stock II (Multiple) [E]**  
Input: [7,1,5,3,6,4]  
Output: 7  
Explanation: Buy on 1 and sell on 5, profit = 5-1 = 4. Then buy on 3 and sell on 6, profit = 6-3 = 3.  

```python      
class Solution(object):
    def maxProfit(self,prices):
        res=0
        if not prices:
            return res

        for i in range(len(prices)-1):
            if prices[i]<prices[i+1]:
                res+=prices[i+1]-prices[i]

        return res
```

**leetcode 123 - Best Time to Buy and Sell Stock III (Twice) [H]**  
Input: [3,3,5,0,-1,3,1,4]  
Output: 7  

Solution:  
minp1 <- find the first min price minp1, and remember it  
maxp1 <- find the max of p-minp1, and remember the difference as maxp1  
minp2 <- find the second min price closest to the previous profit: minp2=p-maxp1, and remember it as minp2  
maxp2 <- find the second max of p-minp2, and remember it  


    (minp1,maxp1,minp2,maxp2) =   
          (3, 0, 3, 0)
          (3, 0, 3, 0)
          (3, 2, 3, 2)
          (0, 2, -2, 2)
         (-1, 2, -3, 2)
         (-1, 4, -3, 6)
         (-1, 4, -3, 6)
         (-1, 5, -3, 7)

```python      
class Solution(object):
    def maxProfit(self,prices):
        minp1,minp2=float('inf'),float('inf')
        maxp1,maxp2=0,0
        for p in prices:
            minp1=min(p,minp1)
            maxp1=max(p-minp1,maxp1)
            minp2=min(p-maxp1,minp2)
            maxp2=max(p-minp2,maxp2)

        return maxp2
```

**leetcode 188 - Best Time to Buy and Sell Stock IV (k times) [H] - dp**  
Say you have an array for which the i-th element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete at most k transactions.  
Note:  
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).  

Example 1:  
Input: [2,4,1], k = 2  
Output: 2  
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:  
Input: [3,2,6,5,0,3], k = 2  
Output: 7  
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
             Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.  

Solution:  


     i: k transitions, j: days, m: days before j from 0

                 / T[i][j-1] - no transition on jth day
     T[i][j]=max
                 \ price[j]-price[m]+T[i-1][m] - best you can get by completing transaction on jth day
                   m=0 to j-1, m is the day you bought the stock before the jth day
                   T[i-1][m] means you had a transition on mth day at least
                 \ T[i-1][m]-price[m] can be optimized to max_diff=max(T[i-1][j]-price[j]) at each i iteration

     say T[1][1]=max(T[1][0],p[1]-p[m]+T[0][m])  j=1, m=0      max_diff_ini <- T[0][0]-p[0]=-2
                =max(0,5-2+0)                                 
                =3                                            
         T[1][2]=max(T[1][1],p[2]-p[m]+T[0][m])  j=2, m=0,1    max_diff<- max(-2,T[0][1]-p[1]=-5)=-2
                =max(3,p[2]-p[0]+T[0][0],p[2]-p[1]+T[0][1])   
                =max(3,7-2+0,7-5+0) =========================> -2>-5 can omit -5+7
                =5
         T[1][3]=max(5,p[3]-p[m]+T[0][m]) j=3, m=0,1,2
                =max(5,1-2+0,1-5+0,1-7+0)                      max_diff<- max(-2,-7)=-2
                =max(5)
         T[1][4]=max(5,p[4]-p[m]+T[0][m]) j=4, m=0,1,2,3
                =max(5,4-2,4-5,4-7,4-1)                        max_diff<- max(-2,-1)=-1
                =max(5)
         T[2][1]=max(0,p[1]-p[m]+T[1][m]) j=1, m=0            
                =max(0,5-2+T[1][0])                            max_diff ini<- T[1][0]-p[0]=-2
                =3                                                           
         T[2][2]=max(3,p[2]-p[m]+T[1][m]) j=2, m=0,1
                =max(3,7-2+0,7-5+3)                            max_diff<- max(0-2,3-5)=-2
                =5
          note: 7-5+3=(day 1->2 profit (7-5))+(day 0->1 profit (5-2))
                       new transition now      one transition before
         T[2][3]=max(5,p[3]-p[m]+T[1][m]) j=3, m=0,1,2
                =max(5,1-2+0,1-5+3,1-7+5)                      max_diff<- max(0-2,3-5,5-7)=max(0-2,5-7)=-2
                =5
          note: 1-2+0=(day 0->3 profit (1-2))+(day 0->0 profit 0)
                1-5+3=(day 1->3 profit (1-5))+(day 0->1 profit (5-2))
                1-7+5=(day 2->3 profit (1-5))+(day 0->2 profit (7-2))
         T[2][4]=max(5,4-2+0,4-5+3,4-7+5,4-1+5)
                =8                                             max_diff<- max(-2,5-1)=4
         T[2][5]=max(8,3-2+0,3-5+3,3-7+5,3-1+5,3-4+5)
                =8                                             max_diff<- max(4,4-5)=4
         T[3][1]=max(0,5-2+0)
                =3                                             max_diff ini<- T[2,0]-p[0]=-2
         T[3][2]=max(3,7-2+0,7-5+3)
                =5                                             max_diff<- max(-2,3-5)=-2
         T[3][3]=max(5,1-2+0,1-5+3,1-7+5)
                =5                                             max_diff<- max(-2,5-7)=-2
         T[3][4]=max(5,4-2+0,4-5+3,4-7+5,4-1+5)
                =8                                             max_diff<- max(-2,5-1)=4
         T[3][5]=max(8,3-2+0,3-5+3,3-7+5,3-1+5,3-4+8)
                =8                                             max_diff<- max(4,8-4)=4
         T[3][7]=max(8,3-2+0,3-5+3,3-7+5,3-1+5,3-4+8,3-3+8,3-1+8)
                =10                                            max_diff<- max(4,8-1)=7

        0   1   2   3   4   5   6   7  <- day prices from 0 to 7th days
        2   5   7   1   4   3   1   3
     0  0   0   0   0   0   0   0   0  <- no transition at all
          \
     1  0 - 3 - 5 - 5 - 5 - 5 - 5 - 5  <- one transition
          \   \
     2  0 - 3 - 5 - 5 - 8 - 8 - 8 - 8

     3  0 - 3 - 5 - 5 - 8 - 8 - 8 - 10
        in day 0 cannot make any profit
     k=3 times

```python  
class Solution(object):
    def maxProfit(self, k, prices):
        if k>=len(prices)//2: #leetcode 122
            max_profit=0
            for i in range(len(prices)-1):
                max_profit+=max(prices[i+1]-prices[i],0)
            return max_profit

        dp=[[0 for i in range(len(prices))] for j in range(k+1)]
        for i in range(1,k+1):
            max_diff=dp[i-1][0]-prices[0]
            for j in range(1,len(prices)):
                dp[i][j]=max(dp[i][j-1],max_diff+prices[j])
                max_diff=max(max_diff,dp[i-1][j]-prices[j])

        return dp[-1][-1]
```

### House Robber

**leetcode 198 - House Robber [E] - light dp**  
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.  
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.  

Example 1:  
Input: [1,2,3,1]  
Output: 4  
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.  

Example 2:  
Input: [2,7,9,3,1]  
Output: 12  
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.  

Solution for [2,3,5,2,3,7,3,7,4]:  


        loot                   prev
          0                     0
      max(2+0,0)=2      \/      0
      max(3+0,2)=3      /\      2           
      max(5+2,3)=7              3          
      max(2+3,5+2)=7            7     
      max(3+5+2,5+2)=10         7     
      max(7+5+2,3+5+2)=14       10           
      max(3+3+5+2,7+5+2)=14     14           
      max(7+7+5+2,7+5+2)=21     14          
      max(4+7+5+2,7+7+5+2)=21   21


```python
class Solution():
    def rob(self,nums):
        if not nums:
            return 0

        loot,prev=0,0
        for n in nums:
            loot,prev=max(n+prev,loot),loot

        return loot
```

**leetcode 213 - House Robber II [M]**  
All houses are arranged in a circle. That means the first house is the neighbor of the last one.  

Example 1:  
Input: [2,3,2]  
Output: 3  
Explanation: You cannot rob house 1 and 3 which are 2 and 2 in total 4 amount, cuz they are neighbors.  

Example 2:  
Input: [1,2,3,1]  
Output: 4  
Explanation: rob house 1 and 3, in total amount 4  

Solution:  
separate into two cases, do not rob the first house, or do not rob the last house  

```python
class Solution():
    def rob(self,nums):
        if len(nums)<2:
            return sum(nums)  #rob only one house

        loot,prev=0,0  
        for n in nums[1:]:  #do not rob the first house
            loot,prev=max(n+prev,loot),loot

        loot2,prev=0,0
        for n in nums[:-1]:  #do not rob the last house
            loot2,prev=max(n+prev,loot2),loot2

        return max(loot,loot2)
```

### Shortest Word Distance

**leetcode 243 - Shortest Word Distance [E]**  
Given ["practice","makes","perfect","coding","makes"]  

Input: word1="coding", word2="practice"  
Output: 3    
Input: word1="makes", word2="coding"   
Output: 1  

Solution:  
use two indices to record word1 i_1 and word2 i_2    
use min_d to record min value of i_1-i_2  

```python
class Solution():
    def shortestDistance(self,words,word1,word2):
        min_d=len(words)
        i1,i2=float('-inf'),float('-inf')
        for i,w in enumerate(words):
            if w==word1:
                i1=i
                min_d=min(min_d,i1-i2)
            if w=word2:
                i2=i
                min_d=min(min_d,i2-i1)

        return min_d
```

**leetcode 244 - Shortest Word Distance II [M] - hash**  
Design a class which receives a list of words in the constructor and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters.  

Solution:  
use two pointers to search for the min d indices  

```python
from collections import defaultdict
class WordDistance():
    def __init__(self,words):
        self.w_idx=defaultdict(list)
        for i,w in enumerate(words):
            self.w_idx[w].append(i)

    def shortest(self,word1,word2):
        i1=self.w_idx[word1]
        i2=self.w_idx[word2]
        d=float('inf')
        p1,p2=0,0  #pointers for the indices

        while p1<len(i1) and p2<len(i2):
            d=min(d,abs(i1[p1]-i2[p2]))
            if i1[p1]<i2[p2]:
                p1+=1
            else:
                p2+=1

        return d
```

**leetcode 245 - Shortest Word Distance III (repeated) [M]**  
Input: words=['practice','makes','perfect','coding','makes']  
word1='makes', word2='makes'  
Output: 3  

Solution:  
use two indices to record the first encounting and the second  
shift last1,last2=-1,-1, if same: last1,last2=last2,i

```python
class Solution():
    def shortestDistance(self,words,word1,word2):
        last1,last2=-1,-1
        same=word1==word2
        d=len(words)
        for i,w in enumerate(words):
            if w==word1:
                if same:
                    last1,last2=last2,i
                else:
                    last1=i
            elif w==word2:
                last2=i

            if last1!=-1 and last2!=-1:
                d=min(d,abs(last1-last2))

        return d
```


### Word Ladder 

**leetcode 127 - Word Ladder [M] (return shortest length) - bfs**  
Example 1:  
Input:  
beginWord = "hit",  
endWord = "cog",  
wordList = ["hot","dot","dog","lot","log","cog"]  
Output: 5  
Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.  

Example 2:  
Input:   
beginWord = "hit"  
endWord = "cog"  
wordList = ["hot","dot","dog","lot","log"]  
Output: 0  
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

Solution:  
1. make a set  
2. put beginWord into bfs (collections.deque)  
3. transform in every char of the word (popleft)  
4. if found valid new word remove it from the set and append it to bfs  

Reference:  
[huahuachan](https://zxi.mytechroad.com/blog/searching/127-word-ladder/)

```python      
class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        wset=set(wordList)
        bfs=collections.deque()
        bfs.append((beginWord,1)) #[(word,length),...]
        while bfs:
            w,l=bfs.popleft()
            if w==endWord:
                return l
            for i in range(len(w)):
                for c in 'abcdefghijklmnopqrstuvwxyz':
                    neww=w[:i]+c+w[i+1:] #transform            
                    if neww in wset and neww!=w:
                        wset.remove(neww)
                        bfs.append((neww,l+1))

        return 0
```

**leetcode 126 - Word Ladder II [H] (return all shortest sequences) - dfs, bidirectional bfs**  
Example:  
Input:  
beginWord = "hit",  
endWord = "cog",  
wordList = ["hot","dot","dog","lot","log","cog"]  
Output:  
[["hit","hot","dot","dog","cog"],  
  ["hit","hot","lot","log","cog"]]  

Solution:  

                  dot -> dog -> cog  
    hit -> hot ->   
                  lot -> log -> cog  

Reference:
[segmentfault](https://segmentfault.com/a/1190000015859013), [huahuachan](https://zxi.mytechroad.com/blog/searching/leetcode-126-word-ladder-ii/)   
