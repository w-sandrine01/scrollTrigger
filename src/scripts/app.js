import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
    duration: 5,
    x: 800,
    
    // scrollTrigger: '.box' // when this appears, trigger scroll
    scrollTrigger: {
        trigger: '.box',
        toggleActions: "restart pause reverse pause", // reverse when scrolling up
        start: "top center",
        markers: true,
    } 

} )