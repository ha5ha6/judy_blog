---
layout: single
title:  "DS9-tree"
date:   2019-10-21 23:18:25 +0900
categories: Programming
author:  "Judy"
---

### Tree

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
