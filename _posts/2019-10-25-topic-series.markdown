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

leetcode 121 - Best Time to Buy and Sell Stock (Once) [E] <br/>
point: record min and max <br/>

Example: <br/>
Input: [7,1,5,3,6,4] <br/>
Output: 5 <br/>
Explanation: Buy on 1 and sell on 6, profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price. <br/>
```python      
class Solution(object):
    def maxProfit(self,p):
        if not p:
            return 0

        minp=p[0]
        maxp=0 #maxprofit
        for i in p:
            if i<minp:
                minp=i
            elif i-minp>maxp:
                maxp=i-minp

        return maxp
```

leetcode 122 - Best Time to Buy and Sell Stock II (Multiple) [E] <br/>

Example: <br/>
Input: [7,1,5,3,6,4] <br/>
Output: 7 <br/>
Explanation: Buy on 1 and sell on 5, profit = 5-1 = 4. Then buy on 3 and sell on 6, profit = 6-3 = 3. <br/>

```python      
class Solution(object):
    def maxProfit(self,p):
        res=0
        if not p:
            return res

        for i in range(len(p)-1):
            if p[i]<p[i+1]:
                res+=p[i+1]-p[i]

        return res
```
