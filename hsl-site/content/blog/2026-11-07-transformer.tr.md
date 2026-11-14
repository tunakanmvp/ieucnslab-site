---
title: Transformer, Herkesin Herkese Bakabildiği Toplantı
url: /blog/transformer-nasil-calisir/
date: 2026-11-07T09:20:00+03:00
category: Yapay Zeka
summary: ChatGPT gibi dil modellerinin temelindeki Transformer, bir cümleyi kelime kelime okumak yerine bütün kelimelere aynı anda bakar ve hangisinin hangisiyle ilgili olduğuna karar verir.
author: Hesaplamalı Sinirbilim Laboratuvarı
---
Şu cümleyi okuyun: *"Kedi süt kabını devirdi çünkü o çok açtı."* "O" kimdi? Kedi tabii. Peki şu cümlede: *"Kedi süt kabını devirdi çünkü o masanın kenarındaydı."* Bu sefer "o" süt kabı. İki cümlede de aynı kelimeyi okuyorsunuz, ama ne anlama geldiğine karar vermek için cümlenin geri kalanına bakmanız gerekiyor.

İşte [2017'de tanıtılan](https://arxiv.org/abs/1706.03762) Transformer mimarisinin temel fikri bu: **dikkat**.

## Sırayla Okumak Yerine Toplantı

Bir önceki yazıda anlattığımız LSTM, bir cümleyi soldan sağa, kelime kelime okur ve yolda gördüklerini bir deftere not eder. Bu yöntem işe yarar ama yavaştır, ve cümle uzadıkça baştaki bilgiler yine de silikleşebilir.

Transformer ise cümleyi bir toplantı masası gibi düşünür. Her kelime masada oturan bir kişidir ve herkes aynı anda herkese bakabilir. "O" kelimesi masadakilere sorar: "Benim anlamımı en çok kim belirliyor?" İlk cümlede "açtı" ve "kedi" ona en yüksek sesle cevap verir. İkinci cümlede ise "masanın kenarındaydı" ve "süt kabı".

![Toplantı masasında kelimeleri temsil eden kişiler; ortadaki "o" kelimesi diğerlerine bakıyor ve anlamının "kedi" olduğu ortaya çıkıyor](transformer_toplanti_tr.jpg#genis "Solda: \"o\" masadakilere anlamını soruyor. Sağda: herkes birbirine baktıktan sonra \"o\"nun kedi olduğu netleşiyor.")

Her kelime diğerlerine ne kadar dikkat edeceğine bu şekilde karar verir. Bu işleme **öz-dikkat** (self-attention) deniyor.

## Neden Bu Kadar Başarılı?

İki büyük avantajı var. Birincisi, kelimeler arasındaki uzak ilişkileri kolayca yakalıyor. Cümlenin başındaki bir kelime, sonundaki bir kelimeyle doğrudan "konuşabiliyor". İkincisi, her şeye aynı anda baktığı için modern bilgisayarlarda çok hızlı eğitilebiliyor. Bu sayede devasa miktarda metinle eğitilen büyük dil modelleri mümkün hale geldi.

Bu arada toplantı masasında oturanların kelime olması şart değil. Bir resmin parçaları, bir müziğin notaları, ya da EEG sinyalinin art arda gelen zaman dilimleri de olabilir.

## EEG'de Transformer

EEG'de farklı elektrotlar ve farklı zaman dilimleri arasındaki ilişkiler çok önemli. Örneğin alın bölgesindeki bir değişimin, birkaç yüz milisaniye sonra kafanın arka tarafındaki bir değişimle bağlantılı olup olmadığı. Transformer'ın "herkes herkese bakabilir" yapısı, bu tür uzak ilişkileri öğrenmek için doğal bir araç. Son yıllarda EEG'yi anlamak için geliştirilen büyük "temel modellerin" çoğu bu mimariye dayanıyor.

## Kaynaklar

1. Vaswani, A. ve ark. (2017). *Attention Is All You Need.* NeurIPS. [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)
