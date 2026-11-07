---
title: Emotion, taste and preference
weight: 10
summary: We study how a product's label changes its taste, and how the positive or negative emotional response during tasting can be told apart from EEG.
---
*Based on the CoDIT 2026 paper by Berkay İlber Tunakan, Aydın Akan, Yaren Taşkın and Kamile Nazan Turhan: "Analysis of Human Emotions for Different Taste Stimuli Using EEG Signals" ([doi:10.1109/CoDIT70676.2026.11630919](https://doi.org/10.1109/CoDIT70676.2026.11630919)).*

## Research Problem

Whether we like a product does not depend on its taste alone. Label claims such as "natural" or "artificial" strongly shape how consumers view food additives and whether they buy [1]. Taste is also a multisensory experience: the brain integrates taste, smell, texture and expectation, and oscillations in different frequency bands play different roles in that integration [2].

Questionnaires and tasting scores measure what people say. But stated liking can be shaped by the bias a label creates. EEG follows the brain's response at the moment of tasting with millisecond resolution, offering a more objective window on the process [3]. Brain responses to sweeteners and additives have been studied [4], and natural and artificial additives are thought to shape food perception through different neural processes [8]. Yet whether a product contains a **natural or artificial preservative** and whether the participant **knows it** had not been studied together.

So we ask: How does knowing the preservative type change the taste of the same drink? Do positive and negative hedonic states leave distinguishable traces in EEG? Can we recognise the emotional response automatically from those traces?

## How We Work

Participants taste two detox water samples, one with a natural and one with an artificial preservative, both without knowing what they drink (blind) and after being told the content (informed). This gives a 2×2 design. The samples are presented so they cannot be told apart by appearance, so any difference comes only from taste and label information.

We record EEG during tasting and collect participants' liking and emotion ratings after each trial. These self-reports form the positive and negative hedonic state labels. We extract frequency band powers and time-domain features [5, 6] from the EEG and compare classical machine learning and deep learning models [3, 7]. The study was approved by the İzmir University of Economics ethics committee.

## Findings

- **The label changes the taste.** Under blind conditions both samples were rated positively. When participants were told the drink contained an artificial preservative, the same drink was perceived clearly negatively, pointing to a label-induced cognitive bias.
- **The brain shows distinguishing traces.** Positive and negative hedonic states differed significantly, especially in **frontal gamma** and **parietal beta** bands.
- **Tree-based ensembles lead on small data.** XGBoost gave the best result with 87.5% accuracy, followed by random forest and support vector machines, while the deep neural network lagged behind.

A plain-language summary of the study is on the blog: [Can a Label Change Taste?](/en/blog/can-a-label-change-taste/)

## References

1. Lăzăroiu, D. et al. (2019). Consumers' decision-making process on food additives: Willingness to buy food with natural versus artificial additives in Romania. *Sustainability*, 11(24), 6953.
2. Keil, J., Senkowski, D. (2018). Neural oscillations orchestrate multisensory processing. *The Neuroscientist*, 24(6), 609–626. [doi:10.1177/1073858418755352](https://doi.org/10.1177/1073858418755352)
3. Koelstra, S. et al. (2012). DEAP: A database for emotion analysis using physiological signals. *IEEE Transactions on Affective Computing*, 3(1), 18–31. [doi:10.1109/T-AFFC.2011.15](https://doi.org/10.1109/T-AFFC.2011.15)
4. Wang, X., Wang, G., Liu, D. (2025). EEG-based analysis of neural responses to sweeteners: Effects of type and concentration. *Foods*, 14(14), 2460. [doi:10.3390/foods14142460](https://doi.org/10.3390/foods14142460)
5. Hjorth, B. (1970). EEG analysis based on time domain properties. *Electroencephalography and Clinical Neurophysiology*, 29(3), 306–310.
6. Zheng, W.-L., Lu, B.-L. (2015). Investigating critical frequency bands and channels for EEG-based emotion recognition with deep neural networks. *IEEE Transactions on Autonomous Mental Development*, 7(3), 162–175.
7. Song, T. et al. (2020). EEG emotion recognition using dynamical graph convolutional neural networks. *IEEE Transactions on Affective Computing*, 11(3), 532–541. [doi:10.1109/TAFFC.2018.2817622](https://doi.org/10.1109/TAFFC.2018.2817622)
8. Ciobanu, M.-M., Flocea, E.-I., Boișteanu, P.-C. (2024). The impact of artificial and natural additives in meat products on neurocognitive food perception: A narrative review. *Foods*, 13(23), 3908. [doi:10.3390/foods13233908](https://doi.org/10.3390/foods13233908)
