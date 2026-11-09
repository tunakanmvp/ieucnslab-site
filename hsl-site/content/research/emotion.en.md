---
title: Emotion, taste and preference
weight: 10
summary: We study how a product's label changes its taste, and how the positive or negative emotional response during tasting can be told apart from EEG.
---
*Based on the CoDIT 2026 paper by Berkay İlber Tunakan, Aydın Akan, Yaren Taşkın and Kamile Nazan Turhan: "Analysis of Human Emotions for Different Taste Stimuli Using EEG Signals" ([doi:10.1109/CoDIT70676.2026.11630919](https://doi.org/10.1109/CoDIT70676.2026.11630919)).*

## State of the Art

Consumer acceptance of food is shaped not only by sensory properties but by what the label says. Survey-based research shows that claims such as "natural" or "artificial" strongly influence attitudes towards food additives and willingness to buy [1]. Flavour itself is a multisensory construct: the brain integrates taste, smell, texture and expectation, and oscillatory activity across frequency bands coordinates this integration [2].

Most evaluations of food liking still rely on hedonic rating scales, which are vulnerable to expectation and labelling bias. EEG offers an objective, millisecond-resolution complement. Benchmark affective EEG datasets [3] and systematic analyses of critical frequency bands and channels [6] have established spectral features for emotion recognition, while graph-based deep models have pushed classification performance on large datasets [7]. In food research specifically, EEG has been used to characterise responses to sweetener type and concentration [4], and the effect of natural versus artificial additives on neurocognitive food perception has recently been reviewed [8].

Three gaps remain. First, preservative type and label disclosure have not been manipulated jointly, so the contribution of the product and of the label to the hedonic response cannot be separated. Second, few studies classify hedonic state from EEG recorded during actual consumption rather than passive viewing. Third, it is unclear whether deep learning models, which dominate large benchmark datasets, remain the best choice for the small samples typical of food-EEG experiments.

## Excellence

### Objectives

- **O1.** Quantify how disclosure of preservative type (natural vs. artificial) changes the hedonic evaluation of an otherwise identical product.
- **O2.** Identify EEG spectral signatures that distinguish positive from negative hedonic states during real tasting.
- **O3.** Establish a data-efficient classification pipeline for small-sample food-EEG and benchmark classical ensemble methods against deep learning.

### Ambition and Progress Beyond the State of the Art

- A 2×2 design crossing preservative type with blind vs. informed tasting, with EEG recorded during actual consumption, separates the effect of the product from the effect of the label.
- The study demonstrates a label-induced cognitive bias: both samples were rated positively under blind conditions, while the informed artificial condition was rated strongly negatively.
- Frontal gamma and parietal beta activity were identified as markers that differ significantly between hedonic states.
- Tree-based ensembles outperformed deep learning on this sample (XGBoost 87.5% accuracy, with a deep neural network performing lower), providing evidence for data-efficient models in consumer neuroscience.

### Methodology

Participants taste two detox water samples containing a natural or an artificial preservative, presented identically, both blind and with the content disclosed. EEG is recorded throughout, and self-reported liking and emotion after each trial provide the hedonic labels. Band power and time-domain (Hjorth) features [5, 6] are extracted, and classical machine learning and deep learning models are compared [3, 7]. The study was approved by the İzmir University of Economics ethics committee and its results are published at IEEE CoDIT 2026.

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
