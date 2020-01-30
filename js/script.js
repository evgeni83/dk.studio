$(document).ready(function() {
  // $(".home-page-slider").slick({
  //   slidesToShow: 1,
  //   arrows: false,
  //   dots: true,
  //   appendDots: $(".home-page-dots"),
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear',
  //   draggable: false,
  //   swipe: false,
  //   zIndex: 0,
  //   responsive: [
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         infinite: true,
  //         arrows: true,
  //         appendArrows: $(".home-page-slider-arrows"),
  //         dots: false,
  //         swipe: true,
  //         draggable: true
  //       }
  //     }
  //   ]
  // });
  // $('.home-page-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //   console.log(slick);
  //   console.log(currentSlide);
  //   console.log(nextSlide);
  //   console.log($(slick.$slides[currentSlide]));
  // });

  $(".home-page-slider").css(
    "background-image",
    `url(${$(".home-page-slider__item:last-child")
      .children()
      .attr("src")})`
  );
  $(".home-page-slider__img").offset({ top: 0, left: 0 });

  $(".home-page-dots__btn").on("click", function() {
    $(".home-page-slider").css(
      "background-image",
      `url(${$(".home-page-slider__item:last-child")
        .children()
        .attr("src")})`
    );

    var targetImagePath = $(this).attr("data-img");
    var targetImageElement = $(
      ".home-page-slider__img[src='" + targetImagePath + "']"
    );
    var targetSlide = targetImageElement.parent();

    $(".home-page-slider").append($(targetSlide));

    $(targetSlide).animate({
      height: "200%",
      width: "200%"
      // "border-radius": "0",
    });

    $(".home-page-slider__img").offset({ top: 0, left: 0 });

    $(".home-page-slider__item:not(:last-child)").removeAttr("style");

  });

  $(window).resize(function() {
    $(".home-page-slider__img").offset({ top: 0, left: 0 });
  });
});
