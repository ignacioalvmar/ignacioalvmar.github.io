---
title: Evaluation of responsibility-sensitive safety (rss) model based on human-in-the-loop
  driving simulation
collection: publications
permalink: /publications/2020/evaluation-of-responsibility-sensitive-safety-rss
date: 2020-01-01
venue: In proceedings of the 2020 IEEE 23rd International Conference on Intelligent Transportation Systems
paperurl: https://ieeexplore.ieee.org/abstract/document/9294637/
citation: Chen Chai et al.. (2020). Evaluation of responsibility-sensitive safety
  (rss) model based on human-in-the-loop driving simulation. In proceedings of the 2020 IEEE 23rd International Conference on Intelligent Transportation Systems.
---

Published in *In proceedings of the 2020 IEEE 23rd International Conference on Intelligent Transportation Systems*, IEEE 2020. 

## Abstract

Safety is an important challenge in the development of automated vehicles (AVs). To help with the challenge of achieving higher safety in the decision making of AVs, Intel and Mobileye have proposed a parameterized model named Responsibility-Sensitive Safety (RSS). Previous studies have demonstrated that RSS has the potential to improve the safety performance of automated vehicles. However, RSS could lead to a considerable car-following distance depending on the parameter values chosen for the model, which could reduce traffic efficiency. To improve the efficiency of RSS applied to Adaptive Cruise Control (ACC) systems, previous work proposed an efficiency-optimal (referred as “Efficiency-optimal RSS”) variation of the RSS model that involves different triggering conditions of a proper response. Therefore, in this paper a human-in-the-loop driving simulation experiment was conducted to evaluate the performance and acceptance of different safety methods. The RSS model and the efficiencyoptimal variant were embedded in an ACC system based on Model Predictive Control (MPC) algorithm. Two car-following scenarios with a sudden deceleration of lead vehicle at various time headways were simulated to evaluate the human perception and response of the different models. Results show that the original RSS model improves subjective safety judgment of human drivers. While the Efficiency-optimal RSS variant has a lower subjective safety score when compared to original RSS, it significantly reduces driver's emergency braking reactions when compare to an ACC only system.

## Key Contributions

* Human-in-the-loop evaluation framework
* Comparative performance analysis (RSS vs. Human)
* Safety model parameter sensitivity analysis
* Empirical validation of a formal safety model
* Simulation-based model calibration methodology

[Download paper](https://ieeexplore.ieee.org/abstract/document/9294637)

## Citation

{% include citation-tabs.html 
  bibtex="@inproceedings{chai2020evaluation,
  title={Evaluation of responsibility-sensitive safety (rss) model based on human-in-the-loop driving simulation},
  author={Chai, Chen and Zeng, Xianming and Alvarez, Ignacio and Elli, Maria Soledad},
  booktitle={2020 IEEE 23rd International Conference on Intelligent Transportation Systems (ITSC)},
  pages={1--7},
  year={2020},
  organization={IEEE}
}" 
  apa="Alvarez, I. (2020). . 2020 IEEE 23rd International Conference on Intelligent Transportation Systems (ITSC)." %}