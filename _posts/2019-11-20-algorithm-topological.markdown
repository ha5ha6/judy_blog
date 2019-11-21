---
layout: single
type: posts
title:  "ALgorithms 8 - topological sort"
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
