# motion.zajno.com — Complete Animation Implementation Reference

*Compiled July 2026 for GSES website rebuild. Sources: Zajno Awwwards case study, GSAP forum/docs, official CodePens, Webflow+GSAP patterns.*

---

## 1. CONFIRMED TECHNOLOGY STACK

| Layer | Technology |
|---|---|
| Platform | Webflow (single-page) |
| Animation engine | GSAP 3.12+ |
| GSAP plugins | ScrollTrigger, MotionPathPlugin, SplitText, DrawSVG |
| Smooth scroll | Lenis 1.3+ |
| DOM manipulation | jQuery |
| Custom cursor | GSAP quickTo pattern |
| Audio | SoundManager2 (synchronized to scroll) |

**GSAP is now fully free (May 2025).** All plugins including SplitText, ScrollSmoother, DrawSVG — free for all use including commercial.

---

## 2. INITIALIZATION PATTERN (Webflow)

```javascript
// Recommended: Webflow.push() ensures DOM safety
window.Webflow = window.Webflow || [];
window.Webflow.push(function() {
  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVG, MotionPathPlugin);
  gsap.defaults({ ease: "power2.out", duration: 0.7 });
  
  // Sync Lenis with GSAP
  const lenis = new Lenis({ duration: 1.2, lerp: 0.1, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  
  window.addEventListener('load', () => ScrollTrigger.refresh(true));
});
```

---

## 3. SPLITTEXT — TEXT REVEAL PATTERNS

### Line mask reveal (primary heading technique)
```javascript
// Requires SplitText (now free with GSAP 3.13+)
gsap.utils.toArray('.section-heading').forEach(heading => {
  SplitText.create(heading, {
    type: 'lines,words',
    mask: 'lines',      // auto-wraps each line in overflow:hidden container
    autoSplit: true,    // re-splits on resize
    onSplit(self) {
      return gsap.from(self.lines, {
        yPercent: 100,  // slides up from behind mask
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          once: true
        }
      });
    }
  });
});
```

### Character reveal (hero headline)
```javascript
gsap.from(
  SplitText.create('.hero-heading', { type: 'chars', mask: 'chars' }).chars,
  { yPercent: 100, stagger: 0.025, duration: 0.8, ease: 'power3.out' }
);
```

### Word reveal (subtext)
```javascript
gsap.from(
  SplitText.create('.hero-subtext', { type: 'words' }).words,
  { opacity: 0, y: 20, stagger: 0.04, duration: 0.6, ease: 'power2.out' }
);
```

### Resize-safe pattern (from extracted Zajno source)
```javascript
$("[js-line-animation]").each(function(index) {
  let textEl = $(this);
  let textContent = $(this).text();
  let tl;

  function splitText() {
    new SplitType(textEl, { types: "lines", tagName: "span" });
    textEl.find(".line").each(function() {
      let lineContent = $(this).html();
      $(this).html(`<span class="line-inner" style="display:block">${lineContent}</span>`);
    });
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: textEl,
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "none play none reset"
      }
    });
    tl.fromTo(textEl.find(".line-inner"),
      { yPercent: 100 },
      { yPercent: 0, duration: 0.8, stagger: { amount: 0.2, ease: "power3.out" } }
    );
  }
  splitText();

  let windowWidth = window.innerWidth;
  window.addEventListener("resize", function() {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth;
      tl.kill();
      textEl.text(textContent);
      splitText();
    }
  });
});
```

---

## 4. SCROLLTRIGGER — COMPLETE CONFIGURATION REFERENCE

### Start/end syntax
```
"top bottom"         element top reaches viewport bottom
"top 85%"            element top reaches 85% down viewport (fire early)
"top center"         element top reaches viewport center
"top top"            element top reaches viewport top (pin trigger)
"+=500"              500px past previous end point
```

### toggleActions four states: `"onEnter onLeave onEnterBack onLeaveBack"`
```javascript
"play none none none"      // plays once, stays
"play none none reverse"   // reverses on scroll back up
"none play none reset"     // plays only on first enter (Zajno extracted pattern)
"restart none none none"   // restarts every time
```

### Scrub values
```javascript
scrub: true    // directly linked to scroll, no smoothing
scrub: 0.5     // playhead takes 0.5s to catch up
scrub: 1       // standard premium feel
scrub: 3       // very smooth/laggy (avoid)
```

### Pinned section template
```javascript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.story-section',
    pin: true,
    start: 'top top',
    end: '+=300%',  // 4× section height = long scroll
    scrub: 1,
    anticipatePin: 1
  }
});
tl.from('.content-1', { opacity: 0, y: 30, duration: 0.25 })
  .to('.content-1', { opacity: 0, y: -30, duration: 0.25 }, '+=0.5')
  .from('.content-2', { opacity: 0, y: 30, duration: 0.25 }, '<');
```

### Standard scroll reveals
```javascript
// Generic fade-up
gsap.utils.toArray('.reveal-up').forEach(el => {
  gsap.from(el, {
    opacity: 0, y: 40, duration: 0.8, ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 88%', once: true }
  });
});

// Staggered card grid
gsap.utils.toArray('.card-grid').forEach(grid => {
  gsap.from(grid.querySelectorAll('.card'), {
    opacity: 0, y: 30, stagger: 0.08, duration: 0.7, ease: 'power2.out',
    scrollTrigger: { trigger: grid, start: 'top 85%', once: true }
  });
});

// Batch pattern (performance efficient for many items)
ScrollTrigger.batch('.card', {
  onEnter: batch => gsap.from(batch, { opacity: 0, y: 48, stagger: 0.12, duration: 0.7 }),
  start: 'top 88%', once: true
});
```

---

## 5. CLIP-PATH / MASKING PATTERNS

### Image wipe reveal (bottom-to-top — preferred over circle)
```javascript
gsap.fromTo('.project-image',
  { clipPath: 'inset(100% 0 0 0)' },
  { clipPath: 'inset(0% 0 0 0)', duration: 1.1, ease: 'power3.inOut',
    scrollTrigger: { trigger: '.project-image', start: 'top 80%', once: true }
  }
);
```

### Circle expand (Zajno signature — confirmed from forum analysis)
```javascript
// circle(38.6% at 50% 50%) = small centered circle
gsap.fromTo('.image-container',
  { clipPath: 'circle(38.6% at 50% 50%)' },
  { clipPath: 'circle(150% at 50% 50%)', duration: 1.2, ease: 'power3.inOut' }
);
```

### Horizontal wipe slides (for section transitions)
```javascript
const tl = gsap.timeline();
gsap.set(".slide:not(:last-child)", { clipPath: "inset(0 0 0 0)" });
tl.to(".slide:not(:last-child)", {
  ease: "none",
  clipPath: "inset(0 0 100% 0)",
  stagger: 1, duration: 1
});
ScrollTrigger.create({
  trigger: ".slides", start: "top top", end: "+=500%",
  scrub: true, pin: true, animation: tl
});
```

---

## 6. MOTIONPATH (Zajno ball-on-path signature technique)

```javascript
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

const main = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#svg-stage", scrub: true, start: "top center", end: "bottom center"
  }
})
.to(".ball", { duration: 0.01, autoAlpha: 1 })
.from(".theLine", { drawSVG: 0 }, 0)
.to(".ball", {
  motionPath: {
    path: ".theLine", align: ".theLine",
    alignOrigin: [0.5, 0.5], immediateRender: true
  }
}, 0);
```

**GSES note:** Only apply MotionPath to process diagrams (e.g., inspection workflow schematic). Not for decoration.

---

## 7. PARALLAX

### Scroll-driven (standard)
```javascript
// Background layer — moves slower than scroll
gsap.to('.parallax-bg', {
  y: -200, ease: 'none',  // always 'none' for scrub parallax
  scrollTrigger: { trigger: '.section', start: 'top top', end: 'bottom top', scrub: 1 }
});

// Foreground — different speed (depth illusion)
gsap.to('.parallax-fg', {
  y: -60, ease: 'none',
  scrollTrigger: { trigger: '.section', start: 'top top', end: 'bottom top', scrub: 1 }
});
```

### Mouse-driven (quickTo — high performance)
```javascript
const parallaxEls = document.querySelectorAll('[data-parallax]');
const xTos = [], yTos = [];
parallaxEls.forEach((el, i) => {
  xTos[i] = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power2.out' });
  yTos[i] = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power2.out' });
});
window.addEventListener('mousemove', (e) => {
  const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
  const yPos = (e.clientY / window.innerHeight - 0.5) * 2;
  parallaxEls.forEach((el, i) => {
    const strength = parseFloat(el.dataset.parallax) || 20;
    xTos[i](xPos * strength);
    yTos[i](yPos * strength);
  });
});
```

---

## 8. HOVER INTERACTIONS

### Magnetic button (Zajno-style, desktop only)
```javascript
const magneticEls = document.querySelectorAll('[data-magnetic]');
magneticEls.forEach(el => {
  const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
  const strength = parseFloat(el.dataset.magnetic) || 0.3;
  el.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = el.getBoundingClientRect();
    xTo((e.clientX - left - width / 2) * strength);
    yTo((e.clientY - top - height / 2) * strength);
  });
  el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
});
```

### Card hover
```javascript
document.querySelectorAll('.card').forEach(card => {
  const img = card.querySelector('img, .card-image');
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { y: -4, duration: 0.3, ease: 'power2.out' });
    if (img) gsap.to(img, { scale: 1.05, duration: 0.6, ease: 'power2.out' });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
  });
});
```

---

## 9. STAT COUNTER ANIMATION

```javascript
gsap.utils.toArray('.stat-number').forEach(stat => {
  const target = parseInt(stat.dataset.target);
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target, duration: 2, ease: 'power2.out',
    scrollTrigger: { trigger: stat, start: 'top 80%', once: true },
    onUpdate: () => { stat.textContent = Math.round(obj.val).toLocaleString(); }
  });
});
```

---

## 10. CUSTOM CURSOR (GSAP quickTo pattern)

```html
<div class="cursor-dot"></div>
<div class="cursor-ring"></div>
```

```css
body { cursor: none; }
.cursor-dot, .cursor-ring {
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.cursor-dot { width: 6px; height: 6px; background: #fff; }
.cursor-ring { width: 40px; height: 40px; border: 1.5px solid rgba(255,255,255,0.5); }
@media (hover: none) { body { cursor: auto; } .cursor-dot, .cursor-ring { display: none; } }
```

```javascript
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
if (dot && ring) {
  const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' });
  const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' });
  const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
  const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
  
  window.addEventListener('mousemove', (e) => {
    dotX(e.clientX); dotY(e.clientY);
    ringX(e.clientX); ringY(e.clientY);
  });
  
  document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      gsap.to(ring, { width: 60, height: 60, borderColor: 'rgba(255,255,255,0.9)', duration: 0.2 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(ring, { width: 40, height: 40, borderColor: 'rgba(255,255,255,0.5)', duration: 0.2 });
    });
  });
}
```

---

## 11. EASING QUICK REFERENCE

| Context | GSAP ease | Duration | Notes |
|---|---|---|---|
| Hero entrance | `power3.out` | 0.8–1.2s | Assertive deceleration |
| Scroll reveal | `power2.out` | 0.7–0.9s | Standard, never feels slow |
| Hover/micro | `power2.out` | 0.15–0.3s | Snappy, immediate |
| Page transition | `expo.inOut` | 0.4–0.5s | Clean in/out |
| Clip-path reveal | `power3.inOut` | 1.0–1.2s | Feels editorial |
| Scrub animations | `none` | — | Always linear for scrub |
| Counter | `power2.inOut` | 1.5–2.0s | Eases into final number |
| SplitText chars | `power4.out` | 0.7–1.0s | Very snappy per-char |
| Stagger (cards) | — | — | 0.06–0.10s |
| Stagger (chars) | — | — | 0.02–0.04s |
| Stagger (lines) | — | — | 0.06–0.10s |

### CSS cubic-bezier equivalents
```css
--ease-power2-out:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-power3-out:  cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-power4-out:  cubic-bezier(0.165, 0.84, 0.44, 1);
--ease-expo-out:    cubic-bezier(0.19, 1, 0.22, 1);
--ease-expo-inout:  cubic-bezier(0.87, 0, 0.13, 1);
```

---

## 12. PAGE TRANSITION

```javascript
// Exit
document.querySelectorAll('a[href]').forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.href;
      gsap.to('.page-transition', {
        scaleY: 1, duration: 0.45, ease: 'power2.inOut',
        transformOrigin: 'bottom',
        onComplete: () => window.location.href = href
      });
    });
  }
});

// Enter
gsap.from('.page-transition', {
  scaleY: 1, duration: 0.5, ease: 'power2.inOut', transformOrigin: 'top', delay: 0.1
});
```

```css
.page-transition {
  position: fixed; inset: 0;
  background: #0A0A0A;
  transform: scaleY(0); transform-origin: bottom;
  z-index: 99999; pointer-events: none;
}
```

---

## 13. RESPONSIVE (gsap.matchMedia)

```javascript
const mm = gsap.matchMedia();
mm.add("(min-width: 992px)", () => {
  // Desktop: pinning, parallax, mouse effects
  gsap.to(".parallax-bg", { ... });
});
mm.add("(max-width: 767px)", () => {
  // Mobile: no pinning, simpler reveals, no cursor
  gsap.from(".element", { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out',
    scrollTrigger: { trigger: '.element', toggleActions: 'play none none none' }
  });
});
mm.add("(prefers-reduced-motion: reduce)", () => {
  // Accessibility: kill all animations
  gsap.globalTimeline.timeScale(0);
});
```

---

## 14. PERFORMANCE RULES

```javascript
// Use transforms + opacity only (no layout properties)
gsap.to('.el', { x: 100, y: 50, opacity: 0.5 });    // GOOD
gsap.to('.el', { left: 100, width: 200 });             // BAD

// Always overwrite on hover to prevent ghost tweens
gsap.to('.el', { x: 100, overwrite: 'auto' });

// Refresh on dynamic DOM changes
ScrollTrigger.refresh();

// Kill all on cleanup
ScrollTrigger.getAll().forEach(t => t.kill());

// invalidateOnRefresh for path animations on resize
gsap.to(".ball", {
  motionPath: { path: ".path" },
  scrollTrigger: { scrub: true, invalidateOnRefresh: true }
});
```

---

## 15. GEOMETRIC SVG ANIMATION (for hero graphic)

```javascript
// Slow ambient rotation (molecule/circuit graphic)
gsap.to('.hero-graphic', { rotation: 360, duration: 80, ease: 'none', repeat: -1 });

// Floating drift
gsap.to('.hero-graphic', { y: '-=16', duration: 5, ease: 'power1.inOut', yoyo: true, repeat: -1 });

// Node pulse
gsap.to('.diagram-node', {
  scale: 1.2, opacity: 0.9,
  stagger: { amount: 1.5, from: 'random' },
  duration: 1.5, ease: 'power2.inOut', yoyo: true, repeat: -1
});

// Line draw-in on scroll (DrawSVG)
gsap.utils.toArray('.diagram-line').forEach((line, i) => {
  gsap.from(line, {
    drawSVG: '0%', duration: 1.2, ease: 'power2.inOut', delay: i * 0.15,
    scrollTrigger: { trigger: '.diagram-section', start: 'top 75%', once: true }
  });
});
```
