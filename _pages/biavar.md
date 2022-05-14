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

$$var[f(x)]=\mathbb{E}[(f(x)-\mathbb{E}[f(x)])^2]$$

If we expand the above

$$\begin{align*}

var[f(x)] &= \mathbb{E} [(f(x)-\mathbb{E}[f(x)])^2 ] \\

&= \mathbb{E}[f^2(x)+\mathbb{E}^2[f(x)]-2f(x)\mathbb{E}[f(x)]] \\

&= \mathbb{E}[f^2(x)]+\mathbb{E}^2[f(x)]-2\mathbb{E}^2[f(x)] \\

&= \mathbb{E}[f^2(x)]-\mathbb{E}^2[f(x)]

\end{align*}$$

We will have the variance with two expectations of $$f(x)$$ and $$f^2(x)$$

We can consider the variance of a variable $$x$$ itself:

$$\begin{align*}
var[x] &=\mathbb{E}[(x-\mathbb{E}[x])^2] \\

&=\mathbb{E}[x^2]-\mathbb{E}^2[x]

\end{align*}$$

### Bias

**Def**: the difference of the average value of prediction from the true function $$f(x)$$

$$bias[\hat{f}(x)]=\mathbb{E}[\hat{f}(x)]-f(x)$$

If a prediction is unbiased

$$\mathbb{E}_{x \sim p(x)}[\hat{f}(x)]=f(x)$$

### Sample variance is biased

Suppose we have a sample mean  

$$\hat{\mu}=\frac{1}{N} \sum_i^N x_i$$

and a sample variance

$$\hat{\sigma^2}=\frac{1}{N} (x_i-\hat{\mu})^2$$

$$\hat{\sigma^2}$$ is a biased estimator




```python

```

<center><img src="/judy_blog/assets/images/egreedy_shortcorridor.png" width=400></center>

The above corresponds to Example 13.1

This experiment shows action-value-based methods have difficulties to find optimal stochastic policy, while policy-based methods can do much better



### References

**PRML** by Sutton and Barto

[ShangtongZhang/reinforcement-learning-an-introduction](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

[RL 2nd Edition Excercise Solutions](https://github.com/LyWangPX/Reinforcement-Learning-2nd-Edition-by-Sutton-Exercise-Solutions)

[Policy Gradients Methods - Lilian Weng](https://lilianweng.github.io/posts/2018-04-08-policy-gradient/)

[Going Deeper Into Reinforcement Learning: Fundamentals of Policy Gradients - Daniel Seita](https://danieltakeshi.github.io/2017/03/28/going-deeper-into-reinforcement-learning-fundamentals-of-policy-gradients/)

### Slides and Code

[judy_tutorial_basicRL](https://github.com/ha5ha6/judy_tutorial_basicRL)
