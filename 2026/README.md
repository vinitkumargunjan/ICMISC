# ICMISC 2026 — Conference Website

A fresh, modern, fully responsive website for the **7th International Conference on Recent
Trends in Machine Learning, IoT, Smart Cities & Applications**, hosted by CMR Institute of
Technology, Hyderabad.

Built with plain **HTML, CSS and vanilla JavaScript** — no build step, no dependencies.
Just open `index.html` (or upload the whole folder to any static host: GitHub Pages,
Netlify, cPanel, etc.).

## Structure

```
ICMISC 2026/
├── index.html              # the whole single-page site
├── assets/
│   ├── css/styles.css      # all styling (design tokens at top under :root)
│   ├── js/main.js          # countdown, nav, reveal animations, FAQ, contact form
│   └── img/logo.svg        # custom logo (ML nodes + IoT signal + city skyline)
└── README.md
```

## The logo
A custom SVG hexagon "shield" that visually tells the conference story:
- **Signal arcs** on top → IoT / wireless connectivity
- **Connected nodes** in the middle → neural network / machine learning
- **City skyline** at the bottom → smart cities
It scales crisply at any size and is also used as the browser favicon.

## ✅ Please confirm / update before going live
Most content was pulled directly from the official 2025 site and is accurate. A few items
were **projected for the 2026 edition** following the conference's consistent schedule —
please confirm and adjust:

| Item | Where | Current (projected) value |
|------|-------|---------------------------|
| Workshop / tutorial proposals | `#dates` timeline | 15 Aug 2026 |
| Paper submission | `#dates` timeline | 01 Sept 2026 |
| Extended deadline | hero countdown + `#dates` | 15 Sept 2026 |
| Notification | `#dates` | 31 Oct 2026 |
| Camera-ready / registration | `#dates` | 10 Nov 2026 |
| Conference dates | hero, About, dates | **11–12 December 2026** |
| CMT submission link | everywhere | `cmt3.research.microsoft.com/ICMISC2026` (create this on Microsoft CMT) |

The **countdown timer** targets the extended deadline (15 Sept 2026, IST). Update the
`target` date in `assets/js/main.js` if the deadline changes.

Registration fees, committee members, speakers, history/Springer links, venue and contact
details are taken verbatim from the official source.

### Publisher approval — pending (important)
Springer/Scopus publication for **ICMISC 2026 is not yet confirmed**, so all forward-looking
copy says **"publication approval in progress"** and leans on the 2020–2025 track record
instead of promising LNNS/Scopus for 2026. The **History section is the only place** that
states Springer/Scopus as fact (those past editions genuinely were). Once the publisher
formally approves, flip these spots back to a firm claim:
- Top bar badge (`.badge-pub`) and hero chip
- About bullet + "At a Glance → Publication" row
- The amber notice in the **Publication & Track Record** section (`#publication`)
- Registration card line "Paper included in conference proceedings (…)"
- FAQ "Where will my paper be published?"
- CTA band, footer bottom line, and the two SEO `<meta>` descriptions

## Editing tips
- **Colours / fonts:** change the variables in `:root` at the top of `styles.css`.
- **Add a speaker / track / committee member:** copy one existing card block in `index.html`.
- **Contact form:** submits via the visitor's email client to `iotsmartcon@gmail.com`. To use a
  real backend (e.g. Formspree), point the form `action` there instead.
