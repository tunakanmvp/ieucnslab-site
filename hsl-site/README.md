# Hesaplamalı Sinirbilim Laboratuvarı — web sitesi

Hugo ile yapılmış, Türkçe/İngilizce iki dilli statik site. Dış tema veya modül bağımlılığı yoktur; tüm tasarım bu repodadır.

- Türkçe: `/` (varsayılan) · İngilizce: `/en/`
- Yayın: GitHub Pages (`.github/workflows/hugo.yaml`, `main` dalına push'ta otomatik)

## Yerelde çalıştırma

```bash
# Hugo extended 0.146+ gerekir: https://gohugo.io/installation/
hugo server
# http://localhost:1313
```

## İçerik nerede?

| Ne | Dosya |
|---|---|
| Ana sayfa giriş metni | `content/_index.tr.md`, `content/_index.en.md` |
| Lab adı, slogan, e-posta, adres, menü | `hugo.toml` |
| Araştırma alanları | `content/research/*.tr.md` + `*.en.md` |
| Ekip | `data/people.yaml` (fotoğraflar `static/images/people/`) |
| Yayınlar | `data/publications.yaml` |
| Altyapı | `content/facilities/_index.*.md` |
| Haberler | `content/news/` |
| Arayüz metinleri (butonlar vb.) | `i18n/tr.toml`, `i18n/en.toml` |
| Renkler, yazı tipi | `assets/css/main.css` (en üstteki `:root`) |

**Her sayfanın iki dosyası vardır:** `ornek.tr.md` ve `ornek.en.md`. Aynı ada sahip olmaları onları birbirinin çevirisi yapar ve dil düğmesi doğru sayfaya gider. Türkçe sayfalarda adresi Türkçe yapmak için ön bilgiye `url:` satırı eklenir.

### Haber ekleme

Haberler sayfası iki bölümden oluşur: üstte genel duyurular (`content/news/_index.*.md` içeriği), altta **Laboratuvardan haberler** (`content/news/` içindeki her dosya bir kart olur, karta tıklanınca tam metin açılır). Laboratuvardan haberlere yalnızca sonuçlanmış işleri (kabul, ödül, yayın vb.) yazın.

`content/news/2026-12-ornek.tr.md`:

```markdown
---
title: Başlık
url: /haberler/baslik/
date: 2026-12-01
summary: Tek cümlelik özet.
---
Metin...
```

Aynı adla `.en.md` sürümünü de ekleyin (onda `url:` gerekmez).

## Yayına alma (bir kerelik)

1. GitHub'da yeni repo açın, bu klasörü `main` dalına push'layın.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Domain: `static/CNAME` ve `hugo.toml` içindeki `baseURL` değerini kendi domaininizle değiştirin.
4. Domain sağlayıcısının DNS ayarlarında:
   - Kök domain için 4 adet `A` kaydı: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` için `CNAME` → `<github-kullanici-adi>.github.io`
5. Settings → Pages → Custom domain alanına domaini yazın, DNS doğrulanınca **Enforce HTTPS**'i açın.

## Yapılacaklar

Dosyalarda `TODO` geçen her yer doldurulmayı bekliyor:

```bash
grep -rn TODO content data hugo.toml static
```

### Blog yazısı ekleme

`content/blog/` içine iki dosya ekleyin (aynı ad, farklı dil uzantısı):

`2026-12-01-ornek.tr.md`:

```markdown
---
title: Başlık (kartta büyük ve kalın görünür)
url: /blog/ornek/
date: 2026-12-01
category: Temel kavramlar   # Temel kavramlar | Nöropazarlama | Yapay zeka | Sinyal işleme teorisi (EN: Basics | Neuromarketing | Artificial intelligence | Signal processing theory)
summary: Kartta başlığın altında görünen bir-iki cümlelik özet.
author: Yazarın adı
---
Yazının tamamı. Karta tıklanınca açılır. Resim için: ![açıklama](resim.jpg "İsteğe bağlı alt yazı")
```

`2026-12-01-ornek.en.md`: aynısı İngilizce, `url:` yerine `slug: example`.

#### Resim ekleme

Resimler `static/images/` altında menü başına bir klasörde durur: `research`, `people`, `publications`, `facilities`, `news`, `blog`, `conferences`, `contact`. Blogda her yazının kendi klasörü var; klasör adı, dosya adından tarih çıkarılmış hâlidir (`2026-11-07-fnirs.tr.md` → `static/images/blog/fnirs/`). Yeni yazı eklerken aynı mantıkla klasörünü açın.

Yazıda yalnızca dosya adını yazmanız yeterli, doğru klasör otomatik bulunur. TR ve EN sürüm aynı klasörü kullanır:

```markdown
![EEG başlığı takılmış bir katılımcı](eeg-baslik.jpg "Alt yazı (isteğe bağlı)")
```

Başka bir klasördeki resmi kullanmak için yolu yazın: `![...](news/foto.jpg)`.

Tırnak içindeki kısım yazılırsa resmin altında alt yazı olarak görünür. Dosya adlarında Türkçe karakter ve boşluk kullanmayın (`eeg-baslik.jpg` gibi). Katılımcı yüzü ya da kimliği görünen fotoğraf eklemeyin.
