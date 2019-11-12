---
layout: single
type: posts
title:  "Data Structure 6 - queue"
date:   2019-10-27 22:27:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Queue
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

**collections.deque** - [geeksforgeeks](https://www.geeksforgeeks.org/deque-in-python/)  
1. a generalization of **stacks and queues**  
2. preferred over list when **quicker append and pop from both the ends of container** are needed  
3. O(1) time complexity for **append and pop** as list is O(n)

```python
