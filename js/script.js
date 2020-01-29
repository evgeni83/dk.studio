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
      zIndex: 0,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            infinite: true,
            arrows: true,
            appendArrows: $(".home-page-slider-arrows"),
            dots: false,
            swipe: true,
            draggable: true
          }
        }
      ]
    });

    $('.home-page-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(slick);
      console.log(currentSlide);
      console.log(nextSlide);

      console.log($(slick.$slides[currentSlide]));
    });

});

