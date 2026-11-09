---
title: Multimodal biosignals
weight: 40
summary: We use EEG and skin conductance together to measure consumers' emotional response to product mascots, and study which dimension of emotion each signal carries.
---
*Based on the TIPTEKNO'26 poster by Berkay İlber Tunakan, Aydın Akan, Nursun Üstünkarlı and Rıza Sadıkzade: "Investigation of the Effect of Product Mascot Gender on Consumer Emotions Using EEG Signals". Publication in IEEE Xplore is in progress.*

## State of the Art

Brands promote their products with anthropomorphised mascots, and how these mascots look, including their perceived gender, can affect brand evaluation and purchase intention [1, 2]. In consumer neuroscience, EEG is used to study the brain traces of product preferences [9], and studies of brain responses to brand mascots have begun to appear [3].

No single signal captures the whole emotion. EEG reflects brain activity accompanying emotional and cognitive processes, while galvanic skin response (GSR) reflects autonomic arousal; benchmark datasets combine the two for emotion recognition [4, 5]. Established EEG features include time-domain Hjorth parameters [6], band power [4] and frontal alpha asymmetry linked to affective processing [7], and Transformer-based architectures are increasingly applied to EEG [8].

Two gaps remain. The mascot effect is still measured mostly with questionnaires and rating scales, and neural studies of mascots have stayed descriptive rather than classifying the emotional response automatically [3]. It is also unclear which signal carries which dimension of the response, arousal or valence, and whether combining signals helps on the small, imbalanced datasets typical of consumer studies.

## Excellence

### Objectives

- **O1.** Measure the emotional response to masculine and feminine product mascots with EEG and skin conductance recorded simultaneously.
- **O2.** Determine which signal better carries arousal and which better carries valence.
- **O3.** Develop a lightweight multimodal model and benchmark it against single-signal and larger deep learning architectures.

### Ambition and Progress Beyond the State of the Art

- The study moves mascot research from descriptive analysis to automatic classification of the emotional response.
- It separates the roles of the signals: skin conductance alone came close to the multimodal model for arousal, while valence relied on EEG, especially frontal asymmetry.
- Frontal alpha separated valence: alpha power was suppressed and more stable in pleasant moments, and higher and more variable in unpleasant ones.
- The lightweight fusion model gave the best result for both arousal (AUC 0.776) and valence (AUC 0.746), and Transformer results with high accuracy but low AUC showed why AUC should be the main metric on small, imbalanced data.

### Methodology

Participants view mascots we designed for an energy drink, toilet paper and ice cream, one masculine and one feminine per product, with images matched in size, resolution and background. After each product pair they rate their emotional response in a digital questionnaire. EEG and finger skin conductance are recorded simultaneously, with resting recordings used for subject-wise normalisation. Hjorth, band power and frontal alpha asymmetry features [4, 6, 7] feed a lightweight network that processes EEG, skin conductance and hand-crafted features in separate branches before fusing them; it is compared with single-signal models and Inception- and Transformer-based architectures [8], with AUC as the primary metric.

For related work see [Music and the brain](/en/research/music/) and [fNIRS with embedded AI](/en/research/fnirs-with-embedded-ai/).

## References

1. Yang, L. W., Aggarwal, P. (2025). When anthropomorphized brands push gender boundaries. *Journal of Consumer Psychology*, 35(1), 129–138.
2. Cooke, A. et al. (2022). Branding beyond the gender binary. *Psychology & Marketing*, 39, 1621–1632.
3. Berezka, S. et al. (2019). Understanding the role of brand mascots using consumer neuroscience research methods. *Proceedings of the European Marketing Academy (EMAC)*, 48.
4. Koelstra, S. et al. (2012). DEAP: A database for emotion analysis using physiological signals. *IEEE Transactions on Affective Computing*, 3(1), 18–31. [doi:10.1109/T-AFFC.2011.15](https://doi.org/10.1109/T-AFFC.2011.15)
5. Miranda-Correa, J. A. et al. (2021). AMIGOS: A dataset for affect, personality and mood research on individuals and groups. *IEEE Transactions on Affective Computing*, 12(2), 479–493. [doi:10.1109/TAFFC.2018.2884461](https://doi.org/10.1109/TAFFC.2018.2884461)
6. Hjorth, B. (1970). EEG analysis based on time domain properties. *Electroencephalography and Clinical Neurophysiology*, 29(3), 306–310. [doi:10.1016/0013-4694(70)90143-4](https://doi.org/10.1016/0013-4694(70)90143-4)
7. Petrantonakis, P. C., Hadjileontiadis, L. J. (2011). A novel emotion elicitation index using frontal brain asymmetry for enhanced EEG-based emotion recognition. *IEEE Transactions on Information Technology in Biomedicine*, 15(5), 737–746. [doi:10.1109/TITB.2011.2157933](https://doi.org/10.1109/TITB.2011.2157933)
8. Vafaei, E., Hosseini, M. (2025). Transformers in EEG analysis: A review of architectures and applications in motor imagery, seizure, and emotion classification. *Sensors*, 25(5), 1293. [doi:10.3390/s25051293](https://doi.org/10.3390/s25051293)
9. Khushaba, R. N. et al. (2013). Consumer neuroscience: Assessing the brain response to marketing stimuli using electroencephalogram (EEG) and eye tracking. *Expert Systems with Applications*, 40(9), 3803–3812.
