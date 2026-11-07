---
title: Çok kipli biyosinyaller
url: /arastirma/cok-kipli-biyosinyaller/
weight: 40
summary: EEG ve deri iletkenliğini birlikte kullanarak tüketicinin bir ürün maskotuna verdiği duygusal tepkiyi ölçüyor, her sinyalin duygunun hangi boyutunu taşıdığını inceliyoruz.
---
*Berkay İlber Tunakan, Aydın Akan, Nursun Üstünkarlı ve Rıza Sadıkzade'nin TIPTEKNO'26'da poster olarak sunulan çalışması: "Investigation of the Effect of Product Mascot Gender on Consumer Emotions Using EEG Signals". Bildirinin IEEE Xplore'da yayımlanma süreci sürüyor.*

## Araştırma Problemi

Markalar ürünlerini insanlaştırılmış maskotlarla tanıtıyor. Bu maskotların görünüşü, algılanan cinsiyetleri de dahil, markanın nasıl değerlendirildiğini ve satın alma niyetini etkileyebiliyor [1, 2]. Tüketici sinirbiliminde EEG, ürün tercihlerinin beyindeki izlerini incelemek için de kullanılıyor [9]. Ancak maskot etkisi çoğunlukla anket ve derecelendirme ölçekleriyle ölçülüyor. Maskotlara verilen beyin tepkilerini inceleyen çalışmalar ise betimsel analizde kalmış, duygusal tepkiyi otomatik olarak sınıflandırmaya yönelmemiş [3].

Tek bir sinyal duygunun tamamını yakalamıyor. EEG duygusal ve bilişsel süreçlere eşlik eden beyin etkinliğini, deri iletkenliği (GSR) ise otonom sinir sisteminin uyarılmasını yansıtıyor [4, 5]. Bu yüzden şunu soruyoruz: Bir maskota verilen tepkide **uyarılma** ve **valans** (hoşnutluk) boyutlarını hangi sinyal daha iyi taşıyor ve iki sinyali birleştirmek tahmini iyileştiriyor mu?

## Nasıl Çalışıyoruz?

Katılımcılara enerji içeceği, tuvalet kâğıdı ve dondurma için tasarladığımız, her ürün için biri eril biri dişil iki maskot gösteriyoruz. Görseller boyut, çözünürlük ve arka plan bakımından eşitlendi, böylece fark yalnızca maskotun kendisinden kaynaklanıyor. Her ürün çiftinin ardından katılımcılar duygusal değerlendirmelerini dijital bir anketle bildiriyor.

Gösterim boyunca EEG'yi ve parmaktan alınan deri iletkenliğini aynı yazılım ortamında eşzamanlı kaydediyoruz. Seans başındaki dinlenim kayıtlarını kişiye özgü normalizasyon için kullanıyoruz. EEG'den zaman alanı (Hjorth parametreleri) [6], frekans bandı gücü [4] ve duygusal işlemleme ile ilişkili frontal alfa asimetrisi [7] özniteliklerini çıkarıyoruz.

Sınıflandırmada EEG, deri iletkenliği ve el ile çıkarılmış EEG özniteliklerini ayrı kollarda işleyip sonra birleştiren hafif bir çok kipli sinir ağı geliştirdik. Bu modeli tek sinyalli modeller ile Inception ve Transformer tabanlı mimarilerle karşılaştırıyoruz [8]. Sınıflar dengesiz olduğundan modelleri değerlendirmede doğruluk yerine öncelikle AUC'yi esas alıyoruz.

## Bulgular

- **Uyarılmayı beden, hoşnutluğu beyin taşıyor.** Uyarılma tahmininde deri iletkenliği tek başına çok kipli modele yakın sonuç verdi. Valans tahmini ise EEG'ye, özellikle frontal asimetriye dayandı.
- **Frontal alfa valansı ayırıyor.** Hoşnut olunan anlarda alfa gücü bastırılmış ve daha kararlıyken, hoşnut olunmayan anlarda daha yüksek ve değişkendi.
- **Birleştirmek işe yarıyor.** EEG ve deri iletkenliğini birlikte kullanan hafif model hem uyarılma (AUC 0,776) hem valans (AUC 0,746) için en iyi sonucu verdi. Yüksek doğruluk ama düşük AUC veren Transformer sonuçları, küçük ve dengesiz veride AUC'nin neden temel ölçüt olması gerektiğini gösterdi.

Fizyolojik sinyallerin birlikte kullanıldığı diğer çalışmalarımız için [Müzik ve beyin](/arastirma/muzik-ve-beyin/) sayfasına, fNIRS tarafındaki çalışmalarımız için [Gömülü yapay zekâlı fNIRS](/arastirma/gomulu-yapay-zekali-fnirs/) sayfasına bakabilirsiniz.

## Kaynaklar

1. Yang, L. W., Aggarwal, P. (2025). When anthropomorphized brands push gender boundaries. *Journal of Consumer Psychology*, 35(1), 129–138.
2. Cooke, A. ve ark. (2022). Branding beyond the gender binary. *Psychology & Marketing*, 39, 1621–1632.
3. Berezka, S. ve ark. (2019). Understanding the role of brand mascots using consumer neuroscience research methods. *Proceedings of the European Marketing Academy (EMAC)*, 48.
4. Koelstra, S. ve ark. (2012). DEAP: A database for emotion analysis using physiological signals. *IEEE Transactions on Affective Computing*, 3(1), 18–31. [doi:10.1109/T-AFFC.2011.15](https://doi.org/10.1109/T-AFFC.2011.15)
5. Miranda-Correa, J. A. ve ark. (2021). AMIGOS: A dataset for affect, personality and mood research on individuals and groups. *IEEE Transactions on Affective Computing*, 12(2), 479–493. [doi:10.1109/TAFFC.2018.2884461](https://doi.org/10.1109/TAFFC.2018.2884461)
6. Hjorth, B. (1970). EEG analysis based on time domain properties. *Electroencephalography and Clinical Neurophysiology*, 29(3), 306–310. [doi:10.1016/0013-4694(70)90143-4](https://doi.org/10.1016/0013-4694(70)90143-4)
7. Petrantonakis, P. C., Hadjileontiadis, L. J. (2011). A novel emotion elicitation index using frontal brain asymmetry for enhanced EEG-based emotion recognition. *IEEE Transactions on Information Technology in Biomedicine*, 15(5), 737–746. [doi:10.1109/TITB.2011.2157933](https://doi.org/10.1109/TITB.2011.2157933)
8. Vafaei, E., Hosseini, M. (2025). Transformers in EEG analysis: A review of architectures and applications in motor imagery, seizure, and emotion classification. *Sensors*, 25(5), 1293. [doi:10.3390/s25051293](https://doi.org/10.3390/s25051293)
9. Khushaba, R. N. ve ark. (2013). Consumer neuroscience: Assessing the brain response to marketing stimuli using electroencephalogram (EEG) and eye tracking. *Expert Systems with Applications*, 40(9), 3803–3812.
