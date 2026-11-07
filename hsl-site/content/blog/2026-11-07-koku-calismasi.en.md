---
title: A Colourful Map Of A Scent In The Brain
slug: a-scents-map-in-the-brain
date: 2026-11-07T17:20:00+03:00
category: Our Research
summary: What happens in our brain the moment we smell something? We turned the EEG recordings of 57 participants into colourful heatmaps and showed them to an AI. The result was a model that told scented and unscented moments apart almost without error.
author: Computational Neuroscience Lab
---
*Study presented at TIPTEKNO 2025 by Dr. Faezeh Yeganli, Prof. Dr. Aydın Akan and Dr. Rıza Sadıkzade: "Olfactory Emotion Recognition Using EEG Spectral Topographic Heatmaps and CNNs" ([doi:10.1109/TIPTEKNO68206.2025.11270101](https://doi.org/10.1109/tiptekno68206.2025.11270101)).*

The faint scent of vanilla that greets you when you walk into a shop is no accident. From airport terminals to cosmetics counters, scents are chosen deliberately to influence how we feel and what we do. But how do we measure what a scent really makes us feel? Asking "Did you like it?" tells only part of the story.

In our [smell post](/en/blog/smell-the-brains-shortcut/) we explained why smell reaches the brain by a shortcut. In this post we explain how we "photographed" the trace that shortcut leaves in the brain.

## Reading The Brain Like A Weather Map

EEG records brain activity from electrodes on the scalp with millisecond resolution. But a raw EEG recording is just dozens of wiggly lines side by side. To the human eye, it is hard to make sense of.

In this study we took a different route: we turned EEG into a **weather map**. Brain signals are not one rhythm but waves oscillating at different speeds: slow delta and theta, faster alpha, beta and gamma. We calculated how strong each rhythm was over each region of the head and placed it in colour on a map of the head seen from above. Red regions show where that rhythm is strong, blue where it is weak.

![EEG heatmaps of the theta band in scented and unscented conditions](isi-haritasi.png "Example theta-band heatmaps for the scented (left) and unscented (right) conditions. Warmer colours show higher activity.")

Each one-second slice of EEG thus became a picture that can be read at a glance. And there is a type of AI that is very good at looking at pictures.

## An AI That Looks At Pictures

Convolutional neural networks (CNNs) were developed to recognise faces or objects in photographs. We explained how they work in our [CNN post](/en/blog/how-does-a-cnn-work/). We showed such a network hundreds of heatmaps from scented and unscented moments and taught it to tell the two apart.

Fifty-seven participants took part. Each was recorded with EEG in both a scented and an unscented condition, and after each condition they rated how **aroused** (calm to excited) and how **pleased** they felt. The model learned to classify these two dimensions separately.

We made an important choice here: we kept the model small and simple. In earlier work we had extracted many time, frequency and nonlinear features from the EEG ([TIPTEKNO 2024](https://doi.org/10.1109/tiptekno63488.2024.10755366)). This time we built a lightweight model that relies only on frequency information and the map of a single rhythm. The aim was a method simple enough to run one day in real-time, portable systems.

## Theta Waves Give The Scent Away

The results surprised us too:

- For **arousal**, **theta** waves gave the best result: the model told scented and unscented moments apart with **98.4%** accuracy, getting only one of the test samples wrong.
- For **pleasure**, **theta** and **beta** waves gave the best result at **96.6%** accuracy.
- Delta and gamma waves carried less information.

The heatmaps show why: in scented moments, theta activity concentrates clearly over the **frontal and temporal** regions, roughly beneath the forehead and temples. In unscented moments it is weaker and more diffuse. These regions are closely connected to the limbic structures involved in emotion and memory. Given theta's link to attention and emotional memory, it makes sense to see the EEG trace of smell's "shortcut" exactly here.

Our lightweight model also outperformed better-known networks such as MobileNetV2 and SqueezeNet on the same data.

## Why It Matters

Being able to read what a scent makes us feel directly from brain signals, without asking, opens many doors. Measuring more objectively how a perfume, a product or a store environment affects consumers is only one of them. The simplicity of the method also makes it easier to bring to real-time applications and brain–computer interfaces. Our next step is to test the model on participants it has never seen and to take the changes in the signals over time into account.
