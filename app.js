// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

gsap.registerPlugin(ScrollTrigger);

const gridItems = document.querySelectorAll(".grid__item");

gridItems.forEach((item) => {
  const xTransform = gsap.utils.random(-100, 100);

  gsap.set(item, {
    transformOrigin: xTransform < 0 ? "0% 50%" : "100% 50%",
  });

  gsap.to(item, {
    scale: 0,
    ease: "none",
    scrollTrigger: {
      trigger: item,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(item, {
    xPercent: xTransform,
    ease: "none",
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
});
