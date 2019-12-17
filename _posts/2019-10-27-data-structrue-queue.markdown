---
layout: single
type: posts
title:  "Data Structure 7 - queue"
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

## Background

### Definition

A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).  
A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing.  
In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.  

### Points to Note  

1. queue can be implemented with a linked list
in fact, they are essentially the same thing, as long as items are added and removed from opposite sides
2. it is especially easy to mess up the updating of the first and last nodes in a queue  
3. often used in bfs or implementing a cache

### Basic Operations  

1. add(item)
2. remove()
3. peek()
4. isEmpty()

### Implementation  

**By Definition**  


**Use deque** see [python built-in #collections deque](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#collectionsdeque)

1. a generalization of **stacks and queues**  
2. preferred over list when **quicker append and pop from both the ends of container** are needed  
3. O(1) time complexity for **append and pop** as list is O(n)

```python
from collections import deque

q=deque([1,2,3])
```

**leetcode 232 - Implement Queue using Stacks [E]**  
Implement the following operations of a queue using stacks.  

push(x) -- Push element x to the back of queue.  
pop() -- Removes the element from in front of queue.  
peek() -- Get the front element.  
empty() -- Return whether the queue is empty.  

Example:
MyQueue queue = new MyQueue();  
queue.push(1);  
queue.push(2);    
queue.peek();  // returns 1  
queue.pop();   // returns 1  
queue.empty(); // returns false  

Solution:  
use two stacks to maintain, once pop() or peek(), swap the first stack and append to the second stack

```python
class MyQueue(object):
    def __init__(self):
        self.instack=[]
        self.outstack=[]     

    def push(self, x):
        self.instack.append(x)

    def pop(self):
        self.swap()
        return self.outstack.pop()

    def peek(self):
        self.swap()
        return self.outstack[-1]

    def empty(self):

        return not self.instack and not self.outstack

    def swap(self):
        if not self.outstack:
            while self.instack:
                self.outstack.append(self.instack.pop())
```

Simpler version:  

```python
class MyQueue(object):
    def __init__(self):
        self.stack=[]  

    def push(self, x):
        self.stack.append(x)

    def pop(self):
        x=self.stack[0]
        self.stack.remove(x)
        return x

    def peek(self):
        return self.stack[0]

    def empty(self):
        return not self.stack
```

## Problems  

**leetcode 239 - Sliding Windowing Maximum [H]**  
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.  

Example:  
Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3  
Output: [3,3,5,5,6,7]   

Explanation:   

    Window position                Max
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
     1 [3  -1  -3] 5  3  6  7       3
     1  3 [-1  -3  5] 3  6  7       5
     1  3  -1 [-3  5  3] 6  7       5
     1  3  -1  -3 [5  3  6] 7       6
     1  3  -1  -3  5 [3  6  7]      7

Solution:  
use double ended queue, TO(n), which has methods of popleft(), and pop()  
1. q=deque(), maintain q with max size of k    
2. q[0] will always be the max of current sliding window  
3. append q (keep q in decreasing sequence)
4. when out of window, remove q[0] use popleft()
5. if next n > current q[-1], remove q[-1] use pop()
6. append result since i>=k-1

Note:
record q with index not values, but values are easy to understand, so the following chart uses values of q    

    nums  1  3  -1  -3  5  3  6  7  k=3
    q     1  |          |     |  |
             1<3 pop q  |     |  |
    q        3  -1  -3  |     |  |
    res      3   3      |     |  |
                        3,-1,-3<5, popback of -3,-1,3
    q                   5     |  |
    res      3   3   5        |  |
    q                   5  3  |  |
    res      3   3   5  5     |  |
                              5,3<6, popback 3,5
    q                         6  |
    res      3   3   5  5  6     6<7, popback 6
    q                            7
    res      3   3   5  5  6  7  

    nums  3  2  1  0  -1  -2  k=3
    q     3  2  1
    res      3    
                   outof window popleft 3
    q        2  1  0
    res      3  2
                      outof window popleft 2
    q           1  0  -1
    res      3  2  1   
                          outof window popleft 1
    q              0  -1  -2
    res      3  2  1  0

```python
from collections import deque
class Solution():
    def maxSlidingWindow(self,nums,k):
        q=deque()
        for i, n in enumerate(nums):
            #q last < next n  
            #pop q since q wont be the max
            while q and nums[q[-1]]<n:
                q.pop()

            #append next max candidate
            q.append(i)

            #out of window
            if q[0]<=i-k:
                q.popleft()

            #append since i>=2
            if i>=k-1:
                res.append(nums[q[0]])

        return res
```
