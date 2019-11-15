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

### max key

max(iterable, \*iterables, key)

```python
def poweroftwo(x):
    return x**2

#return the num has max poweroftwo
max(-4,-2,0,1,3,key=poweroftwo)
>>-4
#or
nums=[-4,-2,0,1,3]
max(nums,key=poweroftwo)
>>-4

num0=[15, 300, 2700, 821]
num1=[12, 2]
num2=[34, 567, 78]
max(num, num1, num2, key=len)
>>[15, 300, 2700, 821]

#return the key of the max value
cnt=collections.Counter([2,2,2,2,1,1,1,2])
>>Counter({2: 5, 1: 3})
max(cnt.keys(),key=cnt.get)
>>2
```

### dict {}

```python
d = {0: 'a', 1: 'b', 2: 'c', 3: 'd'}

d[0] -> 'a'
d[2] -> 'c'
d[4]=['e','f','g'] #new an entry with list
del d[1] #delete an entry
d[(1,1)]='ab' #tuple can be key, cuz its immutable

#get value from key
d.get(0) -> 'a'
d.get(5) -> None
d.get(5,-1) -> -1 #return -1 if None

#return key and value list
list(d.items())
>>[(0, 'a'), (1, 'b'), (2, 'c'), (3, 'd'), (4, ['e', 'f', 'g']), ((1, 1), 'ab')]
list(d.items())[0]
>>(0, 'a')
list(d.items())[0][0]
>>0

for k,v in d.items():
    print(k,v)

Output:
0 a
1 b
2 c
3 d
4 ['e', 'f', 'g']
(1, 1) ab

list(d.keys())
>>[0, 1, 2, 3, 4, (1, 1)]

list(d.values())
>>['a', 'b', 'c', 'd', ['e', 'f', 'g'], 'ab']
```

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
