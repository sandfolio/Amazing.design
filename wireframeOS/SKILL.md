---
name: wireframing-starter-kit-design
description: Use this skill to generate well-branded interfaces and assets for the Wireframing Starter Kit — a low-fidelity, monochrome blue-gray wireframing system for designing app flows. Use it for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, Heroicons, and UI kit components for prototyping wireframes.
user-invocable: true
---

Read the `README.md` file in this skill first — it covers the product context, content
fundamentals, visual foundations, iconography, and an index of every file. Then explore
the other files as needed.

Key files:
- `colors_and_type.css` — all design tokens (color, type, radius, stroke, shadow, spacing)
  plus `.wf-*` type classes and `<wf-icon>` styling. **Import this first** in any artifact.
- `assets/wf-icons.js` — the `<wf-icon name="…">` web component with inlined Heroicons.
  Always render icons this way (inline SVG inherits `color`); do **not** use CSS `mask`
  or `<img>` for these icons.
- `assets/` — wordmarks, cursor, and the Heroicon source SVGs.
- `preview/*.html` — specimen cards for every foundation and component.
- `ui_kits/wireframe/` — runnable wireframe components (React + Babel) and a clickable
  mobile demo; reuse `kit.css` + `components.jsx` to assemble new screens.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy the assets you
need and write static/standalone HTML files for the user to view. If working on production
code, copy assets and follow the rules here to design on-brand.

If the user invokes this skill without other guidance, ask what they want to build or
design, ask a few clarifying questions, then act as an expert designer who outputs HTML
artifacts or production code as appropriate.

**The brand in one line:** monochrome blue-gray line-art on white, 1.5px ink strokes,
Inter type, Heroicons, a single yellow accent reserved for annotations and on/selected
states. Calm, structural, "blueprint" — never polished or colorful.
