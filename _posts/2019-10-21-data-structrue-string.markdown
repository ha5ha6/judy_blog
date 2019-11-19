---
layout: single
type: posts
title:  "Data Structure 4 - string"
date:   2019-10-26 12:23:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - String
  - Palindrome
  - Dfs
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

1. check if char is alphabet/alphabet or numeric/numeric  
```python
s='abc123'  
s.isalpha() -> False     
s.isalnum() -> True  
s.isnumeric() -> False  
```

2. remove white spaces before and after  
```python
s='  lajdflak    '  
s.strip() #remove both  
s.lstrip() #remove left    
s.rstrip() #remove right   
```

3. swtich to upper case and lower case  
```python
s='aBcDeFg'  
s.lower() -> s='abcdefg'  
s.upper() -> s='ABCDEFG'  
```

4. generate lower/uppercase string  
```python
import string  
string.ascii_lowercase  
string.ascii_uppercase  
```

5. split  
```python
s='the sky is blue'
s.split() -> ['the', 'sky', 'is', 'blue']
s='1.0.1'
s.splie('.') -> ['1', '0', '1']
```

6. chr and ord
```python
ord('a') -> 97
ord('A') -> 65
chr(65) -> 'A'
chr(97) -> 'a'
```

7. string/number compare  

```python
x='109'
y='54'
x+y -> '10954'
y+x -> '54109'
x+y>y+x -> False
x+y<y+x -> True
```

```python
#python2 compare number
cmp=lambda x,y:-1 if x<y else 1
cmp(1,2)
>>-1
cmp(3,2)
>>1
nums=[5,2,9,7]
sorted(nums,cmp)
>>[2,5,7,9]
```

```python
#python2 compare string
str_cmp=lambda x,y:-1 if x+y<y+x else 1
str_cmp('12','3')
>>-1  #123<312
strs=['3','30','12','9']
sorted(strs,str_cmp)
>>['12', '30', '3', '9']
str_cmp=lambda x,y:1 if x+y<y+x else -1
sorted(strs,str_cmp)
>>['9', '3', '30', '12']
```

### Slice  

**leetcode 187 - Repeated DNA Sequences [M] - set**  
Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.  
Example:  
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"  
Output: ["AAAAACCCCC", "CCCCCAAAAA"]  

```python
class Solution(object):
    def findRepeatedDnaSequences(self, s):
        seen=set()
        res=set()
        for i in range(len(s)):
            slice=s[i:i+10]
            if slice in seen: #repeated
                res.add(slice)
            else: #not repeated
                seen.add(slice)

        return list(res)
```


### Compare  

**leetcode 165 - Compare Version Numbers [M]**  
Compare two version numbers version1 and version2.  
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.  

Examples:  
Input: version1 = "0.1", version2 = "1.1"  
Output: -1  
Input: version1 = "1.0.1", version2 = "1"  
Output: 1   
Input: version1 = "7.5.2.4", version2 = "7.5.3"  
Output: -1   
Input: version1 = "1.01", version2 = "1.001"  
Output: 0  
Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”  
Input: version1 = "1.0", version2 = "1.0.0"  
Output: 0  
Explanation: The first version number does not have a third level revision number, which means its third level revision number is default to "0"  

Prepare:  
see [itertools.zip_longest](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#itertoolszip_longest)

Solution:  
1. extract to each bit to int using split('.')  
2. fullfil shorter length with 0 in the end  
3. compare one by one int bit in zip-for-loop   

```python
from itertools import zip_longest #python3
from itertools import izip_longest #python2

class Solution():
    def compareVersion(self, version1, version2):
        v1=[int(v) for v in version1.split('.')]
        v2=[int(v) for v in version2.split('.')]
        for i1,i2 in zip_longest(v1,v2,fillvalue=0):
            if i1<i2:
                return -1
            elif i1>i2:
                return 1

        return 0
```

**leetcode 179 - Largest Number [M]**  
Given a list of non negative integers, arrange them such that they form the largest number.  

Examples:  
Input: [10,2]  
Output: "210"   
Input: [3,30,34,5,9]  
Output: "9534330"  

Solution:  

```python
class Solution():
    def largestNumber(self,nums):
        str_cmp=lambda x,y:1 if x+y<y+x else -1
        b="".join(sorted(map(str,nums),cmp=str_cmp))

        return '0' if b[0]=='0' else b
```

### Reverse  

**leetcode 151 - Reverse Words in a String [M]**  
Example 1:  
Input: "the sky is blue"  
Output: "blue is sky the"  

Example 2:  
Input: "  hello world!  "  
Output: "world! hello"  
Explanation: Your reversed string should not contain leading or trailing spaces.

Example 3:  
Input: "a good   example"  
Output: "example good a"  
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.  

```python
class Solution():
    def reverseWords(self, s):
        words=s.split()

        return " ".join(words[::-1])
```

**leetcode 186 - Reverse Words in a String II (M)**  
Given an input string, reverse the string word by word  
Example:   
Input: ['t','h','e',' ','s','k','y',' ','i','s',' ','b','l','u','e']  
Output: ['b','l','u','e',' ','i','s',' ','s','k','y',' ','t','h','e']  

Solution:  
1. reverse the string, append a ' '  
['e', 'u', 'l', 'b', ' ', 's', 'i', ' ', 'y', 'k', 's', ' ', 'e', 'h', 't',' ']  
2. reverse the small part in every ' ', remove the final ' '  
['b','l','u','e',' ','i','s',' ','s','k','y',' ','t','h','e',' ']  

```python
class Solution():
    def reverseWords(self, s):
        s.reverse()
        s.append(' ')
        start=0
        for i in range(len(s)):
            if s[i]==' ':
                s[start:i]=reversed(s[start:i])
                start=i+1

        s.pop()
```

### Palindrome

**leetcode 125 - Valid Palindrome [E]**   
Example 1:  
Input: "A man, a plan, a canal: Panama"  
Output: true  

Example 2:  
Input: "race a car"  
Output: false  

```python
class Solution():
    def isPalindrome(self, s):
        news=[a for a in s.lower() if a.isalnum()]

        return news==news[::-1]
```   

**leetcode 131 - Palindrome Partitioning [M] - dfs** see [dfs]()
