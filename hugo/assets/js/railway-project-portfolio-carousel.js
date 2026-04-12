function initStartupFinancialModelCarousel() {
  console.log("startup carousel: init called");

  const carousel = document.querySelector("#railway-project-portfolio-carousel");
  console.log("startup carousel element:", carousel);

  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  const slides = carousel.querySelectorAll(".carousel-track img");

  console.log("startup carousel parts:", {
    track,
    prev,
    next,
    slidesCount: slides.length
  });

  if (!track || !prev || !next || slides.length === 0) {
    console.log("startup carousel: missing required elements");
    return;
  }

  let index = 0;

  function goToSlide(i) {
    index = i;
    console.log("startup carousel: goToSlide", i, "track width:", track.clientWidth);
    track.scrollTo({
      left: track.clientWidth * index,
      behavior: "smooth"
    });
  }

  prev.addEventListener("click", () => {
    console.log("startup carousel: prev clicked");
    const newIndex = index === 0 ? slides.length - 1 : index - 1;
    goToSlide(newIndex);
  });

  next.addEventListener("click", () => {
    console.log("startup carousel: next clicked");
    const newIndex = index === slides.length - 1 ? 0 : index + 1;
    goToSlide(newIndex);
  });

  track.addEventListener("scroll", () => {
    index = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
    console.log("startup carousel: scrolled, index =", index);
  });

  window.addEventListener("resize", () => {
    goToSlide(index);
  });

  console.log("startup carousel: listeners attached");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStartupFinancialModelCarousel);
} else {
  initStartupFinancialModelCarousel();
}