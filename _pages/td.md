---
layout: single
title: Temporal-Difference Learning
permalink: "/td/"
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

Note: the notations and formalizations follow this [post](/judy_blog/basicrl/).

### TD Prediction (Policy Evaluation)

**constant-$$\alpha$$ MC**:

$$V(s_t) \leftarrow V(s_t)+\alpha\left[R_t - V(s_t) \right]$$

Target: $$R_t$$ - the actual return following time $$t$$

$$\alpha$$ - a constant step-size parameter

Whereas MC methods must wait until the end of the episode to determine the increment to $$V(s_t)$$, TD methods need to wait only until the **next step**

**TD(0) or one-step TD**:

$$V(s_t) \leftarrow V(s_t)+\alpha \left[r_t + \gamma V(s_{t+1}) - V(s_t) \right]$$

Target: $$r_t + \gamma V(s_{t+1})$$

**TD error**:

$$\delta_t \triangleq r_t + \gamma V(s_{t+1}) - V(s_t)$$

The difference between the estimated value of $$s_t$$ ($$V(s_t)$$) and the better estimate $$r_t + \gamma V(s_{t+1})$$




**Recall in DP**:

$$\begin{align*}

V_{\pi}(s) &\triangleq \mathbb{E}_{\pi} \left[R_t \mid s_t=s \right] &\text{:Target for MC}\\

&=\mathbb{E}_{\pi} \left[r_t + \gamma V_{\pi}(s_{t+1}) \mid s_t=s \right] &\text{:Target for DP}

\end{align*}$$

**TD target not only samples the expected value but uses the current estimate $$V$$ instead of the true $$V_{\pi}$$.** Thus it combines the sampling of MC with the bootstrapping of DP.













### Important Concepts

**Sample updates**: involve looking ahead to a sample successor state (or state-action pair), using the value of the successor and the reward along the way to compute a backed-up value and then updating the value of the original state (or state-action pair)

**Sample updates** differ from the **expected updates** of DP in that they are based on a single sample successor rather than on a complete distribution of all possible successors


### RandomWalk

<center><img src="https://i.stack.imgur.com/ts9va.png" width=600></center>

    deterministic dynamics: p(s'|s,a)=1
    actions={up,down,left,right}

    r=+10, state A -> state A'
    r=+5, state B -> state B'
    r=-1, off the grid, location remains unchanged
    r=0, otherwise

    What is Vπ for π(a|s) ~ uniform with γ=0.9?



```python
import numpy as np
import matplotlib.pyplot as plt

states=[0,1,2,3,4,5,6]
actions=[-1,1]
lr=0.1
V_true=np.arange(1,6)/6.0

def step(s,a):

    s_=s+a

    if s_==0:
        return s_,0,True
    elif s_==6:
        return s_,1,True
    else:
        return s_,0,False

def get_v(n_eps):

    V=np.ones(len(states))*0.5

    for ep in range(n_eps):

        s=np.random.choice(states[1:6])

        while True:     

            s_old=s
            a=np.random.choice(actions)
            s,r,done=step(s_old,a)

            if done:
                V[s_old]+=lr*(r-V[s_old])
            else:
                V[s_old]+=lr*(r+V[s]-V[s_old])

            if done:
                break

    return V

v1=get_v(1)
v10=get_v(10)
v100=get_v(100)

plt.figure(figsize=(8,6))
plt.plot(range(1,6),V_true,'-o',label='true')
plt.plot(range(1,6),v1[1:6],'-o',label='1')
plt.plot(range(1,6),v10[1:6],'-o',label='10')
plt.plot(range(1,6),v100[1:6],'-o',label='100')
plt.grid()
plt.xticks(range(1,6),('A','B','C','D','E'),fontsize=15)
plt.yticks(fontsize=15)
plt.legend(fontsize=15)
plt.savefig('td_randomwalk.png',dpi=350)
```

<center><img src="/judy_blog/assets/images/td_randomwalk.png" width=600></center>


The above figure corresponding to Figures in Example 6.2

### References

**Reinforcement Learning an Introduction 2nd edition** by Sutton and Barto

[RL simple experiment - Blackjack](https://ernie55ernie.github.io/machine%20learning/2018/04/08/reinforcement-learning-simple-experiment-blackjack.html)

[optimizing blackjack strategy through MC](https://towardsdatascience.com/optimizing-blackjack-strategy-through-monte-carlo-methods-cbb606e52d1b)

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[jingweiz/reinforcement-learning-an-introduction](https://github.com/jingweiz/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)
