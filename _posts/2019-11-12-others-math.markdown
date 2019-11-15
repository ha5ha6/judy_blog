---
layout: single
type: posts
title:  "OThers 1 - math"
date:   2019-11-12 23:18:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Others
  - Point
  - Greatest Common Divisor
  - Python Collections
  - Hash Table
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Greatest Common Divisor  

Example:  
gcd(2,4) -> 2  
gcd(3,0) -> 3  
gcd(-5,-10) -> -5  

```python
#loop
def gcd(x,y):
    while y:
        x,y=y,x%y

    return x

#recursive
def gcd(x,y):
    if y==0:
        return x
    else:
        gcd(y,x%y)

#one line
max([x for x in range(1,a+1) if a%x==0 and b%x==0])
#or
[x for x in range(1,a+1) if a % x ==0 and b % x ==0][-1]
```

### Dividing / Fraction  

**leetcode 166 - Fraction to Recurring Decimal [M] - divmod + dict**  
Examples:  
Input: numerator=1, denominator=2  
Output: "0.5"  
Input: numerator=2, denominator=1  
Output: "1"  
Input: numerator=2, denominator=3   
Output: "0.(6)"  

Solution:  
1. check sign  
2. before '.': take integer of integer,remainder=divmod(numerator,denominator)  
3. after '.': take integer of integer,remainder=divmod(remainder*10,denominator)  
4. using **dict seen={}** see [hash table](https://ha5ha6.github.io/judy_blog/programming/2019/11/14/data-structrue-hash.html) to check if remainder is repeating (recurring)  

```python
class Solution():
    def fractionToDecimal(self,nu,de):
        if de==0:
            return None

        res=[]
        if nu*de<0:
            res.append('-') #sign

        div,rem=divmod(abs(nu),abs(de))
        res.append(str(div)) #before .
        if rem==0:
            return "".join(res)

        res.append('.')
        seen={}
        while rem!=0:
            if rem in seen:
                return "".join(res[:seen[rem]]+['(']+res[seen[rem]:]+[')'])

            seen[rem]=len(res)
            div,rem=divmod(rem*10,abs(de))
            res.append(str(div)) #after .

        return "".join(res)
```

**leetcode 168 - Excel Sheet Column Title [E] - divmod + deque** see [python built-in #deque](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#collectionsdeque)
Given a positive integer, return its corresponding column title as appear in Excel  
For example:  


    1 -> A  
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...

Examples:  
Input: 1  
Output: "A"  
Input: 28  
Output: "AB"  
Input: 701  
Output: "ZY"  

Solution:  
n,remainder=divmod(n-1,26)  
the output column will be the remainder value from left to right in deque  


    28
    1,1#=divmod(28-1,26)  column= ,1#]
    0,0#=divmod(1-1,26)   column=[0#,1#] -> 'AB'

    701
    26,24=divmod(701-1,26)  column= ,24]
    0,25=divmod(26-1,26)    column=[25,24] -> 'ZY'

```python
from collections import deque

class Solution():
    def convertToTitle(self,n):
        res=deque()
        while n>0:
            n,rem=divmod(n-1,26)
            res.appendleft(rem)

        return "".join([chr(i+ord('A')) for i in res])
```

### Cartesian coordinate

**leetcode 149 - Max Points on a Line [H] - greatest common divisor + dict count**  
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line  

Example 1:  
Input:[[1,1],[2,2],[3,3]]  
Output: 3


           ^
        4  |
        3  |        o
        2  |     o
        1  |  o
           ------------->
           0  1  2  3  4

Example 2:  
Input:[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]  
Output: 4


           ^
        5  |
        4  |  o
        3  |     o        o
        2  |        o
        1  |  o        o
           -------------------->
           0  1  2  3  4  5  6


Prepare:  
1. dict count - see [python built-in #defaultdict](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#collectionsdefaultdict)
2. greatest common divisor - see [Greatest Common Divisor](http://ha5ha6.github.io/judy_blog/programming/2019/11/12/others-math.html#greatest-common-divisor)

Example 2 Solution:  
1. skip the same points and dup count+=1  
2. check the gcd (delta) of dx,dy,    
first point [1,1] - each leftover [3,2],[5,3],[4,1],[2,3],[1,4]  
second point [3,2] - each leftover [5,3],[4,1],[2,3],[1,4]   
...  
3. put line points (dx/delta,dy/delta) into dict counter  
4. record max res and return  

```python
from collections import defaultdict

class Solution():
    def maxPoints(self,inputs):
        res=0
        for i in range(len(inputs)):
            lines=defaultdict(int)
            dups=1
            for j in range(i+1,len(inputs)):
                #check and filter dups
                if inputs[i][0]==inputs[j][0] and inputs[i][1]==inputs[j][1]:
                    dups+=1
                    continue

                #calculate dx,dy,delta
                dx=inputs[j][0]-inputs[i][0]
                dy=inputs[j][1]-inputs[i][1]
                delta=self.gcd(dx,dy)

                #dict counter + 1 same line
                lines[(dx/delta,dy/delta)]+=1

            res=max(res,(max(lines.values()) if lines else 0)+dups)

        return res

    def gcd(self,x,y):

        return x if y==0 else self.gcd(y,x%y)
```
