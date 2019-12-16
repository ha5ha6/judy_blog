---
layout: single
type: posts
title:  "Data Structure 10 - binary search tree"
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

## Background

### Definition  

A binary search tree (BST), also known as an ordered binary tree, is a node-based data structure in which each node has no more than two child nodes.  
The left sub-tree contains only nodes with keys less than the parent node;   
The right sub-tree contains only nodes with keys greater than the parent node.

### Basic Operations

1. insert() - TO(logn)/TO(n)
2. delete() - TO(logn)/TO(n)
3. access() - TO(logn)/TO(n)
4. find() - TO(logn)/TO(n) - return node =access()?
5. search() -TO(logn)/TO(n) - return T/F
5. size() - TO(n)
6. height() - TO(n), same as maxDepth in previous tree section
7. inOrder() - TO(n), print
8. preOrder() - TO(n)
9. postOrder() - TO(n)
10. levelOrder() - TO(n)
11. fillRandom() - TO(logn)/TO(n) - fill with random number
12. isValidBST() - TO(n) - validate

### Implementation

**python class**  

```python
class TreeNode():
    def __init__(self,x):
        self.val=x
        self.left=None
        self.right=None

class BinarySearchTree():
    def __init__(self):
        self.root=None

    def insert(self,data):
        if not self.root:
            self.root=TreeNode(data)
        else:
            self._insert(data,self.root)

    def _insert(self,data,node):
        if data<node.val:
            if not node.left:
                node.left=TreeNode(data)
            else:
                self._insert(data,node.left)
        elif data>node.val:
            if not node.right:
                node.right=TreeNode(data)
            else:
                self._insert(data,node.right)
        else:
            print('Data already in tree!')

    def fillRandom(self,n=10,max_int=20):
        from random import randint
        for i in range(n):
            data=randint(0,max_int)
            self.insert(data)

    def isValidBST(self):

        return self._isValid(self.root,float('-inf'),float('inf'))

    def _isValid(self,node,lower,upper):
        if not node:
            return True
        if node.val<=lower or node.val>=upper:
            return False

        return self._isValid(node.left,lower,node.val) and self._isValid(node.right,node.val,upper)

    def height(self):  #equal to maxDepth
        if not self.root:
            return 0

        return self._height(self.root,0)

    def _height(self,node,cur_h):
        if not node:
            return cur_h

        left_h=self._height(node.left,cur_h+1)
        right_h=self._height(node.right,cur_h+1)

        return max(left_h,right_h)

    # equals to height
    #def maxDepth(self):
    #    if not self.root:
    #        return 0
    #    return self._maxDepth(self.root)

    #def _maxDepth(self,node):
    #    if not node:
    #        return 0
    #    return 1+max(self._maxDepth(node.left),self._maxDepth(node.right))

    def search(self,data): # T/F
        if not self.root:
            return False

          return self._search(data,self.root)

    def _search(self,data,node):
        if data==node.val:
            return True
        elif data<node.val and node.left:
            return self._search(data,node.left)
        elif data>node.val and node.right:
            return self._search(data,node.right)

        return False

    def find(self,data):
        if not self.root:
            return None

        return self._find(data,self.root)

    def _find(self,data,node):
        if data==node.val:
            return node
        elif data<node.val and node.left:
            return self._find(data,node.left)
        elif data>node.val and node.right:
            return self._find(data,node.right)

    def inOrder(self):
        if self.root:
            self._inOrder(self.root)

    def _inOrder(self,node):
        if node:
            self._inOrder(node.left)
            print(node.val)
            self._inOrder(node.right)

    #in one recursion function
    #def inOrder(self):
    #    if self.root:
    #        self.inOrder(self.root.left)
    #        print(self.root.val)
    #        self.inOrder(self,root.right)

    def preOrder(self):
        if self.root:
            self._preOrder(self.root)

    def _preOrder(self,node):
        if node:
            print(node.val)
            self._preOrder(node.left)
            self._preOrder(node.right)

    def postOrder(self):
        if self.root:
            self._postOrder(self.root)

    def _postOrder(self,node):
        if node:
            self._postOrder(node.left)
            self._postOrder(node.right)
            print(node.val)


bst=BinarySearchTree()
bst.insert(6)
bst.insert(1)
bst.insert(2)
bst.insert(8)
bst.insert(4)
bst.insert(10)
bst.inOrder()
>>
1
2
4
6
8
10
print(bst.height())
>>4
print(bst.search(6))
>>True
print(bst.search(100))
>>False
print(bst.find(6).val)
>>6
print(bst.find(100).val)
>>NoneType has no arribute

bst.fillRandom(5,10) #n=5,max=10
bst.inOrder()
bst.isValidBST()
```

Explanation of height():  

    insertion order [6,1,2,8,4,10]

           6
          / \
         1   8
          \   \
           2   10
            \
             4


        h(6,0)  4*
        |      \
    lh=h(1,1),  rh=h(8,1)
        |  4*        |  3*
    lh=h(N,2) 2   lh=h(N,2)
    rh=h(2,2) 4   rh=h(10,2)
        |  4         |  3
    lh=h(N,3) 3   lh=h(N,3)
    rh=h(4,3) 4   rh=h(N,3)
        |  4
    lh=h(N,4)
    rh=h(N,4)


**leetcode 98 - Validate Binary Search Tree [M] - [T/F]**  
valid: left<parent, right>parent  

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

Solution:  

    iV(5,-inf,inf)
      |                       \ F*
    iV(1,-inf,5),             iV(4,5,inf)    
      |       \                 F   4 not in [5,inf]
    iV(N,-inf,1),iV(N,1,inf)  
      T             T

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

## Problems

### Generate

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

### Recover

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

### Kth Smallest

**leetcode 230 - Kth Smallest Element in a BST [M]**  
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.  

Example 1:  
Input: root = [3,1,4,null,2], k = 1  

        3
       / \
      1   4
       \
        2

Output: 1  

Example 2:  
Input: root = [5,3,6,2,4,null,null,1], k = 3  

           5
          / \
         3   6
        / \
       2   4
      /
     1

Output: 3

Solution 1: recursion    
use 'global' class variable to record k-1, and result    
similar as inOrder    

```python
class Solution():
    def kthSmallest(self,root,k):
        self.k=k
        self.res=None
        self.helper(root)
        return self.res

    def helper(self,node):
        if not node:
            return

        self.helper(node.left)
        self.k-=1
        if self.k==0:
            self.res=node.val
            return
        self.helper(node.right)
```

Solution 2: iteration+stack  
append all lefts to stack, pop one, and append right's all left  

1. put all the left nodes into a stack  
2. pop one as cur node, k-=1
3. if k!=0, root=cur node.right
4. if root, append root's all left

root = [5,3,6,2,4,null,null,1], k = 4

          5
         / \
        3   6
       / \
      2   4
     /
    1

    while 0:
      stack=[5,3,2,1
      root=1
      k=4-1=3
      root=1.right=None
    while 1:
      no while root, cuz root=None
      stack=[5,3,2
      root=2
      k=2
      root=2.right=None
    while 2:
      no while root
      stack=[5,3
      root=3
      k=1
      root=3.right=4
    while 3:
      stack=[5,4
      root=4
      k=0, return 4

```python
class Solution():
    def kthSmallest(self,root,k):
        stack=[]
        while True:
            while root:
                stack.append(root)
                root=root.left
            root=stack.pop()
            k-=1
            if k==0:
                return root.val

            root=root.right
```

### Ancestor  

**leetcode 235 - Lowest Common Ancestor of a Binary Search Tree [E]**  
Given a bst, find the LCA of two given nodes in the BST.  

LCA is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)  

Example:  
Input: Given root=[6,2,8,0,4,7,9,null,null,3,5], p=2, q=8

            6
           / \
          2   8
         / \ / \
        0  4 7  9
          / \
         3   5

Output: 6
Input: same tree, p=2, q=4  
Output: 2  

Solution:  
if p and q both < root, should recurse in left child  
if p and q both > root, should recurse in right child  

      2, 8  !> and !< 6 -> return root 6
      2, 4  < 6,  recurse root to root.left 2
      2, 4  !> and !< 6 -> return root 2

```python
class Solution():
    def lowestCommonAncestor(self,root,p,q):
        if p.val>root.val and q.val>root.val:
            return self.lowestCommonAncestor(root.right,p,q)
        if p.val<root.val and q.val<root.val:
            return self.lowestCommonAncestor(root.left,p,q)

        return root
```

**leetcode 236 - Lowest Common Ancestor of a Binary Tree [M]**  
Example:  
Input: Given root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=1  

            3
           / \
          5   1
         / \ / \
        6  2 0  8
          / \
         7   4

Output: 3  
Input: same tree, p=5, q=4   
Output: 5    

Note: All of the nodes' values will be unique, and p and q are different and must exist in the tree  

```python
class Solution():
    def lowestCommonAncestor(self,root,p,q):
        if not root or q==root or p==root:
            return root  

        left=self.lowestCommonAncestor(root.left,p,q)
        right=self.lowestCommonAncestor(root.right,p,q)

        if left and right:
            return root

        return left or right
```
