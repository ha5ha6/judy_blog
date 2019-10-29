---
layout: single
type: posts
title:  "Data Structure 2 - matrix"
date:   2019-10-29 18:00:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

### Board Game

**leetcode 130 - Surrounded Regions [M] - dfs**   
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.  
A region is captured by flipping all 'O's into 'X's in that surrounded region.  
Example:  

    X X X X
    X O O X
    X X O X
    X O X X

After running your function, the board should be:  

    X X X X
    X X X X
    X X X X
    X O X X
    
Note:  
border O and adjacent border O cannot be flipped  

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
