---
title: fNIRS with embedded AI
slug: fnirs-with-embedded-ai
weight: 35
summary: We are building a wearable, whole-head fNIRS system that runs AI on the device itself and checks its own signal quality during recording.
---
*Master's thesis research by Uğur Emin Baynal. Part of our project led by Prof. Dr. Aydın Akan, submitted to TÜSEB and [granted pre-acceptance](/en/news/tuseb-b-pre-acceptance/).*

## Research Problem

fNIRS uses light to measure changes in oxygenated and deoxygenated haemoglobin in the cortex, non-invasively and portably. We explained how it works in our [fNIRS post](/en/blog/what-is-fnirs/). But limitations running from hardware to software can increase bias in fNIRS research [1]:

- **Motion artefacts** are the biggest source of corrupted measurements. Reviews of the field show that the balance between hardware and algorithmic solutions is still unclear [2].
- **Extracerebral contributions.** Because light first passes through the scalp and skull, systemic factors such as blood pressure can produce misleading signals that look like brain activity [3].
- **Optode–scalp contact.** Contact is harder to achieve through dark, thick or curly hair. This is not only a technical problem but an inclusivity problem that leads to these people being excluded from research [1].

Today, signal quality is mostly assessed after recording has finished, during analysis. A corrupted channel is only noticed then, when the data has already been lost. Machine learning methods that detect bad channels automatically are just emerging [4, 5], but they run on desktop computers. There is no published, independently evaluated fNIRS system that runs this kind of inference on a microcontroller during recording.

## What We Do

We are developing a wearable, 32-channel fNIRS headset that covers the whole head. Channel placement is determined by simulating the path of light through tissue on a head model. Each cluster of long channels is paired with short-separation channels that measure only the scalp [6], so that extracerebral contributions can be removed from the signal.

The device's key difference is that it moves quality control into the recording itself. A small AI model that recognises channel quality and motion artefacts runs on an embedded processor on the device. A channel whose quality drops is detected within seconds and flagged to the operator. A problem that today is only noticed during analysis can then be fixed while the participant is still putting on the headset.

Along the way we also aim to answer a scientific question. The performance gap between a large "teacher" model trained on a powerful computer and a "student" model distilled from it and shrunk to fit a microcontroller has not yet been measured for fNIRS. We aim to report this gap, showing the contribution of each step of the shrinking process separately.

## Research Questions

1. What performance cost comes with moving a quality model trained on a computer onto a resource-constrained microcontroller, and which shrinking step does that cost come from?
2. Can the electrode impedance routinely measured in EEG recordings predict how well co-located fNIRS optodes are in contact with the skin?
3. Does quality feedback running during recording significantly increase the number of usable channels after setup?

The project also plans to share the data it collects as an open dataset that includes participants with different hair types and skin tones.

## References

1. Doherty, E. J. et al. (2023). Interdisciplinary views of fNIRS: Current advancements, equity challenges, and an agenda for future needs of a diverse fNIRS research community. *Frontiers in Integrative Neuroscience*, 17, 1059679. [doi:10.3389/fnint.2023.1059679](https://doi.org/10.3389/fnint.2023.1059679)
2. Huang, R., Hong, K.-S., Yang, D., Huang, G. (2022). Motion artifacts removal and evaluation techniques for functional near-infrared spectroscopy signals: A review. *Frontiers in Neuroscience*, 16, 878750. [doi:10.3389/fnins.2022.878750](https://doi.org/10.3389/fnins.2022.878750)
3. Caldwell, M., Scholkmann, F., Wolf, U., Wolf, M., Elwell, C., Tachtsidis, I. (2016). Modelling confounding effects from extracerebral contamination and systemic factors on functional near-infrared spectroscopy. *NeuroImage*, 143, 91–105. [doi:10.1016/j.neuroimage.2016.08.058](https://doi.org/10.1016/j.neuroimage.2016.08.058)
4. Gerloff, C., Yücel, M. A., Mehlem, L., Konrad, K., Reindl, V. (2024). NiReject: toward automated bad channel detection in functional near-infrared spectroscopy. *Neurophotonics*, 11(4), 045008. [doi:10.1117/1.NPh.11.4.045008](https://doi.org/10.1117/1.NPh.11.4.045008)
5. Guglielmini, S., Chen, Z., Wolf, M. (2025). DL-QC-fNIRS: a deep learning tool for automated quality control in functional near-infrared spectroscopy signals. *Neurophotonics*, 13(1), 015001. [doi:10.1117/1.NPh.13.1.015001](https://doi.org/10.1117/1.NPh.13.1.015001)
6. Brigadoi, S., Cooper, R. J. (2015). How short is short? Optimum source–detector distance for short-separation channels in functional near-infrared spectroscopy. *Neurophotonics*, 2(2), 025005. [doi:10.1117/1.NPh.2.2.025005](https://doi.org/10.1117/1.NPh.2.2.025005)
