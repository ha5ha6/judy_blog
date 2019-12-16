---
layout: single
type: posts
title:  "Data Structure 6 - stack"
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

## Background

### Definition

Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).  

There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.  

(+) constant time adds and removes, as it doesn't require shifting elements around  
(+) useful in certain recursive algs

### Points to Note

1. stack can be also implemented as linked list
2. useful in recursive algs  
when you need to push temporary data onto a stack as you recurse, but then remove them as you backtrack (cuz the recursive check failed)
3. can be used to implement a recursive alg iteratively

### Basic Operations

1. push() - TO(1)
2. pop() - TO(1)
3. peek() - TO(1)
4. isEmpty() - TO(1)
5. size() - TO(1)
5. access() - TO(n)
6. find() - TO(n)


### Implementation  

**python list** - append and pop  

```python
stack=[]
stack.append(1)
stack.append(2)
stack.pop()
>>2
```

**collections.deque**  

```python
from collections import deque
stack=deque()
stack.append(1)
stack.append(2)
stack.pop()
```

**queue.LifoQueue class**  
functions: maxsize, empty(), full(), get(), get_nowait(), put(item), put_nowait(item), qsize(), etc  

```python
from queue import LifoQueue
stack=LifoQueue()
stack.put(1)
stack.put(2)
stack.get()
```

**single linked list**  

**double linked list**  


**leetcode 225 - Implement Stack using Queue [E]**  
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack  
pop() -- Remove the element on top of the stack and return it  
top() -- Get the element on the top  
empty() --Return whether the stack is empty

Example 1:  
MyStack stack = new MyStack();  
stack.push(1);   
stack.push(2);  
stack.top(); -> 2  
stack.pop(); -> 2  
stack.empty(); -> False  

Queue operations can be used:  
1. append left  
2. peek/pop from front  
3. size  
4. isempty

Solution:  

                     head
         --------------------
    q ->     | 3 | 2 | 1 |   ->
         --------------------
                     head
             -------------
    stack ->   3 | 2 | 1 |
          <- -------------

    q.pop() -> 1
    stack.pop() -> 3

**popping**  
q.pop() - output the first one append  
stack.pop() - output the last one append  
need to use a new_q collect all the q.popped elements until q is empty   

**topping**  
popping q until it's empty  
use a new_q to collect all the q.popped elements  
return the final popped q value  

```python
from collections import deque
class MyStack():
    def __init__(self):
        self.queue=deque()

    def push(self,x):
        self.queue.appendleft(x)

    def pop(self):
        new_q=deque()
        while True:
            x=self.queue.pop()
            if not self.queue:
                self.queue=new_q        
                return x
            new_q.appendleft(x)

    def top(self):
        new_q=deque()
        while self.queue:
            x=self.queue.pop()
            new_q.appendleft(x)
        self.queue=new_q
        return x

    def empty(self):
        return len(self.queue)==0

```

simpler Solution:   

```python
from collections import deque
class MyStack():
    def __init__(self):
        self.queue=deque()

    def push(self,x):
        self.queue.appendleft(x)

    def pop(self):
        self.queue.popleft()

    def top(self):
        return self.queue[0]

    def empty(self):
        return not len(self.queue)
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



## Problems

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

**leetcode 224 - Basic Calculator [H]**  
Implement a basic calculator to evaluate a simple expression string, which contains '()' and '+-'  

Examples:    
Input: "1+1"  
Output: 2  
Input: "2-1+2"  
Output: 3  
Input: "(1+(4+5+2)-3)+(6+8)"  
Output: 23  

Solution 1:  
op +1: + (default)  
op -1: -  
when meet digit, take num, num=num\*10+int(c)  
when meet (, stack append (res,op), reset op and res  
when meet ), stack pop (pre,op), res\*=op, res+=pre  
when meet +, op=1  
when meet -, op=-1  

    2 - ( 4 - 5 ) + 6 f
    ^                    n=2
      ^                  res=2,op=-1,n=0
        ^                stackapp (2,-1),res=0,op=1
          ^              n=4
            ^            res=4,op=-1,n=0
              ^          n=5
                ^        res=4+(-1*5)=-1 calculate inside (4-5)
                         pre,op=2,-1=stack.pop()
                         res=(-1*-1)+2=3 calculate before,n=0
                  ^      res=3+(-1)*0=3,op=1,n=0
                    ^    n=6
                      ^  res=3+6*1=9


```python
class Solution():
    def calculate(self,s):
        stack=[]
        res,num,op=0,0,1
        for c in s:
            if c.isdigit():
                num=num*10+int(c)
            elif c=='+' or c =='-':
                res+=op*num
                num=0
                op=1 if c =='+' else -1
            elif c=='(':
                stack.append((res,op))
                res,op=0,1
            elif c==')':
                res+=op*num
                pre,op=stack.pop()
                res*=op
                res+=pre
                num=0

        res+=op*num

        return res
```

Solution 2: infix, postfix check later!!

**leetcode 227 - Basic Calculator II [M]**  
Implement a basic calculator to evaluate a simple expression string, which contains non-negative integers and '+-\*/'  

Examples:  
Input: "3+2*2"  
Output: 7  
Input: "3/2"  
Output: 1  
Input: "3+5/2"  
Output: 5  

Solution:  
create a stack of partial results to be summed up  
iterate over s  
when c is a digit, increase the res=res*10+int(c)  
when c is an operator or at the end of the string, apply the previous operator to res  
for '\*/', uses the previous integer on the stack  

```python
class Solution():
    def calculate(self,s):
        stack=[]
        res=0
        pre_op='+'

        for i,c in enumerate(s):
            if c.isdigit():
                res=res*10+int(c)
            if c in '+-*/' or i==len(s)-1:
                if pre_op=='+':
                    stack.append(res)
                elif pre_op='-':
                    stack.append(-res)
                elif pre_op=='*':
                    stack.append(stack.pop()*res)
                elif pre_op=='/':
                    pre=stack.pop()
                    if pre*res<0 and pre%res!=0:
                        stack.append(pre//res+1)
                    else:
                        stack.append(pre//res)
                pre_op=c
                res=0

        return sum(stack)
```


###
