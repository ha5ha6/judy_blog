---
layout: single
type: posts
title:  "Topics 2 - multiple answers"
date:   2019-12-16 23:56:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - MinMax
  - Bfs
  - Dfs
  - DP
  - Recursion
  - Topics
  - Hash Table
  - Binary Search
  - N-Sum
  - Sorting
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### Majority Elements  

**leetcode 169 - Majority Element [E]**  
[Hash, Set, Counter, Sort, Randomization, Divide n Conquer, Moore Voting, Bit Manipulation]  

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.  
Examples:  
Input: [3,2,3]  
Output: 3  
Input: [2,2,1,1,1,2,2]  
Output: 2  

Solution 1 - Brute - Time O(n^2), Space O(1):  

```python  
class Solution():
    def majorityElement(self, nums):
        for n in nums:
            cnt=sum(1 for i in nums if i==n)
            print(n,cnt)
            if cnt>len(nums)//2:
                return n

Output (n,cnt):
2 4
2 4
1 3
1 3
1 3
2 4
2 4
```

Solution 2.1 - Hash - Time O(n):

```python  
class Solution():
    def majorityElement(self, nums):
        cnt={}
        for n in nums:
            if n not in cnt:
                cnt[n]=1
            else:
                cnt[n]+=1
            #or
            #cnt[n] = cnt.get(n, 0) + 1

            if cnt[n]>len(nums)//2:
                return n
```

Solution 2.2 - Hash,Counter - Time O(n), Space O(n):

```python  
class Solution():
    def majorityElement(self, nums):
        cnt=collections.Counter(nums)
        return max(cnt.keys(),key=cnt.get)
```

Solution 3 - Set

```python  
class Solution():
    def majorityElement(self, nums):
        nset=set(nums)
        for n in nset:
            if nums.count(n)>len(nums)//2:
                return n
```

Solution 4 - Sort - Time O(nlogn), Space O(1) or O(n):

```python  
class Solution():
    def majorityElement(self, nums):
        nums.sort()
        return nums[len(nums)//2]
```

Solution 5 - Randomization - Time O(inf):

```python  
import random
class Solution():
    def majorityElement(self, nums):
        while True:
            candidate=random.choice(nums)
            if sum(1 for i in nums if i==candidate)>len(nums)//2:
                return candidate
```

Solution 6 - Divide n Conquer - Time O(nlogn), Space O(logn):  

```python  
class Solution():
    def majorityElement(self, nums):
        return self.dnc(nums,0,len(nums)-1)

    def dnc(self,nums,left,right):
        if left==right:
            return nums[left]

        mid=(left+right)//2
        new_left=self.dnc(nums,left,mid)
        new_right=self.dns(nums,mid+1,right)
        if new_left==new_right:
            return new_left

        return new_left if nums[left:right+1].count(new_left)>nums[left:right+1].count(new_right) else new_right
```

**olution 7 (Best) - Boyer-Moore Voting** - Time O(n), Space O(1):  
use a counter, cnt+=1 if encountering same element, else cnt-=1   
when cnt==0, change candidate

```python
class Solution():
    def majorityElement(self, nums):
        cnt=0
        candidate=None
        for n in nums:
            if cnt==0:
                candidate=n
            cnt+=(1 if n==candidate else -1)

        return candidate
```

Solution 8 - Bit Manipulation: see [ref](https://blog.csdn.net/coder_orz/article/details/51407713)

```python
class Solution():
    def majorityElement(self, nums):
        major=0
        mask=1
        for i in range(0,32):
            cnt=0
            for j in nums:
                if j&mask:
                    cnt+=1
                    if cnt>len(nums)//2:
                        major|=mask
                        break
            mask<<=1

        return major if major>>31==0 else major-(1<<32)
```

**leetcode 229 - Majority Element II [M]**   
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.  
Note: The algorithm should run in linear time and in O(1) space.  

Example 1:  
Input: [3,2,3]  
Output: [3]  
Example 2:  
Input: [1,1,1,3,3,2,2,2]  
Output: [1,2]  

**Best Solution Boyer-Moore Voting** - Time O(n), Space O(1):  
find the element cnt first reach 0, switch candidate for the new number    

```python
class Solution():
    def majorityElement(self, nums):
        cand1, cnt1=None,0
        cand2, cnt2=None,0

        for n in nums:
            if n==cand1:
                cnt1+=1
            elif n==cand2:
                cnt2+=1
            elif cnt1==0:
                cand1=n
                cnt1=1
            elif cnt2==0:
                cand2=n
                cnt2=1
            else:
                cnt1-=1
                cnt2-=1

        return [n for n in (cand1,cand2) if nums.count(n)>len(nums)//3]
```

### Kth Largest/Smallest Element  

**leetcode 215 - Kth Largest in an Array [M]**  
Find the kth largest element in an unsorted array, note: not the kth distinct element.  

Examples:  
Input: [3,2,1,5,6,4] and k=2  
Output: 5  
Input: [3,2,3,1,2,4,5,5,6] and k=4  
Output: 4  

Solution 1: sorting, TO(nlogn), SO(1)

```python
class Solution():
    def findKthLargest(self,nums,k):

        return sorted(nums,reverse=True)[k-1]
```

Solution 2: max heap, TO(nlogk), SO(k)  

```python
from heapq import *
class Solution():
    def findKthLargest(self,nums,k):

        if not nums:
            return -1

        h=[]
        for i in range(len(nums)):
            if len(h)<k:
                heappush(h,nums[i])
            else:
                if h[0]<nums[i]:
                    heappop(h)
                    heappush(h,nums[i])

        return h[0]
```

Solution 3: quick select, T: avg O(n), worst O(n^2), SO(1)  

```python
import random
class Solution():
    def findKthLargest(self,nums,k):

        pivot=random.choice(nums)
        nums1,nums2=[],[]
        for n in nums:
            if n>pivot:
                nums1.append(n)
            elif n<pivot:
                nums2.append(n)

        if k<=len(nums1):
            return self.findKthLargest(nums1,k)
        if k>len(nums)-len(nums2):
            return self.findKthLargest(nums2,k-(len(nums)-len(nums2)))

        return pivot
```

Solution 4: quick select partition  

```python
import random
class Solution():
    def findKthLargest(self,nums,k):

        k=len(nums)-k
        left,right=0,len(nums)-1
        while True:
            idx=self.partition(nums,left,right)
            if idx==k:
                return nums[idx]
            if idx>k:
                right=idx-1
            else:
                left=idx+1

    def partition(self,nums,left,right):

        ran_idx=random.randint(left,right)
        ran_entry=nums[ran_idx]
        nums[ran_idx],nums[right]=nums[right],nums[ran_idx]

        next_lower=left
        for i in range(left,right):
            if nums[i]<=ran_entry:
                nums[next_lower],nums[i]=nums[i],nums[next_lower]
                next_lower+=1

        nums[next_lower],nums[right]=nums[right],nums[next_lower]

        return next_lower
```

**leetcode 230 - Kth Smallest in a BST [M]** see [bst #Kth smallest](https://ha5ha6.github.io/judy_blog/programming/2019/10/21/data-structrue-bst.html#kth-smallest)
