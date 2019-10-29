---
layout: single
type: posts
title:  "Data Structure 1 - list"
date:   2019-10-29 11:46:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

### Consecutive Sequence

**leetcode 128 - Longest Consecutive Sequence [H]**   
Example:  
Input: [100, 4, 200, 1, 3, 2]  
Output: 4  
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.  

Solution:
1. make a set for removing repeated  
2. filter out non-head numbers using if-continue  
3. find the head number (which is 1 from the example) and collect the consecutive

```python
class Solution():
    def longestConsecutive(self, nums):
        nset=set(nums)
        longest=0
        for n in nset:
            if n-1 in nset:
                continue      #filter out non-head numbers
            seq=0
            while n in nset:  #find the head number and collect the consecutive
                seq+=1
                n+=1
            longest=max(longest,seq)
            
        return longest               
```   
