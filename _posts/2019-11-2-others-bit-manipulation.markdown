---
layout: single
type: posts
title:  "OThers 2 - bit manipulation"
date:   2019-11-2 15:23:25 +0900
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

### Python Operation  
1. '&', and, for carrying（进位）

2. '&#124;', or  

3. '~', opposite  

    ~100  
    ouput: -101  

4. '<<', one bit left, for power of 2  

5. '>>', one bit right, for power of 2  

6. '^', xor, for plus without carrying  
i=10  
j=100  
k=i^j  
output: k=110  

    steps:  
    a. dec -> bin  
    i=10 -> bin(10) -> '0b1010' (type:str)  
    j=100 -> bin(100) -> '0b1100100'  
    b. xor calculation: same -> 0, different -> 1  
    1010^1100100=1101110  

           1010
        1100100
        -------
        1101110

    c. bin -> dec  
    int('0b1101110',2) -> 110  

7. bin(2), oct(8), dec(10), hex(16)  
bin(18) -> '0b11010' (remove '0b')  
oct(18) -> '022' (remove '0')  
hex(18) -> '0x12' (remove '0x')  
int('0b10010',2) -> 18  
int('022',8) -> 18  
int('0x12',16) -> 18  

### Cancel Out

**leetcode 136 - Single Number [E]**   
Example 1:  
Input: [2,2,1]  
Output: 1  

Example 2:  
Input: [4,1,2,1,2]  
Output: 4  

Solution:  
if a^0 = a  
if a^a = 0  
a^b^a=(a^a)^b = 0^b = b  

1. 0^4 = 4  
2. 4^1 = 5  
3. 5^2 = 7  
4. 7^1 = 6  
5. 6^2 = 4 <- single num   

```python
class Solution(object):
    def singleNumber(self, nums):
        r=0
        for i in nums:
           r ^= i

        return r         
```   

**leedcode 137 - Single Number II [M]**  
Example 1:  
Input: [2,2,3,2]  
Output: 3  

Example 2:  
Input: [0,1,0,1,0,1,99]  
Output: 99  

Example 1 Solution:  
goal: a?b?a?a=b  

     010
     010
     011
    ?010
    -----
     011

should be: base 3 summing up without carrying  

mask=0 <- mask is the number used for bit operation to get target number  

     ones        twos
     000 (0)     000 (0#)
    ^010 (2)    ^010 (2)
    -----       -----
     010         010
    &111 ~#     &101 ~*
    -----       -----
     010 *       000 #

     010         000
    ^010 (2)    ^010 (2)
    -----       -----
     000         010
    &111 ~#     &111 ~*
    -----       -----
     000 *       010 #

     000         010
    ^011 (3)    ^011 (3)
    -----       -----
     011         001
    &101 ~#     &110 ~*
    -----       -----
     001 *       000 #

     001         000
    ^010 (2)    ^010 (2)
    -----       -----
     011         010
    &111 ~#     &100 ~*
    -----       -----
     011 *       000 #

```python
class Solution(object):
    def singleNumber(self, nums):
        ones,twos=0,0
        for n in nums:
            ones=(ones^n) & ~twos
            twos=(twos^n) & ~ones

        return ones
```

**leedcode 461 - Hamming Distance []**
```python
class Solution(object):
    def hammingDistance(self,x,y):

        return bin(x^y).count('1')      
```   

### REF

https://www.cnblogs.com/JYNNO1/p/10525649.html
