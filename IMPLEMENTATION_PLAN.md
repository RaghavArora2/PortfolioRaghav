# IMPLEMENTATION PLAN

Execution plan to rebuild the portfolio per the approved Audit → IA → Visual System (Direction C + mono metrics + polished dark mode) → Wireframes → Component System → Content System.

- **No code in this document.** This is the build map only.
- **Stack (existing):** Vite + React 18 + TypeScript + Tailwind 3 (`darkMode: 'class'`) + framer-motion.
- **Content source:** `CONTENT_SYSTEM.md` (Part 3). **Design source:** `COMPONENT_SYSTEM.md` + `WIREFRAMES.md`.

Complexity scale: **S** (≤1 unit), **M** (moderate), **L** (large/multi-file or risk-bearing).

---

## Current-state notes that shape the plan

Discovered while reading the codebase (must be handled):

1. `src/contexts/ThemeContext.tsx` is hardcoded `isDark = true` (always dark). Component System requires **light default + toggle + system preference**. → ThemeContext must be rewritten.
2. `ThemeToggle.tsx` exists but is **never rendered**. → Wire into Navbar.
3. `tailwind.config.js` defines infinite animations (`pulse-slow`, `bounce-slow`, `spin-slow`). → Remove; replaced by finite motion tokens.
4. Dependencies include particle/animation libs likely unused after redesign: `react-particles`, `tsparticles-slim` (SpaceBackground), `react-type-animation`, `react-countup` (optional), `react-github-calendar`, `react-tooltip`, `react-icons`. → Prune per section.
5. **Possible duplicate files** with different slash-casing (`About`/`Hero`/`Chatbot`). → Confirm canonical files before editing to avoid editing a stale copy. **(Blocking check for Phase 0.)**
6. No web font is actually loaded (only `preconnect`). → Add Inter / Manrope / Geist Mono.
7. `index.html` title/meta still say "Full Stack Developer". → Fix in Phase 0.

---

## Phase 0 — Foundation (prerequisite for all sections)

> Must complete before section work; everything depends on tokens + theme.

- **Files to modify:**
  - `index.html` (title, meta description, remove dark inline `body` background, add font links)
  - `tailwind.config.js` (theme tokens: colors, fontFamily, spacing, radius; remove infinite animations; keep `darkMode: 'class'`)
  - `src/index.css` (CSS variables for light/dark tokens, base typography, focus-ring, `scroll-margin-top`, reduced-motion baseline, selection color)
  - `src/contexts/ThemeContext.tsx` (rewrite: light default, `toggleTheme`, persist + `prefers-color-scheme`)
  - `src/App.tsx` (remove `SpaceBackground`, `LoadingScreen` gate if dropping, restructure section order/ids per IA)
  - `src/main.tsx` (verify providers)
- **Components to remove:**
  - `SpaceBackground.tsx` (cosmic theme — forbidden)
  - `LoadingScreen.tsx` (artificial delay; optional removal)
- **Components to create:**
  - `src/components/ui/Button.tsx` (primary/secondary/tertiary variants + states)
  - `src/components/ui/Section.tsx` (band wrapper: kicker + heading + spacing)
  - `src/components/ui/Container.tsx` (max-width + gutters)
  - `src/components/ui/Card.tsx` (generic surface card)
  - `src/components/ui/Metric.tsx` (mono numeral + label cell)
  - `src/lib/motion.ts` (shared finite variants honoring reduced-motion)
- **Dependencies:**
  - Remove: `react-particles`, `tsparticles-slim`.
  - Add fonts (self-host or Google): Inter, Manrope, Geist Mono.
- **Risks:**
  - Theme rewrite touches every component that reads `useTheme`/`isDark` (Hero, GitHubStats) — compile breakage if not updated together.
  - Editing a duplicate/stale file (item 5) — **resolve first**.
- **Complexity:** **L**

---

## 1. Hero

- **Files to modify:** `src/components/Hero.tsx`, `src/App.tsx` (section wrapper/id `#hero`)
- **Components to remove (from Hero):** `TypeAnimation` rotating text, floating emoji icons (⚛️☕🚀), rotating gradient ring, infinite scroll-indicator animation, gradient text, glow filters.
- **Components to create / use:** `Button` (primary `View Résumé`, secondary `Get in touch`), proof panel using `Metric` cells inside a `--radius-lg` panel, static availability indicator, kicker.
- **Content:** CONTENT_SYSTEM Part 3 → Hero.
- **Dependencies:** Remove `react-type-animation` usage here (and from project if unused elsewhere). Direct PDF résumé asset (replace Drive view link).
- **Risks:** Résumé must be a real downloadable PDF (asset or correct link); responsive two-column → stacked behavior; remove `useTheme` glow reliance.
- **Build order rationale:** Sets type/Button/Metric patterns reused everywhere.
- **Complexity:** **M**

---

## 2. Impact Metrics

- **Files to modify:** `src/App.tsx` (insert `#impact` after hero)
- **Components to remove:** none (new section).
- **Components to create:** `src/components/ImpactMetrics.tsx` using `Metric` cells in a `--color-surface` band (5→3→2 grid).
- **Content:** CONTENT_SYSTEM Part 3 → Impact Metrics (7 SOT metrics).
- **Dependencies:** `Metric` (Phase 0). Optional single-run count-up — prefer a tiny custom hook over `react-countup` so the dep can be dropped.
- **Risks:** Tabular/mono figures must not layout-shift during count-up; reduced-motion must skip animation.
- **Build order rationale:** Reuses `Metric`; simple after Phase 0.
- **Complexity:** **S**

---

## 3. Selected Wins

- **Files to modify:** `src/App.tsx` (insert `#wins` after impact)
- **Components to remove:** none (new section).
- **Components to create:** `src/components/SelectedWins.tsx` (3 win blocks: bold outcome + role tag + supporting line) using `Card`.
- **Content:** CONTENT_SYSTEM Part 3 → Selected Wins (3 role-tagged wins).
- **Dependencies:** `Card`, `Button` (`See full experience` → anchors to `#experience`).
- **Risks:** Keep distinct from Impact Metrics (narrative vs numeric) to avoid redundancy.
- **Complexity:** **S**

---

## 4. About

- **Files to modify:** `src/components/About.tsx` (full rewrite), `src/App.tsx` (`#about`)
- **Components to remove:** "cosmic web" copy, "Innovation Driven / Full Stack Expertise / Client Focused" fluff cards, certifications grid (junior certs), HighlightCard, multi-card education block.
- **Components to create / use:** narrative block, career-arc strip (mono), 3 pillar `Card`s, single education line.
- **Content:** CONTENT_SYSTEM Part 3 → About.
- **Dependencies:** `Card`, `Section`.
- **Risks:** Don't reintroduce developer framing (no Next.js/React-centric self-description).
- **Complexity:** **M**

---

## 5. Experience

- **Files to modify:** `src/components/Experience.tsx` (full rewrite), `src/App.tsx` (`#experience`)
- **Components to remove:** Old incorrect roles ("Operations Engineer / Sales Engineer / Freelance" with wrong dates/locations), star-bullet card layout.
- **Components to create:** `src/components/Timeline.tsx` (vertical rail, node, role/org/mono-date, outcome bullets) — see Component System §6.4.
- **Content:** CONTENT_SYSTEM Part 3 → Experience (TPM → Head of Operations → Freelance; exact SOT facts).
- **Dependencies:** `Button` (`Download résumé`).
- **Risks:** **Highest content-accuracy risk** — titles/dates/metrics must match SOT verbatim (this fixes the prior factual contradictions). Responsive date placement (inline → wrap).
- **Build order rationale:** Core trust section; build after primitives stable.
- **Complexity:** **M**

---

## 6. Capabilities

- **Files to modify:** `src/components/Skills.tsx` → replace with `src/components/Capabilities.tsx`; `src/App.tsx` (`#capabilities`)
- **Components to remove:** Icon grid, skill "filter" buttons, "Top Skills" gradient cards, `react-icons` skill icons, "cosmic" copy, Kali Linux/Wix/WordPress emphasis.
- **Components to create:** grouped text-column layout (4–5 groups), optional non-interactive `Chip`s.
- **Content:** CONTENT_SYSTEM Part 3 → Capabilities (5 SOT groups).
- **Dependencies:** Remove `react-icons` if unused elsewhere after this.
- **Risks:** Resist re-adding icon/skill-bar aesthetic (forbidden).
- **Complexity:** **M**

---

## 7. Work (Selected Work)

- **Files to modify:** `src/components/Projects.tsx` → `src/components/SelectedWork.tsx`; `src/App.tsx` (`#work`); remove `GitHubStats` section.
- **Components to remove:** Old invented projects (not in SOT), hype copy, modal with unverified detail, `GitHubStats.tsx` (vanity stats + calendar/streak), `react-github-calendar` dependency, Unsplash stock images.
- **Components to create:** `SelectedWork` using `Card` (two SOT-backed delivery items: white-label platform delivery; freelance client delivery) + a single quiet `View GitHub` tertiary link.
- **Content:** CONTENT_SYSTEM Part 3 → Selected Work. **[NEEDS VERIFICATION]:** named projects pending client-approved details.
- **Dependencies:** Remove `react-github-calendar`. Decide on imagery (replace stock/Unsplash).
- **Risks:** Must not reintroduce coding-portfolio weighting; do not fabricate named projects.
- **Complexity:** **M** (L if verified named projects are added later)

---

## 8. Contact

- **Files to modify:** `src/components/Contact.tsx` (rewrite), `src/App.tsx` (`#contact`)
- **Components to remove:** "cosmic project" copy, floating back-to-top duplication, `Rocket` flourish, `WhatsAppButton.tsx` and `Chatbot.tsx` (the hardcoded "AI" chatbot carries stale/incorrect data — remove).
- **Components to create / use:** `Button` (primary `Email Raghav`, secondary `Connect on LinkedIn`), channel list, single tasteful back-to-top in footer only.
- **Content:** CONTENT_SYSTEM Part 3 → Contact.
- **Dependencies:** none new. Remove `react-tooltip` if unused after this.
- **Risks:** Consolidate floating widgets (avoid 3 competing FABs). No implied scheduling tool unless one exists.
- **Complexity:** **S–M**

---

## 9. Footer

- **Files to modify:** `src/App.tsx` (add `<footer>`), or new `src/components/Footer.tsx`
- **Components to remove:** none.
- **Components to create:** `Footer.tsx` (wordmark + title, location, links, back-to-top, role-seeking line).
- **Content:** CONTENT_SYSTEM Part 3 → Footer.
- **Dependencies:** `Button` (tertiary back-to-top).
- **Risks:** Minimal.
- **Complexity:** **S**

---

## Cross-cutting: Navigation (built in Phase 0/with Hero)

- **Files to modify:** `src/components/Navbar.tsx`
- **Remove:** `Sparkles` brand icon, gradient wordmark, filled-pill active state.
- **Create/wire:** anchor set (About, Experience, Capabilities, Work, Contact), accent `Résumé` button, **wire `ThemeToggle`**, underline active state, accessible mobile sheet (focus trap + Esc).
- **Risks:** Active-section logic + `scroll-margin-top` offset; focus management in mobile sheet.
- **Complexity:** **M**

---

## Dependency Disposition Summary

| Package | Action | Reason |
|---|---|---|
| `react-particles`, `tsparticles-slim` | **Remove** | SpaceBackground / cosmic theme removed |
| `react-type-animation` | **Remove** | Hero rotating text removed |
| `react-github-calendar` | **Remove** | GitHubStats section removed |
| `react-tooltip` | **Remove if unused** | Tooltips minimized |
| `react-icons` | **Remove if unused** | Skill icon grid removed |
| `react-countup` | **Optional remove** | Replace with tiny custom hook |
| `framer-motion` | **Keep** | Finite entrance/hover motion |
| `lucide-react` | **Keep** | Minimal UI icons |
| `react-intersection-observer` | **Keep** | Entrance-on-view triggers |
| Fonts (Inter/Manrope/Geist Mono) | **Add** | Typography system |

---

## Build Order (with complexity)

| # | Step | Complexity | Depends on |
|---|---|---|---|
| 0 | Foundation (tokens, theme, fonts, cleanup, UI primitives) | **L** | — |
| — | Navigation (with Phase 0 / Hero) | **M** | 0 |
| 1 | Hero | **M** | 0 |
| 2 | Impact Metrics | **S** | 0, 1 |
| 3 | Selected Wins | **S** | 0 |
| 4 | About | **M** | 0 |
| 5 | Experience (Timeline) | **M** | 0 |
| 6 | Capabilities | **M** | 0 |
| 7 | Work | **M** | 0 |
| 8 | Contact | **S–M** | 0 |
| 9 | Footer | **S** | 0 |

---

## Global Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Duplicate/stale component files (slash-casing) | Edits hit wrong file | **Resolve canonical set before Phase 0** (blocking) |
| Theme rewrite breaks `useTheme` consumers | Build failure | Update Hero/GitHubStats(removed)/Navbar in same change |
| Removing deps used transitively | Build failure | Grep each import before uninstalling |
| Content drift from SOT | Re-introduces audit failures | All copy pulled from CONTENT_SYSTEM Part 3 only |
| Résumé link still a Drive preview | Recruiter friction | Ship a direct PDF asset |
| Reduced-motion not honored | A11y regression | Centralize variants in `lib/motion.ts` |
| Named projects pressure | Fabrication risk | Keep `[NEEDS VERIFICATION]`; do not invent |

---

## Definition of Done (per section)

- Matches `WIREFRAMES.md` hierarchy at desktop/tablet/mobile.
- Uses only `COMPONENT_SYSTEM.md` tokens/components (no ad-hoc colors, no gradients/glows, no infinite motion).
- Copy is verbatim from `CONTENT_SYSTEM.md` Part 3; metrics traceable to SOT.
- AA contrast in light + dark; visible focus states; ≥44px targets.
- No forbidden elements (floating icons, particles, cosmic theme, skill bars, rotating text).
- Lints clean.
