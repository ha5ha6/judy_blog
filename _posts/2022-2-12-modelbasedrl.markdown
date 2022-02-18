---
layout: single
type: posts
title:  "Model-based RL"
date:   2022-2-12 12:04:25 +0900
related: true
categories: Literature
tags:
  #- Index
  - Reinforcement Learning
  - Model-based
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Background

model free

(-) high sample complexity

(-) need of sampling unsafe outcomes

(-) stability and reproducibility

model based RL for

- robotic control

- safety for human and their own

- human-AI interaction, minimizing the risks

- games, alpha go

- science, chemical synthesis plan

- operations research, energy allocation, low cost

### what is model?

def: a model is a representation that explicitly encodes knowledge about the structure of the environment and task

- a transition/dynamics model: s_(t+1)=f(s_t,a_t)

- a model of rewards: r_(t+1)=f(s_t,a_t)

- an inverse transition/dynamics model: a_t=f^(-1)(s_t,s_(t+1))

- a model of distance: d_ij=f_d(s_i,s_j)

- a model of future returns: G_t=Q(s_t,a_t) or =V(s_t)













### Refs

https://sites.google.com/view/mbrl-tutorial

https://kargarisaac.github.io/blog/reinforcement%20learning/mbrl/jupyter/2020/10/26/mbrl.html
