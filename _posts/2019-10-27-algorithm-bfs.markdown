---
layout: single
type: posts
title:  "ALgorithms 8 - breadth first traversal"
date:   2019-10-27 21:45:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Bfs
author:  Jiexin Wang
classes:  wide
author_profile: true
toc: true
toc_label: "Index"
---

### bfs graph

normally use queue

### Problems

**leetcode 127 - Word Ladder [M]** see [topics3](/programming/2019/10/25/topics-series.html#word-ladder)


```python

```

**leetcode 286 - Walls and Gates [M]**  
You are given a m x n 2D grid initialized with these three possible values:    
-1 - A wall or an obstacle  
0 - A gate  
INF - Infinity means an empty room  

We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.  
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.  

Given the 2D grid:  

    INF -1  0   INF  
    INF INF INF -1  
    INF -1  INF -1  
    0   -1  INF INF  

After running your function, the 2D grid should be:    

    3 -1 0  1
    2  2 1 -1
    1 -1 2 -1
    0 -1 3  4

Solution 1:  multidirectional bfs  
Step 1:  

    INF -1  0    1  
    INF INF 1   -1  
    1   -1  INF -1  
    0   -1  INF INF  

Step 2:

    INF -1  0    1  
    2    2  1   -1  
    1   -1  2   -1  
    0   -1  INF INF  

Step 3:

    3   -1  0    1  
    2    2  1   -1  
    1   -1  2   -1  
    0   -1  3   INF

Step 4:   

    3   -1  0    1  
    2    2  1   -1  
    1   -1  2   -1  
    0   -1  3    4


```python
from collections import deque
class Solution():
    def wallsAndGates(self,rooms):
        if not rooms or not rooms[0]:
            return  

        INF=2**31-1
        rows,cols=len(rooms),len(rooms[0])
        #find gates
        frontier=deque([(r,c) for r in range(rows) for c in range(cols) if rooms[r][c]==0])

        while frontier:
            r,c=frontier.popleft()
            for i,j in [(r+1,c),(r-1,c),(r,c+1),(r,c-1)]:
                if i>=0 and i<rows and j>=0 and j<cols:
                    if rooms[i][j]==INF:
                        rooms[i][j]=rooms[r][c]+1
                        frontier.append((i,j))

```

Solution 2: dfs

```python
class Solution:
    def wallsAndGates(self, rooms):
        if not rooms:
            return

        row, col = len(rooms), len(rooms[0])
        for i in range(row):
            for j in range(col):
                if rooms[i][j] == 0:
                    self.dfs(rooms, i, j, 0)

    def dfs(self, rooms, x, y, dist):
        row, col = len(rooms), len(rooms[0])
        if x < 0 or x >= row or y < 0 or y >= col or rooms[x][y] < dist:
            return
        rooms[x][y] = dist
        for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
            self.dfs(rooms, x+dx, y+dy, dist+1)
```
