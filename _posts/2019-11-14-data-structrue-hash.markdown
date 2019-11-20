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
