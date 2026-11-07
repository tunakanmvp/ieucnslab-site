---
title: Altyapı
url: /altyapi/
description: Deneylerimizde kullandığımız kayıt ve analiz donanımı.
---
## Bitbrain Kayıt Sistemi

Deney tasarımı ve kayıt için **Bitbrain SennsLab** kullanıyoruz.

<div class="equipment-grid">
  <figure class="equipment-card">
    <img src="https://www.bitbrain.com/images/products/versatile-eeg/what-is-included/WhatsIncluded-Versatile-Cap.png" alt="Bitbrain Versatile EEG 32" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Bitbrain Versatile EEG 32</h3>
      <p>32 kanallı, su bazlı EEG başlığı.</p>
      <a href="https://www.bitbrain.com/neurotechnology-products/water-based-eeg/versatile-eeg">Ürün ve görsel kaynağı · Bitbrain</a>
    </figcaption>
  </figure>
  <figure class="equipment-card">
    <img src="https://www.bitbrain.com/images/products/ring/what-is-included/WhatsIncluded-Ring.png" alt="Bitbrain Ring GSR/BVP" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Bitbrain Ring GSR/BVP</h3>
      <p>Deri iletkenliği, kan hacmi nabzı ve hareket kaydı için giyilebilir sensör.</p>
      <a href="https://www.bitbrain.com/neurotechnology-products/biosignals/ring">Ürün ve görsel kaynağı · Bitbrain</a>
    </figcaption>
  </figure>
</div>

## iMotions Çoklu Ölçüm Sistemi

Sistem, EEG, ekran tabanlı göz izleme ve elektrodermal aktivite ölçümünü bir araya getiriyor. Yazılım paketi **iMotions Core**, **Screen-Based Eye Tracking**, **Affectiva**, **GSR** ve **EEG** modüllerini içeriyor.

<div class="equipment-grid">
  <figure class="equipment-card">
    <img src="https://imotions.com/wp-content/uploads/2022/10/product_enobio_20-1-1024x1024.webp" alt="Neuroelectrics Enobio 20" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Neuroelectrics Enobio 20</h3>
      <p>20 kanallı kablosuz EEG sistemi.</p>
      <a href="https://imotions.com/products/hardware/enobio-20/">Ürün ve görsel kaynağı · iMotions</a>
    </figcaption>
  </figure>
  <figure class="equipment-card">
    <img src="https://imotions.com/wp-content/uploads/2022/06/Smart-Eye-AI-X-Eye-Tracker-1200x1200.webp" alt="Smart Eye AI-X 60 Hz" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Smart Eye AI-X 60 Hz</h3>
      <p>Ekran tabanlı göz izleme cihazı.</p>
      <a href="https://imotions.com/products/hardware/smart-eye-ai-x/">Ürün ve görsel kaynağı · iMotions</a>
    </figcaption>
  </figure>
  <figure class="equipment-card">
    <img src="https://imotions.com/wp-content/uploads/2025/12/Shimmer3R-GSR-white-unit-1200x896.jpg" alt="Shimmer3R GSR+ Kit" loading="lazy" decoding="async" referrerpolicy="no-referrer">
    <figcaption>
      <h3>Shimmer3R GSR+ Kit</h3>
      <p>Deri iletkenliği ölçümü için giyilebilir sensör.</p>
      <a href="https://imotions.com/products/hardware/shimmer3r-gsr-kit/">Ürün ve görsel kaynağı · iMotions</a>
    </figcaption>
  </figure>
</div>

## Yazılımlar

- **[Bitbrain SennsLab](https://www.bitbrain.com/neurotechnology-products/software/sennslab):** Bitbrain cihazlarıyla birlikte kullandığımız deney yazılımı. Deneyi tasarlamayı, uyaranları sırayla sunmayı ve EEG, GSR gibi fizyolojik sinyalleri uyaranlarla zaman olarak eşleşmiş biçimde kaydetmeyi tek bir ortamda yapıyoruz.
- **[iMotions](https://imotions.com/):** Farklı sensörlerden gelen verileri aynı zaman ekseninde toplayan çoklu ölçüm platformu. EEG, göz izleme ve deri iletkenliğini aynı anda kaydedip birlikte analiz edebiliyoruz. Paketimizde Core, Screen-Based Eye Tracking, Affectiva yüz ifadesi analizi, GSR ve EEG modülleri var.
- **[Neuroelectrics NIC2](https://www.neuroelectrics.com/nic2):** Enobio 20 için cihaz kontrolü, sinyal kalitesinin izlenmesi ve EEG kaydı. Lab Streaming Layer (LSL) desteği sayesinde kaydı kendi yazdığımız deney arayüzleriyle eşzamanlayabiliyoruz.
- **Python ve web tabanlı araçlar:** Deney ortamlarını ve görev arayüzlerini kendimiz geliştiriyoruz. Biyosinyal işleme, veri analizi ve makine öğrenmesinde ağırlıklı olarak açık kaynak Python kütüphaneleri kullanıyoruz.

### Açık Kaynak Python Kütüphaneleri

Çalışmalarımızda sıkça kullandığımız, bu alana başlamak isteyenlere de önerdiğimiz temel kütüphaneler:

- **[NumPy](https://github.com/numpy/numpy):** Sayısal hesaplamanın temeli. Sinyalleri çok boyutlu diziler olarak tutup hızlıca işlemeyi sağlar.
- **[SciPy](https://github.com/scipy/scipy):** Filtre tasarımı, Fourier dönüşümü, spektral analiz ve istatistik gibi bilimsel hesaplama araçları.
- **[pandas](https://github.com/pandas-dev/pandas):** Tablo biçimindeki verileri, örneğin deney kayıtlarını ve çıkarılan özellikleri düzenlemek ve analiz etmek için.
- **[Matplotlib](https://github.com/matplotlib/matplotlib):** Sinyalleri, spektrumları ve sonuçları görselleştirmek için temel çizim kütüphanesi.
- **[MNE-Python](https://github.com/mne-tools/mne-python):** EEG ve MEG verisi için en kapsamlı açık kaynak araç. Veri okuma, ön işleme, ICA ile artefakt temizleme, epoklama ve topografik haritalar.
- **[NeuroKit2](https://github.com/neuropsychology/NeuroKit):** EKG, deri iletkenliği (EDA/GSR) ve solunum gibi fizyolojik sinyallerin işlenmesi ve özellik çıkarımı.
- **[scikit-learn](https://github.com/scikit-learn/scikit-learn):** Sınıflandırma, regresyon, çapraz doğrulama ve model değerlendirme için klasik makine öğrenmesi kütüphanesi.
- **[XGBoost](https://github.com/dmlc/xgboost):** Gradyan artırmalı karar ağaçlarının hızlı ve yaygın kullanılan uygulaması.
- **[PyTorch](https://github.com/pytorch/pytorch):** Derin öğrenme modellerini kurmak ve eğitmek için.
- **[Lab Streaming Layer](https://github.com/sccn/labstreaminglayer):** Farklı cihazlardan ve yazılımlardan gelen veri akışlarını ve olay işaretlerini aynı zaman ekseninde toplamak için.
- **[PsychoPy](https://github.com/psychopy/psychopy):** Zamanlaması hassas deney ve uyaran sunumu arayüzleri hazırlamak için.
