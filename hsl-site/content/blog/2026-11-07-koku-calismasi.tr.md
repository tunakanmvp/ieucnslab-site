---
title: Bir Kokunun Beyindeki Renkli Haritası
url: /blog/kokunun-beyindeki-haritasi/
date: 2026-11-07T17:20:00+03:00
category: Araştırmalarımız
summary: Koku aldığımız anda beynimizde ne oluyor? 57 katılımcının EEG kayıtlarını renkli ısı haritalarına çevirip bir yapay zekâya gösterdik. Sonuç, kokulu ve kokusuz anları neredeyse hatasız ayırt eden bir model oldu.
author: Hesaplamalı Sinirbilim Laboratuvarı
---
*Dr. Faezeh Yeganli, Prof. Dr. Aydın Akan ve Dr. Rıza Sadıkzade'nin TIPTEKNO 2025'te sunduğu çalışma: "Olfactory Emotion Recognition Using EEG Spectral Topographic Heatmaps and CNNs" ([doi:10.1109/TIPTEKNO68206.2025.11270101](https://doi.org/10.1109/tiptekno68206.2025.11270101)).*

Bir mağazaya girdiğinizde sizi karşılayan hafif vanilya kokusu tesadüf değil. Havalimanı terminallerinden kozmetik reyonlarına kadar pek çok yerde kokular, bizim ne hissettiğimizi ve ne yapacağımızı etkilemek için bilerek seçiliyor. Ama bir kokunun bize gerçekten ne hissettirdiğini nasıl ölçeceğiz? "Beğendiniz mi?" diye sormak işin yalnızca bir kısmını anlatıyor.

[Koku yazımızda](/blog/koku-beyne-giden-kestirme-yol/) kokunun beyne neden kestirme bir yoldan ulaştığını anlatmıştık. Bu yazıda o yolun beyinde bıraktığı izi nasıl "fotoğrafladığımızı" anlatıyoruz.

## Beyni Bir Hava Durumu Haritası Gibi Okumak

EEG, kafa derisine yerleştirilen elektrotlardan beyin etkinliğini milisaniye düzeyinde kaydediyor. Ama ham EEG kaydı, yan yana dizilmiş onlarca titrek çizgiden ibaret. İnsan gözüyle bakıldığında içinden anlam çıkarmak zor.

Bu çalışmada farklı bir yol izledik: EEG'yi bir **hava durumu haritasına** çevirdik. Beyin sinyalleri tek bir ritimden değil, farklı hızlarda salınan dalgalardan oluşuyor. Yavaş delta ve teta dalgaları, daha hızlı alfa, beta ve gama dalgaları... Her bir ritmin kafanın hangi bölgesinde ne kadar güçlü olduğunu hesaplayıp, kafanın üstünden bakılmış bir haritanın üzerine renklerle yerleştirdik. Kırmızı bölgeler o ritmin güçlü, mavi bölgeler zayıf olduğu yerleri gösteriyor.

![Kokulu ve kokusuz koşullarda teta bandına ait EEG ısı haritaları](isi-haritasi.png "Teta bandında kokulu (solda) ve kokusuz (sağda) koşullara ait örnek ısı haritaları. Sıcak renkler daha yüksek etkinliği gösteriyor.")

Böylece her bir saniyelik EEG kaydı, tek bir bakışta okunabilen bir resme dönüştü. Ve resimlere bakmakta çok iyi olan bir yapay zekâ türü var.

## Resimlere Bakan Yapay Zekâ

Evrişimli sinir ağları (CNN), fotoğraflardaki yüzleri ya da nesneleri tanımak için geliştirilmiş modeller. Nasıl çalıştıklarını [CNN yazımızda](/blog/cnn-nasil-calisir/) anlatmıştık. Biz de bu ağa, kokulu ve kokusuz anlardan elde ettiğimiz yüzlerce ısı haritasını gösterip ikisini ayırt etmeyi öğrettik.

Çalışmaya 57 katılımcı katıldı. Katılımcılar hem kokulu hem kokusuz bir koşulda EEG kaydına alındı ve her koşulun ardından ne kadar **uyarıldıklarını** (sakinden heyecanlıya) ve ne kadar **hoşnut olduklarını** puanladılar. Model bu iki boyutu ayrı ayrı sınıflandırmayı öğrendi.

Burada önemli bir tercih yaptık: Modeli büyük ve karmaşık tutmadık. Önceki çalışmalarımızda EEG'den zaman, frekans ve doğrusal olmayan pek çok farklı öznitelik çıkarmıştık ([TIPTEKNO 2024](https://doi.org/10.1109/tiptekno63488.2024.10755366)). Bu kez yalnızca frekans bilgisine ve tek bir ritmin haritasına dayanan hafif bir model kurduk. Amaç, ileride gerçek zamanlı ve taşınabilir sistemlerde çalışabilecek kadar sade bir yöntem geliştirmekti.

## Teta Dalgaları Kokuyu Ele Veriyor

Sonuçlar bizi de şaşırttı:

- **Uyarılma** boyutunda en iyi sonucu **teta** dalgaları verdi: Model kokulu ve kokusuz anları **%98,4** doğrulukla ayırt etti. Test edilen örneklerin yalnızca birinde yanıldı.
- **Hoşnutluk** boyutunda **teta** ve **beta** dalgaları **%96,6** doğrulukla en iyi sonucu verdi.
- Delta ve gama dalgaları ise daha az bilgi taşıdı.

Isı haritalarına bakınca bunun nedeni de görülüyor: Kokulu anlarda teta etkinliği özellikle alnın ve şakakların altına denk gelen **frontal ve temporal** bölgelerde belirgin biçimde yoğunlaşıyor. Kokusuz anlarda ise daha dağınık ve zayıf. Bu bölgeler, duygu ve hafızayla ilişkili limbik yapılarla yakından bağlantılı. Teta dalgalarının dikkat ve duygusal hafızayla ilişkisi düşünüldüğünde, kokunun "kestirme yolunun" EEG'deki izini tam da burada görmek anlamlı.

Hafif modelimiz, aynı veri üzerinde denediğimiz MobileNetV2 ve SqueezeNet gibi daha bilinen ağlardan da daha iyi sonuç verdi.

## Neden Önemli?

Bir kokunun bize ne hissettirdiğini, soru sormadan, doğrudan beyin sinyallerinden okuyabilmek pek çok kapı açıyor. Bir parfümün, bir ürünün ya da bir mağaza ortamının tüketicide nasıl bir tepki uyandırdığını daha nesnel ölçmek bunlardan yalnızca biri. Yöntemin sade olması da onu gerçek zamanlı uygulamalara ve beyin-bilgisayar arayüzlerine taşımayı kolaylaştırıyor. Bir sonraki adımımız, modeli daha önce hiç görmediği katılımcılarda sınamak ve sinyallerin zaman içindeki değişimini de hesaba katmak.
