---
layout: single
type: posts
title:  "Selected Papers - CoRL 2019"
date:   2019-11-11 18:01:25 +0900
related: true
categories: LiteratureReview
tags:
  #- Index
  - MPC
  - Reinforcement Learning
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
author_profile: true
---

### Deep Value Model Predictive Control

- Motivation    
the sparsity of the reward and potential non-differentiability rule out the possibility of using Trajectory Optimization (TO)   

- Goal   
combine model-based and sample-based approaches to exploit the knowledge of the system dynamics while effectively exploring the env

- MPC - a model-based Trajectory Optimization approach  
MPC truncates the time horizon of the task, continually shifts the shortened horizon forward, and optimizes the state-input traj based on new state measurements  

- MPC disadvantage  
(1) relatively high computational cost  
(2) the optimization time horizon is often kept short    
(3) therefore, prevents it from finding temporally global solutions    
(4) heavily relies on the differentiability of the formulation   
(5) hard to deal with sparse and non-continuous reward/cost signals  

- DRL advantage  
(1) good in long-horizon tasks with sparse rewards  
(2) even in continuous control domain  

- DRL disadvantage  
(1) requires enormous data  
(2) suffers from the exploration-exploitation dilemma  

- DMPC - an actor-critic approach <-proposed method  
actor: an MPC policy  
critic: a value function learner  
the MPC actor interacts with env and collects samples to update Value critic  
the Terminal Cost of MPC is determined by the estimated Value critic

![](https://ha5ha6.github.io/judy_blog/assets/images/DMPC.png){:width="80%"}

- Contribution  
(1) an in-depth analysis of the bilateral effect of DMPC  
(2) show that the MPC actor is an importance sampler that minimizes an upper bound of the cross-entropy to the state traj distribution of the optimal sampling policy  
(3) transform an initially stochastic task into a deterministic optimal control problem  
(4) empirically validate that defining a running cost instead of the heuristic function accelerates the convergence of the value function, which makes DMPC good at sparse reward function   

### An Online Learning Procedure for Feedback Linearization Control without Torque Measurements  

- Motivation  
the estimation of the robot dynamic model is usually performed offline, therefore, changes in the structural parameters will restart the identification procedure from scratch, especially during robot's interaction with other objects (i.e. payloads to the end-effector, collision detection, reaction strategies adopted during motion)

- Related Approaches - using regression  
(1) direct dynamic model learning - how the system, given its actual state, responds to a certain input, i.e.   
  - learn the transition probability model [10]  
  - reconstruct the system nonlinear dynamics with GP [12]  
  - use a regressor as predictive model for nonlinear MPC [13]    
- 
(2) inverse dynamic model learning - estimating the input that needs to be given to the system in order to achieve a certain desired new state  

- Goal  
use a linear MPC, but designed a procedure for learning the inverse dynamic model  
learn the unmodeled dynamics to improve the feedback linearization process without the use of any joint torque measurements, which __are known to be noisy__  









- MPC refs in robotics:  
[1] K. Alexis, C. Papachristos, G. Nikolakopoulos, and A. Tzes. Model predictive quadrotor in- door position control. In 2011 19th Mediterranean Conference on Control Automation (MED), pages 1247–1252, June 2011. doi:10.1109/MED.2011.5983144.  
[2] F.Farshidian,E.Jelavic,A.Satapathy,M.Giftthaler,andJ.Buchli.Real-timemotionplanning of legged robots: A model predictive control approach. In Humanoids, pages 577–584, 2017. doi:10.1109/HUMANOIDS.2017.8246930.  
[3] J. Koenemann, A. D. Prete, Y. Tassa, E. Todorov, O. Stasse, M. Bennewitz, and N. Mansard. Whole-body model-predictive control applied to the hrp-2 humanoid. In IROS, pages 3346– 3351, 2015.  

- Learning direct dynamics model by regression refs:  
[10] M.Deisenroth,D.Fox,andC.EdwardRasmussen.Gaussianprocessesfordata-efficientlearn- ing in robotics and control. IEEE Transactions on Pattern Analysis and Machine Intelligence, 37:408–423, 02 2015. doi:10.1109/TPAMI.2013.218.  
[11] S. Kamthe and M. Deisenroth. Data-efficient reinforcement learning with probabilistic model predictive control. In Proc. of the International Conference on Artificial Intelligence and Statis- tics (AISTATS), 2018.  
[12] F. Berkenkamp and A. P. Schoellig. Safe and robust learning control with gaussian processes. In 2015 European Control Conference (ECC), pages 2496–2501, July 2015. doi:10.1109/ECC. 2015.7330913.  
[13] C. Ostafew, A. Schoellig, and T. D. Barfoot. Robust constrained learning-based NMPC en- abling reliable mobile robot path tracking. The International Journal of Robotics Research, 35, 05 2016. doi:10.1177/0278364916645661.  

- Learning inverse dynamics model by regression refs:  
[14] Z. Shareef, P. Mohammadi, and J. Steil. Improving the inverse dynamics model of the KUKA LWR IV+ using independent joint learning. IFAC-PapersOnLine, 49(21), 09 2016.  
[15] T. Waegeman, F. Wyffels, and B. Schrauwen. Feedback control by online learning an inverse model. Neural Networks and Learning Systems, IEEE Transactions on, 23:1637–1648, 10 2012. doi:10.1109/TNNLS.2012.2208655.  
[16] J. Umlauft, T. Beckers, M. Kimmel, and S. Hirche. Feedback linearization using gaussian processes. In 2017 IEEE 56th Annual Conference on Decision and Control (CDC), pages 5249–5255, Dec 2017. doi:10.1109/CDC.2017.8264435.  
[17] D. Nguyen-Tuong, M. Seeger, and J. Peters. Computed torque control with nonparametric regression models. In 2008 American Control Conference, pages 212–217, June 2008. doi: 10.1109/ACC.2008.4586493.  
