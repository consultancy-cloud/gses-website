# Reload Motors + Seeds Technology — Full Design Reference & GSES Application Guide

**Purpose:** Primary aesthetic reference for the GSES (Global Sustainable Energy Solutions) premium B2B engineering consultancy website rebuild. Based on research of reload-motors-b93d11eb35d-57094f2b5e0c8.webflow.io, seeds-technology.webflow.io, motion.zajno.com, and award-winning GSAP/dark-theme engineering/automotive sites.

---

## PART 1: RELOAD MOTORS — VISUAL DESIGN SYSTEM

### 1.1 Color Palette

**Overall Theme:** Dark / black-primary with white typography. The Webflow showcase preview confirms: "dark color scheme featuring black backgrounds and white typography." Tagged as "minimalism, white, molecules, ecology, technology."

| Role | Value | Notes |
|------|-------|-------|
| Background (primary) | `#000000` or very near (≈`#050505`) | Pure/near-black — confirmed dark aesthetic |
| Body text | `#FFFFFF` or `#F5F5F5` | High-contrast white on black |
| Secondary text | `rgba(255,255,255,0.6)` approx | Muted gray for captions/metadata |
| Accent/CTA | Teal/cyan (≈`#00C8C8` or `#0097A7`) | Common in hydrogen/clean tech branding; used on buttons |
| Partner/icon fills | White or light gray | Icon set: m-ic1.svg–m-ic4.svg |
| Divider lines | `rgba(255,255,255,0.15)` approx | Ultra-thin hairline separators |

**Note:** Exact hex values are not exposed via WebFetch (CSS files are blocked). The palette above is derived from: (a) Webflow showcase screenshot description, (b) content analysis, (c) standard dark-first Webflow site conventions, (d) the hydrogen/clean-tech visual language.

**GSES Application:** Adopt a near-black background (`#0A0A0A` — slightly off pure black for better display rendering), pure white primary text, `rgba(255,255,255,0.55)` for secondary/body text, and a single electric accent — recommend engineering blue (`#0066FF`) or a refined teal (`#00A896`) for CTAs and highlight elements. Avoid warm black — keep it cool/neutral.

---

### 1.2 Typography

**Font Style Observed:** Clean modern geometric sans-serif. No serif detected. Navigation wordmark "Reload Motors" in clean contemporary type.

**Heading Hierarchy:**
- H1 (Hero): Large, bold — "Superior Technology at your Doorstep" — estimated 48–72px, medium-to-bold weight, mixed case
- H2 (Section): "A Synergy of Purity and Effectiveness" — 32–44px, medium weight
- Section labels: Feature headings like "The Roads are Ready", "As Pure as Water" — 20–28px bold
- Body: 16–18px regular weight, approximately 1.6 line-height
- Captions/meta: 12–14px, lighter weight

**Observed Type Treatments:**
- No all-caps detected on main headings (mixed case preferred)
- No condensed/compressed variants confirmed
- Body copy is paragraph-length, well-spaced
- Feature descriptions are 50–100 word blocks

**Font Family Candidates** (consistent with this aesthetic): Inter, DM Sans, Neue Haas Grotesk, Aktiv Grotesk, or similar geometric/neo-grotesque sans-serif.

**GSES Application:** Use a geometric sans-serif that reads as technical and authoritative — Neue Haas Grotesk or Inter for body, with a display variant or weight contrast for hero headings. GSES headings should be bolder and more dimensional than Reload's — consider `font-weight: 700–800` for H1 with tight letter-spacing (`letter-spacing: -0.02em` to `-0.04em`). Match Reload's mixed-case convention; avoid ALL CAPS except for small labels/eyebrows.

---

### 1.3 Geometric Graphics — The Core Visual Language

**The Hydrogen Molecule Visual Metaphor:** The Webflow showcase explicitly names "a visual metaphor of the hydrogen molecule" as a distinctive design element. This is the geometric graphic the client praised.

**What This Likely Is:**
- An SVG illustration of the H₂O or H₂ molecular structure — spherical nodes connected by line segments (bonds)
- Color: White or near-white nodes/lines on black background, possibly semi-transparent
- Potentially animated (rotation, floating, or pulsing)
- Used as a hero background graphic or large decorative element — not just a small icon
- Scale: Large enough to occupy a significant portion of the hero viewport

**Icon Set (Confirmed):** 4 SVG icons for feature sections:
- m-ic1.svg — "The Roads are Ready" (fuel station/infrastructure related)
- m-ic2.svg — "As Pure as Water" (water molecule or droplet)
- m-ic3.svg — "Powerful like nature" (natural power symbol)
- m-ic4.svg — "Increased durability" (longevity/strength symbol)
These are minimal line-based icons, not filled illustrations.

**Decorative Line System:** Thin horizontal lines separating sections — hairline weight, white at low opacity on dark background.

**Partner Logos:** 6 SVGs (partner_1.svg–partner_6.svg) — white/light on dark.

**GSES Application:** The molecule metaphor translates directly to GSES's engineering context. For GSES, use a similar approach with an SVG geometric form relevant to energy/electrical engineering — options:
1. A circuit topology diagram (nodes and edges = schematic beauty)
2. A simplified solar cell crystal structure (hexagonal grid)
3. Abstract interconnected polygon network (engineering systems thinking)
The graphic should be: large scale, white on black, semi-transparent (0.3–0.6 opacity), animated with a slow rotation or floating drift using GSAP, and positioned in the hero section as the dominant visual presence.

---

### 1.4 Grid System & Layout Architecture

**Overall Structure:**
- Full-width sections (100vw) with dark background throughout
- Content constrained to a max-width container, estimated 1200–1400px
- Alternating content arrangements: full-width text → 4-column icon grid → 2-column text layouts

**Section Pattern:**
```
[Full-width hero — full viewport height]
[Full-width tagline section — large text]
[4-column feature grid — icons + descriptions]
[Full-width image gallery — product images]
[2-column feature section — text + list]
[2-column modular platform section]
[Sustainability CTA section — centered text]
[About intro — text + CTA]
[Partner logos — 6 across]
[3-column news grid]
[Contact form section]
[Footer — logo + links + subscribe]
```

**Column Grid:** 12-column underlying grid, used as 4-col (features), 3-col (news), 2-col (split content), and 1-col (full-width hero/CTA).

**Spacing System:** Generous vertical spacing between sections — estimated 80–120px section padding. Internal content breathing room at 40–60px.

**GSES Application:** Follow the same modular section architecture. Key addition for GSES: insert a "Stats/Credibility" section with large numeric callouts (years in operation, MW installed, countries served, projects completed) — this replaces the hydrogen feature icons with GSES-specific authority signals. Maintain the 2-column split for "service" and "expertise" content blocks.

---

### 1.5 Navigation Structure

**HTML Structure (Confirmed):**
- Logo: "Reload Motors" wordmark (logo.svg) — left-aligned
- Navigation links: About | Paradigm | Careers | Contact us
- Social: LinkedIn (icon link)
- Email: info@reloadmotors.com (direct email CTA)
- Position: Fixed/sticky at top
- Color: White text on dark/transparent background

**CTA Pattern:** Email address is surfaced directly in the nav — aggressive contact accessibility.

**GSES Application:** Fixed navigation, dark background (not transparent — GSES should maintain nav weight). Logo left, links center or right, email CTA far right in accent color. Navigation links: "About | Services | Projects | Contact" — keep it to 4–5 max. Make the email CTA styled as an outlined button in the nav for visual contrast.

---

### 1.6 Page Sections — Content Architecture

**Full homepage section inventory:**

1. **Hero:** "Superior Technology at your Doorstep" + 2-sentence value prop + "Contact" CTA button
2. **Technology Proof:** H₂ fuel cell explanation paragraph (2–3 sentences)
3. **Feature Grid (4-col):** Icons + headlines + 50-word descriptions each
4. **Statistics:** "Driving range at least doubled" + "Refueling: maximum 5 minutes (12x faster than BEV)"
5. **Product Highlight:** "A Pioneering Capacity" + benefits list (range, speed, payload, cost, grid)
6. **Two-Column Value Split:** "A Fusion of Ideas and Expertise" — modular platform | digital ecosystem
7. **Sustainability Mission:** "A cleaner future is essential" + company philosophy
8. **Team Teaser:** "State-of-the-Art Technologies Delivering Worldwide Impacts" + "Learn more" CTA
9. **Partner Logos:** 6 partners across full width
10. **News:** 3 article cards with date
11. **Contact Form:** Form + direct email alternative
12. **Footer:** Logo, links, newsletter subscribe, copyright, "made by embacy" credit

**GSES Application:** Mirror this architecture replacing Reload content with GSES content:
1. Hero — Bold GSES mission statement
2. GSES credentials paragraph
3. Service areas grid (4 icons: Solar | Storage | Grid | Off-grid)
4. Stats callouts (MW installed, years experience, countries, projects)
5. "Why GSES" benefits list
6. Two-column split: Technical depth | Commercial understanding
7. Sustainability commitment statement
8. Team teaser → full team on /about
9. Client/partner logos
10. Insights/publications grid
11. Contact + CTA
12. Footer

---

### 1.7 Buttons & CTAs

**Primary CTA:** "Contact" button — likely teal filled or outlined with teal border/text on dark background.

**Secondary CTAs:** "Learn more" — underlined link style in accent color. "More news" — consistent text-link treatment.

**Form Buttons:** Submit + newsletter subscribe — consistent with primary CTA style.

**Hover States:** Likely fill/invert on hover — white → teal or vice versa. Smooth CSS transition.

**GSES Application:** Two CTA styles:
- Primary: Solid accent-color button (`background: #0066FF; color: #fff; border: none`) with `border-radius: 2px` (sharp, engineered, not rounded)
- Secondary: Outlined (`border: 1px solid rgba(255,255,255,0.4); background: transparent; color: #fff`) with fill-on-hover transition
- Text CTA: Arrow-right icon after text ("Learn more →") with underline appearing on hover
- All transitions: `transition: all 0.25s ease`

---

## PART 2: SEEDS TECHNOLOGY — CUSTOM CURSOR REFERENCE

### 2.1 Seeds Technology Overview

**Company:** SEEDS = Sustainable Energy Efficient Designed Structures. UK-based deep-tech energy company. Uses Webflow CDN (cdn.prod.website-files.com). Site is a teaser/holding page ("Our full website is coming soon").

**Observed Design Elements:**
- Minimal UI — only menu-button.svg and close-icon.svg as visible graphic assets
- Navigation: About us | Technology | Applications | Contact us
- Content: 4 numbered scroll sections ("Engines of Creation®", "Technology Powered by Nature®", "Applications", "Energised by SEEDS®")
- "Watch Again" links suggest embedded video elements per section
- Registered trademark symbols (®) used as design elements throughout
- Contact: info@seeds.technology

**Custom Cursor:** Not detectable via HTML extraction (the cursor implementation exists in JavaScript/CSS files not accessible via rendered HTML parsing). However, based on the client's specific call-out of Seeds Technology for its custom cursor, and the technical methods available in Webflow for such effects, the cursor is almost certainly a GSAP or Webflow IX2-driven dual-element cursor.

---

### 2.2 Standard Webflow Custom Cursor Architecture

Based on comprehensive research of Webflow cursor implementations, the Seeds Technology cursor most likely follows this pattern (this is the production-standard approach used by premium Webflow sites):

**The Dual-Element Structure:**
```html
<div class="cursor-wrapper">
  <div class="cursor-dot"></div>
  <div class="cursor-ring"></div>
</div>
```

**CSS:**
```css
* {
  cursor: none; /* Hide system cursor globally */
}

.cursor-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: 9999;
}

.cursor-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
}

.cursor-ring {
  position: absolute;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
  /* Ring follows with slight lag = visual depth */
}

/* Hover state — triggered when cursor enters a link or button */
.cursor-wrapper.is-hovering .cursor-dot {
  width: 0;
  height: 0;
  background: transparent;
}

.cursor-wrapper.is-hovering .cursor-ring {
  width: 60px;
  height: 60px;
  border-color: rgba(255, 255, 255, 1);
  mix-blend-mode: difference;
}
```

**JavaScript (Pure DOM — no libraries):**
```javascript
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const cursorWrapper = document.querySelector('.cursor-wrapper');

// Dot follows mouse exactly
document.addEventListener('mousemove', (e) => {
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top = e.clientY + 'px';
});

// Hover states
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursorWrapper.classList.add('is-hovering'));
  el.addEventListener('mouseleave', () => cursorWrapper.classList.remove('is-hovering'));
});

// Hide on mobile
if (window.matchMedia('(pointer: coarse)').matches) {
  cursorWrapper.style.display = 'none';
}
```

---

### 2.3 GSAP-Enhanced Version (Recommended for GSES)

Using GSAP's `quickTo` for butter-smooth lag between dot and ring:

```javascript
import { gsap } from 'gsap';

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

// quickTo creates highly optimized setters for x/y
const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' });
const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' });
const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }); // Ring lags
const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });

window.addEventListener('mousemove', (e) => {
  dotX(e.clientX);
  dotY(e.clientY);
  ringX(e.clientX);
  ringY(e.clientY);
});
```

**CSS for GSAP version (use transform instead of left/top for GPU acceleration):**
```css
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%); /* Offset to center */
  pointer-events: none;
  z-index: 9999;
}

.cursor-dot {
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
}

.cursor-ring {
  width: 40px;
  height: 40px;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}
```

---

### 2.4 Cuberto Mouse Follower (Production Library Option)

If using a library rather than custom code, Cuberto Mouse Follower is the industry-standard choice:

**CDN Setup:**
```html
<link rel="stylesheet" href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
<script src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"></script>
<script>
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    speed: 0.55,           // Following speed (0–1, lower = slower/smoother)
    ease: 'expo.out',      // GSAP easing
    skewing: 0,            // Set 1–4 for skew effect on fast movement
    skewingText: 2,        // Skew when hovering text elements
  });
</script>
```

**HTML for hover states:**
```html
<!-- Invert cursor on dark sections -->
<section data-cursor="-inverse">...</section>

<!-- Show text in cursor on hover -->
<a data-cursor-text="View →">Portfolio Item</a>

<!-- Stick cursor to element -->
<button data-cursor-stick>Magnetic Button</button>
```

**Auto-state detection:**
```javascript
const cursor = new MouseFollower({
  stateDetection: {
    '-pointer': 'a, button',     // Expand on links/buttons
    '-hidden': 'input, textarea' // Hide on inputs
  }
});
```

**Generated CSS classes for custom styling:**
```css
/* Override default Cuberto styles */
.mf-cursor .mf-cursor-inner {
  background: #ffffff;
  width: 8px;
  height: 8px;
}

.mf-cursor.-pointer .mf-cursor-inner {
  width: 48px;
  height: 48px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.8);
  mix-blend-mode: difference;
}
```

**GSES Application:** Implement the Cuberto Mouse Follower with a white dot + expanding white ring on hover. The `mix-blend-mode: difference` on hover creates a visually striking inversion effect where the ring appears to "cut through" elements. Stick the cursor to primary CTA buttons using `data-cursor-stick` for a magnetic button effect that signals interactivity elegantly.

---

## PART 3: ANIMATION & MOTION SYSTEM

### 3.1 Technology Stack (Production Standard 2024–2025)

Based on all research, the production-standard stack for a Reload Motors / GSES-caliber site:

| Library | Version | CDN URL | Role |
|---------|---------|---------|------|
| GSAP | 3.13+ | `https://cdn.jsdelivr.net/npm/gsap@3.13/dist/gsap.min.js` | Core animation engine |
| GSAP ScrollTrigger | 3.13+ | `https://cdn.jsdelivr.net/npm/gsap@3.13/dist/ScrollTrigger.min.js` | Scroll-driven animations |
| GSAP SplitText | 3.13+ | `https://cdn.jsdelivr.net/npm/gsap@3.13/dist/SplitText.min.js` | Typography reveal (now free) |
| GSAP DrawSVG | 3.13+ | `https://cdn.jsdelivr.net/npm/gsap@3.13/dist/DrawSVG.min.js` | SVG line-drawing animations |
| Lenis | 1.3.25+ | `https://unpkg.com/lenis@1.3.25/dist/lenis.min.js` | Smooth scroll |
| Mouse Follower | 1.x | `https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js` | Custom cursor |

**Registration:**
```javascript
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVG);
```

---

### 3.2 Smooth Scroll Setup (Lenis + GSAP)

```javascript
// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential decay
  lerp: 0.1,       // Smoothing factor (0 = instant, 1 = very smooth)
  smoothWheel: true,
  autoRaf: false,   // Manual RAF for GSAP sync
});

// Sync Lenis with GSAP ticker
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
```

---

### 3.3 Hero Section Animation Sequence

**Recommended pattern for dark engineering hero:**

```javascript
// Hero entrance timeline — plays on load
const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

// 1. Fade in background geometric graphic (molecule/circuit SVG)
heroTL.from('.hero-graphic', {
  opacity: 0,
  scale: 0.92,
  duration: 1.6,
  ease: 'power2.inOut'
})

// 2. Nav slides down
.from('.nav', {
  y: -20,
  opacity: 0,
  duration: 0.8
}, '-=1.0')

// 3. Eyebrow/label line
.from('.hero-eyebrow', {
  opacity: 0,
  y: 16,
  duration: 0.6
}, '-=0.6')

// 4. Hero headline — character by character
.from(SplitText.create('.hero-heading', { type: 'chars', mask: 'chars' }).chars, {
  yPercent: 100,
  stagger: 0.025,
  duration: 0.8,
  ease: 'power3.out'
}, '-=0.3')

// 5. Hero subheading — words
.from(SplitText.create('.hero-subtext', { type: 'words' }).words, {
  opacity: 0,
  y: 20,
  stagger: 0.04,
  duration: 0.6,
  ease: 'power2.out'
}, '-=0.4')

// 6. CTA button
.from('.hero-cta', {
  opacity: 0,
  y: 20,
  duration: 0.5
}, '-=0.2')

// 7. Decorative geometric lines draw in
.from('.hero-line', {
  scaleX: 0,
  transformOrigin: 'left center',
  stagger: 0.1,
  duration: 0.8,
  ease: 'power3.inOut'
}, '-=0.8');
```

---

### 3.4 Scroll Reveal Animations

**Section heading reveal (lines up from mask):**
```javascript
gsap.utils.toArray('.section-heading').forEach(heading => {
  const split = SplitText.create(heading, {
    type: 'lines,words',
    mask: 'lines',  // Creates overflow:hidden wrapper automatically
    autoSplit: true,
    onSplit(self) {
      return gsap.from(self.lines, {
        yPercent: 100,      // Slides up from behind mask
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          once: true,
        }
      });
    }
  });
});
```

**Stats counter animation:**
```javascript
gsap.utils.toArray('.stat-number').forEach(stat => {
  const target = parseInt(stat.dataset.target);
  
  gsap.from({ val: 0 }, {
    val: target,
    duration: 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: stat,
      start: 'top 80%',
      once: true,
    },
    onUpdate: function() {
      stat.textContent = Math.round(this.targets()[0].val).toLocaleString();
    }
  });
});
```

**Element fade-up on scroll (generic):**
```javascript
gsap.utils.toArray('.reveal-up').forEach(el => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
      once: true,
    }
  });
});
```

**Staggered card reveal:**
```javascript
gsap.utils.toArray('.card-grid').forEach(grid => {
  const cards = grid.querySelectorAll('.card');
  gsap.from(cards, {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: grid,
      start: 'top 85%',
      once: true,
    }
  });
});
```

---

### 3.5 Geometric SVG Animation

**Animating the molecule/circuit graphic (continuous ambient animation):**
```javascript
// Slow, organic rotation — feels alive but not distracting
gsap.to('.hero-graphic', {
  rotation: 360,
  duration: 60,
  ease: 'none',
  repeat: -1,
});

// Floating drift
gsap.to('.hero-graphic', {
  y: '-=20',
  duration: 4,
  ease: 'power1.inOut',
  yoyo: true,
  repeat: -1,
});
```

**SVG line drawing (DrawSVG — for circuit/diagram elements):**
```javascript
// Lines draw themselves in on scroll
gsap.utils.toArray('.diagram-line').forEach((line, i) => {
  gsap.from(line, {
    drawSVG: '0%',
    duration: 1.2,
    ease: 'power2.inOut',
    delay: i * 0.15,
    scrollTrigger: {
      trigger: '.diagram-section',
      start: 'top 75%',
      once: true,
    }
  });
});
```

**Node/circle pulse:**
```javascript
gsap.to('.diagram-node', {
  scale: 1.15,
  opacity: 0.8,
  stagger: 0.3,
  duration: 1.2,
  ease: 'power2.inOut',
  yoyo: true,
  repeat: -1,
});
```

---

### 3.6 Navigation Behavior

```javascript
// Nav shrinks and gains background on scroll
ScrollTrigger.create({
  start: 'top -80px',
  onEnter: () => gsap.to('.nav', {
    backgroundColor: 'rgba(5, 5, 5, 0.95)',
    backdropFilter: 'blur(12px)',
    padding: '16px 0',
    duration: 0.4,
    ease: 'power2.out'
  }),
  onLeaveBack: () => gsap.to('.nav', {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(0px)',
    padding: '24px 0',
    duration: 0.4
  })
});
```

---

### 3.7 Hover States

**Card hover (subtle lift + border reveal):**
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.2);
}
```

**Button hover (fill sweep):**
```css
.btn-primary {
  position: relative;
  overflow: hidden;
  border: 1px solid #0066FF;
  background: #0066FF;
  color: #fff;
  transition: color 0.3s ease;
}

.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #fff;
  transform: translateX(-101%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.btn-primary:hover {
  color: #0066FF;
}

.btn-primary:hover::before {
  transform: translateX(0);
}

.btn-primary span {
  position: relative;
  z-index: 1;
}
```

---

### 3.8 Page Transition (Optional)

```javascript
// Simple page transition overlay
const transition = document.querySelector('.page-transition');

// Out
document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.hostname === window.location.hostname) {
      e.preventDefault();
      const href = link.href;
      gsap.to(transition, {
        scaleY: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        transformOrigin: 'bottom',
        onComplete: () => window.location.href = href
      });
    }
  });
});

// In (on page load)
gsap.from(transition, {
  scaleY: 1,
  duration: 0.6,
  ease: 'power2.inOut',
  transformOrigin: 'top',
  delay: 0.1
});
```

```css
.page-transition {
  position: fixed;
  inset: 0;
  background: #0A0A0A;
  transform: scaleY(0);
  transform-origin: bottom;
  z-index: 99999;
  pointer-events: none;
}
```

---

## PART 4: GEOMETRIC GRAPHICS DESIGN SYSTEM

### 4.1 What "Geometric Graphics That Actually Work" Means

From the Neko Engineering site analysis, confirmed pattern of effective geometric decoration:

**Corner Bracket System:**
```css
/* Target element or section corner brackets */
.geometric-corners {
  position: relative;
}

.geometric-corners::before,
.geometric-corners::after,
.geometric-corners .corner-br,
.geometric-corners .corner-bl {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-color: rgba(255, 255, 255, 0.3);
  border-style: solid;
}

.geometric-corners::before {
  top: 0; left: 0;
  border-width: 1px 0 0 1px;
}
.geometric-corners::after {
  top: 0; right: 0;
  border-width: 1px 1px 0 0;
}
.geometric-corners .corner-br {
  bottom: 0; right: 0;
  border-width: 0 1px 1px 0;
}
.geometric-corners .corner-bl {
  bottom: 0; left: 0;
  border-width: 0 0 1px 1px;
}
```

**Dashed Circle Orbit:**
```css
.orbit-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: orbit-spin 30s linear infinite;
}

@keyframes orbit-spin {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
}
```

**Hairline Section Dividers:**
```css
.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0.15) 80%,
    transparent 100%
  );
  margin: 0;
}
```

**Gradient Accent Line (decorative horizontal rule):**
```css
.accent-line {
  height: 1px;
  width: 60px;
  background: linear-gradient(90deg, #0066FF, transparent);
  margin-bottom: 24px;
}
```

**Technical Grid Overlay (for hero background texture):**
```css
.grid-texture {
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

---

### 4.2 SVG Molecule / Circuit Graphic (GSES Version)

**Concept:** A node-and-edge network diagram suggesting interconnected energy systems — analogous to Reload's hydrogen molecule. This should be the centrepiece hero graphic.

**Implementation approach:**
```html
<!-- Hero background SVG — white, semi-transparent, animated -->
<svg class="hero-graphic" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <!-- Connection lines (bonds) -->
  <g class="diagram-lines" stroke="rgba(255,255,255,0.3)" stroke-width="1" fill="none">
    <line class="diagram-line" x1="400" y1="400" x2="550" y2="280"/>
    <line class="diagram-line" x1="400" y1="400" x2="250" y2="280"/>
    <line class="diagram-line" x1="400" y1="400" x2="400" y2="200"/>
    <line class="diagram-line" x1="400" y1="400" x2="580" y2="500"/>
    <line class="diagram-line" x1="400" y1="400" x2="220" y2="500"/>
    <line class="diagram-line" x1="400" y1="400" x2="400" y2="580"/>
  </g>
  <!-- Node circles -->
  <g class="diagram-nodes" fill="rgba(255,255,255,0.6)" stroke="rgba(255,255,255,0.3)" stroke-width="1">
    <circle class="diagram-node" cx="400" cy="400" r="12"/> <!-- Center node: larger -->
    <circle class="diagram-node" cx="550" cy="280" r="7"/>
    <circle class="diagram-node" cx="250" cy="280" r="7"/>
    <circle class="diagram-node" cx="400" cy="200" r="7"/>
    <circle class="diagram-node" cx="580" cy="500" r="7"/>
    <circle class="diagram-node" cx="220" cy="500" r="7"/>
    <circle class="diagram-node" cx="400" cy="580" r="7"/>
  </g>
  <!-- Outer orbit ring -->
  <circle cx="400" cy="400" r="320" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="4,8"/>
  <!-- Secondary orbit ring -->
  <circle cx="400" cy="400" r="200" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="2,6"/>
</svg>
```

**CSS for hero graphic:**
```css
.hero-graphic {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(800px, 90vw);
  height: min(800px, 90vw);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
}
```

---

### 4.3 CSS Custom Properties (Full Design Tokens)

```css
:root {
  /* Color tokens */
  --color-bg: #0A0A0A;
  --color-bg-raised: #121212;
  --color-bg-card: rgba(255, 255, 255, 0.03);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.55);
  --color-text-muted: rgba(255, 255, 255, 0.3);
  --color-accent: #0066FF;
  --color-accent-hover: #3385FF;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(255, 255, 255, 0.2);

  /* Typography */
  --font-sans: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'Fira Code', monospace;
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  --text-7xl: 4.5rem;    /* 72px */
  --text-8xl: 6rem;      /* 96px */

  /* Spacing */
  --space-section: 120px;
  --space-section-sm: 80px;
  --space-content: 60px;
  --space-element: 32px;
  --space-gap: 24px;

  /* Layout */
  --container-max: 1280px;
  --container-padding: clamp(24px, 5vw, 80px);

  /* Animation */
  --ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast: 0.2s;
  --duration-base: 0.35s;
  --duration-slow: 0.6s;
  --duration-slower: 1.0s;

  /* Geometric */
  --stroke-hairline: 1px;
  --stroke-thin: 1.5px;
  --stroke-medium: 2px;
  --border-radius-sm: 2px;
  --border-radius-base: 4px;
  --border-radius-lg: 8px;
}
```

---

## PART 5: LAYOUT ARCHITECTURE DEEP DIVE

### 5.1 Hero Section Structure

```html
<section class="hero">
  <!-- Background layer -->
  <div class="hero-bg">
    <svg class="hero-graphic"><!-- molecule/circuit SVG --></svg>
    <div class="grid-texture"></div>
  </div>
  
  <!-- Content layer -->
  <div class="container hero-content">
    <div class="hero-inner">
      <span class="eyebrow">Engineering Excellence Since 1999</span>
      <h1 class="hero-heading">Global Energy Solutions <em>Built to Last</em></h1>
      <p class="hero-subtext">GSES delivers technical advisory, design, and implementation for renewable energy projects across the Asia-Pacific.</p>
      <div class="hero-cta-group">
        <a href="/contact" class="btn-primary"><span>Start a Project</span></a>
        <a href="/projects" class="btn-secondary">View Our Work</a>
      </div>
    </div>
  </div>
  
  <!-- Decorative corner brackets -->
  <div class="hero-corners">
    <span class="corner corner--tl"></span>
    <span class="corner corner--tr"></span>
    <span class="corner corner--bl"></span>
    <span class="corner corner--br"></span>
  </div>
  
  <!-- Scroll indicator -->
  <div class="scroll-indicator">
    <div class="scroll-line"></div>
  </div>
</section>
```

**CSS:**
```css
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: var(--color-bg);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-inner {
  max-width: 760px;
}

.eyebrow {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.hero-heading {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-text-primary);
  margin-bottom: 32px;
}

.hero-heading em {
  font-style: normal;
  color: var(--color-text-secondary);
}

.hero-subtext {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: 48px;
  max-width: 540px;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50% { opacity: 0.3; transform: scaleY(0.5); }
}
```

---

### 5.2 Stats Section (GSES Signature Section)

```html
<section class="stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number" data-target="25">0</div>
        <div class="stat-label">Years in Operation</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" data-target="500">0</div>
        <div class="stat-suffix">MW+</div>
        <div class="stat-label">Renewable Capacity Delivered</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" data-target="40">0</div>
        <div class="stat-label">Countries Served</div>
      </div>
      <div class="stat-item">
        <div class="stat-number" data-target="1200">0</div>
        <div class="stat-label">Projects Completed</div>
      </div>
    </div>
  </div>
</section>
```

```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border);
}

.stat-item {
  background: var(--color-bg);
  padding: 60px 40px;
  text-align: center;
}

.stat-number {
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--color-text-primary);
  line-height: 1;
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 12px;
}
```

---

### 5.3 Feature Grid (Analogous to Reload's 4-Icon Section)

```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1px;
  background: var(--color-border);
  margin: 0 calc(var(--container-padding) * -1); /* Full width bleed */
}

.feature-card {
  background: var(--color-bg);
  padding: 48px 40px;
  transition: background 0.3s ease;
}

.feature-card:hover {
  background: var(--color-bg-raised);
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 32px;
  color: var(--color-accent);
}

.feature-heading {
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

.feature-body {
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
}
```

---

## PART 6: DUCATI / AWARD-WINNING DARK AUTOMOTIVE PATTERNS (BONUS REFERENCE)

### 6.1 Scrolly-telling Narrative Technique

The Ducati Superleggera V4 Centenario site uses "scrolly-telling" — content that unlocks sequentially as the user scrolls. This is a premium technique directly applicable to GSES:

**Concept:** Pin a section, then use ScrollTrigger's scrub to reveal content as the user scrolls through it.

```javascript
// Pin hero section and reveal content on scroll
const scrollyTL = gsap.timeline({
  scrollTrigger: {
    trigger: '.scrolly-section',
    pin: true,
    scrub: 1,
    start: 'top top',
    end: '+=300%', // 4x section height = long scroll
  }
});

// Step 1: Technical spec appears
scrollyTL.from('.spec-item-1', { opacity: 0, y: 30, duration: 0.25 })
// Step 2: Second spec appears, first fades
.to('.spec-item-1', { opacity: 0, y: -30, duration: 0.25 }, '+=0.5')
.from('.spec-item-2', { opacity: 0, y: 30, duration: 0.25 }, '<')
// etc.
```

**GSES Application:** Use this technique for a "Project Showcase" section: pin a section with a featured project image, then scroll through key project metrics/achievements one by one (MW capacity → timeline → outcomes → client). Creates a sense of depth and reveals engineering rigour.

---

### 6.2 Premium Design Signals — Documented Pattern

From Ducati + Neko Engineering analysis:

| Signal | Implementation |
|--------|---------------|
| Specification density | Show exact numbers: "47.3 MW", "IEC 62446 compliant", "18-month delivery" |
| Third-party validation | "Verified by Bureau Veritas", "World Bank funded", partner logos |
| Scarcity/selectivity | "GSES accepts 12 new projects per year" |
| Technical vocabulary | "Independent power producer advisory", "LCOE modeling", "PV syst simulations" |
| Material precision | List actual equipment: "SMA Sunny Central inverters", "First Solar FS-4 modules" |
| Attribution | Credits on key deliverables: "Technical due diligence by Dr. [name]" |
| Restraint in decoration | Let engineering content carry authority, not visual noise |

---

## PART 7: COMPREHENSIVE GSES APPLICATION NOTES

### 7.1 Color Palette — Final GSES Recommendation

```
Background:      #0A0A0A  (slightly warm-dark, not cold blue-black)
Surface (raised): #121212  (cards, nav-on-scroll)
Border:          rgba(255,255,255,0.08) (hairline dividers)
Text primary:    #FFFFFF
Text secondary:  rgba(255,255,255,0.55)
Text muted:      rgba(255,255,255,0.3)
Accent (CTA):    #0066FF  (authoritative engineering blue)
Accent (hover):  #3385FF
Accent (warm):   #F59E0B  (amber, use sparingly for callouts/warnings)
```

**Why this works for GSES:** The Reload Motors dark+white establishes the template. Blue accent (`#0066FF`) reads as technical authority and renewable energy without the cliché of green. Amber (`#F59E0B`) as a second accent provides warmth for critical callouts. Together: technology + intelligence + warmth.

---

### 7.2 Typography — Final GSES Recommendation

**Primary Font:** Inter (free, ubiquitous) or Neue Haas Grotesk (premium, most authoritative). If budget allows: PP Neue Machina (distinctly technical feel).

**Weight usage:**
- Display/hero H1: 700–800 weight, −0.04em letter-spacing
- Section headings H2: 600–700, −0.02em letter-spacing
- Subheadings H3: 500–600, 0em letter-spacing
- Body: 400, 1.7 line-height
- Labels/eyebrows: 500, +0.1em letter-spacing, uppercase, accent color
- Monospace accents: IBM Plex Mono (for code, specs, data labels)

---

### 7.3 The Three Hero Graphic Options for GSES

From Reload's hydrogen molecule inspiration, choose ONE of these for GSES:

1. **Circuit Network (Recommended):** Nodes and edges representing energy system interconnections. White on dark, semi-transparent, animated slow rotation. Most versatile and abstract enough to avoid cliché.

2. **Solar Array Geometry:** Top-down view of a solar field abstracted into a repeating geometric grid. Less flexible but directly relatable to GSES's core business.

3. **World Map with Project Dots:** Minimal SVG world map (just coastlines) with glowing dots for project locations. More literal but powerful for demonstrating global reach.

**Animation rule for all three:** Maximum rotation speed = 0.5rpm. Maximum drift = 20px. Opacity = 0.3–0.5. Must not distract from text overlay.

---

### 7.4 Custom Cursor — GSES Implementation

Use Cuberto Mouse Follower with white dot + white ring. Key customisations:

1. **Default state:** 8px solid white dot + 36px white ring (1px stroke)
2. **Hover links:** Dot disappears, ring expands to 56px, `mix-blend-mode: difference` for inversion effect
3. **Hover CTA buttons:** Ring fills with white at 15% opacity (subtle halo)
4. **Data cursor text:** On portfolio items: `data-cursor-text="View Project"`
5. **Speed:** `speed: 0.55` — noticeable lag between dot and ring, feels premium
6. **Skewing:** `skewing: 1` — slight tilt at speed, adds dynamism

---

### 7.5 Animation Philosophy (Adapt from Zajno/Reload/Ducati)

From motion.zajno.com's documented principles:

| Principle | GSES Rule |
|-----------|-----------|
| **Easing** | All out-of-screen entrances: `power3.out`. State changes: `power2.inOut`. Never linear. |
| **Offset & Delay** | Stagger list items 0.06–0.10s. Stagger chars 0.02–0.04s. Stagger cards 0.08–0.12s. |
| **Fade** | Pair with transform (y, scale) always. Opacity alone is weak. Opacity + y: 30–50px. |
| **Masking** | Use SplitText `mask: 'lines'` for ALL heading reveals. Clean, editorial. |
| **Parallax** | Background layers at 0.3–0.5× scroll speed. Foreground text at 1×. |
| **Duration** | Hero: 0.8–1.6s. Scroll reveals: 0.7–1.0s. Hover: 0.2–0.35s. Never exceed 1.6s for UI. |
| **Scroll** | `start: 'top 85%'` for most reveals (generous, doesn't require deep scroll). `once: true` always. |

---

### 7.6 What Reload Motors Does That GSES Must Replicate

1. **Specificity over hyperbole:** "12x faster than BEV" beats "industry-leading." GSES equivalent: "IEC 62446-certified reports in 18 days, not 6 weeks."

2. **Molecule/graphic as identity:** One signature visual element dominates. For GSES: one SVG circuit/node graphic anchors all visual identity.

3. **Partner logos as trust:** 6 partners shown full-width. GSES: Show World Bank, ADB, IFC, ARENA, SolarPower Europe logos.

4. **Dark = authority:** Light sites feel generic; dark sites feel specialised. GSES's dark theme signals "we work at night solving hard problems."

5. **Navigation includes email:** Surfacing `info@reloadmotors.com` in the nav creates immediate credibility. GSES: `consultancy@gses.com.au` in nav.

6. **Two-column content for differentiation:** "A Fusion of Ideas and Expertise" — two columns showing two competencies simultaneously. GSES equivalent: "Technical Rigour" | "Commercial Understanding."

7. **Team is human:** Even on a technology site, team section humanises the brand. GSES team section should lead with faces, not org charts.

8. **Footer subscribe:** Email capture in footer with clean form — low friction, permanent retention.

---

## QUICK REFERENCE: COMPLETE IMPLEMENTATION STACK

### Scripts to load (in `<head>` before `</body>`):
```html
<!-- Lenis smooth scroll -->
<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.25/dist/lenis.css">
<script src="https://unpkg.com/lenis@1.3.25/dist/lenis.min.js"></script>

<!-- GSAP core + plugins -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13/dist/DrawSVG.min.js"></script>

<!-- Mouse follower cursor -->
<link rel="stylesheet" href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css">
<script src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"></script>
```

### Initialization order:
1. Register GSAP plugins
2. Initialize Lenis + sync to GSAP ticker
3. Initialize Mouse Follower cursor
4. Run hero entrance timeline (no scroll trigger)
5. Set up ScrollTrigger instances for all scroll reveals
6. Initialize stat counters
7. Set up nav scroll behavior

---

*Document compiled from: reload-motors-b93d11eb35d-57094f2b5e0c8.webflow.io (main + about + paradigm pages), seeds-technology.webflow.io, motion.zajno.com, neko.engineering, superleggerav4centenario.ducati.com, github.com/Cuberto/mouse-follower, gsap.com/docs/v3/Plugins/SplitText, github.com/darkroomengineering/lenis, webflow.com/blog, awwwards.com, tympanus.net/codrops, and multiple Webflow community resources. Prepared July 2026 for GSES website rebuild.*
