---
layout: single
type: posts
title:  "OThers 3 - regex"
date:   2019-11-18 22:15:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Others
  - regex
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### command  

**leetcode 193 - Valid Phone Numbers [E]**  
Given a text file file.txt that contains list of phone numbers (one per line), write a one liner bash script to print all valid phone numbers.  
You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)  
You may also assume each line in the text file must not contain leading or trailing white spaces.

Example:  
Assume that file.txt has the following content:  
987-123-4567  
123 456 7890  
(123) 456-7890  
Your script should output the following valid phone numbers:  
987-123-4567  
(123) 456-7890  

```python
awk '/^([0-9]{3}-|\([0-9]{3}\))[0-9]{3}-[0-9]{3}$/' file.txt
#or
sed -n -r '/^([0-9]{3}-|\([0-9]{3}\))[0-9]{3}-[0-9]{3}$/p' file.txt
#or
grep -P '^(\d{3}-|\(\d{3}\))\d{3}-\d{4}$' file.txt
```

### python re

```python
import re
pattern1=re.compile(r'\d\d\d[-]\d\d\d[-]\d\d\d\d')
pattern2=re.compile(r'\(\d\d\d\) \d\d\d[-]\d\d\d\d')

with open('phonenum.txt','r') as f:

    contents=f.read()

    matches1=pattern1.findall(contents)
    matches2=pattern2.findall(contents)

    for m in matches1+matches2:
        print(m)
```
