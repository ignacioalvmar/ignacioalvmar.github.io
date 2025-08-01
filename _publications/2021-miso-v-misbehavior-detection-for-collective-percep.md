---
title: 'MISO-V: Misbehavior detection for collective perception services in vehicular communications'
collection: publications
permalink: /publications/2021/2021-miso-v-misbehavior-detection-for-collective-percep
date: 2021-01-01
venue: 'Proceedings of IEEE Intelligent Transportation Systems Conference 2021'
paperurl: https://ieeexplore.ieee.org/abstract/document/9575970/
citation: 'Ignacio Alvarez et al.. (2021). MISO-V: Misbehavior detection for collective perception services in vehicular
  communications. Proceedings of IEEE Intelligent Transportation Systems Conference 2021.'
---

Published in *Proceedings of IEEE Intelligent Transportation Systems Conference 2021*, IEEE 2021

## Abstract

Recently, Collective Perception Messages (CPM) that carry additional information about the surrounding environment beyond Basic Safety Messages (BSM) or Cooperative Awareness Messages (CAM) have been proposed to increase the situational awareness for Connected and Automated Vehicles (CAV) in Intelligent Transportation Systems. However, blindly trusting perception information from neighbors that cannot be locally verified is dangerous given the safety impact that erroneous or malicious information might have. This paper addresses the data trust challenge of CPMs, proposing a misbehavior detection scheme called MISO- V (Multiple Independent Sources of Observations over V2X) that leverages the inherently overlapping nature of the perception observations from multiple vehicles to verify the semantic correctness of the V2X data and improve the data trust and robustness of V2X systems. CPM-enabled CAVs are implemented and MISO-V performance is evaluated in CARLA-based simulation tool, where falsified V2X packets presenting a ghost car are injected in a suburban T-junction scenario with other cars. The results show that MISO- V is very effective in detecting the ghost car attacks and removing the impact of such misbehavior from influencing the receiver and offers a conservative and sensible approach towards trustworthy Collective Perception Services for CAVs.

## Key Contributions

* Research methodology development
* Experimental design and analysis
* Technical implementation and validation

[Download paper](https://ieeexplore.ieee.org/abstract/document/9575970/)

## BibTeX

```
@INPROCEEDINGS{9575970,
  author={Liu, Xiruo and Yang, Lily and Alvarez, Ignacio and Sivanesan, Kathiravetpillai and Merwaday, Arvind and Oboril, Fabian and Buerkle, Cornelius and Sastry, Manoj and Baltar, Leonardo Gomes},
  booktitle={2021 IEEE Intelligent Vehicles Symposium (IV)}, 
  title={MISO- V: Misbehavior Detection for Collective Perception Services in Vehicular Communications}, 
  year={2021},
  volume={},
  number={},
  pages={369-376},
  keywords={Simulation;Semantics;Redundancy;Receivers;Tools;Robustness;Safety},
  doi={10.1109/IV48863.2021.9575970}
}
```