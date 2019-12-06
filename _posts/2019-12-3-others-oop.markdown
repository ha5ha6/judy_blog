---
layout: single
type: posts
title:  "OThers 11 - object-oriented programming"
date:   2019-12-3 14:45:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Others
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Object Copying  

In object-oriented programming, object copying is creating a copy of an existing object, a unit of data in object-oriented programming.  
The resulting object is called an object copy or simply copy of the original object.  
Copying is basic but has subtleties and can have significant overhead.  

There are several ways to copy an object, most commonly by **a copy constructor or cloning**.  
Copying is done mostly so the copy can be modified or moved, or the current value preserved. If either of these is unneeded, a reference to the original data is sufficient and more efficient, as no copying occurs.

Objects in general store composite data. While in simple cases copying can be done by allocating a new, uninitialized object and copying all fields (attributes) from the original object, in more complex cases this does not result in desired behavior.

**Shallow Copy**  
One method of copying an object is the **shallow copy**.  
In that case a new object B is created, and the fields values of A are copied over to B.  
This is also known as a **field-by-field copy**, field-for-field copy, or field copy.  
If the field value is a reference to an object (e.g., a memory address) it copies the reference, hence referring to the same object as A does, and if the field value is a primitive type it copies the value of the primitive type.  

In languages without primitive types (where everything is an object), all fields of the copy B are references to the same objects as the fields of original A. The referenced objects are thus shared, so if one of these objects is modified (from A or B), the change is visible in the other. Shallow copies are simple and typically cheap, as they can be usually implemented by simply copying the bits exactly.

**Deep Copy**  
An alternative is a **deep copy**, meaning that fields are dereferenced:  
rather than references to objects being copied, new copy objects are created for any referenced objects, and references to these placed in B.  

The result is different from the result a shallow copy gives in that the objects referenced by the copy B are distinct from those referenced by A, and independent.  

Deep copies are more expensive, due to needing to create additional objects, and can be substantially more complicated, due to references possibly forming a complicated graph.

related:  

**leetcode 133 - Clone Graph [M]** see [graph #leetcode](https://ha5ha6.github.io/judy_blog/programming/2019/11/01/data-structrue-graph.html#leetcode)  
**leetcode 138 - Copy List with Random Pointer [M]** 
