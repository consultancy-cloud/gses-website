# GSES Dream Website — Full Creative Brief & Claude Prompt
> Give this entire file to Claude at the start of a design session.
> This is the vision prompt — it describes the FEELING, the look, the interactions.

---

## WHO I AM / CONTEXT FOR CLAUDE

I run GSES (Global Sustainable Energy Solutions) — Australia's leading independent renewable energy engineering and assurance firm. We have been operating since 1998. We do NOT sell products, we do NOT install solar — we are the independent technical experts that everyone else calls when the stakes are high: government bodies, hospitals, shopping centres, banks financing large solar farms, island nations setting up their first renewable grid.

This website is for our consultancy/OE (Owners Engineering) team ONLY. It is NOT a training website. Our sister company GSES International handles training. This site must read like the firm you call when you need someone who actually knows what they're doing — not a startup, not a generalist, not a course provider.

The people visiting this site are: government procurement officers, CFOs of large commercial property portfolios, infrastructure fund managers, hospital facility managers, regulators, international development agencies. They are sophisticated. They do not need to be sold to with flashy marketing. They need to feel that GSES is the most credible, experienced, rigorous firm in the room.

---

## THE VIBE — WHAT I WANT IT TO FEEL LIKE

Think of these reference sites as the tone I'm going for:

- **irecco.com** — dark, sophisticated, cinematic. Engineering credibility through restraint.
- **reload-motors.com** — precision motion, technical confidence, nothing wasted
- **seeds-tech.com** — editorial typography, large type, generous whitespace, every section earns its place
- **zajno.com** — fluid, premium, the animations make you feel like the company is meticulous
- **bornfight.com / pnd.hr** — B2B agencies that proved dark + motion = serious, not flashy

The feeling I want: **dark, confident, spare, precise.** Like a structural engineering firm's annual report crossed with a luxury technology brand. Not startup. Not agency. Not playful. Serious expertise, delivered with aesthetic precision.

**Words that describe the desired feeling:**
- Rigorous
- Independent
- Authoritative
- Precise
- Earned (not marketed)
- Australian backbone (not American hype)

**Words that should NOT describe it:**
- Corporate
- Boxy
- Generic
- AI-generated template
- Cheerful SaaS
- Buzzy startup

---

## WHAT I DO NOT WANT — BE VERY SPECIFIC

- **NO boxy card grids** with rounded corners, icon squares, and 3-column equal-height boxes. This is the "AI template" look I hate. It looks like every Notion template and ChatGPT website suggestion ever made.
- **NO floating icons inside coloured rounded squares.** The green square with a white icon = instant "off the shelf" feeling.
- **NO generic stock illustrations** — circuit board patterns, generic solar panel clipart, fake-looking people photos
- **NO section that is a 3-column grid of identical white boxes with a thin border** — this is the death of brand character
- **NO hero with a split left-text / right-stock-photo layout** — this screams generic consulting firm template
- **NO colour gradients as the main design element** — colour should come from typography and spacing, not purple-to-teal gradient washes
- **NO empty sections** — if a section doesn't have enough content to fill its space with SUBSTANCE, either add real content or remove the section
- **NO training references** — no "20,000+ professionals trained", no RTO mentions, no course links

---

## DREAM DESIGN — SECTION BY SECTION

### HERO — HOME PAGE

**Background:** Deep navy (#0F1B2D). Full viewport height.

**Layout:** Almost entirely typographic. The headline is the design.

**Headline treatment:**
Large, heavy, white. Something like:
```
Australia's Independent
Renewable Energy
Engineering Firm.
```
Set in Inter 900 weight, `clamp(3.5rem, 7vw, 6.5rem)`, tracking -0.05em. The word "Independent" should carry weight — visually larger or bolder than the rest, or set in the brand green.

**Sub-headline:** 1-2 lines max. Something like:
*"Since 1998, GSES has been the technical authority that governments, banks and infrastructure owners trust for independent assurance — from CER inspection programs to Owners Engineering on Australia's largest solar projects."*

**Animation:** The headline words reveal line by line using SplitText (lines fly up from below, clipping their overflow — a zajno.com technique). Not a fade. A hard mask reveal. Staggered 0.12s per line.

**Below fold hint:** A subtle arrow or scroll indicator. Maybe just a thin green vertical line that pulses, or the word "Scroll" rotated 90 degrees.

**What this hero does NOT have:** A right-side stock photo. A graphic. A carousel. An illustration. Typography is the entire design.

**Optional cinematic touch:** Very subtle animated background — think a near-invisible grid of fine lines, OR a faint slow-moving parallax of abstract structural geometry (like a solar frame pattern at 3% opacity). This adds depth without competing with the text.

---

### STATS STRIP (immediately below hero)

Four stats in a horizontal bar, dark or slightly lighter dark background. No boxes — just numbers separated by thin vertical lines.

```
27+               40+               12,000+            500+
Years             Countries         CER Inspections    Expert Assessments
```

**Typography:** The number is huge — 4-5rem, font-weight 900, green (#00853F). The label is tiny — 10px, uppercase, letter-spacing 0.1em, muted white.

**Animation:** Numbers count up from zero when they scroll into view. Not a loop — once, done. Clean.

**NO boxes, NO cards, NO icons.** Just numbers and their labels, separated by hairline vertical borders.

---

### SERVICES

This is where most sites go generic. Don't.

**Option A (preferred) — Full-width alternating rows:**
Each service is its own horizontal strip. Service name (large, left-aligned) + one-paragraph description (right column) + a thin green accent element (number, or a short horizontal rule).

```
01  Solar PV Engineering        [description right column]
──────────────────────────────────────────────────────────
02  Owners Engineering          [description right column]
──────────────────────────────────────────────────────────
03  Inspection & Compliance     [description right column]
```

This looks nothing like a card grid. It reads like a product manifest — clean, editorial, precise.

**Option B — Dark accordion:**
On dark background, each service expands on hover/click to reveal description. Very premium. Requires more JS.

**Either way:** The number (01-06) should be large (52-64px), very muted green (rgba(0,107,53,0.15)), and positioned like punctuation — not a badge, not a circle, just a large typographic element that creates rhythm.

---

### FEATURED PROJECT (index.html)

One project given full-width cinematic treatment. Not a card.

**Layout:** Full-bleed section. Dark background. Project image takes 55% of width as a dramatic side visual (with a slow parallax scroll effect on the image within the container). Text takes 45% — left-aligned, stacked.

**Content stack:**
- Eyebrow: "Featured Project"
- Client: "NSW Health"
- Title: "Owners Engineering for 30-Hospital Solar Portfolio"
- 2-3 sentence description
- Key stats in a minimal grid (Portfolio Client / 30+ Sites / Treasury Loan Fund)
- "View Project" link with arrow that animates on hover

**Image reveal:** The image starts clipped (`clip-path: inset(0 100% 0 0)`) and slides in from left as it enters viewport. This is a premium motion technique.

---

### WHY GSES (about.html)

Already implemented as a numbered editorial list. This is the right direction. Refine it to feel more like a manifesto.

**Design vision:**
- Large numbers (01-06) in very muted green, positioned left
- Title bold and large (20-22px, 800 weight)
- Body text one line below
- Hairline top border between each item
- On hover: the number brightens slightly (rgba 0.1 → 0.3), no transform
- Items reveal with a stagger as they scroll into view (stagger 0.08s)

**This section should feel like reading a firm's principles — not a feature comparison table.**

---

### WORLD MAP (projects.html)

Already implemented. Vision for how it could be elevated:

**Background:** Deep dark navy, same as hero.
**Map:** SVG world map, simplified but recognisable. Continent fills at very low opacity (like a watermark). The map is NOT the hero — the locations are.

**Location dots:** Green (#00853F) pulsing dots at each project location. The pulse should be subtle — like a sonar ping, not a neon notification. CSS keyframe that fades and expands a circle outward.

**Key locations labeled:**
- AUSTRALIA (large label, underlined with green — this is home)
- W. AFRICA (The Gambia / UNIDO)
- PNG
- Tuvalu, Vanuatu (smaller)
- SE ASIA (Indonesia, Thailand, Philippines)
- India

**Headline above map:** "40+ Countries. One Standard of Rigour."
The word "One" in green italic. The idea: no matter where in the world, the same independent engineering standard.

**Below map:** A strip of 5 regions (Australia / Pacific / SE Asia / Africa / South Asia) with thin vertical separators. No boxes.

---

### INSIGHTS / ARTICLES (insights.html)

**What it should feel like:** The internal technical publications of a serious engineering firm. Not a "blog." Not "content marketing." Technical depth.

**Article cards — preferred design:**
NOT the standard thumbnail + title + excerpt card. Instead:

**Option A — Editorial row layout:**
Each article is a horizontal row:
```
[Category tag]    [Title — large, dominant]    [Author · Date · Read time]
──────────────────────────────────────────────────────────────────────────
```
The title is the visual anchor, not a thumbnail photo. On hover, the title colour shifts to green. Arrow appears at right.

**Option B — Hybrid: numbered list with accent image:**
Articles numbered. Large number (muted, like 01, 02, 03) at far left. Title + excerpt in the middle. One article per row, full width. Feels like a journal table of contents.

**Category filter:** Slim horizontal pill buttons above the grid. Active state: filled green. Not a dropdown.

**Article topics should be engineering-focused:**
- Standards analysis (AS/NZS 5033, 5139, 4777)
- Inspection methodology
- Case studies (real GSES projects)
- Technical due diligence guidance
- International capacity building
- Battery safety and compliance
- NO training announcements, NO RTO course promotions

---

### CTA SECTION

Every page ends with a CTA. The vision:

**Background:** Same dark navy as hero, so the page bookends visually.
**Layout:** Centred. Almost purely typographic.

**Headline:** Large, bold, white.
```
Independent. Rigorous.
Always on your side.
```

**Sub-copy:** One sentence max — the clearest possible expression of why to call GSES.

**Buttons:** Two buttons side by side.
- Primary: "Talk to an Engineer" — filled green, white text
- Secondary: "View Our Services" — ghost (white outline), white text

**Contact line below buttons:** Phone · email · CER email — separated by · dots. Very small, very muted.

**Optional motion:** The headline reveals with the SplitText line-by-line technique when it scrolls into view.

---

## TYPOGRAPHY SYSTEM (dream version)

**Font:** Inter, loaded from Google Fonts. Full weight range 400-900.

**Scale:**
- Hero headline: `clamp(3.2rem, 7vw, 6.5rem)`, weight 900, tracking -0.055em
- Section headline: `clamp(2rem, 4vw, 3.2rem)`, weight 800, tracking -0.04em
- Sub-headline: `clamp(1.1rem, 2vw, 1.4rem)`, weight 600, tracking -0.02em
- Body: 15-16px, weight 400-500, line-height 1.72
- Labels/eyebrows: 10-11px, weight 700, uppercase, letter-spacing 0.1em
- Stats numbers: `clamp(2.8rem, 5vw, 4.5rem)`, weight 900, tracking -0.06em

**Typographic rule:** Headlines should be uncomfortable — push the size until it feels too big, then pull back 15%. The best headlines dominate the section they're in.

**Eyebrow pattern:** Every major section starts with a tiny uppercase eyebrow label in green — "Our Services", "Global Reach", "Why GSES", "Featured Project". This creates navigational rhythm across the page.

---

## MOTION PHILOSOPHY

**Principle 1 — Reveal, don't transition.**
Elements enter the page by appearing from hidden (opacity:0, slight Y translate) — not by fading or sliding sideways. The direction is always upward. The world comes UP to meet you.

**Principle 2 — Once, intentional.**
All scroll animations trigger once (`once:true`). Never loop, never re-trigger on scroll up. Animations happen because you arrived, not because you're scrolling.

**Principle 3 — Stagger creates life.**
Groups of elements (cards, stats, list items) always stagger 0.05-0.1s. This creates the sense that each element is an individual, not a batch copy.

**Principle 4 — Headlines are events.**
Main section headlines use SplitText line-by-line reveal with clip mask (overflow:hidden on each line). Lines fly up. This is the premium technique. Everything else is a subordinate reveal.

**Principle 5 — Duration hierarchy.**
- Hero headlines: 1.0-1.2s
- Section headlines: 0.85s
- Body text / paragraphs: 0.70s
- Cards / small elements: 0.55-0.65s
- Micro-interactions (hover): 0.15-0.25s

**Principle 6 — Ease matters more than duration.**
- `power4.out` for headlines (explosive start, floats to rest)
- `power2.out` for general reveals (smooth, not bouncy)
- `power3.inOut` for image reveals and clip-path animations (cinematic)
- `power2.inOut` for page transitions
- Never use `linear` for anything visible to the user

**Principle 7 — The cursor IS the brand.**
Custom cursor: small 4px dot that tracks exactly (duration 0.07s), paired with a 36px ring that follows with lag (duration 0.38s, power3.out). On hover over interactive elements: the ring expands to 52px and shifts to brand green. This is a signature interaction — do not remove it.

---

## COLOUR USE (rules for dream design)

**Dark navy (#0F1B2D):**
Use for: Hero, CTA, footer, world map section, any section where content needs maximum contrast and drama. This is 35-40% of the page.

**Off-white (#F7F9FC):**
Use for: Body sections with light content (services, features, credentials). Slightly warm white — never pure #FFFFFF for full-page sections.

**Pure white (#FFFFFF):**
Use for: Article cards, project cards — backgrounds that need to "lift" off the page when they have a shadow.

**Green (#006B35 / #00853F):**
Use for: Eyebrow labels, number accents, active states, animated dots, button backgrounds. Never a section background. Never a gradient. Used sparingly — when it appears, it should feel intentional.

**Text hierarchy:**
- #0D1C30 — headlines and primary text on light backgrounds
- #3D5166 — body copy on light backgrounds
- #7A8FA6 — meta text, labels, tertiary
- rgba(255,255,255,0.9) — primary text on dark backgrounds
- rgba(255,255,255,0.45) — body text on dark backgrounds
- rgba(255,255,255,0.25) — meta/tertiary on dark backgrounds

---

## WHAT MAKES THIS WEBSITE DIFFERENT FROM EVERY OTHER ENGINEERING FIRM SITE

Most engineering firm websites look like:
- A hero with a stock photo of solar panels
- A "What We Do" section with 6 white boxes and green icons
- A "Why Choose Us" section with 4 checkmarks
- A "Meet Our Team" section with headshots on grey cards
- A contact form

That is not this.

This website demonstrates through its design that GSES is different. The precision of the typography, the restraint of the layout, the quality of the motion — these signal the same qualities in the firm's engineering work. When a government procurement officer lands on this site, they feel something they cannot quite name: this is a firm that cares about getting things exactly right.

The website should be the physical proof of the brand promise: **independent, rigorous, precise.**

---

## TECHNICAL STACK (tell Claude this upfront)

```
GSAP 3.13.0 (gsap.min.js + ScrollTrigger.min.js + SplitText.min.js)
Lenis 1.3.4 (smooth scroll, synced to GSAP ticker)
Inter font (Google Fonts, weights 400-900)
Pure HTML/CSS/JS — no framework, no React, no build step
Files live at C:\Website\ (index.html, about.html, projects.html, insights.html)
```

**Critical animation rule — ALWAYS use `gsap.fromTo()` never `gsap.from()`:**
Elements have `opacity:0` set in CSS. `gsap.from({opacity:0})` reads the CSS state as the end state and never animates to visible. Always provide an explicit end state:
```js
// ALWAYS this:
gsap.fromTo(el, {opacity:0, y:28}, {opacity:1, y:0, duration:.7, ease:'power2.out', scrollTrigger:{...}});
// NEVER this:
gsap.from(el, {opacity:0, y:28});
```

---

## THE SINGLE SENTENCE THAT DEFINES THIS SITE

> "This is what you build when you want visitors to feel, before they read a single word, that they have found the most credible engineering firm in the room."
