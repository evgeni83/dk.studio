$(document).ready(function () {
    $(".home-page-slider").slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      appendDots: $(".home-page-dots"),
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      draggable: false,
      swipe: false,
      zIndex: 0
    });
});