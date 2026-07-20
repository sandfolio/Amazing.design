# Wireframe UI Kit

A runnable, clickable recreation of the **Wireframing Starter Kit** as a mobile app.
It demonstrates the kit's components assembled into a real flow — not a storybook.

## Run
Open `index.html`. The phone scales to fit the viewport.

**Flow:** Login → tap **Sign In** → tabbed app. Switch tabs (Home / Search / Saved /
Profile) in the bottom bar, tap any listing to open a **Detail** screen, **Save** it
(it appears under the Saved tab), and go **back**. Toggles on Profile are live.

## Files
| File | Contents |
|---|---|
| `index.html` | Loads React + Babel, tokens, icons; mounts the demo; fits the device to the viewport |
| `kit.css` | All component styles (`.k-*`) built on the design tokens |
| `components.jsx` | Presentational primitives → `window`: `DeviceFrame`, `StatusBar`, `HomeIndicator`, `TopNav`, `TabBar`, `Button`, `Input`, `Toggle`, `Checkbox`, `Radio`, `Chip`, `SectionTitle`, `ImagePlaceholder`, `Avatar`, `ListRow`, `MediaCard`, `SettingRow`, `Icon` |
| `screens.jsx` | Composed screens: `LoginScreen`, `HomeScreen`, `DetailScreen`, `SearchScreen`, `SavedScreen`, `ProfileScreen` |
| `app.jsx` | App state + navigation (auth, tabs, detail, saved set) |

## Conventions
- **Icons:** `<Icon name="search" />` (wraps the `<wf-icon>` web component). Any Heroicon
  in `assets/wf-icons.js` works; color via `style={{color}}`, size via `fontSize`.
- **Styling:** classes from `kit.css`; dynamic bits via inline style. No `styles` global
  object (avoids Babel scope collisions).
- **Tokens:** every value traces to `../../colors_and_type.css`. Don't hard-code colors.

## Coverage vs. the source
The source Figma also includes desktop/finance, e-commerce and form layouts. This kit
covers the **mobile** surface end-to-end; desktop and e-commerce are intentionally left
out (extend by composing the same primitives at wider widths). Component coverage —
device chrome, nav, inputs, controls, chips, lists, cards, placeholders, settings — is
complete.
