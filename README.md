## React + TypeScript Portfolio (Vite + Tailwind)

Bu proje, elinizdeki statik HTML sayfalarının (Ana sayfa, Projeler, Deneyim, Eğitim & Yetenekler) bire bir görünümünü React ve TypeScript ile yeniden oluşturan bir SPA (Single Page Application) yapısıdır. Stil altyapısı olarak Tailwind CSS kullanılmıştır.

### Özellikler
- **React + TypeScript + Vite**: Hızlı geliştirme, tip güvenliği ve modern bundling.
- **React Router**: `/`, `/projects`, `/experience`, `/education-skills` rotaları.
- **Tailwind CSS**: Var olan tasarımdaki sınıfların büyük bölümü aynı şekilde korunmuştur.
- **Material Symbols**: İkon seti doğrudan Google Fonts üzerinden yüklenir.
- **Kapsamlı Sayfa Yapısı**: Mevcut HTML içerikleri parçalanarak sayfalara ve component’lere taşındı.

---

## Başlangıç

Ön koşullar:
- Node.js 18+ (veya 20+)
- npm veya pnpm/yarn

Kurulum ve çalıştırma:

```bash
cd react-portfolio
npm install
npm run dev
```

Build ve local preview:

```bash
npm run build
npm run preview
```

---

## Proje Yapısı

```text
react-portfolio/
  ├─ index.html                 # Vite giriş HTML'i (Inter + Material Symbols linkleri)
  ├─ package.json               # Scriptler ve bağımlılıklar
  ├─ tsconfig.json              # TypeScript ayarları
  ├─ vite.config.ts             # Vite konfigürasyonu
  ├─ postcss.config.js          # PostCSS/Tailwind
  ├─ tailwind.config.ts         # Tailwind tema ayarları (renkler, font vb.)
  └─ src/
     ├─ main.tsx                # Router ve uygulama giriş noktası
     ├─ App.tsx                 # Layout (Navbar + Outlet + Footer)
     ├─ components/
     │  └─ Navbar.tsx           # Üst navigasyon (tüm sayfalarda ortak)
     ├─ pages/
     │  ├─ Home.tsx             # index.html içeriği (Hero + istatistik şeridi)
     │  ├─ Projects.tsx         # projects.html (profil/hero + arama/etiketler + grid)
     │  ├─ Experience.tsx       # experience.html (timeline)
     │  └─ EducationSkills.tsx  # education-skils.html (eğitim timeline + yetenek grid)
     └─ styles/
        └─ index.css            # Tailwind direktifleri ve küçük yardımcı stiller
```

---

## Sayfalar ve İçerik Eşlemesi

- **Home (`/`)**: Orijinal `index.html` hero bölümü ve alt bilgi şeridi taşındı.
- **Projects (`/projects`)**: `projects.html`’daki avatar/hero, arama çubuğu, etiketler ve 6 kartlık proje grid’i data dizisi ile render ediliyor.
- **Experience (`/experience`)**: `experience.html` timeline öğeleri bir dizi üzerinden map edilerek render ediliyor.
- **Education & Skills (`/education-skills`)**: `education-skils.html` iki sütunlu (Eğitim + Yetenekler) düzeniyle birlikte taşındı.

Not: Orijinal HTML’deki içerikler mümkün olduğunca aynen korunmuş, React/TSX’e uygun olacak şekilde `class` → `className`, `style` objesine dönüştürme gibi zorunlu uyarlamalar yapılmıştır. Proje kartları ve deneyim/yetenek maddeleri, kolay düzenleme için TypeScript dizileri üzerinden geliyor.

---

## Tasarım ve Tema

- Tailwind teması `tailwind.config.ts` içerisinde orijinal renk/fon/kenar yarıçapı değerleri ile genişletildi:
  - `primary`, `background-light`, `background-dark`, `surface-light`, `surface-dark`
  - `fontFamily.display/sans: Inter`
  - `borderRadius`: `DEFAULT`, `lg`, `xl`, `full`
- `index.html` üzerinde `html` etiketinde `class="dark"` yer almakta; bu sayede varsayılan görünüm dark mode’dur. İsterseniz light moda geçmek için bu sınıfı kaldırabilirsiniz. İleride tema toggle için küçük bir state eklenebilir.

---

## İçerik/Dil Değişiklikleri

- Metinler ve veriler ilgili sayfaların içindeki TSX dosyalarında veya üstteki data dizilerinde bulunur.
  - Proje kartları: `src/pages/Projects.tsx` içindeki `projects` dizisi
  - Deneyim timeline: `src/pages/Experience.tsx` içindeki `experiences` dizisi
  - Eğitim/Yetenekler: `src/pages/EducationSkills.tsx` içinde sabit bloklar ve map’lenen diziler
- İkonlar `Material Symbols` ile gelir. İkon adını değiştirmek için ilgili öğedeki `material-symbols-outlined` içeriğini güncelleyin.

---

## Dağıtım (Deployment)

- Vercel/Netlify gibi platformlarda tek komutla deploy:
  - Build komutu: `npm run build`
  - Çıktı klasörü: `dist/`
  - Framework: Vite (Auto detect)
- GitHub Pages için `vite` + `gh-pages` kullanılabilir (isteğe bağlı).

---

## İleride Geliştirme Fikirleri

- Tema (dark/light) toggle bileşeni
- Projeler sayfasında gerçek arama/filtreleme fonksiyonelliği
- İçerikleri JSON/Markdown kaynaklardan çekme
- i18n (TR/EN dil seçenekleri)

---

## SSS

- “Tailwind neden var?”  
  Orijinal HTML sayfalarınız Tailwind sınıflarına dayanıyordu; aynı görünümü TypeScript/React tarafında da korumak için Tailwind tercih edildi.

- “İkonlar nasıl çalışıyor?”  
  `index.html` içinde Google Fonts üzerinden `Material Symbols` yükleniyor. TSX içinde `<span className="material-symbols-outlined">icon_name</span>` şeklinde kullanılıyor.

- “Dark mode’u nasıl değiştiririm?”  
  `index.html` içindeki `<html class="dark">` ifadesini kaldırın (light olur) veya bir toggle ile bu sınıfı dinamik değiştirin.


