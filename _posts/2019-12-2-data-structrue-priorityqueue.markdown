---
layout: single
type: posts
title:  "Data Structure 8 - priority queue"
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

see [heap #definition](https://ha5ha6.github.io/judy_blog/programming/2019/11/30/data-structrue-heap.html#definition)

**Python heapq**

see [python built-in #heapq](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#heapq)

### Problems

**leetcode 218 - The Skyline Problem [H]**  
Given the locations and height of all the buildings, write a program to output the skyline formed by these buildings collectively.

Example:  
Input: [left,right,height]  
[[1,3,3],[2,4,4],[5,8,2],[6,7,4],[8,9,4]]  
Output: [[1,3],[2,4],[4,0],[5,2],[6,4],[7,2],[8,4],[9,0]]  


      5 |
      4 |     |-----|     |--|  |--|
      3 |  |--|--|  |     |  |  |  |
      2 |  |  |  |  |  |--|--|--|  |
      1 |  |  |  |  |  |  |  |  |  |
        ------------------------------
        0  1  2  3  4  5  6  7  8  9  

      5 |
      4 |     x-----|     x--|  x--|
      3 |  x--|--|  |     |  |  |  |
      2 |  |  |  |  |  x--|--x--|  |
      1 |  |  |  |  |  |  |  |  |  |
        ------------x--------------x--
        0  1  2  3  4  5  6  7  8  9  

Solution - use max heap:  
1. transfer [l,r,h] to [l,-h,r]+[r,h,None]  
Note 1: -h for discriminating the left and the right edges  
Note 2: for the left to be sorted ahead of the right  
Note 3: minus value of height suits for the default minheap setting  
2. sort the new rectangles of [l,-h,r]+[r,h,None]
3. use a min heap (default) to record height and right (h,r)
4. when meets left edge (h<0), heap push (h,r)
5. when not left edge and current left (which was the right edge originally) is larger than the recorded right, which means the previous whole block reaches right end, heap pop all the recorded (h,r)
6. every time when earlier top!=new heap[0][0], which is the latest max height, res append [l,-heap[0][0]]  
Note 1: always append left edge points  
Note 2: heap[0][0] is always the highest right edges, cuz of the property of default minheap from heapq


        l,r,h
       [1,3,3]        
       [2,4,4]
       [5,8,2]
       [6,7,4]
       [8,9,4]

       -> sorted([l,-h,r]+[r,h,None])
       [1,-3,3]
       [2,-4,4]
       [3,3,N]
       [4,4,N]
       [5,-2,8]
       [6,-4,7]
       [7,4,N]
       [8,-4,9]
       [8,2,N]
       [9,4,N]

                            heap
       ('leftpush', [(-3, 3), (0, inf)])
       ('leftpush', [(-4, 4), (0, inf), (-3, 3)])
       ('whilepop', [(-3, 3), (0, inf)])
       ('whilepop', [(0, inf)])
       ('leftpush', [(-2, 8), (0, inf)])
       ('leftpush', [(-4, 7), (0, inf), (-2, 8)])
       ('whilepop', [(-2, 8), (0, inf)])
       ('whilepop', [(0, inf)])
       ('leftpush', [(-4, 9), (0, inf)])
       ('whilepop', [(0, inf)])


```python
import heapq

class Solution():
    def getSkyline(self,buildings):

        rect=[[l,-h,r] for l,r,h in buildings]+[[r,h,None] for l,r,h in buildings]
        rect.sort()
        res=[]
        heap=[(0,float('inf'))] #store (h,r)

        for l,h,r in rect:
            top=heap[0][0]
            while l>=heap[0][1]: #left >= most right, jump to next new block
                heapq.heappop(heap) #pop all
            if h<0:
                heapq.heappush(heap,(h,r))
            if top!=heap[0][0]:
                res.append([l,-heap[0][0]])

        return res
```
