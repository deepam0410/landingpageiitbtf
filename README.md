# Techfest · IIT Bombay — Landing Page

A responsive, single-page website for a college tech fest, themed in light pink & light yellow. Built with plain HTML, CSS, vanilla JS conventions, and AngularJS (1.x) for interactivity.

## 📁 File Structure

```
techfest/
├── index.html   → Markup / page structure only
├── style.css    → All styling (theme colors, layout, responsive rules)
├── app.js       → AngularJS module + controller (countdown, tabs, forms, etc.)
└── README.md    → This file
```

All three files must stay in the **same folder** — `index.html` links to `style.css` and `app.js` using relative paths.

## ▶️ How to Run

No build step or server required.

1. Keep `index.html`, `style.css`, and `app.js` together in one folder.
2. Double-click `index.html` (or right-click → Open with your browser).
3. That's it — AngularJS is loaded from a CDN, so you need an internet connection the first time it loads.

**Optional (recommended for local dev):** serve it with a simple local server instead of opening the file directly, so relative paths and fonts behave exactly like they would in production:

```bash
# from inside the techfest folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## 🧩 How the Files Connect

```html
<!-- inside <head> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"></script>
<link rel="stylesheet" href="style.css">

<!-- right before </body> -->
<script src="app.js"></script>
```

- `style.css` is loaded early (in `<head>`) so the page doesn't flash unstyled content.
- `app.js` is loaded at the end of `<body>` so it runs after the DOM is parsed.
- `app.js` depends on the AngularJS library script, so that CDN `<script>` tag must load **before** `app.js`.

## ✨ Features

- **Sticky nav** with a mobile hamburger menu (AngularJS `ng-click` toggle)
- **Live countdown timer** to the event date, updated every second via `$interval`
- **Animated hero** with pulsing signal rings (pure CSS keyframes)
- **Stats bar, event cards, speaker grid** — all rendered dynamically with `ng-repeat` from arrays in `app.js`
- **3-day schedule** with clickable day tabs (`ng-click` / `ng-show`)
- **Auto-scrolling sponsor marquee**
- **Working newsletter form** (`ng-model` + `ng-submit`, client-side only — no backend wired up)
- Fully responsive: nav collapses to a hamburger, grids restack to 1–2 columns on mobile
- Respects `prefers-reduced-motion` for users who disable animations

## 🎨 Customizing

| What you want to change        | Where to look                                              |
|--------------------------------|--------------------------------------------------------------|
| Colors / theme                 | `:root` CSS variables at the top of `style.css`             |
| Fonts                          | Google Fonts `<link>` in `index.html` + `font-family` rules in `style.css` |
| Event date / countdown target  | `target` variable in `app.js`                               |
| Events, speakers, schedule, sponsors, stats | Arrays inside `MainCtrl` in `app.js`            |
| Section copy (headings, text)  | Directly in `index.html`                                    |
| Container width / side margins | `.container` and `.nav-inner` rules in `style.css`           |

### Color palette

| Token          | Hex       | Used for                          |
|----------------|-----------|------------------------------------|
| `--pink-50`    | `#fff3f7` | Page background tint               |
| `--pink-400`   | `#ff6fa5` | Accents, gradients                 |
| `--pink-600`   | `#e8437e` | Buttons, primary accent            |
| `--yellow-50`  | `#fffbea` | Section background tint            |
| `--yellow-400` | `#ffd23f` | Accents, gradients                 |
| `--yellow-600` | `#f0af00` | Highlights, secondary accent       |
| `--ink`        | `#2a1b2e` | Primary text                       |
| `--ink-soft`   | `#6a5670` | Secondary / muted text             |

## ⚠️ Notes

- The newsletter form and "Register Now" button are front-end only — hook them up to a real backend/email service before going live.
- Speaker photos use generated initials avatars (no real images), so there's nothing to swap out unless you want to add real photos.
- Sponsor names, prize amounts, and stats are placeholder content — update them in `app.js` before publishing.

## 📄 License

Free to use and modify for your own event/project.
