---
layout: single
type: posts
title:  "Data Structure 4 - string"
date:   2019-10-26 12:23:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

1. check if char is alphabet/alphabet or numeric/numeric
s='abc123'  
s.isalpha() -> False     
s.isalnum() -> True  
s.isnumeric() -> False  

2. remove white spaces before and after  
s='  lajdflak    '  
s.strip() #remove both  
s.lstrip() #remove left    
s.rstrip() #remove right   

3. swtich to upper case and lower case  
s='aBcDeFg'  
s.lower() -> s='abcdefg'  
s.upper() -> s='ABCDEFG'  

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
