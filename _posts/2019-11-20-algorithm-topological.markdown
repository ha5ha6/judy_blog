---
layout: single
type: posts
title:  "ALgorithms 9 - topological sort"
date:   2019-11-20 21:25:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Graph
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Motivation  

Many real world situation can be modeled as a **graph** with **directed edges** where some events must occur before others, say
- prerequisites problems, i.e. school class prerequisites
- program dependencies
- build systems
- advanced-packaging tool (apt-get)
- event/task scheduling
- assembly instructions

For example, school class prerequisites

              ---> class C ---> class J
    class A*--|              |
              |--> class D*--|
    class B*--|              |  
              |    class E*---> class H*
              |
              ---> class F ---> class I

taking class H should take class D and E first, to take class D and E, should take class A and B first

For another example, program dependencies

        |--->B--->E--->H----
    A---|      |    |      |
        |--->D-|    ---->G--->J*
               |      |    |
             C----->F------->I  K

one solution: A,B,D,C,F,E,G,H,J, and I,K are not dependencies

### Definition  

A **topological ordering** is an ordering of the vertices in a directed graph where for each directed edge (u,v), vertex u comes before v in the ordering.   

The **topological sort** algorithm can find a topological ordering in O(V+E) time!  
Note, V are the vertices and E are the edges!

Note: **topological ordering are not unique!!**

Some graph cannot have a valid ordering if it contains a **cycle**.

    1--->2---------->4*
    ^    |   |       |
    |    |   |       |
    0------->3*<-|   |
    |            |   |
    ------------>5*<--


**Directed Acyclic Graphs** (DAG) is the only type of graph has a valid topological ordering. These are graphs with directed edges and no cycles.  
DAG can be verified by **Tarjan's strongly connected component algorithm**.  

By definition, all **rooted trees** have a topological ordering since they do not contain any cycles.  

### the Algorithm - graph, set and stack/queue

1. pick an unvisited node   
2. beginning with the selected node, do a dfs exploring only unvisited nodes, use set for seen  
3. on the recursive callback of the dfs, add the current node to the topological ordering in reverse order  

Example:  

![](/assets/images/topo.png){:width="50%"}  

randomly pick H, do dfs  

    H -> J -> M, M has no kids, enqueue M, q=,M] and back track to J  
         J -> L, L has no kids, enqueue L, q=L,M] and back track to J  
         J has no other kids, enqueue J, q=J,L,M] and back track to H
    H -> I -> L already in queue, back track to I
         I has no other kids, enqueue I, q=I,J,L,M] back track to H
    H has no other kids, enqueue H, q=H,I,J,L,M] end

randomly pick E, do dfs  

    E -> A -> D -> G -> I
                   G        q=G,H,I,J,L,M]
              D -> H            
              D             q=D,G,H,I,J,L,M]
         A                  q=A,D,G,H,I,J,L,M]
    E -> F -> K -> J
              K             q=K,A,D,G,H,I,J,L,M]              
         F                  q=F,K,A,D,G,H,I,J,L,M]
    E                       q=E,F,K,A,D,G,H,I,J,L,M]

randomly pick C, do dfs  

    C -> B -> D
         B                  q=B,E,F,K,A,D,G,H,I,J,L,M]
    C                       q=[C,B,E,F,K,A,D,G,H,I,J,L,M]

pseudo code 1:

```python
# assumption: graph is stored as adjacency list
def topsort(graph):
    N=graph.numberOfNodes()
    v2=[False]*N #track if visited binary
    ordering=[0]*N #result
    i=N-1 #index for ordering array backwards

    for k in range(N):
        if not v2[k]:
            visited=[]
            dfs(k,v2,visited,graph)
            for nodeId in seen:
                ordering[i]=nodeId
                i-=1

    return ordering

def dfs(k,v2,visted,graph):
    v2[k]=True
    edges=graph.getEdgesOutFromNode(k)
    for e in edges:
        if not v2[e.to]:
            dfs(e.to,v2,visted,graph)

    visited.append(k)
```

After optimization:

```python
# assumption: graph is stored as adjacency list
def topsort(graph):
    N=graph.numberOfNodes()
    v2=[False]*N #track if visited binary
    ordering=[0]*N #result
    i=N-1 #index for ordering array backwards

    for k in range(N):
        if not v2[k]:
            i=dfs(i,k,v2,ordering,graph)

    return ordering

def dfs(k,v2,visted,graph):
    v2[k]=True
    edges=graph.getEdgesOutFromNode(k)
    for e in edges:
        if not v2[e.to]:
            i=dfs(i,e.to,v2,ordering,graph)

    ordering[i]=k
    return i-1
```

### the Algorithm - dict

DAG can be represented by G={'a':'bce','b':d,'c':'d','d':'','e':'cd'}  
Build an in-degree dict={'a':0,'b':1,'c':2,'d':3,'e':1}  

Explanation:  
0 node before 'a'  
1 node before 'b', which is 'a'  
2 nodes before 'c', which are 'a','e'  
3 nodes before 'd', which are 'b','c','e'  
1 node before 'e', which is 'a'  

Solution:  
1. build in-degree dict
2. put in-degree[key]==0 to res (enqueue)  


        G={'a':'bce','b':'d','c':'d','d':'','e':'cd'}
        ide={'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 1} #in_degree

        start=['a'], start.pop(), res=['a'] for v in G['a']

        v: 'b' ide['b']-=1->0  ide={'a':0,'b':0,'c':2,'d':3,'e':1}  start=['b']
           'c' ide['c']-=1     ide={'a':0,'b':0,'c':1,'d':3,'e':1}
           'e' ide['e']-=1->0  ide={'a':0,'b':0,'c':1,'d':3,'e':0}  start=['b','e']

        start=['b','e'], start.pop(), res=['a','e'] for v in G['e']

        v: 'c' ide['c']-=1->0  ide={'a':0,'b':0,'c':0,'d':3,'e':0}  start=['b','c']
           'd' ide['d']-=1     ide={'a':0,'b':0,'c':0,'d':2,'e':0}

        start=['b','c'], start.pop(), res=['a','e','c'] for v in G['c']

        v: 'd' ide['d']-=1     ide={'a':0,'b':0,'c':0,'d':1,'e':0}

        start=['b'], start.pop(), res=['a','e','c','b'] for v in G['b']

        v: 'd' ide['d']-=1     ide={'a':0,'b':0,'c':0,'d':0,'e':0}  start=['d']

        start=['d'], start.pop(), res=['a','e','c','b','d'] end


```python
G={'a':'bce','b':'d','c':'d','d':'','e':'cd'}
def topsort(graph):
    #new a dict, keys=graph's keys and values=0
    in_degree=dict((u,0) for u in graph)

    for u in graph:
        for v in graph[u]:
            in_degree[v]+=1

    start=[u for u in in_degree if in_degree[u]==0]
    res=[]

    while start:
        u=start.pop()
        res.append(u)
        for v in graph[u]:
            in_degree[v]-=1
            if in_degree[v]==0:
                start.append(v)

    return res

print(topsort(G))
>>['a', 'e', 'c', 'b', 'd']
```

### Leetcode

**leetcode 207 - Course Schedule [M] - if DAG**  
There are a total of n courses you have to take, labeled from 0 to n-1. Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]  
Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?  

Example 1:  
Input: 2, [[1,0]]   
Output: true  
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.  

Example 2:  
Input: 2, [[1,0],[0,1]]  
Output: false  
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.  

Solution 1: check if DAG, which has cycle, bfs TO(m+n),SO(m+n)??  
Note: edge(u,v) means u->v  
1. creat graph defaultdict(list) and in_degree defaultdict(int)  
2. find the node say(no head node) with no head, put into stack  
3. find the children of the no head node, and minus 1 as visited once  
4. if no head (idg==0) after visiting, put into stack  
5. count the visiting times and check if cnt==numCourses

        Input:4, [[1,0],[2,0],[3,1],[3,2]]

        0-->1-->3
          |->2-|

        g={0: [1, 2], 1: [3], 2: [3]}
        idg={0: 0, 1: 1, 2: 1, 3: 2}

        backward is also fine
        g={1: [0], 2: [0], 3: [1, 2]})
        idg={1: 1, 2: 1, 3: 2}


```python
from collections import defaultdict
class Solution():
    def canFinish(self,numCourses,prerequisites):
        graph=defaultdict(list)
        idg=defaultdict(int) #in degree
        for v,u in prerequisites: #backward is also fine
            graph[u].append(v)
            idg[v]+=1


        stack=[]
        for i in range(numCourses):
            if idg[i]==0: #find the one with no head
                stack.append(i)

        cnt=0
        while stack:
            c=stack.pop() #c<-course
            cnt+=1
            for j in graph[c]:  #c's tail
                idg[j]-=1
                if idg[j]==0:
                    stack.append(j)

        return cnt==numCourses
```

Solution 2: dfs, from tail to head  
1. create reverse graph and record visited array of each node  
2. check if the node's head has been visited

        g_forward={0: [1, 2], 1: [3], 2: [3]}
        g_inverse={1: [0], 2:[0], 3:[1,2]}


```python
from collections import defaultdict
class Solution():
    def canFinish(self,numCourses,prerequisites):
        graph=defaultdict(list)
        visited=[0]*numCourses

        for u,v in prerequisites:
            graph[u].append(v)
        #-1=visiting,1=visited
        for i in range(numCourses):
            if not self.dfs(graph,visited,i):
                return False

        return True

    def dfs(self,graph,visited,i):
        if visited[i]==-1:
            return False

        if visited[i]==1:
            return True

        visited[i]=-1
        for j in graph[i]: #find its head
            if not self.dfs(graph,visited,j):
                return False

        visited[i]=1

        return True
```

**leetcode 210 - Course Schedule II [M] - return DAG path**  
Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses. There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.  

Example 1:  
Input: 2, [[1,0]]   
Output: [0,1]  
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].  

Example 2:  
Input: 4, [[1,0],[2,0],[3,1],[3,2]]  
Output: [0,1,2,3] or [0,2,1,3]  
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].  

Solution 1: bfs  

```python
from collections import defaultdict
class Solution():
    def findOrder(self,numCourses,prerequisites):
        graph=defaultdict(list)
        idg=defaultdict(int)

        for v,u in prerequisites:
            graph[u].append(v)
            idg[v]+=1

        stack=[]
        for i in range(numCourses):
            if idg[i]==0:
                stack.append(i)

        cnt=0
        res=[]
        while stack:
            c=stack.pop()
            res.append(c)
            cnt+=1

            for j in graph[c]:
                idg[j]-=1
                if idg[j]==0:
                    stack.append(j)

        return res if cnt==numCourses else []
```

Solution 2: dfs

```python
from collections import defaultdict
class Solution():
    def findOrder(self,numCourses,prerequisites):
        graph=defaultdict(list)
        visited=[0]*numCourses
        res=[]

        for u,v in prerequisites:
            graph[u].append(v)

        for i in range(numCourses):
            if not self.dfs(graph,visited,i,res):
                return []

        return res

    def dfs(self,graph,visited,i,res):
        if visited[i]==-1:
            return False
        if visited[i]==1:
            return True

        visited[i]=-1
        for j in graph[i]:
            if not self.dfs(graph,visited,j,res):
                return False

        visited[i]=1
        res.append(i)

        return True
```
