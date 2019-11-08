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

**leetcode 141 - Linked List Cycle [E] - T/F**  
Given a linked list, determine if it has a cycle in it.  
Example 1:  
Input: head = [3,2,0,-4], pos = 1  

    3->2->0->-4
    　　^      |
    　　|-------
  	   
Output: true  
Explanation: There is a cycle in the linked list, where tail connects to the second node.  

Example 2:  
Input: head = [1,2], pos = 0  

    1->2
    ^  |
    |---
          
Output: true  
Explanation: There is a cycle in the linked list, where tail connects to the first node.  

Example 3:  
Input: head = [1], pos = -1  
Output: false  
Explanation: There is no cycle in the linked list.  

```python
class Solution(object):
    def hasCycle(self,head):
        fast, slow=head, head
	while fast and fast.next:
	    if fast==slow:
	    	return True
	    slow=slow.next
	    fast=fast.next.next
          
        return False
```

**leetcode 142 - Linked List Cycle II [M] - return cycle head**  
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.  
![](https://ha5ha6.github.io/judy_blog/assets/images/142.png)  
Solution:  
1. let fast (2 steps) and slow (1 step) meet  
2. put fast back to the head   
3. the cycle head will be the same node when fast (1 step) and slow (1 step) meet again  

```python
class Solution(object):
    def detectCycle(self,head):
        fast, slow=head, head
	while fast and fast.next:
	    slow=slow.next
	    fast=fast.next.next
            if slow==fast:
	    	fast=head
		while fast!=slow:
		    fast=fast.next
		    slow=slow.next
		return slow
		
        return None
```

