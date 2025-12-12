# UNA — Design System Usage Guide

This guide explains **how to use the Tailwind + Design System setup** inside the UNA portfolio.

The goal is:
- visual consistency
- zero hardcoded values
- easy scalability
- clean collaboration in team

---

## 1️⃣ Core Principles

Before writing any UI code, keep these rules in mind:

- ❌ No hardcoded colors (`#fff`, `#000`, `bg-red-500`, etc.)
- ❌ No inline styles
- ✅ Use semantic Tailwind classes mapped to design tokens
- ✅ Use gradients only through predefined utilities

> If you need a new color or spacing, **add a token**, do not hardcode it.

---

## 2️⃣ Global Styles Entry Point

All styles are loaded from **one single entry**:

```ts
// main.tsx
import "./styles/index.css";
```

You must **never import CSS files inside components**.

---

## 3️⃣ Background & Text Colors

### Page Background

```tsx
<div className="bg-bg">
```

### Main Text

```tsx
<p className="text-text">
```

### Paragraph / Secondary Text

```tsx
<p className="text-text-muted">
```

---

## 4️⃣ Brand Gradients

Gradients are part of the **brand identity** and must be used consistently.

### Primary Background Gradient

```tsx
<div className="bg-primary-gradient">
```

Use for:
- hero sections
- highlights
- CTA areas

---

### Gradient Text (Headlines Only)

```tsx
<h1 className="bg-text-gradient bg-clip-text text-transparent">
  UNA Portfolio
</h1>
```

Use for:
- main titles
- hero headlines
- important numbers or labels

---

## 5️⃣ Spacing System (8pt Grid)

Spacing follows an **8pt-based system** via tokens.

### Examples

```tsx
<div className="p-4">     {/* 16px */}
<div className="space-y-6"> {/* 32px */}
```

Avoid arbitrary spacing like `p-[13px]`.

---

## 6️⃣ Border Radius & Shadows

### Border Radius

```tsx
<div className="rounded-md">
<div className="rounded-lg">
```

### Shadows

```tsx
<div className="shadow-sm">
<div className="shadow-md">
```

These are mapped to design tokens and must be preferred over custom values.

---

## 7️⃣ Component Styling Rules

### ✅ Correct

```tsx
const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-md bg-bg-muted p-4 shadow-sm">
      {children}
    </div>
  );
};

export { Card };
```

### ❌ Incorrect

```tsx
<div style={{ background: '#000', padding: '14px' }} />
```

---

## 8️⃣ Typography Guidelines

- Headings → can use gradient text
- Body text → always solid color
- Paragraphs → `text-text-muted`

Example:

```tsx
<h2 className="text-text text-xl font-semibold">
  Section title
</h2>

<p className="text-text-muted">
  Section description
</p>
```

---

## 9️⃣ When You Need a New Token

If you need:
- a new color
- a new gradient
- a new spacing

### DO THIS
1. Add a CSS variable in `tokens.css`
2. Map it in `tailwind.config.ts`
3. Use it via Tailwind class

### DO NOT
- hardcode values in components

---

## 🔟 Common Mistakes to Avoid

- Using `bg-gradient-to-r` with Tailwind colors
- Using hex values directly
- Importing CSS inside components
- Creating one-off utility classes

---

## ✅ Final Checklist (Before Commit)

- No hardcoded colors
- No inline styles
- Uses only design tokens
- ESLint passes
- Prettier formatted

---

## 🧠 Philosophy

> Tailwind is the tool.
> Tokens are the system.
> Consistency is the product.

— **UNA**

