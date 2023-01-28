const openBurger = document.querySelector('.burger');
const closeBurger = document.querySelector('.close');
const burger = document.querySelector('.menu');

let tl = gsap.timeline({play: true});

tl.fromTo(".hero__title, .hero__btn", { opacity: 0, y: 100 }, { opacity: 1, duration: 1, y: 0, ease: "ease-in-out" })
  .fromTo(".hero__descr", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "ease-in-out" })
  .fromTo(".photos__head-1", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "ease-in-out" })
  .fromTo(".photos__head-2", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "ease-in-out" })
  .fromTo(".photos__head-3", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "ease-in-out" })
  .fromTo(".photos__author", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "ease-in-out" })

closeBurger.addEventListener('click', function() {
  burger.style.display = 'none'
  menu.reverse()
  tl.play()
})


let menu = gsap.timeline({paused: true});

menu.fromTo('.menu', { opacity: 0}, { opacity: 1, duration: 0.7 })
    .fromTo('.nav__list', { opacity: 0, y: 50}, { opacity: 1, duration: 0.7, y: 0 })
    .fromTo('.social', { opacity: 0, y: 50}, { opacity: 1, duration: 0.7, y: 0 })
    .fromTo('.menu__right',{ opacity: 0, y: 50}, { opacity: 1, duration: 0.7, y: 0, }, "-=0.7" )

openBurger.addEventListener('click', function() {
  burger.style.display = 'block'
  tl.reverse()
  menu.play()
})
