---
layout: single
type: posts
title:  "Topic Series - Composite"
date:   2019-10-25 15:58:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### Best Time Buy n Sell

leetcode 121 - Best Time to Buy and Sell Stock (Once) [E] - record min and max <br/>

Example: <br/>
Input: [7,1,5,3,6,4] <br/>
Output: 5 <br/>
Explanation: Buy on 1 and sell on 6, profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price. <br/>
Solution 1 - straightforward understandable <br/>
```python      
class Solution1(object):
    def maxProfit(self,prices):
        if not prices:
            return 0

        minp=prices[0]
        maxp=0 #maxprofit
        for p in prices:
            if p<minp:
                minp=p
            elif p-minp>maxp:
                maxp=p-minp

        return maxp
```
Solution 2 - advanced <br/>
Input: [7,1,5,3,6,4] <br/>
minp <- find the min price, and remember it <br/>
maxp <- find the max of p-minp, and remember it <br/>
(minp,maxp) = <br/>
(7, 0) <br/>
(1, 0) <br/>
(1, 4) <br/>
(1, 4) <br/>
(1, 5) <br/>
(1, 5) <br/>
```python      
class Solution2(object):
    def maxProfit(self,prices):
        minp=float('inf')
        maxp=0
        for p in prices:
            minp=min(p,minp)
            maxp=max(p-minp,maxp)

        return maxp
```

leetcode 122 - Best Time to Buy and Sell Stock II (Multiple) [E] <br/>

Example: <br/>
Input: [7,1,5,3,6,4] <br/>
Output: 7 <br/>
Explanation: Buy on 1 and sell on 5, profit = 5-1 = 4. Then buy on 3 and sell on 6, profit = 6-3 = 3. <br/>
```python      
class Solution(object):
    def maxProfit(self,prices):
        res=0
        if not prices:
            return res

        for i in range(len(prices)-1):
            if prices[i]<prices[i+1]:
                res+=prices[i+1]-prices[i]

        return res
```

leetcode 123 - Best Time to Buy and Sell Stock III (Twice) [H] - dp <br/>

Example: <br/>
Input: [3,3,5,0,0,3,1,4] <br/>
Output: 6 <br/>
Explanation: Buy on 0 and sell on 3, profit = 3-0 = 3. Then buy on 1 and sell on 4, profit = 4-1 = 3. <br/>

minp1 <- find the min price, and remember it <br/>
maxp1 <- find the max of p-minp, and remember it <br/>
minp2 <-  <br/>
maxp2 <-  <br/>
(minp,maxp) = <br/>
(7, 0) <br/>
(1, 0) <br/>
(1, 4) <br/>
(1, 4) <br/>
(1, 5) <br/>
(1, 5) <br/>
```python      
class Solution2(object):
    def maxProfit(self,prices):
        minp=float('inf')
        maxp=0
        for p in prices:
            minp=min(p,minp)
            maxp=max(p-minp,maxp)

        return maxp
```
