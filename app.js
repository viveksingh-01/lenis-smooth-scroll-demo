// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

gsap.registerPlugin(ScrollTrigger);

// Select all grid items that should be animated
const gridItems = document.querySelectorAll(".grid__item");

gridItems.forEach((item) => {
  // Generate a random horizontal movement value
  // Example: -75, 40, 90, etc.
  // Negative values move left, positive values move right.
  const xTransform = gsap.utils.random(-100, 100);

  // Set the transform origin BEFORE any animations run.
  //
  // Why?
  // When the item scales down to 0, we want it to shrink
  // from the side it's moving toward.
  //
  // Moving left  -> shrink from left edge (0% 50%)
  // Moving right -> shrink from right edge (100% 50%)
  gsap.set(item, {
    transformOrigin:
      xTransform < 0
        ? "0% 50%" // left-center
        : "100% 50%", // right-center
  });

  // -----------------------------------------
  // SCALE ANIMATION
  // -----------------------------------------
  //
  // As the item scrolls past the top of the viewport,
  // it gradually shrinks until it disappears.
  //
  // Start: item's top reaches viewport top
  // End:   item's bottom reaches viewport top
  //
  // scrub: true
  // ties animation progress directly to scroll position.
  gsap.to(item, {
    scale: 0,
    ease: "none",

    scrollTrigger: {
      trigger: item,

      // Start shrinking when the item's top
      // reaches the top of the viewport.
      start: "top top",

      // Finish shrinking when the item's bottom
      // reaches the top of the viewport.
      end: "bottom top",

      // Animation progress follows scroll progress.
      scrub: true,

      // Uncomment while debugging:
      // markers: true,
    },
  });

  // -----------------------------------------
  // HORIZONTAL MOVEMENT
  // -----------------------------------------
  //
  // Move the item left or right while it travels through the viewport.
  //
  // The movement begins as soon as the item enters
  // the viewport and ends when it leaves.
  gsap.to(item, {
    xPercent: xTransform,
    ease: "none",

    scrollTrigger: {
      trigger: item,

      // Start when the top of the item reaches
      // the bottom of the viewport (enters view).
      start: "top bottom",

      // End when the bottom of the item reaches
      // the top of the viewport (fully leaves view).
      end: "bottom top",

      // Tie movement directly to scrolling.
      scrub: true,

      // Uncomment while debugging:
      // markers: true,
    },
  });
});

gsap.from("footer h5", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
  },
});

gsap.from("footer h1", {
  y: 200,
  opacity: 0,
  stagger: 0.05,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
    end: "bottom bottom",
    scrub: true,
  },
});
