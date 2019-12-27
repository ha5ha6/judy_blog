---
layout: single
type: posts
title:  "OThers 4 - design"
date:   2019-11-15 12:52:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Others
  - Stack
  - N-Sum
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Stack  

**leetcode 155 - Min Stack [E]**  
**leetcode 716 - Max Stack [E]** see [stack #design](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/data-structrue-stack.html#design)  

### Tree  

**leetcode 173 - Binary Search Tree Iterator [M]** see [bst #basic](https://ha5ha6.github.io/judy_blog/programming/2019/10/21/data-structrue-bst.html#basic)  
**leetcode 208 - Implement Trie (Prefix Tree) [M]** see [trie](https://ha5ha6.github.io/judy_blog/programming/2019/11/29/data-structrue-tree-trie.html)

### Two Sum

**leetcode 170 - Two Sum III - Data structure design [E] - hash**  
Design and implement a TwoSum Class supports the following operations: add and find  

Example:  
add(1)  
add(3)  
add(5)  
find(4) -> True  
find(7) -> False

```python
class TwoSum():
    def __init__(self,x):
        self.dict={}

    def add(self,number):
        if number not in self.dict:
            self.dict[number]=1
        else:
            self.dict[number]+=1

    def find(self,value):
        for n in self.dict:
            #dups no matter how many
            if value==n*2:
                if self.dict[n]:
                    return True

            #no dups
            if value-n in self.dict:
                return True

        return False
```

### Iterator  

**leetcode 173 - Binary Search Tree Iterator [M]** see [bst #basic](https://ha5ha6.github.io/judy_blog/programming/2019/10/21/data-structrue-bst.html#basic)  
**leetcode 251 - Flatten 2D Vector [M]**  
**leetcode 341 - Flatten Nested List Iterator [M]** see [array #flatten](/programming/2019/10/29/data-structrue-array.html#flatten)   
**leetcode 281 - Zigzag Iterator [M]** see [queue #problems](/programming/2019/10/27/data-structrue-queue.html#problems)   

**leetcode 284 - Peeking Iterator [M]** look ahead  
Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().  

Assume that the iterator is initialized to the beginning of the list: [1,2,3].  

Call next() gets you 1, the first element in the list.  
Now you call peek() and it returns 2, the next element.   
Calling next() after that still return 2.   
You call next() the final time and it returns 3, the last element.   
Calling hasNext() after that should return false.   

```python
#pre-defined
class Iterator(object):
    def __init__(self, nums):

    def hasNext(self):

    def next(self):

class PeekingIterator():
    def __init__(self,iterator):
        self.front=None
        self.it=iterator
        if self.it.hasNext():
            self.front=self.it.next()

    def peek(self):
        return self.front

    def next(self):
        temp=self.front
        self.front=None
        if self.it.hasNext():
            self.front=self.it.next()
        return temp  

    def hasNext(self):
        return bool(self.front)
```
