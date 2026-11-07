---
title: Gömülü yapay zekâlı fNIRS
url: /arastirma/gomulu-yapay-zekali-fnirs/
weight: 35
summary: Cihaz üzerinde yapay zekâ çalıştıran, tüm başı kaplayan giyilebilir bir fNIRS sistemi geliştiriyoruz.
---
*Uğur Emin Baynal'ın yüksek lisans tez çalışması. Prof. Dr. Aydın Akan yürütücülüğünde TÜSEB'e sunulan ve [ön kabul alan projemizin](/haberler/tuseb-b-on-kabul/) bir parçası.*

## Araştırma Problemi

fNIRS, beyin korteksindeki oksijenli ve oksijensiz hemoglobin değişimlerini ışıkla, girişimsiz ve taşınabilir biçimde ölçüyor. Yöntemin nasıl çalıştığını [fNIRS yazımızda](/blog/fnirs-nedir/) anlatmıştık. Ancak donanımdan yazılıma kadar süren sınırlamalar, fNIRS araştırmalarında yanlılığı artırabiliyor [1]:

- **Hareket artefaktları** ölçümü en çok bozan etken. Alandaki derlemeler, donanım ile algoritma arasındaki dengenin hâlâ netleşmediğini gösteriyor [2].
- **Beyin dışı katkı.** Işık önce kafa derisinden ve kafatasından geçtiği için, kan basıncı gibi sistemik etkenler beyin etkinliğine benzeyen yanıltıcı sinyaller üretebiliyor [3].
- **Optod–saçlı deri teması.** Koyu, kalın ya da kıvırcık saçta temas kurmak zorlaşıyor. Bu yalnızca teknik bir sorun değil; bu kişilerin araştırmalardan dışlanmasına yol açan bir kapsayıcılık sorunu [1].

Bugün sinyal kalitesi çoğunlukla kayıt bittikten sonra, analiz aşamasında değerlendiriliyor. Bozulan bir kanal ancak o zaman fark ediliyor ve veri çoktan kaybolmuş oluyor. Kötü kanalları otomatik olarak saptayan makine öğrenmesi yöntemleri yeni yeni gelişiyor [4, 5], ancak bunlar kayıttan sonra, masaüstünde çalışıyor.

## Ne Yapıyoruz?

Tüm başı kaplayan, giyilebilir bir fNIRS sistemi geliştiriyoruz. Amacımız, sinyal kalitesinin denetimini kayıttan sonraki bir adım olmaktan çıkarıp cihazın kayıt sırasındaki davranışının bir parçası hâline getirmek. Bunun için cihazın üzerinde çalışan gömülü yapay zekâ yöntemleri üzerinde çalışıyoruz. Böylece bugün ancak analizde fark edilen sorunların kayıt sırasında yakalanabilmesini ve farklı saç ve deri özelliklerine sahip kişilerden de güvenilir ölçüm alınabilmesini hedefliyoruz.

## Kaynaklar

1. Doherty, E. J. ve ark. (2023). Interdisciplinary views of fNIRS: Current advancements, equity challenges, and an agenda for future needs of a diverse fNIRS research community. *Frontiers in Integrative Neuroscience*, 17, 1059679. [doi:10.3389/fnint.2023.1059679](https://doi.org/10.3389/fnint.2023.1059679)
2. Huang, R., Hong, K.-S., Yang, D., Huang, G. (2022). Motion artifacts removal and evaluation techniques for functional near-infrared spectroscopy signals: A review. *Frontiers in Neuroscience*, 16, 878750. [doi:10.3389/fnins.2022.878750](https://doi.org/10.3389/fnins.2022.878750)
3. Caldwell, M., Scholkmann, F., Wolf, U., Wolf, M., Elwell, C., Tachtsidis, I. (2016). Modelling confounding effects from extracerebral contamination and systemic factors on functional near-infrared spectroscopy. *NeuroImage*, 143, 91–105. [doi:10.1016/j.neuroimage.2016.08.058](https://doi.org/10.1016/j.neuroimage.2016.08.058)
4. Gerloff, C., Yücel, M. A., Mehlem, L., Konrad, K., Reindl, V. (2024). NiReject: toward automated bad channel detection in functional near-infrared spectroscopy. *Neurophotonics*, 11(4), 045008. [doi:10.1117/1.NPh.11.4.045008](https://doi.org/10.1117/1.NPh.11.4.045008)
5. Guglielmini, S., Chen, Z., Wolf, M. (2025). DL-QC-fNIRS: a deep learning tool for automated quality control in functional near-infrared spectroscopy signals. *Neurophotonics*, 13(1), 015001. [doi:10.1117/1.NPh.13.1.015001](https://doi.org/10.1117/1.NPh.13.1.015001)
