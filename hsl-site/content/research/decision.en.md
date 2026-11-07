---
title: Brand trust and decision-making
weight: 20
summary: We study what happens in the brain at the moment we trust a brand by looking at how EEG patterns cluster on their own, without imposing labels.
---
*Master's thesis research by Berkay İlber Tunakan, supervised by Prof. Dr. Aydın Akan.*

## Research Problem

What happens in our brain at the moment we decide whether to trust a brand? Trust is not a single feeling, nor the work of a single brain region. Reviews of the biology of trust show that the decision relies on the basal ganglia, linked to reward expectation, limbic structures that process threat and uncertainty, and frontal regions that carry out evaluation, all working together [1]. An EEG study using an investment game likewise found trust-related activity spread across frontal, fronto-central and occipital areas, and its authors concluded that no single brain region responds to trust on its own [2].

Yet most EEG studies of trust work with labels defined before the experiment: classes such as "high trust / low trust" or "trustworthy / untrustworthy" are set, and the brain signal is used to predict them [3, 4]. This approach squeezes the different components inside trust, namely expectation, risk, remembered experience and felt closeness, into a single label.

With brands, this distinction matters even more. Knowing and liking a brand is not the same as trusting it. Consumer research shows that brand familiarity shapes the attitudes that lead to investment decisions [5], that brand trust and familiarity each affect brand attachment [6], and that some brand traits feed trust more while others feed emotional closeness more [7]. Scales built to measure brand trust also define it as a construct with several sub-dimensions [8]. On the brain side, we know that a prior reputation changes how much people rely on the feedback they later receive [1]. In other words, trust in a familiar brand may be processed along a different route in the brain than trust in a new company.

So we frame our question as follows: **when we look at EEG recorded at the moment of a trust decision without giving it any labels in advance, which patterns come together on their own? And how do these clusters line up with the brand's familiarity, its likeability, the trustworthiness it has shown, the decision made and the outcome of that decision?**

## How We Work

Participants play an investment game featuring well-known brands from different sectors. On each round they decide whether to invest in a brand and then see the outcome. Some brands behave consistently while others let that trust down over time. This lets us observe trust being built, maintained and shaken within the same experiment. During recording we use a web-based experiment interface we built ourselves, which aligns the EEG with decision moments at millisecond precision. Participants also complete a brand trust scale for the brands.

In the analysis, rather than classifying the signal by labels such as "trusted / did not trust", we use unsupervised learning methods to look at how EEG patterns cluster by their similarity to one another. We then compare these clusters with behaviour, scale scores and the brands' characteristics. Our aim is to draw the components of trust in the brain out of the data itself, instead of defining them from the outside.

## References

1. Riedl, R., Javor, A. (2012). The biology of trust: Integrating evidence from genetics, endocrinology, and functional brain imaging. *Journal of Neuroscience, Psychology, and Economics*, 5(2), 63–91. [doi:10.1037/a0026318](https://doi.org/10.1037/a0026318)
2. Wang, M., Hussein, A., Rojas, R. F., Shafi, K., Abbass, H. A. (2018). EEG-based neural correlates of trust in human-autonomy interaction. *IEEE Symposium Series on Computational Intelligence (SSCI)*, 350–357. [doi:10.1109/SSCI.2018.8628649](https://doi.org/10.1109/SSCI.2018.8628649)
3. Choo, S., Nam, C. S. (2022). Detecting human trust calibration in automation: A convolutional neural network approach. *IEEE Transactions on Human-Machine Systems*, 52(4), 774–783. [doi:10.1109/THMS.2021.3137015](https://doi.org/10.1109/THMS.2021.3137015)
4. Orozco, J. A., Artemiadis, P. (2024). Extracting human levels of trust in human–swarm interaction using EEG signals. *IEEE Transactions on Human-Machine Systems*, 54(2), 182–191. [doi:10.1109/THMS.2024.3356421](https://doi.org/10.1109/THMS.2024.3356421)
5. Md Husin, M., Aziz, S., Bhatti, T. (2022). The impact of brand familiarity, perceived trust and attitude on investors' decision-making in Islamic stock market. *Journal of Islamic Marketing*. [doi:10.1108/JIMA-04-2020-0093](https://doi.org/10.1108/JIMA-04-2020-0093)
6. Barijan, D., Ariningsih, E. P., Rahmawati, F. (2021). The influence of brand trust, brand familiarity, and brand experience on brand attachments. *Journal of Digital Marketing and Halal Industry*, 3(1). [doi:10.21580/jdmhi.2021.3.1.7440](https://doi.org/10.21580/jdmhi.2021.3.1.7440)
7. Sung, Y., Kim, J. (2010). Effects of brand personality on brand trust and brand affect. *Psychology & Marketing*, 27(7), 639–661. [doi:10.1002/mar.20349](https://doi.org/10.1002/mar.20349)
8. Roest, H., De Graaf, P. (2023). In brands we trust: The development and validation of a contemporary brand trust scale. *Proceedings of the European Marketing Academy (EMAC)*, 52nd.
