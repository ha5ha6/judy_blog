---
layout: single
type: posts
title:  "Curiosity"
date:   2020-12-3 12:31:25 +0900
related: true
categories: Literature
tags:
  #- Index
  - Reinforcement Learning
  #- Soft-Q Learning
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Background

Deal with sparse reward:

- curiosity-driven / intrinsic motivation  
intrinsic curiosity model  
curiosity in model-based RL  

- curriculum learning  
automatic generation of easy goals  
learning to select easy tasks  

- auxiliary tasks  

- reward shaping  

- dense reward  


### Curiosity [1]

**curiosity** can serve as an intrinsic reward signal to enable the agent to explore its env
**curiosity** helps an agent explore its env in the quest for new knowledge  
**curiosity** is a mechanism for an agent to learn skills that might be helpful in future scenarios  




fomulate **curiosity** as the error in an agent’s ability to predict the consequence of its own actions in a visual feature space learned by a self-supervised inverse dynamics model

Intrinsic Reward:  

1. encourage the agent to explore "novel" states
2. encourage the agent to perform actions that reduce the error/uncertainty in the agent's ability to predict the consequence of its own actions

Difficulty:  

- measuring "novelty" requires a statistical model of the distribution of the env states
- measuring prediction error/uncertainty requires building a model of env dynamics that predicts the next state given the current state and the action

Self-supervision:  
Training an NN on a proxy inverse dynamics task of predicting the agent's action given its current and next states

Two subsystems:  
- a curiosity-driven intrinsic reward signal  
- a policy that outputs a sequence of actions to maximize that reward signal  

divide all sources that can modify the agent's observations into 3 cases:  
1. things that can be controlled by the agent  
2. things that the agent cannot control but can affect the agent (a vehicle driven by another agent)
3. things out of the agent's control and not affecting the agent (moving leaves)

A good feature space for curiosity should model 1 and 2 and be unaffected by 3

Two sub-modules:  
1. encodes the raw state into a feature vector  st -> φ(st)
2. input φ(st) and φ(st+1) and output a_hat_t, a_hat_t=g(st,st+1;θ_I), a_hat_t is the predicted estimate of the action at

Loss function of inverse model:  

    min L_I (a_hat_t,a_t)
    θ_I

the learned model g() is also known as the inverse dynamics model

Loss function of feature prediction:  

    min L_F (φ(st),φ_hat_(st+1)) = 1/2 ||φ_hat_(st+1)-φ(st+1)||^2_2

    φ_hat_(st+1)=f(φ(st),at:θ_F)

the learned model f() is known as the forward dynamics model  

The intrinsic reward signal r^i_t is  

    r^i_t=η/2 ||φ_hat_(st+1)-φ(st+1)||^2_2

The overall optimization problem:

    min          -λE   [Σ r_t] + (1 − β)L_I + β_LF]
    θP ,θI ,θF      π(st;θP )

### Refs

[Reinforcement Learning: Dealing with Sparse Reward Environments](https://medium.com/@m.k.daaboul/dealing-with-sparse-reward-environments-38c0489c844d)

[1] Pathak et al. "curiosity-driven exploration by self-supervised prediction."

[2] Burda et al. "Large-Scale Study of Curiosity-Driven Learning"

[3]
