document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#stock-on-hand-carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  const slides = carousel.querySelectorAll("img");

  if (!track || !prev || !next || slides.length === 0) return;

  let index = 0;

  function goToSlide(i) {
    index = i;
    track.scrollTo({
      left: track.clientWidth * index,
      behavior: "smooth"
    });
  }

  prev.addEventListener("click", () => {
    const newIndex = index === 0 ? slides.length - 1 : index - 1;
    goToSlide(newIndex);
  });

  next.addEventListener("click", () => {
    const newIndex = index === slides.length - 1 ? 0 : index + 1;
    goToSlide(newIndex);
  });

  track.addEventListener("scroll", () => {
    index = Math.round(track.scrollLeft / track.clientWidth);
  });

  window.addEventListener("resize", () => {
    goToSlide(index);
  });
});