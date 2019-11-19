---
layout: single
type: posts
title:  "OThers 13 - file"
date:   2019-11-18 22:13:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Others
  - file
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

**leetcode 192 - Word Frequency [M]**  

**leetcode 194 - Transpose File [M]**

**leetcode 195 - Tenth Line [M]**   

```python
with open('tenthline.txt','r') as f:

    for i,l in enumerate(f):
        if i==9:
            print(l)
```
