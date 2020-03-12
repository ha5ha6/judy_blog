---
layout: single
type: posts
title:  "Operators in RL"
date:   2020-3-4 15:34:25 +0900
related: true
categories: RL-Basic
tags:
  #- Index
  - Reinforcement Learning
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Background

There is a fundamental tension in decision making between choosing the action that has highest expected utility and avoiding 'starving' the other actions.  

Related context:
- exploration-exploitation dilemma [Thrun 1992]
- non-stationary decision problems [Sutton 1990]
- when interpreting observed decisions [Baker et al 2007]

softmax operator can be used for
- value-function optimization
- action selection policies

Common operators:

    max (X) = max x_i
              1~n

                   n
    mean (X) = 1/n Σ x_i
                   1

    eps_ε (X) = ε mean(X) + (1-ε) max(X)

                  Σ_n x_i*exp(βx_i)
    boltz_β (X) = ------------------
                    Σ_n exp(βx_i)

    β -> ∞, boltz_β (X) -> max (X)
    β -> 0, boltz_β (X) -> mean (X)

SARSA is known to converge
- in the tabular setting using ε-greedy [Littman & Szepesvari 1996]
- under decreasing exploration [Singh et al 2000]
- to a region in the function approximation setting [Gordon 2001]

Optimal Bellman Q:

    Q*(s,a) = r(s,a) + Σ γ p(s'|s,a) max Q*(s',a')
                     s'∈S             a'

Regardless of initial value of Q^, Q^ converges to Q*:

    Q^(s,a) <- r(s,a) + γ Σ (s'|s,a) max Q^(s',a')
                        s'∈S          a'

**Generalized Value Iteration** [Littman & Szepesvari 1996]: replace max operator to ⨂:  

    Q^(s,a) <- r(s,a) + γ Σ (s'|s,a) ⨂ Q^(s',a')
                        s'∈S         a'

**Convergence of GVI to a unique fixed point follows if operator ⨂ is a non-expansion w.r.t the infinity norm**:

    |⨂Q^(s,a)-⨂Q^'(s,a)| ≤ max |Q^(s,a)-Q^'(s,a)|
     a         a             a

**max, mean, eps operators are non-expansions**, therefore each of these operators can play the role of ⨂ in GVI, resulting in convergence to the corresponding unique fixed point  

boltz operator is not a non-expansion, so it has multiple fixed points and ultimately leads to a misbehavior in learning and planning  

**Mellow Max** operator, an alternative softmax operator:

                log(1/n Σ_n exp(wx_i))
    MM_w (X) = ------------------------
                          w

    w -> ∞, MM_w (X) -> max (X)
    w -> -∞, MM_w (X) -> min (X)
    w -> 0, MM_x (X) -> mean (X)

MM can be derived from information theoretical principles as a way of regularizing policies with a cost function defined by KL divergence [Todorov 2006] [Rubin et al 2012] [Fox et al 2016]  

MM follows the non-expansion property inside the infinity norm proof, therefore converges to a fixed point  






### Reference

[1] Asadi, Kavosh, and Michael L. Littman. "An alternative softmax operator for reinforcement learning." Proceedings of the 34th International Conference on Machine Learning-Volume 70. JMLR. org, 2017.

[Thrun 1992]  
[Sutton 1990]  
[Baker et al 2007]  

SARSA convergence:  
[Littman & Szepesvari 1996]  
[Singh et al 2000]  
[Gordon 2001]  

SARSA variant convergence:  
[Perkins & Precup 2002]  
[Baird & Moore 1999]  
[Van Seijen et al 2009]  
