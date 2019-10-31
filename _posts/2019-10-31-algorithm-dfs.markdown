---
layout: single
type: posts
title:  "ALgorithms 4 - depth first traversal"
date:   2019-10-31 12:56:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

### String

**leetcode 131 - Palindrome Partitioning [M]**  
Input: "aab"  
Output:   
[["aa","b"],  
["a","a","b"]]  

```python
class Solution():
    def partition(self,s):
        res=[]
        self.dfs(s,res,[])

        return res

    def dfs(self,s,res,path):
        if not s:
            res.append(path)

        for i in range(1,len(s)+1):
            prefix=s[:i]
            if prefix==prefix[::-1]:
                self.dfs(s[i:],res,path+[s[:i]])
```
