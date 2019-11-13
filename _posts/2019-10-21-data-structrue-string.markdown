---
layout: single
type: posts
title:  "Data Structure 4 - string"
date:   2019-10-26 12:23:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - String
  - Palindrome
  - Dfs
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

1. check if char is alphabet/alphabet or numeric/numeric  
```python
s='abc123'  
s.isalpha() -> False     
s.isalnum() -> True  
s.isnumeric() -> False  
```

2. remove white spaces before and after  
```python
s='  lajdflak    '  
s.strip() #remove both  
s.lstrip() #remove left    
s.rstrip() #remove right   
```

3. swtich to upper case and lower case  
```python
s='aBcDeFg'  
s.lower() -> s='abcdefg'  
s.upper() -> s='ABCDEFG'  
```

4. generate lower/uppercase string  
```python
import string  
string.ascii_lowercase  
string.ascii_uppercase  
```

5. split  
```python
s='the sky is blue'
s.split() -> ['the', 'sky', 'is', 'blue']
```

### Reverse  

**leetcode 151 - Reverse Words in a String [M]**  
Example 1:  
Input: "the sky is blue"  
Output: "blue is sky the"  

Example 2:  
Input: "  hello world!  "  
Output: "world! hello"  
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:  
Input: "a good   example"  
Output: "example good a"  
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.  

```python
class Solution():
    def reverseWords(self, s):
        words=s.split()

        return " ".join(words[::-1])
```


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

**leetcode 131 - Palindrome Partitioning [M] - dfs** see [dfs]()
