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
in all other circumstances φ =/> ψ is F  
in all other circumstances φ => ψ is T  

### Reference

https://b-ok.asia/book/2665796/97e675?dsource=recommend

https://www.coursera.org/learn/mathematical-thinking/discussions
