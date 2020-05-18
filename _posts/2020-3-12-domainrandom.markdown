---
layout: single
type: posts
title:  "Domain Randomization"
date:   2020-3-12 15:18:25 +0900
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


### Background

Optimal Control(+):  
more efficient  

Optimal Control(-):  
Optimal Control requires a transition model to solve the optimal sequence of actions  
Modeling certain classes of objects can require expensive simulation steps, and often physical parameters of real objects that are not known in detail  

RL(+):
Require no model  
Learn direct mapping from observations to the optimal sequence of actions, purely through interacting with the env  

DRL(+)  
With NN, DRL can scale to domains with significantly more complex input and action spaces than previously considered tractable    

DRL(-):  
Though DRL can learn complex control policies from raw sensory data, they typically have poor sample complexity  
There is a **Reality Gap** between the simulated and real worlds, including physical and visual appearance difference

Approaches to reduce the reality gap:  
fine-tuning the DRL agent on the real world  
performing system identification to reduce the domain gap  
explicitly performing domain adaptation  
domain randomization  


### Definition

Randomly perturbing various aspects of a simulated env in order to make trained agents robust to the reality gap between the simulator and the real world  

Visual Domain Randomization:  
various properties of the simulation are varied, altering anything from the positions or dynamical properties of objects to their visual appearance  

like data augmentation to RL env  

generalization of DR agents  

Dive further into the models by using common interpretability tools, i.e.  
unit tests  
saliency maps  
dimensionality reduction for visualizing NN actiation

**Saliency Maps**:  
In computer vision, a saliency map is an image that shows each pixel's unique quality.[1] The goal of a saliency map is to simplify and/or change the representation of an image into something that is more meaningful and easier to analyze. For example, if a pixel has a high grey level or other unique color quality in a color image, that pixel's quality will show in the saliency map and in an obvious way. Saliency is a kind of image segmentation.

trade off between Fidelity and interpretability

- saliency maps
- activation maximization
- weight visualizations
- statistical and structural weight characterizations  
- unit ablations
- layer ablations
- activation analysis

### Saliency Maps

one of the most common techniques used for understanding the decisions made by NNs,

Gradient-based methods, utilized the derivative of the network output w.r.t the inputs  

meaning: for images, how changing the pixel intensities at each location will affect the output

- class average map (CAM) [Zhou et al 2016] with global average pooling [Lin et al 2013]
- gradient-weighted class activation mapping (Grad-CAM) [Selvaraju et al 2017]
- integrated gradients (IG) [Sundararajan et al 2017]
- occlusion, which masks parts of the image and performs a sensitivity analysis w.r.t the change in the network's outputs [Zeiler and Fergus 2014]

keras implementation:  
check [keras-vis for mnist](https://github.com/raghakot/keras-vis/blob/master/examples/mnist/attention.ipynb)

Keras Vis
https://raghakot.github.io/keras-vis/visualizations/activation_maximization/

Occlusion:  
running a (grey,square) mask over the input and tracking how the network's outputs change in response  

Occlusion + A3C [Greydanus et al 2018]
grey area can be mistaken by grey object  
replace grey with a localized Gaussian blur as 'spatial uncertainty'

proposed:  
replaced the Gaussian blur with a mask derived from a baseline input, which roughly represents what the model would expect to see on average  


### Activation Maximization  

Gradients can also be used to try and visualize what maximizes the activation of a given neuron  

-> Optimization problem, using projected gradient ascent in the input space  

need regularization  

### Weight Visualizations  

### Statistical and Structural Weight characterizations

magnitude - the traditional measure for the "importance" of individual neurons in a weight matrix  
distribution - the set of weights in a layer can be considered as a distribution of values  
spectral analysis - using relative entropy

### Unit Ablations  

a way to charactierize the importance of a single neuron/convolutional filter is to remove it and observe how this affects the performance of the NN

related to pruning - a method for model compression

pruning - removing connections or ever entire units while minimizing performance loss  

### Layer Ablations  

can be used to study the re-initialization robustness of trained networks  

### Activation Analysis  

dimension reduction - take the high-dimensional vectors and project them to a lower-dimensional space  

- PCA (a linear projection)
- t-distributed stochastic neighbor embedding (t-SNE) (a nonlinear projection)

measure 'entanglement' (how close pairs of representations from the same class are relative to pairs of representations from different classes) using the soft nearest neighbour loss  




### Reference

[Domain Randomization for Sim2Real Transfer](https://lilianweng.github.io/lil-log/2019/05/05/domain-randomization.html)  
[keras-vis for mnist](https://github.com/raghakot/keras-vis/blob/master/examples/mnist/attention.ipynb)
