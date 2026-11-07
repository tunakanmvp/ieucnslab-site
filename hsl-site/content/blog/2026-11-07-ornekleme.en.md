---
title: Sampling, Why Do Wheels Spin Backwards In Films?
slug: sampling
date: 2026-11-07T12:22:00+03:00
category: Signal processing theory
summary: "In films, the wheels of a fast car sometimes seem to spin backwards. That small illusion explains the most basic rule of digital signal processing."
author: Berkay İlber Tunakan
---
A brain signal flows continuously. A computer can't store something continuous, so it takes snapshots of the signal at regular intervals. We call this **sampling**. If we take 500 snapshots per second, our sampling frequency is 500 Hz.

So how many snapshots per second are enough?

## Wheels spinning backwards

Remember the wheels of a fast car in a film. Sometimes they seem to slow down, stop, or even spin backwards. The reason is the camera: it takes a fixed number of frames per second. If the wheel makes almost a full turn between two frames, the camera catches it as if it had moved back a little.

The same happens with signals. If you don't sample a fast-oscillating wave often enough, it shows up in the recording as a slower, fake wave. This is called **aliasing**. The sneaky part: looking at the recording, you can't tell anything went wrong.

## The Nyquist rule

The fix rests on a simple rule: you must sample more often than **twice** the highest frequency in the signal. [Shannon](https://doi.org/10.1109/JRPROC.1949.232969) set out this limit clearly in 1949. When the rule holds, the original continuous signal can be recovered exactly from its samples.

If we want to see gamma activity reaching up to 100 Hz in EEG, we need to sample at 200 Hz or more. In practice, EEG devices usually run between 250 and 1000 Hz. There is also a safety step: just before sampling, a filter removes frequencies above the limit, so the "backwards wheel" never makes it into the recording.

## References

1. Shannon, C. E. (1949). Communication in the presence of noise. *Proceedings of the IRE*, 37(1), 10–21. [doi:10.1109/JRPROC.1949.232969](https://doi.org/10.1109/JRPROC.1949.232969)
2. Akan, A., Chaparro, L. F. (2024). Sampling theory. *Signals and Systems Using MATLAB*, Elsevier. [doi:10.1016/b978-0-44-315709-7.00017-3](https://doi.org/10.1016/b978-0-44-315709-7.00017-3)
