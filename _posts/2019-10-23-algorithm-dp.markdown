---
layout: single
type: posts
title:  "ALgorithms 6 - dynamic programming"
date:   2019-10-23 20:48:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### dp basic

leetcode 118 - Pascal's Triangle [E] <br/>
leetcode 119 - Pascal's Triangle II [E] <br/>

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

leetcode 120 - Triangle [M] <br/>

Input: <br/>
[[2], <br/>
 [3,4], <br/>
 [6,5,7], <br/>
 [4,1,8,3]] <br/>
Output: The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11) <br/>

note: dp bottom up <br/>
initialization: <br/>
dp = [4,1,8,3] <- last layer <br/>
transition: <br/>
i = 0,1,2 <- len of uplayer <br/>
dp[i] = min(dp[i],dp[i+1]) + triangle[uplayer][i] <br/>

```python    
class Solution(object):
    def numDistinct(self, s, t):      
        n=len(tri)
        dp=tri[-1]
        for l in range(n-2,-1,-1): #l=2,1,0
            for j in range(l+1):  #l=2,i=0,1,2 | l=1,i=0,1 | l=0,i=0
                dp[j]=min(dp[j],dp[j+1])+tri[l][j]

        return dp[0]
```





 


### dp string

leetcode 115 - Distinct Subsequences [H]

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



        
