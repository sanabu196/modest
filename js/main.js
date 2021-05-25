document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    autoplay: true,
    interval: 6000,
    type: "loop",
    pagination: true,
  }).mount();
});
