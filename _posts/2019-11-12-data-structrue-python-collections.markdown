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

```python
from collections import defaultdict

#int
s = 'mississippi'
d = defaultdict(int)
for k in s:
    d[k] += 1

sorted(d.items())
>>[('i', 4), ('m', 1), ('p', 2), ('s', 4)]

#list
s = [('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
d = defaultdict(list)
for k, v in s:
    d[k].append(v)

sorted(d.items())
>>[('blue', [2, 4]), ('red', [1]), ('yellow', [1, 3])]
```



### collections.deque

**collections.deque** - [geeksforgeeks](https://www.geeksforgeeks.org/deque-in-python/)  
1. a generalization of **stacks and queues**  
2. preferred over list when **quicker append and pop from both the ends of container** are needed  
3. O(1) time complexity for **append and pop** as list is O(n)

```python
