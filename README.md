# Personal Portfolio Website

A clean, minimalist, and responsive personal portfolio website built with:

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript

This project is fully static and optimized for easy deployment on Vercel.

---

## Project Structure

```text
portfolio/
├── index.html
├── README.md
├── vercel.json
├── assets/
│   ├── icons/
│   └── images/
│       └── placeholder.svg
├── data/
│   └── projects.js
├── scripts/
│   └── main.js
└── styles/
    └── custom.css
```

---

## Features

- Minimal modern UI/UX
- Fully responsive layout (mobile, tablet, desktop)
- Sticky navigation bar
- Smooth scrolling
- Active nav link highlighting on scroll
- Scroll reveal animations
- Dynamic project cards loaded from `data/projects.js`
- Static hosting ready (works with local file open and Vercel)

---

## How To Run Locally

### Option A (Quickest): Open directly

1. Open the project folder.
2. Double-click `index.html`.
3. The site will run in your default browser.

> Note: This project is static and uses relative paths, so direct open works.

### Option B (Recommended): Use a local static server

Using a local server is better for realistic testing.

If you have Node.js installed:

```bash
npx serve .
```

Then open the URL shown in terminal (usually `http://localhost:3000`).

If you have Python installed:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

---

## How To Test

Use this checklist before pushing:

1. **Layout/Responsive**
   - Check mobile, tablet, desktop sizes in browser DevTools.
   - Confirm spacing and typography look consistent.

2. **Navigation**
   - Navbar stays sticky while scrolling.
   - Clicking nav items smoothly scrolls to correct section.
   - Active nav item updates based on current section.

3. **Projects**
   - Project cards render from `data/projects.js`.
   - Cards show image, title, description, tech stack, and button.

4. **Links**
   - Update placeholder links (`#`) when ready.
   - Verify GitHub, LinkedIn, and email links.

5. **Performance**
   - Confirm no console errors in browser DevTools.
   - Ensure animations are subtle and smooth.

---

## Customize Content

### 1) Personal Info

Edit `index.html`:

- Name (`Your Name`)
- Contact email
- GitHub profile link
- LinkedIn profile link
- Resume button URL

### 2) Projects

Edit `data/projects.js`:

- `title`
- `description`
- `tech` array
- `image` path
- `link`

If you add real project images, place them in `assets/images/` and use relative paths, for example:

```js
image: "./assets/images/my-project.png";
```

---

## Push To Your GitHub Repository

Your repository:
`https://github.com/Jehjdcns/portfolio.git`

Run these commands from the project root folder:

```bash
git init
git add .
git commit -m "Initial portfolio website setup"
git branch -M main
git remote add origin https://github.com/Jehjdcns/portfolio.git
git push -u origin main
```

If `origin` already exists, use:

```bash
git remote set-url origin https://github.com/Jehjdcns/portfolio.git
git push -u origin main
```

---

## Deploy To Vercel

This project includes `vercel.json` for static routing and is ready for static deployment.

### Option A: Deploy from GitHub (recommended)

1. Push your project to GitHub:
   - [https://github.com/Jehjdcns/portfolio.git](https://github.com/Jehjdcns/portfolio.git)
2. Sign in to [Vercel](https://vercel.com/).
3. Click **Add New...** -> **Project**.
4. Import the `Jehjdcns/portfolio` repository.
5. In project settings:
   - Framework Preset: **Other** (or auto-detected static)
   - Build Command: leave empty
   - Output Directory: leave empty
6. Click **Deploy**.
7. After deployment, open the generated Vercel URL and test:
   - Navbar and smooth scrolling
   - Project cards rendering
   - Links and responsive layout

### Option B: Deploy using Vercel CLI

1. Install Vercel CLI globally:

```bash
npm i -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. From the project root, run:

```bash
vercel
```

4. Follow prompts:
   - Set up and deploy: **Y**
   - Scope: choose your account
   - Link to existing project: **N** (first time)
   - Project name: `portfolio` (or your preferred name)
   - Directory: `./`

5. For production deployment:

```bash
vercel --prod
```

### Redeploy after updates

- If using GitHub integration: push to `main` and Vercel auto-deploys.
- If using CLI: run `vercel --prod` again from project root.

---

## Notes

- Keep all file paths relative.
- Keep `index.html` in the project root.
- No backend/server code is required.

---

## License

You can add your preferred license later (e.g., MIT).
