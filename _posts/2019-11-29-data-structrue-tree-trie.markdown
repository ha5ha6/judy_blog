---
layout: single
type: posts
title:  "Data Structure 11 - trie"
date:   2019-11-29 15:14:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Tree
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
author_profile: true
---

### Definition
Trie is an efficient information retrieval data structure.  
Using Trie, search complexities can be brought to optimal limit (key length). If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N, where M is maximum string length and N is number of keys in tree.  
Using Trie, we can search the key in O(M) time. However the penalty is on Trie storage requirements (Please refer Applications of Trie for more details)  

Suppose we store words, 'Car', 'Cat', 'Done', 'Trie', 'Try'

            root
          /   |   \
         C    D    T
        /     |     \
       a      o      r
      / \     |     / \
     r*  t*   n    i   y*
              |    |
              e*   e*


```python      
class TrieNode(object):
    def __init__(self):
        self.children={}
        self.terminal=False
```

### Implementation

**leetcode 208 - Implement Trie (Prefix Tree) [M] - design, linked hash**  
Implement a trie with insert, search, and startsWith methods.  

Example:  
Trie trie = new Trie();  
trie.insert("apple");  
trie.search("apple");   // returns true  
trie.search("app");     // returns false  
trie.startsWith("app"); // returns true  
trie.insert("app");     
trie.search("app");     // returns true  

Note:  
You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.  

```python
class TrieNode(object):
    def __init__(self):
        self.children={}
        self.terminal=False

class Trie(object):
    def __init__(self):
        self.root=TrieNode()
        self.root.terminal=True

    def insert(self, word):
        node=self.root
        for c in word:
            if c not in node.children:
                node.children[c]=TrieNode()
            node=node.children[c]
        node.terminal=True

    def search(self, word):
        node=self.root
        for c in word:
            if c in node.children:
                node=node.children[c]
            else:
                return False
        return node.terminal

    def startsWith(self, prefix):
        node=self.root
        for c in prefix:
            if c in node.children:
                node=node.children[c]
            else:
                return False

        return True
```

### Word Search  

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

            root
            / | \
           b  d  m
           |  |  |
           a  a  a
           |  |  |
           d  d  d

        input: '.ad'
        '.', cur_level=[root], next_level=['a','a','a']
        'a', cur_level=['a','a','a'], next_level=['d','d','d']
        'd', cur_level=['d','d','d'], next_level=[]

```python
class TrieNode(object):
    def __init__(self):
        self.children={}
        self.terminal=False

class Trie(object):
    def __init__(self):
        self.root=TrieNode()
        self.root.terminal=True

    def addWord(self, word):
        node=self.root
        for c in word:
            if c not in node.children:
                node.children[c]=TrieNode()
            node=node.children[c]
        node.terminal=True

    def search(self, word):
        cur_level=[self.root]
        for c in word:
            next_level=[]
            if c=='.':
                for node in cur_level:
                    next_level.extend(node.children.values())
            else:
                for node in cur_level:
                    if c in node.children:
                        next_level.append(node.children[c])

            if not next_level:
                return False

            cur_level=next_level

        for node in cur_level:
            if node.terminal:
                return True

        return False
```

**leetcode 745 - Prefix and Suffix Search [H]**  
Given many words, words[i] has weight i.  
Design a class WordFilter that supports one function, WordFilter.f(String prefix, String suffix). It will return the word with given prefix and suffix with maximum weight. If no word exists, return -1.  

Examples:  
Input:
WordFilter(["apple"])  
WordFilter.f("a", "e") // returns 0  
WordFilter.f("b", "") // returns -1  

Note:  
words has length in range [1, 15000].  
For each test case, up to words.length queries WordFilter.f may be made.  
words[i] has length in range [1, 10].  
prefix, suffix have lengths in range [0, 10].  
words[i] and prefix, suffix queries consist of lowercase letters only.  


**leetcode 212 - Word Search II [H] - backtracking + trie** see [backtracking #martix word search](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/algorithm-backtracking.html#matrix-word-search)
