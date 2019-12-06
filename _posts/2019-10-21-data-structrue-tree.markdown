---
layout: single
type: posts
title:  "Data Structure 9 - tree"
date:   2019-10-21 23:18:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Tree
  - Recursion
  - Dfs
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition  

A tree is a widely used abstract data type (ADT) that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

A tree data structure can be defined **recursively** as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

Alternatively, a tree can be defined abstractly as a whole (globally) as an ordered tree, with a value assigned to each node.  

Both these perspectives are useful: while a tree can be analyzed mathematically as a whole, when actually represented as a data structure it is usually represented and worked with separately by node (rather than as a set of nodes and an adjacency list of edges between nodes, as one may represent a digraph, for instance). For example, looking at a tree as a whole, one can talk about "the parent node" of a given node, but in general as a data structure a given node only contains the list of its children, but does not contain a reference to its parent (if any).  


### Pick Point

1. tree vs binary tree  
2. binary tree vs binary search tree, bst equality?, can have dups?
3. balanced vs unbalanced
balanced doenst mean eht left and right subtrees are exactly the same tree  
balanced - not terribly imbalanced, balanced enough to ensure TO(logn) for insert and find  
4. two common balanced trees are red-blace tree and AVL tree  
5. complete binary tree  
every level of the tree is fully filled except for the last node?
6. full binary tree  
every node has either zero or two children, that is no nodes have only one child  
7. perfect binary tree - have 2^k-1 nodes - k number of levels


### Implementation  

**Operations**  
1.

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

### Basic Operation

1. insert
2. search
3. find
4. max depth - leetcode 104 - Maximum Depth of Binary Tree [E]
```python  
#leetcode 104
def maxDepth(self, root):
    if not root:
        return 0

    return 1+max(self.maxDepth(root.left),self.maxDepth(root.right))
```
5. min length - leetcode 111 - Minimum Depth of Binary Tree [E]
```python  
#leetcode 111
def minDepth(self, root):
    if not root:
        return 0
    if not root.left:
        return 1+self.minDepth(root.right)
    if not root.right:
        return 1+self.minDepth(root.left)

    return 1+min(self.minDepth(root.left),self.minDepth(root.right))
```

### Traversal

leetcode 94 - Binary Tree Inorder Traversal [M]  
leetcode 144 - Binary Tree Preorder Traversal [M]  
leetcode 145 - Binary Tree Postorder Traversal [H]  

```python      
class BinaryTreeTraversal():
    #leetcode 94
    def inorder(self,root):
        res=[]
        self.dfs(root,res)
        return res

    def dfs(self,node,res):
        if not node:
            return
        self.dfs(node.left,res)
        res.append(node.val)
        self.dfs(node.right,res)

    #leetcode 144
    def preorder(self,root):
        res=[]
        self.dfs(root,res)
        return res

    def dfs(self,node,res):
        if not node:
            return
        res.append(node.val)
        self.dfs(node.left,res)
        self.dfs(node.right,res)

    #leetcode 145
    def postorder(self,root):
        res=[]
        self.dfs(root,res)
        return res

    def dfs(self,node,res):
        if not node:
            return
        self.dfs(node.left,res)
        self.dfs(node.right,res)
        res.append(node.val)
```

**leetcode 102 - Binary Tree Level Order Traversal [M] - stack or queue**  
Given binary tree [3,9,20,null,null,15,7],  

        3
       / \
      9  20
        /  \
       15   7

return its level order traversal as:  
[[3],  
[9,20],  
[15,7]]  

**leetcode 103 - Binary Tree Zigzag Level Order Traversal [M]**  
Given binary tree [3,9,20,null,null,15,7],  

        3
       / \
      9  20
        /  \
       15   7

return its zigzag level order traversal as:  
[[3],  
[20,9],  
[15,7]]  

**leetcode 107 - Binary Tree Level Order Traversal II (bottom-up) [E]**   
Given binary tree [3,9,20,null,null,15,7],  

        3
       / \
      9  20
        /  \
       15   7

return its bottom-up level order traversal as:  
[[15,7],  
[9,20],  
[3]]    

```python
from collections import deque
class BinaryTreeTraversal():
    #use queue
    def levelorder_queue(self,root):
        res=[]
        if not root:
            return res

        q=deque()
        q.append(root)
        while q:
            level=[]
            for i in range(len(q)):
                node=q.popleft()
                level.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(level)

        return res

    #use stack
    def levelorder_stack(self,root):
        res=[]
        if not root:
            return res
        q=[root]
        #cnt=0
        while q:
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
        #leetcode 107
        #return res[::-1]
```

![](https://ha5ha6.github.io/judy_blog/assets/images/binarytreetraversal.jpg)
**leetcode 199 - Binary Tree Right Side View [M] - level order traversal**  
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.  
Example:  
Input: [1,2,3,null,5,null,4]  
Output: [1, 3, 4]  

       1            <---
     /   \
    2     3         <---
     \     \
      5     4       <---

Solution: similar as 102, but record the right most values, here use stack

```python
class Solution():
    def rightSideView(self,root):
        res=[]
        if not root:
            return res

        q=[root]
        while q:
            res.append(q[-1].val)
            new_q=[]
            for node in q:
                if node.left:
                    new_q.append(node.left)
                if node.right:
                    new_q.append(node.right)
            q=new_q

        return res
```

### Construction

**leetcode 108 - Convert Sorted Array to Binary Search Tree [E]**  
Given the sorted array: [-10,-3,0,5,9],  
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:  

          0
         / \
       -3   9
       /   /
     -10  5

```python
class TreeConstruction():
   def sortedArrayToBST(self, nums):
       if len(nums)<1:
           return None      
       mid=len(nums)//2      
       root=TreeNode(nums[mid])
       root.left=self.sortedArrayToBST(nums[:mid])
       root.right=self.sortedArrayToBST(nums[mid+1:])

       return root
```

**leetcode 105 - Construct Binary Tree from Preorder and Inorder Traversal [M]**  
For example, given  
preorder = [3,9,20,15,7]  
inorder = [9,3,15,20,7]  
Return the following binary tree:  

        3
       / \
      9  20
        /  \
       15   7

```python
class TreeConstruction():
    def buildTree(self, preorder, inorder):
        if not preorder or not inorder:
            return None

        root=TreeNode(preorder[0])
        idx=inorder.index(preorder[0])
        root.left=self.buildTree(preorder[1:idx+1],inorder[:idx])
        root.right=self.buildTree(preorder[idx+1:],inorder[idx+1:])

        return root
```

**leetcode 106 - Construct Binary Tree from Inorder and Postorder Traversal [M]**  
For example, given  
inorder = [9,3,15,20,7]  
postorder = [9,15,7,20,3]  
Return the following binary tree:  

        3
       / \
      9  20
        /  \
       15   7

```python
class TreeConstruction():
    def buildTree(self, inorder, postorder):
        if not inorder or not postorder:
            return None

        root=TreeNode(postorder[-1])
        idx=inorder.index(postorder[-1])
        root.left=self.buildTree(inorder[:idx],postorder[:idx])
        root.right=self.buildTree(inorder[idx+1:],postorder[idx:-1])

        return root
```

### Others Simple

**leetcode 100 - Same Tree [E] - [T/F]**  

```python  
class TreeOthers():
    def isSameTree(self, p, q):
        if not p and not q:
            return True      
        if not p or not q:
            return False        
        if p.val!=q.val:
            return False

        return self.isSameTree(p.left,q.left) and self.isSameTree(p.right,q.right)
```

**leetcode 101 - Symmetric Tree [E] - [T/F]**  
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:  

        1
       / \
      2   2
     / \ / \
    3  4 4  3

```python
class TreeOthers():
    def isSymmetricTree(self, root):
        if not root:
            return True

        return self.isSym(root.left,root.right)

    def isSym(self,left,right):        
        if not left and not right:
            return True        
        if not left or not right:
            return False        
        if left.val!=right.val:
            return False

        return self.isSym(left.left,right.right) and self.isSym(left.right,right.left)
```

**leetcode 110 - Balanced Binary Tree [E]**  
For this problem, a height-balanced binary tree is defined as:  
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.  
Example 1:  
Given the following tree [3,9,20,null,null,15,7]: return True    

        3
       / \
      9  20
        /  \
       15   7

Example 2:  
Given the following tree [1,2,2,3,3,null,null,4,4]: return False  

           1
          / \
         2   2
        / \
       3   3
      / \
     4   4

```python
class TreeOthers():
    def isBalanced(self, root):

        return self.dfs(root)!=-1

    def dfs(self,node):     
        if not node:
            return 0      

        left_depth=self.dfs(node.left)
        right_depth=self.dfs(node.right)   

        if left_depth==-1 or right_depth==-1:
            return -1

        if abs(left_depth-right_depth)>1:
            return -1

        return 1+max(left_depth,right_depth)
```

**leetcode 112 - Path Sum [E]**  
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.  
Note: A leaf is a node with no children.  

Given the below binary tree and sum = 22,  

          5*
         / \
        4*  8
       /   / \
      11* 13  4
     /  \      \
    7    2*      1   

```python
class TreeOthers():
    def hasPathSum(self,root,sum):
        if not root:
            return False

        sum-=root.val
        if sum==0 and not root.left and not root.right:
            return True

        return self.hasPathSum(root.left,sum) or self.hasPathSum(root.right,sum)
```

**leetcode 113 - Path Sum II [M]**  
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.  
Given the below binary tree and sum = 22,  

          5
         / \
        4   8
       /   / \
      11  13  4
     /  \    / \
    7    2  5   1

Return:  
[[5,4,11,2],  
[5,8,4,5]]  

```python
class TreeOthers():
    def pathSum(self, root, sum):
        res=[]
        if not root:
            return res

        self.dfs(root,sum,res,[root.val])

        return res

    def dfs(self,root,target,res,path):     
        if not root:
            return

        if sum(path)==target and not root.left and not root.right:
            res.append(path)
            return

        if root.left:
            self.dfs(root.left,target,res,path+[root.left.val])
        if root.right:
            self.dfs(root.right,target,res,path+[root.right.val])
```

### Others Hard

**leetcode 124 - Binary Tree Maximum Path Sum [H]**  (similar leetcode 687, leetcode 543)  
Given a non-empty binary tree, find the maximum path sum.  
For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.  
Example 1:  
Input: [1,2,3]  

       1
      / \
     2   3

Output: 6  
Example 2:  
Input: [-10,9,20,null,null,15,7]  

      -10  
      / \  
     9  *20    
       /  \
      *15  *7

Output: 42

Solution:

          *1  
       (6)/ \(3)   
        *2   *3     
    (4)/ \(4)
     4   *4

1. use a variable to remember the max sum (cur_max) so far
2. child node returns its **max(left,right)+node.val** to its parent, because only one leaf connection can be validated
3. minus values should be all removed

```python  
class Solution():
    cur_max=float('-inf')  #two ways to definite class variable
    def maxPathSum(self,root):
        #self.cur_max=float('-inf')
        self.dfs(root)

        return self.cur_max

    def dfs(self,root):
        if not root:
            return 0

        left=self.dfs(root.left)
        right=self.dfs(root.right)
        if left<0:
            left=0
        if right<0:
            right=0

        self.cur_max=max(left+right+root.val,self.cur_max)

        return max(left,right)+root.val
```

**leetcode 129 - Sum Root to Leaf Numbers [M]**  
Example1:  
Input: [1,2,3]  

      1
     / \
    2   3

Output: 25  
Explanation:  
The root-to-leaf path 1->2 represents the number 12.  
The root-to-leaf path 1->3 represents the number 13.  
Therefore, sum = 12 + 13 = 25.  

Example 2:  
Input: [4,9,0,5,1]  

        4
       / \
      9   0
     / \
    5   1

Output: 1026  
Explanation:  
The root-to-leaf path 4->9->5 represents the number 495.  
The root-to-leaf path 4->9->1 represents the number 491.  
The root-to-leaf path 4->0 represents the number 40.  
Therefore, sum = 495 + 491 + 40 = 1026.  

Solution: take example 2  

    |dfs(<4>,0)   |
    |    sum=0+4=4|
        |dfs(<9>,4)|                                   +    |dfs(<0>,4)| = 986+40 = 1026
        |    sum=49|                                        |    sum=40|
            |dfs(<5>,49)|+|dfs(<1>,49)| = 495+491 = 986
            |    sum=495| |    sum=491|

```python  
class Solution():
    def sumNumbers(self,root):

        return self.dfs(root,0) # 0 is sum

    def dfs(self,root,sum):
        if not root:
            return 0

        sum=sum*10+root.val

        if not root.left and not root.right:
            return sum

        return self.dfs(root.left,sum)+self.dfs(root.right,sum)
```
