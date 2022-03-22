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

**Agent**: the learner or decision maker who produce actions

**Env**: environment dynamics which provide states and rewards

**Discrete Time Step**: $$t=0,1,2,3,...$$

    Env --- r,s ---> Agent
     |                 |
     |<------ a -------|

**finite MDP**: the sets of states, actions, and rewards all have a finite number of elements

### Preliminaries

$$\mathcal{S}, \mathcal{A}$$ - state and action space

$$\mathcal{R}(s,a)$$ - reward function

$$\mathcal{H}=[s_0,a_0,r_0,...,s_t,a_t,r_t,s_{t+1},...,s_T,a_T,r_T]$$ - history trajectory

$$p(s',r \| s,a) \triangleq Pr(s_{t+1}=s',r_t=r \| s_t=s,a_t=a)$$ for all $$s',s \in \mathcal{S}, r \in \mathcal{R}, a \in \mathcal{A}$$

or remove the reward:

$$p(s',r \| s,a) \triangleq Pr(s_{t+1}=s' \| s_t=s,a_t=a)$$ for all $$s',s \in \mathcal{S}, a \in \mathcal{A}$$



$$\mathbb{S}$$


### Implementation

```python
def sigmoid(x):
   return 1./(1.+np.exp(-x))

```
