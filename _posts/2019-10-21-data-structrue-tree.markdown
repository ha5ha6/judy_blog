---
layout: single
title:  "Data Structure 9 - tree"
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
     
#create tree
root=TreeNode(0)
root.left=TreeNode(1)
root.right=TreeNode(2)
root.left.left=TreeNode(3)
root.right.left=TreeNode(4)
```   

### Tree Basic Operation

1.insert

2.search

3.find

4.max length

5.min length

### Tree Traversal

leetcode 94 - Binary Tree Inorder Traversal [M]

leetcode 102 - Binary Tree Level Order Traversal [M]

leetcode 103 - Binary Tree Zigzag Level Order Traversal [M]

```python      
class BinaryTreeTraversal():
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
        
    #leetcode 102 (theoretically should use queue, but here use stack)
    def levelorder(self,root):
        res=[]
        if not root:
            return res
        q=[root]
        #cnt=0
        while len(q)!=0:
            res.append([node.val for node in q])
            #leetcode 103 zigzag
            #if cnt%2==0:
            #    res.append([node.val for node in q])
            #else:
            #    res.append([node.val for node in reversed(q)])
            new_q=[]
            for node in q:
                if node.left:
                    new_q.append(node.left)
                if node.right:
                    new_q.append(node.right)
            q=new_q
            #cnt+=1
            
        return res      
```

![](https://ha5ha6.github.io/judy_blog/assets/images/binarytreetraversal.jpg)

### Tree Generalization

### Binary Search Tree

leetcode 95 - Unique Binary Search Trees II [M]

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

```python
class BinarySearchTree():
    #leetcode 95
    def generateUniqueBST(self,n):
    
