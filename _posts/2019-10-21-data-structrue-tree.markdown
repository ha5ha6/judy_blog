---
layout: single
title:  "Data Structure 9 - tree"
date:   2019-10-21 23:18:25 +0900
categories: Programming
author:  "Judy"
---

### Tree

![](https://ha5ha6.github.io/judy_blog/assets/images/binarytreetraversal.jpg){:height="50%" width="50%"}

```python
class TreeNode(): 
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None
        
class BinaryTree():
    def inorder_traversal(self,root):
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
```
