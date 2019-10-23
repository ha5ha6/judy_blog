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



        
