---
layout: single
type: posts
title:  "Data Structure 11 - python built-in"
date:   2019-11-12 23:45:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Python collections
  - Python itertools
  - Queue
  - Hash Table
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### dict {}

### two variables in for-loop

```python
for dr,dc in [(1,0),(-1,0),(0,-1),(0,1)]:  
    print(dr,dc)

Output:
1,0
-1,0
0,-1
0,1
```

### zip

```python
numbers = [1, 2, 3]
letters = ['a', 'b', 'c']

list(zip(numbers, letters))
>>[(1, 'a'), (2, 'b'), (3, 'c')]

for n,l in zip(numbers,letters):
    print(n,l)

Output:
1,'a'
2,'b'
3,'c'
```

### itertools.zip_longest

```python
#python 3
from itertools import zip_longest
#python 2
from itertools import izip_longest

list(zip_longest([1,2,3],[4,5]))
>>[(1, 4), (2, 5), (3, None)]

list(zip_longest([1,2,3],[4,5],fillvalue=0))
>>[(1, 4), (2, 5), (3, 0)]
```

### collections.Counter

```python
from collections import Counter

a=[1,2,3,2,2,2,2,2,3,3]
c=Counter(a)
>>Counter({1: 1, 2: 6, 3: 3})

for i in c:
    print(i,c[i])

Output:
1 1
2 6
3 3
```

### collections.defaultdict

```python
from collections import defaultdict

#int
s = 'mississippi'
d = defaultdict(int)
for k in s:
    d[k] += 1

sorted(d.items())
>>[('i', 4), ('m', 1), ('p', 2), ('s', 4)]

#list
s = [('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
d = defaultdict(list)
for k, v in s:
    d[k].append(v)

sorted(d.items())
>>[('blue', [2, 4]), ('red', [1]), ('yellow', [1, 3])]
```

### collections.deque

ref see [geeksforgeeks](https://www.geeksforgeeks.org/deque-in-python/)  

1. a generalization of **stacks and queues**  
2. preferred over list when **quicker append and pop from both the ends of container** are needed  
3. O(1) time complexity for **append and pop** as list is O(n)

```python
from collections import deque

example!!
```
