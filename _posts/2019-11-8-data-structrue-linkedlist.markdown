---
layout: single
type: posts
title:  "Data Structure 4 - linked list"
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

### Definition

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

### Remove  

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
        p              p->p.next if p.val==p.next.val
        1->2->3->3
        p              p=p.next if p.val!=p.next.val
        1->2->3->3
           p           p=p.next if p.val!=p.next.val
        1->2->3->3
              p        p->p.next if p.val==p.next.val
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

### Swap n Rotate

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
