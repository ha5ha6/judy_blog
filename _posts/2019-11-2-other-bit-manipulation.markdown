---
layout: single
type: posts
title:  "OThers 2 - bit manipulation"
date:   2019-11-2 15:23:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

### XOR

**leetcode 136 - Single Number [E]**   
Example 1:  
Input: [2,2,1]  
Output: 1  

Example 2:  
Input: [4,1,2,1,2]  
Output: 4  

```python
class Solution(object):
    def single2(self,arr):
        xor=0
        for i in arr:
           xor ^= i

        return xor          
```   
