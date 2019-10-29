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

### Palindrome

**leetcode 125 - Valid Palindrome [E]**   
Example 1:  
Input: "A man, a plan, a canal: Panama"  
Output: true  
Example 2:  
Input: "race a car"  
Output: false  
```python
class Solution():
    def isPalindrome(self, s):
        news=[a for a in s.lower() if a.isalnum()]

        return news==news[::-1]
```   
