// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

const gridItems = document.querySelectorAll(".grid__item");

for (const item of gridItems) {
  const xTransform = gsap.utils.random(-100, 100);

  gsap
    .timeline()
    .set(item, {
      transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
    })
    .to(item, {
      scale: 0,
      ease: "none",
    });
}
