---
layout: single
type: posts
title:  "ALgorithms 2 - binary search"
date:   2019-11-13 23:16:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Binary Search
  - N-Sum
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

**Time Complexity O(log n)**

### Find Peak in Array

**leetcode 153 - Find Minimum in Rotated Sorted Array [M]**  
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand, find the minimum element  

Example 1:  
Input: [3,4,5,1,2]  
Output: 1  

Example 2:  
Input: [4,5,6,7,0,1,2]  
Output: 0  

Solution:  
1. create left=0 and right=len-1  
2. check if already sorted, nums[0]<nums[-1]  
3. mid=(left+right)//2, move left to mid+1 if nums[mid]>nums[right]  
4. else move right to mid  


        idx: 0 1 2 3 4 5 6
        num: 4,5,6,7,0,1,2    mid=(0+6)//2=3
             l     m     r    
                     l   r    l=mid+1 if num[m]>num[r]
                     res      res=l   if num[l]<=num[r]

        idx: 0 1 2 3 4 5 6
        num: 6,0,1,2,3,4,5
             l     m     r    
             l m   r          r=mid   if num[m]<num[r]  mid=(0+3)//2=1
           l/m r              r=mid   if num[m]<num[r]  mid=(0+1)//2=0
               l              l=mid+1 if num[m]>num[r]
               res            res=l   if num[l]<=num[r]

```python
class Solution():
    def findMin(self,nums):
        left,right=0,len(nums)-1
        while left<right:
            #check if already sorted
            if nums[left]<=nums[right]:
                break

            mid=(left+right)//2
            if nums[mid]>nums[right]:
                left=mid+1
            else:
                right=mid

        return nums[left]
```  

**leetcode 154 - Find Minimum in Rotated Sorted Array II - have dups [H]**  
Example 1:  
Input: [1,3,5]  
Output: 1  

Example 2:  
Input: [2,2,2,0,1]  
Output: 0  

Solution:  
1. a bit change from leetcode 153, make sure nums[left]<nums[right]: break  
2. check if nums[mid]>nums[right]: move left to mid+1  
3. check if nums[mid]<nums[right] or nums[left]>nums[mid]: move right to mid to avoid all-same array  
4. else: left+=1, right-=1, scan all to confirm it's an all-same array      


        idx: 0 1 2 3 4 5 6
        num: 3,2,2,2,0,1,1
             l     m     r
                     l   r
                     res

        idx: 0 1 2 3 4 5 6
        num: 3,0,0,1,1,2,2
             l     m     r
             l m   r
           l/m r
               l
               res

        idx: 0 1 2 3 4 5 6
        num: 1,2,3,0,0,0,0
             l     m     r
             l m   r         cuz num[l]>num[m]  
               l/m r
                   l
                   res

```python
class Solution():
    def findMin(self,nums):
        left,right=0,len(nums)-1
        while left<right:
            #check if already sorted
            if nums[left]<nums[right]:
                break

            mid=(left+right)//2
            if nums[mid]>nums[right]:
                left=mid+1
            elif nums[mid]<nums[right] or nums[left]>nums[mid]:
                right=mid
            else:  #all-same array
                left+=1    
                right-=1

        return nums[left]
```  

**leetcode 162 - Find Peak Element [M] - return one possible result is fine**  
A peak element is an element that is greater than its neighbors.  

Example 1:  
Input: nums = [1,2,3,1]  
Output: 2  
Explanation: 3 is a peak element and your function should return the index number 2.  

Example 2:  
Input: nums = [1,2,1,3,5,6,4]  
Output: 1 or 5   
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.  

Example 2 Solution:  
1. create left and right  
2. find mid and compare mid to its neighbors mid-1,mid+1  
3. if mid_value >= mid-1_value and mid_value >=mid+1_value return mid  
4. point l,r to larger values:  
elif mid_value < mid+1_value, l=mid+1, else r=mid-1  


        0 1 2 3 4 5 6
        1,2,1,3,5,6,4
        l     m     r  3<5 : nums[m]<nums[m+1]
                l m r
                  res  

        0 1 2 3 4 5 6
        1,2,4,3,2,6,4
        l     m     r
        l m r
            |
          l/m/r


```python
class Solution():
    def findPeakElement(self, nums):
        left,right=0,len(nums)-1
        while left<right:
            mid=(left+right)//2
            if nums[mid-1]<=nums[mid] and nums[mid]>=nums[mid+1]:
                return mid

            if nums[mid]<nums[mid+1]:
                left=mid+1
            else:
                right=mid-1

       #if len < 3
       if nums[left]>=nums[right]:
            return left

       return right
```

### Find Element in Matrix  

**leetcode 74 - Search a 2D Matrix [M]**  
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:  
Integers in each row are sorted from left to right.  
The first integer of each row is greater than the last integer of the previous row.  

Example 1:  
Input:  
matrix = [
  [1,   3,  5,  7],  
  [10, 11, 16, 20],  
  [23, 30, 34, 50]]  
target = 3  
Output: true  

Example 2:  
Input:  
matrix = [  
  [1,   3,  5,  7],  
  [10, 11, 16, 20],  
  [23, 30, 34, 50]]    
target = 13  
Output: false  

Solution: TO(logm+logn)    
since elements are still in order when matrix been flattened  
can do binary search in 0 to rows*cols-1, of sub2num  

```python
class Solution():
    def searchMatrix(self,matrix,target):
        if not matrix or not matrix[0]:
            return False

        rows,cols=len(matrix),len(matrix[0])
        left,right=0,rows*cols-1

        while left<=right:
            mid=(left+right)//2
            val=matrix[mid//cols][mid%cols]
            if target==val:
                return True
            elif target>val:
                left=mid+1
            else:
                right=mid-1

        return False
```

**leetcode 240 - Search a 2D Matrix II [M]**  
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:  
Integers in each row are sorted in ascending from left to right.  
Integers in each column are sorted in ascending from top to bottom.  

Example:
Consider the following matrix:
[  
  [1,   4,  7, 11, 15],  
  [2,   5,  8, 12, 19],  
  [3,   6,  9, 16, 22],  
  [10, 13, 14, 17, 24],  
  [18, 21, 23, 26, 30]]  

Given target = 5, return true.  
Given target = 20, return false.  

Solution: TO(m+n)   
start searching from (0,4) - 15*  
find target=12:

    [1,   4,  7, 11,  15*]
                  ^ <- ^    15>target, c-1 (0,3)
    [2,   5,  8, 12,  19]   11<target, r+1 (1,3)  
                  ^
    [3,   6,  9, 16,  22]  
    [10, 13, 14, 17,  24]


find target=10:  

    [1,   4,   7,   11,  15*]
               ^ <- ^ <- ^    15>target, c-1 (0,3)
    [2,   5,   8,   12,  19]  11>target, c-1 (0,2)  
               ^              7<target, r+1 (1,2)
    [3,   6,   9,   16,  22]  8<target, r+1 (2,2)
               ^              9<target, r+1 (3,2)
    [10,  13,  14,  17,  24]  14>target, c-1 (3,1)
     ^ <- ^ <- ^              13>target, c-1 (3,0)

```python
class Solution():
    def searchMatrix(self,matrix,target):
        if not matrix or not matrix[0]:
            return False

        rows,cols=len(matrix),len(matrix[0])
        r,c=0,cols-1
        while r<rows and c>=0:
            if matrix[r][c]==target:
                return True
            if matrix[r][c]<target:
                r+=1
            else:
                c-=1

        return False
```

### Two Sum

**leetcode 167 - Two Sum II - Input array is sorted [E]**  
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number  
Note: return indices are not zero-based  

Example:  
Input: nums=[2,7,11,15], target=9  
Output: [1,2]


    0 1  2  3
    2,7,11,15
    l       r  2+15>tar
    l    r     2+11>tar
    l r        2+7=tar return


```python
class Solution():
    def twoSum(self,nums,tar):
        left,right=0,len(nums)-1
        while True:
            pair_sum=nums[left]+nums[right]
            if pair_sum == tar:
                return [left+1,right+1]

            if pair_sum < tar:
                left+=1
            else:
                right-=1
```

### Count Tree Nodes  

**leetcode 222 - Count Complete Tree Nodes [M]**  

Given a **complete binary tree**, count the number of nodes.  
Definition of a complete binary tree from Wikipedia:  
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2^h nodes inclusive at the last level h.  

Input:

        1
       / \
      2   3
     / \  /
    4  5 6

Solution 2: binary search check later!!

```python  
class Solution():
    def countNodes(self,root):
        if not root:
            return 0

        d=self.depth(root)
        if d==0:
            return 1

        left,right=1,2**d-1
        while left<=right:
            mid=(left+right)//2
            if self.exists(mid,d,root):
                left=mid+1
            else:
                right=mid-1

        return (2**d-1)+left

    def depth(self,node):
        depth=0
        while node.left:
            node=node.left
            depth+=1

        return depth

    def exists(self,idx,d,node):
        left,right=0,2**d-1
        for i in range(d):
            mid=(left+right)//2
            if idx<=mid:
                node=node.left
                right=mid
            else:
                node=node.right
                left=mid+1

        return node is not None
```

### H-Index  

**leetcode 275 - H-index II [M]**
Given an array of sorted citations of a researcher, write a function to compute the researcher's h-index  
h-index: a scientist has index h if h of his/her N papers have at least h citations each, and the other N-h papers have no more than h citations each  

Input: citations=[0,1,3,5,6]  
Output: 3  

Solution:  

    0   1   2   3   4
    0,  1,  3,  5,  6
    l       m       r    n-mid=5-2=3
    l/m r                n-mid=5-0=5
        l/m/r            n-mid=5-1=4        
            l              

```python
class Solution():
    def hIndex(self,citations):
        n=len(citations)
        l,r=0,n-1
        while l<=r:
            mid=(l+r)//2
            if citations[mid]>=n-mid:
                r=mid-1
            else:
                l=mid+1

        return n-l
```
