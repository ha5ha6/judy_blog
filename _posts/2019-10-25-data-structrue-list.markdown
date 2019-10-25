---
layout: single
type: posts
title:  "Data Structure 1 - list"
date:   2019-10-23 20:48:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### list minmax

leetcode 121 - Best Time to Buy and Sell Stock [E] <br/>
note: record min and max <br/>

Example 1: <br/>
Input: [7,1,5,3,6,4] <br/>
Output: 5 <br/>
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price. <br/>
Example 2: <br/>
Input: [7,6,4,3,1] <br/>
Output: 0 <br/>
Explanation: In this case, no transaction is done, i.e. max profit = 0. <br/>


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
