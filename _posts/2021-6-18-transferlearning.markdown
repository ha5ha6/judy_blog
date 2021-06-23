---
layout: single
type: posts
title:  "Transfer Learning in RL"
date:   2021-6-18 14:08:25 +0900
related: true
categories: Literature
tags:
  #- Index
  - Reinforcement Learning
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Transfer between RL tasks  

Tabula Rasa: an absence of preconceived ideas or predetermined goals; a clean slate  

Tabula rasa is the theory that individuals are born without built-in mental content, and therefore all knowledge comes from experience or perception. Epistemological proponents of tabula rasa disagree with the doctrine of innatism, which holds that the mind is born already in possession of certain knowledge  

Speed up leanring by exploiting domain expertise with varying amounts of human-provided knowledge:  
- hierarchy of subtasks [Dietterich 2000]
- learning with higher-level, temporally abstract, actions, i.e. options [Sutton et al 1999]
- efficiently abstracting over the state space i.e. via function approximation  

The **insight behind Transfer Learning** is that **generalization may occur not only within tasks, but also across tasks**  

Transfer learning history:  
- in psychological literature [Thorndike and Woodworth 1901] [Skinner 1953]
- transfer between machine learning tasks [Caruana 1996] [Thrun 1996]
- for planning tasks [Fern et al 2004] [Ilghami et al 2005]  
- in the context of cognitive architectures [Laird et al 1986] [Choi et al 2007]  
- surveys in RL [Kaelbling et al 1996]  
- for transfer across machine learning tasks [Thrun and Pratt 1998]  

In transfer, knowledge from one or more **source tasks** is used to learning one or more **target tasks** faster than if transfer was not used  

Outline:

- what are the goals of the transfer method? By what metrics will success be measured?  

- what assumptions, if any, are made regarding the similarity between the tasks?

- how does a transfer method identify what information can/should be transferable?  

- what information is transferred between tasks?  



### Evaluating Transfer Learning Methods  

To be fully autonomous, an RL transfer agent would have to perform all of the following steps:  

- given a target task, select an appropriate source task or set of tasks from which to transfer  
- learn how the source tasks and target tasks are related  
- effectively transfer knowledge from the source tasks to the target tasks  

**While the mechanisms used for these steps will necessarily be interdependent, TL research has focused on each independently, and no TL methods are currently capable of robustly accomplishing all three goals**  

**a total time scenario**:   
One possible goal of transfer is to reduce the overall time required to learn a complex task  
more appropriate when an agent is explicitly guided by a human  
the agent would have to learn **the entire sequence of tasks** faster than if it had spent its time learning the final target task directly  

**a target task time scenario**:  
Another goal is to effectively reuse past knowledge in a novel task  
more appropriate for a fully autonomous learner  

Some metrics:  
- Jumpstart: the initial performance of an agent in a target task may be improved by transfer from a source task  
- Asysmptotic Performance: the final learned performance of an agent in the target task may be improved via transfer  
- Total Reward: the total reward accumulated by an agent may be improved if it uses transfer, compared to learning without transfer  
- Transfer Ratio: the ratio of the total reward accumulated by the transfer learner and the total reward accumulated by the non-transfer learner  
- Time to Threshold: the learning time needed by the agent to achieve a pre-specified performance level may be reduced via knowledge transfer  

think of learning time as a surrogate for sample complexity  
**sample complecity** in RL refers to the amount of data required by an algorithm to learn  
it is strongly correlated with learning time because RL agents only gain data by collecting it through repeated interactions with an env  

A multi-dimensional evaluation with multiple metrics:  

metrics for ML:  
precision vs. recall curves for classification  
mean squared error for regression  

problems of RL:  
**However**, RL has no such standard, RL just empirically compares 2 RL algorithms  
standardizing comparisons [Whiteson et al 2008]  
theoretical comparisons are also not clear-cut, as samples to convergence, asymptotic performance, and the computational complexity are all valid axes along which to evaluate RL algorithms  
RL methods are often not guaranteed to converge with function approximation and even when they do, learners may converge to different, sub-optimal performance levels. If enough samples are provided to agents (or equivalently, learners are provided sufficient training time), a learning method which achieves a high performance relatively quickly will have less total reward than a learning method which learns very slowly but eventually plateaus at a slightly higher performance level

**inter-domain comparisons**:

compare w/o transfer  
often do not attempt to direcly compare different transfer methods  

**dimensions of comparison**  

we categorize TL algorithms along 5 dimensions  

1. task difference assumptions: what assumptions does the TL method make about how the source and target are allowed to differ?  

2. source task selection:  

3. task mappings: in addition to knowing that a source task and target task are related, they need to know how they are related  
**inter-task mappings** are a way to define how two tasks are related  

4. transferred knowledge: low-level to high-level  

5. allowed learners:


### Transfer in RL  

MDP's frame:  

    state: s∈S,
    initial state: s_initial
    terminal/goal state: s_final  
    reward: R
    discount factor: γ

    state variables: s=<x1,x2,...,xn>  
    actiosn: a∈A
    transition: T:SXA|->S
    policy: π:S|->A
    optimal policy: π*

by using **a discount factor**, the agent can weigh immediate rewards more heavily than future rewards, allowing it to maximize a non-infinite sum of rewards  

TL methods are particularly relevant in MDPs that have a large or continuous state, as these are the problems which are slow to learn tabula rasa and for which transfer may provide sustantial benefits  

such tasks typically factor the state using **state variables (or features)**, so that s=<x1,x2,...,xn>  

an optimal policy π\*, is a policy which does maximize the expectation of the value. Any reasonable learning algorithm attempts to modify π over time so that the agent's performance approaches that of π\* in the limit  

**policy learning methods**:  

- temporal difference (TD) methods: i.e. Q-learning, SARSA, learning by backing up experienced rewards through time  
- policy search methods: i.e. policy iteration (dynamic programming), policy gradient [Williams 1992:Baxter and Bartlett 2001], direct policy search [Ng and Jordan 2000], learning by directly modifying a policy over time to increase the expected long-term reward by using search or other optimization techniques  
- dynamic programming [Bellman 1957]: assume that a full model of the env is known (i.e. S,A,T,R, are provided and are correct), no interaction with the env is necessary, but the agent must iteratively compute approximations for the true value or action-value function, improving them over time
- model-based methods [Moore and Atkeson 1993;Kearns and Singh 1998]: attempt to estimate the true model of the env (i.e T and R) by interacting with the env over time, however, they generally have trouble scaling to tasks with many state variables due to the 'curse of dimensionality' [Ormoneit and Sen 2002;Dearden et al 1999;Jong and Stone 2007]  
- rational RL [Dzeroski et al 2001]
- batch learning methods: i.e. Least Squares Policy Iteration [Lagoudakis and Parr 2003], Fitted-Q Iteration [Ernst et al 2005]  
- state abstractions/structural abstraction: [Dean and Givan 1997;Li et al 2006;Mahadevan and Maggioni 2007]
- temporal abstractions: i.e. macro-actions or options [Sutton et al 1999] may allow the agent to leverage the sequence of actions to learn its task with less data  
- hierarchical methods: i.e. MAXQ [Dietterich 2000] allow learners exploit a task that is decomposed into different sub-tasks  

**Model Task: mountain car**  

an under-powered car moves along a curve and attempts to reach a goal state at the top of the right 'mountain' by selecting between three actions on every timestep  

    actions: {forward, neutral, backward}  
    forward: accelerates the car in the positive x direction  
    backward: accelerates the car in the negative x direction  
    states: {x, x_dot}
    x: the horizontal position  
    x_dot: the velocity on the horizontal position  
    reward: -1 on each time step  
    terminal: if the agent reaches the goal state, the episode ends, and the agent is reset to the start state  

**Allowed Task Differences**  

TL methods can transfer between MDPs that have different  
- transition functions (t from T)
- state spaces (s)
- start states (s_i)
- goal states (s_f)
- state variables (v)
- reward functions (r)
- action sets (a)
- the agent's representation of the world remains the same while the true state variables and actions can change (p)
- some number of objects that may change between the source and the target task (#)

in mountain car:
- t: using a more powerful car motor or changing the surface friction of the hill  
- s: changing the range of the state variables
- s_i: changing where the car starts each episode
- s_f: changing the goal state of the car  
- v: describing the agent's state only by its velocity  
- r: rather than a reward of -1 on every step, the reward could be a function of the distance from the goal state  
- a: disabling the 'Neutral' action
- p: the agent could describe the state by using extra state variables, such as the velocity on the previous timestep, but the agent only directly measures its current position and velocity  
- #: the agent may need to control two cars simultaneously on the hill   

**Knowledge**:  

low-level knowledges that could be directly leveraged by the TL algorithm to initialize a learner in the target task:  

- <s,a,r,s'> instances (I)
- an action-value function (Q)  
- a policy (π)
- a full task model (model)
- prior distribution (pri)

high-level knowledges for guiding learning:  

- what action to use in some situations (A: a subset of the full set of actions)
- partial policies or options (πp)
- rules or advice (rule)
- important features for learning (fea)
- proto-value functions (pvf: a type of learned feature)
- shaping rewards (R)
- subtask definitions (sub)  


**Task Mapping**:

in addition to having the same labels, the state variables and actions need to have the same semantic meanings in both tasks  

consider mountain car domain again:  

    source task actions A: {forward, neutral, backward}
    target task actions A: {right, neutral, left}

a TL method would need some kind of mapping because the actions had different labels

suppose  

    target task actions A: {forward, neutral, backward}
    but the car was facing the opposite direction

if the source and target task actions have different semantic meanings, there will also need to be some kind of inter-task mapping to enable transfer  

TL methods which aim to transfer between tasks **with different state variables or actions** typically rely on a task mapping to define how the tasks are related  











### Reference

[Taylor and Stone, Transfer Learning for Reinforcement Learning Domains: A Survey]　　  
