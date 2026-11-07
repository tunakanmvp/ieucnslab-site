---
title: Nonlinearity, Adding Ten More Cars To Traffic
slug: nonlinearity
date: 2026-11-07T12:26:00+03:00
category: Signal Processing Theory
summary: "Adding ten cars to an empty road changes nothing. Adding ten cars to a busy road can bring traffic to a standstill. The brain often behaves the same way."
author: Berkay İlber Tunakan
---
In the [linearity post](/en/blog/linearity/) we talked about systems where doubling the input doubles the output. Many real-world systems don't behave like that.

Think of traffic. Add ten cars to an empty road at night and nothing changes. Add ten cars to the same road at rush hour, when it's already full, and traffic can grind to a halt. The same amount of change has completely different effects depending on the system's current state. That is what **nonlinearity** means.

Something similar happens when you turn a speaker all the way up: the sound doesn't just get louder, it starts to crackle. Nonlinear systems can produce new frequencies that weren't in the input at all.

## Why Isn't The Brain Linear?

Start with the smallest building block. A neuron stays silent until its incoming signals cross a certain threshold. Once the threshold is crossed, it fires fully, all or nothing. There is no half-firing. That is the exact opposite of linear behaviour. A network of billions of such units wired together shows very rich, and sometimes hard to predict, behaviour.

That's why studying EEG only with linear tools, for example only the spectrum, can miss part of the picture. As summarised in [Stam's review](https://doi.org/10.1016/j.clinph.2005.06.011), nonlinear analysis methods measure a signal's complexity, regularity and predictability. Entropy measures and [fractal dimension](/en/blog/fractal-features/) are the best known.

In our lab we have compared these two views too: to detect an olfactory stimulus in EEG, we evaluated [linear and nonlinear features](https://doi.org/10.1109/tiptekno56568.2022.9960190) side by side. More often than not, the best results come from using both together.

## References

1. Stam, C. J. (2005). Nonlinear dynamical analysis of EEG and MEG: review of an emerging field. *Clinical Neurophysiology*, 116(10), 2266–2301. [doi:10.1016/j.clinph.2005.06.011](https://doi.org/10.1016/j.clinph.2005.06.011)
2. Akbugday, B., Akan, A., Pehlivan, S., Sadighzadeh, R. (2022). An assessment of linear and nonlinear features for detecting olfactory stimulus in EEG. *Medical Technologies Congress (TIPTEKNO)*. [doi:10.1109/tiptekno56568.2022.9960190](https://doi.org/10.1109/tiptekno56568.2022.9960190)
