---
layout: single
type: posts
title:  "ALgorithms 6 - dynamic programming"
date:   2019-10-23 20:48:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### dp string

leetcode 115 - Distinct Subsequences [H]

Example:

Input: S = "babgbag", T = "bag"

Output: 5

Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag

^^ ^

babgbag

^^    ^

babgbag

^    ^^

babgbag

  ^  ^^

babgbag

    ^^^

note: subsequence can jump some char but should be in order



```python      

```



        res.append(root)
        self.preOrder(root.left,res)
        self.preOrder(root.right,res)
```
