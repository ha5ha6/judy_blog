---
layout: single
type: posts
title:  "ALgorithms 4 - greedy"
date:   2019-12-6 15:43:25 +0900
related: true
categories: Programming
tags:
  #- Index
  - Algorithms
  - Greedy
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

## Background

### Definition

A greedy algorithm is any algorithm that follows the problem-solving heuristic of **making the locally optimal choice at each stage with the intent of finding a global optimum**.  

For example, a greedy strategy for **the traveling salesman problem** (which is of a high computational complexity) is the following heuristic:  
"At each step of the journey, visit the nearest unvisited city."  
This heuristic does not intend to find a best solution, but it terminates in a reasonable number of steps; finding an optimal solution to such a complex problem typically requires unreasonably many steps.  

Used to solve **optimization problem**, an **optimization problem** is the problem of finding the **best** (minimum/maximum) solution from all **feasible solutions**.

Methods to solve **optimization problem**:
- Greedy
- Dynamic Programming
- Branch and Bound

Greedy **pros and cons**:  
(+) simplicity: simple, easy to implement  
(+) efficiency: run fast  
(-) hard to design and find approach  
(-) hard to verify: showing a greedy algorithm is correct often requires a nuanced argument    
(-) Greedy never reconsiders its choices (one difference from dp)  
(-) very often dont provide a globally optimum solution


Example find the max tree sum:  

        3*(g)
       /   \
      4*    7(g)
     / \    / \
    6  20* 9 11(g)  

Greedy always chooses the larger leaf to go, ends up sum=3+7+11=21  
However, the global optimal will be 3+4+20=27  

When to use Greedy?  
1. choice property: a global optimum can be arrived at by selecting a local optimum
2. optimal substructure: an optimal solution to the problem contains an optimal solution to subproblems

**Greedy and Dynamic Programming**  
In dynamic programming, we solve subproblems before making the first choice and usually processing in a **bottom-up** fashion  
A greedy algorithm makes its first choice before solving any subproblems, which is usually in **top-down** fashion, reducing each given problem instance to a smaller one.

"Beneath every greedy algorithm, there is almost always a more cumbersome dynamic programming solution"

Six steps to solve a problem which can be potentially solved by making greedy choice:  
1. Divide the problem into subproblems, including one small problem and the remaining subproblem.
2. Determine the optimal substructure of the problems (formulating a recurrence function).
3. Show that if we make the greedy choice, then only one subproblem remains.
4. Validate the rightness of the greedy choice.
5. Write either a recursive or an iterative implementation.

References:  
[LiYin from Medium](https://medium.com/algorithms-and-leetcode/greedy-algorithm-explained-using-leetcode-problems-80d6fee071c4)

### Implementation

Greedy method should be solving problems **in stages**. At each stage, take an input to see if it's feasible, if feasible put it into candidate solutions. Finally we have the optimal solution.

pseudo code of an array example [a1,a2,a3,a4,a5]:

```python
def Greedy(arr,n):
    for i in range(n):
        x=Select(arr[i])
        if Feasible(x):
            solution+=x
```

### Applications

- Activity Selection Problem
- Huffman Coding
- Job Sequencing Problem
- Fractional Knapsack Problem
- Prim's or Kruskal's Minimum Spanning Tree - graph
- Minimum path (Dijkstra) - graph
- Frog Jumping
- Data Compression
- file Merging

## Problems  

### Array

**leetcode 134 - Gas Station [M]**   
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].  
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.  
Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.  

Input:     
gas  = [1,2,3,4,5]  
cost = [3,4,5,1,2]  
Output: 3  

Explanation:  
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4  
Travel to station 4. Your tank = 4 - 1 + 5 = 8  
Travel to station 0. Your tank = 8 - 2 + 1 = 7  
Travel to station 1. Your tank = 7 - 3 + 2 = 6  
Travel to station 2. Your tank = 6 - 4 + 3 = 5  
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.  
Therefore, return 3 as the starting index.  

Solution:  
1. if total > 0, can fill the circle  

```python
class Solution():
    def canCompleteCirsuit(self,gas,cost):
        tank,start,total=0,0,0
        for i in range(len(gas)):
            balance=gas[i]-cost[i]
            tank+=balance
            total+=balance
            if tank<0:
                start=i+1
                tank=0

        return -1 if total<0 else start
```

**leetcode 135 - Candy [H]**  
Giving at least one candy to every kid, higher score one gets more.  
What is the number of minimum candies should be distributed?  

Example 1:  
Input: [1,0,2]  
Output: 5  
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.  

Example 2:  
Input: [1,2,2]  
Output: 4  
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively. The third child gets 1 candy because it satisfies the above two conditions.  

Solution:  
1. initialize with [1]xlen(ratings)  
2. from left to right, if cur>onebefore, cur=onebefore+1, cur start from index:1 to len-1
3. from right to left, if cur>oneafter, cur=max(oneafter+1,cur), cur start from index:len-2 to 0
Say   

    index:  [0,1,2,3,4,5,6,7,8,9,10]  
    input:  [1,8,7,6,2,3,5,6,2,3,1]     
    initial:  [1,1,1,1,1,1,1,1,1,1,1]      
    l2r->:  [1,2,1,1,1,2,3,4,1,2,1] (1<8, 2<3, 3<5, 5<6, 2<3)  
    r2l<-:  [1,4,3,2,1,2,3,4,1,2,1] (6>2, 6>2, 7>6, 8>7)  

Note:  
1. in candy<- case 2<3>1 can be omitted because it's the last one, should start from index:8 (len-2)  
2. in candy<- case 5<6>2, input element <6>=input[idx=7], 4=max(1+1,4), oneafter+1<cur
3. in candy<- case 7<6>2, input element <6>=input[idx=3], 2=max(1+1,1), oneafter+1>cur
4. in candy<- case 8>7>6, input element <7>=input[idx=2], 3=max(2+1,1), oneafter+1>cur
5. in candy<- case 1<8>7, input element <8>=input[idx=1], 4=max(3+1,2), oneafter+1>cur  

```python
class Solution(object):
    def candy(self, ratings):
        candy=[1 for i in range(len(ratings))]

        #left to right
        for i in range(1,len(ratings)):
            if ratings[i]>ratings[i-1]:
                candy[i]=candy[i-1]+1

        #right to left
        for i in range(len(ratings)-2,-1,-1):
            if ratings[i]>ratings[i+1]:
                candy[i]=max(candy[i+1]+1,candy[i])

        return sum(candy)
```

**leetcode 277 - Find the Celebrity [M]**  
Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.  

Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).  

You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.  

Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.  

```python
def knows(a,b):
    return  

class Solution(object):
    def findCelebrity(self,n):
        cand=0
        for i in range(1,n):
            if knows(cand,i):
                cand=i

        for i in range(n):
            if i==cand:
                continue
            if not knows(i,cand) or knows(cand,i):
                return -1

        return cand
```
