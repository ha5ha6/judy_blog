---
layout: single
title: All About Cartpole
permalink: "/cartpole/"
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

### Problem Setup

### cartpole


| Num | Observation           | Min                  | Max                |
|-----|-----------------------|----------------------|--------------------|
| 0   | Cart Position         | -4.8                 | 4.8                |
| 1   | Cart Velocity         | -Inf                 | Inf                |
| 2   | Pole Angle            | ~ -0.418 rad (-24°)  | ~ 0.418 rad (24°)  |
| 3   | Pole Angular Velocity | -Inf                 | Inf                |


| Num | Action                 |
|-----|------------------------|
| 0   | Push cart to the left  |
| 1   | Push cart to the right |


state space: (4,)

action space: (2,)

reward: +1 unless terminate

termination:

- pole is more than 15 degrees from vertical

- cart moves more than 2.4 unit from the center




### Q-box


### Q-bins

### Q-rbf

### DQN

<center><img src="https://miro.medium.com/max/507/1*iX-Fu5YzUZ8CNEZ86BvfKA.png" width=400></center>



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


### References

**Reinforcement Learning an Introduction 2nd edition** by Sutton and Barto

[RL simple experiment - Blackjack](https://ernie55ernie.github.io/machine%20learning/2018/04/08/reinforcement-learning-simple-experiment-blackjack.html)

[optimizing blackjack strategy through MC](https://towardsdatascience.com/optimizing-blackjack-strategy-through-monte-carlo-methods-cbb606e52d1b)

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[jingweiz/reinforcement-learning-an-introduction](https://github.com/jingweiz/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)
