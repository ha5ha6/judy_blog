---
layout: single
type: posts
title:  "Data Structure 6 - priority queue"
date:   2019-12-2 18:19:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Queue
  - Priority Queue
  - Heap
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

A priority queue is an abstract data type which is like a regular queue or stack data structure, but **where additionally each element has a "priority" associated with it**.  
In a priority queue, an element with high priority is **served or dequeued** before an element with low priority.  
If two elements have **the same priority**, they are served according to **the order in which they were enqueued**, while in other implementations, ordering of elements with the same priority is undefined.  

While priority queues **are often implemented with heaps**, they are conceptually distinct from heaps.  
**A priority queue is a concept like "a list" or "a map", just as a list can be implemented with a linked list or an array.**  
A **priority queue** can be implemented with a heap or a variety of other methods such as an unordered array.

### Implementation  

**Naive**

TO(n) for popping  

```python
class PriorityQueue():
    def __init__(self):
        self.queue=[]

    def isEmpty(Self):
        return not self.queue

    def append(self,x):
        self.queue.append(x)

    #popping the element based on Priority
    def pop(self):
        max_idx=0
        for i in range(len(self.queue)):
            if self.queue[i]>self.queue[max_idx]:
                max_idx=i
        pop=self.queue[max_idx]
        del self.queue[max_idx]

        return pop

pq=PriorityQueue()
pq.append(12)
pq.append(4)
pq.append(14)
pq.append(7)
while not pq.isEmpty():
    print(pq.pop())

Output:
14
12
7
4
```

**Binary Heap**  

see [heap #definition]()

**Python heapq**

see [python built-in #heapq]()
