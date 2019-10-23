---
layout: single
type: posts
title:  "Data Structure 9 - tree + linked list"
date:   2019-10-23 20:48:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
author_profile: true
---

leetcode 109 - Convert Sorted List to Binary Search Tree [M]

```python      
class Solution(object):
    def sortedListToBST(self, head):
        l=[]
        while head:
            l.append(head.val)
            head=head.next

        return self.construct(l)

    def construct(self,l):      
        if len(l)==0:
            return None
        if len(l)==1:
            return TreeNode(l[0])

        mid=len(l)//2
        root=TreeNode(l[mid])
        root.left=self.construct(l[:mid])
        root.right=self.construct(l[mid+1:])

        return root
```

leetcode 114 - Flatten Binary Tree to Linked List [M]

```python      
class Solution(object):
    def flatten(self,root):
        res=[]
        self.preOrder(root,res)
        for i in range(len(res)-1):
            res[i].left=None
            res[i].right=res[i+1]

    def preOrder(self,root,res):
        if not root:
            return

        res.append(root)
        self.preOrder(root.left,res)
        self.preOrder(root.right,res)
```
