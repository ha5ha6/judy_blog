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

Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).  

There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.  

### Implementation  

**Use list** - append and pop  

```python
stack=[]
stack.append(1)
stack.append(2)
stack.pop()
>>2
```

### Design

**leetcode 155 - Min Stack [E]**  
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.  

push(x) -- Push element x onto stack.  
pop() -- Removes the element on top of the stack.  
top() -- Get the top element.  
getMin() -- Retrieve the minimum element in the stack.  

Example:  
MinStack minStack = new MinStack();  
minStack.push(-2);  
minStack.push(0);  
minStack.push(-3);  
minStack.getMin();   --> Returns -3.  
minStack.pop();  
minStack.top();      --> Returns 0.  
minStack.getMin();   --> Returns -2.  

Solution:  
1. have a list to store all the values  
2. have another list to store the minimum values  
3. same operations should be done within main list and min list  

```python
class MinStack():
    def __init__(self):
        self.main=[]
        self.mins=[]

    def push(self,x):
        self.main.append(x)
        if not self.mins or x<=self.mins[-1]:
            self.mins.append(x)

    def pop(self):
        #show the last and remove the last
        out=self.main.pop()
        if out==self.mins[-1]:
            self.mins.pop()

    def top(self):
        #show the last but not remove the last
        return self.main[-1]

    def getMin(self):
        return self.mins[-1]

s=MinStack()
s.push(-2)
s.push(0)
s.push(-3)
print(s.getMin())
print(s.pop())
print(s.top())
print(s.getMin())
```   

**leetcode 716 - Max Stack [E]**  
Design a max stack that supports push, pop, top, peekMax and popMax.  

push(x) -- Push element x onto stack.  
pop() -- Remove the element on top of the stack and return it.  
top() -- Get the element on the top.  
**peekMax()** -- Retrieve the maximum element in the stack.  
**popMax()** -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.  

Example 1:  
MaxStack stack = new MaxStack();  
stack.push(5);   
stack.push(1);  
stack.push(5);  
stack.top(); -> 5  
stack.popMax(); -> 5  
stack.top(); -> 1  
stack.peekMax(); -> 5  
stack.pop(); -> 1  
stack.top(); -> 5  

```python
class MaxStack():
    def __init__(self):
        self.main=[]

    def push(self,x):
        self.main.append(x)

    def pop(self):
        #show the last and remove the last
        self.main.pop()

    def top(self):
        #show the last but not remove the last
        return self.main[-1]

    def peekMax(self):
        return max(self.main)

    def popMax(self):
        out=max(self.main)
        self.main.remove(out)

        return out

s=MaxStack()
s.push(-2)
s.push(0)
s.push(-3)
print(s.peekMax())
print(s.popMax())
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
