# GSES Website — Master Knowledge Base
> Upload this file at the start of any Claude session working on this website.
> Last updated: July 2026. Working directory: C:\Website

---

## 1. WHO IS GSES — CRITICAL CONTEXT

**Global Sustainable Energy Solutions (GSES)**
- Founded 1998, headquartered in Waterloo NSW 2017, Australia
- Email: consultancy@gses.com.au | Phone: +61 2 9024 5312
- Website being built: **consultancy/OE team website ONLY**
- **NOT a training website.** GSES International (gsesinternational.com) handles training. Do NOT mention training, RTO 91461, "20,000+ Professionals Trained", or link to gsesinternational.com in any service/nav context. The only acceptable training mention is in historical "Our Story" text for context.

**What GSES actually does (for this website):**
- Owners Engineering (OE) for large solar + battery projects
- CER inspection and compliance programs (national inspection agent since 2011)
- Independent technical assurance + expert witness
- Fire investigation for solar/battery systems
- O&M administration and asset management
- Technical feasibility and due diligence for investors/lenders
- Capacity building in Pacific, SE Asia, Africa (via UNIDO and similar)
- Standards development (AS/NZS 5033, 5139, 4777 etc)

**Key Credentials:**
- CER Approved Contractor
- NSW Government LGP Panel
- CM3 Safety Pre-qualification
- Victorian Fair Jobs Code (FJC-260122-9048)
- ISO 9001 Quality Management (in progress)

**Confirmed Project Stats:**
- 12,000+ CER inspections delivered (national agent since 2011)
- 15+ MW solar deployed as Owners Engineer
- 48 sites in a single NSW Government engagement (Property NSW/DPIE)
- 3.8 MW fire investigation (Noumi, QLD)
- 525 kW CBRE portfolio O&M
- Byron Bay Hospital 720 kWp
- CSIRO national portfolio
- 14+ countries with active project work
- 40+ countries overall reach
- 500+ expert assessments delivered

**Key Clients:** NSW Health, CSIRO, Property NSW, CBRE, Sigma Healthcare, Byron Bay Hospital, QLD Government, UNIDO (The Gambia), various Pacific island governments

**International Project Locations for World Map:**
Australia (HQ), The Gambia/West Africa (UNIDO), Tuvalu, Vanuatu, PNG, Indonesia, Thailand, Philippines, Sri Lanka, India, Jordan/Middle East, ASEAN region

---

## 2. FILE STRUCTURE

```
C:\Website\
├── index.html          # Home page
├── about.html          # About / Story / Credentials / Why GSES
├── projects.html       # Project case studies + world map + stats
├── insights.html       # Articles / technical insights
├── css/
│   └── shared.css      # Shared styles (nav, footer, cursor, pg-wipe)
├── js/
│   └── shared.js       # Shared JS (nav, cursor, Lenis, page transitions, .rv reveals)
└── docs/               # This knowledge base lives here
```

---

## 3. TECH STACK — EXACT VERSIONS

All libraries loaded via CDN in `<head>`. Do not change versions.

```html
<!-- GSAP 3.13 core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"></script>
<!-- ScrollTrigger plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"></script>
<!-- SplitText plugin (member-only — loaded only where used) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/SplitText.min.js"></script>
<!-- Lenis smooth scroll 1.3.4 -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"></script>
<!-- Inter font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

**Registration:** All plugins registered at top of each page's inline `<script>`:
```js
gsap.registerPlugin(ScrollTrigger);
if(window.SplitText) gsap.registerPlugin(SplitText);
```

---

## 4. DESIGN TOKENS — CSS VARIABLES

Defined in a `:root {}` block at the top of each page's inline `<style>`. All pages share these:

```css
:root {
  --ac: #006B35;        /* Brand green — primary accent */
  --ac-md: #00853F;     /* Medium green — hover states, map dots */
  --ac-lt: #E6F4EC;     /* Light green — icon backgrounds, tints */
  --bg: #FFFFFF;        /* Page background */
  --bg-off: #F7F9FC;    /* Off-white — section alternation */
  --bg-dark: #0F1B2D;   /* Dark navy — hero, CTA, footer, map sections */
  --t1: #0D1C30;        /* Primary text — headlines */
  --t2: #3D5166;        /* Secondary text — body copy */
  --t3: #7A8FA6;        /* Tertiary text — meta, labels */
  --bdr: rgba(13,28,48,0.08); /* Border color */
  --cmax: 1180px;       /* Max content width */
  --cpad: clamp(20px,5vw,80px); /* Horizontal page padding */
  --sec: clamp(64px,8vw,120px); /* Section vertical padding */
  --e1: cubic-bezier(0.25,0.46,0.45,0.94);
  --e2: cubic-bezier(0.16,1,0.3,1);  /* Expo out — snappy */
}
```

---

## 5. ANIMATION SYSTEM — CRITICAL KNOWLEDGE

### THE BIG BUG (now fixed — do NOT reintroduce)

**Problem:** `.rv` class sets `opacity:0; transform:translateY(28px)` in CSS. When GSAP uses `gsap.from(el, {opacity:0})`, it reads the CURRENT computed CSS state as the END state and animates FROM the specified value TO the current CSS value. Since CSS already says opacity:0, GSAP animates from 0 TO 0 — element stays invisible forever.

**Fix — ALWAYS use `gsap.fromTo()` with explicit end state:**
```js
// WRONG — stays invisible
gsap.from(el, {opacity:0, y:28, duration:.7});

// CORRECT — always use fromTo
gsap.fromTo(el,
  {opacity:0, y:28},          // start state
  {opacity:1, y:0,            // explicit end state — critical
   duration:.7, ease:'power2.out',
   scrollTrigger:{trigger:el, start:'top 91%', once:true}}
);
```

**Same fix for `ScrollTrigger.batch()`:**
```js
// WRONG
ScrollTrigger.batch('.svc-card', {
  onEnter: (b) => gsap.from(b, {opacity:0, y:24, stagger:.06})
});

// CORRECT
ScrollTrigger.batch('.svc-card', {
  onEnter: (b) => gsap.fromTo(b,
    {opacity:0, y:24},
    {opacity:1, y:0, stagger:.06, duration:.62, ease:'power2.out'}
  ),
  start:'top 91%', once:true
});
```

### REVEAL CLASS SYSTEM

Three reveal types — all use `.rv` + `opacity:0` in CSS, revealed by JS:

**Pattern A — GSAP fromTo (index, insights, projects):**
```css
.rv { opacity:0; transform:translateY(28px); }
```
```js
gsap.utils.toArray('.rv').forEach(el => {
  gsap.fromTo(el,
    {opacity:0, y:28},
    {opacity:1, y:0, duration:.7, ease:'power2.out',
     scrollTrigger:{trigger:el, start:'top 91%', once:true}}
  );
});
```

**Pattern B — CSS Transition + class toggle (about.html only):**
```css
.rv { opacity:0; transform:translateY(32px); transition: opacity .65s var(--e2), transform .65s var(--e2); }
.rv.visible { opacity:1; transform:translateY(0); }
```
```js
document.querySelectorAll('.rv').forEach(el => {
  ScrollTrigger.create({
    trigger: el, start: 'top 88%',
    onEnter: () => el.classList.add('visible')
  });
});
```

**Directional reveals:**
```js
// Slide from left
gsap.utils.toArray('.rv-l').forEach(el => {
  gsap.fromTo(el, {opacity:0, x:-22}, {opacity:1, x:0, duration:.65, ease:'power2.out',
    scrollTrigger:{trigger:el, start:'top 90%', once:true}});
});
// Slide from right
gsap.utils.toArray('.rv-r').forEach(el => {
  gsap.fromTo(el, {opacity:0, x:22}, {opacity:1, x:0, duration:.65, ease:'power2.out',
    scrollTrigger:{trigger:el, start:'top 90%', once:true}});
});
```

**Batch stagger reveals (cards):**
```js
// Services cards
ScrollTrigger.batch('.svc-card', {
  onEnter: b => gsap.fromTo(b, {opacity:0,y:24}, {opacity:1,y:0,stagger:.06,duration:.62,ease:'power2.out'}),
  start:'top 91%', once:true
});
// Why-item reveals (about.html)
ScrollTrigger.batch('.why-item', {
  onEnter: b => gsap.fromTo(b, {opacity:0,y:20}, {opacity:1,y:0,stagger:.06,duration:.58,ease:'power2.out'}),
  start:'top 91%', once:true
});
```

### LENIS SMOOTH SCROLL SETUP
```js
const lenis = new Lenis({ duration:1.1, lerp:.08, smoothWheel:true, autoRaf:false });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
```
**Important:** Always call `ScrollTrigger.refresh()` after DOM settles:
```js
window.addEventListener('load', () => setTimeout(() => ScrollTrigger.refresh(), 200));
```

### SPLITTEXT HEADLINE ANIMATION
```js
const sp = new SplitText('#heroH1', {type:'lines', linesClass:'st-line'});
document.querySelectorAll('.st-line').forEach(l => {
  l.style.overflow = 'hidden';
});
gsap.fromTo(sp.lines,
  {yPercent:106},
  {yPercent:0, duration:1.1, ease:'power4.out', stagger:.12, delay:.3}
);
```

### CLIP-PATH REVEAL (featured project image)
```css
.feat-img { clip-path: inset(0 100% 0 0); }
```
```js
gsap.to('.feat-img', {clipPath:'inset(0 0% 0 0)', duration:1.2, ease:'power3.inOut',
  scrollTrigger:{trigger:'.feat-img', start:'top 80%', once:true}});
```

### CUSTOM CURSOR
```html
<div class="cur-dot"></div>
<div class="cur-ring"></div>
```
```js
const dot = document.querySelector('.cur-dot');
const ring = document.querySelector('.cur-ring');
if (dot && ring && window.matchMedia('(hover:hover)').matches) {
  const dX = gsap.quickTo(dot, 'x', {duration:.07, ease:'none'});
  const dY = gsap.quickTo(dot, 'y', {duration:.07, ease:'none'});
  const rX = gsap.quickTo(ring, 'x', {duration:.38, ease:'power3.out'});
  const rY = gsap.quickTo(ring, 'y', {duration:.38, ease:'power3.out'});
  window.addEventListener('mousemove', e => { dX(e.clientX); dY(e.clientY); rX(e.clientX); rY(e.clientY); });
  document.querySelectorAll('a,button,[data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(ring, {width:52,height:52,borderColor:'rgba(0,107,53,.65)',duration:.18}));
    el.addEventListener('mouseleave', () => gsap.to(ring, {width:36,height:36,borderColor:'rgba(0,107,53,.4)',duration:.18}));
  });
}
```

### PAGE TRANSITION (wipe)
```html
<div class="pg-wipe" style="position:fixed;inset:0;background:var(--bg-dark);z-index:9999;transform-origin:top"></div>
```
```js
// Enter animation
gsap.fromTo('.pg-wipe', {scaleY:1}, {scaleY:0, duration:.55, ease:'power2.inOut', transformOrigin:'top', delay:.04});
// Exit on link click
document.querySelectorAll('a[href]').forEach(a => {
  if (a.href.startsWith('#') || a.target === '_blank') return;
  a.addEventListener('click', e => {
    e.preventDefault();
    const dest = a.href;
    gsap.to('.pg-wipe', {scaleY:1, duration:.38, ease:'power2.inOut', transformOrigin:'bottom',
      onComplete: () => window.location.href = dest});
  });
});
```

---

## 6. PAGE-BY-PAGE STRUCTURE

### index.html — Home
Sections (in order):
1. **Hero** — dark bg, headline SplitText animation, CTA buttons, marquee strip
2. **Services** — 6 `.svc-card` in a grid (Solar PV Eng, Battery Storage, Inspection/Compliance, OE, Expert Witness, Technical Due Diligence)
3. **Stats** — 4 counters: 27+ Years, 40+ Countries, 12k+ CER Inspections, 500+ Expert Assessments
4. **Featured Project** — NSW Health portfolio, clip-path image reveal, stats bar
5. **Why GSES** — 3×2 card grid (`.why-card`)
6. **Focus Areas** — 6 `.focus-card` with icons (O&M Admin, Expert Witness, Tech Due Diligence, Benchmark Reports, Asset Lifecycle, Industry Benchmark)
7. **CTA** — dark bg, contact
8. **Footer**

### about.html — About
Sections:
1. **Hero** — dark bg, headline, 4 hero stats: 27+ Years, 50+ Team, 40+ Countries, 500+ Expert Assessments
2. **Company Story** — two-column text + SVG network graphic (GSES hub connecting: CER Inspections, Due Diligence, Pacific/SEIAPI, Standards, ASEAN, Engineer Assurance)
3. **Timeline** — key milestones from 1992→2025
4. **Leadership** — director profiles
5. **Why GSES** — numbered editorial list 01-06 (Independent, Specialist, National, Experienced, Trusted, Outcome-Driven) — NO boxes, hairline separators only
6. **Credentials** — checklist grid of accreditations
7. **Standards Contributions** — standards GSES helped write
8. **CTA**
9. **Footer**

### projects.html — Projects
Sections:
1. **Hero** — dark bg
2. **Projects Grid** — `.pc` project cards (narrow + `.pc--wide` for featured)
3. **Stats Bar** — 4 dark stats: 15+ MW, 48 Sites, 12k+ Inspections, 14+ Countries
4. **Global Reach / World Map** — SVG world map, project dots, region stats strip
5. **CTA**
6. **Footer**

### insights.html — Insights
Sections:
1. **Hero** — eyebrow + headline
2. **Category filters** — pill buttons
3. **Articles grid** — `.art-card` cards (12 articles, engineering/compliance focus — NO training articles)
4. **CTA**
5. **Footer**

---

## 7. COMPONENT REFERENCE

### Stat Counter (index.html, projects.html)
```html
<span class="stat-n" data-target="500">0</span><span class="stat-sfx">+</span>
```
JS reads `data-target`, animates from 0 to that integer via GSAP tween. The `stat-sfx` span holds the suffix ("+", "k+") and stays static.

### Why-Item (about.html) — NEW EDITORIAL DESIGN
```html
<div class="why-item rv">
  <div class="why-num">01</div>
  <div class="why-item-content">
    <div class="why-card-title">Independent</div>
    <p class="why-card-body">No product sales...</p>
  </div>
</div>
```
CSS: 2-column grid (80px number + 1fr content), hairline `border-top`, large muted-green number, no box/card backgrounds.

### World Map (projects.html)
SVG `viewBox="0 0 960 480"` with simplified continent outlines (fill: rgba(255,255,255,0.045)), green glow radialGradient behind Australia, animated pulse circles (CSS keyframe `reachPulse`) at project locations. Australia stroke: rgba(0,133,63,0.45). Location labels at 7-8.5px font size.

---

## 8. FOOTER STRUCTURE (all pages)

```html
<footer class="footer">
  <div class="wrap">
    <div class="footer-grid"> <!-- 4 columns -->
      <!-- Col 1: Brand -->
      <div>
        [GSES logo SVG or img]
        <p class="f-tag">Global Sustainable Energy Solutions — independent renewable energy engineering...</p>
        <div class="f-contact-row">
          <a href="tel:+61290245312">+61 2 9024 5312</a>
          <a href="mailto:info@gses.com.au">info@gses.com.au</a>
          <span>Waterloo NSW 2017, Australia</span>  <!-- NO RTO code -->
        </div>
      </div>
      <!-- Col 2: Services -->
      <!-- Col 3: Company (About, Projects, Credentials, Insights, Contact) — NO Training link -->
      <!-- Col 4: Allied Brands (GSES International, Diagno) -->
    </div>
  </div>
</footer>
```
**RULE:** Never add "Training (RTO 91461)" or "RTO Code 91461" to any footer. This is a consultancy site.

---

## 9. WHAT HAS BEEN FIXED (session history)

### Animation fixes (critical — do not undo):
- `shared.js`: `.rv`, `.rv-l`, `.rv-r` — all changed from `gsap.from` to `gsap.fromTo`
- `index.html`: All `.rv`, `.rv-l`, `.rv-r`, `.svc-card`, `.why-card`, `.focus-card`, `.step` batch reveals — `from` → `fromTo`
- `insights.html`: `.rv` and `.art-card` batch reveals — `from` → `fromTo`
- `projects.html`: `.rv`, `.pc`, `.pc--wide` reveals — `from` → `fromTo`
- **about.html** uses CSS class toggle approach (`.rv.visible`) — this works correctly, do not change to GSAP

### Content fixes:
- Stat 4 on index.html changed from "20k+ Professionals Trained" → "500+ Expert Assessments"
- "Training from the Field" focus card → "Technical Due Diligence"
- All footers: removed "Training (RTO 91461)" link and "RTO Code 91461" from address
- about.html: Removed RTO credential from credentials section
- about.html: Hero stat 4 → "500+ Expert assessments delivered"
- about.html: Story SVG "Training / 20,000+" → "Due Diligence / 500+ reports"
- insights.html: Manila masterclass article replaced with UNIDO/Gambia capacity building article

### Design fixes:
- about.html why-section: Changed from 3-column boxy cards → numbered editorial list (01-06)
- projects.html: Added `<!-- ════ GLOBAL REACH ════ -->` section with SVG world map

---

## 10. THINGS NOT YET DONE

- **Logo:** User wants GSES logo sourced from gses.com.au — requires manual download, cannot be scraped programmatically
- **about.html hero stat:** The "20,000+ Professionals trained" has been changed to "500+ Expert assessments" but the hero animation JS may need to be checked if it uses `data-target` attributes similar to index.html
- **insights.html:** Category filter JS may still include "Training" as a category in the filter dropdown — check
- **Mobile testing:** No mobile testing has been done yet — responsive breakpoints exist in CSS but untested visually
- **Page meta titles/descriptions:** May still contain training references — check `<title>` and `<meta name="description">` on each page

---

## 11. DESIGN RULES (non-negotiable)

1. Typography IS the design — headlines do the heavy lifting, not icons or boxes
2. No boxy AI-looking card grids with icon squares — use editorial layouts (numbered lists, horizontal rules, asymmetric grids)
3. Dark sections (#0F1B2D) alternate with light (#F7F9FC) — never two consecutive same-bg sections
4. Green (#006B35) is used sparingly — accent only, never as a fill colour for large areas
5. All card/section reveals use `gsap.fromTo()` with explicit opacity:1 end state — never `gsap.from()`
6. Cursor custom: `.cur-dot` + `.cur-ring` — never remove
7. Page transitions: `.pg-wipe` scaleY wipe — never remove
8. Lenis always synced to GSAP ticker — never use window scroll events directly
9. `ScrollTrigger.refresh()` called on `window.load` with 200ms delay — always
10. No RTO references, no training links, no "20,000+ trained" stats anywhere on this site
