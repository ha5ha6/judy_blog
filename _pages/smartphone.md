---
layout: single
title: Smartphone Robot Project
permalink: "/smartphone/"
author_profile: true
#breadcrumbs: true

header:
  overlay_image: /assets/images/smartflat.jpg
  #actions:
  #  - label: "Download"
  #    url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: J.Wang"
excerpt: "an affordable and sustainable robot colony platform based on Android"
---

## Motivation

Common robotic platforms which can facilitate researches by quick introduction at low cost and by sharing and comparison of programs are highly in demand for robotics and artificial intelligence society. Humanoid robots like NAO and iCub, small-sized robot like Khepera, e-puck and AIBO etc are the best examples. However, they are either too expensive, hard to maintain or equipped with limited sensor and low computational power.

Recent smartphone carries various features for constructing a robot, including
- a high-performance energy-efficient CPU
- versatile sensors such as cameras, gyroscope, accelerometers, GPS, audio, etc
- wireless communications
- open source software developing environment

By connecting actuators along with micro controller chips such as __Arduino, Rasberry PI and IOIO board__ to the smartphone, we can construct a smartphone based robotic platform. Compared to traditional robots which require sophisticated structure design and time-consuming manufacture, smartphone based robots are more compact, handy, effortless to replicate for not only research teams but novice developers.

## A balancer with elastic bumper

![](/assets/images/phy.jpg){:height="50%" width="50%"}

**Figure 1** - Physical model of spring-attached wheeled inverted pendulum

For a single agent, we consider a two-wheel balancer with elastic bumpers illustrated as a spring-attached wheeled inverted pendulum model. Balancing robot provides lively impression than quasi-static movements of tricycle or four-wheel robots. With the help of the attached bumpers, the robot can recover to the origin and preserve energy.

## Behaviors
The one more degree of freedom enables various __basic behaviors__ such as

- standing-up
- balancing
- approaching

and facilitating __high-level integrated behaviors__ such as

- foraging
- mating
- collision avoidance

This bottom-up behavioral structure corresponds to the emergence of natural behaviors from biological creatures.
Under the framework of basic dynamics, it is fertile to test and develop control and learning algorithms.
Under the higher level behavioral domain, it is primed for revealing the insights of learning and evolution.

## Construction
### Chassis
<figure>
	<img src="/assets/images/stablefront.png">
	<figcaption>Caption describing these three images.</figcaption>
</figure>
![](/assets/images/stablefront.png){:width="25%"}
![](/assets/images/stableback.png){:width="26%"}

**Figure 2** - Chassis design for stable versions

![](/assets/images/balancer.jpg){:width="40%"}

**Figure 3** - Chassis design for elastic balancer version

To customize the chassis, we need
- 3D printer, i.e. Ultimaker 2
- AutoCAD
- CURA

Our latest design supports both two versions of a stable runner by sliding in two holders under the battery container and a spring-attached balancer.

### Hardware
![](/assets/images/connection.jpg){:width="70%"}

**Figure 4** - Hardware connection

The hardware components we need are
- smartphone, i.e. Nexus 4
- micro controller, i.e. [IOIO board](https://github.com/ytai/ioio)
- connect break-out board
- motor, motor driver, and rotary encoder, i.e. [HUB-ee wheel](http://www.creative-robotics.com/About-HUBee-Wheels) {out of stock}
- USB cables
- chargeable battery set

### Software
The behaviors are achieved by __an Android app__. Specifically, we use
- developing language: JAVA
- environment: Android Studio, Android SDK, IOIO Library, OpenCV

and the sensor we need are
- accelerometer (20ms) and Gyroscope (1.3ms) from Smartphone
- rotary encoder from the wheel

We use three threads under the Android environment as shown in **Figure 5**:
- UI thread (Main Thread)
- sensor thread (5ms)
- control/IOIO thread (1ms)

![](/assets/images/thread.jpg){:width="60%"}

**Figure 5** - Threading

## Control Architecture

![](/assets/images/control.jpg){:width="60%"}

**Figure 6** - Control Architecture

To achieve standing-up and balancing behavior, we adopt a switch control architecture. That is when the balancer body is inside a threshold angle i.e. upright positions, linear stablizer is activated. Otherwise, a Centeral Pattern Generator (CPG) is applied for distabilizing the dynamics.

The state inputs are body angle and angular velocity obtained from the acc and gyro sensor fusion, wheel rotating angle and angular velocity obtained from the wheel rotary encoder.

The control parameters are 4d control gain **K**, and 2d CPG parameter <img src="https://latex.codecogs.com/svg.latex?\Large&space;\{\omega, \beta\}" />.

The control output is the command value range [-1000,1000] to the wheel pulse.

## The Learned Behaviors

We achieved several basic behaviors and high-level behaviors.

Firstly, we handtuned the control parameters and achieved the **standing-up and balancing behaviors** in simulation [[NLP 2013]](https://ci.nii.ac.jp/naid/110009903423) and hardware [[RSJ 2014]]().

Then we used the method proposed in [Policy hyper-parameter search](/ephe) for the robot to learn the optimal parameters instead of handtuning. The **standing-up and balancing behaviors** achieved in simulation [[ArtificialLife 2016]](https://link.springer.com/article/10.1007/s10015-015-0260-7?wt_mc=internal.event.1.SEM.ArticleAuthorOnlineFirst) and hardware [[Frontier 2017]](https://www.frontiersin.org/articles/10.3389/fnbot.2017.00001/full).

We further achieved **a vison-based approaching behavior** in hardware [[Frontier 2017]](https://www.frontiersin.org/articles/10.3389/fnbot.2017.00001/full).

The video is showing the above behaviors.

{% include video id="fjo-EqM2ESg" provider="youtube" %}

Finally, we achieved **vision-based foraging and mating behaviors** in hardware [[ROBOMECH 2018]](https://www.researchgate.net/publication/329903880_EM-based_policy_search_for_learning_foraging_and_mating_behaviors).

{% include video id="jRxHXm95dEs" provider="youtube" %}

{% include video id="clxiPNR0v9g" provider="youtube" %}

In short,

- [x] Standing-up and balancing (simulation) [NLP 2013] [ArtificialLife 2016]
- [x] Standing-up and balancing (hardware) [RSJ 2014] [Frontier 2017]
- [x] Approaching (hardware) [Frontier 2017]
- [x] Foraging (hardware) [ROBOMECH 2018]
- [x] Mating, one agent is fixed (hardware) [ROBOMECH 2018]
- [ ] Multi-agent Mating
- [ ] Collision avoidance

## Related Papers:

- <span style="font-family:Serif; font-size:0.95em;"> J. Wang, E. Uchibe, and K. Doya. Standing-up and balancing behaviors of Android phone robot: Control of spring-attached wheeled inverted pendulum.  <br /> *IEICE technical report. Nonlinear problems.* 113(341), 49-54, Hongkong, China. 2013 (NLP)  <br /> [[website]](https://ci.nii.ac.jp/naid/110009903423)

- <span style="font-family:Serif; font-size:0.95em;"> J. Wang, E. Uchibe, and K. Doya. Control of Two-wheel balancing and standing-up behaviors by an Android phone robot.  <br /> *In Proceedings of the 32nd Annual Conference of the Robotics Society of Japan.* Sangyo University, Fukuoka, Japan. 2014 (RSJ)
 <br /> [[website]](http://rsj2014.rsj-web.org/)

- <span style="font-family:Serif; font-size:0.95em;"> J. Wang, E. Uchibe, and K. Doya. EM-based policy hyper parameter exploration: Application to standing and balancing of a two-wheeled smartphone robot.  <br /> *Artificial Life and Robotics.* 21: 125. DOI 10.1007/s10015-015-0260-7. 2016 <br /> [[website]](https://link.springer.com/article/10.1007/s10015-015-0260-7?wt_mc=internal.event.1.SEM.ArticleAuthorOnlineFirst) [[researchgate]](https://www.researchgate.net/publication/291951786_EM-based_policy_hyper_parameter_exploration_application_to_standing_and_balancing_of_a_two-wheeled_smartphone_robot) [[pdf]](https://link.springer.com/content/pdf/10.1007%2Fs10015-015-0260-7.pdf)</span>

- <span style="font-family:Serif; font-size:0.95em;"> J. Wang, E. Uchibe, and K. Doya. Adaptive baseline enhances EM-based policy search: Validation in a view-based positioning task of a smartphone balancer. <br /> *Frontiers in Neurorobotics.* 11:1. DOI 10.3389/fnbot.2017.00001. 2017 <br /> [[website]](https://www.frontiersin.org/articles/10.3389/fnbot.2017.00001/full) [[researchgate]](https://www.researchgate.net/publication/312643347_Adaptive_Baseline_Enhances_EM-Based_Policy_Search_Validation_in_a_View-Based_Positioning_Task_of_a_Smartphone_Balancer) [[pdf]](https://www.frontiersin.org/articles/10.3389/fnbot.2017.00001/pdf)</span>

- <span style="font-family:Serif; font-size:0.95em;"> E. Uchibe and J. Wang. EM-based policy search for learning foraging and mating behaviors. <br /> *In proceedings of the 30th robotics and mechatronics conference.* Kitakyushu, Japan. 2018 (ROBOMECH)
 <br /> [[website]](http://robomech.org/2018/) [[researchgate]](https://www.researchgate.net/publication/329903880_EM-based_policy_search_for_learning_foraging_and_mating_behaviors) [[pdf]](https://www.researchgate.net/profile/Jiexin_Wang/publication/329903880_EM-based_policy_search_for_learning_foraging_and_mating_behaviors/links/5d15b14b458515c11cfdb24f/EM-based-policy-search-for-learning-foraging-and-mating-behaviors.pdf?_sg%5B0%5D=h86Gu74WmWFjMTGmMrda0Z7XLEO8MUMfqLd4Jhh1w3-94S75JIcv_B3-lKnGns_MEQuyH8S2_PTJENx96AW4rQ.yzFo2VVAfRDu5-zsKOOEFQM5RQ5CF5gTlreYBhtPCQUSDkIuc2ir2dJ2qcqwN7k7kvV3SopL8hxfE9CHkJVCVg&_sg%5B1%5D=5eL6DWKeAwrgt8LaQ2panNSE5fr-68O8x8bRRNMJSUiUGuI_OgxYbC1RP4PxUgn4a9uGV65uSabvq4m4lfp5YGcIw2xbZa2JKKhKTd7U7pL-.yzFo2VVAfRDu5-zsKOOEFQM5RQ5CF5gTlreYBhtPCQUSDkIuc2ir2dJ2qcqwN7k7kvV3SopL8hxfE9CHkJVCVg&_iepl=)</span>
