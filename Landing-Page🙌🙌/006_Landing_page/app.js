var tl = gsap.timeline()
tl.from(".image_1",{
    delay: 0.3,
    opacity: 0,
    duration: 1,
    y: 60
})

tl.from(".image_2",{
    delay: 0.3,
    opacity: 0,
    duration: 1,
    x: 60
})

tl.from(".image_3",{
    delay: 0.3,
    opacity: 0,
    duration: 1,
    y: -60
})

tl.from(".page2 h5",{
    delay: 0.3,
    opacity: 0,
    duration: 1,
   
})

tl.from(".page2 h5, .page2 h1, .page2 .about-us",{
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".page2 h5",
        scroller: ".body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
    }
})