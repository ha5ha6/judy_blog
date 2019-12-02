---
layout: single
type: posts
title:  "ALgorithms 9 - union find"
date:   2019-12-2 14:54:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Union Find
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

A **disjoint-set data structure** is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.  
A union-find algorithm is an algorithm that performs two useful operations on such a data structure:  

**Find**: Determine which subset a particular element is in. This can be used for determining if two elements are in the same subset.  
**Union**: Join two subsets into a single subset.  

Simple Example:  
find closest magnets and merge them into a bigger group  

![](https://ha5ha6.github.io/judy_blog/assets/images/unionfind.png){:width="60%"}

### Application

- Kruskal's minimum spanning tree algorithm
- Grid percolation
- Network connectivity
- Least common ancestor in trees
- Image Processing

### Complexity

O(n) - Construction  
A(n) - Union   
A(n) - Find  
A(n) - Get component size  
A(n) - Check if connected   
O(1) - Count components  

A() - Amortized constant time  

### Detect Cycle in an Undirected Graph

References:
[geeks for geeks](https://www.geeksforgeeks.org/union-find/)

### Kruskal's Minimum Sapnning Tree  
Given a graph G=(V,E) we want to find a **minimum spanning tree** in the graph (it may not be unique).  
A **minimum spanning tree** is a subset of the edges which connect all vertices in the graph with minimal total edge cost.  

Say a graph:  
![](https://ha5ha6.github.io/judy_blog/assets/images/mst.png){:width="50%"}

A minimum spanning tree can be  
![](https://ha5ha6.github.io/judy_blog/assets/images/mst2.png){:width="50%"}  
with weight 14

Algorithm steps:  
1. sort edges by ascending edge weight  
2. walk through the sorted edges and look at the two nodes the edge belongs to, if the nodes are already unified we don't include this edge, otherwise we include it and unify the nodes  
3. the algorithm terminates when every edge has been processed or all the vertices have been unified  

Detailed steps based on the example figure above:
1. I to J -> I-J
2. A to E -> A-E
3. C to I -> C-I-J
4. E to F -> A-E-F
5. G to H -> G-H
6. B to D -> B-D
7. C to J already in C-I-J would create cycle, do nothing
8. D to E -> A-E-F-D-B
9. D to H -> A-E-F-D-H-G-B
10. A to D already in A-E-F-D-H-G-B would create cycle, do nothing
11. B to C -> A-E-F-D-H-G-B-C-I-J minimum spanning tree found!

Implementation from geeks for geeks:

```python      
class Graph:
    def __init__(self,vertices):
        self.V=vertices #No. of vertices
        self.graph=[]

    #function to add an edge to graph
    #w-weight
    def addEdge(self,u,v,w):
        self.graph.append([u,v,w])

    def find(self,parent,i):
        if parent[i]==i:
            return i

        return self.find(parent,parent[i])

    def union(self,parent,rank,x,y):
        xroot=self.find(parent,x)
        yroot=self.find(parent,y)

        if rank[xroot]<rank[yroot]:
            parent[xroot]=yroot
        elif rank[xroot]>rank[yroot]:
            parent[yroot]=xroot
        else:
            parent[yroot]=xroot
            rank[xroot]+=1

    def KruskalMST(self):
        res=[]
        i=0 #used for sorted edges
        e=0 #used for res

        #sort by the weights, which is the third element in self.graph
        self.graph=sorted(self.graph,key=lambda item:item[2])
        parent=[]
        rank=[]
        for node in range(self.V):
            parent.append(node)
            rank.append(0)

        while e<self.V-1:  #self.V -> numbers of V
            u,v,w=self.graph[i]
            i+=1
            x=self.find(parent,u)
            y=self.find(parent,v)

            if x!=y:
                e+=1
                res.append([u,v,w])
                self.union(parent,rank,x,y)

        return res

g = Graph(10)
g.addEdge(8, 9, 0)
g.addEdge(0, 4, 1)
g.addEdge(2, 8, 1)
g.addEdge(4, 5, 1)
g.addEdge(6, 7, 1)
g.addEdge(1, 3, 2)
g.addEdge(2, 9, 2)
g.addEdge(3, 4, 2)
g.addEdge(3, 7, 2)
g.addEdge(0, 3, 4)
g.addEdge(1, 2, 4)
g.addEdge(2, 7, 4)
g.addEdge(6, 8, 4)
g.addEdge(0, 1, 5)
g.addEdge(3, 5, 5)
g.addEdge(7, 8, 6)
g.addEdge(5, 6, 7)
g.addEdge(3, 6, 11)

print(g.KruskalMST())
>>[[8, 9, 0], [0, 4, 1], [2, 8, 1], [4, 5, 1], [6, 7, 1], [1, 3, 2], [3, 4, 2], [3, 7, 2], [1, 2, 4]]

A-E-F-D-B-C-I-J-H-G

A 0
B 1
C 2
D 3
E 4
F 5
G 6
H 7
I 8
J 9
```



References:  
[WilliamFiset fr Youtube](https://www.youtube.com/watch?v=JZBQLXgSGfs)  
[geeks for geeks](https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/)
