---
layout: single
type: posts
title:  "Eligibility Traces"
date:   2020-4-27 16:22:25 +0900
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

### Definition

- bridge TD to Monte Carlo methods (forward view)
- a temporary record of the occurrence of an event, such as the visiting of a state of the taking of an action (backward view)  

The trace marks the memory parameters associated with the event as eligible for undergoing learning changes  

TD 1 step:

    R_{t} = r_{t+1} + γV_{t}(s_{t+1})

TD 2 steps:

    R_{t} = r_{t+1} + γr_{t+2} + γ^2V_{t}(s_{t+2})

TD n steps:

    R_{t} = r_{t+1} + γr_{t+2} + γ^2r_{t+3} + ... + γ^(n-1)r_{t+n} + γ^nV_{t}(s_{t+n})

Monte Carlo:

    R_{t} = r_{t+1} + γr_{t+2} + γ^2r_{t+3} + ... + γ^(T-t-1)r_{T}




### Reference

[Sutton 1st 7 Eligibility Traces](http://incompleteideas.net/book/ebook/node72.html)  
[](https://www.tu-chemnitz.de/informatik/KI/scripts/ws0910/ml09_7.pdf)
