---
title: Random Forest, A Panel Instead Of A Single Expert
slug: what-is-random-forest
date: 2026-11-07T11:10:00+03:00
category: Artificial intelligence
summary: "Ask one person and they might be wrong. Ask a hundred and go with the majority, and things change. Random Forest applies that idea with decision trees."
author: Computational Neuroscience Lab
---
Remember the game "20 questions"? Someone thinks of an animal and you ask yes/no questions: "Does it fly?" No. "Does it have four legs?" Yes. "Is it a pet?" Yes. A few questions later the answer is clear: a cat.

That's exactly what a **decision tree** is. It asks the data one question after another and branches according to each answer. With EEG, the questions might be: "Is alpha power over the forehead above this value?" "Is the difference between the left and right hemispheres large?" Eventually you reach a leaf: "This participant liked the stimulus."

## The problem with a single tree: memorising

Decision trees are easy to understand, but they have a weakness. Let them grow too deep and they memorise every little detail of the training data, even the noise. Like a student who memorises past exam questions: full marks if the same questions come up, a disaster if they're slightly different.

## The fix: a forest

[Random Forest](https://doi.org/10.1023/A:1010933404324) offers a simple but powerful fix: train hundreds of trees instead of one. But not all in the same way:

- Each tree sees a **different, randomly chosen part** of the data.
- At each question, each tree can only look at a **random subset of the features**.

So each tree develops a slightly different point of view. Some get it wrong, but they don't all get it wrong in the same way. In the end every tree casts a vote and the majority wins. It's like consulting a medical panel rather than a single doctor.

## Why we like it

Random Forest needs little tuning, stays stable even on small datasets, and can tell you which features contributed most to its decisions. When we work with dozens of features extracted from EEG, answering "which brain region, which rhythm mattered?" is very valuable to us. Ensemble methods like this, which combine several models, were also used in one of our lab's early studies, on [ADHD classification](https://doi.org/10.1109/tiptekno.2019.8895197).

In the next post we'll look at XGBoost, where trees work one after another instead of side by side, each fixing the mistakes of the one before.

## References

1. Breiman, L. (2001). *Random Forests.* Machine Learning, 45(1), 5–32. [DOI: 10.1023/A:1010933404324](https://doi.org/10.1023/A:1010933404324)
2. *Classification of ADHD Using Ensemble Algorithms with Deep Learning and Hand Crafted Features* (2019). IEEE TIPTEKNO. [DOI: 10.1109/tiptekno.2019.8895197](https://doi.org/10.1109/tiptekno.2019.8895197)
