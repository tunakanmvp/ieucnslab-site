---
title: The Transformer, a meeting where everyone can look at everyone
slug: how-does-a-transformer-work
date: 2026-11-07T09:20:00+03:00
category: Artificial intelligence
summary: The Transformer, the architecture behind language models like ChatGPT, doesn't read a sentence word by word. It looks at all the words at once and decides which ones relate to which.
author: Computational Neuroscience Lab
---
Read this sentence: *"The cat knocked over the milk bowl because it was hungry."* What was "it"? The cat, of course. Now this one: *"The cat knocked over the milk bowl because it was on the edge of the table."* This time "it" is the bowl. You read the same word in both sentences, but to decide what it means, you have to look at the rest of the sentence.

That's the core idea behind the Transformer architecture, [introduced in 2017](https://arxiv.org/abs/1706.03762): **attention**.

## A meeting instead of reading in order

The LSTM we described in the previous post reads a sentence left to right, word by word, noting what it sees in a notebook along the way. It works, but it's slow, and as the sentence grows longer the early information can still fade.

The Transformer treats the sentence like a meeting table instead. Each word is a person at the table, and everyone can look at everyone at once. The word "it" asks the table: "Who decides my meaning the most?". In the first sentence, "hungry" and "cat" answer loudest. In the second, "edge of the table" and "milk bowl".

That's how each word decides how much attention to pay to the others. The process is called **self-attention**.

## Why does it work so well?

It has two big advantages. First, it easily captures relationships between distant words. A word at the start of the sentence can "talk" directly to one at the end. Second, because it looks at everything at once, it trains very fast on modern computers. That's what made large language models, trained on enormous amounts of text, possible.

By the way, the people at the table don't have to be words. They can be patches of an image, notes in a piece of music, or consecutive time windows of an EEG signal.

## Transformers and EEG

In EEG, relationships between different electrodes and different moments in time matter a lot. For example, whether a change over the forehead is linked to a change at the back of the head a few hundred milliseconds later. The Transformer's "everyone can look at everyone" design is a natural tool for learning such distant relationships. Most of the large "foundation models" built in recent years to understand EEG are based on this architecture.

## References

1. Vaswani, A. et al. (2017). *Attention Is All You Need.* NeurIPS. [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)
