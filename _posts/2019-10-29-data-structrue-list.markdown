---
layout: single
type: posts
title:  "Data Structure 1 - list"
date:   2019-10-29 11:46:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

### Find Sequence

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

### Clockwise Circle
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
