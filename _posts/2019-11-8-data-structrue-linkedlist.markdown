---
layout: single
type: posts
title:  "Data Structure 3 - linked list"
date:   2019-11-8 17:26:25 +0900
related: true
categories: Programming
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
3. fast goes first, then slow and fast go together  
Note:  
while fast.next: fast=fast.next -> fast stop at the last node, cuz fast.next is None   
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

**leetcode 83 - Remove Duplicates from Sorted List [E]**  

**leetcode 82 - Remove Duplicates from Sorted List II [M]**  

### Partition

**leetcode 86 - Partition List II [M]**  

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
Output: 1->1->2->3->4->4=5->6  

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

**leetcode 61 - Rotate List [M]**  

### Reverse

**leetcode 25 - Reverse Nodes in k-Group [H]**  

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
1. find mid using fast and slow  
2. merge two sorted lists  
