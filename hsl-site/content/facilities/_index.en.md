---
title: Facilities
description: The recording and analysis equipment we use in our experiments.
---
## Bitbrain Recording System

We use **Bitbrain SennsLab** to design experiments and record data.

<div class="equipment-grid">
  <figure class="equipment-card">
    <img src="https://www.bitbrain.com/images/products/versatile-eeg/what-is-included/WhatsIncluded-Versatile-Cap.png" alt="Bitbrain Versatile EEG 32" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Bitbrain Versatile EEG 32</h3>
      <p>32-channel water-based EEG cap.</p>
      <a href="https://www.bitbrain.com/neurotechnology-products/water-based-eeg/versatile-eeg">Product and image source · Bitbrain</a>
    </figcaption>
  </figure>
  <figure class="equipment-card">
    <img src="https://www.bitbrain.com/images/products/ring/what-is-included/WhatsIncluded-Ring.png" alt="Bitbrain Ring GSR/BVP" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Bitbrain Ring GSR/BVP</h3>
      <p>Wearable sensor for skin conductance, blood volume pulse and motion.</p>
      <a href="https://www.bitbrain.com/neurotechnology-products/biosignals/ring">Product and image source · Bitbrain</a>
    </figcaption>
  </figure>
</div>

## iMotions Multimodal Recording System

This system combines EEG, screen-based eye tracking and electrodermal activity recording. The software package includes **iMotions Core**, **Screen-Based Eye Tracking**, **Affectiva**, **GSR** and **EEG** modules.

<div class="equipment-grid">
  <figure class="equipment-card">
    <img src="https://imotions.com/wp-content/uploads/2022/10/product_enobio_20-1-1024x1024.webp" alt="Neuroelectrics Enobio 20" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Neuroelectrics Enobio 20</h3>
      <p>20-channel wireless EEG system.</p>
      <a href="https://imotions.com/products/hardware/enobio-20/">Product and image source · iMotions</a>
    </figcaption>
  </figure>
  <figure class="equipment-card">
    <img src="https://imotions.com/wp-content/uploads/2022/06/Smart-Eye-AI-X-Eye-Tracker-1200x1200.webp" alt="Smart Eye AI-X 60 Hz" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Smart Eye AI-X 60 Hz</h3>
      <p>Screen-based eye tracker.</p>
      <a href="https://imotions.com/products/hardware/smart-eye-ai-x/">Product and image source · iMotions</a>
    </figcaption>
  </figure>
  <figure class="equipment-card">
    <img src="https://imotions.com/wp-content/uploads/2025/12/Shimmer3R-GSR-white-unit-1200x896.jpg" alt="Shimmer3R GSR+ Kit" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Shimmer3R GSR+ Kit</h3>
      <p>Wearable sensor for skin conductance measurements.</p>
      <a href="https://imotions.com/products/hardware/shimmer3r-gsr-kit/">Product and image source · iMotions</a>
    </figcaption>
  </figure>
</div>

## Software

- **[Bitbrain SennsLab](https://www.bitbrain.com/neurotechnology-products/software/sennslab):** The experiment software we use with our Bitbrain devices. In one environment we design the experiment, present the stimuli in sequence, and record physiological signals such as EEG and GSR time-locked to the stimuli.
- **[iMotions](https://imotions.com/):** A multimodal platform that collects data from different sensors on a single timeline. We can record EEG, eye tracking and skin conductance at the same time and analyse them together. Our package includes the Core, Screen-Based Eye Tracking, Affectiva facial expression analysis, GSR and EEG modules.
- **[Neuroelectrics NIC2](https://www.neuroelectrics.com/nic2):** Device control, signal quality monitoring and EEG recording for the Enobio 20. Its Lab Streaming Layer (LSL) support lets us synchronise recordings with experiment interfaces we write ourselves.
- **Python and web-based tools:** We build our own experimental environments and task interfaces. For biosignal processing, data analysis and machine learning we rely mainly on open-source Python libraries.

### Open-Source Python Libraries

The core libraries we use often in our work, and recommend to anyone starting out in the field:

- **[NumPy](https://github.com/numpy/numpy):** The foundation of numerical computing. Holds signals as multidimensional arrays and processes them fast.
- **[SciPy](https://github.com/scipy/scipy):** Scientific computing tools such as filter design, the Fourier transform, spectral analysis and statistics.
- **[pandas](https://github.com/pandas-dev/pandas):** For organising and analysing tabular data, such as experiment logs and extracted features.
- **[Matplotlib](https://github.com/matplotlib/matplotlib):** The basic plotting library for visualising signals, spectra and results.
- **[MNE-Python](https://github.com/mne-tools/mne-python):** The most comprehensive open-source toolkit for EEG and MEG data: reading data, preprocessing, artefact removal with ICA, epoching and topographic maps.
- **[NeuroKit2](https://github.com/neuropsychology/NeuroKit):** Processing and feature extraction for physiological signals such as ECG, skin conductance (EDA/GSR) and respiration.
- **[scikit-learn](https://github.com/scikit-learn/scikit-learn):** The classic machine learning library for classification, regression, cross-validation and model evaluation.
- **[XGBoost](https://github.com/dmlc/xgboost):** A fast and widely used implementation of gradient-boosted decision trees.
- **[PyTorch](https://github.com/pytorch/pytorch):** For building and training deep learning models.
- **[Lab Streaming Layer](https://github.com/sccn/labstreaminglayer):** For collecting data streams and event markers from different devices and software on a single timeline.
- **[PsychoPy](https://github.com/psychopy/psychopy):** For building experiment and stimulus presentation interfaces with precise timing.
