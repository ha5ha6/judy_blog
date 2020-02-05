---
layout: single
type: posts
title:  "Data Structure 3 - string"
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

## Background

### Definition

A string is traditionally a sequence of characters, either as a literal constant or as some kind of variable. The latter may allow its elements to be mutated and the length changed, or it may be fixed (after creation).  
A string is generally considered as a data type and is often implemented as an array data structure of bytes (or words) that stores a sequence of elements, **typically characters**, using some character encoding. String may also denote more general arrays or other sequence (or list) data types and structures.

Depending on the programming language and precise data type used, a variable declared to be a string may either cause storage in memory to be statically allocated for a predetermined maximum length or employ dynamic allocation to allow it to hold a variable number of elements.

When a string appears literally in source code, it is known as a string literal or an anonymous string.

In formal languages, which are used in mathematical logic and theoretical computer science, a string is a finite sequence of symbols that are chosen from a set called an alphabet.  

### Implementation

In Java, instead of copying string for concatenation, **StringBuilder** can simply creates a resizable array of all the strings, copying them back to a string only when necessary.  

ref see [python string builder](https://waymoot.org/home/python_string/)

### Python Operation

0. string to list
```python
pattern='abba'
list(pattern)
>>['a','b','b','a']
```

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

8. replace
```python
#remove space
s='ab c e f'
s.replace(' ','')
>>'abcef'
```


### Knowledge

bit: the smallest unit of storage, 1 bit stores just a 0 or 1  
byte: collection of 8 bits, i.e. 01011010, 1 byte can store one character, i.e. 'A','x','$'  
ASCII: 1 byte, fixed length, NO.0~127, in total 128, 'A'-65, 'z'-122    
GB2312: Chinese  
Unicode: 2 bytes, 4 bytes for strange words, fixed length, include all languages   
UTF-8: changeable length, 1-4 bytes, 1 bytes for alphabet, 3 bytes for Chinese character, 4 for strange words, ACSII is a part of UTF-8  

## Cracking  

**1.1 is Unique**: Implement an algorithm to determine if a string has all unique chars.  
What if you cannot use additional data structure?  

Check points:  
- check if the string is ACSII (128), Unicode (UTF-8 1112064), or extended ACSII (256)  
- return False if the string length exceeds the 128-char alphabet  
- can argue TO(1) because the scan would not exceed 128

Solution 1: boolean array, TO(n), n=len(str), or TO(min(c,n)), c=size of the char set, SO(128), assume ASCII-128  

```python
class Solution():
    def isUnique(self,str):
        if len(str)>128:
            return False

        flag=[False]*128
        for c in str:
            if flag[ord(c)]:
                return False
            flag[ord(c)]=True

        return True
```

Solution 2: bit vector, save SO(128) to SO(1), assume only use 'a'-'z'  

```python
class Solution():
    def isUnique(self,str):
        checker=0
        for c in str:
            v=ord(c)-ord('a')
            if (checker & (1<<v))>0:
                return False

            checker |= 1<<v

        return True
```

Solution 3: not using additional data structure  

compare every char of the string to every other char of the string TO(n^2)  

Solution 4: not using additional data structure  

if modify the string is allowed, sort the string in TO(nlogn), then linearly check the string for neighboring char that are indentical  

**1.2 Check Permutation**: Given two strings, write a method to decide if one is a permutation of the other (similar as leetcode 242 - Valid Anagram [E])

check points:
- case sensitive? i.e. 'God' vs 'dog'
- whitespace is significant? i.e. 'god   ' vs 'dog'
- check lengths, different length cannot be permutations of each other  

Solution 1: sorting, TO(mlogm+nlogn)

```python
class Solution():
    def isPermutation(self,s,t):
        if len(s)!=len(t):
            return False

        return sorted(s)==sorted(t)
```

Solution 2: check counts TO(m+n), assume it's ASCII

```python
class Solution():
    def isPermutation(self,s,t):
        if len(s)!=len(t):
            return False

        cnt=[0]*128 #assumption
        for c in s:
            cnt[ord(c)]+=1

        for c in t:
            cnt[ord(c)]-=1
            if cnt[ord(c)]<0:
                return False

        return True
```

Solution 3: check counts, assume it's Unicode  

```python
class Solution():
    #waste SO, two dicts
    def isPermutation(self,s,t):
        if len(s)!=len(t):
            return False

        alpha={}
        beta={}
        for c in s:
            if c in alpha:
                alpha[c]+=1
            else:
                alpha[c]=1

        for c in t:
            if c in beta:
                beta[c]+=1
            else:
                beta[c]=1

        return alpha==beta

    def isPermutation_2(self,s,t):
        if len(s)!=len(t):
            return False

        d={}
        for c in s:
            if c in d:
                d[c]+=1
            else:
                d[c]=1

        for c in t:
            d[c]-=1

        return all(v==0 for v in d.values())
```

make a counter 2 using dict:

```python
from collections import defaultdict

str='abcdefgadbdec'
d=defaultdict(int)

for c in str:
    d[c]+=1

>>defaultdict(int, {'a': 2, 'b': 2, 'c': 2, 'd': 3, 'e': 2, 'f': 1, 'g': 1})
```

make a counter 3 using dict:

```python
str='abcdefgadbdec'
d={x:str.count(x) for x in str}

>>{'a': 2, 'b': 2, 'c': 2, 'd': 3, 'e': 2, 'f': 1, 'g': 1}
```

make a counter 4 using dict:

```python
str='abcdefgadbdec'
d={}

for c in s:
    d[c]=d.get(c,0)+1
```

**1.3 URLify**: Write a method to replace all spaces in a string with '%20'.  
You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.  

Input: 'Mr John Smith    ', 13  
Output: 'Mr%20John%20Smith'

**String Manipulation common approach**: to edit the string starting from the end and working backwards. Because we have an extra buffet at the end, which allows us to change characters without worrying what we're overwriting!

2 scans:  
1. count the number of spaces, and tripling this number for extra character
2. edit the string in reverse order  

should be careful of the total length of the str list  


    0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
    m r _ j o h n _ s m i  t  h  _  _  _  _  _  cnt_space=2, idx=13+4=17
                          <-  i        <- idx-1
    m r % 2 0 j o h n % 2  0  s  m  i  t  h


```python
class Solution():
    def urlify(self,str,trueLength):
        cnt_space=0
        str=list(str)
        for i in range(trueLength):
            if str[i]==' ':
                cnt_space+=1

        idx=trueLength+cnt_space*2 #total length needed

        for i in range(trueLength-1,-1,-1):
            if str[i]==' ':
                str[idx-1]='0'
                str[idx-2]='2'
                str[idx-3]='%'
                idx-=3
            else:
                str[idx-1]=str[i]
                idx-=1
```

Solution 2:

```python
class Solution():
    def urlify(self,str,trueLength):
        return '%20'.join(str.split())

    def urlify(self,str,trueLength):
        return str[:trueLength].replace(' ','%20')

    def urlify(self,str,trueLength):
        return ''.join('%20' if c==' ' else c for c in str[:trueLength])
```

**1.4 Palindrome Permutation**: Given a string, write a function to check if it is a permutation of a palindrome. (same as leetcode 266 - Palindrome Permutation [E])

Input: Tact Coa  
Output: True  
Explanation: taco cat, atco cta  

Note: a string can have no moare than one character that is odd, check max one odd  

Solution 1: TO(n)   

```python
class Solution():
    def isPalindromePermutation(self,s):
        cnt=dict()
        s.replace(' ','')

        for c in s:
            if c in cnt:
                cnt[c]+=1
            else:
                cnt[c]=1

        foundOdd=False
        for c in cnt:
            if cnt[c]%2==1:
                if foundOdd:  #only find once!
                    return False
                foundOdd=True

        return True
```

Solution 2: TO(n)  

```python
class Solution():
    def isPalindromePermutation(self,s):
        cnt=dict()
        cnt_odd=0
        s.replace(' ','')

        for c in s:
            if c in cnt:
                cnt[c]+=1
            else:
                cnt[c]=1

            if cnt[c]%2==1:
                cnt_odd+=1
            else:
                cnt_odd-=1

        return cnt_odd<=1
```

Solution 3: bit vector, switch on/off as even/odd  
When we see a letter, we map it to an integer between 0 to 26  
Then we toggle the bit at that value  
At the end, we check that at most one bit in the integer is set to 1  

    00010000-1=00001111

     00010000
    &00001111
    ----------
            0

    00101000-1=00100111

     00101000
    &00100111
    ----------
     00100000

```python
class Solution():
   def isPalindromePermutation(self,s):
       bitVector=0
        for c in s:
          v=ord(c)
          if v>0:
              mask=1<<v
              if (bitVector&mask)==0:
                  bitVector |=mask
              else:
                  bitVector &=~mask

        return bitVector==0 or (bitVector&(bitVector-1)==0)
```

**1.5 One Away**: There are 3 types of edits that can be performed on strings:  
1. insert a character
2. remove a character
3. replace a character  
Given two strings, write a function to check if they are one edit (or zero edit) away.  

pale, ple -> True   
pales, pale -> True  
pale, bale -> True  
pale, bae -> False  

Solution 1: brute force TO(n), n=len(shorter string)   

- replacement: only one char different  
- insertion: if you compared the strings, they would be identical except for a shift at some point in the strings  
- removal: the inverse of insertion, so they can be merged  

```python
class Solution():
    def oneEditAway(self,s,t):
        if len(s)==len(t):
            return self.oneEditReplace(s,t)
        if len(s)+1==len(t):
            return self.oneEditInsert(s,t)
        if len(s)-1==len(t):
            return self.oneEditInsert(t,s)

        return False

    def oneEditReplace(self,s,t):
        diff=False
        for c,d in zip(s,t):
            if c!=d:
                if diff:
                    return False
                diff=True

        return True  

    def oneEditInsert(self,s,t):
        i1,i2=0,0
        while i1<len(s) and i2<len(t):
            if s[i1]!=t[i2]:
                if i1!=i2:
                    return False
                i2+=1
            else:
                i1+=1
                i2+=1

        return True
```

Solution 2: merge two methods  

```python
class Solution():
    def oneEditAway(self,s,t):
        if abs(len(s)-len(t))>1:
            return False  

        sh=s if len(s)<len(t) else t  #short
        lo=t if len(s)<len(t) else s  #long

        i1,i2=0,0
        diff=False

        while i1<len(sh) and i2<len(lo):
            if sh[i1]!=lo[i2]:
                if diff:
                    return False  
                diff=True  

                if len(sh)==len(lo):
                    i1+=1
            else:
                i1+=1

            i2+=1

        return True
```

**1.6 String Compression**: Implement a method to perform basic string compression using the counts of repeated characters.  

aabccccaaa -> a2b1c4a3  

If the "compressed" string would not become smaller than the original string, your method should return the original string.  

Solution 1: brute force, TO(p+k^2), p=len(s), k=number of character sequences  
if 'aabccdeeaa', there are 6 character sequences  
the slowness is on string concatenation, it operates in TO(n^2), see string builder  

```python
class Solution():
    def compress(self,s):
        res=""
        cnt_consecutive=0
        for i in range(len(s)):
            cnt_consecutive+=1

            if (i+1>=len(s)) or s[i]!=s[i+1]:
                res+=s[i]+str(cnt_consecutive)
                cnt_consecutive=0

        return res if len(res)<len(s) else s  
```

String Builder    

```python
new_s=""
new_s+=s[i]+str(cnt)

new_s=[]
new_s.append(s[i])
new_s.append(str(cnt))

''.join(new_s)
```

Solution 2: save space for stringbuilder  

```python
class Solution():
    def compress(self,s):
        finalLength=countCompression(s)
        if finalLength>=len(s):
            return s

        compressed=[] #stringbuilder len=finalLength
        cnt_consecutive=0
        for i in range(len(s)):
            cnt_consecutive+=1
            if i+1>=len(s) or s[i]!=s[i+1]:
                compressed.append(s[i])
                compressed.append(str(cnt_consecutive))
                cnt_consecutive=0

        return "".join(compressed)

    def countCompression(self,s):
        compressedLength=0
        cnt_consecutive=0
        for i in range(len(s)):
            cnt_consecutive+=1
            if i+1>=len(s) or s[i]!=s[i+1]:
                compressedLength+=1+len(str(cnt_consecutive))
                cnt_consecutive=0

        return compressedLength
```

**1.9 String Rotation**: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.  

"waterbottle" is a rotation of 'erbottlewat'  

Solution:  
- find the pivot  
s1=xy=waterbottle  
x=wat  
y=erbottle  
s2=yx=erbottlewat  

- yx will always be a substring of xyxy, that is s2 will always be a substring of s1s1
- if isSubstring() is TO(A+B), A,B are string lengths, isRotation() is TO(n)

```python
class Solution():
    def isRotation(self,s1,s2):
        l=len(s1)
        if l==len(s2) and l>0:
            s1s1=s1+s1
            return self.isSubstring(s1s1,s2)

        return False

    def isSubstring(self,s1,s2):
        #already known
```

## Problem

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

### Shifting  

**leetcode 249 - Group Shifted Strings [M] - hash**  
Given a string, we can "shift" each of its letter to its successive letter    
i.e: 'abc'->'bcd'->...->'xyz'  
Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence  

Input:['abc','bcd','acef','xyz','az','ba','a','z']  
Output: [['abc','bcd','xyz'],['az','ba'],['acef'],['a','z']]  

Solution:  
use a auto-length list dict to record each head char of shifted values  

    {'a':'a','z',  
     'az':'az','ba',  
     'abc':'abc','bcd','xyz',  
     'acef':'acef'}

shift is determined by the first char: shift=ord(s[0])-ord('a')  
check shifted by (ord(c)-ord('a')-shift)%26, return the origin as dict key, given string as dict values       

```python
from collections import defaultdict
class Solution():
    def groupStrings(self,strings):
        shifted=defaultdict(list)
        for s in strings:
            shift=ord(s[0])-ord('a')
            s_shifted=''.join([chr((ord(c)-ord('a')-shift)%26+ord('a')) for c in s])
            shifted[s_shifted].append(s)

        return shifted.values()
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

**leetcode 131 - Palindrome Partitioning [M] - backtracking** see [backtracking #palindrome](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/algorithm-backtracking.html#palindrome)

**leetcode 214 - Shortest Palindrome [H]**  
Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it.  
Find and return the shortest palindrome you can find  performing this transformation.  

Example 1:  
Input: 'aacecaaa'  
Output: 'aaacecaaa'  

Example 2:  
Input: 'abcd'  
Output: 'dcbabcd'  

Solution 1:  
1. make a reverse string t  
2. check from tail to see when s==t  
3. return t leftover + s  

        len=8
        i: 8,7,...,1
        len-i: 0,1,..7

        s[:i]?=t[len-i:]
        s[:8]?=t[0:]  
        s[:7]?=t[1:]  s='aacecaa|a'
                      t='a|aacecaa'
                    res='a' from t + s
                       ='a' + 'aacecaaa'
                       ='aaacecaaa'


```python
class Solution():
    def shortestPalindrome(self, s):
        if len(s)==0:
            return ''

        t=s[::-1]
        for i in range(len(s),0,-1):
            if s[:i]==t[len(s)-i:]:   #s[:8]==t[0:] s[:7]==t[1:] ...
                break

        return t[:len(s)-i]+s
```   

Solution 2:  
use KMP failure function algorithm to find the longest prefix of s that is also a suffix of s[::-1]   

**leetcode 266 - Palindrome Permutation [E]**  
Given a string, determine if a permutation of the string could form a palindrome  

Input: 'code'  
Output: False  
Input: 'aab'  
Output: True  
Input: 'carerac'  
Output: True  

Solution:  
should be even characters and at most one odd character in the middle  
i.e. 'carerac', after permutaiton can be 'racecar'  

```python
from collections import Counter
class Solution():
    def canPermutePalindrome(self, s):
        cnt=Counter(s)
        odd=False
        for l in cnt:
            if cnt[l]%2==1:
                if odd:  #check if have more than one odd char
                    return False
                odd=True

        return True
```   

### Anagram  

**leetcode 242 - Valid Anagram [E]**  
Anagram means chars in string has randomized order but still same chars  

Input: s="anagram", t="nagaram"  
Output: True

Solution 1: hash TO(m+n)  

```python
from collections import Counter
class Solution():
    def isAnagram(self,s,t):
        return Counter(s)==Counter(t)
```

Solution 2: sort TO(mlogm+nlogn)    

```python
class Solution():
    def isAnagram(self,s,t):
        return sorted(s)==sorted(t)
```

### Flip Game

**leetcode 293 - Flip Game [E]**  
You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive “++” into “–”. The game ends when a person can no longer make a move and therefore the other person will be the winner.  

Write a function to compute all possible states of the string after one valid move.  

Input: s = “++++“  
Output:  
[”--++”,  
"+--+",  
"++--"]  

```python
class Solution():
    def generatePossibleNextMoves(self,s):
        res=[]
        for i in range(len(s)-1):
            if s[i:i+2]=='++':
                res.append(s[:i]+'--'+s[i+2:])

        return res
```

### Encode n Decode  

**leetcode 271 - Encode and Decode Strings [M]**  
Design an algorithm to encode a list of strings to a string.  
The encoded string is then sent over the network and is decoded back to the original list of strings.  

i.e. encode ['abc','def','hij'] to '3\*abc3\*def3\*hij'

Solution:  
encode to 'len+\*+sub_string'

```python
class Codec():
    def encode(self,strs):
        en=[]
        for s in strs:
            en.append(str(len(s)))
            en.append('*')
            en.append(s)

        return "".join(en)

    def decode(self,s):
        de=[]
        i=0
        while i<len(s):
            j=s.find('*',i) #find start from index i
            sub_len=int(s[i:j])
            de.append(s[j+1:j+1+sub_len])
            i=j+1+sub_len

        return de
```
