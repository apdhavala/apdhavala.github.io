# Mechanical Engineering Portfolio

A static, dependency-free portfolio site styled like an engineering drawing
sheet — title block header, dimension-line dividers, and drafting-style
type. No build step, no frameworks: just `index.html`, `css/style.css`,
and `js/script.js`.

## 1. Customize the content

Open `index.html` in any text editor and look for `<!-- REPLACE: ... -->`
comments — they mark every spot with placeholder text:

- **Title block** (top of page): your name, title, and status
- **Hero section**: your one-line thesis statement and short bio, plus the
  four spec rows (domain, software, fab methods, location)
- **Projects**: three placeholder project cards — duplicate the
  `<article class="project-card">` block to add more, delete what you
  don't need
- **Skills**: four groups (CAD/Simulation, Fabrication, Analysis, Process)
  — edit the lists to match your real toolset
- **Contact**: email, LinkedIn, GitHub, and a resume link

To add a resume PDF, drop it in `assets/resume.pdf` — the contact section
already links to that path.

To swap the placeholder SVG sketches in each project card for real photos
or renders, replace the `<div class="placeholder-art">...</div>` block
with an `<img src="assets/your-image.jpg" alt="...">`.

## 2. Preview locally

No server required — just open `index.html` in a browser. Or, for live
reload while editing:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 3. Publish with GitHub Pages

**Option A — personal site (`yourusername.github.io`)**

1. Create a new repo named exactly `yourusername.github.io`
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Your site is live at `https://yourusername.github.io` within a few minutes.

**Option B — project site (any repo name, e.g. `portfolio`)**

1. Push these files to a repo, e.g. `portfolio`
2. On GitHub: **Settings → Pages → Source → Deploy from a branch**,
   pick `main` and `/ (root)`, then **Save**
3. Your site is live at `https://yourusername.github.io/portfolio/`
   within a few minutes

## 4. File structure

```
├── index.html          # all page content and structure
├── css/style.css        # design tokens + styles (see top of file)
├── js/script.js         # fills today's date into the title block
├── assets/               # put images / resume.pdf here
└── README.md
```

## Notes

- The palette, type pairing, and layout tokens are documented at the top
  of `css/style.css` if you want to adjust the look.
- The design has no external dependencies besides Google Fonts
  (Fraunces, Inter, IBM Plex Mono), loaded via `<link>` in `index.html`.
- Fully responsive; collapses to a single column under ~760px.
