---
layout: single
type: posts
title:  "Data Structure 9 - tree"
date:   2019-10-21 23:18:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Tree Definition

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

### Tree Traversal

leetcode 94 - Binary Tree Inorder Traversal [M]

leetcode 102 - Binary Tree Level Order Traversal [M]

leetcode 103 - Binary Tree Zigzag Level Order Traversal [M]

leetcode 107 - Binary Tree Level Order Traversal II [E]

```python      
class BinaryTreeTraversal():
    #leetcode 94
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
        #leetcode 107
        #return res[::-1]
```

![](https://ha5ha6.github.io/judy_blog/assets/images/binarytreetraversal.jpg)

### Tree Construction

leetcode 108 - Convert Sorted Array to Binary Search Tree [E]

leetcode 105 - Construct Binary Tree from Preorder and Inorder Traversal [M]

leetcode 106 - Construct Binary Tree from Inorder and Postorder Traversal [M]

```python 
class TreeConstruction():
    #leetcode 108
    def sortedArrayToBST(self, nums):
        if len(nums)<1:
            return None      
        mid=len(nums)//2      
        root=TreeNode(nums[mid])
        root.left=self.sortedArrayToBST(nums[:mid])
        root.right=self.sortedArrayToBST(nums[mid+1:])
        
        return root

    #leetcode 105
    def buildTree(self, preorder, inorder):
        if not preorder or not inorder:
            return None

        root=TreeNode(preorder[0])
        idx=inorder.index(preorder[0])
        root.left=self.buildTree(preorder[1:idx+1],inorder[:idx])
        root.right=self.buildTree(preorder[idx+1:],inorder[idx+1:])

        return root
    
    #leetcode 106
    def buildTree(self, inorder, postorder):
        if not inorder or not postorder:
            return None

        root=TreeNode(postorder[-1])
        idx=inorder.index(postorder[-1])
        root.left=self.buildTree(inorder[:idx],postorder[:idx])
        root.right=self.buildTree(inorder[idx+1:],postorder[idx:-1])
        
        return root
```

### Tree Others

leetcode 100 - Same Tree [E] - [T/F]

leetcode 101 - Symmetric Tree [E] - [T/F]

leetcode 110 - Balanced Binary Tree [E]

```python  
class TreeOthers():
    #leetcode 100
    def isSameTree(self, p, q):
        if not p and not q:
            return True      
        if not p or not q:
            return False        
        if p.val!=q.val:
            return False
        
        return self.isSameTree(p.left,q.left) and self.isSameTree(p.right,q.right)
    
    #leetcode 101
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
        
    #leetcode 110
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

### Binary Search Tree

leetcode 95 - Unique Binary Search Trees II [M] - generate

leetcode 98 - Validate Binary Search Tree [M] - [T/F]

leetcode 99 - Recover Binary Search Tree [M] - swap by mistake 

```python
class BinarySearchTree():
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
        
    #leetcode 98    
    def isValidBST(self, root):
       
        return self.isValid(root,float('-inf'),float('inf'))

    def isValid(self,node,left,right):
        if not node:
            return True
        if node.val<=left or node.val>=right:
            return False

        return self.isValid(node.left,left,node.val) and self.isValid(node.right,node.val,right)
        
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
    
