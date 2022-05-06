---
layout: single
title: Policy Gradient and Actor-Critic
permalink: "/pgac/"
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


Note: the notations and formalizations follow the previous post [Basic Reinforcement Learning](/judy_blog/basicrl/)

### TD Prediction

**constant-$$\alpha$$ MC**:




See [Maximization Bias Example](https://ha5ha6.github.io/judy_blog/td/#maximization-bias-example) for more info


### Important Concepts

**Sample updates**: involve looking ahead to a sample successor state (or state-action pair), using the value of the successor and the reward along the way to compute a backed-up value and then updating the value of the original state (or state-action pair)





### Short Corridor

<center><img src="https://miro.medium.com/max/1400/1*05SUEn1Mc8_EKVUAR5qa4A.png" width=500></center>

    a four-state gridworld + an undiscounted deterministic episodic task

    states = {0,1,2,3}
    actions = {left, right}

    0,left -> 0 (no movement)
    0,right -> 1
    2,left -> 1
    2,right -> T

    but,
    1,left -> 2
    1,right -> 0

    termination: 3
    r=-1 per step

Since it's a deterministic env where $$p(s' \mid s,a)=1$$, we have three linear Bellman equations

$$\begin{align*}

V_{\pi}(s) &= \sum_{a} \pi(a \mid s) \sum_{s'} p(s' \mid s,a) \left[r_t+\gamma V_{\pi}(s') \right] \\

V_{\pi}(s) &= \sum_{a} \pi(a \mid s) \left[r_t+\gamma V_{\pi}(s') \right] \\

V(s_0) &= p(-1+V(s_1))+(1-p)(-1+V(s_0)) \\

V(s_1) &= p(-1+V(s_0))+(1-p)(-1+V(s_2)) \\

V(s_2) &= p(-1+V(s_3))+(1-p)(-1+V(s_1)) \\

\end{align*}$$

where $$V(s_3)=0$$, $$p$$ is the probability of choosing right action

we have

$$V(s_0)=\frac{2(p-2)}{p(1-p)}$$


```python

```


<center><img src="/judy_blog/assets/images/ann_sarsa_heatmap_cliffwalk.png" width=350><img src="/judy_blog/assets/images/ann_sarsa_oppi_cliffwalk.png" width=350></center>

<center><img src="/judy_blog/assets/images/ann_ql_heatmap_cliffwalk.png" width=350><img src="/judy_blog/assets/images/ann_ql_oppi_cliffwalk.png" width=350></center>



```python

```

<center><img src="/judy_blog/assets/images/doubleq_maxbias.png" width=400></center>

The above corresponds to Figure 6.5

### References

**Reinforcement Learning an Introduction 2nd edition** by Sutton and Barto

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)

[Deep Reinforcement Learning - Julien Vitay](https://julien-vitay.net/deeprl/BasicRL.html)

### Slides and Code

[judy_tutorial_basicRL](https://github.com/ha5ha6/judy_tutorial_basicRL)
