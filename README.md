# Sai Jaswanth Sadu — Developer Portfolio

A clean, premium, fully responsive portfolio for **Sadu Venkata Subramanya Siva
Sai Jaswanth**, a Full Stack Developer and Computer Science Engineering student.

Built with React 18 and Vite, styled with Tailwind CSS plus a small design-token
stylesheet, and animated with lightweight CSS/IntersectionObserver reveals.

---

## Tech stack

| Concern        | Choice                                    |
| -------------- | ----------------------------------------- |
| UI framework   | React 18                                  |
| Build tool     | Vite 5                                    |
| Styling        | Tailwind CSS 3.4 + CSS custom properties  |
| Icons          | Lucide React + React Icons (brand marks)  |
| Contact form   | EmailJS with an honest `mailto:` fallback |
| Navigation     | Single page, sticky nav, smooth anchors   |

No backend is required for hosting. The site builds to a static `dist/` folder.

---

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static production build in dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

---

## Editing content

All factual content lives in **`src/data/portfolio.js`**:

| Content                                         | Export            |
| ----------------------------------------------- | ----------------- |
| Name, role, summary, email, phone, social links | `profile`         |
| Navigation labels                               | `navLinks`        |
| Hero highlight cards                            | `heroHighlights`  |
| Skill categories and skills                     | `skillGroups`     |
| Projects, features, tech and links              | `projects`        |
| Education timeline                              | `education`       |
| Certificates and documents                      | `certifications`  |
| Contact copy                                    | `contactContent`  |
| EmailJS configuration                           | `emailjs`         |

Component code never hard-codes personal data, so updating this file is enough to
change the site's content.

---

## Assets

```
public/
├── profile.jpeg                        # supplied portrait
├── Sai_Jaswanth_Sadu_Resume.pdf        # supplied resume (download button)
├── certificates/
│   ├── simplilearn-html.jpg            # supplied HTML certificate
│   ├── javascript.pdf                  # supplied CodeChef certificate
│   ├── infosys.pdf                     # supplied Infosys certificate
│   └── previews/                       # rendered first pages used by the carousel
├── favicon.svg
└── og-image.svg
```

To replace the resume, drop the new PDF at the same path or update
`profile.resumeUrl` and `profile.resumeFileName`. The hero and navbar portrait
comes from `profile.photo`.

### Certificates

Only facts printed on the uploaded certificates are shown:

| Certificate                             | Issuer              | Date            | Document                    |
| --------------------------------------- | ------------------- | --------------- | --------------------------- |
| Introduction to HTML                    | Simplilearn SkillUp | 16 August 2025  | `simplilearn-html.jpg`      |
| Learn JavaScript                        | CodeChef            | 16 August 2026  | `javascript.pdf`            |
| Introduction to Artificial Intelligence | Infosys Springboard | 13 August 2026  | `infosys.pdf`               |
| CSS Fundamentals                        | —                   | —               | No file uploaded yet        |

The CSS Fundamentals entry comes from the resume but no certificate document
was supplied, so its card shows a pending state rather than a fabricated image
or date. Add a document to `public/certificates/`, point `file`/`preview` at it
in `portfolio.js`, and the card becomes complete automatically.

Verification buttons appear only where the certificate itself provides an
official verification destination (CodeChef and Infosys). No verification URL
was invented for the HTML or CSS entries.

---

## Projects

Both project cards use configurable links:

```js
repoUrl: null,  // real GitHub repository
demoUrl: null,  // real deployed application
```

While a value is `null`, the matching button renders disabled with a "coming
soon" tooltip — the site never links to a guessed or invented URL. Add the real
URLs to enable the buttons. Project artwork is an original UI illustration, not
a fake screenshot.

The **View More Projects** button opens the GitHub profile supplied on the
resume.

---

## Enabling real contact-form delivery

The form is wired to **EmailJS**, which sends email directly from the browser.

1. Create a free account at <https://www.emailjs.com>.
2. Add an email service and copy the **Service ID**.
3. Create a template that accepts:
   `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`, `{{to_email}}`.
   Copy the **Template ID**.
4. Copy the **Public Key** from Account → API Keys.
5. Copy `.env.example` to `.env` and fill in:

```ini
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Until those keys exist, the UI says delivery is not connected and opens the
visitor's mail client with the message pre-filled. It never shows a false
"message sent" confirmation.

---

## Accessibility & performance

- Semantic landmarks, one `h1`, labelled form fields and buttons.
- Skip-to-content link, visible focus rings, keyboard-operable menu and
  carousel, Escape closes the mobile menu.
- All motion is disabled under `prefers-reduced-motion`.
- Images are compressed; certificate previews are lazy-loaded; the hero image
  is eager with high priority.
- No 3D or animation libraries are bundled — the JavaScript payload stays small.
- The design is responsive at mobile, tablet and desktop widths.

---

## Deployment

`npm run build` produces a fully static `dist/` folder. Deploy it to Vercel,
Netlify, Cloudflare Pages or GitHub Pages. For Vercel, use the Vite preset with
build command `npm run build` and output directory `dist`.

Once the site has a real domain, add a `<link rel="canonical">` and a `url`
field in the JSON-LD block in `index.html`. No canonical domain is claimed while
it is undeployed.

---

## Structure

```
src/
├── App.jsx
├── index.css                  # design tokens + component styles
├── data/portfolio.js          # ★ all content and configurable links
└── components/
    ├── Navbar.jsx  Hero.jsx  Skills.jsx  Projects.jsx
    ├── ProjectCard.jsx  ProjectVisual.jsx
    ├── Education.jsx  Certifications.jsx
    ├── Contact.jsx  Footer.jsx
    ├── SectionHeading.jsx  Reveal.jsx  TechIcon.jsx
```
