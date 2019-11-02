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
    inita:  [1,1,1,1,1,1,1,1,1,1,1]      
    can->:  [1,2,1,1,1,2,3,4,1,2,1] (1<8, 2<3, 3<5, 5<6, 2<3)  
    can<-:  [1,4,3,2,1,2,3,4,1,2,1] (6>2, 6>2, 7>6, 8>7)  

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
