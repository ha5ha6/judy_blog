---
layout: single
type: posts
title:  "ALgorithms 6 - divide and conquer"
date:   2019-12-3 17:00:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Divide and conquer
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

Divide and Conquer is an algorithmic paradigm. A typical Divide and Conquer algorithm solves a problem using following three steps.

1. Divide: Break the given problem into subproblems of same type.
2. Conquer: Recursively solve these subproblems
3. Combine: Appropriately combine the answers

A classic example of Divide and Conquer is **Merge Sort** demonstrated below.  
In Merge Sort, we divide array into two halves, sort the two halves recursively, and then merge the sorted halves.  

![](/assets/images/dnc.png){:width="50%"}

### Related Algorithms  

- Binary Search
- Randomized Binary Search
- Merge Sort
- Quick Sort
- Karatsuba algorithm for fast multiplication
- Convex Hull
- Quickhull algorithm for Convex Hull
- Distinct elements in subarray using Mo's algorithm

### Problems

- Tiling Problem
- Count Inversions
- Calculate pow(x,n)
- Closest Pair of Points
- Multiply two Polynomials
- Strassen's Matrix Multiplication
- The Skyline Problem
- Maximum Subarray Sum
- Longest Common Prefix
- Search in a row-wise and column-wise sorted 2d array  

**leetcode 95 - Unique Binary Search Trees II [M]** see [bst #generate]()

**leetcode 241 - Different Ways to Add Parentheses [M]**  
Given a string of numbers and operators return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +,-,*  

Example 1:  
Input: "2-1-1"  
Output: [0,2]  
Explanation:  
((2-1)-1)=0  
(2-(1-1))=0   

Example 2:  
Input: "2\*3-4\*5"  
Output: [-34,-14,-10,-10,10]  

```python
class Solution():
    def diffWaysToCompute(self,s):
        res=[]
        for i in range(len(s)):
            if s[i] in '+-*':
                lefts=self.diffWaysToCompute(s[:i])
                rights=self.diffWaysToCompute(s[i+1:])
                for l in lefts:
                    for r in rights:
                        if s[i]=='+':
                            res.append(l+r)
                        elif s[i]=='-':
                            res.append(l-r)
                        else:
                            res.append(l*r)
        if not res:
            res.append(int(s))

        return res
```


References:  
