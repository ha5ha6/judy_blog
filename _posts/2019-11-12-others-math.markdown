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

### Division / Fraction  

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

**leetcode 171 - Excel Sheet Column Number [E]**  
Given a column title as appear in an Excel sheet, return its corresponding column number.  

For example:  


    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...


Examples:  
Input: "A"  
Output: 1  
Input: "AB"  
Output: 28  
Input: "ZY"  
Output: 701  

Solution: the opposite of divmod leetcode 168  


    'AB'  
    'A' -> 1 = ord('A')-ord('A')+1 = 1
    res=0*26+1=1
    'B' -> 2 = ord('B')-ord('A')+1 = 2
    res=1*26+2=28


```python
class Solution():
    def titleToNumber(self,s):
        res=0
        for c in s:
            res=res*26+ord(c)-ord('A')+1

        return res
```

**leetcode 273 - Integer to English Words [H]**  
Convert a non-negative integer to its english words representation   
Given input is guaranteed to be less than 2^31-1  

Input: 123  
Output: "One Hundred Twenty Three"  
Input: 12345  
Output: "Twelve Thousand Three Hundred Forty Five"  
Input: 1234567  
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"   
Input: 1234567891  
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"  

Solution of 1234567891:  
1. separate last three digits by n,rem=divmod(n,1000), digits=0  
2. in rem, first digit is hundred, second and third are tens and the only one last digit
3. hundreds,tens=divmod(rem,100)
4. digits+=3
5. if tens<20, appleft 1~19, all different single by single  
6. if tens>=20 and tens%10, appleft the only one last digit  
7. if tens>=20, appleft the tens digit
8. if hundreds, appleft hundreds+'Hundred'
9. if new rem and digits>0, appleft 'Thousand' (check digits2word[digits])  
10. ...

Details:  


       n      rem      divmod(1234567891,1000)
    1234567   891      
    hundreds  tens     divmod(891,100)    
       8      91       
      d=3              91>=20, 91%10!=0, appleft(i2w[91%10]) -> One]
                       appleft(i2w[10*(91//10)]) -> Ninety,One]
                       Eight, Hundred, Ninety, One]

       n      rem      divmod(1234567,1000)
     1234     567
    hundreds  tens     divmod(567,100)
       5      67       d>0, appleft(d2w[3])    Thousand, Eight, Hundred, Ninety, One]
      d=6              67>=20, appleft(i2w[67%10])  ->Seven
                       appleft(i2w[10*(67//10)])  -> Sixty
                       Five, Hundred, Sixty, Seven, Thousand, Eight, Hundred, Ninety, One]

       n      rem      divmod(1234,1000)
       1      234
    hundreds  tens     divmod(234,100)
       2      34       d>0 appleft(d2w[6]) -> Million
      d=9              Two, Hundred, Thirty, Four, Million, Five, Hundred, Sixty, Seven, Thousand, Eight, Hundred, Ninety, One]

       n      rem      divmod(1,1000)
       0      1
    hundreds  tens     divmod(1,100)
       0      1        d>0 appleft(d2w[9]) -> Billion
                       [One, Billion, Two, Hundred, Thirty, Four, Million, Five, Hundred, Sixty, Seven, Thousand, Eight, Hundred, Ninety, One]




```python
from collections import deque
class Solution():
    def numberToWords(self,n):

        int2word={1:'One',2:'Two',3:'Three',4:'Four',5:'Five',
                  6:'Six',7:'Seven',8:'Eight',9:'Nine',10:'Ten',
                  11:'Eleven',12:'Twelve',13:'Thirteen',14:'Fourteen',15:'Fifteen',
                  16:'Sixteen',17:'Seventeen',18:'Eighteen',19:'Nineteen',20:'Twenty',
                  30:'Thirty',40:'Forty',50:'Fifty',60:'Sixty',70:'Seventy',80:'Eighty',90:'Ninety'}

        digits2word={3:'Thousand',6:'Million',9:'Billion',
                     12:'Trillion',15:'Quadrillion',18:'Quintillion',
                     21:'Sextillion',24:'Septillion',27:'Octillion',
                     30:'Nonillion'}

        en=deque() #english
        d=0 #digits
        if n==0:
            return 'zero'

        while n:
            n,rem=divmod(n,1000)
            hundreds,tens=divmod(rem,100)

            if rem and d>0:
                en.appendleft(digits2word[d])
            d+=3

            if tens>=20:
                if tens%10:
                    en.appendleft(int2word[tens%10])
                en.appendleft(int2word[10*(tens//10)])
            elif tens:
                en.appendleft(int2word[tens])

            if hundreds:
                en.appendleft('Hundred')
                en.appendleft(int2word[hundreds])

          return "".join(en)
```


### Factorial n!


    n!=nx(n-1)...x1
    4!=4x3x2x1=24  
    0!=1

```python
n=5
fact=1
for i in range(1,n+1):
    fact*=i

print(fact)
>>120
```

**leetcode 172 - Factorial Trailing Zeroes [E]**  
Given an integer n, return the number of trailing zeroes in n!  

Examples:    
Input: 3  
Output: 0  
Explanation: 3! = 6, no trailing zero.  
Input: 5  
Output: 1  
Explanation: 5! = 120, one trailing zero.  

Solution: Time O(logn), Space O(1)  
count the numbers 1..n that are divisible by 5, then those divisible by 25 having a second factor of 5, then 125...   


    5!=120
    16!=20922789888000
    38!=523022617466601111760007224100074291200000000

    zeroes        n         
      0           38    
      7=38//5+0   7=38//5
      8=7//5+7    1=7//5
      8=1//5+8    0=1//5


```python
class Solution():
    def trailingZeroes(self, n):
        zs=0
        while n:
            zs+=n//5
            n=n//5

        return zs
```

### Prime Number  
If num is divisible by any number between 2 and n / 2, it is not prime  
Example: [2,3,5,7,11,...]  

```python
def isPrime(n): #O(n**3/2)
    if n<=1:
        return False

    for i in range(2,n//2):
        if n%i==0:
            return False

    return True
```

**leetcode 204 - Count Primes [E] - sieve of eratosthenes**  
Count the number of prime numbers less than a non-negative number, n.  
Example:  
Input: 10  
Output: 4  
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.  

Solution of 15: O(n**3/2)

            2,3,4,5,6,7,8,9,10,11,12,13,14
            ^   ^   ^   ^   ^     ^     ^     remove all multiples of 2
              ^           ^                   remove all multiples of 3

        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
        F F T T T T T T T T  T  T  T  T  T  
            ^   F   F   F    F     F     F
            sieve[2*2:15:2]=False*len(sieve[2*2:15:2]) <- put idx[4,6,8,10,12,14] to F
        0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
        F F T T F T F T F T  F  T  F  T  F
              ^           F        F
              sieve[3*3:15:3]=False*len <- idx[9,12]
        4*4>15 end

```python
class Solution():
    def countPrimes(self,n):
        sieve=[False,False]+[True for i in range(n-1)]
        for i in range(2,int(n**0.5)+1):
            if sieve[i]:
                sieve[i*i:n:i]=[False]*len(sieve[i*i:n:i])

        return sum(sieve)
```

### Ugly Number  

**leetcode 263 - Ugly Number [E]**  
Write a program to check whether a given number is an ugly number.  
Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.  

Input: 6  
Output: true  
Explanation: 6 = 2 × 3  
Input: 8  
Output: true  
Explanation: 8 = 2 × 2 × 2  
Input: 14  
Output: false   
Explanation: 14 is not ugly since it includes another prime factor 7.  


```python
class Solution():
    def isUgly(self,n):
        if n<=0:
            return False

        while n%2==0:
            n//=2
        while n%3==0:
            n//=3
        while n%5==0:
            n//=5

        return n==1
```

**leetcode 264 - Ugly Number II [M]**  
Write a program to find the n-th ugly number.

Input: n = 10  
Output: 12  
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note:  
1 is typically treated as an ugly number.  
n does not exceed 1690.  

Solution:  

    2*1,3*1,5*1   [1,2
    min  
    2*2,3*1,5*1   [1,2,3
        min
    2*2,3*2,5*1   [1,2,3,4
    min
    2*3,3*2,5*1   [1,2,3,4,5,...
            min

```python
class Solution():
    def nthUgly(self,n):
        res=[1]
        i_2,i_3,i_5=0,0,0
        while len(res)<n:
            res.append(min(2*res[i_2],3*res[i_3],5*res[i_5]))
            if res[-1]==2*res[i_2]:
                i_2+=1
            if res[-1]==3*res[i_3]:
                i_3+=1
            if res[-1]==5*res[i_5]:
                i_5+=1

        return res[-1]
```

**Ugly Number III**  

**Super Ugly Number**


### Happy Number    

**leetcode 202 - Happy Number [E] - two pointers**  
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.  

Example:   
Input: 19  
Output: true  
Explanation:   
1^2 + 9^2 = 82  
8^2 + 2^2 = 68  
6^2 + 8^2 = 100  
1^2 + 0^2 + 0^2 = 1  

Solution 1: by definition  
use set to record seen  

```python
class Solution():
    def isHappy(self, n):
        seen=set()
        while n not in seen:
            seen.add(n)
            sum=0
            while n!=0:  #19: 9*9+1*1=82
                sum+=(n%10)*(n%10)
                n/=10
            n=sum
            if n==1:
                return True

        return False
```  

Solution 2: Floyd's cycle-finding algorithm  
Floyd's cycle-finding algorithm is a pointer algorithm that uses only two pointers, which move through the sequence at different speeds. It is also called the "tortoise and the hare algorithm", alluding to Aesop's fable of The Tortoise and the Hare.  

there is a loop if not a happy number:  
4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4 -> ...   

```python
class Solution():
    def isHappy(self, n):
        slow=fast=n
        while True:
            slow=self.squareSum(slow)
            fast=self.squareSum(self.squareSum(fast))
            if slow==fast:
                break

        return slow==1

    def squareSum(self,n):
        sum=0
        while n>0:
            sum+=(n%10)*(n%10)
            n/=10

        return sum
```

### Strobogrammatic Number  

**leetcode 246 - Strobogrammatic Number (T/F) [E]** - hash  
A Strobogrammatic number is a number that looks the same when rotated 180 degrees.  
Write a function to determine if a number is Strobogrammatic.  

Examples:   
Input: "69"   
Output: True   
Input: "88"   
Output: True  
Input: "962"  
Output: False  

```python
class Solution():
    def isStrobogrammatic(self,num):
        strob={'0':'0','1':'1','8':'8','6':'9','9':'6'}
        for left in range((len(num)+1)//2):
            right=len(num)-1-left
            if num[left] not in strob or strob[num[left]]!=num[right]:
                return False

        return True
```

**leetcode 247 - Strobogrammatic Number II (find all) [M]**  
Find all strobogrammatic numbers that are of length=n  

Input: n=2  
Output: ['11','69','88','96']  

```python
class Solution():
    def findStrobogrammatic(self,n):
        if n<=0:
            return ['']

        if n%2==1:
            res=['0','1','8']  #hamburger for odd bits
        else:
            res=['']

        strob={'0':'0','1':'1','8':'8','6':'9','9':'6'}
        for i in range(n//2):
            res=[c+r+strob[c] for r in res for c in strob]

        return [r for r in res if (res[0]!='0' or n==1)]
```

**leetcode 248 - Strobogrammatic Number III (find in range) [H]**  
Write a function to count the total strobogrammatic numbers that exist in the range of low<=num<=high  

Input: low='50', high='100'  
Output: 3
Explanation: 69, 88, 96  

```python
class Solution():
    def strobogrammaticInRange(self,low,high):
        min_len,max_len=len(low),len(high)
        low,high=int(low),int(high)
        even=['']
        odd=['0','1','8'] #burger
        strob_cnt=0
        strob={'0':'0','1':'1','8':'8','6':'9','9':'6'}

        if min_len==1:
            strob_cnt+=len([i for i in odd if low<=int(i)<=high])

        for i in range(2,max_len+1):
            even=[c+r+strob[c] for r in even for c in strob]
            if min_len<i<max_len: #add all numbers in list not beginning with 0
                strob_cnt+=len([True for r in even if r[0]!='0'])
            elif i==min_len or i==max_len:
                strob_cnt+=len([True for r in even if r[0]!='0' and low<=int(r)<=high])

            even,odd=odd,even

        return strob_cnt
```

### Digits

**leetcode 258 - Add Digits [E]**  
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.  

Input: 38  
Output: 2   
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
             Since 2 has only one digit, return it.    

Solution 1: by definition

```python
class Solution():
    def addDigits(self,n):
        while n>9:
            s=0
            while n>=1:
                s+=n%10
                n//=10
            n=s
        return n
```

Solution 2: TO(1)

    n   digit res
    1    1
    2    2
    9    9
    10   1
    11   2
    18   9
    19   1
    20   2
    27   9

    res=[1~9]x11+[1]

```python
class Solution():
    def addDigits(self,n):
        if n==0:
            return 0

        return 1+(n-1)%9
```

**leetcode 1085 - Sum of Digits in the Minimum Number [E]**  

**leetcode 233 - Number of Digit One [H]**  
Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.  

Example:  
Input: 13  
Output: 6   
Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.  

    [1] x1
    [10,19] x11
    [20,29] x1
    [30,39] x1
    ...
    [90,99] x1
    [100,109] x11
    [110,119] x21
    [120,129] x11

    take 524  
         52
         5

    n,    b,        a,   res,          (n+8//10)      n%10==1     
                                      check if >=2   check if last digit is 1
    524   1         1    53*1+0*1=53       53          0 <- 4              
    52    1+4*1=5   10   6*10+0*5=60       6           0 <- 2
    5     5+5*10=55 100  1*100+0*55=100    1           0 <- 5
                         sum(res)=213

    521   1         1    52+1=53           52          1
    52    1+1*1=2   10   6*10+0*2=60       6           0
    5     2+5*10=52 100  1*100+0*52=100    1           0
                         sum(res)=213

    39    1         1    4*1+0*1=4         4 <- bit '3' of '39'
    3     1+3*1     10   1*10+0*4=10       1

```python
class Solution():
    def countDigitOne(self,n):
        res,a,b=0,1,1
        while n>0:
            res+=(n+8)//10*a+(n%10==1)*b
            b+=n%10*a
            a*=10
            n//=10

        return res
```

### Permutation

**leetcode 60 - Permutation Sequence [M]**  
The set [1,2,3,...,n] contains a total of n! unique permutations.  
By listing and labeling all of the permutations in order, we get the following sequence for n = 3:  
1 - "123"  
2 - "132"  
3 - "213"  
4 - "231"  
5 - "312"  
6 - "321"  

Given n and k, return the kth permutation sequence.  
Input: n = 3, k = 3  
Output: "213"  
Input: n = 4, k = 9  
Output: "2314"  


### Arithmetic Progression  

**leetcode 268 - Missing Number [E]**  
Given an array containing n distinct numbers taken from 0~n, find the one that is missing from the array.  

Input: [3,0,1]  
Output: 2  
Input: [9,6,4,2,3,5,7,0,1]  
Output: 8  

```python
class Solution():
    def missingNumber(self,nums):
        n=len(nums)

        return ((n+1)*n)//2)-sum(nums)
```


### Cartesian Coordinate

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

**leetcode 223 - Rectangle Area [M]**  
Find the total area covered by two rectilinear rectangles in a 2D plane.  
Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.  

Input: A=-3,B=0,C=3,D=4,E=0,F=-1,G=9,H=2
Output: 45

                    0  1  2  3  4  5  6  7  8  9            
           |--------|--------| (3,4) (C,D)
           |        |        |
           |        |--------N------------------| (9,2) (G,H)
           |        |        |                  |
    (-3,0) |--------M---------                  |
    (A,B) -3 -2 -1  |---------------------------|  
                  (0,-1)
                  (E,F)

           |-A,B -3,0
          -|-C,D  3,4
          ||-E,F  0,-1
          ---G,H  9,2

Solution:  
overlap area condition: M[0],M[1]<N[0],N[1]     
lower left point M = max(A,E),max(B,F) = 0,0  
upper right point N = min(C,G),min(D,H) = 3,2  
else no overlapping  

```python
class Solution():
    def computeArea(self,A,B,C,D,E,F,G,H):
        M=[max(A,E),max(B,F)] #overlap leftlower
        N=[min(C,G),min(D,H)] #overlap rightupper
        if M[0]<N[0] and M[1]<N[1]:
            overlap=abs(M[0]-N[0])*abs(M[1]-N[1])
        else:
            overlap=0

        return (C-A)*(D-B)+(G-E)*(H-F)-overlap
```
