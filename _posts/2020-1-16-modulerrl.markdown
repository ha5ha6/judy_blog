---
layout: single
type: posts
title:  "Modular RL"
date:   2020-1-16 12:02:25 +0900
related: true
categories: RL-Basic
tags:
  #- Index
  - Reinforcement Learning
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Modular Deep Reinforcement Learning with Temporal Logic Specification

a modular Deep Deterministic Policy Gradient (DDPG) architecture is proposed to generate a low-level control policy  

Deep reinforcement learning is an emerging paradigm for autonomous solving of decision-making tasks in **complex and unknown environments**. However, tasks featuring extremely **delayed rewards** are often difficult, if at all possible, to solve with monolithic learning in Reinforcement Learning (RL). A well-known example is the Atari game Montezuma’s Revenge in which deep RL methods such as (Mnih et al. 2015) failed to score even once.  

Despite their generality, it is not fair to compare deep RL methods with how humans learn these problems, since **humans already have prior knowledge and associations regarding elements and their corresponding function**, e.g. “keys open doors” in Montezuma’s Revenge. These simple yet **critical temporal high-level associations** in Montezuma’s Revenge and a large number of real world complex problems, can lift deep RL initial knowledge about the problem to efficiently find the global optimal policy, while **avoiding an exhaustive unnecessary exploration in the beginning**.  

Hierarchical RL -> options  

LTL - Linear Temporal Logic  
- used to encode the structure of the high-level mission task and to automatically shape the reward function  

**Refs**

[Precup 2001] Precup, D. 2001. Temporal abstraction in reinforcement learning. Ph.D. Dissertation, University of Massachusetts Amherst.  
[Kearns and Singh 2002] Kearns, M., and Singh, S. 2002. Near-optimal reinforcement learning in polynomial time. Machine learning 49(2-3):209–232.  
[Daniel, Neumann, and Peters 2012] Daniel, C.; Neumann, G.; and Peters, J. 2012. Hierarchical relative entropy policy search. In Artificial Intelligence and Statistics, 273–281.  
[Kulkarni et al. 2016] Kulkarni, T. D.; Narasimhan, K.; Saeedi, A.; and Tenenbaum, J. 2016. Hierarchical deep reinforcement learning: Integrating temporal abstraction and intrinsic motivation. In Advances in neural information processing systems, 3675–3683.  
[Vezhnevets et al. 2016] Vezhnevets, A.; Mnih, V.; Osindero, S.; Graves, A.; Vinyals, O.; Agapiou, J.; et al. 2016. Strategic attentive writer for learning macro-actions. In Advances in neural information processing systems, 3486–3494.  
[Andreas, Klein, and Levine 2017] Andreas, J.; Klein, D.; and Levine, S. 2017. Modular multitask reinforcement learning with policy sketches. In Proceedings of the 34th International Conference on Machine Learning-Volume 70, 166–175.  

### Modular Reinforcement Learning An Application to a Real Robot Task

The key idea is to break up the problem into subtasks and design controllers for each of the subtasks. Then operating conditions are attached to the controllers (together the controllers and their operating conditions which are called modules) and possible additional features are designed to facilitate observability.  

A new discrete time-counter is introduced at the "module-level" that clicks only when a change in the value of one of the features is observed.  

The learnt switching strategy performed equally well as a handcrafted version.  

RL algorithms are based on modifications of the two basic dynamic-programming algorithms used to solve MDPs namely the value- and policy-iteration algorithms.  

Problem: Partial Observability  

In this article an attempt is made to show that RL can be applied to learn real life tasks **when a priori knowledge is combined in some suitable way.** The key to our proposed method lies in the use of high-level modules along with a specification of the operating conditions for the modules and other features to transform the task into a finite-state and action completely-observable task.  

Bellman equations can be solved by various dynamic programming methods such as the value- or policy-iteration methods.  

There are two possible ways to learn the optimal value-function.  
- to estimate the model i.e. the transition probabilities and immediate costs  
- to estimate the optimal action-values directly

A switching function S maps featrue-vectors to the indices of modules: S(f)=i  

RL can
- find the best switching function assuming that at least two proper switching functions exist
- decide empirically whether a valid switching controller exists at all  

The work of Connell and Mahadevan complements the works in that they set-up subtasks to be learned by RL and fixed the switching controller.  
[S Mahadevan and J Connell Automatic programming of behavior-based robots using reinforcement learning. Artificial Intelligence]  

Asada et al. describe a goal-shooting problem in which a mobile robot shot a goal while avoiding another robot [Uchibe 1996]. The robot learned two behaviors separately: the "shot" and "avoid" behaviors. Then the two behaviors were synthetized by a handcrafted rule and later this rule was refined via RL. The learnt action-values of the two behaviors were reused in the learning process while the combination of rules took place at the level of state variables.  

[Uchibe 1996] Behavior coordination for a mobile robot using modular reinforcement learning.  

### Composable Modular Reinforcement Learning

Truly modular RL would support not only decomposition into modules, but composability of separately written modules in new modular RL agents.  

However, the performance of MRL agts that arbitrate module preferences using additive reward schemes degrades when the modules have incomparable reward scales. The performance degradation means that separately written modules cannot be composed in new modular RL agents as-is - they may need to be modified to align their reward scales.  

The problem is solved with a Q-learning based command arbitration algorithm and demonstrate that it does not exhibit the same performance degradation as existing approaches to MRL.  

Decomposition is an important tool for dealing with the larger state spaces likely to be encountered in real-world problems.  

**Hierarchical RL** decomposes RL problems **temporally**, modeling intermediate tasks as higher-level actions.  

**Modular RL** decomposes the original problem **concurrently**, modeling an agent as a set of concurrently running RL modules.  

MRL has been used primarily **to model multi-goal problems** and **to deal with large state spaces.**  

### Hierarchical Deep Reinforcement Learning: Integrating Temporal Abstraction and Intrinsic Motivation

Learning goal-directed behavior with sparse feedback from complex environments is a fundamental challenge for artificial intelligence.  

Learning in this setting requires the agent to **represent knowledge at multiple levels of spatio-temporal abstractions** and to explore the environment efficiently.  
- represent knowledge at multiple levels of spatio-temporal abstractions -> non-linear function approximators + RL
- explore with sparse feedback -> still remains a major challenge  

Exploration methods:
- Boltzmann exploration [31]
- Thomson sampling [19]

In this work, we propose a framework that integrates **deep reinforcement learning with hierarchical action-value functions** (h-DQN), where
- the top-level module learns a policy over options (subgoals) and
- the bottom-level module learns policies to accomplish the objective of each option

The model takes decisions over two levels of hierarchy –  
(a) a top level module (meta-controller) takes in the state and picks a new goal, and  
(b) a lower-level module (con- troller) uses both the state and the chosen goal to select actions either until the goal is reached or the episode terminates.  

**Value functions** V (s) are central to RL, and they cache the utility of any state s in achieving the agent’s overall objective.  
Recently, value functions have also been generalized as V (s, g) in order to represent the utility of state s for achieving a given goal g ∈ G [33, 21].  

**Temporal Abstraction**  

Hierarchical reinforcement learning [2] - Barto  
**"Options" framework** [34] - Sutton - involves abstractions over the space of actions  

At each step, the agent chooses either a one step "primitive" action or a "multi-step" action poilicy (option).  
Each option defines a policy over actions and can be terminated according to a stochastic function β.

MDP -> semi-MDP

recent proposed methods about learning options in real-time
- by using varying reward functions [35]
- by composing existing options [28]
- value functions considering goals along with states [21]

**MAXQ framework** decomposed the value function of an MDP into combinations of value functions of smaller constituent MDPs [6]  

[31] B. C. Stadie, S. Levine, and P. Abbeel. Incentivizing exploration in reinforcement learning with deep predictive models. arXiv preprint arXiv:1507.00814, 2015.  
[19] I.Osband,C.Blundell,A.Pritzel,andB.VanRoy.Deepexploration via bootstrapped dqn.arXivpreprint arXiv:1602.04621, 2016.   
[2] A. G. Barto and S. Mahadevan. Recent advances in hierarchical reinforcement learning. Discrete Event Dynamic Systems, 13(4):341–379, 2003.  
[34] R.S.Sutton,D.Precup,andS.Singh. Between mdps and semi-mdps: A framework for temporal abstraction in reinforcement learning. Artificial intelligence, 112(1):181–211, 1999.  
[35] C. Szepesvari, R. S. Sutton, J. Modayil, S. Bhatnagar, et al. Universal option models. In Advances in Neural Information Processing Systems, pages 990–998, 2014.  
[28] J. Sorg and S. Singh. Linear options. In Proceedings of the 9th International Conference on Autonomous Agents and Multiagent Systems, pages 31–38, Richland, SC, 2010.  
[21] T. Schaul, D. Horgan, K. Gregor, and D. Silver. Universal value function approximators. In Proceedings of the 32nd International Conference on Machine Learning (ICML-15), pages 1312–1320, 2015.  

### Hierarchical Reinforcement Learning: Learning sub-goals and state-abstraction

**Hierarchical RL**  

Motivation - the curse of dimensionality  
problem caused by the exponential growth of parameters to be learned, associated with adding extra variables to a representation of a state. Applying RL with a very large action and state space tunred to be an impossible task.  

HRL introduces various forms of **abstraction and problem hierarchization**.

**Hierarchization** divides the main problem in sub-problems that can be solved using regular RL. Each sub-problem has its own sub-goal. The sequential resolution of serveral sub-goals takes us to the solution of the main problem.  

Hierarchical Abstract Machines - [Parr and Russell 1998]
The options framework - [Sutton 1999]

The goal of HRL:  
discovering and exploiting hierarchical structure within a MDP  

Given an MDP, the programmer will be responsible for designing a task hierarchy for a specific problem
- decomposing the main task into several subtasks that are, in turn, also decomposed until a subtask is reached that is composed only by primitive actions  
- each subtask will learn its own Q function which represents the expected total reward of performing subtask on an initial state

HSMQ - Hierarchical Semi-Markov Q-learning - is seen as a collection of simultaneous, independent Q-Learning problems, no representational decoomposition of the value function  

MAXQ did the value function decomposition [dietterich 2000a]   
MAXQ + state abstractions -> four times efficient   
(-) hand code for the task structure  

HEXQ - automatically tries to decompose and solve a model-free factored MDP [Hengst, 2002]  
automatically discovering state and temporal abstraction, finding appropriate sub-golas in order to construct a hierarchical representation

**Scalability** is one of the biggest limitations in RL, cuz sub-policies need to be relevant in every new context.  

The perfect solution would be to learn once each sub-task, and then reuse that whenever the skill was needed.  

[Bernhard Hengst. Discovering Hierarchy in Reinforcement Learning with HEXQ. Proceedings of the Nineteenth International Conference on Machine Learning, 2002. URL http://portal.acm.org/citation.cfm?id=645531.656017.]

### Multiple Model-based Reinforcement Learning

MMRL - basic idea:  
- decompose a complex task into multiple domains in space and time based on the predictability of the environmental dynamics
- the system is composed of multiple modules, each of which consists of a state prediction model and a RL controller  
- a "responsibility signal" given by a softmax function of the prediction errors is used to weight the outputs of multiple modules as well as to gate the learning of the prediction models and RL controllers  

Real World RL problem: Non-linearity and non-stationarity  
- for non-linear, high-dimensional system, learning is slow
- for non-stationary, hidden states, perform badly  

**modular or hierarchical RL**    

Compositional Q-learning - [Singh 1992]  
Feudal reinforcement learning - [Dayan and Hinton 1993]  
Learning policies for partially observable environments: Scaling up - [Littman et al. 1995]  
HQ-learning - [Wiering and Schmidhuber 1998]  
Reinforcement learning with hierarchies of machines - [Parr and Russel 1998]  
Between mdps and semi-mdps: A framework for temporal abstraction in reinforcement learning - [Sutton 1999]  
Acquisition of stand-up behavior by a real robot using hierarchical reinforcement learning - [Morimoto and Doya 2001]  

The basic problem in modular or hierarchical RL is **how to decompose a complex task into simpler subtasks**.  

### Policy Reuse in Reinforcement Learning for Modular Agents

Hierarchical RL addresses continuous environment spaces by using different abstraction levels to learn task-specific partial policies with computable bounds [7]

For exceedingly large state spaces, HRL has been widely practiced.  
Where multiple objectives and temporal abstractions are adopted to facilitate space explorations.  

i.e. in [11] [12], at each time t and for each state st, a higher level controler chooses the goal gt where G is the set of all possible goals currently available for the controller to choose from.  

RL problems -> modular task, and every problem is actually composed of concurrent sub-problems with matter of abstraction levels. [3]

Different approaches to hierarchical RL result in variants on this overall approach, choosing different trade-offs in flexibility, training speed, and other properties [25]  

[7] J. Z. Kolter, P. Abbeel, and A. Y. Ng, “Hierarchical apprenticeship learning with application to quadruped locomotion,” in Advances in Neural Information Processing Systems, pp. 769–776, 2008.  
[10] T. Haarnoja, V. Pong, A. Zhou, M. Dalal, P. Abbeel, and S. Levine, “Composable deep reinforcement learning for robotic manipulation,” arXiv preprint arXiv:1803.06773, 2018.   
[11] T. D. Kulkarni, K. Narasimhan, A. Saeedi, and J. Tenenbaum, “Hier- archical deep reinforcement learning: Integrating temporal abstraction and intrinsic motivation,” in Advances in neural information processing systems, pp. 3675–3683, 2016.  
[12] V. Mnih, A. P. Badia, M. Mirza, A. Graves, T. Lillicrap, T. Harley, D. Silver, and K. Kavukcuoglu, “Asynchronous methods for deep reinforcement learning,” in International conference on machine learning, pp. 1928–1937, 2016.  
[13] S. Levine, C. Finn, T. Darrell, and P. Abbeel, “End-to-end training of deep visuomotor policies,” The Journal of Machine Learning Research, vol. 17, no. 1, pp. 1334–1373, 2016.  
[14] S. Bhat, C. L. Isbell, and M. Mateas, “On the difficulty of modular reinforcement learning for real-world partial programming,” in Proceedings of the National Conference on Artificial Intelligence, vol. 21, p. 318, Menlo Park, CA; Cambridge, MA; London; AAAI Press; MIT Press; 1999, 2006.  
[3] O. S ̧ims ̧ek, A. P. Wolfe, and A. G. Barto, “Identifying useful subgoals in reinforcement learning by local graph partitioning,” in Proceedings of the 22nd international conference on Machine learning, pp. 816–823, ACM, 2005.  
[25] K. Frans, J. Ho, X. Chen, P. Abbeel, and J. Schulman, “Meta learning shared hierarchies,” arXiv preprint arXiv:1710.09767, 2017.  

### On the Difficulty of Modular Reinforcement Learning for Real-World Partial Programming

Modular reinforcement learning (MRL) refers to the decomposition of a complex, multi-goal problem into a collection of simultaneously running single-goal learning processes, typically modeled as MDP.   These subagents share an action set but have their own reward signal and state space.  

At each time step, every subagent reports a numerical preference (Q-values) for each available action to **an arbitrator**, which then selects one of the actions for the agent as a whole to take.  

**Optimally combining subagent Q-values in a meaningful way has thus become the focus of recent work.**  

Arbitration:  
- choose the action maximizing average happiness - argmax Sum(Qj)
- choose the action using winner-take-all - argmax maxj Qj

Arbitration approaches assume the subagent reward signals are comparable. However, it's only reasonable for toy problems, not for real-world, multi-goal problems.  

In multi-goal case, not only must the designer properly craft a reward signal for each subagent, she also must **ensure that the reward units are consistent between the subproblems**.  

Solution: **Social Choice Theory**  
Reduce the problem of constructing an arbitration function to a variant of Impossibility Theorem for social ordering functions [Arrow 1966] - characterizing MRL as a social welfare problem  

**Partial Programming**  
a designer or programmer specifies only that part of the program known to be correct, allowing a learning system to learn the rest from experience i.e. RL  
One can think partial programming as a way for a designer to inject prior knowledge into a learning agent  

Allowing the programmer to constrain the set of policies considered by hand-authoring a subroutine hierarchy -
[Andre and Russel 2000] - Programmable Reinforcment Learning Agents.  
[Dietterich 1998] - The MAXQ Method for Hierarchical Reinforcement Learning.  

HRL - a temporal dexomposition of goals  
MRL - concurrent subgoal decomposition  

Predator-Food Task:  
- avoiding the predator - can assign a large negative reward  
- find food - can assign a large positive reward

However, how to design the magnitudes of the rewards particularly in relation to each other is difficult! Should maintain some reward consistency.  

Solution: to require the reward signal to be internally consistent, rather than consistent across different subgoals  

Arbitration techniques:
- Great Mass Q-Learning [Sprague and Ballard 2003]
- Top Q-Learning [Humphrys 1996]
- Negotiated W-Learning []

### Multiobjective Reinforcement Learning: A Comprehensive Overview

challenge: to scale up RL to larger and come complex problems - the scaling problem  

- a problem has very large or continuous state or action space
- a problem is best described as a set of hierarchically organized tasks and sub-tasks  
- a problem needs to solve several tasks with different reward simultaneously <- multiobjective RL (MORL)    

MORL requires a learning agent to obtain action policies that can optimize two or more objectives at the same time. Each objective has its own associated reward, so the reward is not a scalar but a **vector**.

- related objectives, a single objective can be derived by combining all
- unrelated objectives, each obj can be optimized separately, can find a combined policy to optimize all of them  
- conflicting objectives, (any policy can only max one of the objs), need trade-off  

MORL - combination of multiobj optimization (MOO) + RL to solve the sequential decision making problems with multiple conflicting objs.  

MOO has 2 strategies:  

- multi-obj to single-obj strategy, to optimize a scalar value
- Pareto strategy

Multi-obj to single-obj: a scalar value is computed from the multi objs for the utility of an action decision, so the single obj optimization can be used  

- Weighted sum method [14]
- Constraint method [15]
- Sequential method [16]
- Max-min method [17]

Pareto: use the vector-valued utilities, the Pareto optimality concept [25]
The Pareto optimal solutions are defined as noninferior and alternative solutions among the candidate solutions, and they represent the optimal solutions for some possible trade-offs among the multiple conflicting objs.  
Goal is to find Pareto front  

Early approach to solve MDPs is to use DP  
DP computes the optimal policies by estimating the optimal state-action value functions  
(-) DP requires full model info  
(-) large amounts of computation are needed for large state and action spaces  

RL use Monte Carlo + stochastic approximation + function approximation  

Temporal-difference (TD) = Monte Carlo + DP  
- learn the value function without model like Monte Carlo  
- update the current estimation of value functions partially based on previous learned results

For discounted reward criteria  
- Q learning
- SARSA

For the average reward criteria   
- R learning

MORL problem definition:  
MQ^π(s,a)=[Q1^π(s,a),Q2^π(s,a),...,Qn^π(s,a)]^T - vectored state-action value function  
Qi^π - ith obj  

MQ*(s,a)=max_π MQ^π(s,a)  
π*(s)=argmax_a MQ*(s,a)  

MORL approaches:  
- Single-policy approach  
- Multi-policy approach  

Single-policy approach: to obtain the best policy which simultaneously satisfies the preferences among the multiple objs  

Naive solution: to design **a synthetic obj function TQ(s,a)**, which can suitably represent the overall preferences  

Multi-policy approach: to obtain a set of policies that can approximate the Pareto front  

Naive solution: to find policies in the Pareto front by using different synthetic obj functions.  
Obviously, if a set of parameters can be specified in a synthetic obj function, the optimal policy can be learned for this set of parameters.  

MORL Approaches:  

Single-policy:

A. Weighted Sum Approaches

- Great Mass  

Synthetic objective function: TQ(s,a)=sum Qi(s,a)   

- GM-Sarsa(0) - avoid the positive bias problem

Synthetic objective function: TQ(s,a)=sum wi*Qi(s,a)

positive bias problem: caused by off-policy RL methods which only use the estimates of greedy actions for learning updates  
GM-Sarsa(0) is expected to have smaller errors between the estimated Q and the true Q, since the updates are based on the actually selected actions rather than the best action determined by the value function  

Linear weighted sum will meet the problem of concave regions  

B. W-Learning Approaches (winner-take-all)  

to ensure the selected action is optimal for at least one obj  

- Top-Q

Synthetic objective function: TQ(s,a)=max_i Qi(s,a)

- W-learning [32]
- negotiated W-learning  

C. AHP Approach  

- the Analytic Hierarchy process [34]  

Based on the designer's prior knowledege of the problem, the degree of relative importance between 2 objs can be quantified by L grades, and a scalar value is defined for each grade  

D. Ranking Approach [37]

threshold values were specified for some objs in order to put the constraints on the objs  

Synthetic objective function: CQi(s,a)=min {Qi(s,a), Ci}  
Ci - the threshold value for obj i  

E. Geometric Approach  

Multi-policy:

F. Convex Hull Approach  

G. Varying Parameter Approach  

**HRL** - makes use of a divide-and-conquer strategy to solve complex tasks with large state or decision spaces  

MORL requires the learning agent to solve serveral tasks with differnt objs at once  
HRL aimes to solve sequential decision-making problem that can be best described as a set of hierarchically organized tasks and sub-tasks.  

HRL approaches:  

- HAMs [81]
- MAXQ [82]
- Options [83]
- ALisp [84]
- using simi-MDP [85]
- state space partitioned by critical state [86]
- HAPI, binary-tree state space decomposition [87]
- HRL + MORL [88]


[14] I.Y.KimandO.L.deWeck,“Adaptive weighted sum method for multiobjective optimization: A new method for Pareto front generation,” Struct. Multidiscipl. Optim., vol. 31, no. 2, pp. 105–116, 2006.  
[15] A. Konaka, D. W. Coitb, and A. E. Smith, “Multi-objective optimiza- tion using genetic algorithms: A tutorial,” Reliab. Eng. Syst. Safety, vol. 91, no. 9, pp. 992–1007, Sep. 2006.  
[16] M. Yoon, Y. Yun, and H. Nakayama, Sequential Approximate Multiobjective Optimization Using Computational Intelligence. Berlin, Germany: Springer, 2009.  
[17] J. G. Lin, “On min-norm and min-max methods of multi-objective optimization,” Math. Program., vol. 103, no. 1, pp. 1–33, 2005.

[25] P. Vamplew, J. Yearwood, R. Dazeley, and A. Berry, “On the limitations of scalarisation for multi-objective reinforcement learning of Pareto fronts,” in Proc. 21st Aust. Joint Conf. Artif. Intell., vol. 5360. 2008, pp. 372–378.

[32] M. Humphrys, “Action selection methods using reinforcement learning,” in From Animals to Animats 4, P. Maes, M. Mataric, J.-A. Meyer, J. Pollack, and S. W. Wilson, Eds. Cambridge, MA, USA: MIT Press, 1996, pp. 134–144.   
[34] Y. Zhao, Q. W. Chen, and W. L. Hu, “Multi-objective reinforcement learning algorithm for MOSDMP in unknown environment,” in Proc. 8th World Congr. Int. Control Autom., 2010, pp. 3190–3194.  
[37] Z. Gabor, Z. Kalmar, and C. Szepesvari, “Multi-criteria reinforcement learning,” in Proc. 15th Int. Conf. Mach. Learn., 1998, pp. 197–205.  
[38] P. Geibel, “Reinforcement learning with bounded risk,” in Proc. 18th Int. Conf. Mach. Learn., 2001, pp. 162–169.  

[81] R. Parr and S. Russell, “Reinforcement learning with hierarchies of machines,” in Advances in Neural Information Processing Systems. Cambridge, MA, USA: MIT Press, 1997, pp. 1043–1049.  
[82] T. Dietterich, “Hierarchical reinforcement learning with the MaxQ value function decomposition,” J. Artif. Intell. Res., vol. 13, no. 1, pp. 227–303, Aug. 2000.  
[83] D. Precup and R. Sutton, “Multi-time models for temporally abstract planning,” in Advances in Neural Information Processing Systems. Cambridge, MA, USA: MIT Press, 1998, pp. 1050–1056.  
[84] D. Andre and S. Russell, “State abstraction for programmable reinforcement learning agents,” in Proc. 18th Nat. Conf. Artif. Intell., 2002, pp. 119–125.  
[85] A. G. Barto and S. Mahadevan, “Recent advances in hierarchical rein- forcement learning,” Discrete Event Dyn. Syst. Theory Appl., vol. 13, nos. 1–2, pp. 341–379, 2003.  
[86] Z. Jin, W. Y. Liu, and J. Jin, “Partitioning the state space by critical states,” in Proc. 4th Int. Conf. Bio-Inspired Comput., 2009, pp. 1–7.  
[87] X. Xu, C. Liu, S. Yang, and D. Hu, “Hierarchial approximate policy iteration with binary-tree state space decomposition,” IEEE Trans. Neural Netw., vol. 22, no. 12, pp. 1863–1877, Dec. 2011.  
[88] H. B. He and B. Liu, “A hierarchical learning architecture with multiple-goal representations based on adaptive dynamic programming,” in Proc. Int. Conf. Netw. Sens. Control, 2010, pp. 286–291.  


### A Generalized Algorithm for Multi-Objective Reinforcement Learning and Policy Adaptation

MORL deals with learning control policies to simultaneously optimize over several criteria  

The optimal policy in a multi-obj setting depends on the relative preferences among competing criteria  

MORL
(+) reduced dependence on scalar reward design to combine different objs with is both a tedious manual task and can lead to unintended consequences  
(+) dynamic adaptation or transfer to related tasks with different preferences  

### HRA  

challenge of RL: to scale methods such that they can be applied to large, real-world problems  

Because the state-space of such problems is typically massive, strong generalization is required to learn a good policy efficiently <- DRL breakthrough  

Generalization properties of DQN is achieved by approximating the optimal value function  

Value function predicts the expected return, conditioned on a state or state-action pair  

The generalization behavior of DQN is achieved by regularization on the model for the optimal value function.  

However, if the optimal value function is complex, then learning an accurate low-dimensional representation can be challenging or impossible.  

When the optimal value function cannot easily be reduced to a low-dimensional representation, we can **apply a complementary form of regularization on the target side**.  

Propose to replace the optimal value function as target for training with an alternative value function that is easier to learn, but still yields a reasonable - but generally not optimal - policy, when acting greedily with respect to it.  

**The key observation behind regularization on the target function is that two very different value functions can result in the same policy when an agent acts greedily with respect to them.**

**Intrinsic motivation** uses this observation to improve learning in sparse-reward domains  

[Stout et al 2005] - Intrinsically motivated reinforcement learning: A promising framework for developmental robotics  
[Schmidhuber, 2010] - Formal theory of creativity, fun, and intrinsic motivation   

by adding a domain-specific intrinsic reward signal to the reward coming from the env.  

**Reward Decomposition***: decompose the reward function into n different reward functions. Each of them is assigned a separate RL agent.  

Same as **Horde architecture** [Sutton et al 2011] - Horde: A scalable real-time architecture for learning knowledge from unsupervised sensorimotor interaction   

All the agents can learn in parallel on the same sample sequence by using off-policy learning.  

Each agent gives its action-values of the current state to an aggregator, which combines them into a single value for each action. The current action is selected based on the aggregated values.  

Horde architecture:  
- a large of "demons" that learn in parallel via off-policy learning  
- each demon trains a separate general value function based on its own policy and pseudo-reward function  
- a pseudo-reward can be any feature-based signal that encodes useful info  

The Horde architecture is focused son building up **general knowledge about the world**, encoded via a large number of GVFs.  

UVFA [Schaul et al. 2015] - Universal value function approximators

- enables generalization across different tasks/goals
- does not address how to solve a single, complex task   

Multi-objective learning [Roijers et al. 2013] - A survey of multi-objective sequential decision-making

Reward function decomposition:  
[Russell and Zimdar 2003] - Q-decomposition for reinforcement learning agents  
[Sprague and Ballard 2003] - Multiple-goal reinforcement learning with modular sarsa(0)  

HRA and UNREAL [Jaderberg et al 2017] - Reinforcement learning with unsupervised auxiliary tasks  
(same) solve multiple smaller problems in order to tackle a hard one  
(diff) working ways  
(diff) the challenge they address   

UNREAL:
- boosts representation learning in difficult scenarios  
- by using auxiliary tasks to help train the lower-level layers of the nn

HRA:  
- HRA's multiple smaller tasks are not unsupervised, they are tasks directly relevant to the main task  
- HRA is agnostic to the type of function approximation used, i.e. dnn or tabular representation  
- useful for domains where having a high-quality representation is not sufficient to solve the task efficiently

"Options":  
[Sutton et al 1999] - Between mdps and semi-mdps: A framework for temporal abstraction in reinforcement learning  
[Bacon et al 2017] - The option-critic architecture  

**options** are temporally-extended actions that can be trained in parallel based on their own reward functions.  
However, once an option has been trained, the role for its intrinsic reward function is over.  
A higher-level agent that uses an option sees it as just another action and evaluates it using its own reward function.  
This can yield great speed-ups in learning and help substaintially with better exploration, but they do not directly make the value function of the higher-level agent less complex.  

Hierarchical RL:  
[Barto and Mahadevan 2003] - Recent advances in hierarchical reinforcement learning  
[Kulkarni el al 2016] - Hierarchical deep reinforce- ment learning: Integrating temporal abstraction and intrinsic motivation    

### Horde architecture  

How to learn, represent, and use knowledge of the world in a general sense remains a key open problem in AI.  

- high-level representation: based on first-order predicate logic and Bayes network that are very expressive, but difficult to learn and computationally expensive to use  
- low-level representation: i.e. equations and state-transition matrices that can be learned from data without supervision, but less expressive  

There remains room for exploring alternate formats for knowledge that are expressive yet learnable from unsupervised sensori-motor data  

**Knowledge representation** based on the notion of value functions  
Knowledge is represented as a large number of approximate value functions learned in parallel  
each with its own policy, pseudo-reward function, pseudo-termination function, and pseudo-terminal-reward function  

Related:
- options [Sutton et al 2006] [Sutton et al 1999], explored as temporal-difference networks   

Gradient-descent temporal-difference algorithms  
[sutton et al 2009,2008] - A convergent O(n) algorithm for off-policy temporal-difference
learning with linear function approximation
[Maei et al 2009,2010] - Convergent temporaldifference learning with arbitrary smooth function approximation, Toward off-policy learning control with function approximation  

**Off-policy experience** means experience generated by a policy called the **behavior policy**.

Behavior policy is different from that being learned about, called **target policy**.  

One wants to learn in parallel about many policies - the different target policy π of each GVF - but of course one can only behave according to one policy.  

For a typical GVF, the actions taken by the behavior policy will match its target policy only on occasion, and rarely for more than a few steps in a row.

**For efficient learning, we need to be able to learn from these snippets of relevant experience, and this requires off-policy learning.**  

**The on-policy learning would require learning only from snippets that are complete in that the actions match those of the GVF's target policy all the way to pseudo-termination, a much less common occurrence.**  

**If learning can be done off-policy from incomplete snippets of experience then it can be massively parallel and potentially much faster than on-policy learning.**


### Learning Independently-Obtainable Reward Functions

2019

proposed a method learning a set of disentangled reward functions that sum to the original env reward and are constrained to be independently obtainable.  

state decomposition:  

many goals RL [Kaelbling 1993] - Learning to achieve goals

[Laversannne-Finot et al 2018] - Curiosity driven exploration of learned disentangled goal spaces  

decomposition of env state and learning corresponding control policies are separate processes  

[Thomas et al 2017] - Independently controllable features  

pairs together components of the learned state representation with control policies and measures the degree to which policies can control their corresponding components independently of other components  

They leverage some notion of disentanglement to address RL problems, but they didn't take into account the reward function.  

=> **Reward Decomposition**:  
rewards are functions of state and have corresponding policies and hence decomposing rewards also implicitly decomposes states as well as policies.  

Env decompositions:  
[Guestrin et al 2002] - Multiagent planning with factored mdps  
[Kok and Vlassis 2006] - Collaborative multiagent reinforcement learning by payoff propagation  
[Hu et al 1998] - Multiagent reinforcement learning: theoretical framework and an algorithm  

Reward factorization:  
[Van Seijen et al 2017] - HRA  
[Russell and Zimdars 2003] - Q-decomposition  

### Distributional Reward Decomposition for Reinforcement Learning

2019 nips

multiple reward channel  

exisiting reward decomposition methods requires:  
- prior knowledge of the env
- without prior knowledge but with degraded performance  

Reward decomposition views the total reward as the sum of sub-rewards that are usually disentangled and can be obtained independently  

[Sprague and Ballard 2003] - Modular Sarsa (0)  
[Russell and Zimdars 2003] - Q decomposition   
[Van Seijen et al 2017] - HRA  
(-) require prior knowledge  
[Grimm and Singh 2019] - Learning Independently-Obtainable Reward Functions  
(-) requires the env can be reset to arbitrary state and cannot apply to general RL setting where states can hardly be revisited  
(-) despite the meaningful reward decomposition they achieved, they fail to utilize the reward decomposition into learning better policies  

The sub-rewards may further be leveraged to learn better policies  

propose **Distributional Reward Decomposition** for RL:  
captures the latent multiple-channel structure for reward, under the setting of distributional RL  

**Distributional RL** estimates the distribution rather than the expectation of returns, and therefore captures richer information than value-based RL

propose an RL algorithm that estimates distributions of the sub-returns and combine the sub-returns to get the distribution of the total returns  

To avoid naive decomposition such as 0-1 or half-half, further propose a disentanglement regularization term to encourage the sub-returns to be diverged  

Learn Different state representations for different channels  

State Decomposition:  
[Laversannne-Finot et al 2018]    
[Thomas et al 2017]  

Distributional RL:  
C51 - [Bellemare et al 2017] - A distributional perspective on reinforcement learning  

Horde - [Sutton et al 2011]  
UVFA - [Schaul et al 2015] - Universal value function approximators  

### Behavior Coordination for a Mobile Robot Using Modular Reinforcement Learning

the prominence of RL role is largely dependent on the extent to which the learning can be scaled to solve larger and more complex robot learning tasks.

[Singh] [11]  
[Whitehead et al] [14]  
[Connel and Mahadevan] [5]  
[Gachet et al] [7]  

Existing methods explained above assume that the subtask state spaces do not interfere with each other or they are completely independent of each other. This assumption is too idealized and often does not hold in real robot tasks.

[Asada et al ] [3]  

proposed a method for behavior coordination in a case that the subtask state spaces interfere with each other, and they applied it to real soccer robots.

propose

1) state space is classified into 2 categories based on the action values separately obtained by Q-learning
- no more learning area - where one of the learned behaviors is directly applicable  
- re-learning area - learning is necessary due to the competition of multiple Behaviors

2) hidden states are detected by model fitting to the learned action values based on the information criterion  

3) the initial action values in the re-learning area are adjusted so that they can be consistent with the values in the no more learning area  

previous methods for multi-goal:  
- simple addition Q(s,a)=sum(Qi(s,a))
- simple switching Q(s,a)=i_Qi(s,a)  

These methods cannot cope with local maxima and/or hidden states caused by combination of state spaces. Consequently, an action suitable for these situations has never been learned  

To cope with these new situations, the robot needs to learn a new behavior by using the previously learned behaviors  

proposed:

1) construct a new combined state space  
2) learn a new behavior in the new state space  

Q(s,a) for normal states s  
Q(s_sub,a) for new sub-states  
Q initial = sum(Q)

conservative strategy is used around the normal states  
high random strategy around the new sub-states  

**Hidden states**:  
aka inconsistent states  
hidden states prevent the learning robot from acquiring an optimal behavior, therefore the robot should be able to find hidden states autonomously  

experiment: shoot a ball into a goal without collisions with a keeper robot  

two sub-tasks:
- shoot a ball into the goal  
- avoid a moving keeper robot  

then coordinate  






[11] S. P. Singh. Transfer of Learning by Composing So- lution of Elemental Sequential Tasks. In Machine Learning, Vol. 8, pp. 99–115, 1992.  
[14] S. D. Whitehead, J. Karlsson, and J. Tenenberg. Learning Multiple Goal Behavior Via Task Decomposition And Dynamic Policy Merging. In Connel and Mahadevan [6], chapter 3.  
[5] J. H. Connel and S. Mahadevan. Rapid Task Learning for Real Robot. In Robot Learning [6], chapter 5, pp. 105–140.  
[7] D. Gachet, M. A. Salichs, L. Moreno, and J. R. Pi- mentel. Learning Emergent Tasks for an Autonomous Mobile Robot. In Proc. of the 1994 IEEE/RSJ In- ternational Conference on Intelligent Robots and Sys- tems, pp. 290–297, 1994.  

[3] M. Asada, E. Uchibe, S. Noda, S. Tawaratsumida, and K. Hosoda. Coordination Of Multiple Behaviors Acquired By A Vision-Based Reinforcement Learn- ing. In Proc. of the 1994 IEEE/RSJ International Conference on Intelligent Robots and Systems, Vol. 2, pp. 917–924, 1994.  


### References

[1] Modular Deep Reinforcement Learning with Temporal Logic Specifications, 2019  
[2] Modular Reinforcement Learning An Application to a Real Robot Task, 1997  
[3] Composable Modular Reinforcement Learning, 2019  
[4] Hierarchical Deep Reinforcement Learning: Integrating Temporal Abstraction and Intrinsic Motivation, 2016  
[5] Hierarchical Reinforcement Learning: Learning sub-goals and state-abstraction, 2011  
[6] Multiple Model-based Reinforcement Learning, 2002  
[7] Policy Reuse in Reinforcement Learning for Modular Agents, 2019  
[8] On the Difficulty of Modular Reinforcement Learning for Real-World Partial Programming, 2006  
[9] Multiobjective Reinforcement Learning: A Comprehensive Overview, 2014    
[10] A Generalized Algorithm for Multi-Objective Reinforcement Learning and Policy Adaptation, 2019  
[11] Hybrid Reward Architecture for Reinforcement Learning, 2017  
[12] Horde: A scalable real-time architecture for learning knowledge from unsupervised sensorimotor interaction, 2011  
[13] Learning Independently-Obtainable Reward Functions, 2019  
[14] Distributional Reward Decomposition for Reinforcement Learning, 2019  
[?] Global Policy Construction in Modular Reinforcement Learning, 2015  


### Additional

**Convergence guarantee of Q-learning and SARSA**  

If in the limit the Q values of all admissible state-action pairs are updated infinitely often, and α decays in a way satisfying the usual stochastic approximation conditions, then the Q values will converge to the optimal value Q* with probability 1 [20].  

For the Sarsa algorithm, if each action is executed infinitely often in every state that is visited infinitely often, the action is greedy with respect to the current Q value in the limit, and the learning rate decays appropriately, then the estimated Q values will also converge to the optimal value Q* with probability 1 [21].  

[20] T. Jaakkola, M. I. Jordan, and S. P. Singh, “On the convergence
of stochastic iterative dynamic programming algorithms,” Neural
Comput., vol. 6, no. 6, pp. 1185–1201, Nov. 1994.
[21] S. P. Singh, T. Jaakkola, M. L. Littman, and C. Szepesvari,
“Convergence results for single-step on-policy reinforcement learning
algorithms,” Mach. Learn., vol. 38, no. 3, pp. 287–308, Mar. 2000.
