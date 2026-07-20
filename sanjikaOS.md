---
name: sanjika-os
description: Apply design system — colors, typography, spacing, Buttons and component patterns — to any HTML page or Figma design.

---

## Core Brand Rules (non-negotiable)

1. **Canvas is warm off-white** (`#efede4`) — never pure white or grey.
2. **One typeface: Archivo** for all display, heading, and body text.
3. **IBM Plex Mono** for code, data labels, and technical strings only.
4. **One primary CTA color: terracotta** (`#b7613a`). No other color should compete with it as a call-to-action.
5. **Sharp corners by default** (`border-radius: 0`). Use `0.75rem` / `1rem` only on modals, cards, and popovers.
6. **Sentence case for all headings** — no Title Case, no ALL CAPS except short ≤3-word overlines/labels.
7. **Borders are ink at low opacity**, not grey hex values. Use `--line` or `--line2`.

---

## Google Fonts Import

Paste this in `<head>` before any other styles:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## CSS Custom Properties

Paste this `:root` block into your stylesheet. Every other rule references these vars — never hardcode hex values in component styles.

```css
:root {
  /* ── Surfaces ────────────────────────────────────────── */
  --bg:   #efede4;   /* primary canvas — warm off-white     */
  --bg2:  #e7e4d8;   /* secondary surface / muted bg        */
  --card: #f7f6f0;   /* card / popover background           */

  /* ── Ink (text + foreground) ─────────────────────────── */
  --ink:  #0e1e30;   /* primary text                        */
  --ink2: #42505f;   /* secondary text                      */
  --mut:  #6b7785;   /* muted / placeholder text            */
  --rev:  #5a6e8c;   /* text on dark surfaces               */
  --revd: #465a78;   /* deep reverse / dark-surface labels  */

  /* ── Accent (CTA + brand color) ─────────────────────── */
  --accent: #b7613a; /* primary CTA — terracotta            */
  --accl:   #e8a079; /* accent light — hover / tint         */

  /* ── Semantic ───────────────────────────────────────── */
  --good: #6e8e63;   /* success / positive                  */
  --fin:  #7e9670;   /* finance positive (lighter)          */
  --find: #67805a;   /* finance positive (darker)           */
  --destructive: #c0392b; /* error / danger                */

  /* ── Borders / Dividers ─────────────────────────────── */
  --line:  #0e1e3024; /* divider — 14% ink opacity          */
  --line2: #0e1e3012; /* subtle divider — 7% ink opacity    */

  /* ── Data / Badge accent colors ─────────────────────── */
  --data-blue:   #3080ff;
  --data-cyan:   #3BD6FF;
  --data-orange: #fe6e00;
  --data-purple: #ac4bff;
  --data-green:  #00c758;
  --data-red:    #c0392b;

  /* ── Typography ─────────────────────────────────────── */
  --disp: "Archivo", sans-serif;
  --mono: "IBM Plex Mono", monospace;

  /* Mono sizes */
  --mono-sm: 0.875rem;    /* 14px  — Label / Mono / Small   */
  --mono-xs: 0.65625rem;  /* 12px  — Label / Mono / XS      */

  /* ── Font Weights ───────────────────────────────────── */
  --weight-normal:   400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
  --weight-black:    900;

  /* ── Letter Spacing ─────────────────────────────────── */
  --tracking-tight:   -0.025em; /* large headings            */
  --tracking-default: -0.015em; /* subheadings               */
  --tracking-wide:    0.06em;   /* labels / overlines        */
  --tracking-widest:  0.14em;   /* mono labels / data tags   */

  /* ── Line Height ────────────────────────────────────── */
  --leading-hero:   0.98;  /* hero headlines — very tight  */
  --leading-tight:  1.1;   /* display headings             */
  --leading-snug:   1.2;   /* H2/H3                        */
  --leading-normal: 1.5;   /* body text                    */
  --leading-relaxed:1.625; /* long-form paragraphs         */

  /* ── Spacing (4px base) ─────────────────────────────── */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-16: 64px;

  /* ── Border Radius ──────────────────────────────────── */
  --radius:    0;          /* default — sharp corners       */
  --radius-xl: 0.75rem;   /* cards, dropdowns              */
  --radius-2xl:1rem;      /* modals, popovers              */
}
```

---

## Figma Token Reference

### Color Tokens

| Token Name       | Hex Value  | Opacity | Role / Usage                        |
|------------------|-----------|---------|-------------------------------------|
| bg               | `#efede4`  | 100%    | Page canvas, primary surface        |
| bg2              | `#e7e4d8`  | 100%    | Secondary surface, muted areas      |
| card             | `#f7f6f0`  | 100%    | Card, popover, panel background     |
| ink              | `#0e1e30`  | 100%    | Primary text & icons                |
| ink2             | `#42505f`  | 100%    | Secondary labels, captions          |
| mut              | `#6b7785`  | 100%    | Placeholder, disabled text          |
| rev              | `#5a6e8c`  | 100%    | Text on dark / navy surfaces        |
| revd             | `#465a78`  | 100%    | Deep dark-surface labels            |
| accent           | `#b7613a`  | 100%    | **Primary CTA button, links, focus**|
| accent-light     | `#e8a079`  | 100%    | Hover state, tinted backgrounds     |
| good             | `#6e8e63`  | 100%    | Success state, positive metrics     |
| fin              | `#7e9670`  | 100%    | Finance / profit indicators (light) |
| find             | `#67805a`  | 100%    | Finance / profit indicators (dark)  |
| destructive      | `#c0392b`  | 100%    | Error, danger, destructive action   |
| line             | `#0e1e30`  | 14%     | Divider, border, separator          |
| line2            | `#0e1e30`  | 7%      | Subtle divider, ghost borders       |
| data-blue        | `#3080ff`  | 100%    | Chart series, feature badge: blue   |
| data-cyan        | `#3BD6FF`  | 100%    | Highlight / AI indicator            |
| data-orange      | `#fe6e00`  | 100%    | Chart series / warning badge        |
| data-purple      | `#ac4bff`  | 100%    | Chart series / premium badge        |
| data-green       | `#00c758`  | 100%    | Chart series / growth badge         |

### Typography Tokens

| Token         | Style Name           | Font Family    | Size (rem)         | Size (px) | Weight | Line Height | Letter Spacing | Usage                        |
|---------------|----------------------|----------------|--------------------|-----------|--------|-------------|----------------|------------------------------|
| --text-d1     | Display              | Archivo        | clamp(2.25–4rem)   | 36–64px   | 900    | 0.98        | −0.025em       | H1 hero headline             |
| --text-d2     | Heading              | Archivo        | clamp(1.625–2.5rem)| 26–40px   | 800    | 1.05        | −0.020em       | Section headings             |
| --text-h1     | H1                   | Archivo        | clamp(1.5–2.125rem)| 24–34px   | 700    | 1.1         | −0.015em       | Feature / card headings      |
| --text-h2     | H2                   | Archivo        | 1.875rem           | 28px      | 700    | 1.2         | −0.015em       | H2 heading                   |
| --text-h3     | H3                   | Archivo        | 1.5rem             | 24px      | 600    | 1.33        | −0.010em       | H3 heading                   |
| --text-b1     | Body Large           | Archivo        | 1.5rem             | 20px      | 400    | 1.67        | 0              | Large body / lead paragraph  |
| --text-b2     | Body Medium          | Archivo        | 1.125rem           | 18px      | 400    | 1.556       | 0              | Large body fixed             |
| --text-b4     | Body Base (fixed)    | Archivo        | 1rem               | 16px      | 400    | 1.5         | 0              | Standard body fixed          |
| --text-sm     | Small / Caption      | Archivo        | 0.875rem           | 16px      | 400    | 1.43        | 0              | Captions / metadata          |
| --text-xs     | Label / Overline     | Archivo        | 0.75rem            | 14px      | 600    | 1.33        | +0.060em       | Uppercase labels / overlines |
| --mono-sm     | Label / Mono / Small | IBM Plex Mono  | 0.875rem           | 14px      | 400    | 1.5         | +0.080em       | Code / data values / numbers |
| --mono-xs     | Label / Mono / XS    | IBM Plex Mono  | 0.65625rem         | 12px      | 500    | 1.4         | +0.180em       | Data tags / timestamps       |

---

## HTML Usage Examples

### Base Document Shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    /* paste :root block here */
    body {
      background: var(--bg);
      color: var(--ink);
      font-family: var(--disp);
      font-size: var(--text-b4);
      line-height: var(--leading-normal);
      margin: 0;
    }
  </style>
</head>
<body>...</body>
</html>
```

### Hero Section

```html
<section style="
  background: var(--bg);
  padding: var(--space-16) var(--space-6);
  max-width: 1280px;
  margin: 0 auto;
">
  <p style="
    font-family: var(--mono);
    font-size: var(--text-xs);
    letter-spacing: var(--tracking-widest);
    text-transform: uppercase;
    color: var(--mut);
    margin-bottom: var(--space-4);
  ">Operating Intelligence</p>

  <h1 style="
    font-family: var(--disp);
    font-size: var(--text-d1);
    font-weight: var(--weight-black);
    line-height: var(--leading-hero);
    letter-spacing: var(--tracking-tight);
    color: var(--ink);
    margin: 0 0 var(--space-6);
    max-width: 16ch;
  ">One Brain per client</h1>

  <p style="
    font-size: var(--text-b1);
    line-height: var(--leading-relaxed);
    color: var(--ink2);
    max-width: 52ch;
    margin: 0 0 var(--space-8);
  ">
    SaarthiOS reads across every system you already use
    so you can see and act on the whole business in real time.
  </p>

  <a href="#" style="
    display: inline-block;
    background: var(--accent);
    color: #fff;
    font-family: var(--disp);
    font-weight: var(--weight-semibold);
    font-size: var(--text-b4);
    padding: 14px 28px;
    border-radius: var(--radius);
    text-decoration: none;
    letter-spacing: -0.01em;
  ">Request access</a>
</section>
```

### Card

```html
<div style="
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
">
  <p style="
    font-family: var(--mono);
    font-size: 10.5px;
    letter-spacing: var(--tracking-widest);
    text-transform: uppercase;
    color: var(--mut);
    margin: 0 0 var(--space-3);
  ">Revenue · Q4</p>

  <p style="
    font-family: var(--disp);
    font-size: var(--text-h2);
    font-weight: var(--weight-bold);
    color: var(--ink);
    letter-spacing: var(--tracking-tight);
    margin: 0 0 var(--space-2);
  ">₹ 2.4 Cr</p>

  <p style="
    font-size: var(--text-sm);
    color: var(--good);
    font-weight: var(--weight-medium);
    margin: 0;
  ">↑ 18% vs last quarter</p>
</div>
```

### Button Variants

```html
<!-- Primary CTA -->
<button style="
  background: var(--accent);
  color: #fff;
  border: none;
  font-family: var(--disp);
  font-weight: var(--weight-semibold);
  font-size: var(--text-b4);
  padding: 12px 24px;
  border-radius: var(--radius);
  cursor: pointer;
  letter-spacing: -0.01em;
">Get started</button>

<!-- Secondary / Ghost -->
<button style="
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--line);
  font-family: var(--disp);
  font-weight: var(--weight-medium);
  font-size: var(--text-b4);
  padding: 12px 24px;
  border-radius: var(--radius);
  cursor: pointer;
">Learn more</button>

<!-- Outline Accent -->
<button style="
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
  font-family: var(--disp);
  font-weight: var(--weight-semibold);
  font-size: var(--text-b4);
  padding: 12px 24px;
  border-radius: var(--radius);
  cursor: pointer;
">View demo</button>
```

### Feature Badge (data category pills)

```html
<!-- Usage: wrap in flex gap -->
<span style="
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--mono); font-size: 11px; font-weight: 500;
  letter-spacing: var(--tracking-wide); text-transform: uppercase;
  background: #3080ff18; color: var(--data-blue);
  border: 1px solid #3080ff4d;
  padding: 3px 10px; border-radius: 0;
">Finance</span>

<span style="
  background: #ac4bff18; color: var(--data-purple);
  border: 1px solid #ac4bff4d;
  display: inline-flex; align-items: center;
  font-family: var(--mono); font-size: 11px; font-weight: 500;
  letter-spacing: var(--tracking-wide); text-transform: uppercase;
  padding: 3px 10px; border-radius: 0;
">CRM</span>

<span style="
  background: #00c75818; color: var(--data-green);
  border: 1px solid #00c75833;
  display: inline-flex; align-items: center;
  font-family: var(--mono); font-size: 11px; font-weight: 500;
  letter-spacing: var(--tracking-wide); text-transform: uppercase;
  padding: 3px 10px; border-radius: 0;
">Operations</span>
```

---

## Common Mistakes to Avoid

| Wrong | Correct |
|---|---|
| `background: #fff` | `background: var(--bg)` — the canvas is warm, not pure white |
| `border-radius: 8px` on buttons | `border-radius: var(--radius)` → 0 (sharp) |
| Using `font-family: Inter` | `font-family: var(--disp)` → Archivo |
| Hardcoding `color: #333` | `color: var(--ink)` or `var(--ink2)` |
| Muted text as `#999` | `color: var(--mut)` → `#6b7785` |
| Two CTA colors on the same page | One CTA: `--accent` only |
| ALL CAPS heading | Sentence case: "One Brain per client" |
| Borders as `#ddd` or `#e5e5e5` | `border-color: var(--line)` — ink at low opacity |

---

## Button Components

Two core variants. Always sharp corners (`border-radius: var(--radius)` → `0`). Never round buttons.

### btn-primary

Primary CTA — terracotta fill, white text.

```html
<button style="
  background: var(--accent);
  color: #fff;
  font-family: var(--disp);
  font-weight: var(--weight-semibold);
  font-size: var(--text-b4);
  padding: 14px 28px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  letter-spacing: -0.01em;
">Request access</button>
```

| Property | Token | Value |
|---|---|---|
| background | `var(--accent)` | `#b7613a` |
| color | — | `#fff` |
| font-family | `var(--disp)` | Archivo |
| font-weight | `var(--weight-semibold)` | `600` |
| font-size | `var(--text-b4)` | `1rem` |
| padding | — | `14px 28px` |
| border | — | `none` |
| border-radius | `var(--radius)` | `0` |

### btn-ghost

Secondary / ghost — transparent bg, ink text, subtle border.

```html
<button style="
  background: transparent;
  color: var(--ink);
  font-family: var(--disp);
  font-weight: var(--weight-medium);
  font-size: var(--text-b4);
  padding: 13px 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  cursor: pointer;
">See a demo</button>
```

| Property | Token | Value |
|---|---|---|
| background | — | `transparent` |
| color | `var(--ink)` | `#0e1e30` |
| font-family | `var(--disp)` | Archivo |
| font-weight | `var(--weight-medium)` | `500` |
| font-size | `var(--text-b4)` | `1rem` |
| padding | — | `13px 28px` |
| border | `var(--line)` | `1px solid rgba(14,30,48,0.14)` |
| border-radius | `var(--radius)` | `0` |
