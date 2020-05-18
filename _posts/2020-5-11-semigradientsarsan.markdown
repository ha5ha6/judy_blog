---
layout: single
type: posts
title:  "Semi-gradient N-step SARSA"
date:   2020-5-11 11:42:25 +0900
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

### General Update Rule  

The general approach to computing the estimations of value functions is to have the agent follow policy π and maintain for each state (or state-action) a running average of the returns that follow

    NewEstimate <- OldEstimate + α [Target - OldEstimate]  

    Target - the return from the current state / state-action  
           - can be the actual return Gt, or some estimation of it  

### Monte Carlo

    V(s_t) <- V(s_t) + α [G_t - V(s_t)]

    Q(s_t,a_t) <- Q(s_t,a_t) + α [G_t - Q(s_t,a_t)]

    G_t - the complete sample return  
        - an unbiased estimator of Vπ(s), i.e. E[G_t|s_t=s]=Vπ(s)

(+) the average of these returns will converge in the long run to Vπ(s)  
(-) since the selection of actions in an episode is stochastic, there will be a high variance amongst the returns  
(-) G_t is only available at the end of an episode, we must wait until then before we can make an update  

### One-step TD

truncate return G_t to G_{t:t+1}  

    G_{t:t+1} = R_{t+1} + V(s_{t+1})

    G_{t:t+1} - re-estimation of the value of current state made at the next timestep t+1  
              - a biased estimator due to its dependence on the estimate V(s_{t+1})

    V(s_t) <- V(s_t) + α [G_{t:t+1} - V(s_t)]

    Q(s_t,a_t) <- Q(s_t,a_t) + α [G_{t:t+1} - Q(s_t,a_t)]

**One-step SARSA**

    Q(s_t,a_t) <- Q(s_t,a_t) + α [R_{t+1} + Q(s_{t+1},a_{t+1}) - Q(s_t,a_t)]

**bootstrapping** - basing an estimate off of other estimates  

(+) good thing for introducing bias is lower variance, since the target only depends on one stochastic action selection  
(+) target available at each step, online, and faster than MC  

**the estimates of Vπ(s) based on future time steps are better than those made at the current time step intuitively makes sense**, cuz it's more accurate when things get close to the future (have more information)   

### N-step TD  

1-step target updates bootstrap from V(s_{t+1}):

    G_{t:t+1} = R_{t+1} + V(s_{t+1})

n-step target updates bootstrap from V(s_{t+n}):

    G_{t:t+n} = R_{t+1} + γR_{t+2} + ... + γ^(n-1)R_{t+n} + γ^(n)V(s_{t+n})

update rules:

    V(s_t) <- V(s_t) + α [G_{t:t+n} - V(s_t)]

    Q(s_t,a_t) <- Q(s_t,a_t) + α [G_{t:t+n} - Q(s_t,a_t)]

**N-step SARSA**

    Q(s_t,a_t) <- Q(s_t,a_t) + α [R_{t+1} + γR_{t+2} + ... + γ^(n-1)R_{t+n} + γ^(n)Q(s_{t+n},a_{t+n}) - Q(s_t,a_t)]  

**Increasing N reduces the bias of the estimator (moving us closer towards the unbiased estimates of MC) but increases the variance, as well as the time we have to wait before we make an update**  

### Approximation Methods

    V_hat(s,w),  Q_hat(s,a,w)

    w ∈ R^d is the weight vector, whose dimensionality d is much less than the number of states  

approximation to supervised learning:  

    St -> Ut

    St - the state whose value is to be updated  
    Ut - a target that doesn't depend on w  

we can interpret (St,Ut) as an input-output training example for V_hat, if we consider mean square error:

    [Ut - V_hat(St,w)]^2   

we can perform the weight update via stochastic gradient descent (SGD):

    w_{t+1} = w_t - 1/2 α ∇w_t [Ut - V_hat(St,w_t)]^2   
            = w_t + α [Ut - V_hat(St,w_t)] ∇w_t V_hat(St,w_t)

    w_{t+1} = w_t - 1/2 α ∇w_t [Ut - Q_hat(St,At,w_t)]^2   
            = w_t + α [Ut - Q_hat(St,At,w_t)] ∇w_t Q_hat(St,At,w_t)

The target for approximate MC is Ut=Gt, given rise to **Gradient MC**  
The target for approximate N-step TD is Ut=G_{t:t+n}, **however,** this bootstrapping target depends on the current value of w, which breaks the key assumption of the gradient update rule, therefore it's called **Semi-gradient** methods, since they ignore part of the gradient  

### Semi-gradient TD(λ)

MC and N-step TD takes a **forward view**: values of states are updated by looking ahead to the values of future states

**However,** the target is not actually available until n steps into the future  
also means that the updates are not equally distributed in time: we need to wait for n updates after the episode has finished    

TD(λ) converts the forward view into **backward view** by a short-term memory vector called **Eligibility Traces** z_t ∈ R^d, that parallels the long-term weight w ∈ R^d, keeping track of which components of w have contributed to recent state values  

    z_1 = 0  
    z_t = γλz_{t-1} + ∇w_t V_hat(St,w_t)   0<=t<=T

    γ - discount rate  
    λ ∈ [0,1]

The trace indicates **which components of w deserve most credit for the error at the current state**, where error is defined by the moment-by-moment one-step TD error

    δ_t = G_{t:t+1} - V_hat(St,w_t)

components of w that have contributed most recently, or most frequently to preceding state valuations are assigned the most credit, and are said to be the most "eligible" for an update  

    w_{t+1} = w_t + α δ_t z_t

    when λ=0, the update reduces to the one-step semi-gradient TD update
    z_t = ∇w_t V_hat(St,w_t)
    w_{t+1} = w_t + α δ_t ∇w_t V_hat(St,w_t)

    recall the state-value gradient for St:
    w_{t+1} = w_t - 1/2 α ∇w_t [Ut - V_hat(St,w_t)]^2   
            = w_t + α [Ut - V_hat(St,w_t)] ∇w_t V_hat(St,w_t)

    when λ=1, the trace decays only according to γ, and the update reduces to the MC gradient update  

The intermediate values of λ represent intermediate levels of bootstrapping between these two extremes,  
just as intermediate values of n represent intermediate levels of bootstrapping in the n-step TD  

**λ-return**:  

TD(λ) is equivalent to n-step TD, where G_{t:t+n} is replaced by a compound return composed of a weighted average of all the n-step returns, each weighted proportional to λ^(n-1), and normalized by a factor of 1-λ to ensure the weights sum to 1  

                    ∞
    G_t^(λ) = (1-λ) Σ  λ^(n-1) G_{t:t+n}
                   n=1

            = (1-λ) [G_{t:t+1} + λG_{t:t+2} + λ^2 G_{t:t+3} + ...]

    when λ=0, G_t^(λ) reduces to one-step TD, G_t^(λ) = G_{t:t+1}
    when λ=1, G_t^(λ) reduces to MC, G_t^(λ) = G_t

**Eligibility Traces**  
(+) updates are now performed continually and uniformly in time rather than being delayed n steps and then catching up at the end of the episode  
means that learning can occur and affect behavior immediately after a state is encountered rather than being delayed n steps  
(+) only a single trace vector needs storing rather than the last n feature vectors  

### Linear Value Function Approximation  

    V_hat(s,w) = w'Φ(s) = Σ_d w_i Φ_i(s)

    Φ(s) - a featurized representation of s of the same dimension as w  

    ∇w V_hat(s,w) = Φ(s)

**Polynomial Featurization**:  

    Φ(s) = (1,s1,s2,s1s2,s1s2^2,s1^2s2,s1^2s2^2)'

**Tile Coding**:  




### Reference

Sutton 2nd 10 On-policy Control with Approximation  
Sutton 2nd 12 Eligibility Traces  
[Michael O'Neill's ML Blog](https://michaeloneill.github.io/RL-tutorial.html)  
