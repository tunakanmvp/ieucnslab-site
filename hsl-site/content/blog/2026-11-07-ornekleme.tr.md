---
title: Örnekleme, filmlerde tekerlekler neden geriye döner?
url: /blog/ornekleme/
date: 2026-11-07T12:22:00+03:00
category: Sinyal işleme teorisi
summary: "Filmlerde hızla giden bir arabanın tekerlekleri bazen geriye dönüyormuş gibi görünür. Bu küçük yanılsama, dijital sinyal işlemenin en temel kuralını anlatıyor."
author: Berkay İlber Tunakan
---
Beyin sinyali sürekli akar. Bilgisayar ise sürekli bir şeyi saklayamaz, sinyalin belli aralıklarla fotoğrafını çeker. Bu işe **örnekleme** diyoruz. Saniyede 500 fotoğraf çekiyorsak örnekleme frekansımız 500 Hz'dir.

Peki saniyede kaç fotoğraf yeter?

## Geriye dönen tekerlekler

Bir filmde hızla giden bir arabanın tekerleklerini hatırlayın. Bazen yavaşlıyor, duruyor, hatta geriye dönüyormuş gibi görünürler. Sebebi kamera: saniyede belli sayıda kare çeker. Tekerlek iki kare arasında neredeyse bir tam tur atarsa, kamera onu sanki biraz geri gitmiş gibi yakalar.

Sinyallerde de aynısı olur. Çok hızlı salınan bir dalgayı yeterince sık örneklemezseniz, kayıtta o dalga daha yavaş, sahte bir dalga gibi görünür. Buna **örtüşme** (aliasing) diyoruz. Sinsi olan şu: kayda baktığınızda hiçbir şeyin yanlış olduğunu anlayamazsınız.

## Nyquist kuralı

Çözüm basit bir kurala dayanır: sinyalde bulunan en yüksek frekansın **iki katından** daha sık örnekleme yapmalısınız. Bu sınırı [Shannon](https://doi.org/10.1109/JRPROC.1949.232969) 1949'da açıkça ortaya koydu. Kural sağlandığında, örneklerden orijinal sürekli sinyal eksiksiz geri elde edilebilir.

EEG'de 100 Hz'e kadar uzanan gama etkinliğini görmek istiyorsak en az 200 Hz ile örneklememiz gerekir. Pratikte EEG cihazları genelde 250 ile 1000 Hz arasında çalışır. Bir de güvenlik önlemi var: örneklemeden hemen önce, sınırın üstündeki frekansları kesen bir filtre kullanılır. Böylece "geriye dönen tekerlek" kayda hiç girmez.

## Kaynaklar

1. Shannon, C. E. (1949). Communication in the presence of noise. *Proceedings of the IRE*, 37(1), 10–21. [doi:10.1109/JRPROC.1949.232969](https://doi.org/10.1109/JRPROC.1949.232969)
2. Akan, A., Chaparro, L. F. (2024). Sampling theory. *Signals and Systems Using MATLAB*, Elsevier. [doi:10.1016/b978-0-44-315709-7.00017-3](https://doi.org/10.1016/b978-0-44-315709-7.00017-3)
