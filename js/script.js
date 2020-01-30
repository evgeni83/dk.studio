$(document).ready(function() {
  $(".home-page-slider").css(
    "background-image",
    `url(${$(".home-page-slider__item:last-child")
      .children()
      .attr("src")})`
  );

  $(".home-page-dots__btn").each(function(i, elem) {
    var imgPath = $(elem).data("img")
    $(elem).css("background-image", `url(${imgPath})`);
  });

  $(".home-page-slider__img").offset({ top: 0, left: 0 });
  $(".home-page-dots__btn").offset({ top: 0, left: 0 });

  $(".home-page-dots__btn").css({
    "background-position": "center",
    "background-size": "cover"
  });

  $(window).resize(function() {
    $(".home-page-slider__img").offset({ top: 0, left: 0 });
    $(".home-page-dots__btn").offset({ top: 0, left: 0 });
    $(".home-page-dots__btn").css({
      "background-position": "center",
      "background-size": "cover"
    });
  });

  $(".home-page-dots__item:first-child").offset();

  $(".home-page-dots__btn").click(function(e) {
    if (
      $(".home-page-slider__item:last-child .home-page-slider__img").attr(
        "src"
      ) == $(e.currentTarget).attr("data-img")
    ) {
      return;
    }

    $(".home-page-dots__item").removeClass("active");
    $(e.currentTarget).parent().addClass("active");

    var xClick =
      $(e.target)
        .parent()
        .offset().left +
      $(e.target)
        .parent()
        .width() /
        2;
    var yClick =
      $(e.target)
        .parent()
        .offset().top +
      $(e.target)
        .parent()
        .height() /
        2;

    var targetImagePath = $(this).attr("data-img");
    var targetImageElement = $(
      ".home-page-slider__img[src='" + targetImagePath + "']"
    );
    var targetSlide = targetImageElement.parent();

    $(".home-page-slider").append($(targetSlide));

    $(targetSlide).offset({ top: yClick, left: xClick });

    $(targetSlide).animate(
      {
        left: -500,
        top: -500,
        right: -500,
        bottom: -500
      },
      {
        duration: 1000,
        progress: function() {
          $(".home-page-slider__img").offset({ top: 0, left: 0 });
        },
        done: function() {
          $(".home-page-slider").css(
            "background-image",
            `url(${$(".home-page-slider__item:last-child")
              .children()
              .attr("src")})`
          );
        }
      }
    );

    $(".home-page-slider__item:not(:last-child)").removeAttr("style");
  });
});
