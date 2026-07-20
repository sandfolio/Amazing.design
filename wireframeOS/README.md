# Wireframing Starter Kit — Design System

A low-fidelity **wireframing** UI kit for designing app flows fast. Everything is
monochrome line-art on white: a single blue-gray "ink" carries every stroke, label
and icon, and one yellow "annotation" accent is the only chroma. The aesthetic is
deliberately un-styled — it reads as *structure*, not *visual design*, so stakeholders
focus on layout and flow instead of color and polish.

> **Use this system to design wireframes for apps** — mobile screens, desktop layouts,
> forms, flows — and to annotate them with comments, sticky notes and spec callouts.

## Source

- **Figma:** "Wireframe UI Kit.fig" — "Wireframing Starter Kit" (pages: Welcome, Components, Building-blocks).
  Provided as a mounted read-only file; not a public URL. 396 local components, ~3,300 nodes.
- Built on **Heroicons** (v1 outline set) for iconography and **Inter** for all type.
- No code repository was provided — this system is reconstructed from the Figma file only.

---

## CONTENT FUNDAMENTALS

Wireframe copy is **placeholder-first and literal**. Its job is to label structure, not to sell.

- **Tone:** neutral, descriptive, functional. Text names the *role* of an element ("Button label",
  "List item title", "Supporting detail", "Image placeholder") rather than real product copy.
- **Casing:** Sentence case for body, labels and most buttons ("Sign In", "Button label",
  "Forgot Password"). A small **ALL-CAPS heavy label** style exists for tags/eyebrows ("HEAVY").
- **Person:** mostly impersonal/system voice ("Notifications", "Emails", "Search"). When demoing
  forms, second-person field labels are fine ("Email", "Password").
- **Placeholders:** lorem-style filler is expected — e.g. *"Most fonts have a particular weight
  which corresponds to one of the numbers in the common weight name mapping."* Sample data uses
  obvious dummy values: `email@gmail.com`, `mattsmith@mail.com`, `● ● ● ● ● ●`, "Menu item 1…4",
  "Financial product", "$00.00".
- **Emoji:** none in the UI. (The source Figma uses 🔄 only in internal layer names, never on canvas.)
- **Vibe:** "blueprint." Calm, even, low-contrast. Nothing shouts. The yellow accent is reserved for
  *meta* layers (annotations, ratings, the selected/on state), never for primary content.

---

## VISUAL FOUNDATIONS

**Color.** One ink does almost everything: `#545F71` (blue-gray) for strokes, text, icons and
filled controls. Darker `#2A3A53` is reserved for the display wordmark. Fills are `#EEF1F4`
(light gray) and white. Placeholder/secondary text is `#9BA5B7`; device bezels and hairlines use
`#BAC0CA`. The **only** chroma is annotation yellow `#F6CA56` (handles use a deeper `#F6BE2C`).
See `colors_and_type.css`.

**Type.** **Inter** for everything — 400/500/600/700/800. Tracking is consistently tight
(−0.01em body, −0.02em controls/headings). Artboard titles are Inter Bold 28px. The marquee
wordmark on the cover is a heavy grotesque (Silka in the original — **substituted with Inter 800**,
see Caveats). Anek Latin appears in a few secondary headings.

**Spacing.** 8-pt base scale (4 / 8 / 12 / 16 / 24 / 32 / 48). Generous internal padding;
controls are 48px tall, list rows ~72px.

**Backgrounds.** Almost always flat white. No photos, no gradients (the cover has one faint
white radial vignette only), no textures, no illustrations. Imagery is represented by the classic
**cross-box placeholder** — a rectangle with an X drawn corner-to-corner. Avatars are a circle with
a user glyph.

**Borders.** The signature element. Default control outline is **1.5px solid ink**. Hairline
dividers are 1px in `#EEF1F4`. Annotation/spec frames are **1px dashed yellow**. Device frames are
a thick (~16px) `#BAC0CA` bezel.

**Corner radii.** sm 8px (chips, swatches), md 12px (buttons, inputs, cards), lg 24px (sheets,
nav bars, device screens), pill 999px (pill buttons, toggles).

**Shadows / elevation.** Mostly flat. Shadows are faint and rare: a subtle `inset` on pressed
filled swatches, a soft `0 4px 12px` for menus/popovers, and a stronger `0 7px 12px rgba(64,80,106,.5)`
only on the cursor/selection marquee chip. No glows.

**Transparency & blur.** Used sparingly — overlay scrims and the occasional `backdrop-filter: blur`
behind floating bars on the cover. Not part of everyday wireframes.

**Animation.** None implied by the static kit. For prototypes, keep motion minimal and mechanical:
quick (120–160ms) opacity/translate fades, standard ease; no bounces, no decorative loops.
Wireframes should feel like paper.

**Hover / press states.** Lightweight. Hover = slight fill (`#EEF1F4`) or +1 ink weight; press =
brief opacity dip or the `inset` shadow on filled controls. **Disabled = 40% opacity.** Selected/
active = filled ink (white content) or the yellow accent for toggles/ratings.

**Cards.** White surface, 1.5px ink border, 12px radius, no shadow. Media cards split a cross-box
placeholder header from a text body with a 1.5px divider. List rows stack with 1px `#EEF1F4` dividers.

**Layout rules.** Mobile frames are 375×812 inside a 16px bezel. Status bar / home indicator are
fixed top and bottom. Bottom tab bars and top nav bars are fixed, full-width, 24px-radius surfaces.

---

## ICONOGRAPHY

The kit uses **Heroicons** (the v1 outline family — `AcademicCap`, `BadgeCheck`, `ChevronDown`, etc.),
exported from Figma as flattened single-path SVGs that fill with `currentColor`. There is **no icon
font**; icons are SVG. **No emoji** and **no unicode glyphs** are used as icons anywhere on canvas.

- A curated ~44-icon set is copied into `assets/icons/*.svg`.
- They are served through a tiny web component — `<wf-icon name="search"></wf-icon>` (see
  `assets/wf-icons.js`) — which **inlines** the SVG so it inherits CSS `color` and scales with
  `font-size`/`width`. **Do not** load these icons via CSS `mask` or `<img>`: `mask` proved
  unreliable in this rendering environment, and `<img>` forces them black. Inline SVG is the rule.
- Directional chevrons (`chevron-left/right/up`) share the base *down* chevron art and are produced
  by rotating it — the component handles this automatically.
- Need an icon that isn't copied yet? Pull it from the Figma `Components/components/<Name>/Icon.svg`
  (Heroicons), or grab the matching Heroicon from heroicons.com (outline). Keep the same hairline
  stroke style.

---

## INDEX — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — context, content + visual rules, iconography, index |
| `colors_and_type.css` | All design tokens (color, type, radius, stroke, shadow, spacing) + `.wf-*` type classes + `<wf-icon>` styling. **Import this first.** |
| `assets/wf-icons.js` | `<wf-icon>` web component + inlined Heroicons set |
| `assets/icons/*.svg` | Curated Heroicons source SVGs |
| `assets/logo-*.svg`, `assets/wordmark.svg` | Wireframing Starter Kit wordmarks |
| `assets/cursor-pointer.svg` | Pointer cursor (annotation motif) |
| `preview/*.html` | Design-system specimen cards (Type, Colors, Spacing, Components, Brand) shown in the Design System tab |
| `ui_kits/wireframe/` | The UI kit — runnable wireframe components + an interactive demo (`index.html`) |
| `SKILL.md` | Agent-Skills manifest so this system works in Claude Code |

### UI kits
- **`ui_kits/wireframe/`** — the core wireframe component library (device frame, nav bars, inputs,
  buttons, controls, lists, cards, placeholders) assembled into a clickable multi-screen mobile demo.

---

*Design content (layer names, sample copy) originates from the Figma file's author and is reproduced
here only to recreate the kit.*
