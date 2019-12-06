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
  - Python Collections
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).  
A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing.  
In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.  

### Pick Point  

1. queue can be implemented with a linked list
in fact, they are essentially the same thing, as long as items are added and removed from opposite sides
2. it is especially easy to mess up the updating of the first and last nodes in a queue  
3. often used in bfs or implementing a cache

### Implementation  

**Operations**  
1. add(item)
2. remove()
3. peek()
4. isEmpty()

**By Definition**  


**Use deque** see [python built-in #collections deque](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#collectionsdeque)

1. a generalization of **stacks and queues**  
2. preferred over list when **quicker append and pop from both the ends of container** are needed  
3. O(1) time complexity for **append and pop** as list is O(n)

```python
from collections import deque

q=deque([1,2,3])
```
