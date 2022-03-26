---
layout: single
title: Basic Reinforcement Learning
permalink: "/basicrl/"
#author_profile: true
#breadcrumbs: true

author:  Jiexin Wang
#classes:  wide
toc: true
toc_label: "Index"
usemathjax: true
---

<style type="text/css">
  body{
  font-size: 13pt;
  }
</style>

### RL Setup

    Env ------- s ------> Agent
     |     |--(r,s')-->|   |
     |                     |
     |<-------- a ---------|

**MDP** (Markov Decision Process): a classical formalization of sequential decision making, where actions influence subsequent situations or states

**Env**: the world with env dynamics where the agent lives and interacts, providing **states** $$s$$ and **rewards** $$r$$

**Agent**: the learner or decision maker who produce **actions** $$a$$ to the env, but cannot influence the **dynamics** $$p(s' \mid s,a)$$ of the env

**finite MDP**: the sets of **states** $$s$$, **actions** $$a$$, and **rewards** $$r$$ in a specific MDP all have a finite number of elements

**Markov Property**: the probability of each possible value for **current state and reward**: $$s_t,r_t$$ depends only on the immediately **preceding state and action**: $$s_{t-1},a_{t-1}$$

in another words: **the current state include information about all aspects of the past**


### in Math

**6-tuple MDP**: $$(\mathcal{S}, \mathcal{A},p,r,\gamma,T)$$

$$\mathcal{S}, \mathcal{A}$$ - state and action spaces

$$p (s' \mid s,a)$$ - state transition probability (world model)

$$r (s,a,s')$$ - reward function

$$\gamma \in [0,1)$$ - discounting factor

$$T$$ - horizon (can be finite or infinite)

**Others**:

$$\pi (a \mid s)$$ - policy distribution gives action

$$t = 0,1,2,...,T$$ - discrete time steps

$$h \triangleq [s_0,a_0,r_0,s_1,...,s_t,a_t,r_t,s_{t+1},...,s_T,a_T,r_T,s_{T+1}]$$ - history trajectory (finite case)

$$R_t \triangleq \sum_{i=0}^{T} \gamma^i r_{t+i}$$ - discounted return

**Recursive Property**:

$$\begin{align*}

R_t &\triangleq r_t + \gamma r_{t+1} + \gamma^2 r_{t+2} + \gamma^3 r_{t+3} + ... \\

&= r_t + \gamma (r_{t+1} + \gamma r_{t+2} + \gamma^2 r_{t+3} + ...) \\

&= r_t + \gamma R_{t+1}

\end{align*}$$

### Value Related

**value functions**: to evaluate *how good* it is for an agent to be in a given state in terms of **future rewards** that can be expected **(Expected Return)**

**state-value function for policy** $$\pi$$: **value function of a state** $$s$$ **under a policy** $$\pi$$ is the **expected return** when starting in $$s$$ and following $$\pi$$ thereafter:

$$\begin{align*}

V_{\pi}(s) &\triangleq \mathbb{E}_{\pi} \left[ R_t \mid s_t=s  \right] \\

&= \mathbb{E}_{\pi} \left[ \sum_{i=0}^{T} \gamma^i r_{t+i} \mid s_t=s  \right], \forall s \in \mathcal{S}
\end{align*}$$

note:

- $$V(s)$$ can be changed due to different $$\pi$$

- $$\mathbb{E}_{\pi}$$ comes from the randomness of $$\pi$$ and $$p(s' \mid s,a)$$

**action-value function for policy** $$\pi$$: **the value of taking action** $$a$$ **in state** $$s$$ **under a policy** $$\pi$$ is the **expected return** starting from $$s$$, taking the action $$a$$ and following $$\pi$$ thereafter:

$$\begin{align*}

Q_{\pi}(s,a) &\triangleq \mathbb{E}_{\pi} \left[ R_t \mid s_t=s,a_t=a \right] \\

&= \mathbb{E}_{\pi} \left[ \sum_{i=0}^{T} \gamma^i r_{t+i} \mid s_t=s,a_t=a  \right], \forall s \in \mathcal{S}, \forall a \in \mathcal{A}
\end{align*}$$


### Important Concepts

**Delayed reward**:

### later

where

$$p(s' \mid s,a) \triangleq Pr(s_{t+1}=s' \mid s_t=s,a_t=a),$$ for all $$s',s \in \mathcal{S}, a \in \mathcal{A}$$

$$\sum_{s' \in \mathcal{S}} p(s' \mid s,a)=1,$$ for all $$s \in \mathcal{S}, a \in \mathcal{A}$$



$$p(s',r \mid s,a) \triangleq Pr(s_{t+1}=s',r_t=r \mid s_t=s,a_t=a)$$, for all $$s',s \in \mathcal{S}, r \in \mathcal{R}, a \in \mathcal{A}$$

$$\sum_{s' \in \mathcal{S}} \sum_{r \in \mathcal{R}} p(s',r \mid s,a)=1$$, for all $$s \in \mathcal{S}, a \in \mathcal{A}$$

$$\mathbb{S}$$

### Implementation

```python
def sigmoid(x):
   return 1./(1.+np.exp(-x))

```
