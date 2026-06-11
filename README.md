# ICMISC — Conference Website

Official website for **ICMISC — International Conference on Recent Trends in Machine
Learning, IoT, Smart Cities & Applications**, hosted by CMR Institute of Technology,
Hyderabad, India.

This repository is organised **one folder per edition** so each year is self-contained and
future editions are easy to add without touching the previous ones.

## Structure

```
ICMISC/
├── index.html        # landing page — redirects to the current edition
├── 2026/             # 7th edition (current)  →  built with plain HTML/CSS/JS
│   ├── index.html
│   ├── assets/{css,js,img}
│   └── README.md     # edition-specific notes (dates, what to confirm, etc.)
└── README.md         # this file
```

## Live site (GitHub Pages)
Once Pages is enabled (Settings → Pages → Deploy from branch → `main` / root), the site is
served at:

- `https://<user>.github.io/ICMISC/`  → redirects to the current edition
- `https://<user>.github.io/ICMISC/2026/`  → the 2026 edition directly

## Adding a future edition
1. Copy the latest edition folder, e.g. `cp -r 2026 2027`.
2. Update the content (dates, committee, history, etc.) inside `2027/`.
3. Change the redirect target in the **root** `index.html` from `2026/` to `2027/`.
4. Commit and push — the previous editions stay online at their own URLs.

## Tech
No build step, no dependencies — pure HTML, CSS and vanilla JavaScript. Open any edition's
`index.html` locally, or deploy the whole folder to any static host.
