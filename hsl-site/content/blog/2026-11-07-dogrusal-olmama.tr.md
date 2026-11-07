---
title: Doğrusal Olmama, Trafiğe On Araba Daha Eklemek
url: /blog/dogrusal-olmama/
date: 2026-11-07T12:26:00+03:00
category: Sinyal işleme teorisi
summary: "Boş bir yola on araba eklemek hiçbir şeyi değiştirmez. Sıkışık bir yola on araba eklemek ise trafiği kilitleyebilir. Beyin de çoğu zaman böyle davranır."
author: Berkay İlber Tunakan
---
[Doğrusallık yazısında](/blog/dogrusallik/) girişi iki katına çıkarınca çıkışın da iki katına çıktığı sistemlerden bahsetmiştik. Gerçek dünyadaki pek çok sistem ise böyle davranmaz.

Trafiği düşünün. Gece boş bir yola on araba eklerseniz hiçbir şey değişmez. Akşam saatinde zaten dolu olan aynı yola on araba eklerseniz trafik kilitlenebilir. Aynı miktarda değişiklik, sistemin o anki durumuna göre bambaşka sonuçlar doğurur. İşte bu **doğrusal olmama** demektir.

Bir hoparlörün sesini sonuna kadar açtığınızda da benzer bir şey olur: ses artık sadece yükselmez, cızırdamaya başlar. Doğrusal olmayan sistemler girişte hiç olmayan yeni frekanslar üretebilir.

## Beyin neden doğrusal değil?

En küçük yapı taşından başlayalım. Bir nöron, gelen sinyaller belli bir eşiği aşana kadar sessiz kalır. Eşik aşıldığında ise ya hep ya hiç mantığıyla tam bir ateşleme yapar. Yarım ateşleme yoktur. Bu, doğrusal davranışın tam tersidir. Milyarlarca böyle birimin birbirine bağlandığı bir ağ, çok zengin ve bazen öngörülmesi zor davranışlar sergiler.

Bu yüzden EEG'yi yalnızca doğrusal araçlarla, örneğin sadece spektrumla incelemek resmin bir kısmını kaçırabilir. [Stam'ın derlemesinde](https://doi.org/10.1016/j.clinph.2005.06.011) özetlendiği gibi, doğrusal olmayan analiz yöntemleri sinyalin karmaşıklığını, düzenliliğini ve öngörülebilirliğini ölçer. Entropi ölçüleri ve [fraktal boyut](/blog/fraktal-ozellikler/) bunların en bilinenleridir.

Laboratuvarımızda da bu iki bakışı karşılaştırdık: EEG'de koku uyaranını tespit etmek için [doğrusal ve doğrusal olmayan özellikleri](https://doi.org/10.1109/tiptekno56568.2022.9960190) birlikte değerlendirdik. Çoğu zaman en iyi sonuç, ikisini bir arada kullanınca geliyor.

## Kaynaklar

1. Stam, C. J. (2005). Nonlinear dynamical analysis of EEG and MEG: review of an emerging field. *Clinical Neurophysiology*, 116(10), 2266–2301. [doi:10.1016/j.clinph.2005.06.011](https://doi.org/10.1016/j.clinph.2005.06.011)
2. Akbugday, B., Akan, A., Pehlivan, S., Sadighzadeh, R. (2022). An assessment of linear and nonlinear features for detecting olfactory stimulus in EEG. *Medical Technologies Congress (TIPTEKNO)*. [doi:10.1109/tiptekno56568.2022.9960190](https://doi.org/10.1109/tiptekno56568.2022.9960190)
