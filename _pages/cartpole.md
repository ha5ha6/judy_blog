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
Action sapce: (2,)<br>
Experimental length:

- episode length: 2000
- step length: 1000, actually maximum will be 200

Hyperparameters:

- learning rate (lr): 0.1
- discounting factor (gm): 0.99
- exploration factor (epsilon): from 1, epsilon\*=epsilon_decay_rate for each episode
- exploration decaying rate (epsilon decay rate): 0.995

**Q-learning with box system can reach stable behaviors around 700 episodes due to non-linear epsilon annealing**

Learned optimal Values:

<center><img src="/judy_blog/assets/images/q_op_box.png" width=1000></center>

<center><img src="/judy_blog/assets/images/q_op_box_1_3.png" width=400></center>

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


### Q-bins

### Q-rbf

RBF parameters:

- n_rbf: 4
- n_feature: 4^4=256
- s_range_low: [-4.8,-4,-.418,-4]
- s_range_high: [4.8,4,.418,4]

also can be divided into half-size like [-2.4,-2,-.2618,-2] and [2.4,2,.2618,2]

State space to Feature space: (4,) -> (256,)<br>
Action sapce: (2,)<br>

Experimental length:

- episode length: 2000
- step length: 1000, actually maximum will be 200

Hyperparameters:

- lr: 0.1
- gm: 0.99
- epsilon: from 1, epsilon\*=epsilon_decay_rate for each episode
- epsilon decay rate: 0.995
- eligibility trace factor (lmd): 0.5

**SARSA($$\lambda$$) with eligibility traces can reach stable behaviors around 200 episodes due to non-linear epsilon annealing**

Learned optimal Values:

<center><img src="/judy_blog/assets/images/q_op_rbf_90deg.png" width=1000></center>

**SARSA(λ)** implementation with 4xRBF networks:

```python
def normalize(s):
    s_norm=np.zeros(len(s))
    for i in range(len(s)):
        s_norm[i]=(s[i]-s_range[0,i])/(s_range[1,i]-s_range[0,i])
    return s_norm

def get_feature(s):
    fs=np.zeros(n_feature)
    for i in range(n_feature):
        fs[i]=np.exp(-np.linalg.norm(s-c[i,:])**2/den)
    return fs

def get_Q(fs,theta):
    Q=np.dot(theta.T,fs)
    return Q

def e_greedy(e,Q):
    rand=np.random.random()
    if rand<1.-e:
        a=Q.argmax()
    else:
        a=env.action_space.sample()
    return int(a)

env=gym.make("CartPole-v0")
n_s=env.observation_space.shape[0]
n_a=env.action_space.n

n_rbf=4*np.ones(n_s).astype(int)
width=1./(n_rbf-1.)
sigma=width[0]/2.
den=2*sigma**2

s_range=np.zeros((2,n_s))
s_range[0,:]=np.array([-4.8,-4,-.418,-4])
s_range[1,:]=np.array([4.8,4,.418,4])

n_feature=np.prod(n_rbf)
fs=np.zeros(n_feature)
fs_=np.zeros(n_feature)
theta=np.zeros((n_feature,n_a))

c=np.zeros((n_feature,n_s))

for i in range(n_rbf[0]):
    for j in range(n_rbf[1]):
        for k in range(n_rbf[2]):
            for l in range(n_rbf[3]):
                c[l*(n_rbf[3]**0)+k*(n_rbf[2]**1)+j*(n_rbf[1]**2)+i*(n_rbf[0]**3),:]=(i*width[3],j*width[2],k*width[1],l*width[0])

n_eps=2000
n_stps=1000

gm=0.99
lr=0.1
lmd=0.5

#non-linear decay
epsilon=1
epsilon_decay_rate=0.995

r_all,stp_all=[],[]
q_all=[]

for ep in range(n_eps):

    r_sum,done=0,False
    epsilon*=epsilon_decay_rate
    e=np.zeros((n_feature,n_a))

    s=normalize(env.reset())
    fs=get_feature(s)
    Q_old=get_Q(fs,theta)

    a=e_greedy(epsilon,Q_old)

    for stp in range(n_stps):

        s_,r,done,_=env.step(a)
        s_=normalize(s_)
        fs_=get_feature(s_)
        Q=get_Q(fs_,theta)
        a_=e_greedy(epsilon,Q)

        if done:
            delta=r-Q_old[a]
        else:
            delta=r+gm*Q[a_]-Q_old[a]

        e[:,a]=fs

        for m in range(n_feature):
            for n in range(n_a):
                theta[m,n]+=lr*delta*e[m,n]

        e*=gm*lmd

        s=s_
        fs=fs_
        a=a_
        Q_old=Q
        r_sum+=r

        if done:
            break

    r_all.append(r_sum)
    stp_all.append(stp)
    if ep%(n_eps//5)==0 or ep==n_eps-1:
        print(f"ep:{ep}, stp:{stp}, r:{np.round(r_sum,2)}, eps:{epsilon}")

```

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

[Doya 2000] Doya, Kenji. "Reinforcement learning in continuous time and space." Neural computation 12.1 (2000): 219-245.

[\[Sutton's C code\]](http://incompleteideas.net/book/code/pole.c)
