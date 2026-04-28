# Java Guides React Tutorial

Bu repo, React öğrenme sürecinde temel component yapısını, props kullanımını, event handling mantığını ve conditional rendering örneklerini içeren basit bir React eğitim projesidir.

Proje, React başlangıç konularını uygulamalı olarak görmek ve farklı component örnekleri üzerinden React mantığını pekiştirmek amacıyla hazırlanmıştır.

---

## Proje İçeriği

Bu projede React'in temel konularına odaklanılmıştır:

- Component oluşturma
- Component import/export kullanımı
- Props ile veri gönderme
- Object verilerini componentlere aktarma
- Event handling
- Conditional rendering
- Basit kullanıcı, öğrenci ve çalışan componentleri
- React proje klasör yapısını anlama

---

## Kullanılan Teknolojiler

- React.js
- JavaScript
- HTML
- CSS
- Create React App

---

## Proje Dosya Yapısı

```text
Java_Guides-React-Tutorial/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── ConditionRendering.js
│   │   ├── Employee.js
│   │   ├── EventHandling.js
│   │   ├── Greeting.js
│   │   ├── HelloWorld.js
│   │   ├── MyComponent.js
│   │   ├── Student.js
│   │   ├── User.js
│   │   └── Welcome.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Component Açıklamaları

| Component | Açıklama |
|---|---|
| `HelloWorld.js` | Basit component yapısını göstermek için kullanılır. |
| `Welcome.js` | Karşılama componenti örneğidir. |
| `Greeting.js` | Props veya temel veri gösterimi mantığı için kullanılır. |
| `MyComponent.js` | Birden fazla component export/import kullanımını gösterir. |
| `Student.js` | Öğrenci verilerinin component içinde gösterilmesini sağlar. |
| `Employee.js` | Çalışan bilgilerini göstermek için oluşturulmuş örnek componenttir. |
| `User.js` | Kullanıcı bilgilerini component yapısıyla göstermeyi amaçlar. |
| `EventHandling.js` | React'te olay yönetimi mantığını gösterir. |
| `ConditionRendering.js` | Koşullu render işlemini örnekler. |

---

## Kurulum

Projeyi bilgisayarınıza klonlayın:

```bash
git clone https://github.com/elifsuperisan/Java_Guides-React-Tutorial.git
```

Proje klasörüne girin:

```bash
cd Java_Guides-React-Tutorial
```

Gerekli paketleri yükleyin:

```bash
npm install
```

---

## Çalıştırma

Projeyi geliştirme modunda başlatmak için:

```bash
npm start
```

Tarayıcıda şu adres açılır:

```text
http://localhost:3000
```

---

## Build Alma

Projeyi production için derlemek isterseniz:

```bash
npm run build
```

Bu komut, optimize edilmiş üretim dosyalarını `build/` klasörü altında oluşturur.

---

## Öğrenilen Konular

Bu proje ile aşağıdaki React konuları pratik edilmiştir:

- React component mantığı
- JSX kullanımı
- Props yapısı
- Componentler arası veri aktarımı
- Event handling
- Conditional rendering
- Modüler dosya yapısı
- React uygulamasını çalıştırma ve build alma

---

## Not

Bu proje, React temellerini öğrenmek amacıyla hazırlanmış eğitim odaklı bir çalışmadır. Bu nedenle proje içinde farklı component örnekleri ayrı dosyalar halinde tutulmuştur.
