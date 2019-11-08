---
layout: single
type: posts
title:  "Data Structure 3 - linked list"
date:   2019-11-8 17:26:25 +0900
related: true
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

```python
class ListNode():
    def __init__(self,x):
        self.val=x
        self.next=None

#create linked list
root=ListNode(0)
root.next=ListNode(1)
root.next.next=ListNode(2)
root.next.next.next=ListNode(3)
root.next.next.next.next=ListNode(4)
```   

### Basic Operation


### Fast and Slow
