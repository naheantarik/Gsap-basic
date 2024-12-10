// var tl = gsap.timeline();

gsap.from("#name", {
  scale: 0.5,
  duration: 5,
  rotate: 720,
  opacity: 0,
  color: "crimson",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top 0%",
    end: "bottom 0%",
    scrub: 1,
    pin: true,
  },
});

gsap.from("#page1 #name1", {
  x: -5000,
  duration: 2,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    scrub: 1,
    pin: "name1",
  },
});

gsap.from("#page1 #name2", {
  y: -3000,
  duration: 2,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    scrub: 1,
    pin: "name2",
  },
});

gsap.from("#page1 #name3", {
  x: 5000,
  duration: 2,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    scrub: 1,
    pin: "name3",
  },
});

gsap.from("#page1 #name4", {
  y: 3000,
  duration: 2,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    scrub: 1,
    pin: "name4",
  },
});

gsap.to("#page2 h2", {
  transform: "translateX(-120%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#page3 #box", {
  x: 1000,
  duration: 2,
  delay: 1,
  repeat: -1,
  yoyo: true,
});
