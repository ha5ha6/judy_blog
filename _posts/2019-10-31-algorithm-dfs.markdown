---
layout: single
type: posts
title:  "ALgorithms 7 - depth first traversal"
date:   2019-10-31 12:56:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Dfs
  - Palindrome
  - Recursion
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

Bars:  

    a b c d
    _ _ _ _
    _ _ ___
    _ ___ _
    _ _____
    ___ _ _
    ___ ___
    _____ _
    _______

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
        |i=1 dfs('',res,['d','abc'])| -> append
    |i=4 dfs('',res,['abcd'])| -> append


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

### Parentheses  

**leetcode 241 - Different Ways to Add Parentheses [M]**  
Given a string of numbers and operators return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +,-,*  

Example 1:  
Input: "2-1-1"  
Output: [0,2]  
Explanation:  
((2-1)-1)=0  
(2-(1-1))=0   

Example 2:  
Input: "2\*3-4\*5"  
Output: [-34,-14,-10,-10,10]  

Solution 1:  
1. split the string into list  
2. append nums, and ops  
3. dfs()  

Details of example 2\*3-4\*5:

    dfs(['2','3','4','5'],['*','-','*'])
    i=0 dfs(['(2*3)','4','5'],['-','*'])
        i=0 dfs(['((2*3)-4)','5'],['*'])
            i=0 dfs(['(((2*3)-4)*5)'],[])
                ops=[],d[(((2*3)-4)*5)]=eval('(((2*3)-4)*5)')
        i=1 dfs(['(2*3)','(4*5)'],['-'])
            i=0 dfs(['((2*3)-(4*5))'])
                ops=[],d[((2*3)-(4*5))]=eval('((2*3)-(4*5))')
    i=1 dfs(['2','(3-4)','5'],['*','*'])
        i=0 dfs(['(2*(3-4))','5'],['*'])
            i=0 dfs(['((2*(3-4))*5)'])
                ops=[],d[((2*(3-4))*5)]=eval('((2*(3-4))*5)')
        i=1 dfs(['2','((3-4)*5'],['*'])
            i=0 dfs(['(2*((3-4)*5)'])
                ops=[],d[(2*((3-4)*5)]=eval('(2*((3-4)*5)')
    i=2 dfs(['2','3','(4*5)'],['*','-'])
        i=0 dfs(['(2*3)','(4*5)'],['-'])
            i=0 dfs(['((2*3)-(4*5))'])
                ops=[], '(2*3)-(4*5)' already in d
        i=1 dfs(['2','(3-(4*5))'],['*'])
            i=0 dfs(['(2*(3-(4*5)))'])
                ops=[], d['(2*(3-(4*5)))']=eval('(2*(3-(4*5)))')

In short:  

    cur expression  remaining ops
    (2*3),4,5          -*
    ((2*3)-4),5        *
    (((2*3)-4)*5) - 1

    (2*3),(4*5)        -
    ((2*3)-(4*5)) - 2

    2,(3-4),5          **
    (2*(3-4)),5        *
    ((2*(3-4))*5) - 3

    2,((3-4)*5)        *
    (2*((3-4)*5) - 4  

    2,3,(4*5)          *-
    (2*3),(4*5)        -
    ((2*3)-(4*5)) - same as 2

    2,(3-(4*5))        *
    (2*(3-(4*5))) - 5


```python
import re
class Solution():
    def diffWaysToCompute(self,s):

        d=dict()
        nums,ops=[],[]
        s=re.split(r'(\D)',s) #split digits
        for c in s:
            if c.isdigit():
                nums.append(c)
            else:
                ops.append(c)

        self.dfs(nums,ops,d)

        return d.values()

    def dfs(self,nums,ops,d):
        if ops:
            for i in range(len(ops)):
                self.dfs(nums[:i]+['('+nums[i]+ops[i]+nums[i+1]+')']+nums[i+2:],ops[:i]+ops[i+1:],d)
        elif nums[0] not in d:
            d[nums[0]]=eval(nums[0])
```

Solution 2: divide and conquer see [divide and conquer]()
