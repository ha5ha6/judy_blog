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

### TD Prediction

**constant-$$\alpha$$ MC**:

$$V(s_t) \leftarrow V(s_t)+\alpha\left[R_t - V(s_t) \right]$$

$$R_t$$ - the actual return following time $$t$$

$$\alpha$$ - a constant step-size parameter

Whereas MC methods must wait until the end of the episode to determine the increment to $$V(s_t)$$, TD methods need to wait only until the **next step**

**the simplest TD**:

$$V(s_t) \leftarrow V(s_t)+\alpha \left[r_t + \gamma V(s_{t+1}) - V(s_t) \right]$$


$$\begin{align*}

R_t &\triangleq r_t + \gamma r_{t+1} + \gamma^2 r_{t+2} + \gamma^3 r_{t+3} + ... \\

&= r_t + \gamma (r_{t+1} + \gamma r_{t+2} + \gamma^2 r_{t+3} + ...) \\

&= r_t + \gamma R_{t+1}

\end{align*}$$



### Important Concepts

**Delayed reward**:



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

```

    output:
    [[ 3.3  8.8  4.4  5.3  1.5]
     [ 1.5  3.   2.3  1.9  0.5]
     [ 0.1  0.7  0.7  0.4 -0.4]
     [-1.  -0.4 -0.4 -0.6 -1.2]
     [-1.9 -1.3 -1.2 -1.4 -2. ]]



### References

**Reinforcement Learning an Introduction 2nd edition** by Sutton and Barto

[RL simple experiment - Blackjack](https://ernie55ernie.github.io/machine%20learning/2018/04/08/reinforcement-learning-simple-experiment-blackjack.html)

[optimizing blackjack strategy through MC](https://towardsdatascience.com/optimizing-blackjack-strategy-through-monte-carlo-methods-cbb606e52d1b)

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[jingweiz/reinforcement-learning-an-introduction](https://github.com/jingweiz/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)
