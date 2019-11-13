---
layout: single
type: posts
title:  "Data Structure 5 - stack"
date:   2019-11-13 13:15:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Stack
  - Calculator
  - Hash Table
  - Parentheses
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

```python

```   

### Parentheses

**leetcode 20 - Valid Parentheses [E] - hashtable + stack**  
Example 1:  
Input: "()"  
Output: true  

Example 2:  
Input: "()[]{}"  
Output: true  

Example 3:  
Input: "(]"  
Output: false  

Example 4:  
Input: "([)]"  
Output: false  

Example 5:  
Input: "{[]}"  
Output: true  

Solution:  
1. make a dict={'(':')','[':']','{':'}'}  
2. if meet left '({[', append to stack  
3. if meet right ')}]', match c?=dict[stack.pop()]  
4. if c!=dict[stack.pop()] return False  

```python
class Solution():
    def isValid(self,s):
        stack=[]
        dict={'(':')','[':']','{':'}'}
        for c in s:
            if c in dict:
                stack.append(c)
            else:
                if not stack or dict[stack.pop()]!=c:
                    return False

        return not stack
```



### Arithmetic Calculator  

**leetcode 150 - Evaluate Reverse Polish Notation [M]**  
Evaluate the value of an arithmetic expression in Reverse Polish Notation.  
Example 1:  
Input: ["2", "1", "+", "3", "\*"]
Output: 9  
Explanation: ((2 + 1) * 3) = 9  

Example 2:  
Input: ["4", "13", "5", "/", "+"]  
Output: 6  
Explanation: (4 + (13 / 5)) = 6  

Example 3:  
Input: ["10", "6", "9", "3", "+", "-11", "\*", "/", "\*", "17", "+", "5", "+"]  
Output: 22  
Explanation:  
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5  
= ((10 * (6 / (12 * -11))) + 17) + 5  
= ((10 * (6 / -132)) + 17) + 5  
= ((10 * 0) + 17) + 5  
= (0 + 17) + 5  
= 17 + 5  
= 22  

Prepare:
1. python divide '/' vs '//'  

```python
left,right=6,-132
int(left/float(right)) -> 0
int(left//float(right)) -> -1
```

2. python eval  

```python
x = 1
eval('x + 1') -> 2
eval('x') -> 1
```

Solution:  
1. append numbers to stack if t not in ops, ops={'+','-','\*','/'}  
2. stack pop right and left
3. if meet ops, if '/', do int(left/float(right)), else eval(str(left)+t+str(right))  

```python
class Solution():
    def evalRPN(self,tokens):
        stack=[]
        ops={'+','-','*','/'}
        for t in tokens:
            if t not in ops:
                stack.append(int(t))
            else:
                right=stack.pop()
                left=stack.pop()
                if t=='/':
                    stack.append(int(left/float(right)))
                else:
                    stack.append(eval(str(left)+t+str(right)))

        return stack[-1]
```   

###
