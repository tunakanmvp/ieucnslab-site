---
title: Graph theory, reading the brain like a metro map
slug: graph-theory
date: 2026-11-07T12:05:00+03:00
category: Signal processing theory
summary: "A metro map doesn't show where stations really are, only where you can get to from where. Graph theory looks at the brain the same way: who is talking to whom?"
author: Berkay İlber Tunakan
---
Look at a metro map. The stations sit at neat, even intervals and the lines are tidy strokes. Nothing in the real city is that orderly. But the map still does its job, because what you actually care about is not each station's exact coordinates but **where you can get to from where**.

Graph theory is exactly that point of view. It reduces a system to two things:

- **Nodes:** The stations. In EEG, each electrode can be a node.
- **Edges:** The lines between stations. In EEG, the more alike two electrodes' signals are, the stronger the edge we draw between them.

Studying brain networks with graph theory has been one of the liveliest areas of neuroscience over the last two decades. The review by [Bullmore and Sporns](https://doi.org/10.1038/nrn2575) is widely seen as its starting point.

## What can we read from the map?

Once the map is drawn, we can ask it a few simple questions:

- **Degree:** How many lines pass through a station? Big interchange stations where many lines cross become the network's **hubs**. In the brain, too, some regions talk to many others at once.
- **Path length:** How many changes does it take to get from one station to another? The shorter the path, the faster information travels across the network.
- **Clustering:** Do your friends' friends know each other too? Nodes whose neighbours are also connected among themselves form tight clusters. In the brain these correspond to groups of regions that work together.

An interesting property of brain networks is their **small-world** structure. There are tight local clusters, yet a few long "express lines" let you get from one end of the network to the other in just a few steps. You've probably heard that everyone is six handshakes away from everyone else; the brain is organised in a similar way.

## Turning a signal into a graph

A graph doesn't have to be built between electrodes. A single time series can be turned into a graph too. One elegant way is the **visibility graph**: picture each sample of the signal as a pole standing side by side on flat ground, with the pole's height equal to the signal's value at that moment. Stretch a taut string between the tops of two poles; if no other pole touches the string, the two poles "see" each other and we draw an edge between them.

This way the shape of the signal becomes the shape of a network. Sharp peaks see many poles and become hubs, while smooth, flat stretches leave a different network texture. In our lab we used this approach to study [synchronisation between brain regions](https://doi.org/10.1142/s0129065721500416) in epileptic EEG recordings.

## Graphs have a Fourier too

In the [spectral features post](/en/blog/spectral-features/) I talked about describing a signal "in another unit system". The Fourier transform is designed for samples taken at regular intervals in time. So what do we do with signals sitting on irregularly placed points, like electrodes?

[Graph signal processing](https://doi.org/10.1109/MSP.2012.2235192) answers that question. We build a unit system derived from the structure of the graph. In this system, "low frequency" means patterns that take similar values on neighbouring nodes and spread smoothly across the network. "High frequency" means patterns that change sharply from neighbour to neighbour. My height is still 1.85 m; this time we're just measuring it in the language of the metro map.

This idea is also the foundation of [graph convolutional neural networks](/en/blog/graph-cnn/) in artificial intelligence.

## References

1. Bullmore, E., Sporns, O. (2009). Complex brain networks: graph theoretical analysis of structural and functional systems. *Nature Reviews Neuroscience*, 10(3), 186–198. [doi:10.1038/nrn2575](https://doi.org/10.1038/nrn2575)
2. Shuman, D. I., Narang, S. K., Frossard, P., Ortega, A., Vandergheynst, P. (2013). The emerging field of signal processing on graphs: Extending high-dimensional data analysis to networks and other irregular domains. *IEEE Signal Processing Magazine*, 30(3), 83–98. [doi:10.1109/MSP.2012.2235192](https://doi.org/10.1109/MSP.2012.2235192)
3. Olamat, A., Ozel, P., Akan, A. (2021). Synchronization analysis in epileptic EEG signals via state transfer networks based on visibility graph technique. *International Journal of Neural Systems*. [doi:10.1142/s0129065721500416](https://doi.org/10.1142/s0129065721500416)
