---
layout: single
type: posts
title:  "OThers 12 - python class"
date:   2019-12-6 14:50:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Others
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Public and Private

```python
class M():
    def public(self):
        print('You can see me!')

    def _private(self):
        print('You cannot see me!')

m=M()
m.public()
>>You can see me!
m._private() ???
>>'You cannot see me!'
```
