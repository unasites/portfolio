# UNA — Portfolio Website

Official portfolio of **UNA**, built with a modern tech stack and strict code conventions designed for
team collaboration, scalability, and long-term maintainability.

---

## 🧱 Tech Stack

### Core

* React
* Vite
* TypeScript

### Styling

* Tailwind CSS
* PostCSS
* Autoprefixer

### Code Quality

* ESLint (Flat Config)
* Prettier
* EditorConfig

### Tooling

* pnpm
* Husky
* lint-staged

---

## 📁 Project Structure

```txt
src/
├─ app/            # Root application logic (App.tsx, providers, router)
├─ components/     # Reusable UI components
├─ pages/          # Route-level components
├─ hooks/          # Custom React hooks
├─ services/       # API / business logic
├─ utils/          # Utilities (cn, helpers, etc.)
├─ styles/         # Global styles (Tailwind entry)
├─ types/          # Shared TypeScript types
└─ assets/         # Static assets
```

---

## 🧠 Code Style & Conventions

This project follows **strict and shared rules**.

### General Rules

* ✅ **Arrow functions only**
* ❌ No `function` declarations
* ❌ No explicit `any`
* One responsibility per file
* No inline styles
* No logic inside CSS

### React

* Components must be **arrow functions only**
* Hooks are validated by ESLint
* Vite Fast Refresh compatible

### Formatting

* Prettier formats code automatically **on save**
* ESLint handles **code quality only**
* `.editorconfig` ensures consistency across editors

---

## 🎨 Styling Guidelines

* Utility-first approach with Tailwind CSS
* No hardcoded colors
* Design system defined in `tailwind.config`
* Responsive-first mindset

---

## 🔍 Linting & Formatting

### ESLint

ESLint checks for:

* incorrect hook usage
* explicit `any`
* `console.log`
* `debugger`
* violations of UNA code rules

Run manually:

```bash
pnpm lint
```

Automatic fixes:

```bash
pnpm lint:fix
```

---

### Prettier

* Enabled **on save**
* Configured via `.prettierrc`
* Handles formatting only, not logic

---

## 🔒 Pre-commit Hook

Before every commit:

* ESLint runs automatically
* Commits are blocked if errors are found

Configured with:

* Husky
* lint-staged

---

## ▶️ Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm lint       # Run ESLint
pnpm lint:fix   # Run ESLint with auto-fix
```

---

## 👥 Team Setup (VS Code)

This project includes **workspace-level configuration**.

Recommended extensions:

* ESLint
* Prettier
* Tailwind CSS IntelliSense

Workspace settings are defined in:

```txt
.vscode/settings.json
```

---

## 📜 License

The source code of this project is licensed under the
**Apache License 2.0**.

Design, branding, logos, images, and textual content are
© UNA. All rights reserved.
Reuse is not permitted without explicit permission.

---

## 🚀 Final Notes

This project is designed for:

* team collaboration
* consistent code quality
* scalability
* long-term maintenance

If something does **not comply with the rules**, ESLint will report it.

> *Write less rules, enforce them better.*

— **UNA**
