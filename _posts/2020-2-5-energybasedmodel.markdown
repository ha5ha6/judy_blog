---
layout: single
type: posts
title:  "Energy-based Model"
date:   2020-2-5 14:59:25 +0900
related: true
categories: ML-Basic
tags:
  #- Index
  - EBM
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Definition

**The main purpose of statistical modeling and machine learning is to encode dependencies between variables. By capturing those dependencies, a model can be used to answer questions about the values of unknown variables given the values of known variables.**

**Energy-Based Models** (EBMs) capture dependencies by associating a scalar energy (a measure of compatibility) to each configuration of the variables.

**Inference** consists in setting the value of observed variables and finding values of the remaining variables that minimize the energy.  

**Learning** consists in finding an energy function that associates low energies to correct values of the remaining variables, and higher energies to incorrect values.  

A **loss functional**, minimized during learning, is used to measure the quality of the available energy functions.  

With this common **inference/learning framework**, the wide choice of **energy functions and loss functionals** allows for the design of many types of **statistical models**, both **probabilistic and non-probabilistic**.

**Applications**:  

non-probabilistic training of

- graphical models
- other structured models  

probabilistic estimation for

- prediction
- classification
- decision-making

**Because** there is no requirement for proper normalization, **energy-based approaches avoid the problems associated with estimating the normalization constant in probabilistic models**.

Example:

    X (observed variables, i.e. image pixels)
    Y (variables to be predicted, i.e. classification labels of 'Human','Animal','Car', ...)

    X,Y -> E(Y,X) (energy function)

              Energy (the lower the better)
    Human     ||||||
    Animal*   |||
    Car       |||||||||


### Energy-Based Inference  

Let us consider a model with two sets of variables, X and Y as above example.  

**Energy function E(Y,X)** measures the "goodness"/"badness" of each possible configuration of X and Y, and the output number can be interpreted as the degree of **compatibility** between the values of X and Y.  

Energy function also can be called:  
- contrast functions
- value functions
- negative log-likelihood functions  

Distinction:
- energy function - is minimized by the inference process
- loss functional - is minimized by the learning process  

Normally, the input X is given, and the model produces the answer Y  
Precisely, the model must produce the value Y*, from a set Y_, for which E(Y,X) is the smallest

    Y* = argmin E(Y,X)
          Y∈Y_

If Y_ is small, we can simply compute E(Y,X) for all possible Y∈Y_, and pick the smallest   
Sometime Y_ can be too large to make exhaustive search practical   

**Inference procedure** is employed to find the Y that minimizes E(Y,X), an approximate result, which may or may not be the global minimum of E(Y,X)  

The quality of inference procedure depends on the internal structure of the model, i.e.  
- gradient-based optimization <- if Y_ is continuous and E(Y,X) is smooth and well-behaved with respect to Y
- factor graphs inference, i.e. min-sum <- if Y is a collection of discrete variables and the energy function can be expressed as a factor graph
- dynamic programming, i.e. Viterbi algorithm or A* <- if each element of Y_ can be represented as a path in a weighted directed acyclic graph, then the energy for a particular Y is the sum of values on the edges and nodes along a particular path  

often occurs in sequence labeling problems i.e.
- sequence recognition
- handwriting recognition
- nlp
- biological sequence analysis (i.e. gene finding, protein folding prediction, etc)

other optimization procedures:
- continuous optimization, i.e. linear programming, quadratic programming
- non-linear or discrete optimization, i.e. simulated annealing, graph cuts, graph matching

when exact optimization is impractical, can resort to:
- approximate methods, i.e. methods use surrogate energy functions (i.e. variational methods)

**What questions can a model answer?**  

1. prediction, classification, decision-making - Which value of Y is most compatible with this X?
2. ranking - Is Y1 or Y2 more compatible with this X?
3. detection - Is this value of Y compatible with X?
4. conditional density estimation - What is the conditional probability distribution over Y_ given X?

**Situations**:
- X as a high-dimensional variable (image), Y as a discrete variable (label)
- the converse case of above, i.e. image restoration, computer graphics, speech and language production
- both X and Y are high-dimensional  

### Decision Making VS Probabilistic Modeling

In Decision Making:

Problem:  
Because energies are uncalibrated (measured in arbitrary units), combining two separately trained energy-based models is not straightforward  

Solution:  
the only consistent way to combine energies involves turning the collection of energies for all possible outputs into a normalized probability distribution  

**Gibbs distribution** - the simplest and most common method for turning a collection of arbitrary energies into a collection of numbers between 0 and 1 whose sum/integral is 1

               exp(-βE(Y,X))
    P(Y|X) = ------------------
              ∫ exp(-βE(y,X))
             y∈Y_

    β - an arbitrary positive constant akin to an inverse temperature
    ∫ exp(-βE(y,X)) - partition function  


Note:  
- Whether the numbers obtained this way are good probability estimates doesn't depend on how energies are turned into probabilities, but on how E(Y,X) is estimated from data.
- The above transformation of energies into probabilities is only possible if the integral ∫ exp(-βE(y,X)), y∈Y_ converges.  

Some situations that computing the partition function is intractable or outright impossible:
- when Y_ has high cardinality
- when Y_ is a high dimensional variable and the integral has no analytical solution

**Hence**, probabilistic modeling comes with a high price, and should be avoided when the application does not require it  

### Energy-Based Training: Architecture and Loss Function  

Training an EBM consists in **finding an energy function that produces the best Y for any X**.

The search for the best energy function is performed within a family of energy functions ε  

    ε = {E(W,Y,X): W∈W_}  

The **Architecture** of the EBM is the internal structure of the parameterized energy function E(W,Y,X).  

When X and Y are real vectors, ε could be
- as simple as linear combination of basis functions (as in the case of kernel methods)
- a set of neural net architectures and weight values  

One **advantage** of the EBMs is:  
it puts very little restrictions on the nature of ε

To train the model for prediction, classification, decision-making:  

Given a set of trainning samples, S={(X_i,Y_i):i=1...P}  
X_i: the input for i-th  
Y_i: the corresponding desired answer  

**Loss functional** (i.e. a function of function denoted L(E,S)) - In order to find the best energy function in the family ε, we need a way to access the quality of any particular energy function, based on **the training set and our prior knowledge about the task**

For simplicity, we denote it L(W,S) and call it the **loss function**

(Loss function is an evaluation function of energy function)

The learning problem is imple to find the W that minimizes the loss:

    W* = min L(W,S)
         W∈W_

For most cases, the loss functional is defined as:  

                  P
    L(E,S) = 1/P  Σ  { l(Y_i, E(W,Y_,X_i)) + R(W) }
                 i=1

    l(Y_i, E(W,Y_,X_i)) - per-sample loss functional  
    R(W) - regularizer, can be used to embed prior knowledge about which energy functions in our family are preferable to others  

**Per-sample loss functional** should assign a low loss to well-behaved energy functions (functions that give the lowest energy to the correct answer and higher energy to all other answers.  

Suppose:
- Y_i - the correct answer
- Y_i* - the answer produced by the model, i.e. the answer with the lowest energy
- Y_i' - the most offending incorrect answer, i.e. the answer that has the lowest energy among all the incorrect answers  

With a properly designed loss function, the **learning process** should have the effect of "pushing down" on E(W,Y_i,X_i) and "pulling up" on the incorrect energies on E(W,Y_i',X_i)

Different loss functions do this in different ways.

**Summary**  

Given a training set S, building and training an EBM involves designing four components:  
1. the architecture: the internal structure of E(W,Y,X)
2. the inference algorithm: the method for finding a value of Y that minimizes E(W,Y,X) for any given X
3. the loss function: L(W,S) measures the quality of an energy function using the training set  
4. the learning algorithm: the method for finding a W that minimizes the loss functional over the family of energy functions ε, given the training set  

**Choosing the combinations of architecture and loss functions that can learn effectively and efficiently is critical to the energy-based approach!!**

### Loss Functions

**Energy Loss**:  
For a training sample (X_i,Y_i), the per-sample loss is:    

    L ( Y_i, E(W,Y_,X_i) ) = E( W,Y_i,X_i )

This loss function:  
(-) cannot be used to train most architectures: while this loss will push down on the energy of the desired answer, it will not pull up on any other energy  

_Collapsed Solution_ - the energy is constant and equal to zero  

The energy loss will only work with architectures that are designed in such a way that pushing down on E(W,Y_i,X_i) will automatically make the energies of the other answers larger  
i.e. E ( W,Y_i,X_i )=\|\| Y_i - G(W,X_i) \|\|^2 <- regression with MSE with G being the regression function  

**Generalized Perceptron Loss**:  
For a training sample (X_i,Y_i) is defined as:  

    L ( Y_i, E(W,Y_,X_i) ) = E( W,Y_i,X_i ) - min E( W,Y,X_i )
                                              Y∈Y_

This loss function:  
(+) always positive  
(+) minimizing this loss has the effect of pushing down on E(W,Y_i,X_i), while pulling up on the energy of the answer produced by the model    
(-) there is no mechanism for creating an energy gap between the correct answer and the incorrect ones    
(-) hence, may produce flat energy surfaces   

Can apply on models with structured outputs such as
- handwriting recognition [LeCun et al 1998a]
- parts of speech tagging [Collins, 2002]

**Generalized Margin Loss**

- the hinge loss  
- log loss
- LVQ2 loss
- minimum classification error loss  
- square-square loss  
- square-exponential loss  

All use some form of margin to create an energy gap between the correct answers and the incorrect answers.

**Definition 1**: Let Y be a discrete variable.  
For a training sample (X_i,Y_i), the most offending incorrect answer Y_i' is the answer that has the lowest energy among all answers that are incorrect:

    Y_i' =   argmin       E(W,Y,X_i)
          Y∈Y_ & Y!=Y_i

**Definition 2**: Let Y be a continuous variable.  
For a training sample (X_i,Y_i), the most offending incorrect answer Y_i' is the answer that has the lowest energy among all answers that are at least ε away from the correct answer:

    Y_i' =     argmin           E(W,Y,X_i)
          Y∈Y_, ||Y-Y_i||>ε

The **generalized margin loss**:  

    L (W,Y_i,X_i) = Qm ( E(W,Y_i,X_i), E(W,Y_i',X_i) )  

    m - margin, a positive parameter
    Qm - a convex function whose gradient has a positive dot product with the vector [1,-1] in the region where E(W,Y_i,X_i)+m>E(W,Y_i',X_i)  

In other words, the loss surface is slanted toward low values of E(W,Y_i,X_i) and high values of E(W,Y_i',X_i) wherever E(W,Y_i,X_i) is not smaller than E(W,Y_i',X_i) by at least m.  

Two special cases:  
**Hinge Loss**:  

    L (W,Y_i,X_i) = max ( 0, m + E(W,Y_i,X_i) - E(W,Y_i',X_i) )

**Log Loss**: a "soft" version of the hinge loss with an infinite margin  

    L (W,Y_i,X_i) = log ( 1 + exp ( E(W,Y_i,X_i)-E(W,Y_i',X_i) ) )


### Simple Architectures  

classification and regression -> EBMs

**Regression**:

    E(W,Y,X) = 1/2 ||Gw(X)-Y||^2   

            N
    Gw(X) = Σ wkφk(X) = W' Φ(X)    
           k=1

                    P                     P
    L(W,S) = 1/P  Σ E(W,Y_i,X_i) = 1/2P Σ ||Gw(X_i)-Y_i||^2
                   i=1                   i=1

                       P
    W* = argmin [ 1/2P Σ || W'Φ(X_i) - Y_i ||^2]
                      i=1

    L(W,S) - standard regression with mean-squared error
    Gw - regression function
    φk(X) - N features
    φk(X)=K(X,X_k), k=1..P, K - kernel function  
    wk - N parameter vector W
    Y - the variable to be predicted




### Reference

[1] LeCun, Yann, et al. "A tutorial on energy-based learning." Predicting structured data 1.0 (2006).
