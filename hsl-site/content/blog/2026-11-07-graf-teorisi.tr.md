---
title: Graf Teorisi, Beyni Bir Metro Haritası Gibi Okumak
url: /blog/graf-teorisi/
date: 2026-11-07T12:05:00+03:00
category: Sinyal İşleme Teorisi
summary: "Bir metro haritası durakların gerçek konumunu değil, nereden nereye gidilebildiğini gösterir. Graf teorisi de beyne aynı gözle bakar: kim kiminle konuşuyor?"
author: Berkay İlber Tunakan
---
Bir metro haritasına bakın. Duraklar haritada eşit aralıklarla dizilmiştir, hatlar düzgün çizgilerdir. Gerçek şehirde ise hiçbir şey bu kadar düzenli değildir. Ama harita yine de işinizi görür, çünkü sizin asıl merak ettiğiniz şey durakların tam koordinatı değil, **nereden nereye gidilebildiğidir**.

Graf teorisi tam olarak bu bakış açısıdır. Bir sistemi iki şeye indirger:

- **Düğümler:** Duraklar. EEG'de her elektrot bir düğüm olabilir.
- **Kenarlar:** Duraklar arasındaki hatlar. EEG'de iki elektrodun sinyalleri birbirine ne kadar benziyorsa, aralarında o kadar güçlü bir kenar çizeriz.

Beyin ağlarını graf teorisiyle incelemek son yirmi yılda nörobilimin en canlı alanlarından biri oldu. [Bullmore ve Sporns'un](https://doi.org/10.1038/nrn2575) derlemesi bu alanın başlangıç noktası sayılır.

## Haritadan Ne Okuyabiliriz?

Bir kez haritayı çizdikten sonra, ona birkaç basit soru sorabiliriz:

- **Derece:** Bir duraktan kaç hat geçiyor? Çok hattın kesiştiği büyük aktarma istasyonları ağın **merkezleri** (hub) olur. Beyinde de bazı bölgeler pek çok bölgeyle aynı anda iletişim kurar.
- **Yol uzunluğu:** Bir duraktan diğerine en az kaç aktarmayla gidilir? Yol ne kadar kısaysa, bilgi ağda o kadar hızlı dolaşır.
- **Kümelenme:** Arkadaşlarınızın arkadaşları da birbirini tanıyor mu? Komşuları da kendi arasında bağlantılı olan düğümler sıkı kümeler oluşturur. Beyinde bu kümeler birlikte çalışan bölge gruplarına karşılık gelir.

Beyin ağlarının ilginç bir özelliği, **küçük dünya** yapısında olmalarıdır. Hem sıkı yerel kümeler vardır, hem de birkaç uzun "ekspres hat" sayesinde ağın bir ucundan öbür ucuna birkaç adımda ulaşılır. "Herkes herkese altı el sıkışma uzaklığındadır" sözünü duymuşsunuzdur, beyin de benzer şekilde örgütlenmiştir.

## Bir Sinyali Grafa Çevirmek

Graf yalnızca elektrotlar arasında kurulmak zorunda değil. Tek bir zaman serisi de grafa dönüştürülebilir. Bunun güzel bir yolu **görünürlük grafıdır**: sinyalin her örneğini düz bir arazide yan yana dikilmiş direkler gibi düşünün. Direklerin boyu sinyalin o andaki değeri. İki direğin tepesi arasına gergin bir ip çektiğinizde arada ipe değen başka bir direk yoksa, bu iki direk birbirini "görüyor" demektir ve aralarına bir kenar çizilir.

Böylece sinyalin şekli, ağın şekline dönüşür. Sivri tepeler çok direği gördüğü için birer merkez olur, düzgün ve tekdüze bölgeler başka bir ağ dokusu bırakır. Laboratuvarımızda bu yaklaşımı epileptik EEG kayıtlarında beyin bölgeleri arasındaki [senkronizasyonu incelemek için](https://doi.org/10.1142/s0129065721500416) kullandık.

## Grafta Da Fourier Var

[Spektral özellikler yazısında](/blog/spektral-ozellikler/) bir sinyali "başka bir ölçü sistemiyle" anlatmaktan bahsetmiştim. Fourier dönüşümü zamanda düzenli aralıklarla alınmış örnekler için tasarlanmıştır. Peki elektrotlar gibi düzensiz yerleşmiş noktalardaki sinyaller için ne yapacağız?

[Graf sinyal işleme](https://doi.org/10.1109/MSP.2012.2235192) bu soruya cevap verir. Grafın yapısından türetilen bir ölçü sistemi kurarız. Bu sistemde "düşük frekans", komşu düğümlerde birbirine yakın değerler alan, ağ üzerinde yumuşak yayılan desenlerdir. "Yüksek frekans" ise komşudan komşuya sert değişen desenlerdir. Yani boyum yine 1,85, sadece bu sefer onu metro haritasının diliyle ölçüyoruz.

Bu fikir, yapay zekada [graf evrişimli sinir ağlarının](/blog/graf-cnn/) da temelini oluşturuyor.

## Kaynaklar

1. Bullmore, E., Sporns, O. (2009). Complex brain networks: graph theoretical analysis of structural and functional systems. *Nature Reviews Neuroscience*, 10(3), 186–198. [doi:10.1038/nrn2575](https://doi.org/10.1038/nrn2575)
2. Shuman, D. I., Narang, S. K., Frossard, P., Ortega, A., Vandergheynst, P. (2013). The emerging field of signal processing on graphs: Extending high-dimensional data analysis to networks and other irregular domains. *IEEE Signal Processing Magazine*, 30(3), 83–98. [doi:10.1109/MSP.2012.2235192](https://doi.org/10.1109/MSP.2012.2235192)
3. Olamat, A., Ozel, P., Akan, A. (2021). Synchronization analysis in epileptic EEG signals via state transfer networks based on visibility graph technique. *International Journal of Neural Systems*. [doi:10.1142/s0129065721500416](https://doi.org/10.1142/s0129065721500416)
