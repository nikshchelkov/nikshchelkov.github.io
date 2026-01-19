---
title: "About"
---

I focus on analytics engineering, stakeholder-ready BI, ML pipelines, and pragmatic AI agent prototypes designed for constrained environments.

<!-- Swiper styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>

<style>
/* About gallery - swipe + autoplay only (no arrows) */
.about-gallery{
  margin: 1.25rem 0 1.25rem 0;
  border: 1px solid rgba(127,127,127,0.22);
  border-radius: 18px;
  overflow: hidden;
}

.about-gallery .swiper{
  width: 100%;
  height: 460px;
  position: relative;
}
@media (max-width: 900px){
  .about-gallery .swiper { height: 340px; }
}

.about-gallery .swiper-slide{
  background: rgba(127,127,127,0.06);
}

/* Keep proportions and prevent any theme transforms */
.about-gallery img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  max-width: 100%;
  transform: none !important;
}

/* Prevent theme click/zoom behaviors inside the gallery */
.about-gallery a,
.about-gallery img{
  pointer-events: none;
  cursor: default;
}

/* Pagination dots */
.about-gallery .swiper-pagination-bullet{
  background: rgba(255,255,255,0.85);
  opacity: 0.75;
}
.about-gallery .swiper-pagination-bullet-active{
  opacity: 1;
}

/* Caption */
.about-gallery .caption{
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(127,127,127,0.18);
  font-size: 0.95rem;
  opacity: 0.9;
}
</style>

<div class="about-gallery">
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="/images/about/01.jpg" alt="About photo 1"></div>
      <div class="swiper-slide"><img src="/images/about/02.jpg" alt="About photo 2"></div>
      <div class="swiper-slide"><img src="/images/about/03.jpg" alt="About photo 3"></div>
      <div class="swiper-slide"><img src="/images/about/04.jpg" alt="About photo 4"></div>
    </div>

    <div class="swiper-pagination"></div>
  </div>

  <div class="caption">Selected moments (swipe to browse).</div>
</div>

<!-- Swiper script -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
  new Swiper('.about-gallery .swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,

    autoplay: { delay: 9000, disableOnInteraction: false },
    speed: 650,

    pagination: { el: '.about-gallery .swiper-pagination', clickable: true },
    keyboard: { enabled: true }
  });
</script>

## Core strengths
- Power BI semantic modeling and DAX
- ML pipeline design, evaluation, interpretability
- RAG and tool-calling prototypes with logging and guardrails