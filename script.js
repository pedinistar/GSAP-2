gsap.to("#page-1 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page-1",
    scroller: "body",
    markers: true,
    start: "top -20%",
    end: "top 150%",
    scrub: 2,
  },
});

gsap.from("#page-2 h1", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page-2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from("#page-2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page-2 h2",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from("#page-3 #box", {
  scale: 0,
  opacity: 0,
  duration: 1,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page-3 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
    pin: true,
  },
});
