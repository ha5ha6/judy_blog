---
layout: single
title:  "Data Structure 9 - tree"
date:   2019-10-21 23:18:25 +0900
categories: Programming
author:  "Judy"
---

### Tree Basic
```python
class TreeNode(): 
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None
     
#create tree
root=TreeNode(0)
root.left=TreeNode(1)
root.right=TreeNode(2)
root.left.left=TreeNode(3)
root.right.left=TreeNode(4)
```   

### Tree Operation

1.insert
2.search
3.find

### Tree Traversal

![](https://ha5ha6.github.io/judy_blog/assets/images/binarytreetraversal.jpg)

related: 
leetcode 094 - Binary Tree Inorder Traversal [M]
leetcode 102 - Binary Tree Level Order Traversal [M]

```python      
class BinaryTree():
    #leetcode 094
    def inorder(self,root):
        res=[]
        if not root:
            return res
        self.dfs(root,res)
        return res

    def dfs(self,node,res):
        if not node:
            return
        self.dfs(node.left,res)
        res.append(node.val)
        self.dfs(node.right,res)
        
    #leetcode 102
    def levelorder(self,root):
        res=[]
        
```
### Tree Generalization
