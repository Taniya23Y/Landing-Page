const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// gsap.to("#one",{
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration:2
// })

// document.querySelectorAll(".imageContainer")
// .forEach(function(elem){
//    gsap.to(elem,{
//     ease: Expo.easeInOut,
//     width: "100%",
//     duration: 2,
//     stagger: 2
//    })
// })

// gsaptimeline

var tl = gsap.timeline({
    repeat: -1,
});  

tl.to(".imageContainer",{
    ease: Expo.easeInOut,
    width: "100%",
    // duration: 1.5,
    stagger: 2
}, 'anya')

tl.to(".text h1",{
    ease: Expo.easeInOut,
    top: 0,
    stagger: 2
}, 'anya')

tl.to(".text h1",{
    ease: Expo.easeInOut,
    delay: 2,
    top: "-100%",
    stagger: 1.5
}, 'anya')


//--------------------
