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

Note: the notations and formalizations follow the previous post [Basic Reinforcement Learning](/judy_blog/basicrl/).

### TD Prediction

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


### Random Walk

<center><img src="https://i.stack.imgur.com/ts9va.png" width=600></center>

    deterministic dynamics: p(s'|s,a)=1

    states={0,1(A),2(B),3(C),4(D),5(E),6}
    actions={left,right}, sample uniformly

    termination: state 0 and 6
    r=+1, at state 6
    r=0, otherwise

```python
import numpy as np
import matplotlib.pyplot as plt

states=[0,1,2,3,4,5,6]
actions=[-1,1]
V_true=np.arange(1,6)/6.0

def step(s,a):

    s_=s+a

    if s_==0:
        return s_,0,True
    elif s_==6:
        return s_,1,True
    else:
        return s_,0,False

def get_td_v(n_eps,lr=0.1):

    V=np.ones(len(states))*0.5
    rms=[]
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

        rms.append(np.sqrt(np.sum(np.power(V_true-V[1:6],2))/5.0))

    return V,rms

v1,rms1=get_td_v(1)
v10,rms10=get_td_v(10)
v100,rms100=get_td_v(100)

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

```python
def get_mc_v(n_eps,lr):

    V=np.ones(len(states))*0.5
    rms=[]

    for ep in range(n_eps):
        s=np.random.choice(states[1:6])
        traj=[s]

        while True:     
            s_old=s
            a=np.random.choice(actions)
            s,r,done=step(s_old,a)
            traj.append(s)

            if done:
                break

        for st in traj:
            V[st]+=lr*(r-V[st])

        rms.append(np.sqrt(np.sum(np.power(V_true-V[1:6],2))/5.0))

    return V,rms

lr_td=[0.15,0.1,0.05]
lr_mc=[0.01,0.02,0.03,0.04]

ls=['-','--',':','-.']
plt.figure(figsize=(8,6))

for i,lr in enumerate(lr_td):
    rms_all=[]
    for j in range(100):
        _,rms=get_td_v(100,lr=lr)
        rms_all.append(rms)

    plt.plot(np.array(rms_all).mean(axis=0),color='r',label='td'+str(lr),linestyle=ls[i])

for i,lr in enumerate(lr_mc):
    rms_all=[]
    for j in range(100):
        _,rms=get_mc_v(100,lr=lr)
        rms_all.append(rms)

    plt.plot(np.array(rms_all).mean(axis=0),color='b',label='mc'+str(lr),linestyle=ls[i])

plt.legend(loc='upper right',fontsize=13)
plt.grid()
plt.xticks(fontsize=15)
plt.yticks(fontsize=15)
plt.xlabel('episodes',fontsize=15)
plt.ylabel('RMS',fontsize=15)
plt.savefig('td_mc_randomwalk.png',dpi=350)
```

<center><img src="/judy_blog/assets/images/td_randomwalk.png" width=400><img src="/judy_blog/assets/images/td_mc_randomwalk.png" width=400></center>

The above figure corresponds to Figures in Example 6.2

### References

**Reinforcement Learning an Introduction 2nd edition** by Sutton and Barto

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)
