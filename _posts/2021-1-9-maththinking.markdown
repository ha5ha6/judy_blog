---
layout: single
type: posts
title:  "Introduction to Mathematical Thinking"
date:   2021-1-9 22:27:25 +0900
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

### History

10000 years ago: beginning with the invention of numbers and arithmetic in order to give the world money  

centuries later: ancient Egyptians and Babylonians include geometry and trigonometry, utilitarian like a 'cookbook'  

500 b.c - 300 b.c: Greek mathematicians were interested in geometrym and made maths into an area of study, not merely a collection of techniques for measuring, counting, and accounting  

around 500 b.c: Thales of Miletus introduced the idea that the precisely stated assertions of math could be logically proved by formal arguments <- the birth of the theorem  

the first millennium/1-1000 a.c: modern place-value arithmetic in India   
the second half of the millennium: muslim world extended it and spread them to southern Europe in medieval

250 c.e: Diophantus wrote Arithmetica (13 volume) <- the first algebra textbook, and he used special symbols to denote the unknown in an equation

1623 Galileo:  
The great book of nature can be read only by those who know the language in which it was written. And this language is mathematics.  

1600s: Leibniz co-invented calculus  

1700: caculus and probability theory, Francois Viete introduced symbolic mathematics in its modern form

around 1850: mathematicians still regarded math as primarily about calculation <- like high school math  

1800s: mathematicians found out counterintuitive results, e.g. Banach-Tarski Paradox, mathematics can lead to realms where the only understanding is through the mathematics itself  
The introspection led to the adoption of a new and different conception of math, where the primary focus was no longer on performing a calculation of computing an answer, but formulating and understanding abstract concepts and relationships <- a shift from "doing" to "understanding"  
Lejeune Dirichlet, Richard Dedekind, Bernhard Riemann ...

Dirichlet: forget the formula and concentrate on what the function does in terms of input-output behavior. A function is any rule that takes objects of one kind and procduces new objects from them  
i.e. if x is rational, set f(x)=0; if x is irrational, set f(x)=1  

Mathematicians began to study the properties of such abstract functions, specified not by some formula but by their behavior. i.e. does the function have the property that when you present it with different starting values it always produces different answers? <- injectivity  

=> real analysis: Some particular properties of real-valued sequences and functions that real analysis studies include convergence, limits, continuity, smoothness, differentiability and integrability.  

"epsilon-delta definition" of continuity and differentiability  

again in 1850s: Riemann defined a complex function by its property of differentiability rather than a fomula <- "secondary"

Karl Friedrich Gauss defined "residue classes"

Dedekind examined the new concepts of "ring, field and ideal"  

1800s shift mathematics from a computational view to a conceptual one  

1900~: math could reasonably be regarded as consisting of around twelve subjects: arithmetic, geometry, calculus, etc  

Today: 60~70 distinct categories, e.g. algebra or topology <- old, complexity theory or dynamical systems theory <- new  

1980s: a dramatic growth in math in a new definition of math as the "science of patterns", e.g. numerical patterns, patterns of shape, motion, behavior, voting patterns in a population, patterns of repeating chance events etc  

memes for describing what math does: mathematics makes the invisible visible   

### Notation  

the use of abstract notation:  
1. algebraic expressions
2. complicated-looking fomulas  
3. geometric diagrams  

almost every key statements of mathematics, the axioms, conjectures, hypothesis and theorems is a positive or negative version of one of four linguistic forms:  

1. object a has property P
2. every object of type T has property P  
3. there is an object of type T having property P  
4. if statement A, then statement B  

combinators: and, all, not  

e.g. 3 is a prime number <- 10 is not a prime number, no even number is prime except for 2  
every polynomial equation has a complex root <- not every polynomial equation has a complex root   
there is a prime number between 20 and 25  
if p is prime of the form 4n+1, then p is a sum of two squares <- Gauss,

all mathematical statements can be expressed using one of these simple forms:  
and, or, not, implies, for all, there exists  

formal logic / mathematical logic  


### There are infinitely many prime numbers <- True

list the prime p1, p2, p3, ...

suppose we have reached stage n: p1, p2, p3, ... pn, can we find another prime to continue the list?  

look at the number defined by N = (p1 x p2 x p3 ... x pn) + 1

clearly N > pn, if N is prime, we have found a prime bigger than pn, then continue the list  

if N is not prime, it is divisible by a prime, say p, p cannot be any of p1 to pn, since dividing them leaves a remainder of 1  

so p > pn, that means we found a prime number bigger than pn  

either ways the list can be continued   

### Combinators

**and**, ^ <- wedge, an inverted v, &

e.g. π is bigger than 3 and less than 3.2  
(π>3) ^ (π<3.2), or 3<π<3.2

φ, ψ, phi and psi, represent two statements  
φ^ψ means both of them are true  
"φ^ψ" term represents "conjunction" of constituent phi and psi  
φ, ψ are called "conjuncts" of φ^ψ  
if φ, ψ are both true, then φ^ψ will be true  
if φ or ψ or both are false, then φ^ψ will be false  

φ^ψ means the same as ψ^φ  
conjunction is commutative => the word "and" is commutative in maths but not true in real ife   

e.g. statement A: it rained on Saturday.  
statement B: it snowed on Saturday.  
does A^B accurately reflect the meaning of the sentence:  
it rained and snowed on Saturday?    

YES  

propositional truth table   

    φ   ψ   φ^ψ
    -----------
    T   T    T
    T   F    F
    F   T    F
    F   F    F

**or**

exclusive-or -> a>0 or the euqation x^2+a=0 has a real root <- two statements cannot be true together   

inclusive-or -> ab=0 if a=0 or b=0 <- a and b can both be 0  

in maths, "or" means inclusive-or  
or, v <- disjunction  

φvψ, means φ or ψ or both  
φ, ψ are "disjuncts" of φvψ  
φvψ means at least one of them is true  

e.g. (3<5)v(1=0) is true, even (1=0) is false   

    φ   ψ   φ^ψ
    -----------
    T   T    T
    T   F    T
    F   T    T
    F   F    F


**not**  
not φ, ¬φ <- the negation of φ, old version ~φ  
if φ is true, then ¬φ is false, vice versa  
x≠y instead of ¬(x=y)   
¬(a<x<=b) is better than a≮x≮=b, because the latter is ambiguous  

"All foreign cars are badly made."  False statement  
what is the negation of this sentence?  
a. all foreign cars are well made  F
b. all foreign cars are not badly made  F
c. at least one foreign car is well made  T
d. at least one foreign car is not badly made  T  

"all domestic cars are badly made."  F  
negating a word in sentence is not negating the entire sentence ...  

    φ  ¬φ
    -----
    T   F   
    F   T  

### Implication  

φ implies ψ

the truth of ψ follows from the truth of φ  
implication involves casualty

conjunction and disjunction assume statements are independent without any inner relation <- purely truth and falsity      
i.e. (Julius caesar is dead) ^ (1+1=3)  F  
(Julius caesar is dead) v (1+1=3)  T  

Implication has truth part and causation part  
truth part <- the conditional/the material conditional  

Implication = conditional + causation (abandoned)  
conditional is represented as "=>"

φ implies ψ: φ => ψ  
φ - the antecedent  
ψ - consequent  

when φ does imply ψ, φ => ψ behaves "correctly"  
the conditional is always defined  

the truth of the conditional φ => ψ is defined in form of the truth of φ and ψ   

    φ  ψ  φ => ψ  
    T  T    T
    T  F    F

i.e.  
φ: N>7  T  
ψ:N^2>40  T  
φ=>ψ:T <- there is some connection  

φ: julius caeser is dead  T  
ψ: pi>3  T  
φ=>ψ:T <- also true because it's defined by the truth of φ and ψ, since the causation has been abandoned from the definition  

The primary goal in providing a definition of ϕ=>ψ that depends only on the truth values of ϕ and ψ is **To obtain a notion, consistent with real implication , that is always defined**  

Implication has a property that a true implication leads to a true conclusion from a true assumption  

    φ  ψ  φ => ψ  
    F  T    T
    F  F    T

φ =/> ψ    
φ does not imply ψ if: even though φ is T, ψ is nevertheless F  
φ =/> ψ is T, if φ is T and ψ is F,  
in all other circumstances φ =/> ψ is F, which means φ => ψ is T  
other circumstances include φ F and ψ T, φ F and ψ F  

i.e.  
Euclid's birthday was July 4 => Rectangles have four sides (T)  
T => T is T  
F => T is T  


### Equivalence  

Φ, Ψ are said to be (logically) equivalent if each implies the other (notation changed from φ,ψ to Φ,Ψ)

**biconditional** of Φ and Ψ is denoted Φ<=>Ψ, an abbreviation of (Φ=>Ψ)^(Ψ=>Φ)  

Φ<=>Ψ is T, if Φ, Ψ are both true or both false  

i.e.  
(φ^ψ)v(¬φ) is equivalent to φ=>ψ  
"(φ^ψ)v(¬φ) is equivalent" is Φ  
"φ=>ψ" is Ψ   

the following all mean "Φ implies Ψ"  
1. if Φ, then Ψ
2. Φ is sufficient for Ψ
3. Φ only if Ψ (not the same as "if Ψ then Φ")
4. Ψ if Φ  
5. Ψ whenever Φ
6. Ψ is necessary for Φ

"Φ is equivalent to Ψ" is itself equivalent to  
1. Φ is necessary and sufficient for Ψ
2. Φ if and only if Ψ (iff)

### Quantifiers

there exists ...  
for all ...  

quantifiers are used to refer to the two extremes, there is at least one and for all  

"there is an object x having property p, for all objects x property p holds"  

"there is an object x having property p"  

i.e the equation x^2+2x+1=0 has a real root  
can be written into:  
there is a real number x such that x^2+2x+1=0  
there exists a real number x such that x^2+2x+1=0  
in math:

    ∃x [x^2+2x+1=0]  

∃ - the existential quantifier  

to prove this statement, suppose x=-1, 1-2+1=0  

i.e ∃x [x^3+3x+1=0] (sometime this statement can be proved without solving it - indirect proof)  

look at y=x^3+3x+1 (a cubic equation)  
this is a continuous function  
if x=-1, this curve has value y=-3  
if x=+1, the curve has value y=5  
so the curve lies below the x-axis for x=-1, and above the x-axis for x=+1  
the point when the curve crosses the x-axis is when the x satisfies x^3+3x+1=0

**there is a solution to some euqation or that there is an object that satisfies some property over there without finding such an object**  

to prove a statement of the form ∃x A(x), where A(x) is some property of x, you have to find an object p such that A(p) is False??  

Wobbly Table Theorem  

Suppose you are sitting in a restaurant at a perfectly square table with four identical legs, one at each corner. Because the floor is uneven, the table wobbles. One solution is to fold a small piece of paper and insert it under one leg until the table is stable. But there's another solution. Simply by rotating the table, you'll be able to position it so that it doesn't wobble. You might enjoy trying to prove this.  

i.e. statement: squared root of 2 is rational  
it doenst look like an existence statement, but it is!  
-> there exists natural number p,q such that √2 = p/q  
-> ∃p, ∃q [√2 = p/q], p,q should be natural number  
-> (∃p∈N)(∃q∈N) [√2 = p/q], where N denotes the set of natural numbers  
-> (∃p,q∈N) [√2 = p/q] (should be avoided in the beginning for distinction, keep things distinct)  

prove that √2 is not rational  
is to prove ¬(∃p∈N)(∃q∈N) [2 = p^2/q^2]  

∀ - universal quantifier, for all  
∀x means "for all x it is the case that ..."  

"the square of any real number is greater than or equal to zero"  
∀x (x^2>=0)  
∃x [x^2=0] is not rigorous  
more explicitly: (∀x∈R) (x^2>=0)  

**combinations of quantifiers**:  

"there is no largest natural number"  
(∀m∈N)(∃n∈N)(n>m)  

**the order of the quantifiers is important**  

(∃n∈N)(∀m∈N)(n>m) means  
"thre is a natural number bigger than all natural numbers" <- False  

AMF: "one American dies of melanoma almost every hour" <- False, mocking!!  
∃A ∀H [A dies in hour H]  
what they meant was:  
∀H ∃A [A dies in hour H]  

quiz: "Do you have a license from more than one state?"  
L denotes a license you own and S denotes a state  

(∃L)(∃S1)(∃S2)[(S1!=S2)^From(L,S1)^From(L,S2)] is the literal meaning <- False!  
because license is issued by state, you can not get one license issued by two different states  

(∃L1)(∃L2)(∃S)[(L1!=L2)^From(L1,S)^From(L2,S)] <- True  
you can have two licenses from one state  

(∃L1)(∃L2)(∃S1)(∃S2)[(S1!=S2)(L1!=SL2)^From(L1,S1)^From(L2,S2)] <- True  
this is what the sentence meant  

quiz: "A drivers license valid in one state is valid in any state."  

(∀L)[(∃S1)Valid(L,S1)=>(∀S2)Valid(L,S2)] <- True  

**binding precedence**  

1. quantifiers bind whatever comes next (∀L)(...) (∃L)(...)
2. so does negation ¬(...)
3. next priority is conjunction (...)^(...)
4. then come disjunction, implication (conditional) and equivalence (...)v(...) (...)=>(...) (...)<=>(...)

i.e.  
(∀L)[(∃S1)Valid(L,S1)=>(∀S2)Valid(L,S2)] <- True in US   
L is bound by ∀L  
for any license L, if L is valid in some state, then L is valid in every state  

(∀L)[(∃S1)Valid(L,S1)^(∀S2)Valid(L,S2)] <- False   
for any license L, there is a state in which L is valid, and L is valid in every state  
(∀L)[(∃S1)Valid(L,S1)]... this means for every license it is valid in some state, but it can be not  

(∀L)(∃S1)Valid(L,S1)=>(∀S2)Valid(L,S2) <- meaningless  
[(∀L)(∃S1)Valid(L,S1)]=>[(∀S2)Valid(L,S2)]  
[all license are valid somewhere]=>L is valid in all states   (undefined, what is L?) so it's meaningless    

(∀L)(∀S1)(∀S2)[Valid(L,S1)^Valid(L,S2)] <- False
all licenses are valid in all states, can have invalid license and the second term Valid(L,S2) is redundant  

(∀x)[P(x)=>Q(x)] <- logical force/strong statement   
for every x, if P(x) then Q(x)  

(∀x)[P(x)^Q(x)] <=> (∀x)P(x) ^ (∀x)Q(x) <- 'strong' but redundant   
for every x, P(x) and Q(x)  
meaning every x satisfies P(x) and Q(x)    

(∃x)[P(x)^Q(x)] <- strong statement   
there is an x for which P(x) and Q(x)  
meaning you can find a single x which satisfies P(x) and satisfies Q(x)  

(∃x)[P(x)=>Q(x)] <- weak statement, can get confused   
there is an x, such that if P(x) then Q(x)  
if you can find an x that does not satisfy P then the statement is True, so that's why it's weak  

**Negating statements that have quantifiers**  

Let A(x) be some property of x, ¬[∀xA(x)] <=> ∃x[¬A(x)]  

eg. 'it is not the case that all motorists run red lights'
<=> 'there is a motorist who does not run red lights'

    proof of =>:  

    assume ¬[∀xA(x)],  
    if it is not the case that for all x, A(x), then at least one x must fail to satisfy A(x)  
    so, for at least one x, ¬A(x) is true  
    in symbols, ∃x[¬A(x)]  

    proof of <=:

    assume ∃x[¬A(x)],
    then there is an x for which A(x) is false, then A(x) cannot be true for all x  
    for other words, ∀xA(x) must be false  
    in symbols, ¬∀xA(x) ■

show that ¬[∃xA(x)] <=> ∀x[¬A(x)]

    proof of =>:

    assume ¬[∃xA(x)],
    if it is not the case that there exists one x that satisfies A(x)
    it means, for all x, A(x) is false  
    in symbols, ∀x[¬A(x)]

    proof of <=:

    assume ∀x[¬A(x)],
    if for all x, no A(x) is true, it means there doesn't exist one x that satisfies A(x)  
    in symbols, ¬[∃xA(x)] ■


'all domestic cars are badly made'  

    let C be the set of all cars
    D(x) means x is domestic  
    M(x) means x is badly made  

    (∀x∈C)[D(x)=>M(x)]

    negation is:
    (∃x∈C)[D(x)=|>M(x)] <- (∃x∈C)¬[D(x)=>M(x)]

    D(x)=|>M(x) <=> D(x)^¬M(x)

    so ¬(∀x∈C)[D(x)=>M(x)] <=> ∃x∈C [D(x)^¬M(x)]

    'there is a domestic car that is not badly made'  

'all prime numbers are odd' <- False  

    let P(x) mean x is prime  
    O(x) means x is odd  

    ∀x[P(x)=>O(x)]
    ¬∀x[P(x)=>O(x)] <=> ∃x[P(x)=|>O(x)]  
                    <=> ∃x[P(x)^¬O(x)]

    'there is a prime that is not odd'  
    proving 'all prime numbers are odd' is False means
    proving 'there is a prime that is not odd' is True  
    2 is a prime not odd  

'all prime numbers bigger than 2 are odd'  

    (∀x>2)[P(x)=>O(x)]

    the negation is 1. (∃x<=2)[P(x)^¬O(x)]
                    2. (∃x>2)[P(x)^¬O(x)] the correct answer  

    because the original statement is talking about x>2, we dont negate the definition of x  

let x denote a person  
P(x): 'x plays for sports team T'  
H(x): 'x is healthy'  
what does this ∃x[P(x)^¬H(x)] mean?

    'there is an unhealthy player on team T'

    negation: ∀x¬[P(x)^¬H(x)]  
              ∀x[¬P(x)vH(x)]       p=>q <=> ¬pvq
              ∀x[P(x)=>H(x)]

    'all players on team T are healthy'

'all cats are cunning'

    ∀x[Cat(x)=>Cunning(x)]

∀x[x>0 => ∃y(xy=1)]?

the quantifier only tells you something only the variable is denoted  
**Domain of quantification** tells what the x denote

    should be (∀x∈Q)[x>0 => ∃y(xy=1)], Q - rational numbers, how about y?  
    should be (∀x∈Q)[x>0 => (∃y∈Q)(xy=1)],


**Mathematisians sometime omit the quantifier**  

x>=0 => √x>=0  <- implicit quantification  

it means (∀x∈R)[x>=0 => √x>=0]  

PLZ avoid doing this!

x>0 => ∃y(y^2=x) is an abbreviation of ∀x[x>0 => ∃y(y^2=x)]  

**you cannot take for all inside a bracket of a statement/conjunction/disjunction**   

Let N be the domain of quatificaiton  
let E(x): x is even, O(x): x is odd  

∀x [E(x)vO(x)] <- True  for all natural number, it's even or odd  
∀xE(x) v ∀xO(x) <- False  every natural number is even, or every natural number is odd  

∃x [E(x)^O(x)] <- False  there is a natural number, which is both even and odd  
∃xE(x) ^ ∃xO(x) <- True  there is a natural number which is even and there is a natural number which is odd  

quiz:  

∀x [A(x)vB(x)] <|=> ∀xA(x) v ∀xB(x)  
however ∀x [A(x)^B(x)] <=> ∀xA(x) ^ ∀xB(x)  

'all athletes are big and strong'   
'all athletes are big' and 'all athletes are strong'  

∃x [E(x)^O(x)] <|=> ∃xE(x) ^ ∃xO(x)  
however ∃x [E(x)vO(x)] <=> ∃xE(x) v ∃xO(x)

'there is a player who is a good attacker or a good defender'    
'there is a good attacker' or 'there is a good defender'  

∀ is 'like' ^ <- all  
∃ is 'like' v <- at least one  


**multiple domains of quantifications**

Real numbers, x,y,z  
Rational numbers, ∃x∈Q, ∀y∈Q  
Natural numbers, ∀n∈N  

suppose the domain of quantification is a set of animals  

'every leopard has spots'  

(∀x∈L)S(x) wrong, a set of leopard belongs to animal set, it's redundant to have multiple animal sets like leopard set or horse set  

∀x[L(x)=>S(x)] correct, all leopard has spots  
∃x[H(x)^S(x)] correct, there is a horse having spots  
∀x[T(x)=>¬S(x)] correct, all tigers dont have spots  

### Proofs  

What is a proof?  
evidence or argument establishing a fact or the truth of a statement

How to use proof?  
- to establish truth (convince myself)   
- to communicate with others (convince others)  

Reading a proof is how we convince ourselves that some statement is true  

The **logical structure** is the main point of a proof  

Prove 'there are infinitely many primes'  

    proof: 1. list the primes to increasing order as p1, p2, p3 ..., pn, ... and show that the list must continue for ever  
           2. given the list up to some stage n, p1, p2, p3 ... pn show there is another prime that can be added to the list  
           3. let N be the number we get when we multiply together all the primes we have listed so far and then add 1  
              N=(p1*p2*p3...)+1
           4. obviously, N is bigger than all the primes in out list  
           5. if N is prime, we know there is a prime bigger than pn, and hence the list can be continued  
           6. if N is not prime, then there must be a prime q<N such that q divides N  
           7. but none of p1,...pn divides N, since the division of N by any one of these leaves a remainder of 1  
           8. so q must be bigger than pn, hence there is a prime bigger than pn, and the list can be continued  
           9. either way, there is another prime to add to the list  
           10. it follows that there are infinitely many primes. the result is proved ■




**Proof of Contradiction**  

1. you want to prove some statement Φ
2. you start by assuming ¬Φ
3. you reason until you reach a conclusion that is false  
often by deducing both Φ and ¬Φ for some Φ, i.e. 'p, q have no common factors' and 'p,q are both even'  
4. a true assumption cannot lead to a false conclusion
5. hence the assumption ¬Φ must be false  
6. in other words, Φ must be true  

What can we conclude from a proof of Θ=>Φ where Φ is false?

    Θ  Φ  Θ=>Φ
    T  T   T
    T  F   F
    F  T   T
    F  F   T    <-  Θ is F  


Prove 'theorem: √2 is irrational'  

    proof: (assumption) assume on the contrary, √2 is rational  
           (unfolding) then, there are natural numbers p,q with no common factors, such that √2=p/q  
           (reasoning) squarring: 2=p^2/q^2
           (reasoning) rearranging: 2q^2=p^2  
           (reasoning) so p^2 is even, hence p is even  
           (reasoning) so p=2r for some r  
           (reasoning) substituting for p: 2q^2=(2r)^2=4r^2  
           (reasoning) canceling: q^2=2r^2  
           (reasoning) so q^2 is even  
           (reasoning) so q is even
           (reasoning) so p and q are both even
           (reasoning) but this is impossible, since p,q have no common factors  
           (conclusion) hence the original assumption that √2 is rational must be false  
           (conclusion) hence √2 must be irrational ■




**Proving Conditionals**  

We want to prove a conditional φ=>ψ  
We know this is True if φ is False, so we can assume φ is True  

To prove it, we assume φ and deduce ψ  

For example, let x, y be variables for real numbers, and prove:  

[x,y are rational] => [x+y is rational]  

    proof: (assumption) assume x,y are rational
           (reasoning)  then there are integers p,q,n,m such that x=p/m, y=q/n  
           (reasoning)  then x+y=p/m+q/n=(pn+qm)/(mn)
           (conclusion) hence x+y is rational ■


quiz:  
let r,s be irrational numbers, say which of the following are necessarily irrational  
- r+3  *
- 5r   *
- r+s
- rs  
- √r   *


**Conditionals involving quantifiers are sometimes best handled by proving the Contrapositive**  

To prove φ=>ψ, prove (¬ψ)=>(¬φ)  

Example, prove [sinΘ!=0]=>(∀n∈N)(Θ!=nπ)  

    proof: the statement is equivalent to ¬(∀n∈N)(Θ!=nπ)=>¬sinΘ!=0
           in positive form: ∃n∈N(Θ=nπ)=>sinΘ=0  
           this is True!  
           this proves the desired result! ■

To prove biconditional φ<=>ψ, we generally construct two proofs: φ=>ψ, ψ=>φ  

Occasionally, it is easier to prove the two conditionals:  
φ=>ψ and ¬φ=>¬ψ  


### Proofs with Quantifiers  

To prove ∃xA(x)  

the obvious way is to find an object a for which A(a)  

i.e. to show there is an irrational number, prove that √2 is irrational  

**However**, this does not always work. Sometimes we use indirect proofs  

**Method of proof by cases**

**Theorem**: There are irrationals r,s such that r^s is rational  

    Proof: we consider 2 cases  
           case 1: if √2^(√2) is rational, take r=s=√2
           case 2: if √2^(√2) is irrational, take r=√2^(√2), s=√2
                   then r^s=[√2^(√2)]^√2=√2^2=2   
           the theorem is proved ■


To prove ∀xA(x)

one way is to take an arbitrary x and show that is satisfies A(x)  

i.e. to prove ∀n∃m(m>n^2), n,m∈N  

    proof: let n be an arbitrary natural number
           set m=n^2+1
           then m>n^2
           this proves ∃m(m>n^2)  
           if follows that ∀n∃m(m>n^2) ■

    note: this works because the n is arbitrary  

another approach is to use the **method of contradiction**  

To prove ∀xA(x), assume ¬∀xA(x), this is equivalent to ∃x¬A(x)  

let c be an object such that ¬A(c), now reason with c (and the fact that ¬A(c)) to derive a contradicition  

quiz: is the following proof valid? NO!

To prove: (∀x>0)(∃y>0)[y<x], where variables range over rational numbers. (this says that, given any positive rational, you can always find a smaller one)  

to prove it, pick a positive rational p arbitrarily, say p=0.001  
take q=0.0001. Thus 0<q<p  
since our choice of p was arbitrary, this proves the desired result  

'pick a positive rational p arbitrarily' is not the same as 'let p be arbitrary' because once the choice is made it's specific  

when letting p be arbitrary, you don't know anything about p  

**Induction**  

to prove statements of the form ∀nA(n), where n ranges over the natural numbers

i.e. prove that 1+2+...+n=(1/2)n(n+1)

    proof: step 1 check the first few cases  
           n=1 1=(1/2)1(1+1)=1
           n=2 1+2=(1/2)2(3)=3
           n=3 1+2+3=(1/2)3(4)=6
           this is not a proof, beware of jumping to conclusions!

[Euler 1772] consider the formula p(n)=n^2-n+41  
all values of p(n) for n=1,2,...etc are prime numbers until you reach n=40  
p(41)=1681=41^2  
if the formula is p(n)=n^2+n+41, prime for n=1,...,39  
p(40)=40^2+40+41=40(40+1)+41=41^2  

**Principle of Mathematical Induction**  

to prove ∀nA(n), establish the following 2 statements  

1. A(1) (initial case, initial step)
2. (∀n)[A(n)=>A(n+1)] (induction step)  

intuitively, this gives ∀nA(n) as follows:  
by step 1, A(1)   
by step 2, A(1)=>A(2)  
so from A(1) we can conclude A(2)   
by A(2) and the induction step, we can conclude A(3), etc  

**You need an axiom (or principle) to make this work, called the 'principle of mathematical induction'**  
the PMI is what tells you that step 1 and 2 above yield ∀nA(n)  

Theorem: for any n, 1+2+3+...+n=(1/2)n(n+1)  

A theorem means a rigorous proof can be drived  
proof is to explain why something is true  

    proof: by mathematical induction  
           for n=1, the identity reduces to 1=(1/2)1(2)=1  
           which is true, since both sides equal 1  
           assume the identity holds for n
           i.e. 1+2+...+n=(1/2)n(n+1) (*)
           [want to deduce: 1+2+...+n+1=(1/2)(n+1)((n+1)+1)]
           add (n+1) to both sides of (*):
           1+2+...+n+(n+1)=(1/2)n(n+1)+(n+1)
                          =(1/2)[n(n+1)+2(n+1)]
                          =(1/2)[n^2+n+2n+2]
                          =(1/2)[n^2+3n+2]
                          =(1/2)[(n+1)(n+2)]
                          =(1/2)[(n+1)(n+1+1)]
           which is the identity with n+1 in place of n
           hence, by PMI, the identity holds for all n ■


Expressions of the form P(x)=R(x), where P(x), R(x) are formulas involving x, are sometimes called 'equations' and sometimes 'identities'  
Strictly speaking, the expression is an equation if it can be solved for x  
and the expression is an identity if it is valid for all x  


**Theorem**: if x>0, then for any natural number n, (1+x)^(n+1)>1+(n+1)x  

    proof: by mathematical induction  
           let A(n) be the statement (1+x)^(n+1)>1+(n+1)x
           we will prove ∀nA(n)
           A(1) is the statement (1+x)^2>1+2x  
           by the binomial theorem  
           (1+x)^2=1+2x+x^2>1+2x (since x^2>0)     
           to prove ∀n[A(n)=>A(n+1)]
           pick an arbitrary n and prove A(n)=>A(n+1)
           we assume A(n) and deduce A(n+1)
           A(n): (1+x)^(n+1)>1+(n+1)x
           A(n+1): (1+x)^(n+2)>1+(n+2)x
           (1+x)^(n+2)=(1+x)(1+x)^(n+1)>(1+x)[1+(n+1)x]
                                       =1+(n+1)x+x+(n+1)x^2
                                       =1+(n+2)x+(n+1)x^2
                                       >1+(n+2)x
           this proves A(n+1)
           the theorem follows by induction ■

Induction - Summary  
1. you want to prove that some statement A(n) is valid for all natural number n
2. first prove A(1). usually a matter of simple observation
3. given an algebraic argument to establish the conditional A(n)=>A(n+1): reduce A(n+1) to form where you can use A(n)
4. conclusion: by the PMI (principle of mathematical induction), this proves ∀nA(n)

**Common Variant of Induction**

We sometimes need to prove a statement of the form (∀n>=n_0)A(n)  
step 1 is to verify A(n_0) [A(1) may not be true]  
step induction is to prove (∀n>=n_0)[A(n)=>A(n+1)]

**The fundamental theorom of Arithmetic**  

**Theorem**: every natural number greater than 1 is either prime or a product of primes  

    proof: by induction  
           the induction statement A(n) is:
           ∀m[2<=m<=n => m is either a prime or a product of primes]
           for n=2, A(2) says '2 is either prime or a product of primes' True!!
           assume A(n), and deduce A(n+1)
           let m be a natural number, 2<=m<=n+1
           if m<=n, then by A(n), m is either a prime or a product of primes  
           if m=n+1 and if n+1 is prime, then m is prime  
           if m=n+1 and n+1 is not prime, then there are natural numbers p,q such that 1<p,q<n+1 and n+1=pq
           since 2<=p,q<=n, by A(n), p,q are either primes or products of primes  
           hence n+1 is a product of primes
           the theorem follows by induction ■    

### Number Theory  

Arithmetic is about calculation  
Number theory examines the abstract properties of numbers  

**Division Theorem**: let a,b be integers, b>0. Then there are unique integers q,r such that a=q*b+r and 0<=r<b  

    proof: we prove existence first, then uniqueness  
           existence: look at all non-negative integers of the form a-kb
           where k is an integer, and show that one of them is less than b   
           step 1 to show that such integers do exist  
           take k=-|a|, then since b>=1,
           a-kb=a+|a|b>=a+|a|>=0
           let r be the smallest such integer  
           let q be the value of k for which it occurs  
           i.e. r=a-qb
           to complete the proof, we show that r<b  
           suppose on the contrary that r>=b
           then a-(q+1)b=a-qb-b=r-b>=0  
           thus a-(q+1)b is a non-negative integer of the form a-kb  
           but r is the smallest such and yet a-(q+1)b<a-qb=r  
           Contradiction!
           hence r<b  
           this proves existence!

           uniqueness. we show that if there are two representations of a,
           a=qb+r=q'b+r', 0<=r,r'<b  
           then r=r' and q=q'  
           rearranging the above equations
           (1) r'-r=b(q-q')
           taking absolute values in (1)
           (2) |r'-r|=b|q-q'|
           but -b<-r<=0 and 0<=r'<b, so -b<r'-r<b
           i.e. |r'-r|<b
           so by (2) b|q-q'|<b
           hence |q-q'|<1
           hence q=q'
           then by (1), r=r'  
           this proves uniqueness ■


**Hilbert's Hotel** [David Hilbert 1862-1943]

Hilbert's Hotel is a thought experiment which illustrates a counterintuitive property of infinite sets. It is demonstrated that a fully occupied hotel with infinitely many rooms may still accommodate additional guests, even infinitely many of them, and this process may be repeated infinitely often.

Examples like Hilbert's hotel demonstrate the importance of rigorous proofs in mathematics

when proving obvious results like Division Theorem, it seems frivolous, however, when concerning 'infinity', rigorous proof is the only thing we can rely on  

**General Division Theorem**: let a,b be integers, b!=0, then there are unique integers q,r such that a=qb+r and 0<=r<\|b\|

    proof: we have proved the result in the case b>0
           so assume b<0
           then since |b|>0, the previous theorem tells us
           there are unique integers q',r'
           such that a=q'|b|+r' and 0<=r'<|b|
           let q=-q', r=r'
           then since |b|=-b  
           we get a=qb+r, 0<=r<|b| ■

officially, the number q is called the **quotient** of a by b  
and r is called the **remainder**  

**Divisibility**

if division of a by b produces a remainder r=0  
we say a is **divisible** by b  
hence a is divisible by b iff there is an integer q such that a=bq  
i.e. 45 is divisible by 9, but 44 is not divisible by 9  

    notation: b|a denotes a is divisible by b  
    warning: b\|a is not the same b/a  
             b\|a is a relationship between a and b, which is True or False  
             b/a denotes a rational number, the result of dividing b by a in the rational numbers   

**Definition of Prime Number**  
a prime number is an integer p>1 that is divisible only by 1 and p  

quiz:

    b|a iff ∃q[a=bq]

    0|7  F   9|0   T   0|0  F   1|1   T    
    7|44 F   7|-42 T  -7|49 T  -7|-56 T


**Theorem**: let a,b,c,d be integers, a≠0, then:  
1. a\|0, a\|a  
2. a\|1 iff a=+-1
3. if a\|b and c\|d, then ac\|bd for c≠0  
4. if a\|b and b\|c, then a\|c for b≠0
5. [a\|b and b\|a] iff a=+-b  
6. if a\|b and b≠0, then \|a\|<=\|b\|
7. if a\|b and a\|c, then a\|(bx+cy) for any integers x,y  

        proof: 4. ∃d,e such that b=da, c=eb
               so c=(de)a, hence a|c ■

        proof: 6. ∃d such that b=da  
               so |b|=|d||a|
               since b≠0, |d|>=1
               so |a|<=|b| ■

**Fundamental Theorem of Arithmetic**  

**Theorem**: every natural number greater than 1 is either prime or can be expressed as a product of primes in a way that is unique except for their order (in which they are written)  

i.e. 4=2x2=2^2, 6=2x3, 8=2^3, 9=3^2, 10=2x5, 12=2^2x3, ..., 3366=2x3^2x11x17, ...

The expression of a number as a product of primes is called its **prime decomposition**  

The uniqueness proof will require **'Euclid's Lemma'**: if a prime p divides a product ab, then p divides at least one of a,b  

    proof: existence. prove it by contradiction  
           suppose there were a composite number (i.e. non-prime) that could not be written as a product of primes  
           then there must be a smallest such number, call it n
           since n is not prime, there are numbers a,b with 1<a,b<n  
           such that n=ab  
           if a,b are primes, then n=ab is a prime decomposition of n  
           and we have a contradiction
           (because n is chosen to not have a prime decomposition)  
           if either of a,b is composite, then because it is less than n, it must be a product of primes
           so by replacing one or both of a,b by its prime decomposition in n=ab  
           we get a prime decomposition of n
           and again, we have a contradiction  
           this proves the existence  

           uniqueness. to prove the prime decomposition of any natural number n>1 is unique up to the ordering of the primes  
           proof by contradiction
           assume there is a number n>1 that has two (or more) different prime decomposition  
           let n be the smallest such number  
           let n=p1p2...pr=q1q2...q2 (*) be two different prime decomposition of n  
           since p1 divides (q1)(q2...qs)
           by Euclid's Lemma, either p1|q1 or p1|(q2...qs)
           hence, either p1=q1, or else p1=qi for some i between 2 and s  
           but then we can delete p1 and qi from the two decomposition in (*)
           which gives us a number smaller than n that has two different prime decompositions
           contrary to the choice of n as the smallest such
           this proves uniqueness ■







### Some Definitions  

Integers include the operations of +-x  
Rationals include the operations of +-x/  

0 is not a natural number

1 is not a prime number

A **prime number** is a positive integer n, greater than 1, whose only exact divisors are 1 and n

A **rational number** is a number that can be expressed as the quotient or fraction p/q of two integers, a numerator p and a non-zero denominator q  




### Theorem, Lemma, etc  

Theorem — a mathematical statement that is proved using rigorous mathematical reasoning.  In a mathematical paper, the term theorem is often reserved for the most important results.

Lemma — a minor result whose sole purpose is to help in proving a theorem.  It is a stepping stone on the path to proving a theorem. Very occasionally lemmas can take on a life of their own (Zorn’s lemma, Urysohn’s lemma, Burnside’s lemma, Sperner’s lemma).

Corollary — a result in which the (usually short) proof relies heavily on a given theorem (we often say that “this is a corollary of Theorem A”).

Proposition — a proved and often interesting result, but generally less important than a theorem.

Conjecture — a statement that is unproved, but is believed to be true (Collatz conjecture, Goldbach conjecture, twin prime conjecture).




### Reference

[The wobbly Table Theorem](http://people.math.harvard.edu/~knill/teaching/math1a_2011/exhibits/wobblytable/#:~:text=The%20wobbly%20table%20theorem%3A%20you,depends%20on%20the%20angle%20x.)

https://math.stackexchange.com/questions/2425167/fixing-a-wobbly-table-revisited

https://b-ok.asia/book/2665796/97e675?dsource=recommend

https://www.coursera.org/learn/mathematical-thinking/discussions

[What is the difference between a theorem, a lemma, and a corollary?](https://divisbyzero.com/2008/09/22/what-is-the-difference-between-a-theorem-a-lemma-and-a-corollary/)
