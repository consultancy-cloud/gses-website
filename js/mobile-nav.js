/* ─────────────────────────────────────────────
   GSES — Mobile Navigation controller
   Builds a glass hamburger toggle + full-screen frosted menu
   from the nav links already present on the page, so every page
   stays in sync automatically. No page-specific markup needed.
───────────────────────────────────────────── */
(function(){
'use strict';

var nav = document.getElementById('nav') || document.querySelector('.nav');
if(!nav) return;

/* Collect the existing desktop nav links (works for .nav-links and
   .nav-links-inner variants) and the CTA. */
var linkEls = Array.prototype.slice.call(
  nav.querySelectorAll('.nav-links a, .nav-links-inner a, a.nav-link')
);
/* De-dupe while preserving order */
var seen = [];
linkEls = linkEls.filter(function(a){
  if(seen.indexOf(a) !== -1) return false;
  seen.push(a); return true;
});
if(!linkEls.length) return;

var ctaEl = nav.querySelector('.nav-cta, .nav-cta-pill');

/* ── Build toggle button ── */
var toggle = document.createElement('button');
toggle.className = 'mnav-toggle';
toggle.type = 'button';
toggle.setAttribute('aria-label','Open menu');
toggle.setAttribute('aria-expanded','false');
toggle.setAttribute('aria-controls','mnav');
toggle.innerHTML = '<span class="mnav-toggle-lines" aria-hidden="true"><i></i><i></i></span>';
/* Place after the CTA (far right of the pill), else append */
nav.appendChild(toggle);

/* ── Build overlay menu ── */
var overlay = document.createElement('div');
overlay.className = 'mnav';
overlay.id = 'mnav';
overlay.setAttribute('role','dialog');
overlay.setAttribute('aria-modal','true');
overlay.setAttribute('aria-label','Site menu');

var rows = linkEls.map(function(a,i){
  var n = ('0' + (i+1)).slice(-2);
  var active = a.classList.contains('active') ? ' active' : '';
  var href = a.getAttribute('href') || '#';
  var label = (a.textContent || '').trim();
  return '<a class="mnav-link'+active+'" href="'+href+'">'+
           '<span class="mnav-num">'+n+'</span>'+
           '<span class="mnav-label">'+label+'</span>'+
           '<span class="mnav-arrow" aria-hidden="true">&#8599;</span>'+
         '</a>';
}).join('');

var ctaHref = ctaEl ? ctaEl.getAttribute('href') : 'mailto:consultancy@gses.com.au';
var ctaText = ctaEl ? (ctaEl.textContent || 'Get in touch').trim() : 'Get in touch';

overlay.innerHTML =
  '<div class="mnav-glow" aria-hidden="true"></div>'+
  '<div class="mnav-inner">'+
    '<span class="mnav-eyebrow">Menu</span>'+
    '<nav class="mnav-links" aria-label="Mobile navigation">'+rows+'</nav>'+
    '<div class="mnav-foot">'+
      '<a class="mnav-cta" href="'+ctaHref+'">'+ctaText+' &#8594;</a>'+
      '<div class="mnav-contact">'+
        '<a href="mailto:consultancy@gses.com.au">consultancy@gses.com.au</a>'+
        '<span class="mnav-sep">&middot;</span>'+
        '<a href="tel:+61290245312">+61 2 9024 5312</a>'+
        '<span class="mnav-sep">&middot;</span>'+
        '<span>Waterloo NSW, Australia</span>'+
      '</div>'+
    '</div>'+
  '</div>';
document.body.appendChild(overlay);

/* ── Open / close ── */
var root = document.documentElement;
var isOpen = false;
var scrollY = 0;

function open(){
  if(isOpen) return;
  isOpen = true;
  scrollY = window.scrollY || window.pageYOffset || 0;
  /* Lock the page behind the menu (reliable with native + Lenis scroll) */
  root.classList.add('mnav-lock');
  document.body.style.position = 'fixed';
  document.body.style.top = (-scrollY) + 'px';
  document.body.style.left = '0';
  document.body.style.right = '0';
  root.classList.add('mnav-open');
  toggle.setAttribute('aria-expanded','true');
  toggle.setAttribute('aria-label','Close menu');
  document.addEventListener('keydown', onKey);
}

function close(){
  if(!isOpen) return;
  isOpen = false;
  root.classList.remove('mnav-open');
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Open menu');
  document.removeEventListener('keydown', onKey);
  /* Restore scroll position */
  root.classList.remove('mnav-lock');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  window.scrollTo(0, scrollY);
}

function onKey(e){ if(e.key === 'Escape' || e.keyCode === 27) close(); }

toggle.addEventListener('click', function(){ isOpen ? close() : open(); });

/* Close when a menu link is tapped. Same-page hash links just scroll;
   real navigations proceed after we release the scroll lock so the
   destination lands at the top. */
overlay.querySelectorAll('.mnav-link, .mnav-cta').forEach(function(a){
  a.addEventListener('click', function(){
    var href = a.getAttribute('href') || '';
    var samePageHash = href.charAt(0) === '#';
    close();
    if(samePageHash){
      var target = document.querySelector(href);
      if(target) setTimeout(function(){ target.scrollIntoView({behavior:'smooth'}); }, 60);
    }
    /* For cross-page / mailto / tel links, default navigation continues. */
  });
});

/* Close if we grow past the mobile breakpoint */
var mq = window.matchMedia('(min-width:769px)');
var onMq = function(e){ if(e.matches) close(); };
if(mq.addEventListener) mq.addEventListener('change', onMq);
else if(mq.addListener) mq.addListener(onMq); /* legacy Safari */
})();
