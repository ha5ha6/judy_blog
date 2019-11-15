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
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

**Time Complexity O(log n)**

### Find Peak

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
