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

## Background

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

### Points to Note

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

## Problems  

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

**leetcode 218 - The Skyline Problem [H]**  
Given the locations and height of all the buildings, write a program to output the skyline formed by these buildings collectively.

Example:  
Input: [left,right,height]  
[[1,3,3],[2,4,4],[5,8,2],[6,7,4],[8,9,4]]  
Output: [[1,3],[2,4],[4,0],[5,2],[6,4],[7,2],[8,4],[9,0]]  


      5 |
      4 |     |-----|     |--|  |--|
      3 |  |--|--|  |     |  |  |  |
      2 |  |  |  |  |  |--|--|--|  |
      1 |  |  |  |  |  |  |  |  |  |
        ------------------------------
        0  1  2  3  4  5  6  7  8  9  

      5 |
      4 |     x-----|     x--|  x--|
      3 |  x--|--|  |     |  |  |  |
      2 |  |  |  |  |  x--|--x--|  |
      1 |  |  |  |  |  |  |  |  |  |
        ------------x--------------x--
        0  1  2  3  4  5  6  7  8  9  

Solution - use max heap:  
1. transfer [l,r,h] to [l,-h,r]+[r,h,None]  
Note 1: -h for discriminating the left and the right edges  
Note 2: for the left to be sorted ahead of the right  
Note 3: minus value of height suits for the default minheap setting  
2. sort the new rectangles of [l,-h,r]+[r,h,None]
3. use a min heap (default) to record height and right (h,r)
4. when meets left edge (h<0), heap push (h,r)
5. when not left edge and current left (which was the right edge originally) is larger than the recorded right, which means the previous whole block reaches right end, heap pop all the recorded (h,r)
6. every time when earlier top!=new heap[0][0], which is the latest max height, res append [l,-heap[0][0]]  
Note 1: always append left edge points  
Note 2: heap[0][0] is always the highest right edges, cuz of the property of default minheap from heapq


        l,r,h
       [1,3,3]        
       [2,4,4]
       [5,8,2]
       [6,7,4]
       [8,9,4]

       -> sorted([l,-h,r]+[r,h,None])
       [1,-3,3]
       [2,-4,4]
       [3,3,N]
       [4,4,N]
       [5,-2,8]
       [6,-4,7]
       [7,4,N]
       [8,-4,9]
       [8,2,N]
       [9,4,N]

                            heap
       ('leftpush', [(-3, 3), (0, inf)])
       ('leftpush', [(-4, 4), (0, inf), (-3, 3)])
       ('whilepop', [(-3, 3), (0, inf)])
       ('whilepop', [(0, inf)])
       ('leftpush', [(-2, 8), (0, inf)])
       ('leftpush', [(-4, 7), (0, inf), (-2, 8)])
       ('whilepop', [(-2, 8), (0, inf)])
       ('whilepop', [(0, inf)])
       ('leftpush', [(-4, 9), (0, inf)])
       ('whilepop', [(0, inf)])


```python
import heapq

class Solution():
    def getSkyline(self,buildings):

        rect=[[l,-h,r] for l,r,h in buildings]+[[r,h,None] for l,r,h in buildings]
        rect.sort()
        res=[]
        heap=[(0,float('inf'))] #store (h,r)

        for l,h,r in rect:
            top=heap[0][0]
            while l>=heap[0][1]: #left >= most right, jump to next new block
                heapq.heappop(heap) #pop all
            if h<0:
                heapq.heappush(heap,(h,r))
            if top!=heap[0][0]:
                res.append([l,-heap[0][0]])

        return res
```

**leetcode 253 - Meeting Rooms II [M]** - heap sort  
Given an array of meeting time intervals [[start,end],...], start<end  
Find the minimum number of conference rooms required  

Input: [[0,30],[5,10],[15,20]]  
Output: 2  
Input: [[7,10],[2,4]]  
Output: 1  

Solution: minheap  
heap[0] is always the minimum value, and everytime popping the minimum  
1. sort by first element  
2. heappush the end time (the second element)  
3. if min value <= next.start, heappop     
4. max rooms = max(max rooms, len(heap))  

Details:  

    [[0,30],[5,10],[15,20]]

     i  heap     max rooms
    (0, [30],     1)
    (1, [10, 30], 2)       10<15 pop 10  
    (2, [20, 30], 2)


```python
import heapq
class Solution():
    def minMeetingRooms(self,intervals):
        max_rooms=0
        heap=[] #rooms
        intervals.sort(key=lambda x:x[0])

        for i in intervals:
            heapq.heappush(heap,i[1])  
            while heap[0]<=i[0]:
                heapq.heappop(heap)
            max_rooms=max(max_rooms,len(heap))

        return max_rooms
```

**leetcode 272 - Closest Binary Search Tree Value II (multiple k values) [H]**  
Given a non-empty binary search tree and a target value, find k values in the bst that is closest to the target  

Input: root=[4,2,5,1,3], target 3.714286, k=2

          4
         / \
        2   5
       / \
      1   3

Output: [4,3]

Solution:  
1. use min heap to record (-diff,node.val)
2. when len(heap) > k, heappop the min (-diff), and keep k largest -diff which is closest value  
3. first check (node.val-target)<max diff
4. if not, check target> or <node.val, if <, go to left child, else go to right child  

Details:  

                                     min  heap
    find(4,3.7)               [(-inf,  0),(-0.3,  4)]     
        find(2,3.7)           [(-1.7,  2),(-0.3,  4)]
            find(1,3.7)        2.7>1.7, 3.7>1
                find(1.right) return
            find(3,3.7)       [(-0.7,  3),(-0.3,  4)]
                find(3.left)  return
        find(5,3.7)            2.7>0,7, 3.7<5
            find(5.left)      return  

```python
import heapq
class Solution():
    def closestKValues(self,root,target,k):
        closest=[(float('-inf'),0)]
        self.find(root,target,k,closest)

        return [v for diff,v in closest]

    def find(self,node,target,k,closest):
        if not node:
            return

        if abs(node.val-target)<-closest[0][0]:
            heapq.heappush(closest,(-abs(node.val-target),node.val))
            if len(closest)>k:
                heapq.heappop(closest)
            self.find(node.left,target,k,closest)
            self.find(node.right,target,k,closest)

        elif target>node.val:
            self.find(node.right,target,k,closest)
        else:
            self.find(node.left,target,k,closest)
```
