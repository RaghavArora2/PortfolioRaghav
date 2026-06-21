# WIREFRAMES

Low-fidelity, content-and-hierarchy wireframes for the Raghav Arora portfolio.

- **Design system:** Direction C (Product & Engineering Leader) — light + structured, Stripe-grade clarity.
- **Borrowed from Direction B:** mono numerals + dashboard-style metric styling.
- **Modes:** Polished light (primary) + polished dark.
- **Audience priority:** recruiters hiring for Technical Project Manager, Program Manager, Product Operations, Startup Operator.
- **Grid:** 12-column, max container 1140px (desktop), 24px gutters, 8px spacing base.
- **Source of truth:** All copy/metrics derive from SOURCE_OF_TRUTH.md. No invented numbers.

Legend for ASCII:
```
[ Button ]        = primary CTA (filled accent)
( Button )        = secondary CTA (outline/ghost)
#### / ===        = strong divider / band edge
·····             = hairline separator
{MONO 12+}        = mono numeral metric
<img>             = image / headshot
▮                 = active nav state
```

Breakpoints referenced:
- **Desktop:** ≥1024px (container 1140px)
- **Tablet:** 640–1023px (container fluid, ~720px content)
- **Mobile:** <640px (single column, 16–24px gutters)

---

## Global: Navigation Bar

### Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  Raghav Arora            About  Experience  Capabilities  Work   [ Résumé ] │
│  (wordmark, ink)         ·····  ·····  ▮Capabilities  ·····      (accent btn) │
└──────────────────────────────────────────────────────────────────────┘
   sticky · 64px tall · transparent at top → solid surface + hairline on scroll
```

### Tablet
```
┌────────────────────────────────────────────────────────┐
│  Raghav Arora        About  Experience  Work   [ Résumé ]│
└────────────────────────────────────────────────────────┘
   condensed anchors (Capabilities/Contact fold into menu if tight)
```

### Mobile
```
┌──────────────────────────────┐
│  Raghav Arora          [ ☰ ] │   56px tall, sticky
└──────────────────────────────┘
   ☰ opens full-screen sheet:
   ┌──────────────────────────────┐
   │  About                       │
   │  Experience                  │
   │  Capabilities                │
   │  Work                        │
   │  Contact                     │
   │  ──────────────────────────  │
   │  [ View Résumé ]             │  full-width accent CTA
   └──────────────────────────────┘
```

- **Sees first:** Name (left) + "Résumé" CTA (right) — identity + the one action recruiters want.
- **Why this hierarchy:** Persistent résumé access removes friction at any scroll depth; anchors let recruiters jump to scope/experience directly.
- **Desired action:** Click **Résumé**, or jump to **Experience**.

---

## Section 1 — Hero

### Desktop (two-column: positioning left, proof panel right)
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  TECHNICAL PROJECT MANAGER · STARTUP OPERATOR   ┌──────────────────┐  │
│  (kicker, mono uppercase, muted)                │  PROOF PANEL      │  │
│                                                 │  ··············   │  │
│  Raghav Arora                                   │ {MONO 12+} eng.   │  │
│  (H1, 42px, ink, 700)                           │ {MONO 10k+} users │  │
│                                                 │ {MONO 25+} feats  │  │
│  Technical Project Manager @ WellnessZ.         │ {MONO 200+} deploy│  │
│  I lead cross-functional engineering delivery,  │ {MONO 100+} apps  │  │
│  stakeholder alignment, and operations for      └──────────────────┘  │
│  SaaS products serving 10k+ users.                                     │
│  (subhead, 18px, body color, ~60ch)                                    │
│                                                                        │
│  [ View Résumé ]   ( Get in touch )                                    │
│                                                                        │
│  • Open to TPM / Program Manager roles                                 │
└──────────────────────────────────────────────────────────────────────┘
   ~88px top padding · left col ≈ 7/12, right panel ≈ 5/12 · no headshot ring/glow
```

### Tablet (proof panel drops below copy)
```
┌────────────────────────────────────────────────────────┐
│  TECHNICAL PROJECT MANAGER · STARTUP OPERATOR           │
│  Raghav Arora                                           │
│  Technical Project Manager @ WellnessZ. I lead          │
│  cross-functional delivery, stakeholders, operations.   │
│                                                         │
│  [ View Résumé ]   ( Get in touch )                     │
│                                                         │
│  ┌────────────────────────────────────────────────┐    │
│  │ {12+} eng · {10k+} users · {25+} feats          │    │
│  │ {200+} deploys · {100+} apps                     │    │
│  └────────────────────────────────────────────────┘    │
│  • Open to TPM / Program Manager roles                  │
└────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────┐
│ TECHNICAL PROJECT MANAGER ·   │  kicker (mono, wraps)
│ STARTUP OPERATOR              │
│                              │
│ Raghav Arora                 │  H1 32px
│                              │
│ Technical Project Manager @  │  subhead 16px
│ WellnessZ. I lead delivery,  │
│ stakeholders & operations    │
│ for 10k+ user SaaS.          │
│                              │
│ [ View Résumé ]              │  full-width
│ ( Get in touch )             │  full-width
│                              │
│ ┌──────────────────────────┐ │
│ │ {12+} engineers led      │ │  metrics stack 1-col
│ │ {10k+} users             │ │
│ │ {200+} deployments       │ │
│ └──────────────────────────┘ │
│ • Open to TPM roles          │
└──────────────────────────────┘
```

- **Sees first:** The kicker + name + correct title ("Technical Project Manager"). Positioning is corrected within the first second.
- **Why this hierarchy:** Kicker fixes the brand category before the eye even reads the name; the proof panel puts SOT scope adjacent to the title so seniority and evidence are absorbed together.
- **Desired action:** **View Résumé** (primary) or absorb the proof and scroll to Experience.

---

## Section 2 — Impact Metrics (dashboard band)

### Desktop
```
┌──────────────────────────────────────────────────────────────────────┐ band: subtle #F6F8FA
│  IMPACT AT A GLANCE                                                     │  kicker
│                                                                        │
│  {MONO 10k+}     {MONO 12+}      {MONO 25+}      {MONO 200+}   {MONO 100+} │
│  users served    engineers led   features        deployments    apps      │
│  ··············  ··············   ··············   ············   ········   │
│                                                                        │
│  {MONO 200+} client engagements    ·    {MONO 30+} prod issues/mo resolved │
└──────────────────────────────────────────────────────────────────────┘
   5-up primary grid · mono figures large (top-border accent on each cell optional)
```

### Tablet
```
┌────────────────────────────────────────────────────────┐
│  IMPACT AT A GLANCE                                      │
│                                                         │
│  {10k+} users        {12+} engineers     {25+} features │   3-up
│  ·············       ·············        ············  │
│  {200+} deploys      {100+} apps          {200+} clients│
└────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────┐
│ IMPACT AT A GLANCE           │
│                              │
│ {10k+} users        {12+} eng │   2-up grid
│ ·············       ········· │
│ {25+} feats        {200+} dep │
│ ·············       ········· │
│ {100+} apps        {200+} cli │
└──────────────────────────────┘
```

- **Sees first:** Large mono numerals — scale before words.
- **Why this hierarchy:** Recruiters quantify candidates fast; mono figures read like a status page and do the screening work up front. Placed immediately after hero so credibility lands before any prose can dilute it.
- **Desired action:** Internalize scope, continue to About/Experience with seniority already established.

---

## Section 3 — About (operator narrative)

### Desktop (narrative left, pillars right)
```
┌──────────────────────────────────────────────────────────────────────┐
│  ABOUT                                                                  │
│                                                                        │
│  From the front lines to delivery leadership.        ┌───────────────┐ │
│  (H2, 30px)                                           │ Delivery      │ │
│                                                       │ Ownership     │ │
│  I grew from sales and customer success into          │ req→deploy,   │ │
│  operations and technical project management —        │ 25+ features  │ │
│  so I lead delivery with full business context.       └───────────────┘ │
│  (body, ~60ch)                                        ┌───────────────┐ │
│                                                       │ Cross-func    │ │
│  Career arc:                                          │ Leadership    │ │
│  BDE → Customer Success → Operations → TPM            │ 12+ engineers │ │
│  (mono/labelled progression strip)                    └───────────────┘ │
│                                                       ┌───────────────┐ │
│  B.Tech CSE · Guru Nanak Dev University · 2021–2025   │ Operational   │ │
│  (single restrained line)                             │ Excellence    │ │
│                                                       │ SOPs, releases│ │
│                                                       └───────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
   left ≈ 7/12 · 3 pillar cards stacked right ≈ 5/12
```

### Tablet
```
┌────────────────────────────────────────────────────────┐
│  ABOUT                                                   │
│  From the front lines to delivery leadership.            │
│  I grew from sales & CS into operations and TPM —        │
│  I lead delivery with full business context.             │
│  Career arc: BDE → CS → Operations → TPM                 │
│  B.Tech CSE · GNDU · 2021–2025                           │
│                                                         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │  3-up pillars
│  │ Delivery     │ │ Cross-func   │ │ Operational  │    │
│  │ Ownership    │ │ Leadership   │ │ Excellence   │    │
│  └──────────────┘ └──────────────┘ └──────────────┘    │
└────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────┐
│ ABOUT                        │
│ From the front lines to      │  H2
│ delivery leadership.         │
│                              │
│ I grew from sales & CS into  │  body
│ operations and TPM — leading │
│ delivery with business       │
│ context.                     │
│                              │
│ BDE → CS → Operations → TPM  │  arc strip
│ B.Tech CSE · GNDU · 21–25    │
│                              │
│ ┌──────────────────────────┐ │
│ │ Delivery Ownership       │ │  pillars
│ └──────────────────────────┘ │  stack 1-col
│ ┌──────────────────────────┐ │
│ │ Cross-functional Lead.   │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ Operational Excellence   │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

- **Sees first:** The H2 thesis line ("From the front lines to delivery leadership") + the BDE→TPM arc.
- **Why this hierarchy:** The narrative explains *why* the metrics are believable and differentiates an operator from a pure developer; the career arc sells the "grew into leadership / understands the whole business" story startups want.
- **Desired action:** Trust the trajectory; proceed to Experience for specifics.

---

## Section 4 — Experience (vertical timeline)

### Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  EXPERIENCE                                                             │
│                                                                        │
│  │                                                                     │
│  ●── Technical Project Manager — WellnessZ          {Oct 2025–Present} │
│  │   Led 12+ engineers (BE/FE/mobile/QA/DevOps), 10k+ users            │
│  │   • Owned 25+ features end-to-end (req → deploy → support)          │
│  │   • Roadmaps with founders & enterprise clients                     │
│  │   • Primary escalation point · 200+ deployments                     │
│  │   • Delivery for 100+ white-label apps · 200+ client engagements    │
│  │                                                                     │
│  ●── Head of Operations — WellnessZ                 {Jul 2025–Oct 2025}│
│  │   • SOPs & accountability frameworks                                │
│  │   • Automation/reporting (Sheets + Apps Script)                     │
│  │   • Cross-team escalation frameworks · 30+ issues/mo                │
│  │                                                                     │
│  ●── Freelance — Web Development & Client Delivery   {Jan 2023–Present} │
│      • 100+ websites/apps delivered                                    │
│      • Requirements, planning, stakeholder comms, delivery            │
└──────────────────────────────────────────────────────────────────────┘
   single vertical rail · node ● per role · dates right-aligned in mono
```

### Tablet
```
┌────────────────────────────────────────────────────────┐
│  EXPERIENCE                                              │
│  ●── Technical Project Manager — WellnessZ              │
│  │   {Oct 2025–Present}                                  │
│  │   • 12+ engineers, 10k+ users, 25+ features          │
│  │   • 200+ deployments · 100+ apps · 200+ clients      │
│  ●── Head of Operations — WellnessZ                      │
│  │   {Jul 2025–Oct 2025}                                 │
│  │   • SOPs, automation, escalation · 30+ issues/mo      │
│  ●── Freelance — Web Dev & Client Delivery               │
│      {Jan 2023–Present} · 100+ projects                  │
└────────────────────────────────────────────────────────┘
   dates wrap under title (mono)
```

### Mobile
```
┌──────────────────────────────┐
│ EXPERIENCE                   │
│ ●─ Technical Project Manager │
│ │  WellnessZ                 │
│ │  {Oct 2025–Present}        │
│ │  • 12+ engineers led       │
│ │  • 25+ features end-to-end │
│ │  • 200+ deployments        │
│ │  • 100+ white-label apps   │
│ │                            │
│ ●─ Head of Operations        │
│ │  WellnessZ                 │
│ │  {Jul 2025–Oct 2025}       │
│ │  • SOPs & escalation       │
│ │  • 30+ issues/mo resolved  │
│ │                            │
│ ●─ Freelance — Web Delivery  │
│    {Jan 2023–Present}        │
│    • 100+ projects delivered │
└──────────────────────────────┘
   rail stays left, content right of node
```

- **Sees first:** Most recent role title ("Technical Project Manager — WellnessZ") + dates.
- **Why this hierarchy:** This is the trust spine — exact résumé alignment (titles, dates, scope) kills the old contradictions. Reverse-chronological with scope-first bullets matches how TPM/PM recruiters scan.
- **Desired action:** Confirm seniority + trajectory; move toward Capabilities/Contact.

---

## Section 5 — Capabilities (reframed skills)

### Desktop (4 grouped columns)
```
┌──────────────────────────────────────────────────────────────────────┐
│  CAPABILITIES                                                           │
│                                                                        │
│  Program & Project    Operations &        Technical          Cloud &   │
│  Management           Process             Foundations        DevOps    │
│  ·················    ·············        ············       ········  │
│  Stakeholder Mgmt     SOP Creation        SQL                AWS (EC2/S3)│
│  Requirements         Escalation Mgmt     System Design      Docker     │
│  Agile / Sprints      Workflow Automation API Integrations   CI/CD      │
│  Roadmapping          Incident Mgmt       Redis · DB Design  Pipelines  │
│  Cross-func Lead.                         Scalability                   │
└──────────────────────────────────────────────────────────────────────┘
   4 columns of grouped text lists (NO icon grid, NO skill bars)
```

### Tablet
```
┌────────────────────────────────────────────────────────┐
│  CAPABILITIES                                            │
│  Program & Project Mgmt      Operations & Process        │  2-up
│  Stakeholder, Agile,         SOPs, Escalation,           │
│  Roadmapping, Cross-func     Automation, Incident        │
│                                                         │
│  Technical Foundations       Cloud & DevOps              │
│  SQL, System Design,         AWS, Docker, CI/CD          │
│  APIs, Redis, Scalability    Pipelines                   │
└────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────┐
│ CAPABILITIES                 │
│ Program & Project Management │  accordion or stacked groups
│ Stakeholder · Agile ·        │
│ Roadmapping · Cross-func     │
│ ──────────────────────────── │
│ Operations & Process         │
│ SOPs · Escalation · Auto.    │
│ ──────────────────────────── │
│ Technical Foundations        │
│ SQL · System Design · APIs   │
│ ──────────────────────────── │
│ Cloud & DevOps               │
│ AWS · Docker · CI/CD         │
└──────────────────────────────┘
```

- **Sees first:** The category headers in PM/ops language ("Program & Project Management", "Operations & Process").
- **Why this hierarchy:** Skills are grouped to speak the recruiter's language *after* proof is established; text lists (not icon grids/skill bars) keep it executive and avoid the forbidden student aesthetic.
- **Desired action:** Confirm role-fit vocabulary match; proceed to Work or Contact.

---

## Section 6 — Selected Work (reframed projects)

### Desktop (3-up, subordinate to leadership)
```
┌──────────────────────────────────────────────────────────────────────┐
│  SELECTED WORK                                                          │
│  Concrete delivery — technical depth in support of the role.           │
│                                                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                 │
│  │ Title        │  │ Title        │  │ Title        │                 │
│  │ problem line │  │ problem line │  │ problem line │                 │
│  │ role · stack │  │ role · stack │  │ role · stack │                 │
│  │ result       │  │ result       │  │ result       │                 │
│  │ Demo · Code  │  │ Demo · Code  │  │ Demo · Code  │                 │
│  └──────────────┘  └──────────────┘  └──────────────┘                 │
│                                                                        │
│                         ( View GitHub )   ← single quiet link          │
└──────────────────────────────────────────────────────────────────────┘
   3–4 strongest items only · links de-emphasized
```

### Tablet
```
┌────────────────────────────────────────────────────────┐
│  SELECTED WORK                                           │
│  ┌──────────────────┐  ┌──────────────────┐            │  2-up
│  │ Title            │  │ Title            │            │
│  │ problem/role     │  │ problem/role     │            │
│  │ stack · result   │  │ stack · result   │            │
│  │ Demo · Code      │  │ Demo · Code      │            │
│  └──────────────────┘  └──────────────────┘            │
│                ( View GitHub )                           │
└────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────┐
│ SELECTED WORK                │
│ ┌──────────────────────────┐ │  1-up stack
│ │ Title                    │ │
│ │ problem line             │ │
│ │ role · stack             │ │
│ │ result                   │ │
│ │ Demo · Code              │ │
│ └──────────────────────────┘ │
│ ┌──────────────────────────┐ │
│ │ Title …                  │ │
│ └──────────────────────────┘ │
│        ( View GitHub )       │
└──────────────────────────────┘
```

- **Sees first:** Section intro framing work as "delivery — technical depth in support of the role," then concise outcome cards.
- **Why this hierarchy:** Demonstrates technical credibility (key for *Technical* PM / Product Ops) without reverting to a code-dump portfolio; fewer, stronger items + a quiet GitHub link keep weighting correct.
- **Desired action:** Confirm "technical enough"; move to Contact.

---

## Section 7 — Contact

### Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  CONTACT                                                                │
│  Let's talk about your delivery and operations challenges.             │
│                                                                        │
│  [ Email Raghav ]   ( Book a call )                                    │
│                                                                        │
│  LinkedIn  ·  Résumé (PDF)  ·  GitHub  ·  Amritsar, Punjab  ·  +91 …   │
│  Open to: TPM · Program Manager · Startup Operator · Product Ops       │
└──────────────────────────────────────────────────────────────────────┘
```

### Tablet
```
┌────────────────────────────────────────────────────────┐
│  CONTACT                                                 │
│  Let's talk about delivery & operations.                │
│  [ Email Raghav ]   ( Book a call )                     │
│  LinkedIn · Résumé · GitHub · Amritsar · +91 …          │
│  Open to: TPM · Program Manager · Operator · Product Ops │
└────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────┐
│ CONTACT                      │
│ Let's talk about delivery &  │
│ operations challenges.       │
│                              │
│ [ Email Raghav ]            │  full-width
│ ( Book a call )             │  full-width
│                              │
│ LinkedIn                     │
│ Résumé (PDF)                 │
│ GitHub                       │
│ Amritsar, Punjab             │
│ +91 9815919243               │
│                              │
│ Open to: TPM · PM ·          │
│ Operator · Product Ops       │
└──────────────────────────────┘
```

- **Sees first:** A role-relevant invitation line + the **Email** primary CTA.
- **Why this hierarchy:** Converts an already-convinced recruiter with one obvious action; secondary channels (LinkedIn, résumé) are exactly what recruiters use; no competing floating widgets.
- **Desired action:** **Email** or **Book a call**; secondary: download résumé / open LinkedIn.

---

## Global: Footer

### Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│  Raghav Arora — Technical Project Manager      LinkedIn · GitHub · Email │
│  Amritsar, Punjab, India                       Résumé (PDF)             │
│  © 2026                                          ( Back to top )         │
└──────────────────────────────────────────────────────────────────────┘
```

### Tablet / Mobile
```
┌──────────────────────────────┐
│ Raghav Arora                 │
│ Technical Project Manager    │
│ Amritsar, Punjab             │
│ LinkedIn · GitHub · Email    │
│ Résumé (PDF)                 │
│ ( Back to top )              │
│ © 2026                       │
└──────────────────────────────┘
```

- **Sees first:** Name + correct title reaffirmed.
- **Why this hierarchy:** Reinforces positioning and provides last-chance résumé/contact access.
- **Desired action:** Résumé download or contact channel.

---

## Résumé Placement Summary (cross-section)

The résumé is the single most-requested recruiter artifact, so it is reachable from **five** points without being noisy:

| Location | Treatment | Rationale |
|---|---|---|
| Navbar (sticky) | Accent button "Résumé" | Always one click away at any scroll depth |
| Hero | Primary CTA "View Résumé" | The first decisive action |
| Mobile menu sheet | Full-width accent CTA | Parity on mobile |
| Contact | Listed as "Résumé (PDF)" channel | Natural conversion point |
| Footer | "Résumé (PDF)" link | Last-chance access |

All résumé links open/download a **direct PDF** (not a Drive preview), labeled accurately ("View Résumé" / "Résumé (PDF)").

---

## Vertical Order Recap (one screen)

```
Navbar (sticky)
  └ Hero            → positioning + proof panel + Résumé/Contact CTAs
  └ Impact Metrics  → mono numerals, dashboard band
  └ About           → operator narrative + BDE→TPM arc + pillars
  └ Experience      → vertical timeline, résumé-accurate
  └ Capabilities    → 4 grouped text columns (no icon grid)
  └ Selected Work   → 3–4 outcome cards + quiet GitHub link
  └ Contact         → invitation + Email/Book a call + channels
Footer              → name/title + résumé + back to top
```
