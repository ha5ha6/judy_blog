---
layout: single
type: posts
title:  "Data Structure 8 - hash table"
date:   2019-11-14 21:19:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Hash Table
  - N-Sum
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Find Dups

**leetcode 217 - Contains Duplicate [E]**  
Given an array of ints find if the array contains any duplicates.

Examples:  
Input: [1,2,3,1]  
Output: True  
Input:[1,2,3,4]  
Output: False  
Input: [1,1,1,3,3,4,3,2,4,2]  
Output: True  

Solution 1: hash  

```python
class Solution():
    def containsDuplicate(self,nums):
        seen={}
        for n in nums:
            if n in seen:
                return True

            seen[n]=1

        return False
```

Solution 2: set

```python
class Solution():
    def containsDuplicate(self,nums):

        return len(nums)!=len(set(nums))

```

**leetcode 219 - Contains Duplicate II [E]**  
Given an array of int and an int k, find out whether there are two distinct
indices i and j in the array such that arr[i]=arr[j] and the absolute
difference between i and j is at most k  

Examples:  
Input: [1,2,3,1],k=3  
Output: True  
Input:[1,0,1,1],k=1  
Output: True  
Input: [1,2,3,1,2,3], k=2  
Output: False  

```python
class Solution():
    def containsNearbyDuplicate(self,nums,k):
        seen={}
        for i,n in enumerate(nums):
            if n in seen:
                if k>=i-seen[n]:
                    return True

            seen[n]=i

        return False
```

**leetcode 220 - Contains Duplicate III [M]**  
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between arr[i] and arr[j] is at most t and the absolute difference between i and j is at most k.  

Example:  
Input: [1,2,3,1],k=3,t=0  
Output: True  

Solution:

      Requirement:
      |i-j|<=k
      |arr[i]-arr[j]|<=t
    =>|arr[i]/t-arr[j]/t|<=1
    =>|floor(arr[i]/t)-floor(arr[j]/t)|<=1
    =>floor(arr[j]/t) belongs to {floor(nums[i]/t)-1,floor(nums[i]/t),floor(nums[i]/t)+1}

    if floor(arr[j]/t) not belong to {floor(nums[i]/t)-1,floor(nums[i]/t),floor(nums[i]/t)+1}
    then |arr[i]-arr[j]|<=t is invalid


```python
from collections import OrderedDict
class Solution():
    def containsNearbyAlmostDuplicate(self,nums,k,t):
        #t = |arr[i]-arr[j]|
        #k = |i-j|
        if k<1 or t<0:
            return False

        seen=OrderedDict()
        for i,n in enumerate(nums):
            key=n/max(1,t) # floor(nums[j]/t)
            for m in (key-1,key,key+1):
                if m in seen and abs(n-seen[m])<=t:
                    return True

            seen[key]=n
            if i>=k:
                dict.popitem(last=False)

        return False
```



### Isomorphic

**leetcode 205 - Isomorphic Strings [E]**  
Given two strings s and t, determine if they are isomorphic.  
Two strings are isomorphic if the characters in s can be replaced to get t.  
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.  

Examples:  
Input: s = "egg", t = "add"  
Output: true  
Input: s = "foo", t = "bar"  
Output: false  
Input: s = "paper", t = "title"  
Output: true  

Solution:  
1. compare lens
2. use a dict to map s->t, and a set to record seen t  
3. if s in the dict, compare dict[s] with real t: egg,add  
4. if s not in the dict but t in seen: egg,bbr  
5. if s not in dict and t not in seen, create dict and seen entry   

```python
class Solution():
    def isIsomorphic(self,s,t):
        if len(s)!=len(t):
            return False

        s2t={}
        seen_t=set()
        for cs,ct in zip(s,t):
            if cs in s2t:
                if s2t[cs]!=ct:
                    return False
            elif ct in seen_t:
                return False

            s2t[cs]=ct
            seen_t.add(ct)

        return True
```

**leetcode 290 - Word Pattern [E]**  
Given a pattern and a string str, find if str follows the same pattern.  
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.  

Examples:  
Input: pattern = "abba", str = "dog cat cat dog"  
Output: true  
Input: pattern = "abba", str = "dog cat cat fish"  
Output: false  
Input: pattern = "aaaa", str = "dog cat cat dog"  
Output: false  
Input: pattern = "abba", str = "dog dog dog dog"  
Output: false  

Solution 1: same as leetcode 205  

```python
class Solution():
    def wordPattern(self, pattern, str):
        if len(pattern)!=len(str.split()):
            return False

        p2s={}
        seen_str=set()
        for p,s in zip(list(pattern),str.split()):
            if p in p2s:
                if p2s[p]!=s:
                    return False
            elif s in seen_str:
                return False

            p2s[p]=s
            seen_str.add(s)

        return True
```

Solution 2: two dicts double mapping check  

```python
class Solution():
    def wordPattern(self, pattern, str):
        if len(pattern)!=len(str.split()):
            return False

        p2s,s2p={},{}
        for p,s in zip(list(pattern),str.split()):
            if p in p2s and p2s[p]!=s:
                return False
            p2s[p]=s

            if s in s2p and s2p[s]!=p:
                return False
            s2p[s]=p

        return True
```

### N Sum

using python dict see [python built-in #dict](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#dict-)

**leetcode 1 - Two Sum [E]**  
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target  

Example:  
Given nums=[2,7,11,15], target=9  
Because nums[0]+nums[1]=2+7=9, return [0,1]  

Solution:  
record a hash table n2i={} of {number:index}  

```python
class Solution():
    def twoSum(self,nums,target):
        n2i={} #number to index
        for i,n in enumerate(nums):
            if target-n in n2i:
                return [i,n2i[target-n]]

            n2i[n]=i

        return []
```   

### Parentheses

**leetcode 20 - Valid Parentheses [E] - hashtable + stack** see [stack #parentheses](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/data-structrue-stack.html#parentheses)

### Word Dictionary / Trie

**leetcode 208 - Implement Trie (Prefix Tree) [M] - design, linked hash** see [trie](https://ha5ha6.github.io/judy_blog/programming/2019/11/29/data-structrue-tree-trie.html)  
**leetcode 211 - Add and Search Word [M] - hash**  
Design a data structure that supports the following two operations:  
void addWord(word)  
bool search(word)  
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.  

Example:  
addWord("bad")  
addWord("dad")  
addWord("mad")  
search("pad") -> false  
search("bad") -> true  
search(".ad") -> true  
search("b..") -> true  

Note:  
You may assume that all words are consist of lowercase letters a-z.  

        {3:['bad','dad','mad']}
        for each w:
                'bad'
                'dad'
                'mad'
        for each i,c:
                 0,b
                 1,a
                 2,d


```python
from collections import defaultdict

class WordDictionary(object):
    def __init__(self):
        self.dict=defaultdict(list)

    def addWord(self, word):
        self.dict[len(word)].append(word)

    def search(self, word):
        for w in self.dict[len(word)]:
            cnt=0
            for i,c in enumerate(w):
                if c==word[i] or word[i]=='.':
                    cnt+=1

            if cnt==len(word):
                return True

        return False                
```
