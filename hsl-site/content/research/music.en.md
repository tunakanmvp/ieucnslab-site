---
title: Music and the brain
weight: 30
summary: We study how the emotion perceived in Turkish makam music and the emotion the listener actually feels are reflected in EEG and skin conductance.
---
*Master's thesis research by Nilsu Çağla Hepsev.*

## Research Problem

We don't always feel sad when we listen to a sad song. The emotion we think the music expresses and the emotion we experience while listening don't always match. Music psychology separates these two levels as **perceived** and **felt** emotion [1]. A review of work on the topic also shows that the two sometimes overlap and sometimes diverge, and that the listener's musical preference can change this relationship [2].

This distinction matters a great deal when interpreting brain and body signals measured during music listening. Most emotion recognition studies work with a single general "emotion" label. Yet whether a change in the signal accompanies what the music conveys or what the listener experiences cannot be asked without separating the two.

Turkish makam music is a powerful source of stimuli for studying this question. Each makam has its own seyir, a characteristic route the melody follows, and these routes carry culturally defined emotional associations. The relationship between makams and brain activity has been studied before [8], and presentation features such as the tuning system have been shown to affect the emotion induced [9]. This study's contribution is to measure perceived and felt emotion separately, relate them to EEG and skin conductance together, and test the resulting models on participants they have never seen.

## Research Questions

1. For the same makam recording, how far do perceived and felt emotion diverge?
2. Do emotional ratings of different makam recordings differ within the same person?
3. Which dimensions of felt emotion are EEG and skin conductance related to?
4. Does using EEG and skin conductance together estimate emotion in new participants better than using a single signal?

## How We Work

Participants listen to wordless seyir recordings of about 50 seconds each, selected from the Rast, Hicaz, Hüseyni, Uşşak, Segâh, Nihavent, Kürdilihicazkâr and Sabâ makams. We describe emotion along two dimensions: **valence**, from negative to positive, and **arousal**, from calm to excited [3]. After each piece, participants use the Self-Assessment Manikin, which relies on pictorial figures rather than words [4], to rate separately the emotion they perceive in the music and the emotion they themselves feel.

Throughout listening we simultaneously record brain activity with 32-channel EEG and the body's arousal with skin conductance (GSR/EDA) measured from the fingers [5, 6]. From the EEG we extract power changes in different frequency bands, and from skin conductance both slow level changes and short responses. We then compare machine learning and deep learning models that use EEG alone, skin conductance alone and the two combined, treating perceived and felt emotion as separate targets [7].

## References

1. Gabrielsson, A. (2002). Emotion perceived and emotion felt: Same or different? *Musicae Scientiae*, 5(1_suppl), 123–147. [doi:10.1177/10298649020050S105](https://doi.org/10.1177/10298649020050S105)
2. Schubert, E. (2013). Emotion felt by the listener and expressed by the music: Literature review and theoretical perspectives. *Frontiers in Psychology*, 4, 837. [doi:10.3389/fpsyg.2013.00837](https://doi.org/10.3389/fpsyg.2013.00837)
3. Russell, J. A. (1980). A circumplex model of affect. *Journal of Personality and Social Psychology*, 39(6), 1161–1178. [doi:10.1037/h0077714](https://doi.org/10.1037/h0077714)
4. Bradley, M. M., Lang, P. J. (1994). Measuring emotion: The Self-Assessment Manikin and the Semantic Differential. *Journal of Behavior Therapy and Experimental Psychiatry*, 25(1), 49–59. [doi:10.1016/0005-7916(94)90063-9](https://doi.org/10.1016/0005-7916(94)90063-9)
5. Koelstra, S. et al. (2012). DEAP: A database for emotion analysis using physiological signals. *IEEE Transactions on Affective Computing*, 3(1), 18–31. [doi:10.1109/T-AFFC.2011.15](https://doi.org/10.1109/T-AFFC.2011.15)
6. Boucsein, W. et al. (2012). Publication recommendations for electrodermal measurements. *Psychophysiology*, 49(8), 1017–1034. [doi:10.1111/j.1469-8986.2012.01384.x](https://doi.org/10.1111/j.1469-8986.2012.01384.x)
7. Su, Y., Liu, Y., Xiao, Y., Ma, J., Li, D. (2024). A review of artificial intelligence methods enabled music-evoked EEG emotion recognition and their applications. *Frontiers in Neuroscience*, 18, 1400444. [doi:10.3389/fnins.2024.1400444](https://doi.org/10.3389/fnins.2024.1400444)
8. Aker, S. N. (2014). *Investigation of the effect of classical Turkish music makams by using EEG waveforms* (Master's thesis). Fatih University, Institute of Biomedical Engineering.
9. Altun, F., Egermann, H. (2021). Temperament systems influence emotion induction but not makam recognition performance in Turkish makam music. *Psychology of Music*, 49(5), 1088–1101. [doi:10.1177/0305735620922892](https://doi.org/10.1177/0305735620922892)
