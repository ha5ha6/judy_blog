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
    in symbols, ¬∀xA(x)

show that ¬[∃xA(x)] <=> ∀x[¬A(x)]

    proof of =>:

    assume ¬[∃xA(x)],
    if it is not the case that there exists one x that satisfies A(x)
    it means, for all x, A(x) is false  
    in symbols, ∀x[¬A(x)]

    proof of <=:

    assume ∀x[¬A(x)],
    if for all x, no A(x) is true, it means there doesn't exist one x that satisfies A(x)  
    in symbols, ¬[∃xA(x)]  


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






### Reference

[The wobbly Table Theorem](http://people.math.harvard.edu/~knill/teaching/math1a_2011/exhibits/wobblytable/#:~:text=The%20wobbly%20table%20theorem%3A%20you,depends%20on%20the%20angle%20x.)

https://math.stackexchange.com/questions/2425167/fixing-a-wobbly-table-revisited

https://b-ok.asia/book/2665796/97e675?dsource=recommend

https://www.coursera.org/learn/mathematical-thinking/discussions
