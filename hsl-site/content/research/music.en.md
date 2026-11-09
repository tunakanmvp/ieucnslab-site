---
title: Music and the brain
weight: 30
summary: We study how the emotion perceived in Turkish makam music and the emotion the listener actually feels are reflected in EEG and skin conductance.
---
*Master's thesis research by Nilsu Çağla Hepsev.*

## State of the Art

We don't always feel sad when we listen to a sad song. Music psychology separates the emotion a piece is thought to express from the emotion the listener experiences, as **perceived** and **felt** emotion [1]. Reviews show that the two sometimes overlap and sometimes diverge, and that musical preference can change this relationship [2].

Music-evoked emotion recognition from physiological signals is an active field. Benchmark datasets combine EEG with peripheral signals such as skin conductance [5], recommendations exist for electrodermal measurement [6], and recent reviews summarise the machine learning and deep learning methods applied to music-evoked EEG [7]. Emotion is usually described along the valence and arousal dimensions [3] and rated with pictorial scales such as the Self-Assessment Manikin [4].

Two gaps motivate this work. First, most studies use a single general "emotion" label, so it remains unclear whether a change in the signal accompanies what the music conveys or what the listener feels. Second, Turkish makam music, whose makams follow characteristic melodic routes (seyir) with culturally defined emotional associations, has been studied with EEG [8] and its presentation features have been shown to affect induced emotion [9], but perceived and felt emotion have not been measured separately alongside EEG and skin conductance.

## Excellence

### Objectives

- **O1.** Measure how far perceived and felt emotion diverge for the same makam recording.
- **O2.** Test whether emotional ratings of different makam recordings differ within the same person.
- **O3.** Determine which dimensions of felt emotion EEG and skin conductance relate to.
- **O4.** Assess whether combining EEG and skin conductance estimates emotion in new participants better than either signal alone.

### Ambition and Progress Beyond the State of the Art

- Treating perceived and felt emotion as separate targets makes it possible to ask which of the two the brain and body signals actually follow.
- Turkish makam music provides a culturally grounded and under-studied stimulus set for affective computing.
- Evaluating models on participants they have never seen gives a realistic picture of how well emotion recognition generalises.

### Methodology

Participants listen to wordless seyir recordings of about 50 seconds each, selected from the Rast, Hicaz, Hüseyni, Uşşak, Segâh, Nihavent, Kürdilihicazkâr and Sabâ makams. After each piece they rate, with the Self-Assessment Manikin, the emotion they perceive in the music and the emotion they feel, along valence and arousal [3, 4]. EEG (32 channels) and finger skin conductance are recorded simultaneously [5, 6]. Band power changes are extracted from the EEG, and slow level changes and short responses from skin conductance. Machine learning and deep learning models using EEG alone, skin conductance alone and both together are compared, with perceived and felt emotion as separate targets [7].

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
