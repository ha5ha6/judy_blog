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

**Energy function** measures the "goodness"/"badness" of each possible configuration of X and Y, and the output number can be interpreted as the degree of **compatibility** between the values of X and Y.  
















### Reference

[1] LeCun, Yann, et al. "A tutorial on energy-based learning." Predicting structured data 1.0 (2006).
