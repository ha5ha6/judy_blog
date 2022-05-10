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

Despite value-based methods where policies were derived from the action-value functions, we can learn a parameterized policy $$\pi(a \mid s; \boldsymbol{\theta})$$ directly, with $$\boldsymbol{\theta}$$ being the policy parameters

The parameters are updated in a gradient ascent fashion based on a scalar performance measure $$J(\boldsymbol{\theta})$$:

$$\boldsymbol{\theta}_{t+1}=\boldsymbol{\theta}_t+\alpha \hat{\nabla J(\boldsymbol{\theta}_t)}$$

where $$\hat{\nabla J(\boldsymbol{\theta}_t)} \in \mathbb{R}^d$$ is a stochastic estimate whose expectation approximates the gradient of $$J(\boldsymbol{\theta})$$

### Advantages of Policy-based Methods

- policy may be a simpler function to approximate, so that it learns faster and yields a superior asymptotic policy (this varies in the complexity of the policies and action-value functions)

- the choice of policy parameterization is a good way of injecting prior knowledge

- the continuity of the policy dependence on the parameters enables the action probabilities to change smoothly and therefore allows for convergence guarantees with gradient ascent

- etc

### Action Formulations

In order to construct a **differentiable** policy for **discrete action spaces**, we often form a **softmax policy**:

$$\pi(a\mid s; \boldsymbol{\theta}) \triangleq \frac{\exp \boldsymbol{\theta}^T \phi(s,a)}{\sum_b \exp \boldsymbol{\theta}^T \phi(s,b)}$$

where $$\boldsymbol{\theta}^T \phi(s,a)$$ is a linear combination of features $$\phi(s,a)$$, which can be defined by a parameterized numerical **preference** $$h(s,a; \boldsymbol{\theta})$$

This suggests that the actions with the highest preferences in each state are given the highest probabilities of being selected

The merits of this formulation include

- the approximate policy can approach a deterministic policy, since action preferences are driven to produce the optimal stochastic policy, （which can also be a deterministic policy）

- it enables the selection of actions with arbitrary probabilities, where action-value based methods have no natural way of finding stochastic optimal policies

See [Short Corridor](https://ha5ha6.github.io/judy_blog/pgac/#short-corridor) for more info

In the case of **continuous action spaces**, we often use **Gaussian policy**, where the mean is the linear combination of features:

$$\pi(a\mid s; \boldsymbol{\theta}) \triangleq \mathcal{N}(\boldsymbol{\theta}^T \phi(s,a), \sigma^2)$$

### Policy Gradient Theorem

With the definition of the performance measure being **the value of the start state of an episode**:

$$J(\boldsymbol{\theta}) \triangleq V_{\pi_{\boldsymbol{\theta}}} (s_0)$$

the **Policy Gradient Theorem** provides a general link between $$\nabla J(\boldsymbol{\theta})$$ and the gradient of the policy $$\nabla \pi(a \mid s)$$ itself without taking derivatives of the state distribution:

$$\nabla J(\boldsymbol{\theta}) \propto \sum_{s \in \mathcal{S}} \mu(s) \sum_{a \in \mathcal{A}} Q_{\pi}(s,a) \nabla \pi(a \mid s, \boldsymbol{\theta})$$

See [this post](https://lilianweng.github.io/posts/2018-04-08-policy-gradient/) for a detailed proof

Here, $$\mu(s)$$ is the **on-policy distribution under $$\pi$$**

Assuming we have far more states than weights, we have to emphasize which states are of more importance by specifying a state distribution:

$$\mu(s) \geq 0, \sum_{s \in \mathcal{S}} \mu(s)=1$$

Under on-policy training this is called **on-policy distribution**, and often $$\mu(s)$$ is chosen to be the fraction of time spent in $$s$$

In continuous tasks, it is the **stationary distribution under a specific policy** defined by $$d^\pi (s)$$:

$$d^\pi (s) \triangleq \lim_{t \rightarrow \infty} P(s_t=s \mid s_0, \pi_{\boldsymbol{\theta}})$$

where $$P(s_t=s \mid s_0, \pi_{\boldsymbol{\theta}})$$ represents the probability of arriving at the state $$s_t$$ from $$s_0$$ following $$\pi_{\boldsymbol{\theta}}$$ in $$t$$ steps

It means, when you travel along a Markov Chain in an infinite scale by following one certain policy, the final probability of visiting one state will be unchanged

### REINFORCE

The right-hand side of the **policy gradient theorem** is a sum over states weighted by how often the states occur under the target policy $$\pi$$

If $$\pi$$ is followed, then states will be encountered in these proportions

Thus, we can write

$$\begin{align*}
\nabla J(\boldsymbol{\theta}) &\propto \sum_{s \in \mathcal{S}} \mu(s) \sum_{a \in \mathcal{A}} Q_{\pi}(s,a) \nabla \pi(a \mid s, \boldsymbol{\theta}) \\

&= \mathbb{E}_{\pi} \left[\sum_a Q_{\pi}(s_t,a) \nabla \pi(a \mid s_t, \boldsymbol{\theta}) \right]
\end{align*}$$


Since we are interested in the derivative of the policy, we show the log-derivatives of **softmax in action preference**, which will be useful in applying **REINFORCE**, a log-likelihood-based policy gradient method, in discrete action setting

$$\begin{align*}
\nabla \log \pi(a \mid s; \boldsymbol{\theta}) &= \frac{\nabla \pi(a \mid s; \boldsymbol{\theta})}{\pi(a \mid s; \boldsymbol{\theta})} \\

\end{align*}$$

### Important Concepts


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

Since it's a deterministic env where $$p(s' \mid s,a)=1$$, by following Bellman equation

$$\begin{align*}

V_{\pi}(s) &= \sum_{a} \pi(a \mid s) \sum_{s'} p(s' \mid s,a) \left[r_t+\gamma V_{\pi}(s') \right] \\

V_{\pi}(s) &= \sum_{a} \pi(a \mid s) \left[r_t+\gamma V_{\pi}(s') \right]

\end{align*}$$

we have three linear equations

$$\begin{align*}

V(s_0) &= p(-1+V(s_1))+(1-p)(-1+V(s_0)) \\

V(s_1) &= p(-1+V(s_0))+(1-p)(-1+V(s_2)) \\

V(s_2) &= p(-1+V(s_3))+(1-p)(-1+V(s_1))

\end{align*}$$

where $$V(s_3)=0$$, $$p$$ is the probability of choosing the right action

Therefore,

$$V(s_0)=\frac{2(p-2)}{p(1-p)}$$

```python
#return state value of state 0
def v0(p):
    return (2*p-4)/(p*(1-p))

p=np.linspace(0.01, 0.99, 100)
v=v0(p)

op_p=np.argmax(v)
p_op=p[op_p]
v_op=v[op_p]

plt.rcParams['font.size']='14'
plt.figure(figsize=(8,6))
plt.plot(p,v,linewidth=3)
plt.plot(p_op,v_op,'o',markersize=20,label="optimal point ({0:.2f}, {1:.2f})".format(p_op, v_op))
plt.ylim([-105.0,5])

epsilon=0.05

plt.plot(epsilon, v0(epsilon), 'o',markersize=20,
         label="e-greedy left action ({0:.2f}, {1:.2f})".format(epsilon, v0(epsilon)))
plt.plot(1-epsilon, v0(1-epsilon), 'o',markersize=20,
         label="e-greedy right action ({0:.2f}, {1:.2f})".format(1-epsilon, v0(1-epsilon)))
plt.legend()
plt.grid()
plt.ylabel('$V_{\pi}(s_0)$',fontsize=20)
plt.xlabel('probability of choosing right action',fontsize=20)
plt.savefig('egreedy_shortcorridor.png',dpi=350)
```

<center><img src="/judy_blog/assets/images/egreedy_shortcorridor.png" width=400></center>

The above corresponds to Example 13.1

This experiment shows action-value-based methods have difficulties to find optimal stochastic policy, while policy-based methods can do much better

```python

```

### References

**Reinforcement Learning an Introduction 2nd edition** by Sutton and Barto

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)

[Policy Gradients Methods - Lilian Weng](https://lilianweng.github.io/posts/2018-04-08-policy-gradient/)

[Deep Reinforcement Learning - Julien Vitay](https://julien-vitay.net/deeprl/BasicRL.html)

### Slides and Code

[judy_tutorial_basicRL](https://github.com/ha5ha6/judy_tutorial_basicRL)
