---
layout: single
title:  "Data Structure Index"
date:   2019-10-21 16:43:25 +0900
related: true
categories: Programming
tags:
  - Index
  - Data Structure
author:  Jiexin Wang
author_profile: true
classes: wide
toc: true
toc_label: "Index"
---

### Complexity CheatSheet

![](https://ha5ha6.github.io/judy_blog/assets/images/bigo.png){:width="40%"}  

**Standard Data Structure**  

    -------------------------------------------------------------------------------------------------
    | Standard      | Time Complexity                                           |  Space Complexity |
    -------------------------------------------------------------------------------------------------
    |               | Average / Worst                                           |  Worst            |
    -------------------------------------------------------------------------------------------------
    |               | Access       | Search       | Insertion    | Deletion     |                   |
    -------------------------------------------------------------------------------------------------
    | Array         | O(1)         | O(n)         | O(n)         | O(n)         |  O(n)             |
    | Stack         | O(n)         | O(n)         | O(1)         | O(1)         |  O(n)             |
    | Queue         | O(n)         | O(n)         | O(1)         | O(1)         |  O(n)             |
    | LinkedListS   | O(n)         | O(n)         | O(1)         | O(1)         |  O(n)             |
    | LinkedListD   | O(n)         | O(n)         | O(1)         | O(1)         |  O(n)             |
    | SkipList      | O(logn)      | O(logn)      | O(logn)      | O(logn)      |  O(nlogn)         |
    -------------------------------------------------------------------------------------------------
    | HashTable     |              | O(1)/O(n)    | O(1)/O(n)    | O(1)/O(n)    |  O(n)             |
    -------------------------------------------------------------------------------------------------
    | Binary Tree   | O(n)         | O(n)         | O(n)         | O(n)         |  O(n)             |
    | BST           | O(logn)/O(n) | O(logn)/O(n) | O(logn)/O(n) | O(logn)/O(n) |  O(n)             |
    | KD Tree       | O(logn)/O(n) | O(logn)/O(n) | O(logn)/O(n) | O(logn)/O(n) |  O(n)             |
    | CartesianTree |              | O(logn)/O(n) | O(logn)/O(n) | O(logn)/O(n) |  O(n)             |
    -------------------------------------------------------------------------------------------------
    | B-Tree        | O(logn)      | O(logn)      | O(logn)      | O(logn)      |  O(n)             |
    | RedBlackTree  | O(logn)      | O(logn)      | O(logn)      | O(logn)      |  O(n)             |
    | AVL Tree      | O(logn)      | O(logn)      | O(logn)      | O(logn)      |  O(n)             |
    | SplayTree     |              | O(logn)      | O(logn)      | O(logn)      |  O(n)             |
    -------------------------------------------------------------------------------------------------


**Heap Data Structure**  

    -----------------------------------------------------------------------------------
    | Heap      | Time Complexity                                                     |
    -----------------------------------------------------------------------------------
    |           | Find Max | Extract Max | Increase Key | Insert  | Delete  | Merge   |
    -----------------------------------------------------------------------------------
    | Binary    | O(1)     | O(logn)     | O(logn)      | O(logn) | O(logn) | O(m+n)  |
    | Pairing   | O(1)     | O(logn)     | O(logn)      | O(1)    | O(logn) | O(1)    |
    | Binomial  | O(1)     | O(logn)     | O(logn)      | O(1)    | O(logn) | O(logn) |
    | Fibonacci | O(1)     | O(logn)     | O(1)         | O(1)    | O(logn) | O(1)    |
    -----------------------------------------------------------------------------------


**Graph Data Structure and Algorithms**  

    -------------------------------------------------------------------------------------------------
    | Graph           | Time Complexity                                                             |
    -------------------------------------------------------------------------------------------------
    |                 | Storage    | Add Vertex | Add Edge   | Remove Vertex | Remove Edge | Query  |
    -------------------------------------------------------------------------------------------------
    | AdjacencyList   | O(|V|+|E|) | O(1)       | O(1)       | O(|V|+|E|)    | O(|E|)      | O(|V|) |
    | IncidenceList   | O(|V|+|E|) | O(1)       | O(1)       | O(|E|)        | O(|E|)      | O(|E|) |
    | AdjacencyMatrix | O(|V|^2)   | O(|V|^2)   | O(1)       | O(|V|^2)      | O(1)        | O(1)   |
    | IncidenceMatrix | O(|V||E|)  | O(|V||E|)  | O(|V||E|)  | O(|V||E|)     | O(|V||E|)   | O(|E|) |
    -------------------------------------------------------------------------------------------------

    ------------------------------------------------------------------
    | Graph Algs      | Time Complexity           | Space Complexity |
    ------------------------------------------------------------------
    |                 | Average      / Worst      | Worst            |
    ------------------------------------------------------------------
    | DFS             | O(|V|+|E|)                |                  |
    | BFS             | O(|V|+|E|)                |                  |
    | TopologicalSort | O(|V|+|E|)                | O(|V|+|E|)       |
    | Dijkstra's      | O(|E|log|V|) / O(|V|^2)   | O(|V|+|E|)       |
    | Kruskal's       | O(|E|log|V|)              |                  |
    | Prim's          | O(|E|log|V|) / O(|V|^2)   | O(|V|+|E|)       |
    | Bellman-Ford    | O(|E||V|)                 | O(|V|)           |
    | Floyd-Warshall  | O(|V|^3)                  | O(|V|^2)         |
    | A* Search       | O(|E|)       / O(b^d)     | O(b^d)           |
    ------------------------------------------------------------------


### Data Structure

1.	[array](https://ha5ha6.github.io/judy_blog/programming/2019/10/29/data-structrue-array.html)
2.	[matrix](https://ha5ha6.github.io/judy_blog/programming/2019/10/29/data-structrue-matrix.html)
3.	[string](https://ha5ha6.github.io/judy_blog/programming/2019/10/26/data-structrue-string.html)
4.	[hash table](https://ha5ha6.github.io/judy_blog//programming/2019/11/14/data-structrue-hash.html)
5.	[linked list](https://ha5ha6.github.io/judy_blog/programming/2019/11/08/data-structrue-linkedlist.html)
6.	[stack](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/data-structrue-stack.html)
7.	[queue](https://ha5ha6.github.io/judy_blog/programming/2019/10/27/data-structrue-queue.html)
8.	[priority queue](https://ha5ha6.github.io/judy_blog/programming/2019/12/02/data-structrue-priorityqueue.html), [heap](https://ha5ha6.github.io/judy_blog/programming/2019/11/30/data-structrue-heap.html)
9.	[tree](https://ha5ha6.github.io/judy_blog/programming/2019/10/21/data-structrue-tree.html), [tree + linked list](https://ha5ha6.github.io/judy_blog/programming/2019/10/23/data-structrue-tree-linkedlist.html)
10. [binary search tree](https://ha5ha6.github.io/judy_blog/programming/2019/10/21/data-structrue-bst.html)
11. AVL tree, red-black tree
12. [trie](https://ha5ha6.github.io/judy_blog/programming/2019/11/29/data-structrue-tree-trie.html)
13. [segment tree](https://ha5ha6.github.io/judy_blog/programming/2019/12/03/data-structrue-segmenttree.html)
14. [graph](https://ha5ha6.github.io/judy_blog/programming/2019/11/01/data-structrue-graph.html)
15. [python built-in](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html)

### ALgorithms

1.	[sorting](https://ha5ha6.github.io/judy_blog/programming/2019/11/14/algorithm-sorting.html)
2.	[binary search](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/algorithm-binarysearch.html)
3.	[back tracking](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/algorithm-backtracking.html)
4.	[greedy](https://ha5ha6.github.io/judy_blog/programming/2019/12/06/algorithm-greedy.html)
5.	[dynamic programming](https://ha5ha6.github.io/judy_blog/programming/2019/10/23/algorithm-dp.html)
6.	[divide and conquer](https://ha5ha6.github.io/judy_blog/programming/2019/12/03/algorithm-dividenconquer.html)  
7.  [dfs](https://ha5ha6.github.io/judy_blog/programming/2019/10/31/algorithm-dfs.html) - graph related or more general
8.  [bfs](https://ha5ha6.github.io/judy_blog/programming/2019/10/27/algorithm-bfs.html) - graph related or more general
9.  [topological sort](https://ha5ha6.github.io/judy_blog/programming/2019/11/20/algorithm-topological.html) - graph related
10. [union find](https://ha5ha6.github.io/judy_blog/programming/2019/12/02/algorithm-unionfind.html) - graph related

### OThers

1.	[math](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/others-math.html)
2.	[bit manipulation](https://ha5ha6.github.io/judy_blog/programming/2019/11/02/others-bit-manipulation.html)
3.	[regex](https://ha5ha6.github.io/judy_blog/programming/2019/11/18/others-regex.html)
4.  [design](https://ha5ha6.github.io/judy_blog/programming/2019/11/15/others-design.html)
5.	two pointers
6.	minimax
7.	memoization
8.  brainteaser
9.  [SQL](https://ha5ha6.github.io/judy_blog/programming/2019/11/15/others-sql.html)
10. [file](https://ha5ha6.github.io/judy_blog/programming/2019/11/18/others-file.html)  
11. [object-oriented programming](https://ha5ha6.github.io/judy_blog/programming/2019/12/03/others-oop.html#object-copying)
12. [python class](https://ha5ha6.github.io/judy_blog/programming/2019/12/06/others-pythonclass.html)

### Topics

1.  [N Sum](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#n-sum---3-questions) [hash, binary search, design]
2.  [Parentheses](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#parentheses---2-questions) [hash, stack, backtracking]
3.  [Palindrome](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#palindrome---10-questions) [string, backtracking, dp, linked list, hash, trie]
4.  [Contains Dups](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#contains-dups---3-questions) [hash]
5.  [Combination](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#combination---7-questions) [backtracking, dp]
6.  [Permutation](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#permutation---6-questions) [list, backtracking, hash]
7.  [Word Break](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#word-break-iii) [dp, dfs]
8.  [Majority Element](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#majority-elements---8-solutions) [hash, set, Counter, sort, randomization, divide n conquer, Moore Voting, bit manipulation]
9.  [Kth Largest Element](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#kth-largest-element---4-solutions) [sorting, max heap, quick select, partition]
10. [Best Time Buy n Sell](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#best-time-buy-n-sell-iiiiiiiv) [list, minmax, dp]  
11. [House Robber](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#house-robber-iii) [dp]
12. [Word Ladder](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#word-ladder-iii) [bfs, dfs]




### Resources

**Big O CheatSheet** see [Eric](https://www.bigocheatsheet.com/), [bigocheatsheetio](https://bigocheatsheet.io/?dark-mode=false)  
**GeekTime Patch** see [geektime](https://time.geekbang.org/column/article/39922)
