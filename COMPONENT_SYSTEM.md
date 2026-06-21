# COMPONENT SYSTEM

Design-system specification for the Raghav Arora portfolio.

- **Primary system:** Direction C (Product & Engineering Leader) — light + structured, Stripe-grade clarity.
- **Borrowed:** mono numerals + dashboard metric styling (Direction B).
- **Modes:** Polished light (default) + polished dark.
- **Goal:** Premium, recruiter-first experience for TPM / Program Manager / Product Operations / Startup Operator audiences.

> This is a specification only — no implementation. Values are expressed as named tokens with concrete reference values so they can be mapped 1:1 to any styling layer later.

---

## 1. Design Tokens — Color

### 1.1 Light mode (default)

| Token | Value | Usage |
|---|---|---|
| `--color-canvas` | `#FFFFFF` | Page background |
| `--color-surface` | `#F6F8FA` | Alternating bands, metric/dashboard band |
| `--color-elevated` | `#FFFFFF` | Cards (with shadow) |
| `--color-ink` | `#1A1F36` | Headings / strongest text |
| `--color-body` | `#3C4257` | Body copy |
| `--color-muted` | `#697386` | Secondary labels, captions |
| `--color-border` | `#E3E8EE` | Hairlines, card borders |
| `--color-accent` | `#2563EB` | Links, primary CTA, key emphasis |
| `--color-accent-hover` | `#1D4FD7` | Accent hover |
| `--color-accent-weak` | `#EEF3FF` | Accent tint backgrounds (chips, focus) |
| `--color-success` | `#1A8245` | Availability dot only |
| `--color-focus-ring` | `#2563EB` | Focus outline (2px) |

### 1.2 Dark mode (polished)

| Token | Value | Usage |
|---|---|---|
| `--color-canvas` | `#0A0E1A` | Page background |
| `--color-surface` | `#111726` | Bands / dashboard band |
| `--color-elevated` | `#151B2C` | Cards |
| `--color-ink` | `#F7FAFC` | Headings |
| `--color-body` | `#C2CAD6` | Body copy |
| `--color-muted` | `#8A93A6` | Secondary labels |
| `--color-border` | `#222A3D` | Hairlines, card borders |
| `--color-accent` | `#7B8CFF` | Links, primary CTA |
| `--color-accent-hover` | `#93A1FF` | Accent hover |
| `--color-accent-weak` | `#1A2138` | Accent tint backgrounds |
| `--color-success` | `#3FB950` | Availability dot |
| `--color-focus-ring` | `#7B8CFF` | Focus outline |

**Rules**
- Exactly **one** accent color in use per mode; accent covers ≤5% of visible surface.
- **No gradients** except an optional single subtle border-gradient on the primary CTA and an ≤4% radial light behind the hero.
- All text/background pairs must meet **WCAG AA (≥4.5:1)**; large headings ≥3:1.

---

## 2. Design Tokens — Typography

### 2.1 Families

| Token | Stack | Role |
|---|---|---|
| `--font-display` | "Manrope", "Inter", system-ui, sans-serif | Headings (H1–H3) |
| `--font-sans` | "Inter", system-ui, -apple-system, sans-serif | Body / UI |
| `--font-mono` | "Geist Mono", "JetBrains Mono", ui-monospace, monospace | Metric numerals, kickers, dates, tags |

### 2.2 Type scale (1.25 ratio)

| Token | Size / Line | Weight | Tracking | Use |
|---|---|---|---|---|
| `--text-display` | 54 / 58 | 700 | -0.02em | Optional oversized hero |
| `--text-h1` | 42 / 46 | 700 | -0.015em | Hero name, page title |
| `--text-h2` | 30 / 36 | 600 | -0.01em | Section titles |
| `--text-h3` | 22 / 28 | 600 | -0.005em | Card titles, role titles |
| `--text-body-lg` | 18 / 30 | 400 | 0 | Hero subhead, intros |
| `--text-body` | 16 / 26 | 400 | 0 | Default body |
| `--text-small` | 14 / 22 | 400/500 | 0 | Secondary text |
| `--text-caption` | 13 / 18 | 500 | 0 | Captions, footnotes |
| `--text-kicker` | 12 / 16 | 600 | 0.08em (UPPERCASE) | Section kickers (mono) |
| `--text-metric` | 36 / 40 | 600 (mono) | -0.01em | Metric numerals (desktop) |
| `--text-metric-sm` | 28 / 32 | 600 (mono) | -0.01em | Metric numerals (mobile) |

### 2.3 Responsive scaling
- H1 scales: 42 (desktop) → 36 (tablet) → 32 (mobile).
- H2 scales: 30 → 28 → 24.
- Metric numerals: 36 → 32 → 28.
- Body measure capped at ~68ch; headings ~24ch.
- Numerals everywhere quantitative use `--font-mono` with tabular figures.

---

## 3. Design Tokens — Spacing

8px base grid.

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 88px |
| `--space-10` | 128px |

**Layout tokens**

| Token | Value | Use |
|---|---|---|
| `--container-max` | 1140px | Desktop content width |
| `--gutter` | 24px | Grid gutters / page padding (desktop/tablet) |
| `--gutter-mobile` | 16px | Page padding (mobile) |
| `--section-y` | 88px | Section vertical padding (desktop) |
| `--section-y-tablet` | 64px | Section vertical padding (tablet) |
| `--section-y-mobile` | 56px | Section vertical padding (mobile) |
| `--radius-sm` | 8px | Chips, inputs |
| `--radius-md` | 10px | Cards |
| `--radius-lg` | 14px | Large panels (hero proof panel) |
| `--scroll-margin` | 80px | Anchor offset for sticky nav |

**Grid:** 12 columns desktop, ~8 effective at tablet, 1 column mobile. Sections visibly snap to columns (Stripe-like order).

---

## 4. Elevation & Borders

| Token | Light | Dark |
|---|---|---|
| `--shadow-card` | `0 1px 3px rgba(26,31,54,0.08)` | `0 1px 3px rgba(0,0,0,0.4)` |
| `--shadow-card-hover` | `0 4px 12px rgba(26,31,54,0.12)` | `0 6px 16px rgba(0,0,0,0.5)` |
| `--border-hairline` | `1px solid var(--color-border)` | `1px solid var(--color-border)` |

No glows. No colored shadows (the old purple/pink glow is removed entirely).

---

## 5. Motion Tokens & Animation Philosophy

| Token | Value |
|---|---|
| `--motion-fast` | 150ms |
| `--motion-base` | 250ms |
| `--motion-slow` | 400ms |
| `--ease-standard` | cubic-bezier(0.2, 0.0, 0.2, 1) |
| `--ease-emphasis` | cubic-bezier(0.2, 0.8, 0.2, 1) |
| `--stagger` | 40ms |

**Philosophy — "Clarity in motion":**
- Entrance: fade + translate-up (8–12px), **once**, on first scroll into view. Optional 40ms stagger for grids.
- Hover: borders, elevation, underline — micro only.
- Metrics: a single, fast count-up allowed (≤1.2s, runs once). No looping numbers.
- **Forbidden:** infinite/looping animations, parallax, particles, floating icons, rotating rings, pulsing glows, typewriter rotation.
- **Accessibility:** all motion gated behind `prefers-reduced-motion: reduce` → fall back to instant opacity with no transform.

---

## 6. Components

### 6.1 Buttons

**Variants**

| Variant | Light | Dark | Use |
|---|---|---|---|
| Primary | bg `--color-accent`, text `#FFFFFF` | bg `--color-accent`, text `#0A0E1A` | "View Résumé", "Email Raghav" |
| Secondary (ghost/outline) | transparent, `1px --color-border`, text `--color-ink` | same with dark tokens | "Get in touch", "Book a call" |
| Tertiary (text/link) | text `--color-accent`, no border | text `--color-accent` | "View GitHub", inline links |

**Anatomy & sizing**
- Height: 44px (default), 52px (hero primary). Padding: `0 var(--space-5)`.
- Radius: `--radius-sm` (8px). Font: `--text-small` weight 600.
- Icon optional, 16px, leading, `--space-2` gap.
- Min tap target 44×44 on all breakpoints. Full-width on mobile for primary/secondary.

**States**

| State | Primary | Secondary | Tertiary |
|---|---|---|---|
| Default | accent fill | hairline border | accent text |
| Hover | bg `--color-accent-hover`, no scale | border→accent, bg `--color-accent-weak` | underline appears |
| Active/Pressed | brightness −4%, translateY(1px) | same | — |
| Focus-visible | 2px `--color-focus-ring` offset 2px | same | same |
| Disabled | opacity 0.5, no pointer | opacity 0.5 | opacity 0.5 |

> No `whileHover` scale/lift on buttons (removes the old bouncy student feel). Motion is color/border only.

### 6.2 Cards (generic surface)

- Background `--color-elevated`, `--border-hairline`, radius `--radius-md` (10px), shadow `--shadow-card`.
- Padding: `--space-5` to `--space-6` (24–32px).
- Title `--text-h3`, body `--text-body`, muted meta `--text-small`/`--color-muted`.
- **Hover:** shadow → `--shadow-card-hover`, border → accent-tinted; **no scale**, optional translateY(-2px) max for interactive cards only.
- **Variants:**
  - *Pillar card* (About): title + one supporting line, no media.
  - *Work card*: title → problem line → role·stack → result → links row (tertiary buttons). Optional thumbnail with hairline frame (no full-bleed dark gradient overlay).
  - *Data card*: optional 2px accent top-border for emphasis.

### 6.3 Metrics Cards (dashboard band) — borrowed from Direction B

- Live in a `--color-surface` band ("Impact at a glance").
- Each cell: **mono numeral** (`--text-metric`, `--font-mono`, `--color-ink`) above a **muted label** (`--text-small`, `--color-muted`), separated by a hairline `·····`.
- Grid: 5-up desktop → 3-up tablet → 2-up mobile.
- Optional thin top accent rule per cell; otherwise flat (no card shadow needed in the band).
- Count-up: single run, ≤1.2s, tabular figures so width doesn't shift; disabled under reduced-motion.
- **Only SOT metrics** permitted (10k+ users, 12+ engineers, 25+ features, 200+ deployments, 100+ apps, 200+ client engagements, 30+ issues/mo). No invented stats; no GitHub vanity counts.

### 6.4 Timeline (Experience)

- Single vertical rail (1px `--color-border`) on the left of the content column.
- **Node** per role: 10px filled dot, `--color-accent`; aligned to role title baseline.
- Each entry: role title `--text-h3` → org `--color-body` → **dates right-aligned, mono** (`--font-mono`, `--color-muted`) → outcome bullets (`--text-body`, custom 6px accent bullet marker).
- Spacing between entries: `--space-7` (48px). Bullet list gap `--space-2`.
- Responsive: desktop dates right-aligned on same row as title; tablet/mobile dates wrap beneath title (still mono). Rail persists on all breakpoints.
- No icons in nodes (avoids decorative/icon-grid feel); the dot is the only ornament.

### 6.5 Navigation

- **Structure:** left wordmark "Raghav Arora" (`--text-h3`, `--color-ink`, no gradient) · center/right anchor links · right primary "Résumé" button.
- **Height:** 64px desktop / 56px mobile. Sticky.
- **Scroll behavior:** transparent over hero → on scroll past 50px, background becomes `--color-canvas` at 85% with backdrop blur + bottom `--border-hairline`.
- **Active section:** anchor text → `--color-ink` weight 600 with a 2px accent underline (no filled pill). Inactive → `--color-muted`, hover → `--color-ink`.
- **Mobile:** hamburger → full-screen sheet (`--color-canvas`), stacked anchors `--text-h3`, divider, full-width "View Résumé" primary button at bottom.
- **Keyboard:** all anchors focusable, visible focus ring; sheet traps focus when open; Esc closes.

### 6.6 Inputs (Contact, if a form is used)

- Height 44px, radius `--radius-sm`, `--border-hairline`, bg `--color-canvas`.
- Focus: border `--color-accent` + 2px focus ring; label `--text-small`/`--color-muted` above field.
- Error state: border `#D14343` (light) / `#F87171` (dark) + helper text.

### 6.7 Chips / Tags (Capabilities, Work stack)

- Mono or sans `--text-caption`, padding `2px 8px`, radius `--radius-sm`, `--border-hairline`, bg `--color-accent-weak` (subtle).
- Non-interactive by default; no hover lift.

### 6.8 Availability indicator

- 8px dot `--color-success` + label `--text-small`. **Static** (no pulse animation).

---

## 7. Hover & Interaction State Matrix

| Element | Rest | Hover | Focus-visible | Active |
|---|---|---|---|---|
| Primary button | accent fill | `--color-accent-hover` | 2px ring offset 2px | translateY(1px), −4% bright |
| Secondary button | hairline | border→accent, bg accent-weak | 2px ring | translateY(1px) |
| Text link | accent text | underline in | ring | — |
| Nav anchor | muted | ink color | ring | underline (if active) |
| Generic card | shadow-card | shadow-hover + accent border | ring (if interactive) | — |
| Work card (clickable) | shadow-card | shadow-hover + translateY(-2px) | ring | — |
| Metric cell | static | static (non-interactive) | — | — |
| Chip | subtle bg | static | — | — |

Global rule: **no scale transforms** on hover anywhere; elevation/border/color changes only. All transitions use `--motion-fast` or `--motion-base` with `--ease-standard`.

---

## 8. Dark Mode Behavior

- **Trigger:** user toggle in navbar **+** respects `prefers-color-scheme` on first load; choice persisted (e.g., localStorage). (Note: the existing unused `ThemeToggle` should be wired into the navbar.)
- **Mechanism:** a single `data-theme="dark"` (or `.dark` class) at the root swaps the token set in §1.2; every component reads tokens, so no per-component dark overrides are needed.
- **Toggle UI:** sun/moon icon button, 44px target, in navbar (desktop) and in mobile sheet. Icon transition uses opacity only (no rotation gimmick).
- **Contrast:** dark palette pre-validated for AA; accent lightens to `#7B8CFF` to maintain link legibility on dark canvas.
- **Surfaces:** maintain the same elevation logic (canvas < surface < elevated); borders become `#222A3D`; shadows deepen per §4.
- **Imagery:** headshot/work thumbnails get a 1px `--color-border` frame in both modes; avoid pure-white image bleed on dark (add hairline or subtle inset).
- **Metrics:** mono numerals use `--color-ink` in both modes; count-up behavior identical.
- **Motion:** unchanged across modes; reduced-motion still honored.
- **No mode-specific gradients or glows** are introduced in dark mode.

---

## 9. Component-to-Section Map

| Section | Components used |
|---|---|
| Navbar | Navigation, Primary button, Theme toggle |
| Hero | H1/kicker type, Primary + Secondary buttons, Proof panel (Metrics cards in `--radius-lg` panel), Availability indicator |
| Impact Metrics | Metrics cards (dashboard band) |
| About | H2, body, career-arc strip (mono), Pillar cards |
| Experience | Timeline, mono dates |
| Capabilities | Grouped text columns, Chips (optional) |
| Selected Work | Work cards, Tertiary "View GitHub" link |
| Contact | H2, Primary + Secondary buttons, channel links, (optional Inputs) |
| Footer | Wordmark, text links, Tertiary "Back to top" |

---

## 10. Accessibility Checklist (system-level)

- All text meets WCAG AA contrast in both modes.
- Visible focus ring on every interactive element (2px, `--color-focus-ring`).
- Tap targets ≥44×44px.
- Mobile menu: focus trap + Esc + return focus to trigger.
- `prefers-reduced-motion` disables transforms/count-up.
- Semantic landmarks (nav/main/section/footer); each section has an accessible heading.
- Résumé links labeled accurately ("View Résumé" / "Résumé (PDF)"); links opening new tabs include appropriate rel + screen-reader hint.
- Images have descriptive alt text; decorative elements marked aria-hidden.
