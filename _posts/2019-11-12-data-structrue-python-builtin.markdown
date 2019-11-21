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

### lambda  

                    def identity(x):
    lambda x:x <=>      return x

```python
(lambda x,y:x+y)(2,3)
>>5

add_one=lambda x:x+1
add_one(2)
>>3

cmp=lambda x,y: 1 if x+y>y+x else -1
cmp('54','109')
>>1  #54109>10954
cmp('109','54')
>>-1 #10954<54109
```

higher-order functions  

```python
high_fun=lambda x,func:x+func(x)
high_fun(2,lambda x:x*x)
>>6
```

lambda with args and kwargs  

```python
(lambda x, y, z: x + y + z)(1, 2, 3)
>>6
(lambda x, y, z=3: x + y + z)(1, 2)
>>6
(lambda x, y, z=3: x + y + z)(1, y=2)
>>6
(lambda *args: sum(args))(1,2,3)
>>6
(lambda **kwargs: sum(kwargs.values()))(one=1, two=2, three=3)
>>6
(lambda x, *, y=0, z=0: x + y + z)(1, y=2, z=3)
>>6
```


### max() key

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

### map() lambda  

map() function returns a list of the results after applying the given function to each item of a given iterable (list, tuple etc.)  
map(fun,iter)  

```python
def addition(x):
    return x+x

nums=(1,2,3,4)
list(map(addition,nums))
>>[2, 4, 6, 8]
```

map()+lambda  

```python
nums=(1,2,3,4)
list(map(lambda x:x**x,nums))
>>[1, 4, 27, 256]

nums1=[1,2,3]
nums2=[4,5,6]
list(map(lambda x,y:x+y,nums1,nums2))
>>[5, 7, 9]
```

list of strings

```python
l=['sat', 'bat', 'cat', 'mat']
list(map(list,l))
>>[['s', 'a', 't'], ['b', 'a', 't'], ['c', 'a', 't'], ['m', 'a', 't']]
```

str of ints

```python
l=[1,2,3,4,5]
list(map(str,l))
>>['1', '2', '3', '4', '5']
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

### set  
A set is an unordered collection of items. Every element is unique (no duplicates) and must be immutable (which cannot be changed).  
However, the set itself is mutable. We can add or remove items from it.  
Sets can be used to perform mathematical set operations like union, intersection, symmetric difference etc.  

```python
#create
s={1,2,3}
s=set([1,2,3])
>>{1,2,3}
#add
s.add(4)
>>{1,2,3,4}
s.update([1,3,5])
>>{1,2,3,4,5}
s.update([4,5], {1,6,8})
>>{1,2,3,4,5,6,8}
s.discard(4)
>>{1,2,3,5,6,8}
s.remove(6)
>>{1,2,3,5,8}
s.pop()
>>{2,3,5,8}
s.clear()
>>set()
#operations
a={1,2,3,4,5}
b={4,5,6,7,8}
a|b, a.union(b), b.union(a) #union, equivalent
>>{1, 2, 3, 4, 5, 6, 7, 8}
a&b, a.intersection(b), b.intersection(a) #intersection
>>{4,5}
a-b, a.difference(b) #difference
>>{1,2,3} #keep the values only in a
b-a, b.difference(a)
>>{6,7,8}
a^b, a.symmetric_difference(b), b.symmetric_difference(a) # symmetric difference
>>{1,2,3,6,7,8}
```

### dict {}  
A dictionary is a collection which is unordered, changeable and indexed.  
In Python dictionaries are written with curly brackets, and they have keys and values.  

```python
d={0: 'a', 1: 'b', 2: 'c', 3: 'd'}

d[0] -> 'a'
d[2] -> 'c'
d[4]=['e','f','g'] #new an entry with list
del d[1] #delete an entry
d[(1,1)]='ab' #tuple can be key, cuz its immutable

#new a dict from another dict
d={0: 'a', 1: 'b', 2: 'c', 3: 'd'}
nd=dict((i,'e') for i in d)
>>{0: 'e', 1: 'e', 2: 'e', 3: 'e'}

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

### functools.cmp_to_key(fun)
The functools module is for higher-order functions: functions that act on or return other functions. In general, any callable object can be treated as a function for the purposes of this module.  
