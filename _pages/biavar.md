---
layout: single
title: Bias and Variance
permalink: "/biavar/"
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



### Expectation

**Def**: the weighted average of a function $$f(x)$$ weighted by a probability distribution $$p(x)$$

For a discrete distribution:

$$\mathbb{E}[f(x)]=\sum_x p(x)f(x)$$

In the case of continuous variables with their probability densities:

$$\mathbb{E}[f(x)]=\int p(x)f(x) dx$$

In either case, if we are given a finite number $$N$$ of points drawn from the probability distribution or probability density, the expectation can be approximated as a finite sum over these points

$$\mathbb{E}[f(x)] \simeq \frac{1}{N} \sum_{n=1}^N f(x_n)$$

### Variance

**Def**: a measure of how much variability there is in $$f(x)$$ around its mean $$\mathbb{E}[f(x)]$$

$$var[f(x)]=\mathbb{E}\left[(f(x)-\mathbb{E}[f(x)])^2 \right]$$

If we expand the above

$$\begin{align*}

var\left[f(x)] &=\mathbb{E}\left[(f(x)-\mathbb{E}\left[f(x)\right])^2 \right] \\

&= \mathbb{E}\left[f^2(x)+\mathbb{E}^2\left[f(x)\right]-2f(x)\mathbb{E}\left[f(x)\right] \\

&= \mathbb{E}\left[f^2(x)\right]+\mathbb{E}^2\left[f(x)\right]-2\mathbb{E}^2\left[f(x)\right] \\

&= \mathbb{E}\left[f^2(x)\right]-\mathbb{E}^2\left[f(x)\right]

\end{align*}$$

We will have the variance with two expectations of $$f(x)$$ and $$f^2(x)$$

We can consider the variance of a variable $$x$$ itself:

$$var[f(x)] &=\mathbb{E}[x^2]-\mathbb{E}^2[x]$$


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

**Implementation of REINFORCE**

```python
def policy(theta,phi):
    h=np.dot(theta,phi)
    upper=np.exp(h-np.max(h)) #avoid overflow
    pi=upper/np.sum(upper)

    #keep stochasitc policy with a_min>=0.05
    a_min=np.argmin(pi)
    epsilon=0.05
    if pi[a_min]<epsilon:
        pi[:]=1-epsilon
        pi[a_min]=epsilon

    if np.random.uniform()<=pi[0]:
        return 0,pi
    else:
        return 1,pi

#calculate derivative of log policy
def dlog(phi,a,pi):

    return phi[:,a]-np.dot(phi,pi)

def run_reinforce(lr=2e-4, gm=1, n_eps=1000):

    #initialization of policy parameter theta and state-action feature
    theta=np.array([-1.47,1.47])
    phi=np.array([[0,1],[1,0]])
    #result logging
    s_all,r_all,pi_all=[],[],[]

    for ep in range(n_eps):
        s,stp,done=0,0,False
        #cache for gradient update
        actions,rewards,policies=[],[],[]

        while not done:
            a,pi=policy(theta,phi)
            #pi_all.append(pi)
            s_,r,done=step(s,a)

            actions.append(a)
            rewards.append(r)
            policies.append(pi)

            s=s_
            stp+=1

        #get discounted return for each step in a reversive way
        G=np.zeros(len(rewards))
        G[-1]=rewards[-1]
        for i in range(2,len(G)+1):
            G[-i]=gm*G[-i+1]+rewards[-i]

        #update policy parameter theta
        gmt=1
        for i in range(len(rewards)):
            grad=dlog(phi,actions[i],policies[i])
            theta+=lr*gmt*G[i]*grad
            gmt*=gm

        r_all.append(sum(rewards))
        s_all.append(stp)

    return r_all,s_all#,pi_all

from collections import defaultdict
n_runs=100
lr_all=[2e-4,2e-5,2e-3]
r_res=defaultdict(list) #appendable list

for lr in lr_all:
    for n in range(n_runs):
        r,s,pi=run_reinforce(lr=lr)
        r_res[str(lr)].append(r)   

plt.figure(figsize=(8,6))
for k,v in r_res.items():
    plt.plot(np.array(v).mean(axis=0),label='alpha'+k,linewidth=3)

plt.grid()
plt.axhline(y=-11.6, color='r', linestyle='--',linewidth=3,label='v*(s0)')
plt.legend()
plt.xlabel('Episode')
plt.ylabel('G0 total reward on episode')
plt.savefig('reinforce_shortcorridor.png',dpi=350)

plt.figure(figsize=(8,6))
plt.plot(pi,linewidth=3)
plt.grid()
plt.xlabel('Step')
plt.ylabel('$\pi(s,a)$')
plt.savefig('reinforce_pi_shortcorridor.png',dpi=350)
```

<center><img src="/judy_blog/assets/images/reinforce_shortcorridor.png" width=350><img src="/judy_blog/assets/images/reinforce_pi_shortcorridor.png" width=350></center>

The above corresponds to Figure 13.1

The results show that REINFORCE was able to learn an optimal stochastic policy smoothly, approaching to the optimal value of the starting state

### References

**Reinforcement Learning an Introduction 2nd edition** by Sutton and Barto

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)

[Policy Gradients Methods - Lilian Weng](https://lilianweng.github.io/posts/2018-04-08-policy-gradient/)

[Going Deeper Into Reinforcement Learning: Fundamentals of Policy Gradients - Daniel Seita](https://danieltakeshi.github.io/2017/03/28/going-deeper-into-reinforcement-learning-fundamentals-of-policy-gradients/)

### Slides and Code

[judy_tutorial_basicRL](https://github.com/ha5ha6/judy_tutorial_basicRL)
