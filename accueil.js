"user strict";

const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelectorAll('.logo');
const medias = document.querySelectorAll('.bulle');


window.addEventListener('load', ()=> {

     const TL = gsap.timeline ({paused: true});

     TL.staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
     TL.staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
     TL.from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
     TL.staggerFrom(medias, 1, {right: -200, opacity: 0, ease: "power2.out"}, 0.3, '-=1');
     
     TL.play();
})