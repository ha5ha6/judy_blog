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

### Policy Evaluation

$$\begin{align*}

V_{k+1}(s) &\triangleq \mathbb{E}_{\pi} \left[r_t+ \gamma V_k(s_{t+1}) \mid s_t=s \right] \\

&=\sum_a \pi(a \mid s) \sum_{s'} p(s' \mid s,a) \left[r_t+\gamma V_k(s') \right]

\forall s \in \mathcal{S}

\end{align*}$$

Note:

- $$V_k \rightarrow V_{\pi}$$ is a fixed point for this update rule as $$k \rightarrow \infty$$ because Bellman Equation for $$V_{\pi}$$ assures us of equality in this case

### Policy Improvement

**Policy Improvement Theorem**: Let $$\pi$$ and $$\pi'$$ be any pair of deterministic policies such that

$$\forall s \in \mathcal{S}, Q_{\pi}(s,\pi'(s)) \geq V_{\pi}(s)$$

then the policy $$\pi'$$ must be as good as or better than $$\pi$$

that is, it must obtain greater or equal expected return from all states $$s \in \mathcal{S}$$:

$$V_{\pi'}(s) \geq V_{\pi}(s)$$

**Policy Improvement**: the process of making a new policy that improves on an original policy, by making it greedy w.r.t the value function of the original policy

Define the **new greedy policy** $$\pi'$$:

$$\begin{align*}

\pi'(s) &\triangleq \arg \max_a Q_{\pi}(s,a) \\

&= \arg \max_a \mathbb{E} \left[r_t+\gamma V_{\pi}(s_{t+1}) \mid s_t=s,a_t=a \right] \\

&= \arg \max_a \sum_{s'} p(s' \mid s,a) \left[r_t+\gamma V_{\pi}(s') \right]

\end{align*}$$

Note:

- All the ideas can be easily generated to stochastic policies $$\pi(a \mid s)$$

### Policy Iteration

The **monotonical** sequence of improving policies and value functions:

$$\pi_0$$ -Evaluate-> $$V_{\pi_0}$$ -Improve-> $$\pi_1$$ -Evaluate-> $$V_{\pi_1}$$ -Improve-> ... $$\pi_*$$ -Evaluate-> $$V_{\pi_*}$$

In deterministic policy case:

- **Policy Evaluation**: $$V(s) \leftarrow \sum_{s'} p(s' \mid s,\pi(s)) \left[r+\gamma V(s') \right] $$ until convergence

- **Policy Improvement**: $$\pi(s) \leftarrow \arg \max_a \sum_{s'} p(s' \mid s,a) \left[r+\gamma V(s') \right]$$ until policy being stable

### Value Iteration

The **Policy Evaluation** step in **Policy Iteration** can be truncated without losing the convergence guarantees, which means we can do **Policy Evaluation** without waiting for the convergence of $$V_{\pi}$$

**Value Iteration** stops **Policy Evaluation** after just one update of each state  

$$\begin{align*}

V_{k+1}(s) &\triangleq \max_a \mathbb{E}_{\pi} \left[r_t+ \gamma V_k(s_{t+1}) \mid s_t=s \right] \\

&=\max_a \sum_{s'} p(s' \mid s,a) \left[r_t+\gamma V_k(s') \right]

\forall s \in \mathcal{S}

\end{align*}$$

Another way of understanding **Value Iteration** is simply turning the **Bellman Optimality Equation** into an update rule

Recall **Bellman Optimality Equation**

$$V_*(s) = \max_a \sum_{s'} p(s' \mid s,a) \left[r_t +\gamma V_*(s')  \right]$$



### Important Concepts

**Delayed reward**:

**Deterministic/Stochastic policy**:

**Deterministic/Stochastic env**:

**Monte Carlo methods**: estimate $$V_{\pi}$$ and $$Q_{\pi}$$ from experience by averaging over many random samples of actual returns

**Greedy**: any search or decision procedure that selects alternatives based only on local or immediate considerations, without considering the possibility that such a selection may prevent future access to even better alternatives

**Dynamic Programming**: a collection of algs that can be used to compute optimal policies given a perfect model of the env as a MDP (not applicable in practice but forms important theoretical foundations for RL algs)

**Expected Update**: all the updates done in DP is called Expected Update because they are based on an expectation _over all possible next states_ rather than on a sample next state


### Gridworld

#### calculate Vπ

<center><img src="https://miro.medium.com/max/507/1*iX-Fu5YzUZ8CNEZ86BvfKA.png" width=400></center>

    deterministic dynamics: p(s'|s,a)=1
    actions={up,down,left,right}

    r=+10, state A -> state A'
    r=+5, state B -> state B'
    r=-1, off the grid, location remains unchanged
    r=0, otherwise

    What is Vπ for π(a|s) ~ uniform with γ=0.9?


Solution is computed by solving the system of linear equations:

$$V_{\pi}(s)=\sum_a \pi(a \mid s) \sum_{s'} p(s' \mid s,a) \left[r+\gamma V_{\pi}(s') \right]$$

since it's a deterministic env, $$p(s' \mid s,a)=1$$

we have

$$V_{\pi}(s)=\sum_a \pi(a \mid s) \left[r+\gamma V_{\pi}(s') \right]$$

for example from state $$s=(0,0)$$ to $$s'$$

    |   s   |   a   |   s'   |   r   |    |0,0|0,1|   |0,3|   |
    |-------|-------|--------|-------|    |---|---|---|---|---|
    |  0,0  | left  |  0,0   |  -1   |    |1,0|1,1|   |   |   |
    |  0,0  |  up   |  0,0   |  -1   |    |---|---|---|---|---|
    |  0,0  | right |  0,1   |  0    |    |   |   |   |2,3|   |
    |  0,0  | down  |  1,0   |  0    |    |---|---|---|---|---|
                                          |   |   |   |   |   |
                                          |---|---|---|---|---|
                                          |   |4,1|   |   |   |

$$\begin{align*}

V(0,0) = &0.25*[-1+0.9*V(0,0)] \\
       + &0.25*[-1+0.9*V(0,0)] \\
       + &0.25*[0+0.9*V(0,1)] \\
       + &0.25*[0+0.9*V(1,0)] \\
       = &-0.5

\end{align*}$$

```python
import numpy as np

nx,ny=5,5
A,A_=[0,1],[4,1]
B,B_=[0,3],[2,3]
actions=[[0,-1],[-1,0],[0,1],[1,0]]#left,up,right,down
pi=0.25
gm=0.9

def step(s,a):
    if s==A:
        return A_,10
    if s==B:
        return B_,5

    s_=[s[0]+a[0],s[1]+a[1]]
    if s_[0]<0 or s_[0]>=nx or s_[1]<0 or s_[1]>=ny:
        r=-1
        s_=s
    else:
        r=0

    return s_,r

V=np.zeros((nx,ny))

while True:
    V_=np.zeros_like(V)
    for x in range(nx):
        for y in range(ny):
            v_a=[]
            for a in actions:
                (x_,y_),r=step([x,y],a)
                v_a.append(pi*(r+gm*V[x_,y_]))
            V_[x,y]=np.sum(v_a)

    if np.sum(np.abs(V-V_))<1e-4:
        print(np.around(V,decimals=1))
        break

    V=V_
```

    output:
    [[ 3.3  8.8  4.4  5.3  1.5]
     [ 1.5  3.   2.3  1.9  0.5]
     [ 0.1  0.7  0.7  0.4 -0.4]
     [-1.  -0.4 -0.4 -0.6 -1.2]
     [-1.9 -1.3 -1.2 -1.4 -2. ]]

**Insights**:

- negative values near the lower edge is due to the high probability of hitting the edge of the grid under the random policy

- A is the best state to be under this policy

- V(A)<10 because A' is close to the edge and V(A') has a negative value -1.3

- V(B)>5 because V(B') has a positive value 0.4

#### calculate V\*

in this case, we don't know the policy, and use $$max_a [r+\gamma V(s')]$$ to update $$V$$

```python
V=np.zeros((nx,ny))

while True:
    V_=np.zeros_like(V)
    for x in range(nx):
        for y in range(ny):
            v_a=[]
            for a in actions:
                (x_,y_),r=step([x,y],a)
                v_a.append(r+gm*V[x_,y_])
            V_[x,y]=np.max(v_a)

    if np.sum(np.abs(V-V_))<1e-4:
        print(np.around(V,decimals=1))
        break

    V=V_
```

    output:
    [[22.  24.4 22.  19.4 17.5]
     [19.8 22.  19.8 17.8 16. ]
     [17.8 19.8 17.8 16.  14.4]
     [16.  17.8 16.  14.4 13. ]
     [14.4 16.  14.4 13.  11.7]]


#### calculate Vk,π',Vπ'

<center><img src="https://miro.medium.com/max/1400/1*G3q-q9gEiDc2fD8sPXHBpQ.png" width=400></center>

    undiscounted episodic task (γ=1)
    deterministic dynamics: p(s'|s,a)=1
    actions={up,down,left,right}

    terminal states: the shaded ones
    non-terminal states: S={1,...,14}

    r=-1, on all transitions until the terminal state is reached

    if off the grid, location remains unchanged

    What is {V_k} by iterative policy evaluation for π(a|s) ~ uniform?

    What is Vπ' with π', where π' is an improved π?


- $$\pi$$ is the original equiprobable random policy

- $$\pi'$$ is the new policy greedy w.r.t $$V_{\pi}$$

- we first obtained $$V_{\pi}$$ with $$\pi$$

- Then we replaced $$\pi$$ with $$\pi'$$, and calculate the new $$V_{\pi'}$$

- $$V_{\pi'} \geq V_{\pi}$$ because of policy improvement

**Insights**:

- the state-value w.r.t a specific policy $$V_{\pi}$$ converges to a fixed point can be referred to **policy evaluation**

- a better policy **greedily** obtained from $$V_{\pi}$$ can be referred to **policy improvement**


```python
import numpy as np
import matplotlib.pyplot as plt

def is_terminal(s):
    return s==[0,0] or s==[nx-1,ny-1]

def step(s,a):
    if is_terminal(s):
        return s,0

    s_=[s[0]+a[0],s[1]+a[1]]

    if s_[0]<0 or s_[0]>=nx or s_[1]<0 or s_[1]>=ny:
        s_=s

    r=-1
    return s_,r

def plot_arrow(i,pi_op):
    scale=0.3
    x0=nx-0.5
    fig=plt.figure(figsize=(6,6))
    ax=fig.add_subplot(1,1,1)
    ax.set_aspect('equal', adjustable='box')
    ax.set_xticks(np.arange(0,nx+1,1))
    ax.set_yticks(np.arange(0,ny+1,1))
    plt.grid()
    plt.ylim((0,ny))
    plt.xlim((0,nx))

    for (x,y), label in pi_op.items():

        if [x,y]==[0,0] or [x,y]==[nx-1,ny-1]:
            pass
        else:  
            if 1 in label: #up
                plt.arrow(y+0.5,x0-x,0,scale,width=0.1, head_width=0.2, head_length=0.1,fc='g', ec='g')
            if 3 in label: #down
                plt.arrow(y+0.5,x0-x,0,-scale,width=0.1, head_width=0.2, head_length=0.1,fc='c', ec='c')
            if 2 in label: #right
                plt.arrow(y+0.5,x0-x,scale,0,width=0.1, head_width=0.2, head_length=0.1,fc='b', ec='b')
            if 0 in label: #left
                plt.arrow(y+0.5,x0-x,-scale,0,width=0.1, head_width=0.2, head_length=0.1,fc='r', ec='r')
            plt.title('iteration:'+str(i))

    plt.savefig('policy_at_iter_'+str(i)+'.png',dpi=350)
    plt.show()
    plt.close()

def calc_vk(k=217,pi=0.25,gm=1):

    global nx,ny,actions
    nx,ny=4,4
    actions=[[0,-1],[-1,0],[0,1],[1,0]] #left, up, right, down

    V=np.zeros((nx,ny))
    pi_op={}

    for i in range(k):
        V_=np.zeros_like(V)

        for x in range(nx):
            for y in range(ny):
                v_a=[]
                for a in actions:
                    (x_,y_),r=step([x,y],a)
                    v_a.append(pi*(r+gm*V[x_,y_]))
                #policy evaluation
                V_[x,y]=np.sum(v_a)    
                #obtain policy greedy w.r.t V_pi
                #policy improvement
                pi_op[x,y]=[i for i,v in enumerate(v_a) if v==max(v_a)]

        #convergence condition
        if np.sum(np.abs(V-V_))<1e-4:
            break

        V=V_

    plot_arrow(i,pi_op)

    return np.around(V,decimals=1),pi_op

def calc_v_improved(k,pi_op):
    V=np.zeros((nx,ny))

    for i in range(k):
        V_=np.zeros_like(V)

        for x in range(nx):
            for y in range(ny):
                v_a,pi=[0]*4,[0]*4
                for ia,a in enumerate(actions):                
                    (x_,y_),r=step([x,y],a)     
                    #apply improved policy       
                    pi[ia]=1 if ia in pi_op[x,y] else 0   
                    #policy evaluation with new policy
                    v_a[ia]=pi[ia]*(r+gm*V[x_,y_])
                V_[x,y]=np.sum(v_a)    

        #convergence condition
        if np.sum(np.abs(V-V_))<1e-4:
            break

        V=V_

    return V

V_pi,pi_=calc_vk(k=217)
V_pi_=calc_v_improved(k=1,pi_op=pi_)
```

<center><img src="/judy_blog/assets/images/policy_at_iter_216.png" width=350></center>

The above is the greedy policy we found at iteration 216

    V_pi=[[  0., -14., -20., -22.],
          [-14., -18., -20., -20.],
          [-20., -20., -18., -14.],
          [-22., -20., -14.,   0.]]

    V_pi_=[[ 0., -1., -1., -2.],
          [-1., -1., -2., -1.],
          [-1., -2., -2., -1.],
          [-2., -1., -1.,  0.]]


### References

https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions
