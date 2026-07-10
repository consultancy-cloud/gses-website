# Premium B2B Dark Website Design — GSES Rules & Eonix Analysis

*Compiled July 2026. Sources: eonixenergy.com, PND Engineers, Bornfight, GSAP.com, Awwwards dark collection, NNGroup animation timing research.*

---

## PART 1: EONIX ENERGY — WHAT WORKED, WHAT DIDN'T

### What Eonix does well (keep/adapt for GSES)

| Element | GSES Adaptation |
|---|---|
| Dark scientific aesthetic | KEEP — premium, high-trust, category-appropriate |
| Numbered section structure (01/02/03) | ADAPT — use for GSES service steps or methodology |
| Hero with single bold headline | KEEP — authoritative first impression |
| Four-vertical market grid | ADAPT — GSES serves Solar / Storage / EV / Grid |
| "Real World Results" proof section | KEEP — translate to GSES credentials + case studies |
| Numbered stats/metrics | ADAPT — "Since 1998 / 500+ projects / 40+ countries" |
| Press/Media section | KEEP — signals that GSES gets cited |

### Why Eonix Feels "Too Slow" — Precise Diagnosis

**Problem 1: Webflow default durations (600–1000ms)**
Webflow Interactions defaults to 600ms entrances and 1000ms for complex sequences. NNGroup research: animations beyond 500ms "start to feel like a real drag." These defaults were set for generic corporate sites.

**Problem 2: Too many elements animating sequentially**
When a 4-item section staggers at 200–300ms each, total sequence time reaches 1.5–2.5s before all content is visible. The user is reading item 1 while items 2–4 are still appearing — anxious, slow-drip feeling.

**Problem 3: Ease curves too gentle**
Webflow defaults to `ease` or `ease-in-out` — slow start AND slow end. Premium B2B entrances need `ease-out` (fast start, graceful deceleration). Elements should snap into place with authority, not drift in.

**Problem 4: Scroll trigger fires too late**
Webflow's default trigger offset fires animations when elements are already deep in the viewport — user is reading before the animation runs. Fire at `start: 'top 85%'` instead.

### The Fix (GSES animation timing system)

| Animation Type | Eonix (Likely) | GSES Target |
|---|---|---|
| Hero load | 1000–1200ms | 600–700ms |
| Scroll reveal | 600–800ms | 320–400ms |
| Inter-element stagger | 200–300ms | 60–80ms |
| Section transition | 800–1000ms | 400–500ms |
| Hover states | 300ms | 150–200ms |
| Easing | `ease` / `ease-in-out` | `power2.out` / `expo.out` |

---

## PART 2: PREMIUM B2B DARK DESIGN — CROSS-SITE PATTERNS

### PND Engineers (pndengineers.com) — B2B Engineering Reference

- Dark charcoal + infrastructure photography at scale
- "EST. 1979" front-loaded as authority signal — longevity matters
- Trademarked proprietary systems (OPEN CELL™) treated as intellectual property
- "Plan → Design → Build → Solve" framework as visual navigation
- 12,000+ projects stat — specific numbers carry weight
- Named testimonials with executive titles, not anonymous quotes
- GSES parallel: 25+ years, government clients, proprietary inspection frameworks = same authority register

### Bornfight Studio — Animation & Craft Reference (Awwwards Site of the Day)

- Cursor is branded — the interaction itself is designed, not default
- Typography at hero scale (80–120px) commands the page; the headline IS the hero
- Work shown with craft: project entry transitions as impressive as the work itself
- Zero decoration for its own sake — every visual choice has a stated job
- Project count visible in nav ("18 projects") — confidence without boasting

### What Makes Premium Dark B2B Feel Premium (5 universal rules)

1. **Dark is a contrast system, not a color choice.** Range: `#050608` → `#0D1117` → `#161B22`. Three values create depth; flat black is a template.

2. **The accent color does all the work.** One accent. Maximum two. When it appears, it means "this matters." Dilute it and it loses all power.

3. **Typography is the primary design element.** The best dark B2B sites could remove all images and the hierarchy would hold. Text layout IS the design.

4. **Animation must feel earned.** Every animated element answers: "does this animation convey meaning?" Counter incrementing = meaning. Card fading up = neutral. Section sliding from random direction = noise.

5. **Social proof is designed, not listed.** Client logos at 60% opacity > full-color logos on white. "500+ projects since 1998" in 80px type > a bulleted list.

---

## PART 3: 10 CONCRETE DESIGN RULES FOR GSES

These rules govern every visual decision. No exceptions without explicit reasoning.

---

### Rule 1: The Background is a Hierarchy System

Three dark values only — not a flat single black:

```css
--bg-primary:   #070A0F;   /* hero, main sections — deepest */
--bg-surface:   #0E1420;   /* cards, callouts, nav-on-scroll */
--bg-separator: #161D2C;   /* footer, subtle dividers */
```

Anything lighter than these three = content element, not a background.

---

### Rule 2: One Accent Color, Used Surgically

**Primary accent:** `#0066FF` (engineering blue — authority without cliché green)
**Hover state:** `#3385FF`
**Warm callout:** `#F59E0B` (amber — use sparingly for critical highlights only)

The accent appears ONLY on:
- Primary CTA buttons
- Active nav underline / current state
- Key statistics and numbers
- Hover states on project cards
- Geometric graphic thin accents

Does NOT appear on: body text, image borders, background washes, secondary buttons.

---

### Rule 3: Typography IS the Design

Two fonts maximum:
- **Display/Headlines:** Neue Haas Grotesk, Syne, or PP Neue Machina — geometric precision, not humanist warmth
- **Body/UI:** Inter or DM Sans — maximum readability at small sizes

```css
/* Weight + spacing rules */
.hero-heading   { font-weight: 700–800; letter-spacing: -0.04em; font-size: clamp(2.5rem, 6vw, 5rem); }
.section-h2     { font-weight: 600–700; letter-spacing: -0.02em; }
.body-text      { font-weight: 400; line-height: 1.7; }
.eyebrow-label  { font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); }
```

The hero headline should be able to stand alone, fill a dark frame, and communicate authority without any imagery.

---

### Rule 4: Animation is Communication, Not Decoration

Every animation justifies itself with ONE of these three purposes:
1. **Direction** — showing the user where to look or move
2. **Relationship** — showing that two elements are connected
3. **State change** — confirming an action happened

Default = NO animation. Add animation when it serves the above.

---

### Rule 5: All Animation Timing Must Be Faster Than You Think

```javascript
// GSES timing system
const TIMING = {
  heroLoad:     '600ms  / power2.out',
  scrollReveal: '320ms  / power2.out',
  counter:      '800ms  / power2.inOut',
  hover:        '160ms  / power2.out',
  pageTransit:  '450ms  / expo.inOut',
  stagger:      '60ms   between elements',
  cursor:       '80ms   lag / power3.out'
};
```

Animations should feel like **physical precision**, not organic drift. Engineering firms are precise. Motion language must be too.

---

### Rule 6: Every Number Gets Large Treatment

GSES credentials shown as display-scale numbers (60–100px):
- **27** years in operation
- **500+** independent assessments
- **40+** countries worked in
- **20,000+** course completions

Counter animation increments from 0 on scroll entry. This does more trust-building work than any paragraph.

```html
<div class="stat-number" data-target="27">0</div>
<div class="stat-suffix">+</div>
<div class="stat-label">Years in Operation</div>
```

---

### Rule 7: Navigation Signals Confidence

- Maximum 5 nav items — no mega-menu
- 1px white separator (10–15% opacity) below nav bar
- One high-contrast CTA button in nav ("Get in Touch") — not a link, a `<button>`
- Current section = hairline accent underline, not bold text
- Email visible in nav: `consultancy@gses.com.au`
- Avoid: transparent-then-solid nav flash, icon-heavy nav, nested dropdowns

---

### Rule 8: Photography Must Feel Industrial

Criteria for GSES imagery:
- Shot at scale — panels/installations where humans look small (authority by scale)
- Processed consistently — slight cool-blue grade to match dark palette
- Never generic stock — no "businesspeople shaking hands," no "server room blue glow"
- Close-ups of precision — connections, wiring, instruments, testing equipment
- Dark overlay 30–40% on any photo placed on dark background

If photography is limited: **abstract geometric/technical SVG graphics** (circuit patterns, grid overlays) > any stock photo.

---

### Rule 9: Proof Architecture (Designed, Not Listed)

The social proof sequence on the homepage:

1. **Client logo strip** — 8–12 logos at 60% opacity, scrolling marquee, white on dark
2. **One flagship credential** — specific named project + client + scale + outcome
3. **Authority numbers** — 27 years / 500+ assessments (display scale, counter animation)
4. **Named testimonial** — executive title, company, specific outcome referenced
5. **Standards badges** — AS/NZS standards, government panel memberships, DISP, CER approved

Sequence logic: logos (you know these names) → proof (here's what we did) → authority (here's the scale) → human voice (someone trusted us) → official credentials.

---

### Rule 10: The Hero is a Statement, Not a Welcome

Not "Welcome to GSES" or "Engineering Assurance Services."

A manifesto-register statement:
- *"Independent Assurance. Uncompromised Standards."*
- *"25 Years. 500+ Projects. Zero Compromises."*
- *"When the Stakes Are Highest, Independent Assessment Changes Everything."*

Below the headline: one sentence, not a paragraph. Then:
- Primary CTA: filled accent button ("View Our Work")
- Secondary CTA: outlined button ("What We Do")

Hero visual = ONE of:
1. **Single infrastructure photograph** — properly graded, dark overlay
2. **Precision geometric SVG** — circuit/node network, white on dark, semi-transparent, ambient animation
3. **Subtle animated dark field** — grid texture + very slow parallax geometric

No auto-playing video unless genuinely cinematic quality shot for this purpose.

---

## PART 4: COMPLETE TECHNICAL STACK FOR GSES

```html
<!-- Lenis smooth scroll -->
<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.25/dist/lenis.css">
<script src="https://unpkg.com/lenis@1.3.25/dist/lenis.min.js"></script>

<!-- GSAP core + plugins (all free as of May 2025) -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/DrawSVG.min.js"></script>

<!-- Cuberto Mouse Follower (custom cursor) -->
<link rel="stylesheet" href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css">
<script src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"></script>
```

**Initialization order:**
1. Register GSAP plugins
2. Initialize Lenis + sync to GSAP ticker
3. Initialize Mouse Follower cursor
4. Run hero entrance timeline (no ScrollTrigger)
5. Set up ScrollTrigger scroll reveals
6. Initialize stat counters
7. Set up nav scroll behavior (transparent → solid)

---

## CSS DESIGN TOKENS

```css
:root {
  /* Backgrounds */
  --bg-primary:    #070A0F;
  --bg-surface:    #0E1420;
  --bg-card:       rgba(255, 255, 255, 0.03);
  --bg-separator:  #161D2C;

  /* Text */
  --text-primary:  #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.55);
  --text-muted:    rgba(255, 255, 255, 0.3);

  /* Accent */
  --accent:        #0066FF;
  --accent-hover:  #3385FF;
  --accent-warm:   #F59E0B;

  /* Borders */
  --border:        rgba(255, 255, 255, 0.08);
  --border-hover:  rgba(255, 255, 255, 0.2);

  /* Typography */
  --font-sans:     'Neue Haas Grotesk', 'Inter', system-ui, sans-serif;
  --font-mono:     'IBM Plex Mono', monospace;

  /* Spacing */
  --space-section: clamp(80px, 10vw, 120px);
  --container-max: 1280px;
  --container-pad: clamp(24px, 5vw, 80px);

  /* Animation */
  --ease-power2-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-power3-out: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-expo-out:   cubic-bezier(0.19, 1, 0.22, 1);
  --ease-expo-inout: cubic-bezier(0.87, 0, 0.13, 1);
  --dur-fast:        0.2s;
  --dur-base:        0.35s;
  --dur-scroll:      0.32s;
  --dur-hero:        0.7s;
}
```
