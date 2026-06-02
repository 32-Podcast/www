# 🎙️ 32 Подкаст

Училищният сайт на **32. СУИЧЕ "Св. Климент Охридски"** — гласа на учениците в ефира.

*Новини, интервюта, музика и забавни рубрики.*

[![Astro](https://img.shields.io/badge/Astro-5-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

🌐 [podcast.school32.com](https://podcast.school32.com) · [📺 YouTube](https://www.youtube.com/@schoolpodcast32) · [📸 Instagram](https://www.instagram.com/32.podcast/) · [📘 Facebook](https://www.facebook.com/school32.bg/)

---

## 📖 За сайта

Сайтът представя подкаста на 32. СУИЧЕ — рубриките **Междучасие** и **SPECIAL**, екипа, епизодите и програмата. Включва:

- 🏠 **Начало** — hero секция с последните епизоди, статистики и екипа
- 🎬 **Епизоди** — всички предавания с филтър по дата (нови ↔ стари)
- 🏷️ **Рубрики** — Междучасие и SPECIAL
- 📅 **Програма** — месечен календар (динамичен, базиран на текущия месец)
- 👥 **Екип** — хората зад микрофона
- 🎤 **Гости** — специални гости на предаванията
- ✉️ **Контакти** — форма за връзка и социални мрежи
- 🆕 **Какво ново** — changelog на промените по сайта

3 теми: **светла**, **тъмна** и **Catppuccin** (с `localStorage` persistence и no-FOUC init).

---

## 🛠️ Технологии

| Технология | Версия | Цел |
| :--- | :--- | :--- |
| **Astro** | `^5.7.0` | Статичен сайт генератор |
| **TypeScript** | `^5.7.2` | Strict типова безопасност |
| **Tailwind CSS** | `v4` (via `@tailwindcss/vite`) | Стилизиране (no config, `@theme` tokens) |
| **Font Awesome** | `6.5.1` (CDN) | Икони |
| **Cloudflare Pages** | — | Хостинг и CDN (auto-deploy от `main`) |
| **GitHub Pages** | — | Backup preview при `https://32-podcast.github.io/www/` |

Шрифтове: **Kometa**, **Kometa Unicase** (български дисплей), **Junicode** (serif/italic).

---

## 📂 Структура

```
src/
├── data/           # Типизирани TS данни
│   ├── episodes.ts # 12 епизода + helpers (label, date, youtubeUrl, thumbnailUrl)
│   ├── team.ts     # 4 членове на екипа
│   └── site.ts     # navItems, социални линкове, contactEmail
├── layouts/
│   └── BaseLayout.astro   # head, theme init, navbar, mobile menu, footer
├── components/     # 12 преизползваеми компонента
│   ├── Navbar.astro
│   ├── MobileMenu.astro
│   ├── Footer.astro
│   ├── ThemeDropdown.astro
│   ├── PageHeader.astro
│   ├── EpisodeCard.astro
│   ├── TeamCard.astro
│   ├── RubricCard.astro
│   ├── YouTubeCTA.astro
│   ├── ContactItem.astro
│   └── SocialLinks.astro
├── pages/          # 9 страници (file-based routing)
│   ├── index.astro        # /
│   ├── episodes.astro     # /episodes (с ?sort=newest|oldest)
│   ├── rubrics.astro      # /rubrics
│   ├── schedule.astro     # /schedule (месечен календар)
│   ├── team.astro         # /team
│   ├── guests.astro       # /guests
│   ├── contact.astro      # /contact
│   ├── whats-new.astro    # /whats-new
│   └── 404.astro          # custom 404
└── styles/
    └── global.css         # Tailwind v4 + @theme tokens + всички компонентни стилове
public/
├── images/         # logo32.png
└── fonts/          # Kometa family, Kometa Unicase family, JunicodeVF
```

---

## 🌐 Деплой

### Cloudflare Pages (primary)

- Свързан с `32-Podcast/www` repo
- Auto-deploy при всеки push в `main`
- Build команда: `npm run build`
- Output: `dist`
- Production URL: `https://www-6wp.pages.dev`
- Custom domain: `https://podcast.school32.com` (CNAME → `www-6wp.pages.dev`)

### GitHub Pages (backup preview)

- Workflow: `.github/workflows/deploy.yml`
- Triggers: push to `main`
- URL: `https://32-podcast.github.io/www/`
- Astro `base` path е автоматично `/www` когато `GITHUB_PAGES=true`

---

## 🎨 Теми

Дефинирани в `src/styles/global.css` чрез `@theme` и `[data-theme="..."]` overrides:

| Тема | Paper | Ink | Coral |
| :--- | :--- | :--- | :--- |
| **light** (default) | `#f2f0e3` | `#2e2e2e` | `#f76f53` |
| **dark** | `#1a1a1a` | `#ddd9c8` | `#ff7a5c` |
| **catppuccin** | `#1e1e2e` | `#cdd6f4` | `#cba6f7` (lavender) |

Изборът се пази в `localStorage`, с fallback на `prefers-color-scheme`. Inline script в `<head>` прилага темата **преди** първия paint, за да няма FOUC.

---

## 📝 Добавяне на епизод

1. Отвори `src/data/episodes.ts`
2. Добави нов обект в масива (incremental `order`, реален `date`, избери `rubric`):

   ```ts
   { id: 'YouTubeVideoId', order: 13, rubric: 'Междучасие', title: 'Заглавие', date: '2026-06-15' },
   ```

3. `commit` + `push` → Cloudflare Pages auto-deploy-ва за ~30 сек.

---

## 📜 Лиценз

© 2024–2026 32. СУИЧЕ "Св. Климент Охридски" — Всички права запазени.
