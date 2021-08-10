---
layout: single
type: posts
title:  "Number Theory"
date:   2021-7-3 15:02:25 +0900
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

### The Division Alg  

**∀a,b∈Z with b>0, there exists unique q,r∈Z, s.t. a=bq+r with 0≤r<b**

q - quotient  
r - remainder  

    ex. a=21, b=2 ; a=35, b=6
        a  = bxq  + r
        21 = 2x10 + 1
        35 = 6x5  + 1

    consider S={a-bx|x∈Z, a-bx≥0}

    ex. a=12, b=5  
        x    a-bx
        -------------
        .     .    ∈S
        -2    22   ∈S
        -1    17   ∈S
        0     12   ∈S
        1     7    ∈S
        2     2    ∈S
        3     -3   not∈S

        x : quotients
        a-bx : remainders

        S={2,7,12,17,22,...}
        2 is the remainder since 0≤r<b (2<5)
        so the minimum element of S is the remainder

    proof: 1. claim S≠∅, so we can have the minimum element  
              (to prove the smallest exists, first to prove S≠∅)
           case 1: a≥0, let x=0
                   a-bx=a∈S
                   so S≠∅
           case 2: a<0, let x=a
                   a-ba=a(1-b)
                   1-b≤0 since b>0, so b≥1 since b∈Z
                   a<0
                   so a-ba=a(1-b)≥0 and ∈S
                   so S≠∅

            2. prove 0≤r<b
            let r=min(S) since S≠∅
            let q be the corresponding x-value  
            r=a-bq => a=bq+r show 0≤r<b
            towards a contradiction, sps r≥b  
            r=a-bq≥b
            substract b on both side  
            r-b=a-bq-b=a-b(q+1)≥b-b=0
            a-b(q+1)∈S
            but r-b<r=min(S) !contradiction!
            so r<b  

            3. prove the uniqueness of q,r  
            sps that q,q',r,r' are s.t. a=bq+r=bq'+r'
            bq+r=bq'+r'
            assume r'≥r  
            bq-bq'=r'-r
            b(q-q')=r'-r  
            LHS: multiple of b  
            RHS: 0≤r'-r<b <- -b<-r≤0 and 0≤r'<b, so -b<r'-r<b
            LHS=RHS=0
            so r=r', q=q' ■

### The Euclidean Alg  

**Suppose a,b∈N, if we repeatedly perform the division alg**

       a   =      bxq1     + r1
       b   =     r1xq2     + r2
       r1  =     r2xq3     + r3
      ...
    r{n-3} = r{n-2}xq{n-1} + r{n-1}
    r{n-2} = r{n-1}xq{n}   + 0

**then r{n-1}=gcd(a,b)**  

    ex. Find gcd(5295, 4321)=1 <- they are primes  

         a   =  qxb    +  r
        5295 =  1x4321 + 974
        4321 =  4x974  + 425  
        974  =  2x425  + 124
        425  =  3x124  + 53
        124  =  2x53   + 18
        53   =  2x18   + 17
        18   =  1x17   + 1   <- remainder
        17   = 17x1    + 0

    proof: (of Euclidean Alg)
           1. to prove this process ends <- the sequence ends i.e. r{n-1} exists
           Notice that the sequence {r1,r2,r3,...}⊆N and is decreasing
           thus by the Well Ordering Principle  
           it trancates, say at r{n-1}
           which is the last non-zero remainder  
           2. show r{n-1}|a and r{n-1}|b so r{n-1} is a common divisor  
           r{n-2}=r{n-1}xq{n}+0
           -> r{n-1}|r{n-2}
           -> r{n-1}|r{n-3}
           -> r{n-1}|b, r{n-1}|a  
           3. show r{n-1} is a greatest common divisor  
           suppose d|a and d|b (suppose we have another common divisor)
           -> d|a-bq1 -> d|r1
           -> d|b-r1q1 -> d|r2
           ...
           -> d|r{n-1} then
           r{n-1}=gcd(a,b) ■


### The Extended Euclidean Alg  

**Find x,y∈Z s.t. 123x+45y=gcd(123,45)**  

     a  = b  x q + r
    123 = 45 x 2 + 33                33 = 123 - 45x2
                                      |---------|
                                                v           
    45  = 33 x 1 + 12                12 = 45  - 33x1 = 45-123+45x2=45x3-123
                                     ||---------|
                                     |          v
    33  = 12 x 2 + 9                 |9 = 33  - 12x2 = 123-45x2-(45x3-123)x2=45x(-8)+123x3
                                     ||---------|
                                     |----|     |
                                          v     v
    12  = 9  x 1 + 3 <- gcd(123,45)   3 = 12  - 9x1

    9   = 3  x 3 + 0

    3=12-9x1
    3=45x3-123-45x(-8)-123x3
    3=45x11+123x(-4)

    thun x=-4, y=11


**Find all x,y∈Z s.t. 878x+252y=gcd(878,252)**  

    a   =  b  x q + r
    878 = 252 x 3 + 122
    252 = 122 x 2 + 8
    122 = 8   x 5 + 2 <- gcd(878,252)
    8   = 2   x 4 + 0

    31x878 - 108x252 = 2
    thus x=31, y=-108 but it's only one solution  

    by lcm(a,b)=ab/gcd(a,b)

               878x252         252   878
    lcm(a,b) = ------- = 878 x --- = --- x 252  
                  2             2     2
                             |           |
                             v           v
                         878 x 126   439 x 252  times k∈Z and let one subtract another = 0

      31   x 878 - 108  x 252 = 2
    + 126k x 878 - 439k x 252 = 0  let k∈Z  
    --------------------------------------
      (31+126k)x878 -(108+439k)x252 = 2  

### Linear Diophantine Equation (LDE)  

**Given a,b,c∈N, when does there exist x,y∈Z s.t. ax+by=c?**

    Recall if c=gcd(a,b) then there exists x,y∈Z s.t. ax+by=gcd(a,b)

    Solution 1: find x,y using Extended Euclidean Alg  

    Solution 2: sps x,y∈Z s.t. ax+by=c  (c≠gcd(a,b))
                let d=gcd(a,b)
                -> d|a, d|b  
                -> d|ax+by  
                -> d|c  

    Fact: Given a,b,c∈N, the equation ax+by=c has a solution for x,y∈Z
          iff gcd(a,b)|c i.e. c is a multiple of gcd(a,b)  

    ex. 3x+6y=2 <- no solution  
        2 is not a multiple of gcd(3,6)=3, i.e. 3|2 not true  

        7x+21y=5 <- no solution  
        gcd(7,21)=7|5 not true  

    ex. 10x+12y=4 <- has solution
        gcd(10,12)=2|4 true  

        to guess a solution
        10(-1)+12(1)=2  
        thus x=-1, and y=1  

        10x(-1)+12x(1)=2 times 2 both sides
        10x(-2)+12x(2)=4 <- important

        to get infinitely many solutions  
        lcm(10,12)=60  
        60-60=10x6-12x5=0 times k∈Z both sides
        10x(6k)+12x(-5k)=0 <- important

          10x(-2)+12x(2)  =4
        + 10x(6k)+12x(-5k)=0
        ---------------------
        10x(6k-2)+12x(-5k+2)=4 k∈Z


### Primitive Pythagorean Triples (PPT)  

**Def: x,y,z∈N^3 is a Pythagorean triple if x^2+y^2=z^2**  

**Def: a Pythagorean triple is called Primitive Pythagorean Triple if gcd(x,y,z)=1**  

**Find all Primitive Pythagorean Triples**  

    sps x,y,z is a PPT  

    Q: is it possible that x,y are both even? No!
    let x=2a, y=2b  
    x^2+y^2=4a^2+4b^2=4(a^2+b^2)=z^2  
    -> 4|z^2  
    -> 2|z
    -> z is even  
    x,y,z all even -> gcd(x,y,z)=2≠1 !contradiction!
    so not possible for x,y are even

    Q: is it possible that x,y are both odd? No!
    let x=2a+1, y=2b+1  
    x^2+y^2=4a^2+4a+1+4b^2+4b+1=4(a^2+b^2+a+b)+2=z^2
    -> z^2 is even but 4|z^2 not true (z^2 is not a multiple of 4)
    it's impossible for a square to be a multiple of 2 but not a multiple of 4  
    thus z^2 is not a square of a natural number  

    so x,y is one odd, one even

    take x=odd, y=even, Recall x^2+y^2=z^2  
    -> z=odd  

    let y^2=z^2-x^2=(z-x)(z+x)=4mn  m,n∈Z
                      |    |
                     even  even
                      |    |
                      2m   2n

    let y=2k  k∈Z  
    -> 4k^2=4mn
    -> k^2=mn <- a perfect square  

    claim: gcd(m,n)=1  
    proof: m=(z-x)/2, n=(z+x)/2  
           sps d|m, d|n
           -> d|m+n
           -> d|z  
           similarly d|x  
           -> d|gcd(x,z) since x,y,z is PPT
           -> d|1  
           -> d=1  

    so k^2=mn w/ gcd(m,n)=1
    it follows m=p^2, n=q^2, w/ gcd(p,q)=1
    -> p^2=(z-x)/2, q^2=(z+x)/2
    -> x=q^2-p^2
       y=2pq
       z=p^2+q^2  

**Theorem: if (x,y,z) is a PPT then there exists coprime p,q∈N, one even one odd**  
**s.t. x=q^2-p^2, y=2pq, z=p^2+q^2**  

    ex. p  q  x    y    z
        1  2  3    4    5
        2  3  5    12   13
        3  8  55   48   73  
        24 37 793 1776 1945

### Divisibility within the Integers  

**Def: Given a,b∈Z w/ a≠0, we say a divides b and a\|b if b=ak for some k∈Z**

    ex. 2|16 b/c 16=2x8  
        3|90 b/c 90=3x30  
        1|n  b/c n=1xn  
        2∤31  


**Proposition:**  
**1. if a\|b and b\|c then a\|c**  
**2. if a\|b then ca\|cb**  
**3. if a\|b and a\|c then for all x,y∈Z a\|bx+cy**  

**Claim: if a\|1 then a=±1**  

    proof: sps a|1
           -> 1=ak k∈Z
           -> 1=|a||k|
           -> 1≤|a|=|1/k|≤1
           -> |a|=1
           -> a=±1 ■

           sometime we prove a=±1 to show |a|=1  

### Congruence Modulo N

**Def: Given n∈N, and a,b∈Z, we say a is congruent to b modulo n, and write a≡b(mod n)**  
**if n\|a-b**  

(equv Def: a and b have the same remainder when divided by n, i.e. rem(a/n)=rem(b/n))  

    ex.  8 ≡ 3(mod 5)  5|8-3   3 mod 5 = 3, 8 mod 5 = 3
        20 ≡ 4(mod 8)  8|20-4  4 mod 8 = 4, 20 mod 8 = 4
        13 ≡ -1(mod 7) 7|13-(-1)  -1 mod 7 = 6, 13 mod 7 = 6

### Congruence and Equivalence Class

**Equivalence Relation means a binary relation that is reflexive, symmetric and transitive**  

**Proposition: ≡b(mod n) is an equivalence relation**  
**1. for all a∈Z, a≡a(mod n)** (reflexive)  
**2. for all a,b∈Z, if a≡b(mod n) then b≡a(mod n)** (symmetric)  
**3. for all a,b,c∈Z, if a≡b(mod n), b≡c(mod n) then a≡c(mod n)** (transitive)  

**Equivalence Class means: given a set S and an equivalence relation ~ on S, the equivalence class of an element a in S, denoted by [a]={x∈S\|x~a} is the set of elements which are equivalent to (has equivalence relation to) a**  

    ex. define a relation R = {(1,1), (1,3), (1,5), (3,1), (3,3), (3,5), (5,1), (5,3), (5,5), (2,2), (2,6), (6,2), (6,6), (4,4)}  
        and a set S = {1,2,3,4,5,6}
        [1] = {x∈S | (x,1)∈R} <- anything related to 1  
            = {1,3,5}
        [2] = {x∈S | (x,2)∈R}
            = {2,6}  
        [3] = {x∈S | (x,3)∈R}
            = {1,3,5} = [1]
        [4] = {4}
        [5] = {1,3,5} = [1] = [3]
        [6] = {2,6} = [2]  

        a way of organizing elements
        e.g. all elements are related to themselves, 1 to 3,5, 3 to 1,5, 5 to 1,3, etc  

        -- 1 <---> 3 --   -- 2 <--> 6 --   4 --
        |  ^^     ^^  |   |  ^      ^  |   ^  |
        ---| \   / |---   ---|      |---   |---
              v v
               5 --
               ^  |
               |---



**Def: for x∈Z define the equivalence class of x w.r.t ≡(mod n) by [x]={a∈Z\|a≡x(mod n)}**  

    ex. x=0,1,2 n=3
        [0] = {a∈Z | a≡0(mod 3)} = {..., -6, -3, 0, 3, 6, ...} <- 3|a-0  
        [1] = {a∈Z | a≡1(mod 3)} = {..., -5, -2, 1, 4, 7, ...} <- 3|a-1
        [2] = {a∈Z | a≡2(mod 3)} = {..., -4, -1, 2, 5, 8, ...} <- 3|a-2

        [0] - equivalence class of 0  
        this 3 sets partition the integers  

**Fact: there are exactly n equivalence classes modulo n, [0],[1],[2],...,[n-1]**  

**Def: fix n, the set of least residues (modulo n) is given by {0,1,2,...,n-1}**  

    ex. the least residue modulo 4 is {0,1,2,3}  

**Claim: for all a∈Z, a is congruent to exactly one of the least residues modulo n**

(if you are talking about arithmetic modulo n or the numbers modulo n, you only really need to talk about the number 0 to n-1)  

    proof: use division alg w/ a and n  
           a=nq+r w/ 0≤r<1 <-> 0≤r≤1
           -> a-r=nq
           -> n|a-r
           -> a≡r mod n
           -> a is congruent to r, which is a number between 0 to n-1  
           i.e. a is congruent to one of the least residues ■


### Property of ≡(mod n)

**Proposition 1:**
**if a≡b(mod n) and c≡d(mod n)**  
- **a+c=(b+d)(mod n)**
- **ac=(bd)(mod n)**

**Proposition 2:**
**if a≡b(mod m) and n\|m**
- **then a≡b(mod n)**

**Proposition 3:**
**for a,b,c∈Z, we have ca≡cb(mod n) iff a≡b(mod n/gcd(c,n))**  

    ex. 3x≡12(mod 15)
        3x≡3*4(mod 3*5)
        x≡4(mod 5)
        x-4=5k for k∈Z
        x≡4,9,14(mod 5)=4,9,14(mod 15)

    ex. 6x≡18(mod 20)
        6x≡6*3(mod 20/gcd(6,20))
        x≡3(mod 10)
        x-3=10k for k∈Z
        x≡3,13(mod 10)≡3,13(mod 20)

Find all n∈N s.t. 24≡10(mod n)

    n|24-10 -> n|14 -> n∈{1,2,7,14}

    ex. 24≡0(mod 2)
        10≡0(mod 2)
        24≡3(mod 7)
        10≡3(mod 7)
        ...

Find all n∈N s.t. 32≡20(mod n)

    n|32-20 -> n|12 -> n∈{1,2,3,4,6}

           +6       +6       +6        +6
    ex. 32≡2(mod 6)≡8(mod 6)≡14(mod 6)≡20(mod 6)
        20≡2(mod 6)...
        32≡0(mod 4)...
        20≡0(mod 4)...
        32≡2(mod 3)...
        20≡2(mod 3)...

Find the least residue 28^13 (mod 10)

    note that 28≡-2 (mod 10)
    13=8+4+1 (base 2)

    28^13≡(-2)^13≡(-2)^8*(-2)^4*(-2)^1 (mod 10)
                    6   *  6   *  8
                           6   *  8

    28^13≡48 (mod 10)≡8 (mod 10)

    b/c  
    (-2)^1≡8 (mod 10)
    (-2)^4≡16 (mod 10)≡6 (mod 10)
    (-2)^8=(-2)^4^2≡36 (mod 10)≡6 (mod 10)

Find the least residue 12! (mod 13)

    12!=1 x 2 x 3 x 4 x 5 x 6 x 7 x 8 x 9 x 10 x 11
                              x-6 x-5 x-4 x -3 x -2
       = 2^2 x 3^2 x 4^2 x 5^2 x 6^2
         4     9     16     25    36
            36   
            -3       3      -1    -3

    12!≡-27 (mod 13)≡12 (mod 13)

    b/c
    7(mod 13)≡(-6)(mod 13)
    8(mod 13)≡(-5)(mod 13)
    9(mod 13)≡(-4)(mod 13)
    10(mod 13)≡(-3)(mod 13)
    11(mod 13)≡(-2)(mod 13)

    way 2: 12!≡(2x6)^2 * (3x4)^2 * 5^2 (mod 13)
                 -1        -1      25
              ≡25 (mod 13)
              ≡12 (mod 13)


### Linear Congruence  

**Proposition: the linear congruence ax≡b (mod n) has a solution iff gcd(a,n)\|b**

    proof: (->) sps that xo is a solution
                i.e. axo≡b (mod n)   
                -> n|axo-b -> axo-b=nk for k∈Z
                -> b=ax0-nk=axo+(-k)n <- this is a multiple of gcd(a,n) since ax+by=gcd(a,b) has a solution from Diophatine Equation  
                -> b=l*gcd(a,n) for l∈Z
                -> gcd(a,n)|b

           (<-) sps that gcd(a,n)|b
                -> b=gcd(a,n)*m for m∈Z
                write gcd(a,n)=ay+nz for y,z∈Z
                -> b=(ay+nz)m=a(ym)+n(zm)
                -> b-a(ym)=n(zm)
                -> a(ym)≡b (mod n)
                -> ym is a solution to ax≡b (mod n) ■  


    ex. 4x≡3 (mod 18)
        gcd(4,18)=2∤3 -> no solution  

        4x≡6 (mod 18)
        gcd(4,18)=2|6 -> has solution  
        4x-6=18k k∈Z
        k=0 4x=6 no integer solution  
        k=1 4x=24 x=6  
        k=2 4x=42 no integer solution  
        k=3 4x=60 x=15  

        -> x≡6,15 (mod 18)


**Proposition: suppose gcd(a,n)\|b, then ax≡b (mod n) has gcd(a,n) distinct solutions separated by n/gcd(a,n)**

    proof: (existence)
           set d=gcd(a,n)
           sps xo is a solution to the linear congruence  
           consider xo+(n/d)k for k∈Z
           notice a[xo+(n/d)k] = axo+(a/d)(nk) ≡ axo (mod n)≡b (mod n) since a/d is natural number  
           -> xo is a solution to axo (mod n)
           -> xo+(n/d)k are solutions to ax≡b (mod n) and they are separated by n/d  

           (now prove it has gcd(a,n) distinct solutions)
           we know xo+(n/d)k is a solution
           Q: how many are incongurent?  

           sps xo+(n/d)k1 ≡ xo+(n/d)k2 (mod n)
           (xo+(n/d)k1 - xo+(n/d)k2) = (n/d)*(k1-k2) ≡ 0 (mod n) since n/d | n  
           -> d|k1-k2
           -> k1 ≡ k2 (mod d) ≡ k2 (mod gcd(a,n))
           -> these are gcd(a,n) incongruent solutions ■

Solve linear congurence  

    ex. 15x ≡20 (mod 25)
        1. gcd(15,25)=5|20 has solution  
        2. there are gcd(15,25)=5 solutions  
        3. they are separated by 25/5=5, one found all found  

        3*5x ≡4*5 (mod 5*5)
        -> 3x≡4 (mod 5)
        -> x=3 since 3*3≡4 (mod 5) <- (x+5)
        -> x≡3,8,13,18,23 (mod 5)


### Inverse Modulo N

**When can we find a,b∈Z ab≡1 (mod n)**  

    ex. n=9, 0,1,2,3,4,5,6,7,8 <- these are the residue modulo 9

        1*1 ≡ 1 mod 9 -> 1^(-1)≡1 mod 9  
        2*5 ≡ 1 mod 9 -> 2^(-1)≡5 mod 9 or 5^(-1)≡2 mod 9
        3*x ≢ 1 mod 9 for all x  
        4*7 ≡ 1 mod 9
        6*x ≢ 1 mod 9 for all x  
        8*8 ≡ 1 mod 9

**Proposition: a∈Z is invertible modulo n iff gcd(a,n)=1**  

    proof: (->) sps a is invertible mod n  
                there is b∈Z s.t. ab≡1 (mod n)
                -> n|ab-1 -> ab-1=nk for k∈Z
                -> ab-nk=1 = l*gcd(a,n)
                -> gcd(a,n)|1
                -> gcd(a,n)=1

           (<-) sps gcd(a,n)=1
                -> there are x,y∈Z s.t. ax+ny=1
                -> ax=1-ny
                -> ax≡1 (mod n) ■

Find all inverse pairs (mod 20)  

    to find prime relative to 20 <- gcd(a,n)=1
    {1,3,7,9,11,13,17,19}

    1*1 ≡1 (mod 20)
    3*7 ≡1 (mod 20)
    9*9
    11*11
    13*17
    19*19

Find 34^(-1)(mod 43)

    since gcd(34,143)=1
    ∃x,y∈Z s.t. 34x+143y=1  
    use Euclidean Alg  
    143 = 4*34 +7     7= 143 - 4*34
    34  = 4*7  +6     6= 34 - 4*7
    7   = 1*6  +1     1= 7 - 1*6  

    -> 1 = 5*143 - 21*34
    -> (-21)*34 = 1 - 5*143 ≡ 1 (mod 143)  
    -> 34^(-1) ≡ -21 (mod 143)
    -> 34^(-1) ≡ 122 (mod 143)



### Strategies for solving ax≡b (mod n)

- **a is invertible modulo n iff gcd(a,n)=1**  (gcd(a,n)=1 means ax+ny=1, ax≡1 mod n)
- **ca≡cb mod n iff a≡b mod(n/gcd(c,n))**
- **ax≡b mod n has a solution iff gcd(a,n)\|b**
- **if ax≡b mod n has a solution, then there are gcd(a,n) solutions separated by n/gcd(a,n)**  

Solve 12x ≡ 16 (mod 32)

    gcd(12,32)=4|16, so it has 4 solutions separated by 8

    4*3x ≡ 4*4 (mod 4*8)
    -> 3x ≡ 4 mod 8

    since 3*3 ≡1 mod 8
    3^(-1) ≡ 3 mod 8
    3x ≡ 4 mod 8 left side *3^(-1) right side * 3
    x ≡ 12 mod 8  
    x ≡ 4 mod 8
    x ≡ 4,12,20,28 mod 32


Solve 140x ≡ 56 (mod 252)

    gcd(140,252)=28|56, so it has 28 solutions separatedby 252/28=9

    28*5x ≡ 28*2 (mod 28*9)
    -> 5x ≡ 2 (mod 9)

    note 5*2 ≡ 10 (mod 9) ≡ 1 mod 9  
    so 5^(-1) ≡ 2 (mod 9)
    5x ≡ 2 (mod 9) left side *5^(-1) right side *2  
    x ≡ 4 (mod 9)
    x ≡ 4,13,22,31,40,49,... (mod 252)  


### Chinese Remainder Theorem (CRT)

**suppose n1,...,nk∈N w/ gcd(ni,nj)=1 (pair primes), and b1,...,bk∈Z, then the system (of linear congruences):**

**x≡b1 (mod n1)**  
**...**  
**x≡bk (mod nk)**  

**has a unique solution modulo n1\*n2*...\*nk**

    proof: (existence)
           let N=n1\*n2*...\*nk and Ni=N/ni
           claim gcd(Ni,ni)=1
           sps d|ni and d|Ni
           since all of the nj are relatively prime
           we have d|nj for j≠i
           -> d|gcd(ni,nj)=1
           -> gcd(Ni,ni)=1

           let xi be s.t. Nixi ≡ 1 mod ni <- b/c gcd(Ni,ni)=1
                          Nixi ≡ 0 mod nj for i≠j <- b/c nj|Ni

           consider X = x1N1b1 + x2N2b2 + ...    + xkNkbk
                      ≡   0    +    0   + xiNibi +   0     mod ni
                                            1*bi
                    X ≡ bi mod ni for 1≤i≤k
           the existence proved  

           (uniqueness)
           sps that x,y are solutions  
           x ≡ bi mod ni
           y ≡ bi mod ni  for 1≤i≤k
           x-y ≡ 0 mod ni -> ni|x-y  
           since gcd(ni, nj)=1  n1*...*nk|x-y
           -> x ≡ y mod (n1*...*nk) ■

Solve   
x ≡ 1 mod 3  
x ≡ 2 mod 4  
x ≡ 4 mod 5

    set N=3*4*5=60  
        N1=4*5=20    N1x1≡ 1 mod 3   <- Nixi=1 mod ni
        N2=3*5=15    N2x2≡ 1 mod 4
        N3=3*4=12    N3x3≡ 1 mod 5

        20x1 ≡ 1 mod 3            ,15x2 ≡ 1 mod 4   ,12x3 ≡ 1 mod 5
        20 ≡ 2 mod 3               15 ≡ 3 mod 4      12 ≡ 2 mod 5     
        2x1 ≡ 1 mod 3              3x2 ≡ 1 mod 4     2x3 ≡ 1 mod 5
        2*2 ≡ 4 mod 3 ≡ 1 mod 3    3*3 ≡ 1 mod 4     2*3 ≡ 1 mod 5
        2^(-1)*2x1 ≡ 2 mod 3       x2 ≡ 3 mod 4      x3 ≡ 3 mod 5
        x1 ≡ 2 mod 3

        X = x1N1b1 + x2N2b2 + x3N3b3
          = 2*20*1 + 3*15*2 + 3*12*4
          = 214  

        X ≡ 214 mod 60 ≡ 34 mod 60  


Solve  
4x ≡ 5 mod 9  
2x ≡ 6 mod 20  

    gcd(4,9)=1 -> 4x ≡ 5 mod 9 has a unique solution  
    28 ≡ 1 mod 9 -> 4*7 ≡ 1 mod 9 -> 4^(-1) ≡ 7 mod 9
    4x ≡ 5 mod 9 -> x ≡ 35 mod 9 ≡ 8 mod 9  

    2x ≡ 6 mod 20 -> 2x ≡ 2*3 mod 2*10 -> x ≡ 3 mod 10  

    the original problem turns to
    solve x ≡ 8 mod 9  
          x ≡ 3 mod 10  

    N=9*10=90     Nixi ≡ 1 mod ni
    N1=10         10x1 ≡ 1 mod 9   -> x1 ≡ 1 mod 9
    N2=9           9x2 ≡ 1 mod 10  -> x2 ≡ 9 mod 10  <- 9*9 ≡ 1 mod 10

    X = ΣxiNibi = 1*10*8+9*9*3 = 323  
    X ≡ 323 mod 90 ≡ 53 mod 90  
    -> x ≡ 53 mod (9*20) ≡ 53 mod 180 ≡ 143 mod 180
                                        53+90

Solve  
x ≡ 2 mod 4  
x ≡ 1 mod 5  
x ≡ 3 mod 9  
x ≡ 7 mod 13  

    solution: X ≡ 1866 mod 2340  

Solve  
x ≡ 3 mod 5  
x ≡ 2 mod 6  
x ≡ 1 mod 7

    solution: X ≡ 848 mod 210 ≡ 8 mod 210


### A Generalization of Chinese Remainder Theorem

**CRT is a special case of the following:**  

**The system given by**  
**x ≡ a mod m**  
**x ≡ b mod n**  
**has a solution iff gcd(m,n)\|a-b**  
**(if exists) this solution is unique mod lcm(a,b)**  


### Fundamental Theorem of Arithmetic  

**Lemma 1: if p\|ab then p\|a or p\|b (p-prime, a,b∈N)**  

    proof: sps p∤a then gcd(a,p)=1
           so there exists x,y∈Z s.t. ax+py=1
           since p|ab, there is some d∈Z s.t. pd=ab  
           notice b(ax+py)=b
           -> abx + bpy = b
           -> pdx + bpy = b
           -> p(dx+by) = b
           -> p|b ■

**Lemma 2: if p\|a1\*...\*an then p\|ai for some 1≤i≤n (p-prime)**

    proof: By Principle of Mathematical Induction (PMI)  
           base case (n=2): by Lemma 1  
                            p|a1a2 then p|a1 or p|a2 True  
           Induction  
           Hypothesis (IH): sps if p|a1*...*an then p|ai for some 1≤i≤n
                            sps p|a1*...*ak*a{k+1} then p|ai for some 1≤i≤n
                            by Lemma 1
                            p|a1*...*ak or p|a{k+1}
                            by IH
                            p|a1*...*ak means p|ai for 1≤i≤k
                            so p|ai or p|a{k+1}  
                            -> p|ai 1≤i≤k+1 ■

**Fundamental Theorem of Arithmetic**

**For all n≥2, we can write n=p1^(a1)\*...\*pk^(ak) where pi=distinct prime, ai∈N**  
**and this is unique up to reordering**  

    proof: (existence) (then uniqueness)
          by WOC (way of contradiction)  
          sps there is a natural number without such a representation  
          let m be the smallest such number  
          observe that m must be composite (since prime follows the form)
          we write m=ab where 1<a,b<m  
          since a,b< and ≠m, we can write a,b in the given form !contradiction!
          hence m=p1^(a1)*...*pk^(ak)

          (uniqueness)
          sps p1^(a1)*...*pk^(ak)=q1^(b1)*...*ql^(bl)  
          note pi|LHS for all i  
          so pi|RHS for all i
          i.e. pi|q1^(b1)*...*ql^(bl)  
          -> pi|qr^(br) for some r  
          -> pi|qr
          since pi and qr both primes  
          -> pi=qr  
          it follows that k=l and pi=qr for some r  
          after reordering, renaming (pi=qi)
          -> p1^(a1)*...*pk^(ak)=qk^(bk)*...*qk^(bk)

          by WOC, sps ai≠bi: ai>bi  
          both sides divide by p^(bi)
          -> p1^(a1)*...*p{i-1}^a{i-1}*pi^(ai-bi)*p{i+1}^a{i+1}*...*pk^(ak) LHS
          -> p1^(b1)*...*p{i-1}^b{i-1}*p{i+1}^a{i+1}*...*pk^(ak) RHS
          note pi|LHS
          -> pi|RHS  
          -> pi|pj for i≠j !contradiction!
          -> ai=bi uniqueness proved ■


### There are infinitely many primes of the form 4n+3 for n∈Z

**Proposition: there are infinitely many primes of the form 4n+3 for n∈Z**  

    proof: by WOC, sps there are finitely many such primes  
          p0=3, p1,...,pr  (r+1 different primes)
          consider N=4p1*...*pr+3  
          note that N is odd
          so its prime factorization is made of primes of the form 4n+1, 4n+3

          claim: at least one of those primes is of the form 4n+3  
          proof: (by WOC) sps all of its primes are 4n+1 type  
                note (4n+1)(4m+1)=4(4mn+m+n)+1 !contradiction!
          so one of p0,p1,...,pr divides N

          case 1: p0=3|N -> 3|N-3 -> 3|4p1*...*pr
          -> 3|4 or 3|pi 1≤i≤r both impossible
          case 2: pi|N -> pi|N-4p1*...*pr -> pi|3
          -> pi=1 or pi=3
          1 is not prime and pi≠3 !contradiction! ■


### Hansel's Lemma  

**Given prime p, e≥2, and f(x)∈Z[x]** <- a polynomial with integer coefficients  
**if a is a solution to f(x)≡0 (mod p^(e-1)), and if gcd(p,f'(a))=1**  
**there is a solution to f(x)≡0 (mod p^(e)) of the form b=a+kp^(e-1)**  
**where k satisfies**  
**f(a)/p^(e-1)+kf'(a)≡0 (mod p^(e))**

    proof: "a is a solution to f(x)≡0 (mod p^(e-1))" gives  
          f(a)≡0 (mod p^(e-1))
          -> p^(e-1)|f(a)
          -> f(a)/p^(e-1)∈Z

          "if gcd(p,f'(a))=1" gives
          the linear congurence f'(a)y≡ -f(a)/p^(e-1) mod p has a unique solution call it k
          -> f'(a)k≡ -f(a)/p^(e-1) mod p

          set b=a+kp^(e-1), f(x)= Σ_n cix^i (i from 1)

          f(b) = Σ_n ci(a+kp^(e-1))^i (i from 0?)
               = Σ_n ci(a^i + ia^(i-1)kp^(e-1) + p^2(e-1)(more))
                                                 ≡0 mod p^e
               = Σ_n cia^i + kp^(e-1)Σ_n icia^(i-1)
                   f(a)    +      kp^(e-1)f'(a)

          f'(a)k≡ -f(a)/p^(e-1) mod p both sides multiply by p^(e-1)
          -> p^(e-1)f'(a)k≡ -f(a) mod p^e
          put the above into f(b)
          -> f(b)=f(a)-f(a)≡0 mod p^e ■

### Lagrange's Theorem for Polynomials  

**if p is prime, and f(x)∈Z[x] of degree d≥1**  
**there are at most d congruece classes of solutions to**  
**f(x) ≡ 0 mod p** <- polynomial congruence  

### Polynomial Congruence

**Proposition: let n1,...,nk∈N be mutually co-prime**  
**and sps f(x) ≡ 0 mod ni has Ni solutions,**  
**then  f(x) ≡ 0 mod ni\*...\*nk has N1\*...\*Nk solutions**

proof and exs  


### Fermat's Little Theorem (FLT)

**For a prime p and a∈Z w/ p∤a, we have a^(p-1) ≡ 1 mod p**  

**i.e. If gcd(a,p)=1, then a^(p-1) ≡ 1 mod p**

proof and exs  

**Corollary: for all a∈Z a^p ≡ a mod p**

**Lemma: if p and q are distinct primes s.t. p\|a and q\|a then pq\|a**

**Lemma: if a ≡ b mod p and a ≡ b mod q, then a ≡ b mod pq**

**Proposition: for all distinct primes p,q, p^q+q^p ≡ p+q mod pq**

### Fermat Psuedoprime Number  

**Def: we say that n is a base a psuedoprime if a^(n-1) ≡ 1 mod n**

### Wilson's Theorem  

**If p is a prime, then (p-1)! ≡ -1 mod p**

**Lemma: if a^2 ≡ 1 mod p then a ≡ 1 mod p or a ≡ 1 mod p**

proof

proof  

**Corollary: (p-2)! ≡ 1 mod p**

**Proposition: let n>1, then n is prime iff (n-2)! ≡ 1 mod n** <- classification of primes  

### Euler's Totient Function (ETF)

**ETF counts the positive integers up to a given integer n that are relatively prime (rel-pri) to n**  
**Def: φ: N->N, φ(n)=#{1≤m≤n \| gcd(m,n)=1} = \|Un\|**  

\#{} - number of elements of this set  
Un - group of units modulo n (from Abstract Algebra)    

**Proposition: for a prime p, we have φ(p)=p-1**  

**Proposition: for a prime p, we have φ(p^r)=p^r-p^(r-1)** <- powers of primes  

**Proposition: if gcd(m,n)=1, then φ(mn)=φ(m)φ(n)** <- multiplicativity

**Theorem: if n=p1^r1\*...\*pk^rk, then φ(n)=n(1-1/p1)\*...\*(1-1/pk)**  


### Euler's Theorem  

**Recall Euler's Totient function: φ(n)=#{1≤m≤n \| gcd(m,n)=1}** <- also called Euler's φ function  
**if gcd(a,n)=1 then a^(φ(n)) ≡ 1 mod n**  

**Euler's Theorem is a generalization of Fermat's Little Theorem**  
**Recall FLT: if gcd(a,p)=1, a^(p-1) ≡ 1 mod p**  

**Corollary: if gcd(a,n)=1, then a^(-1) ≡ a^(φ(n)-1) mod n** <- used for solving linear congruence  

### Order of A Modulo N

**Def: the order of a modulo n is the least m∈N s.t. a^m ≡ 1 mod n**  
**we write ord_n a = m, i.e. a^(ord_n a) ≡ 1 mod n**   

Familiar to **Euler's Theorem: if gcd(a,n)=1 then a^(φ(n)) ≡ 1 mod n**  

    ex. n=5 find the order of a modulo n
        gcd(a,5)=1       if gcd(a,5)≠1
        -> a∈{1,2,3,4}   -> a=0 or 5   0^n ≡ 0 mod 5 and 5^n ≡ 0 mod 5 <- not interesting

        take a=1, 1^n ≡ 1 mod 5
        take a=2, 2^1=2
                  2^2=4
                  2^3=8
                  2^4=16 ≡ 1 mod 5 ✓

        so ord_5 2 = 4  

        take a=3, 3^1=3
                  3^2=9 ≡ -1 mod 5
                  3^3=27
                  3^4=81 ≡ 1 mod 5 ✓

        so ord_5 3 = 4

        take a=4, 4^1
                  4^2=2^4=16 ≡ 1 mod 5 ✓

        so ord_5 4 = 2


**proposition: a^k ≡ 1 mod n <=> ord_n a \| k**

    proof: (=>) sps that a^k ≡ 1 mod n
           use division Alg with k and ord_n a (ord a in short)
           k=(ord a)q+r w/ 0≤r<ord a

           a^k ≡ 1 mod n
           -> a^((ord a)q+r) = (a^(ord a))^q*a^r
           since a^(ord a)≡1 mod n
           -> a^r ≡ 1 mod n
           however, 0≤r<ord a  
           ord a is the smallest a^m ≡1 mod n by definition
           -> r=0  
           -> ord a | k since k=(ord a)q+r

           (<=) ord a | k
           -> k=(ord a)*b for b∈N  
           -> a^k = a^[(ord a)*b] = (a^(ord a))^b
           since a^(ord a)≡1 mod n  
           -> a^k ≡1 mod n ■


**important corollary: ord_n a \| φ(n)**  

    proof: by Euler's Theorem  
           a^(φ(n)) ≡ 1 mod n  
           apply the previous propostion: a^k ≡ 1 mod n <=> ord_n a | k
           replace k with φ(n)
           -> ord_n a | φ(n) ■

    ex. ord_7 2 = ?
       possible orders are divisors of φ(7) = 6
       i.e. {1,2,3,6}

       take a=2, 2^1=2
                 2^2=4
                 2^3=8 ≡1 mod 7

       so ord_7 2 = 3

    ex. ord_30 7 = ?
       possible orders are divisors of φ(30)=8
       i.e. {1,2,4,8}

       take a=7, 7^1
                 7^2=49 ≡-1 mod 30
                 7^4≡ 1 mod 30

       so ord_30 7 = 4


**proposition: if gcd(a,n)=1, a^k ≡ a^l (mod n) <=> k ≡ l (mod ord_n a)** <- like taking log

    proof: (=>) assume k≥l <- make sure there is no negative exponents  
          a^l * a^(k-l) = a^k ≡ a^l (mod n)
          observe gcd(a^l,n)=1, since gcd(a,n)=1
          -> we can cancel a^l  
          -> a^(k-l) ≡ 1 mod n  
          -> ord a | k-l, since ord a is the smallest m s.t. a^m ≡ 1 mod n  
          -> k ≡ l (mod ord a)

          (<=) sps k ≡ l (mod ord_n a)
          -> ord a | k-l
          -> k-l=b(ord a) for b∈Z
          -> a^(k-l) = (a^(ord a))^b ≡ 1 mod n
          multiply both sides by a^l  
          -> a^k ≡ a^l mod n ■



### Primitive Roots Modulo N

**Def: we say r is a primitive root modulo n if ord_n r=φ(n)**  

**=> {1,r,r^2,...,r^(φ(n)-1)}=Un**

    ex. n=13 find primitive root mod n  
        φ(13)=12  
        possible orders are divisors of 12
        i.e. {1,2,3,4,6,12}
        possible roots are gcd(r,13)=1  
        i.e. {1,2,...,13}

        take r=1, ord_13 1 = 1 ≠ φ(13)
        take r=2, ord_13 2 = ?
                  2^1
                  2^2
                  2^3
                  2^4
                  2^6
                  2^12≡1 mod 13
                  so ord_13 2 = φ(13) = 12
                  so 2 is the primitive root modulo 13

    ex. n=8 find primitive root mod n
        φ(8)=4
        possible orders are {1,2,4}
        possible roots are gcd(r,8)=1
        i.e. {1,3,5,7} which are rel-pri to 8  

        take r=1, ord_8 1 = 1
        take r=3, ord_8 3 = 2 ≠ φ(8)
                  3^1
                  3^2 ≡1 mod 8 ✓
                  3^4 ≡1 mod 8
        take r=5, ord_8 5 = 2 ≠ φ(8)
                  5^1
                  5^2 ≡1 mod 8 ✓
                  5^4 ≡1 mod 8
        take r=7, ord_8 7 = 2 ≠ φ(8)
                  7^1
                  7^2 ≡1 mod 8 ✓
                  7^4 ≡1 mod 8

        so no primitive roots mod 8  


**proposition: if gcd(a,n)=1, ord_n a = ord_n a / gcd(k,ord_n a)**

    proof: set d=gcd(k,ord a)    (ord_n a reads order of a mod n, in short ord a)
           observe k/d, ord a/d ∈ N
           -> (a^k)^(ord a/d) = (a^ord a)^(k/d) = 1^(k/d) ≡ 1 mod n  
           by a^k ≡ 1 mod n <=> ord a | k
           -> ord (a^k) | (ord a)/d (1) (replace a with a^k)
           a^(k*ord a^k)=(a^k)^(ord a^k) ≡ 1 mod n
           by a^k ≡ 1 mod n <=> ord a | k again
           -> ord a | k*(ord a^k)
           both sides divides by d
           -> (ord a)/d | (k/d)*(ord a^k) (2)
           -> (ord a)/d | (ord a^k) (3)
           (1)+(3) -> ord (a^k) = (ord a)/d = ord a / gcd(k,ord a) ■


**corollary: if there is a primitive root modulo n, then there are exactly φ(φ(n)) primitive roots modulo n**

    proof: let r be a primitive root mod n
          -> ord r = φ(n)
          then any other primitive root is from
          {1, r, r^2, r^3, ..., r^(φ(n)-1)}  <- ele rel-pri to n
          so any other primitive root is of the form  
          r^k w/ 0<k<φ(n) <- 1 is not a primitive root so k!=0
          ord r^k = ord r/ gcd(k, ord r) = φ(n) / gcd(k,  φ(n)) = φ(n)
          -> gcd(k, φ(n))=1
          -> there are exactly φ(φ(n)) such numbers  
          since by definition of φ(n)= #{1≤m≤n | gcd(m,n)=1} ■


    ex. find all primitive roots from n=7  
        φ(7)=6
        possible orders are {1,2,3,6}
        possible roots are {1,2,3,4,5,6}
        ord 2 = 3 ≠ φ(7)
        2^1
        2^2
        2^3=8 ≡ 1 mod 7
        2^6=64 ≡ 1 mod 7
        ord 3 = 6 = φ(7)
        3^1
        3^2
        3^3
        3^6 ≡ 1 mod 7
        so 3 is a primitive root mod 7  
        there are φ(φ(7))=2 primitive roots have the form of
        3^k where gcd(k,φ(7))=1
        -> k=1,5 < 6
        3^1=3
        3^5≡ 5 mod 7  
        so the primitive roots are 3 and 5 from {1,2,3✓,4,5✓,6}

    ex. find all primitive roots modulo 22  
        φ(22)=10
        possible orders {1,2,5,10}
        possible roots {1,3,5,7,9,13,15,17,19,21} <- gcd(r,22)=1

        take r=3, 3^5≡1 mod 22
        ord 3 = 5 ≠ φ(22)
        take r=5, 5^5≡1 mod 22
        ord 5 = 5 ≠ φ(22)
        take r=7, 7^10≡1 mod 22
        ord 7 = 10 = φ(22)
        so 7 is a primitive root mod 22  
        there are φ(φ(22))=4 primitive roots  
        they are 7^k w/ gcd(k,φ(22))=1
        k=1,3,4,9  
        -> primitive roots are {7^1,7^3,7^7,7^9}
                                    ≡13 ≡17 ≡19
        -> primitive roots are {7,13,17,19} from {1,3,5,7✓,9,13✓,15,17✓,19✓,21}


**proposition: let p be a prime and d∈N, s.t. d\|p-1**  
**then (x^d)-1 ≡ 0 mod p has exactly d incongruent solutions mod p**  

    proof: recall Lagrange’s Theorem for Polynomials
          (x^d)-1 has at most d incongruent solutions  
          write p-1=de since d|p-1 for e∈N  
          x^(p-1)-1 = x^de - 1 = (x^d)^e - 1 = (x^d - 1)(x^d(e-1)+...+x^d+1)
          note by FLT x^(p-1)≡ 0 mod p has exactly p-1 solusions eg.{1,2,...,p-1}
          x^(p-1)-1 = (x^d - 1)(x^d(e-1)+...+x^d+1)
          has p-1 solus         at most d(e-1) solus mod p  
          -> (x^d - 1) has at least p-1-d(e-1)=d solutions  
          recall (x^d)-1 has at most d incongruent solutions
          -> (x^d)-1 ≡ 0 mod p has exactly d incongruent solutions mod p ■

### Gauss' Theorem  

**Let n∈N, then Σ_{d>0 and d\|n} φ(d)=n**  

    ex. n=6
        d={1,2,3,6}
        Σ_d φ(d) = φ(1)+φ(2)+φ(3)+φ(6) = 6


    proof: let d|n  
          consider the following set
          Sd={m∈Z | 1≤m≤n, gcd(m,n)=d}
            ={m∈Z | 1≤m≤n, gcd(m/d,n/d)=1}
            ={k∈Z | 1≤k≤n/d, gcd(k,n/d)=1}

          φ(n/d)=#Sd by definition of φ(n)

          claim (1): {1,2,...,n} = ∪_{d|n} Sd <- union of all Sd with d|n  
          ex. n=6, d={1,2,3,6}
          sd_{d=1}={m∈Z | 1≤m≤6, gcd(m,6)=1}={1,5}
          sd_{d=2}={m∈Z | 1≤m≤6, gcd(m,6)=2}={2,4}
          sd_{d=3}={m∈Z | 1≤m≤6, gcd(m,6)=3}={3}
          sd_{d=6}={m∈Z | 1≤m≤6, gcd(m,6)=6}={6}

          claim (2): Sd ∩ Sd'= ∅ if d ≠ d'

          (1)+(2)-> n= Σ_{d|n} #Sd =  Σ_{d|n} φ(n/d)

          note d|n -> de=n -> d=n/e for some e|n for e∈N
          -> {d| d|n} = {n/d | d|n}
          -> n= Σ_{d|n} φ(d) ■

### There is a primitive root modulo every prime

**<=> every prime has a primitive root**  
**<=> ∃x∈N s.t. ord_p x = p-1 = φ(p)**  

To prove this, we fisrt prove a theorem and a corollary

**Theorem: Let p be a prime and d\|p-1, d∈N**  
**then there are exactly φ(d) incongruent integers w/ order d modulo p**  

**i.e. if p is prime and d\|p-1, d∈N, φ(d)=#{1≤m≤p-1 \| ord_p m=d}**  

    proof: let f(d)=#{1≤m≤p-1 \| ord_p m=d}  
           by FLT m^(p-1) ≡ 1 mod p  
           and by a^k≡1 mod n iff ord_n a|k
           -> ord_p m | p-1  

           claim: Σ_{d|p-1} f(d) = p-1  
           left and right are two ways of counting numbers between 1 and p-1  
           left is counting in sets  

           by Gauss' Theorem
           Σ_{d|p-1} φ(d) = p-1  

           -> Σ_{d|p-1} φ(d) = Σ_{d|p-1} f(d)

           claim: f(d) ≤ φ(d)
           if f(d)=0, we are done  
           assume f(d)>0
           then there is an element a of order d (ord a = d)
           or we can find all elements a of oder d  

           consider: 1, a, a^2, ..., a^(d-1)  
           each of these is an incongruent solution of (x^d)-1 ≡ 0 mod p

           recall ord a^k = ord a/ gcd(k, ord a)= d/gcd(k,d)=d
           -> gcd(k,d)=1
           -> there are φ(d) integers of order d  

           there are two cases:  φ(d)=0 not possible
                                 φ(d)=f(d) ■

    ex. find all incongruent integers of order 6 mod 19  
        i.e. find all a s.t. ord_19 a =6  

**Corollary: there are exactly φ(p-1) incongruent integers of order p-1 modulo p**

**i.e. ord_p x=p-1, with #x=φ(p-1)**

with **Theorem+Corollary**, we have the conclusion that **every prime has a primitive root**

### Product of Primitive Roots mod p  

**Proposition: if a and b are primitive roots mode p**  
**then ab is not a primitive root mod p**  

    ex. 3 and 5 are primitive root mod 7, but 15 isn't  
        ord_7 3 = φ(7) = 6
        ord_7 5 = φ(7) = 6
        ord_7 15 = 1 ≠ φ(7)


### Classifying numbers have primitive roots or not

**proposition: for n≥3, there are no primitive roots mod 2^n**  

    proof: by induction
           base case n=3, there is no primitive roots mod 8  

**proposition: if m,n>2 w/ gcd(m,n)=1**  
**then there are no primitive root modulo mn**  

**Lemma: there is a primitive root a mod p s.t. a^(p-1) ≢ 1 mod p^2, p is a prime**  

**Lemma: let p be an odd prime, a be a primitive root modulo p s.t. a^(p-1) ≢ 1 mod p^2**  
**then a^[(p^(n-2))\*(p-1)] ≢ 1 mod p^n ∀n≥2**

**proposition: let p be an odd prime, then there is a primitive root mod p^n for all n≥1**  

**proposition: let p be an odd prime, n∈N, then there is a primitive root mod 2p^n**  

**Theorem: there is a primitive root mod n iff n∈{1,2,4}∪{p^m\| m∈N}∪{2p^m\| m∈N}, where p is an odd prime**

    proof  


    ex. find a primitive root mod 5^n for n∈N

    ex. find a primitive root mod 2*5^n for n∈N

    ex. find all primitive root mod 54  


### Index Modulo N / the Discrete Logarithm

**Def: let r be a primitive root modulo n and gcd(a,n)=1**  
**then Ir(a) = the least m∈N s.t. r^m ≡ a mod n**  
**i.e. r^(Ir(a)) ≡ a mod n**

    ex. recall 3 is a primitive root mod 7  
        ord_7 3 = φ(7) = 6

        3^1=3     I3(3)=1
        3^2≡2     I3(2)=2
        3^3≡6≡-1  I3(6)=3
        3^4≡4     I3(4)=4
        3^5≡5≡-2  I3(5)=5
        3^6≡1     I3(1)=6

    ex. recall 2 is a primitive root mod 9  

        2^1≡2   I2(2)=1
        2^2≡4   I2(4)=2
        2^3≡8   I2(8)=3
        2^4≡7   I2(7)=3
        2^5≡5   I2(5)=5
        2^6≡1   I2(1)=6


### Index Modulo N rules  

**proposition: let r be a primitive root modulo n and gcd(a,n)=1, gcd(b,n)=1 then**  

**1. Ir(1)≡0 mod φ(n)**  
**2. Ir(r)≡1 mod φ(n)**  
**3. Ir(ab)≡Ir(a)+Ir(b) mod φ(n)**  
**4. Ir(a^m)≡mIr(a) mod φ(n)**  

    proof 1: r^Ir(1) ≡1 mod n  
             r^Ir(1) ≡r^0 mod n
             by a^k ≡ a^l mod n iff k ≡ l mod ord_n a
             Ir(1) ≡ 0 mod ord_n r
             ord_n r=φ(n)
             -> Ir(1) ≡ 0 mod φ(n)


    proof 2: r^Ir(r) ≡ r mod n
             r^Ir(r) ≡ r^1 mod n
             by a^k ≡ a^l mod n iff k ≡ l mod ord_n a
             Ir(r) ≡ 1 mod φ(n)

    proof 3: r^Ir(a) ≡ a mod n  
             r^Ir(b) ≡ b mod n  
             r^(Ir(a)+Ir(b)) ≡ ab mod n ≡ r^Ir(ab) mod n
             by a^k ≡ a^l mod n iff k ≡ l mod ord_n a
             Ir(a)+Ir(b) ≡ Ir(ab) mod φ(n)

    proof 4: r^Ir(a^m) ≡ a^m mod n
             r^[mIr(a)] ≡ [r^Ir(a)]^m ≡ a^m mod n  
             Ir(a^m) ≡ mIr(a) mod φ(n)


Solve 2x^5 ≡ 6 mod 7  

Solve 4x^7 ≡ 2 mod 9  

### Existence of an m-th Root Modulo N

**Theorem: suppose there is a primitive root modulo n, and gcd(a,n)=1**  
**then x^m ≡ a mod n has a solution iff**  
**a^(φ(n)/d) ≡ 1 mod n, where d=gcd(m,φ(n))**  
**Futher, if there is a solution there are exactly d solutions**  



### Exponential Congruences

Solve 17^x ≡ 10 mod 27  

When is there a solution to ax^5 ≡ 9 mod 11

Solve 9^x ≡ 10 mod 13

Solve 11^x ≡ 17 mod 18

When is there a solution to 5^x ≡ a mod 19


### Quadratic Residue  

**Def: let a,n∈Z with n>0 and gcd(a,n)=1**  
**then a is said to be a quadratic residue modulo n**  
**if x^2 ≡ a mod n is solvable**  
**otherwise, it's a quadratic non-residue**  

    ex. n=7, gcd(x,7)=1, x=1,2,3,4,5,6
        1^2≡1 mod 7
        2^2≡4
        3^2≡2
        ------ mirror
        4^2≡2
        5^2≡4
        6^2≡1   

        so 1,2,4 are quadratic residues mod 7
        3,5,6 are quadratic non-residues mod 7

    ex. n=8, gcd(x,8)=1, x=1,3,5,7
        1^2≡ 1 mod 8
        3^2≡ 1 mod 8
        5^2≡ 1 mod 8
        7^2≡ 1 mod 8

        so 1 is the only quad-residue mod 8
        3,5,7 are quad-nonresidue mod 8

**proposition: sps p is an odd prime w/ p∤a**  
**then x^2 ≡ a mod p has exactly 0 or 2 solutions**  

**proposition: let p be an odd prime**  
**then there are exactly (p-1)/2 incongruent quad residues and nonresidues mod p**  

### A General Quadratic Formula mod p

**sps p is an odd prime w/ p∤a**  
**solve ax^2+bx+c ≡ 0 mod p**

    ax^2+bx ≡ -c mod p

    4a^2x^2+4abx ≡ -4ac mod p  <-multiply 4a both sides  

    4a^2x^2+4abx+b^2 ≡ -4ac+b^2 mod p  <-plus b^2 both sides

    (2ax+b)^2 ≡ b^2-4ac mod p  <- factor lhs  

**this has a solution iff b^2-4ac is a quad-residue or p\|b^2-4ac**

### The Legendre Symbol  

     a      1  if a is a quad-r mod p
    (-) = {
     p     -1  if a is a quad-nonr mod p  


    ex. p=7

        (1/7)=1    1^2≡1 mod 7  
        (2/7)=1    2^2≡4 mod 7  
        (3/7)=-1   3^2≡2 mod 7  
        (4/7)=1    4^2≡2 mod 7  
        (5/7)=-1   5^2≡4 mod 7  
        (6/7)=-1   6^2≡1 mod 7  



###  Euler's Criterion  

**Theorem: we have (a/p) ≡ a^[(p-1)/2] mod p**  


### The Legendre Symbol Property

**proposition: let p be an odd prime w/ p∤a p∤b**  
**then**  

1. **(a^2/p)=1**
2. **(a/p)=(b/p) if a≡b mod p**
3. **(ab/p)=(a/p)(b/p)**

### √-1 mod p <=> x^2 ≡ -1 mod p

**Theorem: let p be an odd prime**  
**then -1 is a quad-r mod p iff p ≡ 1 mod 4**

**i.e. x^2 ≡ -1 mod p**

### Gauss' Lemma

**Let p be an odd prime, p∤a**  
**let n = the number of least positive residues of a,2a,3a,...,(p-1)a/2**  
**that are greater than p/2**  
**then (a/p)=(-1)^n**  

### √2 mod p <=> x^2 ≡ 2 mod p

**Theorem: let p be an odd prime**  
**then 2 is a quad-residue mod p iff**  
**p ≡ 1 mod 8 or p ≡ 7 mod 8 iff**  
**(p^2-1)/8 ≡ 0 mod 2**  

**i.e. x^2 ≡ 2 mod p**

### There are infinitely many primes of the form 4n+1  

**Theorem: There are infinitely many primes of the form 4n+1**

### Quadratic Reciprocity  

**Theorem: let p and q be distinct odd primes**  

                       (p-1) (q-1)
          p  q         ----- -----     1  if p or q ≡ 1 mod 4
    then (-)(-) = (-1)^  2     2   = {
          q  p                        -1  if p ≡ q ≡ 3 mod 4


**Lemma: p = odd prime, p∤a, a=odd**  

       (p-1)/2    ja
    N =   Σ     ⌊ --- ⌋
         j=1       p

**then (a/p)=(-1)^N**

    ex. (31/103)

    ex. (139/433)

    ex. (523/1103)  

Is there a solution to x^2 ≡ 1247 mod 1481  

### √3 mod p <=> x^2 ≡ 3 mod p

For what primes p is there a solution to x^2 ≡ 3 mod p?

i.e. what p is (3/p)=1 ?

### √5 mod p <=> x^2 ≡ 5 mod p

For what primes p is there a solution to x^2 ≡ 5 mod p?  

i.e. what p is (5/p)=1 ?

### Quadratic Residue Summary  

     a      1  if ∃ a solution to x^2 ≡ a mod p
    (-) = {
     p     -1  otherwise  

     -1      1  if p ≡ 1 mod 4
    (--) = {
     p      -1  if p ≡ 3 mod 4  

     2      1  if p ≡ 1,7 mod 8
    (-) = {
     p     -1  if p ≡ 3,5 mod 8

     p      (q/p)  if p or q ≡ 1 mod 4
    (-) = {
     q      -(q/p)  if p ≡ q ≡ 3 mod 4  

     a  b     ab
    (-)(-) = (--)
     p  p     p

                         r     s
    if r ≡ s mod p then (-) = (-)
                         p     p


### Rational Points on the Unit Circle  

### No Rational Points on x^2+y^2=7  

### There are infinitely many primes of the form 3n+1 ≡ 1 mod 3  

### A Few Nonlinear Diophantine Equations with no Solutions  

**proposition: 3x^2+2=y^2 has no solution w/ x,y∈N**

**proposition: 7x^2+2=y^3 has no solution w/ x,y∈N**

### A very Special Case of Fermat's Last Theorem  

**x^4+y^4=z^4 has no solution w/ x,y,z∈N**  

**i.e. x^4+y^4≠z^4**

### Sum of Squares  

**Q: when can n∈N be expressed as a sum of two squares?**  

i.e. **∃ x,y∈N s.t. x^2+y^2=n**

**Proposition: if m,n∈N are expressible as a sum of two squares**  
**then so is mn**

**Proposition: if n ≡ 3 mod 4, then n is not expressible as a sum of two squares**

**Proposition: if p is a prime with p ≢ 3 mod 4, then ∃ x,y∈N w/ x^2+y^2=p**

**Lemma: if p ≡ 1 mod 4, then ∃ x,y∈N s.t. x^2+y^2=kp w/ 0<k<p**

**Theorem: let n∈N then n is expressible as a sum of two square integers iff**  
**every prime factor ≡ 3 mod 4 appears w/ an even power**  

**Fact: (x^2+y^2)(z^2+w^2)=(xz+yw)^2+(xw-yz)^2**  

**Theorem: let N∈N, then N is expressible as a sum of three square integers iff**  
**N ≠ 4^m(8n+7) for m,n∈N**

**Theorem: every n∈N can be written as a sum of four squares**  

**Lemma1: for all primes p, ∃ a,b,c∈N not all zero s.t. a^2+b^2+c^2 ≡ 0 mod p**  

**Lemma2: if m and n are expressible as a sum of four squares, so is mn**  

### A General Strategy for Proving There are infinitely many primes ≡b mod a  

**There are infinitely many primes ≡b mod a**  

i.e. **There are infinitely many primes of the form an+b** (if gcd(a,b)=1)

1. assume p1,...,pk is a complete list of all finite primes
2. form a polynomial f(x) which has been evaluated f(Op1\*...\*pk)=N, O is some number, that N cannot be divisible by pi
3. assume a new prime p\|N, note f(x)≡0 mod p has a solution  
4. show this p ≡b mod a that contradicts the assumption  

### Floor and Ceiling Function  

The **floor function** is the function that takes as input a real number x, and gives as output the greatest integer less than or equal to x, denoted floor(x) or ⌊x⌋

The **ceiling function** maps x to the least integer greater than or equal to x, denoted ceil(x) or ⌈x⌉

    ex. ⌊2.4⌋ = 2
        ⌊−2.4⌋ = −3
        ⌈2.4⌉ = 3
        ⌈−2.4⌉ = −2

### gcd as Linear Combination  

**Proposition: sps a,b∈N, then there exists x,y∈Z s.t. ax+by=gcd(a,b)**  


### Geometric Series

                         ∞         a
    a+ar+ar^2+ar^3+... = Σ ar^k = ---   w/ |r|<1
                        k=0       1-r

### Well Ordering Principle / Archimedean Principle?  

**Every non-empty subset of natural numbers contains a smallest element**


### Notation  

∈ ∉ ∀ ∃ ≤ ≥ ≠ ∅ Σ Π π ∞ ⊆ ∤ ± ≅ ≡ ≢ ✓ ∪ ∩ √ ⌊ ⌋ ⌈ ⌉

i.e.: in other words  
e.g.: for example  
ex.: example  
sps: suppose  
■: end of proof  
!contradiction!  
-> <-: implies instead of => <=    
{}: under label  
gcd(): greatest common divisor ex. gcd(5,10)=5 gcd(24,36)=12  
lcm(): least common multiple ex. lcm(36,12)=36 lcm(18,12)=36  
w/: with   
w/o: without  
b/c: because  
equv: equivalent to  
both x and * are multiply operator, when x is a variable use *  
\#{}: number of elements of this set  
rel-pri: relatively prime to    


### Memo  

lcm(a,b)=ab/gcd(a,b)  

dividend/divisor=quotient  

6 / 2 = 3 means 6 divided by 2
b / a = n (i.e. n x a = b) means a divides b

congruent to: equivalence of geometric shapes and size   

modulo returns the remainder or signed remainder of a division  

-11 mod 7 = 3 b/c -11=7x(-2)+3  
-1 mod 7 = 6  b/c -1=7x(-1)+6

For a positive integer n, two integers a and b are said to be **congruent modulo n (or a is congruent to b modulo n)**, if a and b have the same remainder when divided by n (or equivalently if a − b is divisible by n ). It can be expressed as a ≡ b mod n. n is called the modulus

**incongurent** means after being divided by the same number their remainders are different  

**composite number:** a positive integer that can be formed by multiplying two smaller positive integers, i.e. numbers are not primes  

### Reference

Micheal Penn's Youtube Channel
