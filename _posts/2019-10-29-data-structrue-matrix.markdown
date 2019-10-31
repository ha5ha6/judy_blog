---
layout: single
type: posts
title:  "Data Structure 2 - matrix"
date:   2019-10-29 18:00:25 +0900
categories: Programming
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Python Operation

1. 2 variables in for loop  
```python
for dr,dc in [(1,0),(-1,0),(0,-1),(0,1)]:  
    print(dr,dc)
```
0utput:  
1,0
-1,0
0,-1
0,1

2. 

### Board Game

**leetcode 130 - Surrounded Regions [M] - stack or dfs**   
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.  
A region is captured by flipping all 'O's into 'X's in that surrounded region.  
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
2. find 'O' cell by poping every (r,c) pair in the stack  
3. if 'O' cell found, push its neighbors (up,down,left,right) into stack until stack is empty  
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
