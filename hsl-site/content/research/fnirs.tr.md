---
title: Gömülü yapay zekâlı fNIRS
url: /arastirma/gomulu-yapay-zekali-fnirs/
weight: 35
summary: Kayıt sırasında kendi sinyal kalitesini denetleyen, cihaz üzerinde yapay zekâ çalıştıran, tüm başı kaplayan giyilebilir bir fNIRS sistemi geliştiriyoruz.
---
*Uğur Emin Baynal'ın yüksek lisans tez çalışması. Prof. Dr. Aydın Akan yürütücülüğünde TÜSEB'e sunulan ve [ön kabul alan projemizin](/haberler/tuseb-b-on-kabul/) bir parçası.*

## Araştırma Problemi

fNIRS, beyin korteksindeki oksijenli ve oksijensiz hemoglobin değişimlerini ışıkla, girişimsiz ve taşınabilir biçimde ölçüyor. Yöntemin nasıl çalıştığını [fNIRS yazımızda](/blog/fnirs-nedir/) anlatmıştık. Ancak donanımdan yazılıma kadar süren sınırlamalar, fNIRS araştırmalarında yanlılığı artırabiliyor [1]:

- **Hareket artefaktları** ölçümü en çok bozan etken. Alandaki derlemeler, donanım ile algoritma arasındaki dengenin hâlâ netleşmediğini gösteriyor [2].
- **Beyin dışı katkı.** Işık önce kafa derisinden ve kafatasından geçtiği için, kan basıncı gibi sistemik etkenler beyin etkinliğine benzeyen yanıltıcı sinyaller üretebiliyor [3].
- **Optod–saçlı deri teması.** Koyu, kalın ya da kıvırcık saçta temas kurmak zorlaşıyor. Bu yalnızca teknik bir sorun değil; bu kişilerin araştırmalardan dışlanmasına yol açan bir kapsayıcılık sorunu [1].

Bugün sinyal kalitesi çoğunlukla kayıt bittikten sonra, analiz aşamasında değerlendiriliyor. Bozulan bir kanal ancak o zaman fark ediliyor ve veri çoktan kaybolmuş oluyor. Kötü kanalları otomatik olarak saptayan makine öğrenmesi yöntemleri yeni yeni gelişiyor [4, 5], ama bunlar masaüstünde çalışıyor. Bir mikrodenetleyici üzerinde, kayıt sırasında çalışan ve bağımsız olarak değerlendirilmiş bir fNIRS sistemi bulunmuyor.

## Ne Yapıyoruz?

Tüm başı kaplayan, 32 kanallı, giyilebilir bir fNIRS başlığı geliştiriyoruz. Kanal yerleşimi bir kafa modeli üzerinde ışığın dokudaki yolunun benzetimiyle belirleniyor. Her uzun kanal kümesine, yalnızca kafa derisini ölçen kısa mesafeli kanallar ekleniyor [6]; böylece beyin dışı katkı sinyalden ayıklanabiliyor.

Cihazın asıl farkı, kalite denetimini kaydın içine taşıması. Kanal kalitesini ve hareket artefaktlarını tanıyan küçük bir yapay zekâ modeli, cihazın üzerindeki gömülü işlemcide çalışıyor. Kalitesi düşen kanal saniyeler içinde saptanıyor ve operatöre bildiriliyor. Böylece bugün ancak analizde fark edilen bir sorun, katılımcı daha başlığı takarken düzeltilebiliyor.

Bunu yaparken bilimsel bir soruyu da yanıtlamayı amaçlıyoruz. Güçlü bir bilgisayarda eğitilen büyük bir "öğretmen" model ile ondan damıtılıp küçültülerek mikrodenetleyiciye sığdırılan "öğrenci" model arasındaki başarım farkı fNIRS için henüz ölçülmedi. Bu farkı, küçültmenin her adımının katkısını ayrı ayrı göstererek raporlamayı hedefliyoruz.

## Araştırma Soruları

1. Bilgisayarda eğitilmiş bir kalite modelini kısıtlı kaynaklı bir mikrodenetleyiciye taşımak hangi başarım bedelini doğuruyor ve bu bedel hangi küçültme adımından kaynaklanıyor?
2. EEG kayıtlarında rutin olarak ölçülen elektrot empedansı, aynı konumdaki fNIRS optodlarının deriyle ne kadar iyi temas ettiğini öngörebiliyor mu?
3. Kayıt sırasında çalışan bir kalite geri bildirimi, kurulumdan sonra kullanılabilir kanal sayısını anlamlı biçimde artırıyor mu?

Proje kapsamında toplanacak verinin, farklı saç tipi ve deri tonundaki katılımcıları kapsayacak biçimde açık bir veri kümesi olarak paylaşılması da planlanıyor.

## Kaynaklar

1. Doherty, E. J. ve ark. (2023). Interdisciplinary views of fNIRS: Current advancements, equity challenges, and an agenda for future needs of a diverse fNIRS research community. *Frontiers in Integrative Neuroscience*, 17, 1059679. [doi:10.3389/fnint.2023.1059679](https://doi.org/10.3389/fnint.2023.1059679)
2. Huang, R., Hong, K.-S., Yang, D., Huang, G. (2022). Motion artifacts removal and evaluation techniques for functional near-infrared spectroscopy signals: A review. *Frontiers in Neuroscience*, 16, 878750. [doi:10.3389/fnins.2022.878750](https://doi.org/10.3389/fnins.2022.878750)
3. Caldwell, M., Scholkmann, F., Wolf, U., Wolf, M., Elwell, C., Tachtsidis, I. (2016). Modelling confounding effects from extracerebral contamination and systemic factors on functional near-infrared spectroscopy. *NeuroImage*, 143, 91–105. [doi:10.1016/j.neuroimage.2016.08.058](https://doi.org/10.1016/j.neuroimage.2016.08.058)
4. Gerloff, C., Yücel, M. A., Mehlem, L., Konrad, K., Reindl, V. (2024). NiReject: toward automated bad channel detection in functional near-infrared spectroscopy. *Neurophotonics*, 11(4), 045008. [doi:10.1117/1.NPh.11.4.045008](https://doi.org/10.1117/1.NPh.11.4.045008)
5. Guglielmini, S., Chen, Z., Wolf, M. (2025). DL-QC-fNIRS: a deep learning tool for automated quality control in functional near-infrared spectroscopy signals. *Neurophotonics*, 13(1), 015001. [doi:10.1117/1.NPh.13.1.015001](https://doi.org/10.1117/1.NPh.13.1.015001)
6. Brigadoi, S., Cooper, R. J. (2015). How short is short? Optimum source–detector distance for short-separation channels in functional near-infrared spectroscopy. *Neurophotonics*, 2(2), 025005. [doi:10.1117/1.NPh.2.2.025005](https://doi.org/10.1117/1.NPh.2.2.025005)
