---
layout: single
type: posts
title:  "Data Structure 14 - python built-in"
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

### list  

**Basic**

```python
a=[1,2,3,4]
a.insert(1,1.5)
>>[1, 1.5, 2, 3, 4]

b=[5,6,7,8]
a.extend(b)
a
>>[1, 1.5, 2, 3, 4, 5, 6, 7, 8]

a=[1,2,2,3,3,3,4,4,4,4]
a.count(2)
>>2
a.index(3,6)
>>ValueError: 3 is not in list
a.index(3,2)
>>3

a=[2,1,5,0,-3]
a.sort() <=> sorted(a)
a
>>[-3, 0, 1, 2, 5]
a.sort(reverse=True)
>>[5, 2, 1, 0, -3]

a=[2,1,5,0,-3]
a.reverse()
a
>>[-3, 0, 5, 1, 2]

a=[2,1,5,0,-3]
a.pop(1)
>>5 #a=[2,1,0,-3]
del a[1]
a
>>[2,0,-3]
a.remove(2)
a
>>[0,-3]
```

**Advanced**  
reduce(), ord(), cmp(), all(), any(), enumerate(), accumulate(), filter(), map(), lambda()

### tuple  
A tuple is a sequence of immutable Python objects. Tuples are sequences, just like lists. The differences between tuples and lists are, the tuples cannot be changed unlike lists, tuples use parentheses, whereas lists use square brackets.  

```python
a=('physics','chemistry',1997,2000)
b=(1,2,3,4,5)
c='a','b','c'
d=() #an empty tuple
e=(50,)

a[0]
>>'physics'
b[1:3]
>>(2,3)

del a
a
>>NameError: name 'a' is not defined

a=(1,2,3)
len(a)
>>3

#concatenation
(1,2,3)+(4,5,6)
>>(1,2,3,4,5,6)

#repetition
('hi!')*4
>>('hi!','hi!','hi!','hi!')

#membership
3 in (1,2,3)
>>True

#iteration
for x in (1,2,3):
    print(x)
>>1 2 3

max((1,2,3))
>>3
min((1,2,3))
>>1

#list to tuple
tuple([1,2,3,2,1])  
>>(1, 2, 3, 2, 1)

#tuple ele cannot be changed
a=(1,2,3)
a[0]=2
>>TypeError: 'tuple' object does not support item assignment
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

### heapq

Heap data structure is mainly used to represent a priority queue. In Python, it is available using “heapq” module.  
The property of this data structure in python is that each time the smallest of heap element is popped(min heap). Whenever elements are pushed or popped, heap structure is maintained.  

```python
import heapq

a=[5,7,9,1,3]

#convert list to heap
heapq.heapify(a)
a
>>[1, 3, 9, 7, 5] #partially in order!

heapq.heappush(a,4)
a
>>[1, 3, 4, 7, 5, 9]

heapq.heappop(a)
>>1
a
>>[3, 5, 4, 7, 9]

a=[5, 7, 9, 4, 3]
b=[5, 7, 9, 4, 3]

heapq.heapify(a)
heapq.heapify(b)

#push and pop at the same time to increase efficiency
#first push then pop
heapq.heappushpop(a,2)
>>2
a
>>[3, 4, 9, 5, 7]

#first pop then push
heapq.heapreplace(b,2)
>>3
b
>>[2, 4, 9, 5, 7]

a=[6, 7, 9, 4, 3, 5, 8, 10, 1]
heapq.heapify(a)

#return kth largest/smallest
heapq.nlargest(3,a)
>>[10, 9, 8]

heapq.nsmallest(3,a)
>>[1, 3, 4]
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

### itertools.combinations

```python
n=4
k=2
list(range(1, n+1))
>>[1,2,3,4]
list(itertools.combinations(range(1, n+1), k))
>>[(1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)]
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

Deque can be implemented in python using the module “collections“. Deque is preferred over list in the cases where we need quicker append and pop operations from both the ends of container, as deque provides an O(1) time complexity for append and pop operations as compared to list which provides O(n) time complexity.  

ref see [geeksforgeeks](https://www.geeksforgeeks.org/deque-in-python/)  

```python
from collections import deque

q=deque([1,2,3])
q.append(4)
q.appendleft(6)
>>deque([6, 1, 2, 3, 4])

q.pop()
>>4
>>deque([6, 1, 2, 3])

q.popleft()
>>6
>>eque([1, 2, 3])

q=deque([1, 2, 3, 3, 4, 2, 4])
q.index(4,2,5) #show first occurrence of 4 between idx 2 to 5
>>4

q.insert(4,6) #insert 3 at idx 4
>>deque([1, 2, 3, 3, 6, 4, 2, 4])
                      ^
q.remove(3) #remove the first occurrence of 3
>>deque([1, 2, 3, 6, 4, 2, 4])

q.count(2) #count the occurrences of 2
>>2

q=deque([1,2,3])
q.extend([4,5,6])
>>deque([1, 2, 3, 4, 5, 6])

q.extendleft([7,8,9])
>>deque([9, 8, 7, 1, 2, 3, 4, 5, 6])

q=deque([9, 8, 7, 1, 2, 3, 4, 5, 6])
q.rotate(3)
>>deque([4, 5, 6, 9, 8, 7, 1, 2, 3])

q=deque([9, 8, 7, 1, 2, 3, 4, 5, 6])
q.rotate(-3)
>>deque([1, 2, 3, 4, 5, 6, 9, 8, 7])

q=deque([9, 8, 7, 1, 2, 3, 4, 5, 6])
q.reverse()
>>deque([6, 5, 4, 3, 2, 1, 7, 8, 9])
```

### functools.cmp_to_key(fun)
The functools module is for higher-order functions: functions that act on or return other functions. In general, any callable object can be treated as a function for the purposes of this module.  
