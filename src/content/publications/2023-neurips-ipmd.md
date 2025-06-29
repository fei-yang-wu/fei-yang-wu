---
title: "Inverse Reinforcement Learning with the Average Reward Criterion"
authors: "Feiyang Wu, Jingyang Ke, Anqi Wu"
venue: "NeurIPS"
year: 2023
slug: "2023-neurips-ipmd"
selected: true
pdf: "https://arxiv.org/abs/2305.14608"
type: conference
abstract: "We study the problem of Inverse Reinforcement Learning (IRL) with an average-reward criterion. The goal is to recover an unknown policy and a reward function when the agent only has samples of states and actions from an experienced agent. Previous IRL methods assume that the expert is trained in a discounted environment, and the discount factor is known. This work alleviates this assumption by proposing an average-reward framework with efficient learning algorithms. We develop novel stochastic first-order methods to solve the IRL problem under the average-reward setting, which requires solving an Average-reward Markov Decision Process (AMDP) as a subproblem. To solve the subproblem, we develop a Stochastic Policy Mirror Descent (SPMD) method under general state and action spaces that needs $O(1/\epsilon)$ steps of gradient computation. Equipped with SPMD, we propose the Inverse Policy Mirror Descent (IPMD) method for solving the IRL problem with a $O(1/\epsilon^2)$ complexity. To the best of our knowledge, the aforementioned complexity results are new in IRL. Finally, we corroborate our analysis with numerical experiments using the MuJoCo benchmark and additional control tasks."
---



