---
title: Linearity, What Happens When You Double The Volume?
slug: linearity
date: 2026-11-07T12:24:00+03:00
category: Signal processing theory
summary: "Turn a speaker up to twice the volume and the music comes out twice as loud, but the song stays the same. The most powerful tools of signal processing rest on this simple behaviour."
author: Berkay İlber Tunakan
---
In signal processing, a "system" is anything that takes a signal in and gives a signal out: a filter, an amplifier, even the skull. A system being **linear** comes down to two simple conditions.

**Scaling:** Double the input and the output doubles. Turn up a speaker and the song stays the same, it just gets louder.

**Adding:** Feed two inputs together and the output is the sum of the outputs you'd get from each one separately. If two speakers in a room play different songs, what reaches your ear is the sum of the two.

Together these two conditions are called **superposition**. A third condition is often added: the system behaves the same today as tomorrow, i.e. it is **time-invariant**. Systems that meet all three are called LTI (linear, time-invariant) systems.

## Why does it matter so much?

Because to understand a linear system you don't have to test it with every possible input. The [Fourier transform](/en/blog/fourier-transform/) splits any signal into a sum of simple sine waves. If you know what the system does to individual sine waves, superposition tells you what it does to any signal. Almost all of filter design rests on this idea.

This is also what makes EEG understandable. As the electrical activity of different sources in the brain passes through the skull and scalp to the electrodes, it adds up in a largely linear way. The signal we see at one electrode is a weighted sum of many sources. The methods we use to separate artefacts such as eye blinks from the signal also rely on this assumption.

But the world isn't always this tidy. We cover that in the [nonlinearity post](/en/blog/nonlinearity/).

## References

1. Akan, A., Chaparro, L. F. (2024). Continuous-time systems. *Signals and Systems Using MATLAB*, Elsevier. [doi:10.1016/b978-0-44-315709-7.00012-4](https://doi.org/10.1016/b978-0-44-315709-7.00012-4)
2. Akan, A., Chaparro, L. F. (2024). Discrete-time signals and systems. *Signals and Systems Using MATLAB*, Elsevier. [doi:10.1016/b978-0-44-315709-7.00018-5](https://doi.org/10.1016/b978-0-44-315709-7.00018-5)
