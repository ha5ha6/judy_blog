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

**6-tuple MDP**: $$(\mathcal{S}, \mathcal{A},p,\mathcal{R},\gamma,T)$$

$$ s,s' \in \mathcal{S}$$ - state space

$$ a \in \mathcal{A}$$ - action space

$$p (s' \mid s,a)$$ - state transition probability (world model)

$$r (s,a,s') \in \mathcal{R}$$ - reward function

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

### Value Functions

**Def**: to evaluate *how good* it is for an agent to be in a given state in terms of **future rewards** that can be expected **(Expected Return)**

**State-value function for policy** $$\pi$$: **value function of a state** $$s$$ **under a policy** $$\pi$$ is the **expected return** when starting in $$s$$ and following $$\pi$$ thereafter:

$$\begin{align*}

V_{\pi}(s) &\triangleq \mathbb{E}_{\pi} \left[ R_t \mid s_t=s  \right] \\

&= \mathbb{E}_{\pi} \left[ \sum_{i=0}^{T} \gamma^i r_{t+i} \mid s_t=s  \right], \forall s \in \mathcal{S}
\end{align*}$$

Note:

- $$V(s)$$ can be changed due to different $$\pi$$

- $$\mathbb{E}_{\pi}$$ comes from the randomness of $$\pi$$ and $$p(s' \mid s,a)$$

**Action-value function for policy** $$\pi$$: **the value of taking action** $$a$$ **in state** $$s$$ **under a policy** $$\pi$$ is the **expected return** starting from $$s$$, taking the action $$a$$ and following $$\pi$$ thereafter:

$$\begin{align*}

Q_{\pi}(s,a) &\triangleq \mathbb{E}_{\pi} \left[ R_t \mid s_t=s,a_t=a \right] \\

&= \mathbb{E}_{\pi} \left[ \sum_{i=0}^{T} \gamma^i r_{t+i} \mid s_t=s,a_t=a  \right], \forall s \in \mathcal{S}, \forall a \in \mathcal{A}
\end{align*}$$

**Bellman Equation of** $$V_{\pi}$$:

$$\begin{align*}

V_{\pi}(s) &\triangleq \mathbb{E}_{\pi} \left[ R_t \mid s_t=s  \right] \\

&= \mathbb{E}_{\pi} \left[ r_t+\gamma R_{t+1} \mid s_t=s  \right] \\

&= \sum_a \pi(a \mid s) \sum_{s'} p(s' \mid s,a) \left[r_t+\gamma \mathbb{E}_{\pi} \left[R_{t+1} \mid s_{t+1}=s'  \right] \right] \\

&= \sum_a \pi(a \mid s) \sum_{s'} p(s' \mid s,a) \left[r_t+\gamma V_{\pi}(s') \right] \\

&= \mathbb{E}_{\pi} \left[ r_t+\gamma V_{\pi}(s') \mid s_t=s  \right], \forall s \in \mathcal{S}

\end{align*}$$

**Meaning**: the value of the start state must equal the discounted value of the expected next state plus the reward expected along the way

**Backup Diagram**:

<center><img src="https://i.stack.imgur.com/AdR3z.png" width=500></center>

**update/backup operations**: transfer value information *back* to a state or a state-action pair from its successor states or state-action pairs

**Bellman Equation of** $$Q_{\pi}$$:

$$\begin{align*}

Q_{\pi}(s,a) &\triangleq \mathbb{E}_{\pi} \left[ R_t \mid s_t=s,a_t=a  \right] \\

&= \mathbb{E}_{\pi} \left[ r_t+\gamma V_{\pi}(s') \mid s_t=s,a_t=a \right] \\

&= \sum_{s'} p(s' \mid s,a) \left[ r_t+\gamma \mathbb{E}_{a \sim \pi} Q_{\pi}(s',a) \mid s_t=s,a_t=a \right] \\

&= \sum_{s'} p(s' \mid s,a) \left[ r_t+\gamma \sum_{a} \pi(a \mid s') Q_{\pi}(s',a) \mid s_t=s,a_t=a \right], \forall s \in \mathcal{S}, a \in \mathcal{A}

\end{align*}$$

where

$$\begin{align*}

V_{\pi}(s) &=\mathbb{E}_{a \sim \pi} Q_{\pi} (s,a) \\

&=\sum_{a \in \mathcal{A}} \pi(a \mid s) Q_{\pi} (s,a)

\end{align*}$$

### Optimal Value Functions

**Goal of RL**: finding a policy that maximizes the expected return

**Value functions define a partial ordering over policies**:

a policy $$\pi$$ is defined to be better than or equal to another $$\pi'$$ for all states

$$\pi \geq \pi' \iff V_{\pi}(s) \geq V_{\pi'}(s), \forall s \in \mathcal{S}$$

**Optimal Policy** $$\pi_*$$: the policy that is better than or equal to all other policies

**Optimal state-value and action-value function**:

$$V_*(s) \triangleq \max_{\pi} V_{\pi}(s), \forall s \in \mathcal{S}$$

$$Q_*(s,a) \triangleq \max_{\pi} Q_{\pi}(s,a), \forall s \in \mathcal{S}, \forall a \in \mathcal{A}$$

therefore

$$Q_*(s,a) = \mathbb{E} \left[r_t + \gamma V_*(s') \mid s_t=s,a_t=a \right]$$

**Bellman Optimality Equations**:

$$\begin{align*}
V_*(s) &= \max_{a \in \mathcal{A}} Q_{\pi_*}(s,a) \\

&= \max_a \mathbb{E}_{\pi_*} \left[r_t + \gamma V_*(s') \mid s_t=s,a_t=a   \right] \\

&= \max_a \sum_{s'} p(s' \mid s,a) \left[r_t +\gamma V_*(s')  \right]

\end{align*}$$

$$\begin{align*}
Q_*(s,a) &= \mathbb{E} \left[ {r_t+\gamma \max_{a'} Q_*(s',a') \mid s_t=s,a_t=a} \right]\\

&= \sum_{s'} p(s' \mid s,a) \left[r_t +\gamma \max_{a'} Q_*(s',a')  \right]

\end{align*}$$

<center><img src="https://dudeperf3ct.github.io/images/tabular_files/optimal.png" width=500></center>

the **backup diagram** is similar as before except that the arcs represent the maximum over the choices instead of taking expectation

Note:

- Bellman optimality equation for $$V_*$$ has a unique solution independent of $$\pi$$

- if the dynamics $$p$$ are known, the system equations w.r.t number of states of $$V_*$$ can be solved

Once we have $$V_*$$, we can determine $$\pi_*$$:

- any $$\pi$$ assigns nonzero probability only to the actions where $$\max_a V_*(s)$$ is obtained is $$\pi_*$$

- any $$\pi$$ that is greedy w.r.t $$V_*(s)$$ is $$\pi_*$$


### Important Concepts

**Delayed reward**:

**Deterministic/Stochastic policy**:

**Deterministic/Stochastic env**:

**Monte Carlo methods**: estimate $$V_{\pi}$$ and $$Q_{\pi}$$ from experience by averaging over many random samples of actual returns

**Greedy**: any search or decision procedure that selects alternatives based only on local or immediate considerations, without considering the possibility that such a selection may prevent future access to even better alternatives


### Gridworld

<center><img src="https://miro.medium.com/max/507/1*iX-Fu5YzUZ8CNEZ86BvfKA.png" width=400></center>

    deterministic dynamics: p(s'|s,a)

    actions={up,down,left,right}

    r=+10, state A -> state A'
    r=+5, state B -> state B'
    r=-1, off the grid, location remains unchanged
    r=0, otherwise

    What is Vπ for π(a|s) ~ uniform with γ=0.9?


Solution is computed by solving the system of linear equations:

$$V_{\pi}(s)=\sum_a \pi(a \mid s) \sum_{s'} p(s' \mid s,a) \left[r+\gamma V_{\pi}(s') \right]$$

where

$$p(s' \mid s,a)=1$$ since it's deterministic env

then we have

$$V_{\pi}(s)=\sum_a \pi(a \mid s) \left[r+\gamma V_{\pi}(s') \right]$$

for example

$$s=(0,0) \rightarrow a=left \rightarrow s'=(0,0),r=-1$$

$$s=(0,0) \rightarrow a=up \rightarrow s'=(0,0),r=-1$$

$$s=(0,0) \rightarrow a=right \rightarrow s'=(0,1),r=0$$

$$s=(0,0) \rightarrow a=down \rightarrow s'=(1,0),r=0$$

$$\begin{align*}

V(0,0) &= 0.25*[-1+0.9*V(0,0)]+0.25*[-1+0.9*V(0,0)]+0.25*[0+0.9*V(0,1)]+0.25*[0+0.9*V(1,0)] \\

       &= -0.5

\end{align*}$$



    ----|---|---|---|----
    |0,0|0,1|   | B |   |        
    |---|---|---|---|---|        
    |1,0|   |   |   |   |          
    |---|---|---|---|---|          
    |   |   |   | B'|   |          
    |---|---|---|---|---|          
    |   |   |   |   |   |        
    |---|---|---|---|---|        
    |   | A'|   |   |   |        
    ----|---|---|---|----        




```python
def sigmoid(x):
   return 1./(1.+np.exp(-x))

```
