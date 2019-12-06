---
layout: single
type: posts
title:  "ALgorithms 1 - sorting"
date:   2019-11-14 12:57:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Bucket Sort
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---


### Big O Table

      ------------------------------------------------------------------
      | Sort      |  Time Complexity               |  Space Complexity |
      ------------------------------------------------------------------
      |           | Average  | Best     | Worst    |  Worst            |
      ------------------------------------------------------------------
      | Tim       | O(n)     | O(nlogn) | O(nlogn) |  O(n)             |
      | Merge     | O(nlogn) | O(nlogn) | O(nlogn) |  O(n)             |  
      | Quick     | O(nlogn) | O(nlogn) | O(n^2)   |  O(logn)          |  
      | Heap*     | O(nlogn) | O(nlogn) | O(nlogn) |  O(1)             |
      ------------------------------------------------------------------
      | Bubble    | O(n^2)   | O(n)     | O(n^2)   |  O(1)             |
      | Insertion | O(n^2)   | O(n)     | O(n^2)   |  O(1)             |
      | Selection | O(n^2)   | O(n^2)   | O(n^2)   |  O(1)             |
      ------------------------------------------------------------------
      | Tree      | O(nlogn) | O(nlogn) | O(n^2)   |  O(n)             |
      | Shell     | O(nlogn) |O(nlog^2n)|O(nlog^2n)|  O(1)             |
      ------------------------------------------------------------------
      | Bucket    | O(n+k)   | O(n+k)   | O(n^2)   |  O(n)             |
      | Counting  | O(n+k)   | O(n+k)   | O(n+k)   |  O(k)             |
      | Radix     | O(nk)    | O(nk)    | O(nk)    |  O(n+k)           |
      | Cube      | O(n)     | O(nlogn) | O(nlogn) |  O(n)             |
      ------------------------------------------------------------------

### Bubble Sort  

Large elements "bubble" up to the end of the list by swapping.  
SO(1) - All operations take place in the single list, no external lists required.

```python
def bubbleSort(arr):
    for i in range(len(arr)):
        for j in range(0,len(arr)-i-1):
            if arr[j]>arr[j+1]:
                arr[j],arr[j+1]=arr[j+1],arr[j]

arr=[2,4,1,3,6]
bubbleSort(arr)
```

Explanation for example of [2,4,1,3,6]:  

     i  j  arr
    (0, 0, [2, 4, 1, 3, 6])
    (0, 1, [2, 4*,1*,3, 6])
    (0, 2, [2, 1, 4*,3*,6])
    (0, 3, [2, 1, 3, 4, 6])
    (1, 0, [2*,1*,3, 4, 6])
    (1, 1, [1, 2, 3, 4, 6])
    (1, 2, [1, 2, 3, 4, 6])
    (2, 0, [1, 2, 3, 4, 6])
    (2, 1, [1, 2, 3, 4, 6])
    (3, 0, [1, 2, 3, 4, 6])



### Insertion Sort  

Like organizing cards of poker.  
Sorted portion "grows" from the left-hand side.  
As each unsorted element is consumed, it is placed in its appropriate spot in the sorted portion.  
SO(1) - All operations take place in the single list, no external lists required.

Scan key from i=1, check j=i-1 if element before > key and j>=0  

```python
def insertionSort(arr):
    for i in range(1,len(arr)):
        key=arr[i]
        j=i-1
        while j>=0 and arr[j]>key:
            arr[j+1]=arr[j]
            j-=1

        arr[j+1]=key
```

Explanation for example of [2,4,1,3,6]:  

    -1  0  1  2  3  4  <-idx
        2, 4, 1, 3, 6
           i=1
        j  k           2<4k end while
              i=2
           j  k        4>1k
        j     4        2>1k
     j     2
        1
        1, 2, 4, 3, 6
              j  k     4>3k
           j     4     2<3k
              3
        1, 2, 3, 4, 6      

     i  j  arr
    (2, 1, [2, 4, 1, 3, 6])
    (2, 0, [2, 4, 4, 3, 6])
    (3, 2, [1, 2, 4, 3, 6])


**leetcode 147 - Insertion Sort List [M]** see [linked list #sorting](https://ha5ha6.github.io/judy_blog/programming/2019/11/08/data-structrue-linkedlist.html#sorting)


### Selection Sort

Array is slowly split into two sections, the sorted and the unsorted.  
Each iteration places another element onto the end of the sorted section, expanding it and decreasing the size of the unsorted section.  
SO(1) - All operations take place in the single list, no external lists required.  

Select the min throughout the entire array and move it to the sorted portion.  

```python
def selectionSort(arr):
    for i in range(len(arr)):
        min_idx=i
        for j in range(i+1,len(arr)):
            if arr[min_idx]>arr[j]:
                min_idx=j  #find the min throughout the entire array

        arr[i],arr[min_idx]=arr[min_idx],arr[i]
```

Explanation for example of [2,4,1,3,6]:  

     2, 4, 1, 3, 6
     mi    ^       
     1, 4, 2, 3, 6
        mi ^
     1, 2, 4, 3, 6   
           mi ^
     1, 2, 3, 4, 6     

     i  j  arr
    (0, 1, [2, 4, 1, 3, 6])
    (0, 2, [2, 4, 1, 3, 6])
    (0, 3, [2, 4, 1, 3, 6])
    (0, 4, [2, 4, 1, 3, 6])
    (1, 2, [1, 4, 2, 3, 6])
    (1, 3, [1, 4, 2, 3, 6])
    (1, 4, [1, 4, 2, 3, 6])
    (2, 3, [1, 2, 4, 3, 6])
    (2, 4, [1, 2, 4, 3, 6])
    (3, 4, [1, 2, 3, 4, 6])



### Merge Sort  

typical **Divide and Conquer** example  

![](/assets/images/dnc.png){:width="50%"}  

```python
def mergeSort(arr):
    if len(arr)<=1:
        return arr

    left,right=mergeSort(arr[:len(arr)//2]),mergeSort(arr[len(arr)//2:])

    return merge(left,right)

def merge(left,right):
    total=[]
    i,j=0,0 #idx for left and right

    while i<len(left) and j<len(right):

        if left[i]<right[j]:
            total.append(left[i])
            i+=1
        else:
            total.append(right[j])
            j+=1

    if i==len(left):
        total.extend(right[j:])
    else:
        total.extend(left[i:])

    return total
```

**leetcode 148 - (Merge) Sort List [M]** see [linked list #sorting](https://ha5ha6.github.io/judy_blog/programming/2019/11/08/data-structrue-linkedlist.html#sorting)


### Quick Sort

1. Select pivot.  
2. Rearrange all elements smaller than the pivot to its left and all larger elements to its right.  
3. Recursively call steps 1 and 2, passing the smaller and larger partitions as their own arrays.  

```python
from random import randint
def quickSort(arr):
    if len(arr)<=1:
        return arr

    smaller,equal,larger=[],[],[]
    pivot=arr[randint(0,len(arr)-1)]  #randint include the right edge

    for a in arr:
        if a<pivot:
            smaller.append(a)
        elif a==pivot:
            equal.append(a)
        else:
            larger.append(a)

    return quickSort(smaller)+equal+quickSort(larger)
```  

### Heap Sort  

TO(nlogn) - TO(logn) for heapify, and TO(n) for create and build heap
SO(1)

see [heap #heap sort](https://ha5ha6.github.io/judy_blog/programming/2019/11/30/data-structrue-heap.html#heap-sort)

```python
def heapify(arr,n,i):
    #n - size of the heap
    #i - the idx of subtree rooted at
    largest=i #initialize the largest as the root
    l=2*i+1
    r=2*i+2

    #check left exist and if greater than root
    if l<n and arr[l]>arr[i]:
        largest=l

    if r<n and arr[r]>arr[largest]:
        largest=r

    #swap if l or r larger than root
    if largest!=i:
        arr[i],arr[largest]=arr[largest],arr[i]
        #recursively heapify the affected sub-tree
        heapify(arr,n,largest)

def heapSort(arr):
    n=len(arr)
    #build a maxheap
    for i in range(n,-1,-1): #n can be replaced by n//2-1
        heapify(arr,n,i)

    #one by one extract element
    for i in range(n-1,0,-1):
        arr[i],arr[0]=arr[0],arr[i]
        heapify(arr,i,0)
```

### Bucket Sort  

Mainly useful when input is uniformly distributed over a range, i.e. [0,1].  

1. create n empty buckets (or lists)
2. do following for every array element arr[i]
   insert arr[i] into bucket[n*arr[i]]  
3. sort individual buckets using insertion sort
4. concatenate all sorted buckets  

```python
def insertionSort(arr):
    for i in range(1,len(arr)):
        key=arr[i]
        j=i-1

        while j>=0 and arr[j]>key:
            arr[j+1]=arr[j]
            j-=1

        arr[j+1]=key

    return arr

def bucketSort(arr):
    temp=[]
    n=10 #slot numbers
    for i in range(n):
        temp.append([])

    #put array elements in different buckets
    for j in arr:
        idx=int(n*j)
        temp[idx].append(j)

    #sort individual buckets
    for i in range(n):
        temp[i]=insertionSort(temp[i])

    k=0
    for i in range(n):
        for j in range(len(temp[i])):
            arr[k]=temp[i][j]
            k+=1

    return arr
```  

**leetcode 164 - Maximum Gap [H]**  


```python
class Solution():
    def maximumGap(self,nums):

```  

### Radix Sort
