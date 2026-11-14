---
title: How Does Aircraft Noise Affect Our Attention And Our Heart?
slug: aircraft-noise-and-attention
date: 2026-11-07T16:30:00+03:00
category: Our Research
summary: For people living near airports, aircraft noise is part of daily life. In this capstone project we recorded the brain activity and heart rate of participants solving an attention test under different noise levels.
author: Berkay İlber Tunakan
---
*Undergraduate capstone project (FENG 497/498) by Berkay İlber Tunakan, Altuğ Güneş, Duygu Köybaşı and Can Mungan, supervised by Prof. Dr. Aydın Akan.*

Imagine living near an airport. Every few minutes, whether you open a window, take a phone call or try to concentrate, the sound of an aircraft cuts in. Noise pollution is one of the most widespread environmental problems in big cities today, and aircraft noise is among its most intense forms. It can disrupt sleep, raise stress and threaten hearing. But how does it affect our attention and mental workload?

## Noise In The Courtroom: The Osaka Airport Case

Lawsuits in Japan show most strikingly that aircraft noise is more than a nuisance. In 1969, residents living directly under the take-off and landing routes of Osaka International Airport (Itami) sued the state, arguing that aircraft noise and vibration were harming their daily lives and health. They asked for flights to be stopped between 9 p.m. and 7 a.m. and for compensation for past and future damages.

<figure class="blog-figure"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Osaka_International_Airport_Aerial_photograph_1985.jpg?width=1280" alt="Aerial photograph of Osaka International Airport and the surrounding residential areas, 1985" loading="lazy" style="max-height:34rem;width:auto;max-width:100%"><figcaption>Osaka International Airport (Itami) and the housing that reaches right up to the runway, 1985. Source: National Land Image Information (Color Aerial Photographs), Ministry of Land, Infrastructure, Transport and Tourism of Japan, via <a href="https://commons.wikimedia.org/wiki/File:Osaka_International_Airport_Aerial_photograph_1985.jpg">Wikimedia Commons</a>.</figcaption></figure>

In 1975 the Osaka High Court recognised the harm to the residents' health and ordered night flights to be halted during those hours. When the case reached Japan's Supreme Court in 1981, the night-flight injunction was rejected, but compensation for past damages was upheld ([English summary of the Supreme Court judgment](https://www.courts.go.jp/app/hanrei_en/detail?id=66)). In Japan this case paved the way for a series of noise lawsuits around military bases that continue to this day:

- **Yokota (Tokyo):** In 2007 the Supreme Court ordered compensation for past damages to about 6,000 plaintiffs but rejected the demand to halt night flights ([The Japan Times](https://www.japantimes.co.jp/news/2007/05/30/national/top-court-cuts-some-redress-from-yokota-base-noise-suit/)).
- **Atsugi (Kanagawa):** In 2014 the Yokohama District Court became the first district court to order night flights by Self-Defense Forces aircraft to be suspended, and the Tokyo High Court upheld the decision in 2015 ([The Japan Times](https://www.japantimes.co.jp/opinion/2015/08/09/editorials/reducing-military-jet-noise)).
- **Kadena (Okinawa):** In 2017 about 22,000 residents were awarded ¥30.2 billion, the largest noise damages in Japanese history ([The Japan Times](https://www.japantimes.co.jp/news/2017/02/23/national/crime-legal/japanese-government-ordered-pay-record-damages-u-s-base-noise-suit)). The lawsuits were still continuing in 2026 ([Stars and Stripes](https://www.stripes.com/theaters/asia_pacific/2026-01-29/aircraft-noise-lawsuit-kadena-okinawa-20560141.html)).

These cases show that the impact of aircraft noise on quality of life is recognised even in law. Yet studies examining how this impact shows up in the brain and body with objective measurements are still limited. That is where our project started.

## How We Measured It

Thirty healthy participants aged 20 to 30 solved an **n-back test**, which measures attention and working memory. We used the two-step (2-back) version: letters appear on the screen one at a time, and the participant presses a button when the current letter matches the one shown two letters earlier. The test was repeated under three sound conditions: **silence**, **moderate aircraft noise** and **loud aircraft noise**.

![Instructions shown to participants for the 2-back test](nback1.png "Instructions shown to participants (in Turkish): press the button when the letter matches the one two letters earlier.")

![Two example screens during the 2-back test](nback2.png "Example screens during the test: letters appear one at a time.")

During the test we recorded brain activity with our lab's EEG system and heart rate with a wrist-worn photoplethysmography (PPG) band. We filtered the EEG signals and extracted time- and frequency-domain features for each sound condition. We then trained machine learning models that predict the participant's test performance from these features.

{{< alinti >}}Aircraft noise leaves an immediate trace in the body. Its effect on attention is more complex than we thought.{{< /alinti >}}

## What We Found

{{< sayilar >}}
30 | participants, three sound conditions
80% | of male participants showed a clear heart-rate rise
70% | accuracy predicting performance from EEG
0.81 | highest AUC, on channel Cz
{{< /sayilar >}}

**Louder sound, faster heart.** As sound level and the mental load of the test increased, participants' heart rate rose. The increase was clear in about 80% of male participants and about 60% of female participants.

**Noise did not hurt performance as much as expected.** Our initial expectation was that more noise would mean less attention and more errors. The results were not that simple. The number of correct responses was similar across all three conditions and decreased only slightly as noise increased. Errors were highest in silence, which may partly be because silence was the participants' first round of the test. Under moderate and loud noise, errors dropped markedly. This suggests that a certain level of background sound may help keep attention alert.

**EEG helped predict performance.** A voting classifier combining support vector machines, random forest and gradient boosting predicted participants' test performance from EEG with about 70% accuracy. On the central Cz channel this model reached the highest AUC, 0.81.

## Conclusion

Aircraft noise leaves an immediate trace in the body: the heart speeds up, and this response differs between people and even between sexes. Its effect on attention is more complex than we thought. In a short test, noise did not impair performance, and moderate noise even reduced errors. These findings show the value of assessing the effects of noise not only through test scores but together with brain and body signals.

This project was one of the first steps towards the EEG and multimodal biosignal work our lab carries out today.
