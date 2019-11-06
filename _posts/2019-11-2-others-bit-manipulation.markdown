---
layout: single
type: posts
title:  "OThers 2 - bit manipulation"
date:   2019-11-2 15:23:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation  
1. &, and, for carrying（进位） 

2. |, or  

3. ~, opposite  
~100  
ouput: -101  
 
4. <<, one bit left, for power of 2  

5. ->>, one bit right, for power of 2  

6. ^, xor, for plus without carrying
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

### XOR  

**leetcode 136 - Single Number [E]**   
Example 1:  
Input: [2,2,1]  
Output: 1  

Example 2:  
Input: [4,1,2,1,2]  
Output: 4  

Example 2 Solution:  
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

**leedcode 461 - Hamming Distance []**
```python
class Solution(object):
    def hammingDistance(self,x,y):
       
        return bin(x^y).count('1')      
```   

### REF

https://www.cnblogs.com/JYNNO1/p/10525649.html
