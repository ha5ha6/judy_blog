---
layout: single
type: posts
title:  "Action Selection in RL"
date:   2022-4-29 12:04:25 +0900
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
usemathjax: true
---

### drawback of $$\epsilon$$-greedy

when it explores it chooses equally among all actions

this means that it is as likely to choose the worst-appearing actions as it is to shoose the next-to-best action

### softmax

Gibbs or Boltzmann distribution

$$\frac{\exp{Q_t(a)/\tau}}{\sum_{b=1}^n \exp{Q_t(b)/\tau}}$$

$$\tau$$ - temperature

high $$\tau$$ causes the actions to be all euiprobable

low $$\tau$$ cause a greater difference in selection probability for actions that differ in their value estimates

$$\tau \rightarrow 0$$ - same as greedy action selection

note: when number of action =2, softmax becomes sigmoid


### softmax in machine learning

"Any time we wish to represent a probability distribution over a discrete variable with n possible values, we may use the softmax function"

- activation function in nn

when the nn is configured to output N class labels (multi-class classification)

- can be used as an activation function for a hidden layer, when the model internally needs to choose or weight multiple different inputs at a bottleneck or concatenation layer

- softmax is a softened version of the argmax function that returns the index of the largest value in a list


    given [1,3,2]

    hard max returns [0, 1, 0]

    softmax returns [0.09, 0.67, 0.24]


```python
import numpy as np

def softmax(vector):
    e=np.exp(vector)
    return e/e.sum()

softmax([1,3,2])

>>array([0.09003057, 0.66524096, 0.24472847])
```

```python
from scipy.special import softmax

softmax([1,3,2])

>>array([0.09003057, 0.66524096, 0.24472847])
```

encoded class labels (one-hot encoding):

    class 0: [1,0,0]
    class 1: [0,1,0]
    class 2: [0,0,1]

    in softmax case:

    class 2: [0.09, 0.67, 0.24]
