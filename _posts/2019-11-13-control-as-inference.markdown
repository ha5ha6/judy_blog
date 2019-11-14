---
layout: single
type: posts
title:  "Control as Inference"
date:   2019-11-13 16:03:25 +0900
related: true
categories: LiteratureReview
tags:
  #- Index
  - Soft-Q Learning
  - KL Divergence
  - Reinforcement Learning
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### the Equivalence


      probabilistic inference                          
      under deterministic dynamics -                      - a generalization of RL
                                    | <=> max entropy RL |   
      variational inference        -                      - optimal control problem
      under stochastic dynamics                       

### Probabilistic Graphical Models (PGMs)

- provide a consistent and flexible framework to devise principled objectives  
- set up models that reflect the causal structure
- allow a common set of inference methods to be deployed against a broad range of problem domains  

**!!setting a learning problem as a PGM is the crucial step to solve it**

### Motivation of connecting PGM and RL/control

probabilistic models + reward/utility => decision making/optimal control/RL  

Formalize decision making as inference in PGM can  
(+) allow the use of approximate inference tools  
(+) extend the model in flexible and powerful ways  
(+) reason about compositionality and partial observability  

Similar literature:  
[3] the Kalman duality  
[4] maximum entropy RL  
[5] KL-divergence control  
[6] stochastic optimal control  

Formulates RL/decision making as inference can provide   
(+) a natural exploration strategy based on entropy maximization  
(+) effective tools for inverse RL  
(+) the ability to deploy approximate inference algorithms to solve RL problems  
(+) appealing probabilistic interpretation for the meaning of the reward function and its effect on the optimal policy  

Reward design in RL sometimes  
(-) blurs the line between algorithm and objective with task-specific heuristics and task objectives combined into a single reward  

In the control as inference framework  
**reward** induces a distribution over random variables  
**optimal policy** aims to explicitly match a probability distribution defined by the reward and system dynamics  
-> suggest a way to systematize reward design  

### A Graphical Model for Control as Inference  

PGM <=> RL objective + an entropy term  

**RL problem formulation**
![](/assets/images/rlform.png){:width="80%"}

Questions:  
How can we formulate a PGB such that the most probable trajectory corresponds to the trajectory from the optimal policy?  
Or How can we formulate a PGM such that inferring the posterior action conditional p(a_t|s_t,theta) gives us the optimal policy?

**Introducing reward**

![](/assets/images/pgmreward.png){:width="80%"}  

Explanation:  
Suppose with a deterministic dynamic system, where the "Dynamic probability" term is a **constant** for all trajectories that are dynamically feasible.  
Then, the trajectory with **the highest reward has the highest probability**, and trajectories with **lower reward have exponentially lower probability**.  

### Policy search as Probabilistic inference






### Refs

[1]Levine, Sergey. "Reinforcement learning and control as probabilistic inference: Tutorial and review." arXiv preprint arXiv:1805.00909 (2018).  

**PGM**  
[2]Koller, D. and Friedman, N. (2009). Probabilistic Graphical Models: Principles and Techniques. The MIT Press.

**PGM and RL/Control**  
[3]Todorov, E. (2008). General duality between optimal control and estimation. In Conference on Decision and Control (CDC).  
[4]Ziebart, B. (2010). Modeling purposeful adaptive behavior with the principle of maximum causal entropy. PhD thesis, Carnegie Mellon University.  
[5]Kappen, H. J., Gómez, V., and Opper, M. (2012). Optimal control as a graphical model inference problem. Machine Learning, 87(2):159–182.  
Kappen, H. J. (2011). Optimal control theory and the linear bellman equation. Inference and Learning in Dynamic Models, pages 363–387.  
[6]Toussaint, M. (2009). Robot trajectory optimization using approximate inference. In International Conference on Machine Learning (ICML).  
