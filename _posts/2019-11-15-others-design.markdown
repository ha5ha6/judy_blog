---
layout: single
type: posts
title:  "OThers 10 - design"
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
