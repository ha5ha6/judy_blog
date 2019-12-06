---
layout: single
type: posts
title:  "Data Structure 1 - array"
date:   2019-10-29 11:46:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - List
  - MinMax
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

## Background

### Definition  

An array data structure, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key.  
An array is stored **such that the position of each element can be computed from its index tuple by a mathematical formula**.    

For example, an array of 10 32-bit (4 bytes) integer variables, with indices 0 through 9, may be stored as 10 words at memory addresses 2000, 2004, 2008, ... 2036, so that the element with index i has the address 2000 + (i × 4).  

Array can be **referred and implemented** to:  
a linear array, 1d array, vector, tuples, tables, lookup tables, ...

Arrays are also used to implement many **other data structures**, such as:   
lists, strings,

They effectively exploit the addressing logic of computers.

In Python, Array = list - resizable (append and delete)  
In Java, Array - fixed length, ArrayList - dynamic resizing, TO(1) access (amortized)  

subarray -   
subsequence -  
substring -

### Basic Operations

1. find() - TO(n) - find an element, i.e. [arr[i] for i in range(arr) if i...]
2. find_first() - TO(1) - access first element, i.e. arr[0]
3. find_last() - TO(1) - access last element, i.e. arr[-1]
4. find_arbitrary() - TO(1) - access an element at an arbitrary index, i.e. arr[i]
5. insert_front() - TO(n) - insert to front
6. insert_back() - TO(logn)?? - insert to back =? append()
7. insert_arbitrary() - TO(n) - insert at an arbitrary index
8. delete_front() - TO(n)
9. delete_back() - TO(logn)
10. delete_arbitrary() - TO(n)
11. resize()??? - O(n) - resizing backing array???
12. len() - TO(logn)
13. isEmpty() - TO(1)
14. min()/max() - TO(n)??
15. kthLargest()/kthSmallest() - TO(n)/TO(n^2) (random pivot selection method), TO(n) (median of medians pivot selection method)
16. find_median() - TO(n) (kth selection)

**Python List - built-in** see [python built-in #list](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#list)  

1. l.append(ele) - addition elements **at the end of the list**  
2. l.insert(pos, ele) - addition elements at the desired position
3. l.extend(l2) - add list 2 to the end of list 1
4. sum(l) - only for numertic values
5. len(l)
6. l.count(ele) - calculates total occurrence of given element
7. l.index(ele, start, end) - return the index of the first occurrence
8. min(l) / max(l)
9. l.sort() / sorted(l) - sort in ascending order, descending order if reverse=True
10. l.reverse()
10. l.pop(idx) - take index, default: show and delete the last element
11. l.remove(ele) - delete the first occurrence
12. del - del l[idx], i.e. del l[3:5]
13. l.clear() - erase all
14. l.copy()

### Implementation

**Dynamic Array in Python**  see [dynamic array in python](https://www.geeksforgeeks.org/implementation-of-dynamic-array-in-python/)  

A dynamic array is similar to an array, but **with the difference that its size can be dynamically modified at runtime**.    
A dynamic array can, once the array is filled, allocate a bigger chunk of memory, copy the contents from the original array to this new space, and continue to fill the available slots.  

Steps:

1. create array with capacity=1, len start from 0
2. when appending new element, check if len==capacity  
if len!=cap, make a new array with cap=2*cap, copy old arr eles to new  
else arr[len]=new ele, increase len by 1  

          old arr: 1 2 3 4            old arr with refs
                   | | | |    
                   r r r r

          new arr: _ _ _ _ _ _ _ _    creating new arr

          new arr: 1 2 3 4 _ _ _ _    store elements from old arr to new arr

          new arr: 1 2 3 4 _ _ _ _    reassign ref from old to new
                   | | | |
                   r r r r

```python
import ctypes #c language types
class DynamicArray():

    def __init__(self):
        self.n=0
        self.capacity=1
        self.arr=self.make_array(self.capacity)

    def __len__(self):  #later check
        return self.n

    def __getitem__(self,i):
        if not 0<=i<self.n:
            return IndexError('i is out of bounds!')

        return self.arr[i]

    def append(self,ele):
        if self.n==self.capacity:
            self._resize(2*self.capacity)

        self.arr[self.n]=ele
        self.n+=1

    def _resize(self,new_size):
        new_arr=self.make_array(new_size)
        for i in range(self.n):
            new_arr[i]=self.arr[i]

        self.arr=new_arr
        self.capacity=new_size

    def make_array(self,new_size):
        return (new_size*ctypes.py_object)()
```

resizing factor??

## Problems

### Rotate  

**leetcode 189 - Rotate Array [E]**  
Given an array, rotate the array to the right by k steps, where k is non-negative.  
Example:  
Input: [1,2,3,4,5,6,7] and k = 3  
Output: [5,6,7,1,2,3,4]  
Explanation:  
rotate 1 steps to the right: [7,1,2,3,4,5,6]  
rotate 2 steps to the right: [6,7,1,2,3,4,5]  
rotate 3 steps to the right: [5,6,7,1,2,3,4]  

```python
class Solution():
    def rotate(self,k,nums):
        #in-place
        n=len(nums)
        nums[:]=nums[-k%n:]+nums[:n-k%n]
```

### Subsequence/Subarray

**leetcode 128 - Longest Consecutive Sequence [H]**   
Input: [100, 4, 200, 1, 3, 2]  
Output: 4  
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.  

Solution:
1. make a set for removing the repeated  
2. filter out non-head numbers using if-continue  
3. find the head number (which is 1 from the example) and collect the consecutive

```python
class Solution():
    def longestConsecutive(self, nums):
        nset=set(nums)
        longest=0
        for n in nset:
            if n-1 in nset:
                continue      #filter out non-head numbers
            seq=0
            while n in nset:  #find the head number and collect the consecutive
                seq+=1
                n+=1
            longest=max(longest,seq)

        return longest               
```   

**leetcode 152 - Maximum Product Subarray [M] - minmax**  
Example 1:  
Input: [2,3,-2,4]  
Output: 6  
Explanation: [2,3] has the largest product 6  

Example 2:  
Input: [-2,0,-1]  
Output: 0  
Explanation: The result cannot be 2, cuz [-2,-1] is not a subarray  

Solution:  
Calculate the most positive and most negative subarrary products ending at each element  
Either the element alone or multiplied by previous most positive and most negative

[4,-2,2,3] output:  

         n,   most_pos*n,        most_neg*n  
         4,     1*4=4,              1*4=4
        -2,    4*-2=-8,            4*-2=-8
         2,    -2*2=-4,            -8*2=-16   
              [-2=max(-2,-8,-8)]  [-8=min(-2,-8,-8)]
         3,     2*3=6,            -16*3=-48
               [2=max(2,-4,-16)] [-16=min(2,-4,-16)]


```python
class Solution():
    def maxProduct(self,nums):
        largest_product=float('-inf')
        most_p,most_n=1,1 #most positive and most negative
        for n in nums:
            most_p,most_n=max(n,most_p*n,most_n*n),min(n,most_p*n,most_n*n)
            largest_product=max(largest_product,most_p,most_n)

        return largest_product
```

**leetcode 209 - Minimum Size Subarray Sum [M] - two pointers / binary search**  
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.  

Example:   
Input: s = 7, nums = [2,3,1,2,4,3]  
Output: 2  
Explanation: the subarray [4,3] has the minimal length under the problem constraint.  
Follow up:  
O(n) - two pointers   
O(n log n) - binary search  

Solution 1: two pointers  
1. set left,right pointers at the beginning which is 0 index  
2. right++ and sum up all before right  
3. when sum>=target, len=min(len,right-left+1), len_ini=float('inf')  
4. start moving left, left++ and sum-=nums[left]  

```python
class Solution():
    def maxSubArrayLen(self,s,nums):
        left,right=0,0
        sum=0
        res=float('inf')
        while right<len(nums):
            sum+=nums[right]

            while sum>=s:
                res=min(res,right-left+1)
                sum-=nums[left]
                left+=1

            right+=1

        return res if res!=float('inf') else 0
```

Solution 2: binary search
1. make a sum list from 0 len=len(nums)+1  
2. l from index 1 of suml, search the suml element > s, return len=ele_index-l+1  
3. l from index 2 of suml, search the suml element-suml[l] > s, return l
4. ...

        origin 2, 3, 1, 2, 4, 3         s=7
        index  0  1  2  3  4  5  6   
        suml   2  5  6  8  12 15   find target=suml[0]-nums[0]+s=2-2+7=7
               l        ^          8>7
                  l        ^       find target=suml[1]-nums[1]+s=5-3+7=9
                     l     ^       find target=suml[2]-nums[2]+s=6-1+7=12
                        l     ^    find target=suml[3]-nums[3]+s=8-2+7=13
                           l  ^    find target=suml[4]-nums[4]+s=12-4+7=15


```python
class Solution():
    def minSubArrayLen(self,s,nums):
        suml=[n for n in nums]
        for i in range(1,len(nums)):
            suml[i]=suml[i-1]+nums[i]

        res=float('inf')
        for i in range(len(suml)):
            #the position of suml > target
            pos=self.binarysearch(i,len(suml),suml,suml[i]-nums[i]+s)
            if pos<len(suml):
                res=min(res,pos-i+1)

        return res if res!=float('inf') else 0

    def binarysearch(self,left,right,suml,target):

        while left<right:
            mid=(left+right)//2
            if suml[mid]<target:
                left=mid+1
            else:
                right=mid

        return left      
```


**leetcode 53 - Maximum Subarray**  
**leetcode - Maximum Size Subarray Sum Equals k**  
**leetcode 560 - Subarray Sum Equals K**  
**leetcode 718 - Maximum Length of Repeated Subarray [M]**  
**leetcode 713 - Subarray Product Less Than K []**  
