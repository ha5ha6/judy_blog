---
layout: single
type: posts
title:  "Data Structure 12 - segment tree"
date:   2019-12-3 17:35:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Segment Tree
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition  

A **segment tree** also known as a **statistic tree** is a tree data structure used for storing information about intervals, or segments.  
It allows querying which of the stored segments contain a given point.  
It is, in principle, **a static structure**; that is, it's a structure that cannot be modified once it's built. A similar data structure is the interval tree.

A segment tree for a set I of n intervals uses O(n log n) storage and can be built in O(n log n) time.  
Segment trees support searching for all the intervals that contain a query point in O(log n + k), k being the number of retrieved intervals or segments.  

### Implementation  

refs see [geeksforgeeks](https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/)
