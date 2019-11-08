---
layout: single
type: posts
title:  "Data Structure 9 - binary search tree"
date:   2019-10-21 23:18:25 +0900
related: true
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

### Basic Operation

leetcode 98 - Validate Binary Search Tree [M] - [T/F] <br/>
```python
class BinarySearchTree():
    def isValidBST(self, root):

        return self.isValid(root,float('-inf'),float('inf'))

    def isValid(self,node,left,right):
        if not node:
            return True
        if node.val<=left or node.val>=right:
            return False

        return self.isValid(node.left,left,node.val) and self.isValid(node.right,node.val,right)
```

### Others

leetcode 95 - Unique Binary Search Trees II [M] - generate <br/>
leetcode 99 - Recover Binary Search Tree [M] - swap by mistake <br/>
```python
class Solution():
    #leetcode 95
    def generateUniqueBST(self,n):
        if n<=0:
            return []

        return self.generate(1,n)

    def generate(self,left,right):
        if left>right:
            return [None]      
        res=[]
        for i in range(left,right+1):            
            left_trees=self.generate(left,i-1)
            right_trees=self.generate(i+1,right)            
            for l in left_trees:
                for r in right_trees:                    
                    root=TreeNode(i)
                    root.left=l
                    root.right=r
                    res.append(root)

        return res  

    #leetcode 99
    def recoverBST(self, root):       
        self.pre,self.first,self.second=None,None,None        
        self.inOrder(root)       
        self.first.val,self.second.val=self.second.val,self.first.val

    def inOrder(self,node):       
        if not node:
            return        
        self.inOrder(node.left)       
        if self.pre and self.pre.val>node.val:
            if not self.first:
                self.first=self.pre  
            self.second=node            
        self.pre=node
        self.inOrder(node.right)   
```
