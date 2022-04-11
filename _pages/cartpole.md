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


Cartpole is one of the very ancient and classical RL-for-control benchmark, first appeared in
[\[Barto et al. 1983\]](http://www.derongliu.org/adp/adp-cdrom/Barto1983.pdf). Many RL algorithms from value-based to policy-based, model-free to model-based were justified under it or its variants encompassing simulations and real robots, i.e.[\[PILCO\]](http://mlg.eng.cam.ac.uk/pilco/).

This article is trying to cover the insights derived from the performances of classical RL algorithms under Cartpole environment.

(Temporary) Related algorithms include:

- Q-learning (box, bins)
- SARSA(λ)
- DQN
- and more

### Problem Setup

[\[OpenAI CartPole-v0\]](https://gym.openai.com/envs/CartPole-v0/), ends in 200 episodes

[\[OpenAI CartPole-v1\]](https://gym.openai.com/envs/CartPole-v1/), ends in 500 episodes

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


State space: (4,)

Action space: (2,)

State variables in short:

- $$x$$ - cart position
- $$\dot(x)$$ - cart velocity
- $$\theta$$ - pole angle
- $$\dot(\theta)$$ - pole angular velocity

Reward: +1 unless terminate

Termination:

- $$\theta < -15^o$$ or $$\theta > 15^o$$, 15 degree = 0.2618 rad
- $$x<-2.4$$ or $$x>2.4$$

### Q-box

Box System [Michie et al 1968] divided the state variables into 3x3x6x3 boxes as follows:

| variable  |      |          |          |       |          |     |
|-----------|------|----------|----------|-------|----------|-----|
| $$x$$     | <-0.8|          |(-0.8,0.8)|       |>0.8      |     |
| box:      | +0   |          |  +1      |       |+2        |     |
| $$\dot{x}$$| <-0.5|          |(-0.5,0.5 |       |>0.5      |     |
| box:      | +0   |          |  +3      |       |+6        |     |
| theta(deg)| <-12 |(-12,-1.5)|(-1.5,0)  |(0,1.5)|(1.5,12)  | >12 |
| box:      | +0   |+9        | +18      | +27   |  +36     | +45 |   
| theta_dot | <-50 |          |(-50,50)  |       |  >50     |     |
| box:      | +0   |          | +54      |       | +108     |     |

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

[Barto et al. 1983] Barto, Andrew G., Richard S. Sutton, and Charles W. Anderson. "Neuronlike adaptive elements that can solve difficult learning control problems." IEEE transactions on systems, man, and cybernetics 5 (1983): 834-846.

[PILCO 2011] Deisenroth, Marc, and Carl E. Rasmussen. "PILCO: A model-based and data-efficient approach to policy search." Proceedings of the 28th International Conference on machine learning (ICML-11). 2011.

[Michie et al. 1968] Michie, Donald, and Roger A. Chambers. "BOXES: An experiment in adaptive control." Machine intelligence 2.2 (1968): 137-152.

[\[Sutton C code\]](http://incompleteideas.net/book/code/pole.c)

**Reinforcement Learning an Introduction 2nd edition** by Sutton and Barto

[RL simple experiment - Blackjack](https://ernie55ernie.github.io/machine%20learning/2018/04/08/reinforcement-learning-simple-experiment-blackjack.html)

[optimizing blackjack strategy through MC](https://towardsdatascience.com/optimizing-blackjack-strategy-through-monte-carlo-methods-cbb606e52d1b)

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[jingweiz/reinforcement-learning-an-introduction](https://github.com/jingweiz/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)
