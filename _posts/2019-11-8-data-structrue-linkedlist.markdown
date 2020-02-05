---
layout: single
type: posts
title:  "Data Structure 5 - linked list"
date:   2019-11-8 17:26:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Data Structure
  - Linked List
  - Pointers
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

## Background

### Definition

A linked list is **a linear collection of data elements**, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence.  
In its most basic form, each node contains: **data, and a reference** (in other words, a link) to the next node in the sequence.

(+) save memory compared to array, it only allocates the memory required for values to be stored  
(+) dynamic, length can be increased or decreased as necessary     
(+) list nodes can live anywhere (not continguously) in the memory, only update references  
(+) can be easily inserted or removed **without reallocation or reorganization**  

(-) **access time is linear** (and difficult to pipeline)    
(-) no faster access, such as random access. Arrays have better cache locality compared to linked lists.   
(-) no efficient indexing, (iterate k times to find index k), many basic operations—such as obtaining the last node of the list, finding a node that contains a given datum, or locating the place where a new node should be inserted—may require iterating through most or all of the list elements.   

Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays, and S-expressions, though it is not uncommon to implement those data structures directly without using a linked list as the basis.  

### Points to Note  

1. single linked list or double
2. when deletion in a double linked list, must also update n.next, to set n.next.prev equal to n.prev  
3. two pointers (slow and fast) - the Runner Technique  

        rearrange a1->a2->a3->...->an->b1->b2->b3->...->bn
        to        a1->b1->a2->b2..................->an->bn

        use the fast move every 2 nodes
        a1->a2->a3->...->an->b1->b2->b3->...->bn
        f       f     
        s   s                s                f

        move f to the front and begin "weaving"
        on each iteration, s selects an element from b, and inserts it after f




4. recursion algs take at least SO(n), n is the depth of the recursive call, **all recursive algs can be implemented iteratively**, **recursive solutions are often cleaner but less optimal**



### Basic Operations  

1. find() - TO(n)
2. access_first() - TO(1)
3. access_last() - TO(n)
4. access_arbitrary() - TO(n)
5. insert_front() - TO(1)
6. insert_end() - TO(n)
7. insert_arbitrary() - TO(n)
8. delete_front() - TO(1)
9. delete_end() - TO(n)
10. size() - TO(n)
11. isEmpty() - TO(1)  

### Implementation

```python
class ListNode():
    def __init__(self,x):
        self.val=x
        self.next=None

#create linked list
head=ListNode(0)
head.next=ListNode(1)
head.next.next=ListNode(2)
head.next.next.next=ListNode(3)
head.next.next.next.next=ListNode(4)
```   

- insert_front, insert_end, insert_mid
- delete - use two pointers, cur h and pre     
- print = traverse  

Note:  
the difference between while last and while last.next in scanning the list  

    last=self.head

    0->1->2->3->N

    while last.next             while last:
        last=last.next              last=last.next

    0->1->2->3->N               0->1->2->3->N
             ^                              ^
             last stops at 3                last stops at None

```python
class LinkedList():
    def __init__(self):
        self.head=None

    def printList(self):
        node=self.head
        while node:
            print(node.val)
            node=p.next

    def insert_front(self,data):
        new=ListNode(data)
        new.next=self.head
        self.head=new

    def insert_end(self,data):
        new=ListNode(data)
        if not self.head:
            self.head=new
            return

        last=self.head
        while last.next:
            last=last.next

        last.next=new

    def insert_mid(self,mid,data):
        if not mid:
            print('The mentioned mid node is absent.')
            return

        new=ListNode(data)
        new.next=mid.next
        mid.next=new

    #use two pointers to record current h and pre h
    def delete(self,data):
        h=self.head

        #if data==head.val, delete head
        if h.val==data:
            self.head=h.next
            h=None
            return  

        while h:
            if h.val==data:
                break
            pre=h
            h=h.next

        #if data not in list, h to the end None
        if not h:
            return

        pre.next=h.next
        h=None  

l=LinkedList()
l.head=ListNode(1)
n2=ListNode(2)
n3=ListNode(3)
l.head.next=n2
n2.next=n3
l.insert_front(0)
l.insert_end(4)
l.insert_mid(l.head.next,1.5)
l.printList()
>>
0
1
1.5
2
3
4

l.delete(3)
l.printList()
>>
0
1
1.5
2
4
```

Simple Deletion:

```python
def deleteNode(head,data):
    h=head
    if h.val==data:
        return head.next

    while h.next:
        if h.next.val==data:
            h.next=h.next.next
            return head

        h=h.next

    return head
```

## Cracking  

### 2.1 Remove Dups

Write code to remove duplicates from an unsorted linked list.  

- use hash table or set to track dups  

Solution: TO(n), SO(n)  

```python
def deleteDups(head):
    h=head
    prev=None
    seen=set()

    while h:
        if h.val in seen:
            prev.next=h.next
        else:
            seen.add(h.val)
            prev=h

        h=h.next
```

Solution 2: no buffer allowed, use two pointers, TO(n^2), SO(1)   

```python
def deleteDups(head):
    cur=head
    while cur:
        runner=cur
        while runner.next:
            if runner.next.val==cur.val:
                runner.next=runner.next.next
            else:
                runner=runner.next

        cur=cur.next
```

### 2.2 Return Kth to Last

Implement an algorithm to find the kth to last element of a singly linked list.  

define passing k=1, return the last element  
k=2, return to the second to last element  

Solution 1: if the length is known, iterate (length-k), too trivial    

Solution 2.1: recursive, SO(n)    

    1->2->3->N

    p((1),2)
        idx=p((2),2)+1
            idx=p((3),2)+1=2  idx==k  print((2).val), because (2).next=(3)
                idx=p((N),2)+1=1
                       0


```python
def printKthToLast(head,k):
    if not head:
        return 0

    idx=printKthToLast(head.next,k)+1
    if idx==k:
        print(head.val)

    return idx
```

Solution 2.2: wrapping into a class

```python
class ListNode():
    def __init__(self,val):
        self.val=val
        self.next=None

class Index():
    value=0

def kthToLast(head,k):
    idx=Index()

    return kthToLast2(head,k,idx)

def kthToLast2(head,k,idx):

    if not head:
        return None

    node=kthToLast2(head.next,k,idx)
    idx.value+=1

    if idx.value==k:
        return head

    return node

h=ListNode(1)
h.next=ListNode(2)
h.next.next=ListNode(3)

print(kthToLast(h,3).val)
```

Solution 3: iterative, two pointers, TO(n), SO(1)  
p1 goes first at k steps  
p2 goes together with p1 for the rest steps of p1  
i.e. total 5 nodes, k=2
p1 goes 2 steps
then p2 goes 5-2 steps with p1 touches the end  

```python
def KthToLast(head,k):
    p1=head
    p2=head

    for i in range(k):
        if not p1:
            return None  
        p1=p1.next

    while p1:
        p1=p1.next
        p2=p2.next

    return p2
```

### 2.3 Delete Middle Node

Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node. (Given the middle node)   

Input: the node from the linked list a->b->c->d->e->f  
Output: nothing is returned, but the new linked list looks like a->b->d->e->f  

- This problem can not be solved if the node to be deleted is the last node
- to handle this case, could consider marking the node as dummy  

```python
def deleteNode(node):
    if not node or not node.next:
        return False

    node.data=node.next.data
    node.next=node.next.next
    return True  
```

### 2.4 Partition

Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the "right partition". It does not need to appear between the left and right partitions.

Input: 3->5->8->5->10->2->1, x=5  
Output: 3->1->2->10->5->5->8  

- array shifting is expensive, however, in linked list is easy
- we can create 2 different linked lists one for elements <x, one for >=x, then merge_sort
- this approach is stable because every element stays in their original order  

Solution 1:

```python
def partition(node,x):
    left_head=None
    left_end=None
    right_head=None
    right_end=None

    while node:
        node_next=node.next
        node.next=None

        if node.val<x:
            if not left_head:
                left_head=node
                left_end=left_head
            else:
                left_end.next=node
                left_end=node   #before_end always points to the end node

        else:
            if not right_head:
                right_head=node
                right_end=right_head
            else:
                right_end.next=node
                right_end=node

        node=node_next

        if not left_head:
            return right_head

        left_end.next=right_head

        return left_head
```  

Solution 2??: start a new list usding the existing nodes, elements <x are put at the head, otherwise put at the tail  

?? 1->2->3->3 ??  
?? 3->5->8->5->10 ??  
Does this two halves naturally connected??  


```python
def partition(node,x):
    head=node  
    tail=node

    while node:
        if node.val<x:
            #insert node at head
            node.next=head
            head=node
        else:
            #insert node at tail
            tail.next=node
            tail=node

        node=node.next

    tail.next=None

    return head
```  

### 2.5 Sum Lists

You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and return the sum as a linked list. (same as leetcode 2)

Input: 7->1->6 + 5->9->2  that is 617+295  
Output: 2->1->9  that is 912  

Solution: recursive  

          7->1->6
    +     5->9->2
    -----------------
         12 11  9
    keep  2  1  9
    carry 1  1

```python
def addLists(l1,l2,carry):
    if not l1 and not l2 and carry==0:
        return None

    res=ListNode(0)
    value=carry

    if l1:
        value+=l1.val

    if l2:
        value+=l2.val

    res.val=value%10

    if l1 or l2:
        more=addLists(l1.next if l1 else None, l2.next if l2 else None, 1 if value >=10 else 0)
        res.next=more

    return res
```  

Follow up - In right order:  
Input: 6->1->7 + 2->9->5  that is 617+295  
Output: 9->1->2  that is 912  

Solution:  

```python
class PartialSum():
    head=ListNode(None)
    carry=0

def addLists(l1,l2):
    len1=length(l1)
    len2=length(l2)

    if len1<len2:
        l1=padList(l1,len2-len1)
    else:
        l2=padList(l2,len1-len2)

    ps=PartialSum()
    ps=addListHelper(l1,l2)

    if ps.carry==0:
        return ps.head
    else:
        res=insertBefore(ps.head,ps.carry)
        return res

def addListHelper(l1,l2):
    if not l1 and not l2:
        ps=PartialSum()
        return ps

    ps=addListHelper(l1.next,l2.next)
    val=ps.carry+l1.val+l2.val

    full_res=insertBefore(ps.head,val%10)

    ps.head=full_res
    ps.carry=val//10
    return ps

def padList(l,padding):
    head=l
    for i in range(padding):
        head=insertBefore(head,0)

    return head

def insertBefore(l,data):
    node=ListNode(data)
    if l:
        node.next=l

    return node

def length(l):
    cnt=0
    while l:
        cnt+=1
        l=l.next

    return cnt
```  

### 2.6 Palindrome

Implement a function to check if a linked list is a palindrome.  

i.e. 0->1->2->1->0  

Solution 1: reverse and compare, if same they are identical  

```python
def isPalindrome(head):
    reversed=reverseAndClone(head)

    return isEqual(head,reversed)

def reverseAndClone(node):
    head=ListNode(None)
    while node:
        n=ListNode(node.val)
        n.next=head
        head=n
        node=node.next

    return head

def isEqual(one,two):
    while one and two:
        if one.val!=two.val:
            return False
        one=one.next
        two=two.next

    return not one and not two
```

Solution 2: iterative, stack to check the first half of the list is the reverse of the second half  

if length is known, we can directly put them onto stack  
if length is unknown, use fast and slow pointers - at each step, we push the data from the slow pointer onto a stack  

```python
def isPalindrome(head):
    fast=head
    slow=head

    stack=[]

    while fast and fast.next:
        stack.append(slow.val)
        slow=slow.next
        fast=fast.next.next

    if fast:
        slow=slow.next

    while slow:
        top=stack.pop()
        if top!=slow.val:
            return False

        slow=slow.next

    return True
```

Solution: recursive

```python
class Result():
    node=ListNode()
    bool=False

def isPalindrome(head):
    length=lengthOfList(head)
    p=Result()
    p=isPalindromeRecurse(head,length)
    return p.bool

def isPalindromeRecurse(head,length):
    if not head or length<=0:
        return Result(head,True)

    elif length==1:
        return Result(head.next,True)

    res=isPalindromeRecurse(head.next,length-2)

    if not res.bool or not res.node:
        return res

    res.bool=(head.val==res.node.val)
    res.node=res.node.next

    return res

def lengthOfList(node):
    size=0
    while node:
        size+=1
        node=node.next

    return size
```


## Problems

### Remove  

**leetcode 237 - Delete Node in a Linked List [E]**  
Given linked list: 4->5->1->9, node=5  
Output: 4->1->9

```python
class Solution():
    def deleteNode(self,node):
        node.val=node.next.val
        node.next=node.next.next
```

**leetcode 19 - Remove Nth Node From End of List [M]**  
Given a linked list, remove the n-th node from the end of list and return its head.  
Example:  
Given linked list: 1->2->3->4->5, and n = 2.  
After removing the second node from the end, the linked list becomes 1->2->3->5.  

Consider:  
1. whether n is valid node, what if n>len of list?  
2. **what if deleting the head? -> use dummy**   
3. how about if it's a cycled linked list? -> not clear  

Solution:  
1. create dummy head  
2. find the node needs to be deleted using fast and slow pointers (rabbit turtle race)  
3. fast goes first, then slow and fast go together, slow stops at the one before the nth node  
Note: while fast.next: fast=fast.next -> fast stop at the last node, cuz fast.next is None   
4. slow->slow.next.next  


        dummy->1->2->3->4->5 n=2
         s,f
        dummy->1->2->3->4->5
                  f
        dummy->1->2->3->4->5
                     s     f
                     s->s.next.next
       =dummy->1->2->3->5


```python
class Solution():
    def removeNthfromEnd(self,head,n):
        dummy=ListNode(0)
        dummy.next=head
        slow=fast=dummy

        for i in range(n):
            fast=fast.next

        while fast.next:
            fast=fast.next
            slow=slow.next

        slow.next=slow.next.next

        return dummy.next
```

**leetcode 83 - Remove Duplicates from Sorted List [E] - remove one dup**  
Given a sorted linked list, delete all duplicates such that each element appear only once.  
Example 2:  
Input: 1->1->2->3->3  
Output: 1->2->3  

Solution:  
1. put p at head  
2. while p and p.next: p=p.next, p stop at the end  


        1->1->2->3->3
        p              p->p.next.next if p.val==p.next.val
        1->2->3->3
        p              p=p.next if p.val!=p.next.val
        1->2->3->3
           p           p=p.next if p.val!=p.next.val
        1->2->3->3
              p        p->p.next.next if p.val==p.next.val
        1->2->3->N
              p     

```python
class Solution():
    def deleteDuplicates(self, head):
        p=head
        while p and p.next:
            if p.val==p.next.val:
                p.next=p.next.next
            else:
                p=p.next

        return head
```

**leetcode 82 - Remove Duplicates from Sorted List II [M] - remove all dups**  
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.  
Example 1:  
Input: 1->2->3->3->4->4->5  
Output: 1->2->5  

Example 2:  
Input: 1->1->1->2->3  
Output: 2->3  

Solution:  
1. create dummy cuz might delete head  
2. create pre (p) start from dummy always ahead of cur (c)  
3. find c.val==c.next.val, move c to next  
4. check p.next is still c, if not p->c.next (delete all dups)  


        dummy->1->2->3->3->4->4->5
          p    c                   p=p.next if c==p.next
        dummy->1->2->3->3->4->4->5  
               p  c                p=p.next if c==p.next
        dummy->1->2->3->3->4->4->5  
                  p  c             c=c.next if c.val==c.next.val
        dummy->1->2->3->3->4->4->5
                  p     c          p->c.next if c!=p.next
       =dummy->1->2->4->4->5          
                  p  c             c=c.next if c.val==c.next.val
        dummy->1->2->4->4->5          
                  p     c          p->c.next if c!=p.next
       =dummy->1->2->5
                  p  c             p=p.next if c==p.next
        dummy->1->2->5
                     p


```python
class Solution():
    def deleteDuplicates(self, head):
        dummy=ListNode(0)
        dummy.next=head
        pre=dummy
        while pre.next:
            cur=pre.next
            while cur.next and cur.val==cur.next.val:
                cur=cur.next
            if cur==pre.next:
                pre=pre.next
            else:
                pre.next=cur.next

        return dummy.next
```

**leetcode 203 - Remove Linked List Elements [E]**  
Remove all elements from a linked list of integers that have value val.  

Input:  1->2->6->3->4->5->6, val = 6  
Output: 1->2->3->4->5  

Solution:  
1. create dummy in case removing the head  
2. p ahead of head at each step  
3. if encounter value, p->h.next, h->N  

      dummy->1->2->6->3->4->5->6
        p    h
             p  h
                p  h             h.val==val
                2->3             p->h.next
                      h          h=h.next


```python
class Solution():
    def removeElements(self,head,val):
        dummy=p=ListNode(0)
        dummy.next=head

        while head:
            if head.val==val:
                p.next=head.next
            else:
                p=p.next
            head=head.next

        return dummy.next
```

### Partition

**leetcode 86 - Partition List [M]**  
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.  

Example:  
Input: head = 1->4->3->2->5->2, x = 3  
Output: 1->2->2->4->3->5  

Solution:  
put all nodes less than x into the front and the rest remains the origin  
1. create two dummy heads, lesser_head and greater_head, and point l and g to them  
2. put p to head, if p.val<x, put it to l.next, else put it to g.next  
3. merge two lists, g->None, l->greater_head.next


        lesser_head ->1->4->3->2->5->2
        greater_head->1->4->3->2->5->2  x=3
             l,g      p                 if 1<x l->p l=p
         lesser_head->1
                      l
                    ->1->4->3->2->5->2
                         p              if 4>=x g->p g=p
        greater_head->4
                      g
                    ->1->4->3->2->5->2
                            p           if 3>=x g->p g=p
        greater_head->4->3
                         g
                    ->1->4->3->2->5->2
                               p        if 2<x l->p l=p
         lesser_head->1->2
                         l
                    ->1->4->3->2->5->2
                                  p     if 5>=x g->p g=p
        greater_head->4->3->5
                            g
                    ->1->4->3->2->5->2
                                     p  if 2<x l->p l=p
         lesser_head->1->2->2
                            l           l->greader_head.next g->None                                   
         lesser_head->1->2->2->4->3->5->N (result)

```python
class Solution():
    def partition(self,head,target):
        l_head=l=ListNode(0)
        g_head=g=ListNode(0)
        p=head

        while p:
            if p.val<target:
                l.next=p
                l=p #or l=l.next
            else:
                g.next=p
                g=p #or g=g.next

            p=node.next

        g.next=None
        l.next=g_head.next

        return l_head.next
```

### Merge  

**leetcode 21 - Merge Two Sorted Lists [E]**  
Example:  
Input: 1->2->4, 1->3->4  
Output: 1->1->2->3->4->4  

Solution:  
1. create dummy and pre  
2. compare val of each l1,l2, put it next to new p  
3. finish with shorter l, attach the leftover of the longer   


        1->4
        l1
        2->3->5->6
        l2
        2->3->5->6
           l2
        1->4
           l1

        1->2->3->4|->5->6 (leftover of l2)
                  while done
        p->p->p->p->leftover

```python
class Solution(object):
    def merge(self,l1,l2):
        pre=dummy=ListNode(0) # a new list
        while l1 and l2:
            if l1.val<l2.val:
                pre.next=l1
                l1=l1.next
            else:
                pre.next=l2
                l2=l2.next
            pre=pre.next

        pre.next=l1 or l2
        return dummy.next
```

**later check!! leetcode 23 - Merge K Sorted Lists [H]**  
Example:  
Input:  
[1->4->5,  
1->3->4,  
2->6]  
Output: 1->1->2->3->4->4->5->6  

Solution: heapify  

```python
import heapq
class Solution(object):
    def mergeKLists(self,lists):
        pre=dummy=ListNode(0)
        next_nodes=[(l.val,l) for l in lists if l]
        heapq.heapify(next_nodes)

        while next_nodes:
            value,node=heapq.heappop(next_nodes)
            pre.next=node
            pre=pre.next

            if node.next:
                heapq.heappush(next_nodes,(node.next.val,node.next))

        return dummy.next
```

### Swap

**leetcode 24 - Swap Nodes in Pairs [M]**  
Given a linked list, swap every two adjacent nodes and return its head.  
Example:  
Given 1->2->3->4, you should return the list as 2->1->4->3.  

Solution:  
1. create dummy and pre  
2. point first (f) to 1 and second (s) to 2  
3. first->second.next, pre->second, pre.next->first  


         dummy->1->2->3->4
           p    f  s
                1->3            f->s.next
         dummy->2               p->s
           p    2->1->3         p.next->f
       = dummy->2->1->3->4->N
                   p  f  s
                      3->N      f->s.next
         dummy->2->1->4         p->s
                   p  4->3->N   p.next->f


```python
class Solution():
   def swapPairs(self,head):
       pre=dummy=ListNode(0)
       dummy.next=head
       while pre.next and pre.next.next:
          first=pre.next
          second=pre.next.next

          first.next=second.next
          pre.next=second
          pre.next.next=first

          pre=pre.next.next

       return dummy.next
```

### Rotate

**leetcode 61 - Rotate List [M]**  
Given a linked list, rotate the list to the right by k places, where k is non-negative.  

Example 1:  
Input: 1->2->3->4->5->NULL, k = 2  
Output: 4->5->1->2->3->NULL  
Explanation:  
rotate 1 steps to the right: 5->1->2->3->4->NULL  
rotate 2 steps to the right: 4->5->1->2->3->NULL  

Example 2:  
Input: 0->1->2->NULL, k = 4  
Output: 2->0->1->NULL  
Explanation:  
rotate 1 steps to the right: 2->0->1->NULL  
rotate 2 steps to the right: 1->2->0->NULL  
rotate 3 steps to the right: 0->1->2->NULL  
rotate 4 steps to the right: 2->0->1->NULL  

Solution:  
1. go through the linked list to get the total len    
2. use fast and slow pointer to find rotate node  

        1->2->3->4->5
        h     f
              s     f
                 4->5->1->2-> f->h
                 h=s.next
                 4->5->1->2->3->N s->N

```python
class Solution():
   def rotateList(self,head,k):
       if not head:
          return

       l=0
       while head:
          l+=1
          head=head.next

       fast,slow=head,head
       for i in range(k%l):
          fast=fast.next   #fast stop at 3 if k=2

       while fast.next:
          slow=slow.next
          fast=fast.next  #fast stops at 5 slow stops at 3

       fast.next=head
       head=slow.next
       slow.next=None

       return head     
```

### Reverse

**leetcode 206 - Reverse Linked List [E]**  
Example:  
Input: 1->2->3->4->5->Null  
Output: 5->4->3->2->1->Null  

Solution1: operating on the original linked list  
1. point p to head  
2. head move to next  
3. p.next=new_head  
4. move new_head to forehand p  

        1->2->3->N
        |  
        p    
        h->h(Node(2))
        p->new_head(Node(None))
       =1->N
        |  
        new_head(Node(1))

        1->2->3->N
           |
           p
           h->h(Node(3))
           p->new_head(Node(1))
          =2->1->N
           |
           new_head(Node(2))

        1->2->3->N
              |
              p
              h->h(Node(4))
              p->new_head(Node(2))
             =3->2->1->N
              |
              new_head(Node(3))

```python
class Solution():
    def reverseList(self,head):
        new_head=None
        while head:
            p=head
            head=head.next
            p.next=new_head
            new_head=p

        return new_head
```

Simplified:

```python
class Solution():
    def reverseList(self,head):
        new_head,p=None,head
        while p:
            new_head,p.next,p=p,new_head,p.next

        return new_head
```

Solution2: iteratively  
Solution3: recursively  

**leetcode 92 - Reverse Linked List II [M]**  
Example:  
Input: 1->2->3->4->5->Null, m=2, n=4  
Output: 1->4->3->2->5->Null  

Solution:  
1. prepare dummy node pointed to head  
2. point m,n nodes to head, pre (p) to dummy  
3. find m,n nodes and put p ahead of mnode  
4. while mnode!=nnode, p->mnode.next, mnode->nnode.next, nnode->mnode, put mnode to p.next  

note: p,nnode not change, only mnode change position to p.next  
loop1: first get 1->3->4->5->N, then 2->5->N, then put 4->2, get 1->3->4->2->5->N  
loop2: first get 1->4->2->5->N, then 3->2->5->N, then put 4->3, get 1->4->3->2->5->N  



           dummy->1->2->3->4->5->N
             |    |
             p    h,m,n

           dummy->1->2->3->4->5->N
                  |  |     |
                  p  m     n

           dummy->1->2->3->4->5->N
                  |  
                  p->m.next(Node(3))
                 =1->3->4->5->N
                        |
                        n

           dummy->1->2->3->4->5->N
                     |
                     m->n.next(Node(5))
                    =2->5->N
                     ^
                     |
        dummy->1->3->4(->5->N)
                     |
                     n->m(Node(2))   

           dummy->1->3->4->2->5->N <new!>
                  |  |  |
                  p  m  n

           dummy->1->3->4->2->5->N
                  |
                  p->m.next(Node(4))
                 =1->4->2->5->N

           dummy->1->3->4->2->5->N
                     |
                     m->n.next(Node(2))
                    =3->2->5->N
                     ^
                     |
           dummy->1->4(->2->5->N)
                     |
                     n->m(Node(3))

           dummy->1->4->3->2->5->N
                  |  |
                  p  n,m(end while)

```python
class Solution():
    def reverse(self,head,m,n):
        dummy=ListNode(0)
        dummy.next=head
        mnode=head
        nnode=head
        pre=dummy

        for i in range(1,m):
            pre=mnode
            mnode=mnode.next

        for i in range(1,n):
            nnode=nnode.next

        while mnode!=nnode:
            pre.next=mnode.next
            mnode.next=nnode.next
            nnode.next=mnode
            mnode=pre.next

        return dummy.next
```

**leetcode 143 - Reorder List [M]**  
Example 1:  
Given 1->2->3->4  
Reorder it to 1->4->2->3  

Example 2:  
Given 1->2->3->4->5  
Reorder it to 1->5->2->4->3   

Solution:  
1. find mid node using fast and slow points, (first left if even len)  
2. reverse linked list after mid(slow)  
new_head,p=None,slow  
while p:  
new_head,p.next,p=p,new_head,p.next  


        1->2->3->4->5
              |
              slow(mid),p

        1->2->3->4->5 new_head*=Node(None)
              |
              new_head#
              p->new_head*(Node(None))
             =3->N  

        1->2->3->4->5 new_head#=Node(3)
                 |
                 new_head~
                 p->new_head#(Node(3))
                =4->3->N

        1->2->3->4->5 new_head~=Node(4)
                    |
                    new_head+
                    p->new_head~(Node(4))
                   =5->4->3->N

3. cross insert  
first,second=head,new_head  
while second.next:  
first.next,first=second,first.next  
second.next,second=first,second.next  


         1->2->3->4->5        5->4->3->N
         |                    |
         head                 new_head
         first(f)             second(s)

         f->s             1->2->3->4->5
        =1->5                f#

            s->f#         5->4->3->N
        =1->5->2             s*

               f#->s*     1->2->3->4->5
        =1->5->2 ->4            f~

                  s*->f~  5->4->3->N
        =1->5->2->4 ->3         s.next=None stop!        


```python
class Solution():
    def reorderList(self,head):
        if not head:
            return None

        fast,slow=head,head
        while fast and fast.next:
            fast=fast.next.next
            slow=slow.next

        new_head,p=None,slow
        while p:
            new_head,p.next,p=p,new_head,p.next

        first,second=head,new_head
        while second.next:
            first.next,first=second,first.next
            second.next,second=first,second.next
```

**leetcode 25 - Reverse Nodes in k-Group [H]**  
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.  

Example:  
Given this linked list: 1->2->3->4->5  
For k = 2, you should return: 2->1->4->3->5 (group in 2)  
For k = 3, you should return: 3->2->1->4->5 (group in 3, leftover remains)

Solution: put k group in stack and pop!!
1. create dummy and cur  
2. point first (f) to 1
3. for i in range(k): put first node in stack and move first to next   
4. check len(stack)?=k, if not return dummy.next  
5. pop node in stack next to dummy, move cur to next  
6. point cur->first  


        dummy->1->2->3->4->5
          c    f     f       stack=[1,2] len(stack)==k                 
        dummy->2->1          c->stack.pop()
                  c
                  1->3->4->5 c->f
                     f     f stack=[3,4] len(stack)==k
                  1->4->3    c->stack.pop()
                        3->5 c->f
                             stack=[5]   len(stack)!=k return dummy.next

 ```python
 class Solution():
     def reverseKGroup(self,head,k):
         if not head:
             return None

         cur=dummy=ListNode(0)
         first=dummy.next
         stack=[]
         while first:
             for i in range(k):
                 if first:
                     stack.append(first)
                     first=first.next

             if len(stack)!=k:
                 return dummy.next

             while stack:
                 cur.next=stack.pop()
                 cur=cur.next

             cur.next=first

         return dummy.next
 ```


### Fast n Slow  

**leetcode 141 - Linked List Cycle [E] - T/F**  
Given a linked list, determine if it has a cycle in it.  
Example 1:  
Input: head = [3,2,0,-4], pos = 1  

    3->2->0->-4
       ^      |
       |-------

Output: true  
Explanation: There is a cycle in the linked list, where tail connects to the second node.  

Example 2:  
Input: head = [1,2], pos = 0  

    1->2
    ^  |
    |---

Output: true  
Explanation: There is a cycle in the linked list, where tail connects to the first node.  

Example 3:  
Input: head = [1], pos = -1  
Output: false  
Explanation: There is no cycle in the linked list.  

```python
class Solution(object):
    def hasCycle(self,head):
        fast, slow=head, head
        while fast and fast.next:
            if fast==slow:
                return True
            slow=slow.next
            fast=fast.next.next

        return False
```

**leetcode 142 - Linked List Cycle II [M] - return cycle head**  
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.  
![](https://ha5ha6.github.io/judy_blog/assets/images/142.png)  
Solution:  
1. let fast (2 steps) and slow (1 step) meet  
2. put fast back to the head   
3. the cycle head will be the same node when fast (1 step) and slow (1 step) meet again  

```python
class Solution(object):
    def detectCycle(self,head):
        fast, slow=head, head
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
            if slow==fast:
                fast=head
                while fast!=slow:
                    fast=fast.next
                    slow=slow.next
                return slow

        return None
```

**leetcode 234 - Palindrome Linked List [E]**  
Given a singly linked list, determine if it is a palindrome.  

Examples:  
Input: 1->2  
Output: false  
Input: 1->2->2->1  
Output: true  

Solution:  
while fast and fast.next is for odd and even length of list  
if odd length (including None), fast reaches the end of None  
if even length (including None), fast reaches the node before end  

    1->2->2->1->N   stack=[1,2]
    f     f     f
    s  s  s

    1->2->3->2->1->N   stack=[1,2]
    f     f     f
    s  s  s   

record slow visited nodes into a stack  
if fast reaches the None, slow keeps its current position  
if fast doesnot reach the None, slow moves to next  

    1->2->2->1->N   stack=[1,2]
    f     f     f
    s  s  s*

    1->2->3->2->1->N   stack=[1,2]
    f     f     f
    s  s  s->s*   

compare stack.pop with s*, move slow to the end of the list and return matching result  


```python
class Solution():
    def isPalindrome(self,head):
        fast=slow=head
        stack=[]

        while fast and fast.next:
            stack.append(slow.val)
            slow=slow.next
            fast=fast.next.next

        if fast:
            slow=slow.next

        while slow:
            top=stack.pop()
            if top!=slow.val:
                return False
            slow=slow.next

        return True
```


### Sorting

**leetcode 147 - Insertion Sort List [M]**  
Example:  
Input: 4->2->1->3  
Output: 1->2->3->4  

Solution:  
Insertion sort: check next if smaller move it to front  
1. create dummy  
2. scan and find head.val>head.next.val,t=h.next  
3. q=dummy, h->h.next.next  
4. scan q from dummy, find q.next.val>t.val, t->q.next, q->t  



          dummy->4->2->1->3->N
            |    |  |
            q    h  t (when 4>2, t=h.next) <step2>
            q-->=4---->1->3->N h->h.next.next <step3>
                    2->4->1->3->N t->q.next(4->1->3->N) when q.next=4>2=t <step4>
            q------>t
         =dummy->2->4->1->3->N
            |       |  |
            q       h  t (4>1)
            q--->2-=4->3->N h->h.next.next
                       1->2->4->3->N t->q.next(2->4->3->N) when q.next=2>1=t
            q--------->t
         =dummy->1->2->4->3->N      
            |          |  |
            q          h  t (4>3)
            q--->1->2-=4->N h->h.next.next                   
                    |     3->4->N  t->q.next(4->N) when q.next=4>3=t
                    q---->t
         =dummy->1->2->3->4->N  
                          h.next=None stop!


```python
class Solution():
    def insertionSortList(self,head):
        if not head or not head.next:
            return head

        dummy=ListNode(0)
        dummy.next=head
        while head.next:
            if head.val<=head.next.val:
                head=head.next
            else:
                t=head.next
                q=dummy
                head.next=head.next.next
                while q.next and q.next.val<t.val:
                    q=q.next

                t.next=q.next
                q.next=t

        return dummy.next
```

**leetcode 148 - (Merge) Sort List [M]**  
Sort linked list in O(nlogn) time complexity with O(n) space complexity  
Example:  
Input: 4->2->1->3  
Output: 1->2->3->4  

Solution:  
Merge sort: split list in half, sort halves and merge  
```python
def merge_sort(a):
    if len(a)<=1:
        return a
    left,right=merge_sort(a[:len(a)//2]),merge_sort(a[len(a)//2:])

    return merge(left,right)
```

1. find mid using fast and slow, slow point to mid if odd len, second mid if even len  
2. cut the first half with p->N  
3. run new recursive sortList with head and slow as second head  
4. merge two sorted lists (**leetcode 21**)


          5->3->1->2->4       5->3->1->2->4->0->N
        f,s,p
             p  s     f             p  s        f


```python
class Solution():
    def sortList(self,head):
        if not head or not head.next
            return head

        pre,fast,slow=head,head,head
        while fast and fast.next:
            pre=slow
            slow=slow.next
            fast=fast.next.next

        pre.next=None

        l1=self.sortList(head)
        l2=self.sortList(slow)

        return self.mergeTwoList(l1,l2)

    #leetcode 21
    def mergeTwoList(self,l1,l2):
        pre=dummy=ListNode(0)
        if not l1:
            return l2
        if not l2:
            return l1

        while l1 and l2:
            if l1.val<l2.val:
                pre.next=l1
                l1=l1.next
            else:
                pre.next=l2
                l2=l2.next
            pre=pre.next
        pre.next=l1 or l2

        return dummy.next
```

### Intersection  

**leetcode 160 - Intersection of Two Linked Lists [E]**  
Write a program to find the node at which the intersection of two singly linked lists begins.  

For example, the following two linked lists:  


      A:      a1->a2-
                     |-> c1->c2->c3
      B:  b1->b2->b3-

begin to intersect at c1  

Solution:  
go through the two linked lists to the end and then change head, will meet again  


              a1 -> a2 --
              p1_1  p1_2 |
              p2_7  p2_8 |
                         |-> c1 -> c2 -> c3 -> N
                         |   p1_3  p1_4  p1_5  p1_6 move to b-head
                         |   p2_4  p2_5  p2_6  p2_7 move to a-head
                         |  [p2_9]
                         |  [meets]
                         |  [p1_9]
         b1 -> b2 -> b3 -
         p2_1  p2_2  p2_3
         p1_6  p1_7  p1_8


```python
class Solution():
    def getIntersectionNode(self, headA, headB):
        p1,p2=headA,headB

        while p1!=p2:
            p1=headB if not p1 else p1.next
            p2=headA if not p2 else p2.next

        return p1
```
