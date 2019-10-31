---
layout: single
type: posts
title:  "ALgorithms 4 - depth first traversal"
date:   2019-10-31 12:56:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

### String

**simple scanning**  
Input: 'abcd'  
Output:  
[['a', 'b', 'c', 'd'],  
['a', 'b', 'cd'],  
['a', 'bc', 'd'],  
['a', 'bcd'],  
['ab', 'c', 'd'],  
['ab', 'cd'],  
['abc', 'd'],  
['abcd']]  

Solution:  
next input: s[i:],res,path+[s[:i]]

    |dfs('abcd',res,[])| 
    |i=1 dfs('bcd',res,['a'])|
        |i=1 dfs('cd',res,['b','a'])|                                  
            |i=1 dfs('d',res,['c','b','a'])|
                |i=1 dfs('',res,['d','c','b','a'])| -> append
            |i=2 dfs('',res,['cd','b','a'])| -> append
        |i=2 dfs('d',res,['bc','a'])|
            |i=1 dfs('',res,['d','bc','a'])| -> append
        |i=3 dfs('',res,['bcd','a'])| -> append
    |i=2 dfs('cd',res,['ab'])|
        |i=1 dfs('d',res,['c','ab'])|
            |i=1 dfs('',res,['d','c','ab'])| -> append
        |i=2 dfs('',res,['cd','ab'])| -> append
    |i=3 dfs('d',res,['abc'])|
        |i=1 dfs('',res,['d','abc'])|
    |i=4 dfs('',res,['abcd'])|
    
Tree:

    a
    
        
            


```python
def scan_string(s):
    res=[]
    dfs(s,res,[])
    print(res)
    return

def dfs(s,res,path):
    if not s:
        res.append(path)
        return
        
    for i in range(1,len(s)+1):
        dfs(s[i:],res,path+[s[:i]])
        
scan_string("abcd")
```

**leetcode 131 - Palindrome Partitioning [M]**  
Input: "aab"  
Output:   
[["aa","b"],  
["a","a","b"]]  

```python
class Solution():
    def partition(self,s):
        res=[]
        self.dfs(s,res,[])
        return res

    def dfs(self,s,res,path):
        if not s:
            res.append(path)
        for i in range(1,len(s)+1):
            prefix=s[:i]
            if prefix==prefix[::-1]:
                self.dfs(s[i:],res,path+[s[:i]])
```
