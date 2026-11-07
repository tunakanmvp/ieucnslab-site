---
title: Random Forest, Tek Bir Uzman Yerine Bir Konsey
url: /blog/random-forest-nedir/
date: 2026-11-07T11:10:00+03:00
category: Yapay Zeka
summary: "Tek bir kişiye sorduğunuzda yanılabilir. Yüz kişiye sorup çoğunluğa bakarsanız işler değişir. Random Forest bu fikri karar ağaçlarıyla uyguluyor."
author: Hesaplamalı Sinirbilim Laboratuvarı
---
Çocukken oynadığımız "20 soru" oyununu hatırlayın. Biri aklından bir hayvan tutar, siz de evet/hayır soruları sorarsınız: "Uçar mı?" Hayır. "Dört ayaklı mı?" Evet. "Evcil mi?" Evet. Birkaç soru sonra cevap belli olur: kedi.

**Karar ağacı** tam olarak budur. Veriye sırayla sorular sorar ve her cevaba göre bir dala ayrılır. EEG'de sorular şöyle olabilir: "Alın bölgesindeki alfa gücü şu değerden yüksek mi?" "Sağ ve sol yarıküre arasındaki fark büyük mü?" Sonunda bir yaprağa varılır: "Bu katılımcı uyaranı beğendi."

## Tek Ağacın Sorunu: Ezberlemek

Karar ağaçlarının anlaşılması kolay, ama bir zayıflıkları var. Çok derinleşmesine izin verirseniz, eğitim verisindeki her küçük ayrıntıyı, hatta gürültüyü bile ezberlerler. Sınava soruları ezberleyerek giren bir öğrenci gibi: aynı sorular gelirse tam puan, biraz farklı sorular gelirse çuvallar.

## Çözüm: Bir Orman

[Random Forest](https://doi.org/10.1023/A:1010933404324) bu soruna basit ama güçlü bir çözüm getiriyor: tek bir ağaç yerine yüzlerce ağaç eğitmek. Ama hepsini aynı şekilde değil:

- Her ağaç, verinin **rastgele seçilmiş farklı bir kısmını** görüyor.
- Her ağaç, her soruda **özelliklerin yalnızca rastgele bir alt kümesine** bakabiliyor.

Böylece her ağaç biraz farklı bir bakış açısı geliştiriyor. Bazıları yanılıyor, ama hepsi aynı şekilde yanılmıyor. Sonunda her ağaç bir oy veriyor ve çoğunluğun kararı geçerli oluyor. Bir hastanın durumunu tek bir doktora değil, bir konseye danışmak gibi.

## Neden Seviyoruz?

Random Forest az ayar gerektiriyor, küçük veri setlerinde bile istikrarlı çalışıyor ve hangi özelliğin karara en çok katkı verdiğini söyleyebiliyor. EEG'den çıkarılan onlarca özellikle çalışırken "hangi beyin bölgesi, hangi ritim önemliydi?" sorusuna cevap vermek bizim için çok değerli. Birden fazla modeli birleştiren bu tür topluluk yöntemleri laboratuvarımızın erken çalışmalarından [DEHB sınıflandırmasında](https://doi.org/10.1109/tiptekno.2019.8895197) da kullanıldı.

Bir sonraki yazıda, ağaçların aynı anda değil sırayla çalıştığı, her birinin bir öncekinin hatasını düzelttiği XGBoost'u anlatacağız.

## Kaynaklar

1. Breiman, L. (2001). *Random Forests.* Machine Learning, 45(1), 5–32. [DOI: 10.1023/A:1010933404324](https://doi.org/10.1023/A:1010933404324)
2. *Classification of ADHD Using Ensemble Algorithms with Deep Learning and Hand Crafted Features* (2019). IEEE TIPTEKNO. [DOI: 10.1109/tiptekno.2019.8895197](https://doi.org/10.1109/tiptekno.2019.8895197)
