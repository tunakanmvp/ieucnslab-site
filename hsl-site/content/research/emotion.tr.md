---
title: Duygu, tat ve beğeni
url: /arastirma/duygu-tat-begeni/
weight: 10
summary: Bir ürünün etiketinin tadı nasıl değiştirdiğini ve tat sırasında oluşan olumlu ya da olumsuz duygusal tepkiyi EEG'den nasıl ayırt edebileceğimizi inceliyoruz.
---
*Berkay İlber Tunakan, Aydın Akan, Yaren Taşkın ve Kamile Nazan Turhan'ın CoDIT 2026'da sunulan çalışması: "Analysis of Human Emotions for Different Taste Stimuli Using EEG Signals" ([doi:10.1109/CoDIT70676.2026.11630919](https://doi.org/10.1109/CoDIT70676.2026.11630919)).*

## Araştırma Problemi

Bir ürünü beğenip beğenmememiz yalnızca tadına bağlı değil. Etiketteki "doğal" ya da "yapay" gibi ifadeler, tüketicinin gıda katkı maddelerine bakışını ve satın alma kararını güçlü biçimde etkiliyor [1]. Tat aynı zamanda çok duyulu bir deneyim: beyin tat, koku, doku ve beklenti bilgisini birlikte işliyor ve bu bütünleştirmede farklı frekans bantlarındaki salınımlar farklı roller üstleniyor [2].

Anketler ve tadım puanları, kişinin ne söylediğini ölçüyor. Ancak beyan edilen beğeni, etiketin yarattığı önyargıyla şekillenebiliyor. EEG, tadım anında oluşan beyin tepkisini milisaniye düzeyinde izleyerek bu sürece daha nesnel bir pencere açıyor [3]. Literatürde tatlandırıcılar ya da katkı maddelerine verilen beyin tepkileri incelenmiş olsa da [4], aynı ürünün **doğal / yapay koruyucu** içermesi ile katılımcının bunu **bilip bilmemesi** birlikte ele alınmamıştı. Doğal ve yapay katkıların gıda algısını farklı nöral süreçlerle şekillendirdiği de öne sürülüyor [8].

Bu nedenle şu soruları soruyoruz: Koruyucunun türünü bilmek, aynı içeceğin tadını nasıl değiştiriyor? Olumlu ve olumsuz hedonik durumlar EEG'de ayırt edilebilir izler bırakıyor mu? Bu izlerden duygusal tepkiyi otomatik olarak tanıyabilir miyiz?

## Nasıl Çalışıyoruz?

Katılımcılar doğal ya da yapay koruyucu içeren iki detoks suyu örneğini, hem ne içtiklerini bilmeden (kör) hem de içerik söylenerek (bilgilendirilmiş) tadıyor. Böylece 2×2'lik bir deney düzeni oluşuyor. Örnekler görünüşte birbirinden ayırt edilemeyecek şekilde sunuluyor, böylece fark yalnızca tat ve etiket bilgisinden kaynaklanıyor.

Tadım sırasında EEG ile beyin etkinliğini kaydediyor, her denemenin ardından katılımcıların beğeni ve duygu değerlendirmelerini alıyoruz. Bu öz değerlendirmeler olumlu ve olumsuz hedonik durum etiketlerini oluşturuyor. EEG'den frekans bandı güçleri ve zaman alanı öznitelikleri [5, 6] çıkarıyor, ardından klasik makine öğrenmesi ve derin öğrenme modellerini karşılaştırıyoruz [3, 7]. Çalışma, İzmir Ekonomi Üniversitesi etik kurul onayıyla yürütüldü.

## Bulgular

- **Etiket tadı değiştiriyor.** Kör koşullarda her iki örnek de olumlu değerlendirildi. Yapay koruyucu içerdiği söylendiğinde ise aynı içecek belirgin biçimde olumsuz algılandı. Bu, etiketin yarattığı bilişsel bir önyargıya işaret ediyor.
- **Beyinde ayırt edici izler var.** Olumlu ve olumsuz hedonik durumlar arasında özellikle **frontal gama** ve **parietal beta** bantlarında anlamlı farklar bulundu.
- **Küçük veride ağaç tabanlı topluluk modelleri öne çıkıyor.** XGBoost %87,5 doğrulukla en iyi sonucu verdi; rastgele orman ve destek vektör makineleri onu izledi, derin sinir ağı ise geride kaldı.

Çalışmanın herkes için yazılmış bir özetini blogda bulabilirsiniz: [Etiket Tadı Değiştirir Mi?](/blog/etiket-tadi-degistirir-mi/)

## Kaynaklar

1. Lăzăroiu, D. ve ark. (2019). Consumers' decision-making process on food additives: Willingness to buy food with natural versus artificial additives in Romania. *Sustainability*, 11(24), 6953.
2. Keil, J., Senkowski, D. (2018). Neural oscillations orchestrate multisensory processing. *The Neuroscientist*, 24(6), 609–626. [doi:10.1177/1073858418755352](https://doi.org/10.1177/1073858418755352)
3. Koelstra, S. ve ark. (2012). DEAP: A database for emotion analysis using physiological signals. *IEEE Transactions on Affective Computing*, 3(1), 18–31. [doi:10.1109/T-AFFC.2011.15](https://doi.org/10.1109/T-AFFC.2011.15)
4. Wang, X., Wang, G., Liu, D. (2025). EEG-based analysis of neural responses to sweeteners: Effects of type and concentration. *Foods*, 14(14), 2460. [doi:10.3390/foods14142460](https://doi.org/10.3390/foods14142460)
5. Hjorth, B. (1970). EEG analysis based on time domain properties. *Electroencephalography and Clinical Neurophysiology*, 29(3), 306–310.
6. Zheng, W.-L., Lu, B.-L. (2015). Investigating critical frequency bands and channels for EEG-based emotion recognition with deep neural networks. *IEEE Transactions on Autonomous Mental Development*, 7(3), 162–175.
7. Song, T. ve ark. (2020). EEG emotion recognition using dynamical graph convolutional neural networks. *IEEE Transactions on Affective Computing*, 11(3), 532–541. [doi:10.1109/TAFFC.2018.2817622](https://doi.org/10.1109/TAFFC.2018.2817622)
8. Ciobanu, M.-M., Flocea, E.-I., Boișteanu, P.-C. (2024). The impact of artificial and natural additives in meat products on neurocognitive food perception: A narrative review. *Foods*, 13(23), 3908. [doi:10.3390/foods13233908](https://doi.org/10.3390/foods13233908)
