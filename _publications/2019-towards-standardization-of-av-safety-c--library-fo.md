---
title: 'Towards standardization of AV safety: C++ library for responsibility sensitive
  safety'
collection: publications
permalink: /publications/2019/2019-towards-standardization-of-av-safety-c--library-fo
date: 2019-01-01
venue: 'Proceedings of the IEEE Intelligent Vehicle Symposium 2019'
paperurl: 'https://ieeexplore.ieee.org/document/8813885'
citation: 'Ignacio Alvarez et al.. (2019). Towards standardization of AV safety: C++ library for responsibility sensitive safety. Proceedings of the IEEE Intelligent Vehicle Symposium 2019.'
---

Published in *'Proceedings of the IEEE Intelligent Vehicle Symposium 2019'*, IEEE 2019

## Abstract

The need for safety in Automated Driving (AD) is becoming increasingly critical with the accelerating deployment of this technology. Beyond functional safety, industry must guarantee the operational safety of automated vehicles. Towards that end, Mobileye introduced the Responsibility Sensitive Safety (RSS), a model-based approach to Safety [1]. In this paper we expand upon this work introducing the C++ Library for Responsibility Sensitive Safety, an open source executable that implements a subset of RSS. We provide architectural details to integrate the C++ Library for Responsibility Sensitive Safety with AD Software pipelines as safety module overseeing decision making of driving policies. We illustrate this application with an example integration with the Baidu Apollo AD stack and simulator, [2] and [3], that provides safety validation of the planning module. Furthermore, we show how the C++ Library for Responsibility Sensitive Safety can be used to explore the usefulness of the RSS model through parameter exploration and analysis on minimum safe longitudinal distance, (dmin), considering different weather conditions. We also compare these results with half-of-speed rule followed in some parts of the world. We expect that the C++ Library for Responsibility Sensitive Safety becomes a critical component of future tools for formal verification, testing and validation of AD safety and that it helps bootstrap the AD research efforts towards standardization of safety.

## Key Contributions

* Safety analysis and validation
* Standardized C++ library implementation
* Modular software architecture design
* Verification and validation methodology
* Open-source safety model deployment

[Download paper]('https://ieeexplore.ieee.org/document/8813885')

## Citation

{% include citation-tabs.html 
  bibtex="@inproceedings{gassmann2019towards,
  title={Towards standardization of AV safety: C++ library for responsibility sensitive safety},
  author={Gassmann, Bernd and Oboril, Fabian and Buerkle, Cornelius and Liu, Shuang and Yan, Shoumeng and Elli, Maria Soledad and Alvarez, Ignacio and Aerrabotu, Naveen and Jaber, Suhel and Van Beek, Peter and others},
  booktitle={2019 IEEE Intelligent Vehicles Symposium (IV)},
  pages={2265--2271},
  year={2019},
  organization={IEEE}
}" 
  apa="Gassmann, Bernd and Oboril, Fabian and Buerkle, Cornelius and Liu, Shuang and Yan, Shoumeng and Elli, Maria Soledad and Alvarez, Ignacio and Aerrabotu, Naveen and Jaber, Suhel and Van Beek, Peter and others (2019). Towards standardization of AV safety: C++ library for responsibility sensitive
  safety. 2019 IEEE Intelligent Vehicles Symposium (IV)." %}