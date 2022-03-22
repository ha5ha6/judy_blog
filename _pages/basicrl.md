---
layout: single
title: Basic Reinforcement Learning
permalink: "/basicrl/"
author_profile: true
#breadcrumbs: true

author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
usemathjax: true
---

### finite MDP

**MDP**: a classical formalization of sequential decision making, where actions influence subsequent situations or states

**Delayed reward**:

**Agent**: the learner and decision maker who produce actions

**Env**: dynamics which provide states and rewards

**Discrete Time Step**: $t=0,1,2,3,...$

    Env --- r,s ---> Agent
     |                 |
     |<------ a -------|





### Preliminaries

$$\mathcal{S}, \mathcal{A}$$ - state and action space

$$\mathbb{S}$$


### Implementation

```python
def sigmoid(x):
   return 1./(1.+np.exp(-x))

```
