---
layout: single
type: posts
title:  "Data Structure 13 - graph"
date:   2019-11-1 15:18:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Graph
  - Topological Sort
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

A Graph is a **non-linear data structure** consisting of **nodes and edges**. The **nodes** are sometimes also referred to as **vertices** and the **edges** are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as,  

    0 - 1 \
    | / |  2
    4 - 3 /

V={0,1,2,3,4} - the set of **vertices**  
E={01,12,23,34,04,14,13} - the set of **edges**  

Graphs are used to solve many real-life problems.  
Graphs are used to represent **networks**. The networks may include paths in a city or telephone network or circuit network.  
Graphs are also used in **social networks** like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, locale etc.  

### Implementation  

reference: see [python advanced course topics](https://www.python-course.eu/graphs_python.php)

**Python dict**  

    a    b
     \ / |
      c  |  f
     / \ |
    d    e

```python
graph={ 'a':['c'],
        'b':['c','e'],
        'c':['a','b','d','e'],
        'd':['c'],
        'e':['c','b'],
        'f':[]}
```

An edge can be seen as a 2-tuple (u,v) with nodes as elements, i.e. ('a','b')

```python
def generate_edges(graph):
    edges=[]
    for u in graph:
        for v in graph[u]:
            edges.append((u,v))

    return edges

print(generate_edges(graph))
>>[('a', 'c'), ('c', 'a'), ('c', 'b'), ('c', 'd'), ('c', 'e'), ('b', 'c'), ('b', 'e'), ('e', 'c'), ('e', 'b'), ('d', 'c')]

def find_isolated(graph):
    isolated=[]
    for u in graph:
        if not graph[u]:
            isolated+=u

    return isolated

print(find_isolated(graph))
>>['f']
```

**Python class**  

    a      b
    | |-| /
    | |-c     f
    |  /  \
    d      e

Note: u - main vertex, v - its neighbors  

```python
class Graph():
    def __init__(self,dict=None):
        if not dict:
            dict={}
        self.graph=dict

    def vertices(self):
        return list(self.graph.keys())

    def edges(self):
        return self.generate_edges()

    def add_vertex(self,u):
        if u not in self.graph:
            self.graph[u]=[]

    def add_edge(self,edge):
        edge=set(edge)
        (u,v)=tuple(edge)
        if u in self.graph:
            self.graph[u].append(v)
        else:
            self.graph[u]=[v]

    def generate_edges(self):
        edges=[]
        for u in self.graph:
            for v in self.graph[u]:
                if {u,v} not in edges: #{} - python set
                    edges.append({u,v}) #{} - append set

        return edges

g = { "a" : ["d"],
      "b" : ["c"],
      "c" : ["b", "c", "d", "e"],
      "d" : ["a", "c"],
      "e" : ["c"],
      "f" : []}

g=Graph(g)
g.vertices()
>>['a', 'c', 'b', 'e', 'd', 'f']
g.edges()
#if use tuple (u,v) to append edges
#>>[('a', 'd'), ('c', 'b'), ('c', 'c'), ('c', 'd'), ('c', 'e'), ('b', 'c'), ('e', 'c'), ('d', 'a'), ('d', 'c')]
#if use set {u,v} to append edges, remove dups
>>[set(['a', 'd']), set(['c', 'b']), set(['c']), set(['c', 'd']), set(['c', 'e'])]

g.add_vertex('z')
g.vertices()
>>['a', 'c', 'b', 'e', 'd', 'f', 'z']
g.add_edge(('a','z'))
g.edges()
#if use tuple (u,v) to append edges
#>>[('a', 'd'), ('a', 'z')*, ('c', 'b'), ('c', 'c'), ('c', 'd'), ('c', 'e'), ('b', 'c'), ('e', 'c'), ('d', 'a'), ('d', 'c')]
#if use set {u,v} to append edges
>>[set(['a', 'd']), set(['a', 'z'])*, set(['c', 'b']), set(['c']), set(['c', 'd']), set(['c', 'e'])]

g.add_edge(('x','y'))
graph.vertices()
>>['a', 'c', 'b', 'e', 'd', 'f', 'y', 'z']
graph.edges()
>>[set(['a', 'd']), set(['a', 'z']), set(['c', 'b']), set(['c']), set(['c', 'd']), set(['c', 'e']), set(['y', 'x'])]
```

### Path in Graph

**Adjacent vertices**:  
Two vertices are adjacent when they are both incident to a common edge.  
**Path in an undirected Graph**:  
A path in an undirected graph is a sequence of vertices P = ( v1, v2, ..., vn ) ∈ V x V x ... x V such that vi is adjacent to v{i+1} for 1 ≤ i < n. Such a path P is called a path of length n from v1 to vn.  
**Simple Path**:
A path with no repeated vertices is called a simple path.  
Example:  
(a, c, e) is a simple path in our graph, as well as (a,c,e,b). (a,c,e,b,c,d) is a path but not a simple path, because the node c appears twice.  

**Find Path** function continue with the python class above:  

```python
def find_path(self,start,end,path=None): #start/end vertex
    if not path:
        path=[]

    path=path+[start]
    if start==end:
        return path
    if start not in self.graph:
        return None
    for v in self.graph[start]:
        if v not in path:
            extended_path=self.find_path(v,end,path)
            if extended_path:
                return extended_path

    return None

path=g.find_path('a','b')
>>['a', 'd', 'c', 'b']
```

Recursive process: for simplicity remove ''  

    find_path(a,b,None)
        a:d=v
        ex=find_path(d,b,[a])
        ^   d:c=v
        |---ex=find_path(c,b,[a,d])
            ^   c:c,b=v
            |---ex=find_path(b,b,[a,d,c])
                 ^  path=[a,d,c,b]
                 |--return path cuz start==end

     (start, end, path)
     ('d', 'b', ['a'])
     ('c', 'b', ['a', 'd'])
     ('b', 'b', ['a', 'd', 'c'])
     extended_path appears
     ['a', 'd', 'c', 'b']
     bottom up recursion
     ('extend', 'b', ['a', 'd', 'c', 'b'])
     extended_path
     ['a', 'd', 'c', 'b']
     ('extend', 'c', ['a', 'd', 'c', 'b'])
     extended_path
     ['a', 'd', 'c', 'b']
     ('extend', 'd', ['a', 'd', 'c', 'b'])
     final result
     ['a', 'd', 'c', 'b']

**Find All Paths**

new graph:

        a      b
      / | |-| /
    f   | |-c     
      \ |  /  \
        d      e

```python
def find_all_paths(self,start,end,path=[]):
    path=path+[start]
    if start==end:
        return [path]
    if start not in self.graph:
        return []
    paths=[]
    for v in self.graph[start]:
        if v not in path:
            extended_paths=self.find_all_paths(v,end,path)
            for p in extended_paths:
                paths.append(p)

    return paths

g = { "a" : ["d","f"],
      "b" : ["c"],
      "c" : ["b", "c", "d", "e"],
      "d" : ["a", "c"],
      "e" : ["c"],
      "f" : ["d"]}

g=Graph(g)
paths=g.find_all_paths('a','b')
>>[['a', 'd', 'c', 'b'], ['a', 'f', 'd', 'c', 'b']]
```

Recursive process:

      (start,end,path)
      first round a:d
      ('d', 'b', ['a'])
      ('c', 'b', ['a', 'd'])
      ('b', 'b', ['a', 'd', 'c'])
      ('append paths', [], ['a', 'd', 'c', 'b'])
      ('e', 'b', ['a', 'd', 'c'])
      ('append paths', [], ['a', 'd', 'c', 'b'])
      ('append paths', [], ['a', 'd', 'c', 'b'])
      second round a:f
      ('f', 'b', ['a'])
      ('d', 'b', ['a', 'f'])
      ('c', 'b', ['a', 'f', 'd'])
      ('b', 'b', ['a', 'f', 'd', 'c'])
      ('append paths', [], ['a', 'f', 'd', 'c', 'b'])
      ('e', 'b', ['a', 'f', 'd', 'c'])
      ('append paths', [], ['a', 'f', 'd', 'c', 'b'])
      ('append paths', [], ['a', 'f', 'd', 'c', 'b'])
      ('append paths', [['a', 'd', 'c', 'b']], ['a', 'f', 'd', 'c', 'b'])
      final result
      [['a', 'd', 'c', 'b'], ['a', 'f', 'd', 'c', 'b']]


### Degree  

The degree of a vertex v in a graph is **the number of edges connecting it, with loops counted twice**.
The degree of a vertex v is denoted deg(v).  
The maximum degree of a graph G, denoted by Δ(G), is the maximum degree of its vertices.      
The minimum degree of a graph G, denoted by δ(G), is the minimum degree of its vertices.  

      a      b
      | |-| /
      | |-c     f
      |  /  \
      d      e

In the graph above, Δ(G)=5 at vertex c, and δ(G)=0 of the isolated vertex f.

If all the degrees in a graph are the same, the graph is a **regular graph**.  
In a regular graph, all degrees are the same, and so we can speak of the degree of the graph.  

The degree sum formula (Handshaking lemma):

      ∑ deg(v) = 2*abs(E)   E - number of edges
    v ∈ V

This means that **the sum of degrees of all the vertices is equal to the number of edges multiplied by 2**.  
We can conclude that the number of vertices with odd degree has to be even.  

This statement is known as **the handshaking lemma**. The name "handshaking lemma" stems from a popular mathematical problem: In any group of people the number of people who have shaken hands with an odd number of other people from the group is even.  

Continue with the Graph class above:  

```python
def vertex_degree(self,u):
    v=self.graph[u]
    degree=len(v)+v.count(u) #self point node

    return degree

#min degree
def delta(self):
    min=float('inf')
    for u in self.graph:
        u_degree=self.vertex_degree(u)
        min=min(min,u_degree)

    return min

#max degree
def Delta(self):
    max=float('-inf')
    for u in self.graph:
        u_degree=self.vertex_degree(u)
        max=max(max,u_degree)

    return max

g=Graph(g)
g.vertex_degree('c')
>>5
```

**Degree Sequence**  

**Erdos-Gallai Theorem**  

### Graph Density

### Connected Graphs

**Distance and Diameter**

### Related Questions  

**leetcode 133 - Clone Graph [M] - hash** see [hash #deep copy](https://ha5ha6.github.io/judy_blog/programming/2019/11/14/data-structrue-hash.html#deep-copy)  
Given a reference of a node in a connected undirected graph, return a **deep copy** (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.  

Example:    
Input:   

      1 - 2       1:[2,4]
      |   |       2:[1,3]
      4 - 3       3:[2,4]
                  4:[1,3]


### Related ALgorithms 

1. [dfs](https://ha5ha6.github.io/judy_blog/programming/2019/10/31/algorithm-dfs.html)
2. [bfs](https://ha5ha6.github.io/judy_blog/programming/2019/10/27/algorithm-bfs.html)
3. [topological sort](https://ha5ha6.github.io/judy_blog/programming/2019/11/20/algorithm-topological.html)
4. [union find](https://ha5ha6.github.io/judy_blog/programming/2019/12/02/algorithm-unionfind.html)
