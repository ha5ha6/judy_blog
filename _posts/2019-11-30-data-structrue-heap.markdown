---
layout: single
type: posts
title:  "Data Structure 8 - heap"
date:   2019-11-30 16:23:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Heap
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

A heap is a specialized **tree-based data structure** which is essentially an almost complete tree that satisfies the heap property:  
In a **max heap**, for any given node C, if P is a parent node of C, then the key (the value) of P is greater than or equal to the key of C.   
In a **min heap**, the key of P is less than or equal to the key of C.  
The node at the "top" of the heap (with no parents) is called the root node.  

More specifically, **Binary Heap** is **a complete binary tree**, in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.  
A **Binary Heap** is a complete binary tree where items are stored in a special order such that value in a parent node is greater (or smaller) than the values in its two children nodes. The former is called **max heap** and the latter is **min heap**.  
The heap can be represented by **binary tree or array**.  

However, **a heap is not a sorted structure**, it can be regarded as being partially ordered.  
A heap is a useful data structure when it is necessary to repeatedly remove the object with the highest (or lowest) priority.    

When a heap is a complete binary tree, it has a smallest possible height—a heap with N nodes and for each node a branches always has logaN height.  

Min Heap Example:  

              2 <- root is always the minimum/maximum value
            /   \
           4      8
          / \    / \
         9   7  10  9
        / \   \
       15 20  13

Max Heap Example:

            100 <- root is always the minimum/maximum value
           /   \
          19    36
         / \    / \
        17  3  25  1
       / \   
      2   7  


**Relation with priority queue**: see [priority queue](/programming/2019/12/02/data-structrue-priorityqueue.html)  
The heap is one maximally efficient implementation of an abstract data type called a **priority queue**, and in fact, priority queues are often referred to as "heaps", regardless of how they may be implemented.  

### Pick Point  

take min heap

Insertion
1. always insert the element at the bottom, at the rightmost spot so as to maintain the complete tree property   
2. fix the tree by swapping the new ele with its parent until we find an approprioate spot for the ele  
essentialy bubble up the minimum ele  

Extract min
1. min always at the root
2. the deletion is the trick
remove the min and swap it with the last ele , then bubble down this ele, swapping it with one of its children until the min heap property is restored  


### Implementation

**operations**  
1. insert() - TO(logn)  
2. extract_min() - TO(logn)  

**Python heapq** see [python built-in #heapq](https://ha5ha6.github.io/judy_blog/programming/2019/11/12/data-structrue-python-builtin.html#heapq)  

**Array based** - space efficient  
Assume idx starts at 0:  
i - where the parent node is stored at  
2\*i+1 - left child  
2\*i+2 - right child  

    i, 2*i+1, 2*i+2
    0    1      2
    1    3      4
    2    5      6
    3    7      8

          1[0]
        /     \
      2[1]   3[2]
      /   \     /
    5[3] 6[4] 4[5]


```python
import heapq

nums=[3,2,1,5,6,4]
heapq.heapify(nums)
nums
>>[1, 2, 3, 5, 6, 4]
   p  lc rc
```

### Applications  

- Priority Queue:

A priority queue is an abstract concept like "a list" or "a map"; just as a list can be implemented with a linked list or an array, a priority queue can be implemented with a heap or a variety of other methods.  
- Heapsort:

One of the best sorting methods being in-place and with no quadratic worst-case scenarios.
- Selection algorithms:

A heap allows access to the min or max element in constant time, and other selections (such as median or kth-element) can be done in sub-linear time on data that is in a heap.
- Graph algorithms:

By using heaps as internal traversal data structures, run time will be reduced by polynomial order. Examples of such problems are **Prim's minimal-spanning-tree algorithm** and **Dijkstra's shortest-path algorithm**.
- K-way merge:

A heap data structure is useful to merge many already-sorted input streams into a single sorted output stream. Examples of the need for merging include external sorting and streaming results from distributed data such as a log structured merge tree. The inner loop is obtaining the min element, replacing with the next element for the corresponding input stream, then doing a sift-down heap operation. (Alternatively the replace function.) (Using extract-max and insert functions of a priority queue are much less efficient.)
- Order statistics:

The Heap data structure can be used to efficiently find the kth smallest (or largest) element in an array.


### Heap Sort

**Heapify** procedure can be applied to a node only if its children are heapified. So the heapification must be performed in the bottom up order.  

Input: [4,5,3,1,10]

        4[0]
       /   \
      5[1]  3[2]
     /   \
    1[3]  10[4]

Applying heapify to index 1

       4[0]
      /   \
     10[1]  3[2]
     /   \
    1[3]  5[4]

Applyting heapify to index 0

       10[0]
      /   \
     5[1]  3[2]
     /   \
    1[3]  4[4]


```python
def heapify(nums,n,i):
    #n - size of the heap
    #i - the idx of subtree rooted at
    largest=i #initialize the largest as the root
    l=2*i+1
    r=2*i+2

    #check left exist and if greater than root
    if l<n and nums[l]>nums[i]:
        largest=l

    if r<n and nums[r]>nums[largest]:
        largest=r

    #swap if l or r larger than root
    if largest!=i:
        nums[i],nums[largest]=nums[largest],nums[i]
        #recursively heapify the affected sub-tree
        heapify(nums,n,largest)

def heapSort(nums):
    n=len(nums)
    #build a maxheap
    for i in range(n,-1,-1): #n can be replaced by n//2-1
        heapify(nums,n,i)

    #one by one extract element
    for i in range(n-1,0,-1):
        nums[i],nums[0]=nums[0],nums[i]
        heapify(nums,i,0)

a=[4,5,3,1,10]
heapSort(a)
print(a)
>>[1, 3, 4, 5, 10]
```

Heap Sort is an **in-place** algorithm. Its typical implementation is not stable, but can be made stable.  

TO(logn) for heapify  
TO(n) for create and build heap  
TO(nlogn) overall  
SO(1)  

### Problems  

**leetcode 215 - Kth Largest in an Array [M] - max heap** see [topic #kth largest](https://ha5ha6.github.io/judy_blog/programming/2019/10/25/topics.html#kth-largest-element---4-solutions)  
Find the kth largest element in an unsorted array, note: not the kth distinct element.  

Examples:  
Input: [3,2,1,5,6,4] and k=2  
Output: 5  
Input: [3,2,3,1,2,4,5,5,6] and k=4  
Output: 4  

```python
import heapq
class Solution():
    def findKthLargest(self,nums,k):
        heapq.heapify(nums)

        return heapq.nlargest(k,nums)[-1]
```
