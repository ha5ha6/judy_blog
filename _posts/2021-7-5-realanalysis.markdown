---
layout: single
type: posts
title:  "Real Analysis"
date:   2021-7-5 16:18:25 +0900
related: true
categories: Mathematics
tags:
  #- Index
  - Mathematics
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Sets Intro

**Def: A set is a collection of objects known as elements**  

- **the set with no element is known as the empty set, ∅={}**  
- **two sets are euqal if they contain exactly the same elements, A=B if x∈A <=> x∈B**    
- **the cardinality of a set is the number of elements it contains, write \|A\|**

**Common Sets of Numbers**

- ℕ = {1,2,3,...}, \|ℕ\|=∞
- ℤ = {...,-2,-1,0,1,2,...}, \|ℤ\|=∞
- ℚ = {p/q \| p,q∈ℤ, q≠0}
- ℝ = all real numbers, the precise definition is tricky, \|ℝ\|>\|ℕ\|
- ℂ = {a+bi \| a,b∈ℝ, i^2=-1}, complex number

    ex. A={orange, blue}, |A|=2
        elements are colors

        B={ℕ,ℝ}, |B|=2
        elements are infinitely sets  

**Describing Sets**  

1. Roster Strategy, {1,2,3} <- list all the elements
2. Verbally, 'All natural numbers less than 4'
3. Set Builder


        {general shape of an element | specific rule it satisfies}
                                    s.t./column  


examples:

    ex. {n∈ℕ | n<4}
        even integers = {2n | n∈ℤ} = {m | m=2n, n∈ℤ}
        odd integers = {2n+1 | n∈ℤ} = {m | m=2n+1, n∈ℤ}
        primes = {p∈ℕ | p is prime} = {p∈ℕ | if p=ab then a or b=1}
        prefect cubes = {n^3 | n∈ℤ} = {m | m=n^3, n∈ℤ}

        solutions to x^2 = {x∈ℝ | x^2=2} = {√2, -√2}   
        if {x∈ℚ | x^2=2} = ∅

        intervals:
        (3,6] = {x∈ℝ | 3<x≤6}
        [a,∞) = {x∈ℝ | x≥a}
        {m∈ℤ | |m|≤3} = {m∈ℤ | -3≤m≤3} = {-3,-2,-1,-,1,2,3}
        {m∈ℝ | |m|≤3} = [-3,3]

**Q: what is A={3a+2b \| a,b∈ℤ}?**


### Cartesian Products  

### The Supremum and Infimum of ℝ  

**Def: a set A⊆ℝ is bounded above, if ∃u∈ℝ s.t. a≤u ∀a∈A, u is called an upper bound**    

**Def: a set A⊆ℝ is bounded below, if ∃l∈ℝ s.t. a≥l ∀a∈A, l is called a lower bound**    

**Def: s∈ℝ is the least upper bound (supremum) of A⊆ℝ, if**  

1. **s is an upper bound** i.e. ∀a∈A, s≥a  
2. **if u is also an upper bound, then u≥s** i.e. if ∀a∈A, u≥a then u≥s


**Def: i∈ℝ is the greatest lower bound (infimum) of A⊆ℝ, if**  

1. **i is a lower bound** i.e. ∀a∈A, i≤a  
2. **if l is also a lower bound, then i≥l** i.e. if ∀a∈A, l≤a then i≥l


**Lemma: assume s∈ℝ is an upper bound of A⊆ℝ, then s=sup(A) iff**  
**for all ε>0, there is a∈A s.t. s-ε<a**  

### Axiom of Completeness  

**Every nonempty set A⊆ℝ w/ an upper/lower bound has a least upper bound/greatest lower bound**  

This is not ture in ℚ:

    ex. A = {x∈ℚ | x^2=2}  
        A is bounded above by 2,3,4
        sup(A) = √2 ∉ ℚ
        so the numbers in ℚ are not complete  

        B = {a_n | n∈ℕ}
        a_0=3, a_1=3.1, a_2=3.14, a_3=3.141, ...
        sup(A) = π ∉ ℚ

### Nested Interval Property  

**Theorem: for each n∈ℕ, sps we have a closed interval In=[an,bn]={x∈ℝ \| an≤x≤bn}**  
**s.t. ...⊆I3⊆I2⊆I1** (i.e. I{n+1}⊆In, n-lower label)  
**then ∩In ≠ ∅** (sub label of intersection is n∈ℕ)

Why not in ℚ?

Why not in open interval?


### Archimedean Property  

**Theorem:**

1. **given any x∈ℝ, ∃n∈ℕ s.t. n>x**  

2. **given any y∈ℝ w/ y>0, ∃n∈ℕ s.t. 1/n<y**

### Density of ℚ in ℝ  

**Theorem: for any a,b∈ℝ w/ a<b, ∃r∈ℚ s.t. a<r<b**  

### Equinumerosity  

**Def: two sets A,B are said to be equinumerous (have the same cardinality)**  
**if there is a bijective funciton f: A->B**  
**write: \|A\|=\|B\|**  

**A is said to be countable if it is finite or \|A\|=\|ℕ\|** (A is equinumerous with ℕ)  

    ex. |ℤ|=|ℕ|


    ex. sps a,b∈ℝ, (a≠b), |(a,b)|=|ℝ|

        step1. to show |(a,b)|=|(0,1)|  

        step2. to show |(-1,1)|=|ℝ|


### Intermediate Value Theorem  

### The Countability of ℚ

### The Uncountability of ℝ

### |ℝ|=|P(ℕ)|

### Sequence  

**Def: a sequence is a function whose domain in ℕ**  

**i.e. a: ℕ -> ℝ**  

**write: a_n = a(n), {a_1,a_2,a_3,...}**

### Convergence and Divergence

**Def: we say a sequence {a_n}^∞_{n=1} converges to L**  
**if for every ε>0 there is N∈ℕ s.t. \|a_n-L\|<ε for n≥N**  
i.e. ∀ε>0, ∃N∈ℕ. s.t. \|a_n-L\|<ε for n≥N  
**write**

    lim a_n = L
    n->∞

**A sequance that does not converge is said to diverge**  

by negating Def of Convergence, we have Def of Divergence  

**Def: we say {a_n}^∞_{n=1} diverges**  
**if for all L∈ℝ, there exists ε>0 s.t. for all N∈ℕ we have n≥N**  
**but \|a_n - L\| ≥ ε**


### ε-N Proof  

stratch work:

- manipulate \|a_n - L\| < ε <- goal
- until n > [some stuff w/ ε's] <- call this N

proof:

- given ε>0  
- set N = [some stuff w/ ε's]  
- observe that if n≥N  
- then ...
- we have \|a_n - L\| < ε

examples  

    ex. lim 1/n^2 = 0
        n->∞


        lim (1-1/n) = 1
        n->∞

### Convergent => Bounded  

**Theorem: Every Convergent Sequence is Bounded**  

**However, A bounded sequence may not converge**   

    ex. a_n = (-1)^n


### Algebraic Properties of Limits  

Recall Def: {a_n}^∞_{n=1}  

    lim a_n = L ≠ ±∞
    n->∞

if ∀ε>0, ∃N∈ℕ s.t. if n≥N, \|a_n - L\|<ε  

Recall Theorem:  
if {a_n}^∞_{n=1} converges, then it is bounded  
i.e. ∃M>0, M∈ℝ, s.t. \|a_n\|<M ∀n∈ℕ  

**Triangle Inequality:**  
**∀x,y∈ℝ, \|x+y\|≤\|x\|+\|y\|**

**Theorem: sps lim a_n = A, lim b_n = B, c∈ℝ except {0}, note lim under-label is {n->∞}**  

1. **lim ca_n = cA**  
2. **lim a_n+b_n = A+B**
3. **lim a_n*b_n = AB**  
4. **lim a_n/b_n = A/B**  

### Monotone + Bounded => Convergent  

**Def: we say {a_n} is**  
**monotonically increasing if a_{n+1}≥a_n ∀n∈ℕ**   
**monotonically decreasing if a_{n+1}≤a_n ∀n∈ℕ**  

**Theorem: a monotone sequence {a_n} converges iff it is bounded**  

    ex.



### Series  

**Def: let {a_n}^∞_{n=1} be a sequence, an infinite series is in the form**  

     ∞
     Σ  a_n  
    n=1

(adding up all elements of the sequence)  

**Def: the sequence of partial sums** (seq of par sum/a companian seq)  

          N
    S_N = Σ  a_n = a_1 + a_2 + ... + a_n       
         n=1

**We say Σ^∞\_{n=1} a_n converges to S if lim\_{n->∞} S_N = S**


### Subsequence  

**Def:**

    Given sequence
         ∞
    {a_n}  ∈ℝ
        n=1
         ∞
    {n_k}  ∈ℕ    usually n_1<n_2<n_3<...
        k=1

    the sequence
           ∞                                   ∞
    {a_n_k}    is called a Subsequence of {a_n}  ∈ℝ
          k=1                                 n=1


    ex. a_n = 1/n, n_k = 2^k  

        a_n_k = 1/(2^k), k≥1

        a_n: 1, 1/2, 1/3, 1/4, 1/5, 1/6, 1/7, 1/8, 1/9, ... , 1/16, ...
                a_n_1     a_n_2               a_n_3           a_n_4    

               ∞          ∞
        {a_n_k}   ⊆  {a_n}
              k=1        n=1


**Proposition: every Subsequence of a convergent seq converges (to the same limit)**  

    proof: sps {a_n}^∞_{n=1} s.t. lim a_n = L w/ n->∞
           and {n_k}^∞_{k=1} s.t. n_1<n_2<n_3<... (strictly increasing)

           to show lim a_n_k = L w/ k->∞

           given ε>0  
           b/c {a_n} converges to L
           we can find a N∈ℕ s.t. if n>N, then |a_n - L|<ε
           since {n_k} is strictly increasing  
           there is K∈ℕ, s.t. if k≥K, n_k≥N  
           -> |a_n_k - L| < ε
           -> lim a_n_k = L w/ k->∞ ■


**Proposition: every bounded seq has a convergent subseq**

    proof: (assume we have a bounded seq, construct some subseq of that bounded seq that has a lim)
          sps {a_n}^∞_{n=1} ∈ℝ s.t. |a_n|<M ∀n∈ℕ
          -> a_n ∈ [-M,M]=[-M,0]∪[0,M] ∀n∈ℕ
          so there are ∞-many a_n in [-M,0] or [0,M]
          pick the second half and call it I1  
          pick an element in {a_n}∩I1 call it a_n_1  
          split I1 into 2 equal parts in mid  
          call the second half of ∞-many form I2  
          pick an element from it and call it a_n_2  

          ex. a_n_1 ∈ I1=[0,M]=[0,M/2]∪[M/2,M]
              a_n_2 ∈ I2=[M/2,M]=[M/2,3M/4]∪[3M/4,M]
              a_n_3 ∈ I3=[3M/4,M]
              ...

          construct ...⊆ Ik ⊆... ⊆ I3 ⊆ I2 ⊆ I1
                         a_n_k    a_n_3 a_n_2 a_n_1

                                      ∞
          by Nested Interval Property ∩ Ik ≠ ∅
                                     k=1

          length(I1)=M
          length(I2)=M/2
          ...
          length(Ik)=M/2^(k-1)
                   ∞
          take L ∈ ∩ Ik
                  k=1

          claim: lim a_n_k = L
                 k->∞

          proof: given ε>0, take K≥0 s.t. 1/2^(K-1) < ε/M
                 -> M/2^(K-1) < ε
                 if k≥K, we have a_n_k ∈ Ik ⊆ IK w/ length(Ik)<length(IK)<ε
                 note both a_n_k and L ∈ Ik in length(Ik)=M/2^(k-1)
                 -> |a_n_k - L| < ε ■


### Cauchy Sequence  

**Def: a seq is called Cauchy seq if ∀ε>0, ∃N∈ℕ s.t. if m,n≥N then \|a_m - a_n\| < ε**  
(i.e. the very later terms of the seq are very close to each other)  

    ex. a_n = n/(n+1) is cauchy  


### A Convergent Seq <=> A Cauchy Seq

**Theorem: sps {a_n}^∞_{n=1} ∈ℝ, a_n converges iff a_n is Cauchy**  


### Cauchy Criterion for Series  

Recall: we say an infinite series  

     ∞
     Σ  a_n = A
    n=1

converges (to A) if lim S_m = A w/ m->∞ where  

                            m
    S_m = a_1+a_2+...+a_m = Σ a_n    
                           n=1

**Theorem: if Σ a_n=A, Σ b_n=B, and c∈ℝ, then**
1. **Σ c*a_n = cA**
2. **Σ a_n+b_n = A+B**

note Σ^∞_{n=1}  

**Theorem: the series Σ^∞\_{n=1} a\_n converges iff**  
**∀ε>0, ∃N∈ℕ, s.t. if m,n≥N, \|a_{m+1}+...+a_{m+n}\|<ε**  

i.e. we can not only make the terms of the series as small as we want, we can also make sums of the series as small as we want as long as we go far enough out into the tail  

**Corollary:**

        ∞
    if  Σ a_n converges
       n=1

    then lim a_n = 0
         n->∞


### Comparison Test  

**Theorem: sps 0≤a_n≤b_n, then**  
1. **if Σ b_n converges then Σ a_n converges**  
2. **if Σ b_n diverges then Σ b_n diverges**


### Absolute Convergence Test  

**Theorem: Σ\|a_n\| converges, then Σ a_n converges**  

### Alternating Series Test  

**Theorem: sps a_1≥a_2≥a_3≥...a_n≥0, lim_{n->∞} a_n = 0, then**

         (n+1)
    Σ(-1)^ *a_n converges

### Cauchy Condensation Test

**Theorem: sps {a_n}^∞_{n=1} is decreasing, and a_n≥0, ∀n∈ℕ, then**

     ∞
     Σ a_n converges
    n=1

**iff**  

     ∞   n
     Σ 2^ * a_      converges
    n=0       {2^n}


### Rearrangement of Absolute Convergent Series  

**Def: the series Σ b_n is said to be a rearrangement of Σ a_n**  
**if there is a bijection f: ℕ->ℕ, s.t. b_{f(n)}=a_n**  

**Theorem: if Σ a_n absolutely converges**  
**then any rearrangement Σ b_n converges to the same value**  

(Σ a_n absolutely converges means Σ\|a_n\| converges)  

### Open Subset of ℝ

**Def: given any a∈ℝ and any ε>0, the ε-neighbourhood of a is**

    V_ε(a) = {x∈ℝ | |x-a|<ε} = (a-ε, a+ε)

**Def: a set A⊆ℝ is said to be open if ∀a∈A, ∃ε>0 s.t. V_ε(a)⊆A**

    ex. ℝ is open  

        ∅ is open  

        all open intervals are open  

        (a,b) is open, w/ a,b∈ℝ




**Theorem: the arbitary union of open sets is an open set**  

**Theorem: the finite intersection of open sets is an open set**

**Def: a set A⊆ℝ is said to be not open if ∃a∈A s.t. ∀ε>0 we have V_ε(a)⊄A**

    ex. singleton sets are not open  

        {0} is not open


### Limit Point  

**Def: we say x is a limit point of A⊆ℝ if ∀ε>0**  
**V_ε(a)∩A contains at least one point other than x**  

i.e. [V_ε(a)\\{a}] ∩ A ≠ ∅, lp=limit point

    ex. [1,3]
        1, 2, 3 are lps of [1,3]  
                                              ∞
        0 is a lp of {1,1/2,1/3,1/4,...}={1/n} = A    note 0∉A
                                             n=1


**Theorem: x is a lp of A iff there is a seq {a_n}^∞_{n=1} ⊆ A s.t.**  

    lim a_n = x, and a_n ≠ x ∀n∈ℕ
    n->∞


### Isolated Point

**Def: an isolated point a∈A is a non-limit point of A**  
by negating Def of LimPoint  
**We say a∈A is an isolated point if ∃ε>0, s.t. V_ε(a) ∩ A = {a}**

    ex. 1/n is a iso-p of {1,1/2,1/3,1/4,...}={1/n}^∞_{n=1} = A

        V_ε(1/n) ∩ A = {1/n}

### Closed Set  

**Def: A⊆ℝ is said to be closed if it contains all of its limit points**

    ex. all closed intervals are closed

        [a,b] is closed  

**Theorem: sps A⊆ℝ**  
1. **A is open <=> A^c is closed**
2. **A is closed <=> A^c is open**

### Closure of a Set  

**Def: sps A⊆ℝ and L={x∈ℝ \| x is a limit point of A}**  
**then the closure of A is A-bar**

    _
    A = A ∪ L

**Theorem: A-bar is the smallest closed set containing A**  

### Compact Set  

**Def: we say K⊆ℝ is compact, if for all sequence {a\_n}^∞\_{n=1} ⊆ K**  
**there is a subsequence {a\_n\_k}^∞\_{k=1}, s.t. a\_n\_k converges and it's limit ∈ K**  

    lim a_n_k = L ∈ K
    k->∞

### Compact <=> Closed and Bounded

**Theorem: K⊆ℝ is compact iff it is closed and bounded**

### Nested Compact Set  

Recall Nested Interval Theorem: if I_n=[a_n,b_n], a_n,b_n∈ℝ, w/ ...⊆I_3⊆I_2⊆I_1, then  

     ∞
     ∩  I_n ≠ ∅
    n=1

**Theorem: sps ...⊆K_3⊆K_2⊆K_1 are nonemtpy compact sets then**  

     ∞
     ∩  K_n ≠ ∅
    n=1

### Sup and Inf of Compact Set

Recall Def: we say K⊆ℝ is compact if every sequence in K has a convergent subsequence to an element of K

Recall: K⊆ℝ is compact iff it's closed and bounded  

**Proposition: sps ∅≠K⊆ℝ is compact, then sup(K) and inf(K) ∈ K**

### Open Cover

**Def: an open cover of A⊆ℝ is a collection of open sets {U_i \| i∈I} s.t.**

    A ⊆ ∪ U_i
       i∈I

i.e. the open sets {U_i \| i∈I} are open cover of A  

                                               ∞
    ex. an open cover of (0,4) is {(1/k,4-1/k)}
                                              k=1
        ={(1,3),(1/2,4-1/2),(1/3,4-1/3),...}

        another open cover of (0,4) can be  
        {(-∞,2),(1,3),(1,2),(0.5,3.5),(3,7)}

        an open cover of [0,4] is
        {(1/k,4-1/k)}^∞_{k=1} ∪ {(-0.2,0.2)} ∪ {(3.9,4.1)}

**Def: if {U_i \| i∈I} has a finite subset {U_i \| i∈F} meaning F⊆I**  
**which is still a cover of A, {U_i \| i∈F} is called a finite subcover of A**


### The Heine-Borel Theorem  

**Theorem: a set K⊆ℝ is compact iff every open cover of K has a finite subcover**

### Notation  

ℕ,ℤ,ℚ,ℝ,ℂ  

∈ℕ,∈ℤ,∈ℚ,∈ℝ,∈ℂ  

ε>0

∈ ∉ ∀ ∃ ≤ ≥ ≠ ∅ Σ Π π ∞ ⊆ ⊄ ∤ ± ≅ ≡ √ ∩ ∪ ∘ ≜

i.e. in other words  
e.g. for example  
ex. example  
sps suppose  
■ end of proof  
!contradiction!  
-> <- implies instead of => <=    
{} under label  
gcd() greatest common divisor ex. gcd(5,10)=5 gcd(24,36)=12  
lcm() least common multiple ex. lcm(36,12)=36 lcm(18,12)=36  
w/ with   
w/o without  
b/c because  
equv equivalent to  
\\ except  
A^c complement of A in U, A^c=U\\A


### Memo  

**Composition of Functions**  

applying one function to another  

    g ∘ f ≜ g(f(x))  

    ex. f(x)=2x+3  g(x)=x^2
        g∘f(x) = (2x+3)^2
        f∘g(x) = 2x^2+3


**Injective**: is a function f that maps distinct elements to distinct elements that is, f(x1) = f(x2) implies x1 = x2  

In other words, every element of the function's codomain is the image of at most one element of its domain  

**Surjective**: is a function f that maps an element x to every element y that is, for every y, there is an x such that f(x) = y

In other words, every element of the function's codomain is the image of at least one element of its domain

It is not required that x be unique; the function f may map one or more elements of X to the same element of Y

**Bijective**: is a function between the elements of two sets, where each element of one set is paired with exactly one element of the other set, and each element of the other set is paired with exactly one element of the first set

There are no unpaired elements

In mathematical terms, a bijective function f: X → Y is a one-to-one (injective) and onto (surjective) mapping of a set X to a set Y

The term one-to-one function must not be confused with one-to-one correspondence that refers to bijective functions, which are functions such that each element in the codomain is an image of exactly one element in the domain

The term one-to-one correspondence must not be confused with one-to-one function (an injective function; see figures)


### Reference

Micheal Penn's Youtube Channel
