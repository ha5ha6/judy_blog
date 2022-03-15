---
layout: single
title: Tutorial
permalink: "/tutorial/"
author_profile: true
#breadcrumbs: true

header:
  overlay_image: /assets/images/tutorial.jpg
  #actions:
  #  - label: "Download"
  #    url: "https://github.com/mmistakes/minimal-mistakes/"
  #caption: "Photo credit: J.Wang"
#excerpt: "an affordable and sustainable robot colony platform based on Android"
author:  Jiexin Wang
classes:  wide
toc: true
toc_label: "Index"
usemathjax: true
---

## test

$$ \nabla_\boldsymbol{x} J(\boldsymbol{x}) $$

```python
def sigmoid(x):
   return 1./(1.+np.exp(-x))

def d_sigmoid(x):
  return sigmoid(x)*(1.0-sigmoid(x))

#normalized for numerical stability  
def softmax(x):
   x=x-x.max()
   return np.exp(x)/np.sum(np.exp(x),axis=0)

def relu(x):
   return (x>0)*x

def d_relu(x):
   return (x>0)*1.0

def linear(x):
   return x

def d_linear(x):
   return 1.
```

### blog
