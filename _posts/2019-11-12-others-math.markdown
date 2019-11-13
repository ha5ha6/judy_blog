---
layout: single
type: posts
title:  "OThers 1 - math"
date:   2019-11-12 23:18:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Others
  - Point
  - Greatest Common Divisor
  - Python Collections
  - Hash Table
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python built-in

**collections.defaultdict()**  

shrinkable dict list?

### Cartesian coordinate

**leetcode 149 Max Points on a Line [H] - greatest common divisor + dict count**  
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line  

Example 1:  
Input:[[1,1],[2,2],[3,3]]  
Output: 3


           ^
        4  |
        3  |        o
        2  |     o
        1  |  o
           ------------->
           0  1  2  3  4

Example 2:  
Input:[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]  
Output: 4


           ^
        5  |
        4  |  o
        3  |     o        o
        2  |        o
        1  |  o        o
           -------------------->
           0  1  2  3  4  5  6
