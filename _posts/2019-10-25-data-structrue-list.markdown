---
layout: single
type: posts
title:  "Data Structure 1 - list"
date:   2019-10-23 20:48:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### list minmax

leetcode 121 - Best Time to Buy and Sell Stock (Once) [E] <br/>
note: record min and max <br/>

Example 1: <br/>
Input: [7,1,5,3,6,4] <br/>
Output: 5 <br/>
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price. <br/>
Example 2: <br/>
Input: [7,6,4,3,1] <br/>
Output: 0 <br/>
Explanation: In this case, no transaction is done, i.e. max profit = 0. <br/>
```python      
class Solution(object):
    def maxProfit(self,p):
        minp=p[0]
        maxp=0 #maxprofit
        for i in p:
            if i<minp:
                minp=i
            elif i-minp>maxp:
                maxp=i-minp
        return maxp 
```
