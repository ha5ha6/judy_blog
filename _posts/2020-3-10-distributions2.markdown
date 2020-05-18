---
layout: single
type: posts
title:  "Distributions II"
date:   2020-3-10 22:22:25 +0900
related: true
categories: ML-Basic
tags:
  #- Index
  - Machine Learning
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Multinomial Variables

K-dimensional vector X with one x_k equals 1, others equal 0, i.e. X=(0,1,0,0,0)'  
Note: Σ_K x_k=1

If we denote the probability of x_k=1 by the parameter μ_k, i.e. x_2=1 with μ_2=0.3  

              K           i.e.
    p(x|μ_) = ∏ μ_k^(x_k) = μ_1^x_1 * μ_2^x_2 * μ_3^x_3 * μ_4^x_4 * μ_5^x_5
             k=1
                          = μ_1^0 * 0.3^1 * μ_3^0 * μ_4^0 * μ_5^0 = 0.3

    μ_ = (μ_1,μ_2,...,μ_K)'

    constraint:
    μ_k ≥ 0 and Σ_K μ_k=1

The distribution p(x\|μ_) can be regarded as a generalization of the Bernoulli distribution to more than two outcomes  

    p(x|μ_) is normalized:
    Σ_x p(x|μ_) = Σ_K μ_k = 1

    mean: E[x|μ_] = Σ_x p(x|μ_)x = (μ_1,μ_2,...,μ_k)' = μ_

Suppose we have a data set D of N independent observations D={x_1,…x_N}, the likelihood function is

              N  K               K                  K
    p(D|μ_) = ∏  ∏  μ_k^(x_nk) = ∏ μ_k^(Σ_N x_nk) = ∏ μ_k^(m_k)
             n=1k=1

    m_k = Σ_N x_nk - the number of observations of x_k=1 <- sufficient statistics for this distribution

To find the maximum likelihood solution for μ_, we need to max ln p(D\|μ_) w.r.t μ_k with the constraint that μ_k must sum up to 1  

This can be done by using Lagrange multiplier λ

The result is

    μ_k  = m_k/N  - the fraction of the N observations for which x_k=1
      ML

### Multinomial

                             (    N    ) K
    Mult(m1,m2,...mK|μ_,N) = (         ) ∏ μ_k^(m_k)
                             (m1m2...mK)k=1

    (    N    )        N!
    (         ) = ------------
    (m1m2...mK)   m1!m2!...mK!

    Σ_K m_k = N

### Dirichlet

The prior for {μ_k}

By inspection of the form of the multinomial distribution, we see that the conjugate prior is given by

               K
    p(μ_|α_) ∝ ∏  μ_k^(α_k-1)
              k=1

    Constraint:
    0≤μ_k≤1, and Σ_K μ_k =1

    Parameter:
    α_= (α_1,α_2,...,α_K)'

Note: because of the summation constraint, the distribution over the space of the {μ_k} is confined to a simplex of dimensionality K-1

The normalized form of Dirichlet is:

                     Γ(α_0)      K
    Dir(μ_|α_) = --------------- ∏  μ_k^(α_k-1)
                 Γ(α_1)...Γ(α_K)k=1

    α_0 = Σ_K α_k

Prior: Dir(μ_|α_)  
Likelihood: Mult(m1,m2,...mK|μ_,N)  
Posterior:

                                   K
    p(μ_|D,α_) ∝ p(D|μ_)p(μ_|α_) ∝ ∏  μ_k^(α_k+m_k-1)
                                  k=1

The posterior again takes the form of Dirichlet distribution  
=> Dirichelet is indeed a conjugate prior for the multinomial  
Then the normalization coefficient is  

                                       Γ(α_0)+N       K
    p(μ_|D,α_) =  Dir(μ_|α_+m_) = ------------------- ∏  μ_k^(α_k+m_k-1)
                                  Γ(α1+m1)...Γ(αK+mK)

    m_ = (m_1,...,m_K)'

    
### Reference

Bishop Chapter 2 Probability Distributions  
[Visualizing Dirichlet Distributions with Matplotlib](http://blog.bogatron.net/blog/2014/02/02/visualizing-dirichlet-distributions/)  
[Categorical data / Multinomial distribution](http://christianherta.de/lehre/dataScience/bayesian/Multinomial-Dirichlet.slides.php)
