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

[\[OpenAI CartPole-v0\]](https://gym.openai.com/envs/CartPole-v0/), ends in 200 episodes <br>
[\[OpenAI CartPole-v1\]](https://gym.openai.com/envs/CartPole-v1/), ends in 500 episodes <br>
[\[Env source code-v1\]](https://github.com/openai/gym/blob/master/gym/envs/classic_control/cartpole.py)

| Num | Observation           | Min                  | Max                |
|-----|-----------------------|----------------------|--------------------|
| 0   | Cart Position         | -4.8                 | 4.8                |
| 1   | Cart Velocity         | -Inf                 | Inf                |
| 2   | Pole Angle            | ~ -0.418 rad (-24°)  | ~ 0.418 rad (24°)  |
| 3   | Pole Angular Velocity | -Inf                 | Inf                |


| Num | Action                          |
|-----|---------------------------------|
| 0   | Push cart to the left with 10N  |
| 1   | Push cart to the right with 10N |


State space: (4,)<br>
Action space: (2,)<br>
State variables in short:

- $$x$$ - cart position
- $$\dot{x}$$ - cart velocity
- $$\theta$$ - pole angle
- $$\dot{\theta}$$ - pole angular velocity

Reward: +1 unless termination<br>
Termination:

- $$\theta < -15^o$$ or $$\theta > 15^o$$, 15 degree = 0.2618 rad
- $$x<-2.4$$ or $$x>2.4$$

### Q-box

Box System [Michie et al. 1968] divided the state variables into 3x3x6x3 boxes as follows:

| variable  |      |          | range    |       |          |     |
|-----------|------|----------|----------|-------|----------|-----|
| $$x$$     | <-0.8|          |(-0.8,0.8)|       |>0.8      |     |
| box:      | +0   |          |  +1      |       |+2        |     |
| $$\dot{x}$$| <-0.5|         |(-0.5,0.5 |       |>0.5      |     |
| box:      | +0   |          |  +3      |       |+6        |     |
| $$\theta$$(deg)|<-12 |(-12,-1.5)|(-1.5,0)|(0,1.5)|(1.5,12)| >12 |
| box:      | +0   |+9        | +18      | +27   |  +36     | +45 |   
| $$\dot{\theta}$$ | <-50 |   |(-50,50)  |       |  >50     |     |
| box:      | +0   |          | +54      |       | +108     |     |

State space: (4,) -> (162,)<br>
Action sapce: (2,)

**Q-learning** implementation with box system:

```python
import numpy as np
import gym
import random

def get_box(s):

    x,x_dot,theta,theta_dot=s
    if x < -.8:
        box_idx = 0
    elif x < .8:
        box_idx = 1
	  else:
        box_idx = 2

  	if x_dot < -.5:
        pass
    elif x_dot < .5:
        box_idx += 3
    else:
        box_idx += 6

    if theta < np.radians(-12):
        pass
    elif theta < np.radians(-1.5):
        box_idx += 9
    elif theta < np.radians(0):  
        box_idx += 18
    elif theta < np.radians(1.5):
        box_idx += 27
    elif theta < np.radians(12):
        box_idx += 36
    else:
        box_idx += 45

    if theta_dot < np.radians(-50):
        pass
    elif theta_dot < np.radians(50):
        box_idx += 54
    else:
        box_idx += 108

    return box_idx

def e_greedy(q,epsilon):

    if random.random()<epsilon:
        a=env.action_space.sample()
    else:
        a=np.argmax(q)
    return a

env=gym.make("CartPole-v0")
n_s=env.observation_space.shape[0]
n_a=env.action_space.n

n_eps=2000
n_stps=1000

gm=0.99
lr=0.1
#non-linear decay
epsilon=1
epsilon_decay_rate=0.995

Q=np.random.rand(162,n_a)
r_all,stp_all=[],[]

for ep in range(n_eps):

    s=env.reset()
    s_int=get_box(s)
    r_sum=0
    epsilon*=epsilon_decay_rate

    for stp in range(n_stps):

        a=e_greedy(Q[s_int],epsilon)
        s_,r,done,_=env.step(a)
        s_int_=get_box(s_)

        delta=r+gm*np.max(Q[s_int_])-Q[s_int,a]
        Q[s_int,a]+=lr*delta

        s_int=s_int_
        r_sum+=r

        if done:
            break

    r_all.append(r_sum)
    stp_all.append(stp)
    if ep%(n_eps//5)==0 or ep==n_eps-1:
        print(f"ep:{ep}, stp:{stp}, r:{np.round(r_sum,2)},eps:{epsilon}")
```

Learned optimal Q values:

<center><img src="/judy_blog/assets/images/q_op_box.png" width=1000></center>

<center><img src="/judy_blog/assets/images/q_op_box_1_3.png" width=400></center>

**Q-learning with box system can reach stable behaviors around 700 episodes due to non-linear epsilon annealing.**


### Q-bins

### Q-rbf

**SARSA(λ)** implementation with 4xRBF networks:

State space: (4,) -> (162,)<br>
Action sapce: (2,)



### DQN



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
