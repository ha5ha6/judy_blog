---
layout: single
type: posts
title:  "Data Structure 9 - binary search tree"
date:   2019-10-21 23:18:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Tree
  - Binary Search Tree
  - Recursion
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition  
A binary search tree (BST), also known as an ordered binary tree, is a node-based data structure in which each node has no more than two child nodes.  
The left sub-tree contains only nodes with keys less than the parent node;   
The right sub-tree contains only nodes with keys greater than the parent node.  

### Basic: Validate, Iterator

**leetcode 98 - Validate Binary Search Tree [M] - [T/F]**  
valid: left<root, right>root  

Example 1:  

       2
      / \
     1   3

Input: [2,1,3]  
Output: true

Example 2:

      5
     / \
    1   4
       / \
      3   6

Input: [5,1,4,null,null,3,6]  
Output: false  
Explanation: The root node's value is 5 but its right child's value is 4.  

```python
class BinarySearchTree():
    def isValidBST(self, root):

        return self.isValid(root,float('-inf'),float('inf'))

    def isValid(self,node,lower,upper):
        if not node:
            return True
        if node.val<=lower or node.val>=upper:
            return False

        return self.isValid(node.left,lower,node.val) and self.isValid(node.right,node.val,upper)
```

**leetcode 173 - Binary Search Tree Iterator [M] - stack**  
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.  
Calling next() will return the next smallest number in the BST.  

Example: return in order  

        7
       / \
      3  15
         / \
        9  20

BSTIterator iterator = new BSTIterator(root);  
iterator.next();    // return 3  
iterator.next();    // return 7  
iterator.hasNext(); // return true  
iterator.next();    // return 9  
iterator.hasNext(); // return true   
iterator.next();    // return 15  
iterator.hasNext(); // return true  
iterator.next();    // return 20  
iterator.hasNext(); // return false  

Solution:  
1. in \_\_init\_\_(), put all left nodes to stack  
2. if stack, then hasNext()=True  
3. in next(), first pop the node from stack  
then check if it has right, if so put right and right.left to the stack again  


          7          put in stack -> [7,3]
         / \         pop(3),pop(7), 7 has right child
        3  15        put in stack -> [15,9]
           / \       pop(9),pop(15), 15 has right child
          9  20      put in stack -> [20]
                     pop(20), empty stack -> hasNext()=False


```python
class BSTIterator(object):
    def __init__(self, root):
        self.stack=[]
        while root:
            self.stack.append(root)
            root=root.left        

    def hasNext(self):

        return True if self.stack else False      

    def next(self):
        node=self.stack.pop()
        res=node.val
        if node.right:
            node=node.right
            while node:
                self.stack.append(node)
                node=node.left

        return res    
```


### Generate n Recover

**leetcode 95 - Unique Binary Search Trees II [M] - generate**  
Given an integer n, generate all structurally unique BST's that store values 1 ... n.  

Example:  
Input: 3  
Output:  
[[1,null,3,2],  
  [3,2,null,1],  
  [3,1,null,null,2],  
  [2,1,3],  
  [1,null,2,null,3]]  

Explanation:  
The above output corresponds to the 5 unique BST's shown below:  

       1         3     3      2      1
        \       /     /      / \      \
         3     2     1      1   3      2
        /     /       \                 \
       2     1         2                 3

```python
class Solution():
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
```

**leetcode 99 - Recover Binary Search Tree [M] - swap by mistake**  
Two elements of a binary search tree are swapped by mistake.  
Recover the tree without changing its structure.  

Example 1:  
Input: [1,3,null,null,2] ----> Output: [3,1,null,null,2]  

       1                               3
      /                               /
     3                               1
      \                               \
       2                               2


Example 2:  
Input: [3,1,4,null,null,2] ----> Output: [2,1,4,null,null,3]

        3                              2
       / \                            / \
      1   4                          1   4
         /                              /
        2                              3


```python
class Solution():
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
