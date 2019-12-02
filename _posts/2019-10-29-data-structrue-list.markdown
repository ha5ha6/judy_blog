---
layout: single
type: posts
title:  "Data Structure 1 - list"
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

### Definition  
subarray -   
subsequence -  
substring -

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



### Real World Problem
**leetcode 134 - Gas Station [M]**   
Input:     
gas  = [1,2,3,4,5]  
cost = [3,4,5,1,2]  
Output: 3  

Explanation:  
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4  
Travel to station 4. Your tank = 4 - 1 + 5 = 8  
Travel to station 0. Your tank = 8 - 2 + 1 = 7  
Travel to station 1. Your tank = 7 - 3 + 2 = 6  
Travel to station 2. Your tank = 6 - 4 + 3 = 5  
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.  
Therefore, return 3 as the starting index.  

Solution:  
1. if total > 0, can fill the circle  

```python
class Solution():
    def canCompleteCirsuit(self,gas,cost):
        tank,start,total=0,0,0
        for i in range(len(gas)):
            balance=gas[i]-cost[i]
            tank+=balance
            total+=balance
            if tank<0:
                start=i+1
                tank=0

        return -1 if total<0 else start
```

**leetcode 135 - Candy [H]**  
Giving at least one candy to every kid, higher score one gets more.  
What is the number of minimum candies should be distributed?  

Example 1:  
Input: [1,0,2]  
Output: 5  
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.  

Example 2:  
Input: [1,2,2]  
Output: 4  
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively. The third child gets 1 candy because it satisfies the above two conditions.  

Solution:  
1. initialize with [1]xlen(ratings)  
2. from left to right, if cur>onebefore, cur=onebefore+1, cur start from index:1 to len-1
3. from right to left, if cur>oneafter, cur=max(oneafter+1,cur), cur start from index:len-2 to 0
Say   

    index:  [0,1,2,3,4,5,6,7,8,9,10]  
    input:  [1,8,7,6,2,3,5,6,2,3,1]     
    initial:  [1,1,1,1,1,1,1,1,1,1,1]      
    l2r->:  [1,2,1,1,1,2,3,4,1,2,1] (1<8, 2<3, 3<5, 5<6, 2<3)  
    r2l<-:  [1,4,3,2,1,2,3,4,1,2,1] (6>2, 6>2, 7>6, 8>7)  

Note:  
1. in candy<- case 2<3>1 can be omitted because it's the last one, should start from index:8 (len-2)  
2. in candy<- case 5<6>2, input element <6>=input[idx=7], 4=max(1+1,4), oneafter+1<cur
3. in candy<- case 7<6>2, input element <6>=input[idx=3], 2=max(1+1,1), oneafter+1>cur
4. in candy<- case 8>7>6, input element <7>=input[idx=2], 3=max(2+1,1), oneafter+1>cur
5. in candy<- case 1<8>7, input element <8>=input[idx=1], 4=max(3+1,2), oneafter+1>cur  

```python
class Solution(object):
    def candy(self, ratings):
        candy=[1 for i in range(len(ratings))]

        #left to right
        for i in range(1,len(ratings)):
            if ratings[i]>ratings[i-1]:
                candy[i]=candy[i-1]+1

        #right to left
        for i in range(len(ratings)-2,-1,-1):
            if ratings[i]>ratings[i+1]:
                candy[i]=max(candy[i+1]+1,candy[i])

        return sum(candy)
```
