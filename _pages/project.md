---
layout: splash
title: Project
permalink: "/project/"
#author_profile: true
#breadcrumbs: true

header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/robot.jpeg
  #actions:
  #  - label: "Download"
  #    url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: Unknown"
excerpt: "research projects I was involved in"
feature_row1:
  - image_path: /assets/images/traj.jpg
    image_caption: "Image courtesy of J.Wang"
    alt: "placeholder image 3"
    title: "Modular Deep Reinforcement Learning"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "/maxpain/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/ephe.jpg
    #image_caption: "Image courtesy of J.Wang"
    alt: "placeholder image 2"
    title: "Policy Hyper-parameter Search"
    excerpt: "This sessions shows slides about policy-based reinforcement learning, including classic REINFORCE, PGPE, our propsed EPHE with K-elite, EPHE with adaptive baseline, EPHE with CMAES weighting, EPHE with REPS weighting methods, etc."
    url: "/ephe/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: assets/images/smartphone.jpg
    image_caption: "Image courtesy of J.Wang"
    alt: "placeholder image 1"
    title: "Smartphone Robot Project"
    excerpt: "This session shows how to construct a smartphone robot and achieve behaviors like standing-up, balancing, approaching, foraging and mating."
    url: "/smartphone/"
    btn_label: "Read More"
    btn_class: "btn--primary"
  #- image_path: /assets/images/unsplash-gallery-image-3-th.jpg
  #  title: "Placeholder 3"
  #  excerpt: "This is some sample content that goes here with **Markdown** formatting."


---

{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_row1" type="left" %}
