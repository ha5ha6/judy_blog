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

leetcode 94 - Binary Tree Inorder Traversal [M] <br/>
leetcode 102 - Binary Tree Level Order Traversal [M] <br/>
leetcode 103 - Binary Tree Zigzag Level Order Traversal [M] <br/>
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

leetcode 108 - Convert Sorted Array to Binary Search Tree [E] <br/>
leetcode 105 - Construct Binary Tree from Preorder and Inorder Traversal [M] <br/>
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

leetcode 100 - Same Tree [E] - [T/F] <br/>
leetcode 101 - Symmetric Tree [E] - [T/F] <br/>
leetcode 110 - Balanced Binary Tree [E] <br/>
leetcode 112 - Path Sum [E] <br/>
leetcode 113 - Path Sum II [M]
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
        
    #leetcode 112
    def hasPathSum(self,root,sum):
        if not root:
            return False
            
        sum-=root.val
        if sum==0 and not root.left and not root.right:
            return True
            
        return self.hasPathSum(root.left,sum) or self.hasPathSum(root.right,sum)
        
    #leetcode 113
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
