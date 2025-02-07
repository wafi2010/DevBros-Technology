$(document).ready(function () {
  // Owl Carousel Initialization
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });

  // Auto-scroll for services
  const serviceContainer = document.querySelector(".serv-content");
  let scrollStep = 2;
  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      if (
        serviceContainer.scrollLeft >=
        serviceContainer.scrollWidth - serviceContainer.clientWidth
      ) {
        serviceContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        serviceContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }, 50);
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  serviceContainer.addEventListener("mouseenter", stopAutoScroll);
  serviceContainer.addEventListener("mouseleave", startAutoScroll);
  startAutoScroll();
});
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".menu").toggleClass("active");
    $(this).toggleClass("open");
  });
  $(".menu a").click(function () {
    $(".menu").removeClass("active");
    $(".menu-btn").removeClass("open");
  });
});
function mode(){
  
}