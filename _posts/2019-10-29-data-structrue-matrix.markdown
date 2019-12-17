---
layout: single
type: posts
title:  "Data Structure 2 - matrix"
date:   2019-10-29 15:18:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Matrix
  - Board Game
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Element Search  

see [binary search #matrix](/programming/2019/11/13/algorithm-binarysearch.html#find-element-in-matrix)    
**leetcode 74 - Search a 2D Matrix [M]**  
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:  
Integers in each row are sorted from left to right.  
The first integer of each row is greater than the last integer of the previous row.  

Example 1:  
Input:  
matrix = [
  [1,   3,  5,  7],  
  [10, 11, 16, 20],  
  [23, 30, 34, 50]]  
target = 3  
Output: true  

Example 2:  
Input:  
matrix = [  
  [1,   3,  5,  7],  
  [10, 11, 16, 20],  
  [23, 30, 34, 50]]    
target = 13  
Output: false  

**leetcode 240 - Search a 2D Matrix II [M]**  
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:  
Integers in each row are sorted in ascending from left to right.  
Integers in each column are sorted in ascending from top to bottom.  

Example:
Consider the following matrix:
[  
  [1,   4,  7, 11, 15],  
  [2,   5,  8, 12, 19],  
  [3,   6,  9, 16, 22],  
  [10, 13, 14, 17, 24],  
  [18, 21, 23, 26, 30]]  

Given target = 5, return true.  
Given target = 20, return false.  

### Word Search  

**leetcode 79 - Word Search [M] - backtracking** see [backtracking #matrix word search](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/algorithm-backtracking.html#matrix-word-search)  
Given a 2D board and a word, find if the word exists in the grid.  

Example:  
board=  
[['A','B','C','E'],  
['S','F','C','S'],  
['A','D','E','E'],]  

word="ABCCED" return True  
word="SEE" return True  
word="ABCB" return False  

**leetcode 212 - Word Search II [H] - backtracking + trie** see [backtracking #matrix word search](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/algorithm-backtracking.html#matrix-word-search)    
Given a 2D board and a list of words, find all words in the grid.  

Example:  
board=  
[['o','a','a','n'],   
['e','t','a','e'],   
['i','h','k','r'],  
['i','f','l','v']]  

words=['oath','pea','eat','rain']   
output: ['eat',oath]  

### Region Search

**leetcode 130 - Surrounded Regions [M] - stack or dfs**  
Given a 2D board containing ‘X’ and ‘O’ (the letter O), capture all regions surrounded by ‘X’.  
A region is captured by flipping all ‘O’s into ‘X’s in that surrounded region.  

Example:  

    X X X X
    X O O X
    X X O X
    X O X X

After running your function, the board should be:  

    X X X X
    X X X X
    X X X X
    X O X X

Note:  
border O and adjacent border O cannot be flipped  

Solution:  

1. put edge cells into stack  
2. find ‘O’ cell by poping every (r,c) pair in the stack
3. if ‘O’ cell found, push its neighbors (up,down,left,right) into stack until stack is empty
4. scan the 2d array and switch the letter  

```python
class Solution():
    def solve(self, board):
        if not board or not board[0]:
            return

        rows,cols=len(board),len(board[0])
        stack=[] #collect the edges 4*4 -> 12 cells of 4 edges

        for r in range(rows):
            stack+=[(r,0),(r,cols-1)] #first col, and last col
        for c in range(1,cols-1):
            stack+=[(0,c),(rows-1,c)] #first row, last rows' middle part

        while stack:
            r,c=stack.pop()
            if 0<=r<rows and 0<=c<cols and board[r][c]=='O': #if 'O' found, put its neighbour into stack as well
                board[r][c]='T'
                for dr,dc in [(1,0),(-1,0),(0,-1),(0,1)]: #up down left right
                    stack+=[(r+dr,c+dc)]

        for r in range(rows):
            for c in range(cols):
                if board[r][c]=='O':
                    board[r][c]='X'
                elif board[r][c]=='T':
                    board[r][c]='O'              
```

**leetcode 200 - Number of Islands [M] - backtracking** see [backtracking #matrix region search](https://ha5ha6.github.io/judy_blog/programming/2019/11/13/algorithm-backtracking.html#matrix-region-search)
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.  
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.  

Example 1:  
Input:  

    11110
    11010
    11000
    00000

Output: 1  

Example 2:  
Input:  

    11000
    11000
    00100
    00011

Output: 3

**leetcode 221 - Maximal Square [M] - dp** see see [dp #matrix region search](https://ha5ha6.github.io/judy_blog/programming/2019/10/23/algorithm-dp.html#matrix-region-search)  
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.  

Example:  
Input:   

    1 0 1 0 0
    1 0 1 1 1
    1 1 1 1 1
    1 0 0 1 0

Output: 4  
