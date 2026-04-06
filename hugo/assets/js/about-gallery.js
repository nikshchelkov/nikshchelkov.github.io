document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector("#about-gallery");
  if (!gallery) return;

  const track = gallery.querySelector(".about-gallery-track");
  const prev = gallery.querySelector(".prev");
  const next = gallery.querySelector(".next");
  const slides = gallery.querySelectorAll("img");

  if (!track || !prev || !next || slides.length === 0) return;

  let index = 0;

  function goToSlide(i) {
    index = ((i % slides.length) + slides.length) % slides.length;
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