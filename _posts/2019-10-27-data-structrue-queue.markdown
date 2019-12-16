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

Simper version:  

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
