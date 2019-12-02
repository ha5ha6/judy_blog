---
layout: single
type: posts
title:  "ALgorithms 6 - dynamic programming"
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
