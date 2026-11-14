---
title: Wood Fibre Or Glass? What Does Our Brain Say About Sustainable Packaging?
slug: sustainable-packaging-and-the-brain
date: 2026-11-12T12:30:00+03:00
category: Our Research
summary: In surveys we all love eco-friendly packaging. But does our brain say the same? Using EEG recordings from 56 participants, we compared emotional responses to a wood fibre bottle and a glass bottle.
author: Computational Neuroscience Lab
---
*Study presented at CoDIT 2026 by Eray Özcan Kılıç, Burak Akbuğday, Prof. Dr. Aydın Akan and Dr. Rıza Sadıkzade: "Investigating the Effect of Sustainable Product Packaging on Consumer Behavior Using EEG Signals" ([doi:10.1109/CoDIT70676.2026.11630728](https://doi.org/10.1109/CoDIT70676.2026.11630728)).*

If we asked you "Would you choose eco-friendly packaging?", you would most likely say "Yes". In surveys we are all a little greener, because saying "no" to that question doesn't feel great. Researchers call this **social desirability bias**: people tend to give the answer they think is right or will be well received.

{{< kisaca >}}
- In surveys we love eco-friendly packaging, but our brains responded to the glass bottle more **positively and with more excitement**.
- The two packages were processed in **different brain regions**.
- Emotion was best revealed by features measuring the **complexity** of the brain signal.
{{< /kisaca >}}

Yet whether we take a product off the shelf is often decided in a few seconds, largely without our noticing. Packaging is our first point of contact with the product. So in this study we turned the question around: when we look at sustainable packaging, what does our **brain** say?

## A Bottle Made Of Wood Fibre

We showed our participants images of two drink bottles: one made of **wood fibre**, a sustainable material, and a familiar **glass** bottle. The images carried no brand name or label, so responses depended only on the packaging itself. Each image stayed on screen for 45 seconds, and to balance order effects half the participants saw the wood fibre bottle first and the other half saw the glass bottle first.

Meanwhile we recorded the brain activity of 56 participants with 32-channel EEG. After each image, participants rated how happy, hopeful and satisfied (**valence**) and how excited and alert (**arousal**) they felt.

## The Glass Bottle Was More Exciting

The first surprise came from the questionnaires. The glass bottle drew clearly positive responses on both valence and arousal. Responses to the wood fibre bottle were almost neutral, even slightly negative. In other words, the eco-friendly packaging did not excite people as much as glass, at least at first sight.

The brain signals also showed that the two bottles were processed differently:

- For the wood fibre bottle, the traces that distinguished emotions clustered mostly over the forehead and temples (**frontal-temporal**), pointing to a faster, more automatic evaluation.
- For the glass bottle, **parietal-occipital** areas at the back of the brain, linked to visual and conceptual processing, joined in as well. The glass bottle triggered a more extensive mental evaluation.

## The Signal's "Complexity" Gives Emotion Away

To read emotion from EEG, most studies look at the power of brain waves in different frequency bands. Alongside these, we computed **nonlinear** and **entropy**-based features that measure how irregular or predictable the signal is. The result was striking: the features most useful for telling emotional states apart were not classical band powers but measures of the signal's complexity and consistency over time, such as **fuzzy entropy** and the **Hurst exponent**.

A lightweight machine learning model using these features distinguished participants' four emotional states with **94.4%** accuracy for the glass bottle and **90.7%** for the wood fibre bottle. The model runs on an ordinary computer without a graphics card.

{{< sayilar >}}
56 | participants, 32-channel EEG
94.4% | accuracy telling four emotional states apart for glass
90.7% | accuracy for wood fibre
{{< /sayilar >}}

## Why It Matters


Sustainability is at the top of the agenda for brands and designers. But it is hard to understand how consumers really respond to eco-friendly packaging from surveys alone. This study shows that packaging material creates measurable differences in the brain, and that being the "right" choice does not automatically make sustainable packaging appealing. Brain signals can be a powerful compass in the search for ways to make eco-friendly packaging more attractive.

Curious what neuromarketing is? Read our post [Neuromarketing, Or Listening To What Surveys Can't Tell You](/en/blog/what-is-neuromarketing/).
