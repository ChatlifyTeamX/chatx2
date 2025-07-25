# Chatlify Projesi

## Proje Hakkında
Chatlify, modern bir sohbet ve topluluk platformudur. Discord benzeri bir arayüz ile kullanıcıların mesajlaşma, sesli görüşme ve topluluk oluşturma ihtiyaçlarını karşılar.

## Proje Yapısı

```
chatlify/
├── public/                # Dağıtım için hazır dosyalar
│   ├── assets/            # Optimize edilmiş görseller ve medya
│   ├── css/               # Derlenmiş CSS dosyaları
│   ├── js/                # Derlenmiş JS dosyaları
│   ├── pages/             # HTML sayfaları
│   │   └── legal/         # Yasal sayfalar
│   ├── index.html         # Ana sayfa
│   └── _headers           # Netlify yapılandırması
│
├── src/                   # Kaynak kodları
│   ├── assets/            # Görseller, ses dosyaları ve ikonlar
│   │   ├── images/        # Resimler
│   │   ├── sounds/        # Ses dosyaları
│   │   └── icons/         # İkon dosyaları
│   │
│   ├── components/        # Yeniden kullanılabilir UI bileşenleri
│   │   ├── common/        # Ortak bileşenler
│   │   ├── chat/          # Sohbet bileşenleri
│   │   ├── sidebar/       # Kenar çubuğu bileşenleri
│   │   └── modals/        # Pop-up pencere bileşenleri
│   │       ├── add-friend/        # Arkadaş ekleme penceresi
│   │       ├── join-server/       # Sunucuya katılma penceresi
│   │       └── profile-modal/     # Profil penceresi
│   │
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── auth/          # Kimlik doğrulama sayfaları
│   │   ├── dashboard/     # Kontrol paneli sayfaları
│   │   └── static/        # Statik sayfalar
│   │
│   ├── styles/            # Stil dosyaları
│   │   ├── components/    # Bileşen stilleri
│   │   └── pages/         # Sayfa stilleri
│   │
│   ├── services/          # Servisler
│   │   └── api/           # API bağlantıları
│   │
│   ├── utils/             # Yardımcı fonksiyonlar
│   │
│   └── libs/              # Harici kütüphaneler
│
└── netlify.toml          # Netlify yapılandırması
```

## Nasıl Çalışır

1. Kaynak kodlarımız `src/` klasörü içerisindedir
2. Dağıtılacak dosyalar `public/` klasörü içerisindedir
3. Bileşenler `src/components/` altında organize edilmiştir
4. Stil dosyaları `src/styles/` altında düzenlenmiştir
5. Sayfalar `src/pages/` altında gruplandırılmıştır

## Bileşen Yapısı

Her bir bileşen genellikle şu dosyalardan oluşur:
- `[bileşen-adı].html` - HTML şablonu
- `[bileşen-adı].css` - Stil dosyası
- `[bileşen-adı].js` - JavaScript kodu

Örneğin: `src/components/modals/add-friend/` klasöründe arkadaş ekleme penceresi için:
- `add-friend.html`
- `add-friend.css`
- `add-friend.js`

Bu yapı, bileşenlerin kolayca bulunmasını ve bakım yapılmasını sağlar.

## Projeyi Geliştirme

1. Yeni bir bileşen eklemek istiyorsanız, uygun klasörde (örn. `src/components/modals/`) yeni bir klasör oluşturun
2. HTML, CSS ve JS dosyalarını ekleyin
3. Ana uygulamaya entegre edin

## Özellikler

- Gerçek zamanlı mesajlaşma
- Arkadaş ekleme ve yönetme
- Çevrimiçi durumu gösterme
- Emoji ve GIF desteği
- Sesli arama

## Sesli Arama Özelliği

Chatlify artık WebRTC teknolojisini kullanarak sesli arama desteği sunmaktadır. Bu özellik sayesinde arkadaşlarınızla doğrudan tarayıcı üzerinden yüksek kaliteli sesli görüşmeler yapabilirsiniz.

### Nasıl Kullanılır

1. Bir arkadaşınızla olan sohbet penceresini açın
2. Sohbet başlığındaki telefon simgesine tıklayın
3. Karşı taraf aramayı kabul ettiğinde görüşme başlayacaktır
4. Görüşme sırasında mikrofonunuzu kapatmak/açmak için mikrofon butonunu kullanabilirsiniz
5. Aramayı sonlandırmak için kırmızı telefon butonuna tıklayın

**Not**: Sesli arama özelliğinin düzgün çalışması için mikrofonunuza erişim izni vermeniz gerekmektedir.

## Kurulum

1. Repoyu klonlayın
2. `npm install` komutunu çalıştırarak bağımlılıkları yükleyin
3. `npm start` komutu ile uygulamayı başlatın

## Teknolojiler

- HTML/CSS/JavaScript
- Supabase (Veritabanı ve kimlik doğrulama)
- WebRTC (Sesli arama)
- Realtime API (Gerçek zamanlı mesajlaşma)

## Lisans

MIT #   c h a t x 2 
 
 