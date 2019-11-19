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

### Board Game
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

**leetcode 200 - Number of Islands [M]**  
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

Solution:  
1. scan rows and cols and check if '1', island+=1  
2. dfs check its adjacents are '1'  
3. if neighbor is '1', replace '1' with '0', check next neighbor (4 in total)  
4. if neighbor is '0', return      

```python
class Solution():
    def numIslands(self,grid):
        if not grid:
            return 0

        rows,cols=len(grid),len(grid[0])
        islands=0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c]=='1':
                    islands+=1
                    self.hasNeighbor(r,c,grid)

        return islands

    def hasNeighbor(self,r,c,grid):
        if r<0 or r>=len(grid) or c<0 or c>=len(grid[0]):
            return
        if grid[r][c]=='0':
            return

        grid[r][c]='0' #can change 1d/2d array grid value as global, but cannot change variable
        self.hasNeighbor(r+1,c,grid)
        self.hasNeighbor(r-1,c,grid)
        self.hasNeighbor(r,c+1,grid)
        self.hasNeighbor(r,c-1,grid)
```
