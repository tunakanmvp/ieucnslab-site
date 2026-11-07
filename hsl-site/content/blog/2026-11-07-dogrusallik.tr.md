---
title: Doğrusallık, Sesi İki Kat Açınca Ne Olur?
url: /blog/dogrusallik/
date: 2026-11-07T12:24:00+03:00
category: Sinyal İşleme Teorisi
summary: "Bir hoparlörün sesini iki katına çıkarırsanız müzik iki kat yüksek çıkar, şarkı değişmez. Sinyal işlemenin en güçlü araçları bu basit davranışa dayanıyor."
author: Berkay İlber Tunakan
---
Sinyal işlemede "sistem", bir sinyali alıp başka bir sinyal veren her şeydir: bir filtre, bir amplifikatör, hatta kafatası. Bir sistemin **doğrusal** olması iki basit şart demektir.

**Ölçekleme:** Girişi iki katına çıkarırsanız çıkış da iki katına çıkar. Hoparlörün sesini açtığınızda şarkı aynı kalır, sadece yükselir.

**Toplama:** İki girişi birlikte verdiğinizde çıkış, ayrı ayrı verdiğinizde aldığınız çıkışların toplamıdır. Bir odada iki hoparlör ayrı şarkılar çalıyorsa, kulağınıza gelen ses ikisinin toplamıdır.

Bu iki şarta birlikte **süperpozisyon** denir. Buna bir şart daha eklenir sıklıkla: sistemin bugün de yarın da aynı davranması, yani **zamanla değişmemesi**. Bu üçünü sağlayan sistemlere kısaca LTI (doğrusal, zamanla değişmeyen) sistemler diyoruz.

## Neden Bu Kadar Önemli?

Çünkü doğrusal bir sistemi anlamak için onu her girişle tek tek denemek gerekmez. [Fourier dönüşümü](/blog/fourier-donusumu/) her sinyali basit sinüslerin toplamına ayırır. Sistemin tek tek sinüslere ne yaptığını bilirseniz, süperpozisyon sayesinde herhangi bir sinyale ne yapacağını da bilirsiniz. Filtre tasarımının neredeyse tamamı bu fikre dayanır.

EEG de bu sayede anlaşılır hale gelir. Beyindeki farklı kaynakların elektriksel etkinliği kafatası ve deriden geçerek elektrotlara ulaşırken, büyük ölçüde doğrusal biçimde toplanır. Bir elektrotta gördüğümüz sinyal, pek çok kaynağın ağırlıklı toplamıdır. Göz kırpma gibi artefaktları sinyalden ayırmakta kullandığımız yöntemler de bu varsayıma dayanır.

Ama dünya her zaman bu kadar düzgün değil. Bunu da [doğrusal olmama yazısında](/blog/dogrusal-olmama/) anlatıyoruz.

## Kaynaklar

1. Akan, A., Chaparro, L. F. (2024). Continuous-time systems. *Signals and Systems Using MATLAB*, Elsevier. [doi:10.1016/b978-0-44-315709-7.00012-4](https://doi.org/10.1016/b978-0-44-315709-7.00012-4)
2. Akan, A., Chaparro, L. F. (2024). Discrete-time signals and systems. *Signals and Systems Using MATLAB*, Elsevier. [doi:10.1016/b978-0-44-315709-7.00018-5](https://doi.org/10.1016/b978-0-44-315709-7.00018-5)
