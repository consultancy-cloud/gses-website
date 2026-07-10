// GSES Shared JS — nav, cursor, lenis, page transitions
// Loaded on every page
(function(){
'use strict';
if(typeof gsap==='undefined') return;

var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
gsap.registerPlugin(ScrollTrigger);
if(window.SplitText) gsap.registerPlugin(SplitText);

// Lenis
if(typeof Lenis!=='undefined'){
  var lenis = new Lenis({ duration:1.1, lerp:.08, smoothWheel:true, autoRaf:false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function(t){ lenis.raf(t*1000); });
  gsap.ticker.lagSmoothing(0);
}

// Cursor
var dot = document.querySelector('.cur-dot');
var ring = document.querySelector('.cur-ring');
if(dot && ring && window.matchMedia('(hover:hover)').matches){
  var dX=gsap.quickTo(dot,'x',{duration:.07,ease:'none'});
  var dY=gsap.quickTo(dot,'y',{duration:.07,ease:'none'});
  var rX=gsap.quickTo(ring,'x',{duration:.38,ease:'power3.out'});
  var rY=gsap.quickTo(ring,'y',{duration:.38,ease:'power3.out'});
  window.addEventListener('mousemove',function(e){dX(e.clientX);dY(e.clientY);rX(e.clientX);rY(e.clientY);});
  document.querySelectorAll('a,button,[data-hover]').forEach(function(el){
    el.addEventListener('mouseenter',function(){gsap.to(ring,{width:52,height:52,borderColor:'rgba(0,107,53,.65)',duration:.18});});
    el.addEventListener('mouseleave',function(){gsap.to(ring,{width:36,height:36,borderColor:'rgba(0,107,53,.4)',duration:.18});});
  });
}

// Page wipe enter
var wipe = document.querySelector('.pg-wipe');
if(wipe) gsap.fromTo(wipe,{scaleY:1},{scaleY:0,duration:.55,ease:'power2.inOut',transformOrigin:'top',delay:.04});

// Nav elevated on scroll
var nav = document.getElementById('nav');
if(nav){
  ScrollTrigger.create({start:'top -50',
    onEnter:function(){nav.classList.add('elevated');},
    onLeaveBack:function(){nav.classList.remove('elevated');}
  });
}

// Generic scroll reveals
if(!rm){
  gsap.utils.toArray('.rv').forEach(function(el){
    gsap.fromTo(el,{opacity:0,y:26},{opacity:1,y:0,duration:.68,ease:'power2.out',
      scrollTrigger:{trigger:el,start:'top 92%',once:true}});
  });
  gsap.utils.toArray('.rv-l').forEach(function(el){
    gsap.fromTo(el,{opacity:0,x:-22},{opacity:1,x:0,duration:.65,ease:'power2.out',
      scrollTrigger:{trigger:el,start:'top 90%',once:true}});
  });
  gsap.utils.toArray('.rv-r').forEach(function(el){
    gsap.fromTo(el,{opacity:0,x:22},{opacity:1,x:0,duration:.65,ease:'power2.out',
      scrollTrigger:{trigger:el,start:'top 90%',once:true}});
  });
}

// Page exit
if(wipe){
  document.querySelectorAll('a[href]').forEach(function(a){
    var href = a.getAttribute('href');
    if(!href) return;
    if(a.hostname && a.hostname!==window.location.hostname) return;
    if(href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('tel:')) return;
    if(a.target==='_blank') return;
    a.addEventListener('click',function(e){
      e.preventDefault();
      var dest=a.href;
      gsap.to(wipe,{scaleY:1,duration:.38,ease:'power2.inOut',transformOrigin:'bottom',
        onComplete:function(){window.location.href=dest;}});
    });
  });
}

window.addEventListener('load',function(){setTimeout(function(){ScrollTrigger.refresh();},200);});
})();
