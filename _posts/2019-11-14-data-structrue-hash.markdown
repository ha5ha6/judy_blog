---
layout: single
type: posts
title:  "Data Structure 8 - hash table"
date:   2019-11-14 21:19:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Hash Table
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### N Sum

using python dict see [python built-in #dict]()

**leetcode 1 - Two Sum [E]**  
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target  

Example:  
Given nums=[2,7,11,15], target=9  
Because nums[0]+nums[1]=2+7=9, return [0,1]  

Solution:  
record a hash table n2i={} of {number:index}  

```python
class Solution():
    def twoSum(self,nums,target):
        n2i={} #number to index
        for i,n in enumerate(nums):
            if target-n in n2i:
                return [i,n2i[target-n]]

            n2i[n]=i

        return []
```   
