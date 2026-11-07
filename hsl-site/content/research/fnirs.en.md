---
title: fNIRS with embedded AI
slug: fnirs-with-embedded-ai
weight: 35
summary: We are building a wearable, whole-head fNIRS system that runs AI on the device itself.
---
*Master's thesis research by Uğur Emin Baynal. Part of our project led by Prof. Dr. Aydın Akan, submitted to TÜSEB and [granted pre-acceptance](/en/news/tuseb-b-pre-acceptance/).*

## Research Problem

fNIRS uses light to measure changes in oxygenated and deoxygenated haemoglobin in the cortex, non-invasively and portably. We explained how it works in our [fNIRS post](/en/blog/what-is-fnirs/). But limitations running from hardware to software can increase bias in fNIRS research [1]:

- **Motion artefacts** are the biggest source of corrupted measurements. Reviews of the field show that the balance between hardware and algorithmic solutions is still unclear [2].
- **Extracerebral contributions.** Because light first passes through the scalp and skull, systemic factors such as blood pressure can produce misleading signals that look like brain activity [3].
- **Optode–scalp contact.** Contact is harder to achieve through dark, thick or curly hair. This is not only a technical problem but an inclusivity problem that leads to these people being excluded from research [1].

Today, signal quality is mostly assessed after recording has finished, during analysis. A corrupted channel is only noticed then, when the data has already been lost. Machine learning methods that detect bad channels automatically are just emerging [4, 5], but they run after recording, on desktop computers.

## What We Do

We are developing a wearable fNIRS system that covers the whole head. Our aim is to turn signal quality control from a step that comes after recording into part of how the device behaves during recording. To do this, we are working on embedded AI methods that run on the device itself. We hope this will let problems that today are only noticed during analysis be caught during recording, and allow reliable measurements from people with a wide range of hair and skin characteristics.

## References

1. Doherty, E. J. et al. (2023). Interdisciplinary views of fNIRS: Current advancements, equity challenges, and an agenda for future needs of a diverse fNIRS research community. *Frontiers in Integrative Neuroscience*, 17, 1059679. [doi:10.3389/fnint.2023.1059679](https://doi.org/10.3389/fnint.2023.1059679)
2. Huang, R., Hong, K.-S., Yang, D., Huang, G. (2022). Motion artifacts removal and evaluation techniques for functional near-infrared spectroscopy signals: A review. *Frontiers in Neuroscience*, 16, 878750. [doi:10.3389/fnins.2022.878750](https://doi.org/10.3389/fnins.2022.878750)
3. Caldwell, M., Scholkmann, F., Wolf, U., Wolf, M., Elwell, C., Tachtsidis, I. (2016). Modelling confounding effects from extracerebral contamination and systemic factors on functional near-infrared spectroscopy. *NeuroImage*, 143, 91–105. [doi:10.1016/j.neuroimage.2016.08.058](https://doi.org/10.1016/j.neuroimage.2016.08.058)
4. Gerloff, C., Yücel, M. A., Mehlem, L., Konrad, K., Reindl, V. (2024). NiReject: toward automated bad channel detection in functional near-infrared spectroscopy. *Neurophotonics*, 11(4), 045008. [doi:10.1117/1.NPh.11.4.045008](https://doi.org/10.1117/1.NPh.11.4.045008)
5. Guglielmini, S., Chen, Z., Wolf, M. (2025). DL-QC-fNIRS: a deep learning tool for automated quality control in functional near-infrared spectroscopy signals. *Neurophotonics*, 13(1), 015001. [doi:10.1117/1.NPh.13.1.015001](https://doi.org/10.1117/1.NPh.13.1.015001)
