# Search Box Vue

A responsive, accessible **single-page application** for searching articles, with matched terms **highlighted in results**.

Designed with a mobile-first approach, clean visual hierarchy, and full support for system-preference-based **light/dark mode** 🌓.

> 💡 **Theme note**: The app automatically follows your OS color scheme (light or dark). Toggle your system theme to see the UI adapt instantly!

![Local Preview](https://img.shields.io/badge/local-http://localhost:5173-blue?logo=vite)

## 📦 Tech Stack

- [Vue 3](https://vuejs.org/): Reactive, component-based UI framework.
- [TypeScript](https://www.typescriptlang.org/): Static typing for enhanced reliability and DX.
- [Vite](https://vitejs.dev/): Next-gen build tool & dev server.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [DaisyUI](https://daisyui.com/): Tailwind component library with pre-made components and built-in dark mode & themes.

## ✨ Features

- Fully responsive layout (stacks on mobile, expands on desktop)
- Search input with icon and clear (×) button
- Article cards with consistent spacing and shadows
- Empty state with helpful icon and message
- Real-time result count feedback
- Matched search terms highlighted in article previews
- Auto light/dark mode based on system preference
- Built with **[DaisyUI](https://daisyui.com/)** + **[Tailwind CSS](https://tailwindcss.com/)**
- TypeScript support with strict type checking
- Uses Vue 3 `<script setup>` syntax

## ⚡ Why Vite?

This project uses **[Vite](https://vitejs.dev/)** as the build tool and dev server because:
- ⚡ **Blazing-fast cold starts** and HMR (Hot Module Replacement)
- 🧪 **Transpile-only TypeScript** during development (no type-checking slowdown)
- 📦 First-class support for Vue 3, TypeScript, and modern web standards

> Vite ensures you get the fastest possible dev experience while maintaining full type safety through tooling like `vue-tsc` and your IDE.

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/your-username/search-box-vue.git
cd search-box-vue
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the dev server**
```bash
npm run dev
```

Open your browser to **[http://localhost:5173](http://localhost:5173)**

## 🛠️ Scripts

| Command          | Description                                  |
|------------------|----------------------------------------------|
| `npm run dev`    | Starts the Vite dev server                   |
| `npm run build`  | Builds the app for production                |
| `npm run preview`| Locally previews the production build        |

## 📚 Learn More

- [Vue 3 `<script setup>` docs](https://vuejs.org/api/sfc-script-setup.html)
- [Vue + TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup)
- [Conventional Commits](https://www.conventionalcommits.org/) — This project follows `feat:`, `fix:`, etc. for clear changelogs and semantic versioning.
