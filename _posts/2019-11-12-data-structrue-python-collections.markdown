---
layout: single
type: posts
title:  "Data Structure 11 - python built-in collections"
date:   2019-11-12 23:45:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Python Collections
  - Queue
  - Hash Table
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### collections.defaultdict

### collections.deque

**collections.deque** - [geeksforgeeks](https://www.geeksforgeeks.org/deque-in-python/)  
1. a generalization of **stacks and queues**  
2. preferred over list when **quicker append and pop from both the ends of container** are needed  
3. O(1) time complexity for **append and pop** as list is O(n)

```python
