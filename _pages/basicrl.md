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

<span style="font-family:Arial; font-size:0.9em;">
**MDP**: a classical formalization of sequential decision making, where actions influence subsequent situations or states

<span style="font-family:Arial; font-size:0.9em;">
**Delayed reward**:

<span style="font-family:Arial; font-size:0.9em;">
**Agent**: the learner or decision maker who produce actions

<span style="font-family:Arial; font-size:0.9em;">
**Env**: environment dynamics which provide states and rewards

<span style="font-family:Arial; font-size:0.9em;">
**Discrete Time Step**: $$t=0,1,2,3,...$$

    Env --- r,s ---> Agent
     |                 |
     |<------ a -------|

<span style="font-family:Arial; font-size:0.9em;">
**finite**: the sets of states, actions, and rewards all have a finite number of elements

<span style="font-family:Arial; font-size:0.9em;">
**Markov Property**: the probability of each possible value for $$s_t,r_t$$ depends only on the immediately preceding state and action $$s_{t-1}, a_{t-1}$$

<span style="font-family:Arial; font-size:0.9em;">
in another words: the current state include information about all aspects of the past


### Preliminaries

<span style="font-family:Arial; font-size:0.9em;">
$$\mathcal{S}, \mathcal{A}$$ - state and action space

<span style="font-family:Arial; font-size:0.9em;">
$$\mathcal{R}(s,a)$$ - reward function

<span style="font-family:Arial; font-size:0.9em;">
$$\mathcal{H}=[s_0,a_0,r_0,...,s_t,a_t,r_t,s_{t+1},...,s_T,a_T,r_T]$$ - history trajectory

<span style="font-family:Arial; font-size:0.9em;">
$$p(s' \mid s,a)$$ - state transition probability

<span style="font-family:Arial; font-size:0.9em;">
$$p(s' \mid s,a) \triangleq Pr(s_{t+1}=s' \mid s_t=s,a_t=a), for all s',s \in \mathcal{S}, a \in \mathcal{A}$$

<span style="font-family:Arial; font-size:0.9em;">
$$\sum_{s' \in \mathcal{S}} p(s' \mid s,a)=1, for all s \in \mathcal{S}, a \in \mathcal{A}$$







### later

$$p(s',r \mid s,a) \triangleq Pr(s_{t+1}=s',r_t=r \mid s_t=s,a_t=a)$$, for all $$s',s \in \mathcal{S}, r \in \mathcal{R}, a \in \mathcal{A}$$

$$\sum_{s' \in \mathcal{S}} \sum_{r \in \mathcal{R}} p(s',r \mid s,a)=1$$, for all $$s \in \mathcal{S}, a \in \mathcal{A}$$

$$\mathbb{S}$$

### Implementation

```python
def sigmoid(x):
   return 1./(1.+np.exp(-x))

```
