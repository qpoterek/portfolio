# My portfolio

Welcome to my portfolio ! 🙂

Even though the present page is only the repository, you can visit the actual website by clicking on the badge below.

<p align="center">
	<a href="https://www.quentinpoterek.com/">
		<img alt="Portfolio link" src="https://img.shields.io/badge/-🌍_ACCESS_WEBMAP_-e0f7fa?style=for-the-badge">
	</a>
</p>

## 🖥️ Technologies

<p align="center">
	<img alt="Vercel" src="https://img.shields.io/badge/-vercel-black?style=for-the-badge&logo=vercel"> 
	<img alt="Astro" src="https://img.shields.io/badge/-astro-fb8c00?style=for-the-badge&logo=astro&logoColor=white">
	<img alt="JavaScript" src="https://img.shields.io/badge/-javascript-fdd835?style=for-the-badge&logo=javascript&logoColor=black">
	<img alt="NPM" src="https://img.shields.io/badge/-npm-e53935?style=for-the-badge&logo=npm&logoColor=white">
	<img alt="Tailwind CSS" src="https://img.shields.io/badge/-tailwind_css-039be5?style=for-the-badge&logo=tailwindcss&logoColor=white">
</p>

<p align="center">
<img alt="GitHub deployments" src="https://img.shields.io/github/deployments/poterekq/portfolio/production?label=build&style=for-the-badge&color=43a047">
</p>

This portfolio was built using the brand new [Astro](https://astro.build/) framework, along with [Tailwind CSS](https://tailwindcss.com/) for styling and [Vercel](https://vercel.com/) for deploying.

## 📁 Project structure

This project includes the following directories and files:

- `public/*` — Static assets that are not processed during build.
- `src/components/` — Custom Astro components.
- `src/icons/` — SVG icons as custom Astro components.
- `src/layouts/` — Astro components for creating reusable page templates.
- `src/locales/` — Translation keys used for localization (work in progress).
- `src/pages/` — Astro components for handling routing and overall page layout.
- `src/config.js` — Generic information and data used during build.
- `src/*.config.js` — Data used to build the content of specific pages and routes.

## 🏗️ Build

In order to build this portfolio, Node.js v16.15.0+ is required.

The following lines can be used to run the website in a built-in development server:

```bash
git clone https://github.com/poterekq/portfolio.git
cd portfolio
npm install
npm run dev
```

## ☑️ Tasks

- [ ] Add a navigation arrow to go back up when browsing the page built from `src/work.astro`.
- [ ] Refactor the `SvgIcon.astro` component, and the subsequent icons in `src/icons`.
- [ ] Refactor the `ThemeSwitcher.astro` component to avoid code repetition and the use of `innerHTML`.
- [ ] Either redesign the button in `Accordion.astro` or rework the way skill groups are added in `pages/about.astro` so as to allow using custom SVG icons instead of emojis.
- [ ] Complete `en` localization.