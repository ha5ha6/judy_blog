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
```python
~100  
>>-101  
```

4. '<<', one bit left, for power of 2  
```python
m=3 #11
m<<=1
m=6 #110
m<<=1
m=12  #1100
```

5. '>>', one bit right, for power of 2  
```python
m=5 #101
m>>=1
m=2 #10
m>>=1
m=1 #1
m>>=1
m=0 #0
m>>=1
m=0 #0  
```

6. '^', xor, for plus without carrying  
```python
i=10  
j=100  
k=i^j  
>>k=110  
```

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
```python
bin(18)
>>'0b11010' #(remove '0b')  
oct(18)
>>'022' #(remove '0')  
hex(18)
>>'0x12' #(remove '0x')  
int('0b10010',2)
>>18  
int('022',8)
>>18  
int('0x12',16)
>>18  
```

### And

**leetcode 201 - Bitwise AND of Numbers Range [M]**  
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.  
Examples:  
Input: [5,7]  
Output: 4  
Input: [0,1]  
Output: 0  

Solution for [5,7],[26,30]:  
should be the left part of same '1's, cuz '0' will be And out


        101  5
        110  6
      & 111  7
      ----------
        100

        11010   26
        11011   27
        11100   28
        11101   29
      & 11110   30
      -----------
        11000

      m=11010
      n=11110 m,n>>1

      m=1101
      n=1111 m,n>>1

      m=110
      n=111 m,n>>1

      m=11
      n=11  m==n stop while record i times

      return m<<i
      11000

```python
class Solution():
    def rangeBitwiseAnd(self,m,n):
        i=0
        while m!=n:
            m>>=1
            n>>=1
            i+=1

        return m<<i
```

### Count

**leetcode 191 - Number of 1 bits - Hamming Weight [E]**  
Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).  

Examples:  
Input: 00000000000000000000000000001011  
Output: 3  
Explanation: The input binary string has a total of three '1' bits.  
Input: 00000000000000000000000010000000  
Output: 1  
Explanation: The input binary string has a total of one '1' bit.   
Input: 11111111111111111111111111111101  
Output: 31  
Explanation: The input binary string has a total of thirty one '1' bits.  

Solution:  

```python
class Solution():
    def hammingWeight(self,n):

        return sum(c=='1' for c in bin(n)[2:])
        #or
        return bin(n)[2:].count('1')
```


### Reverse

**leetcode 190 - Reverse Bits [E]**  
Reverse bits of a given 32 bits unsigned integer.  
Example 1:  
Input: 43261596 -> 00000010100101000001111010011100  
Output: 964176192 -> 00111001011110000010100101000000  

Solution 1: python built-in bin, int, str

```python
class Solution():
    def reverseBits(self,n):
        b=bin(n)[2:] #remove header '0b'
        res=b[::-1]+''.join(['0' for i in range(32-len(b))])

        return int(res,2) #convert from base 2
```

Solution 2:

```python
class Solution():
    def reverseBits(self,n):
        res,bit=0,31
        while n!=0:
            if n%2==1:
                res+=2**bit
            bit-=1
            n//=2

        return res
```

Solution 3:

```python
class Solution():
    def reverseBits(self,n):
        res=0
        for i in range(32):
            res<<=1
            res|=((n>>i)&1)

        return res
```

Solution 4:

```python
class Solution():
    def reverseBits(self,n):
        #separate to half
        n=(n>>16)|(n<<16)
        n=((n&0xff00ff00)>>8)|((n&0x00ff00ff)<<8)
        n=((n&0xf0f0f0f0)>>4)|((n&0x0f0f0f0f)<<4)
        n=((n&0xcccccccc)>>2)|((n&0x33333333)<<2)
        n=((n&0xaaaaaaaa)>>1)|((n&0x55555555)<<1)

        return n
```

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

### References

[leetcode bit manipulation questions](https://leetcode.com/tag/bit-manipulation/)
[A summary: how to use bit manipulation to solve problems easily and efficiently](https://leetcode.com/problems/sum-of-two-integers/discuss/84278/a-summary-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently)

https://www.cnblogs.com/JYNNO1/p/10525649.html
