---
layout: splash
title: Tutorials
permalink: "/tutorial/"
#author_profile: true
#breadcrumbs: true

header:
  #overlay_color: "#000"
  #overlay_filter: "0.5"
  overlay_image: /assets/images/tutorial.jpg
  #actions:
  #  - label: "Download"
  #    url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: Unknown"
excerpt: ""
feature_row:
  - image_path: /assets/images/datastructure.jpeg
    #image_caption: ""
    alt: "placeholder image 3"
    title: "Data Structure"
    excerpt: "Data structure, Algorithms, Python, ... "
    url: "/programming/2019/10/21/data-structrue-index.html"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: /assets/images/rl.png
    #image_caption: "Image courtesy of J.Wang"
    alt: "placeholder image 2"
    title: "Reinforcement Learning"
    excerpt: "Value based, Policy based, Deep RL, ... "
    url: "/rl-basic/2019/12/16/rlbasic.html"
    btn_label: "Read More"
    btn_class: "btn--primary"
  - image_path: assets/images/ml.jpg
#    image_caption: "Image courtesy of J.Wang"
    alt: "placeholder image 1"
    title: "Machine Learning"
    excerpt: "Supervised, Unsupervised, Gaussian Process, ..."
    url: "."
    btn_label: "Read More"
    btn_class: "btn--primary"
  #- image_path: /assets/images/unsplash-gallery-image-3-th.jpg
  #  title: "Placeholder 3"
  #  excerpt: "This is some sample content that goes here with **Markdown** formatting."


---
{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_row" type="left" %}
