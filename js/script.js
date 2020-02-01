$(document).ready(function() {
  $(".home-page-slider").css(
    "background-image",
    `url(${$(".home-page-slider__item:last-child")
      .children()
      .attr("src")})`
  );

  $(".home-page-dots__btn").each(function(i, elem) {
    var imgPath = $(elem).data("img");
    $(elem).css("background-image", `url(${imgPath})`);
  });

  $(".home-page-slider__img").offset({ top: 0, left: 0 });
  $(".home-page-dots__btn").offset({ top: 0, left: 0 });
  $(".home-page-dots__btn").css({
    "background-position": "center",
    "background-size": "cover"
  });

  $(window).on("load", function () {
    console.log("!");
    $(".preloader").addClass("hidden");
  })

  $(window).on("unload", function () {
    console.log("!");
    $(".preloader").removeClass("hidden");
  })

  $(window).resize(function() {
    $(".home-page-slider__img").offset({ top: 0, left: 0 });
    $(".home-page-dots__btn").offset({ top: 0, left: 0 });
    $(".home-page-dots__btn").css({
      "background-position": "center",
      "background-size": "cover"
    });
  });

  $(document).click(function(e) {
    if ($(e.target)[0] == $(".btn-contacts")[0]) {
      $(".contacts-container").toggleClass("active");
      $(".contacts-item").toggleClass("active");
      $(".header-nav-menu").removeClass("active");
      $(".home-page-main").removeClass("hidden");
      $(".cap-page-main").removeClass("hidden");
      $(".btn-menu span").removeClass("active");
      $(".btn-burger__item").removeClass("active");
      return;
    }

    if (
      $(e.target)[0] == $(".btn-menu")[0] ||
      $(e.target).parent()[0] == $(".btn-menu")[0]
    ) {
      openMenu();
      return;
    }

    if (
      $(e.target).hasClass("btn-burger") ||
      $(e.target).parent()[0] == $(".btn-burger")[0]
    ) {
      openMenu();
      return;
    }

    closeAll();
    return;
  });

  $(".home-page-dots__btn").click(function(e) {
    if (
      $(".home-page-slider__item:last-child .home-page-slider__img").attr(
        "src"
      ) == $(e.currentTarget).attr("data-img")
    ) {
      return;
    }

    $(".home-page-dots__item").removeClass("active");
    $(e.currentTarget)
      .parent()
      .addClass("active");

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

    $(".home-page-slider").append(targetSlide);

    targetSlide.offset({ top: yClick, left: xClick });
    targetSlide.animate(
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

  $(".home-page-slider-arrow:first-child").click(function(e) {
    $(".home-page-slider__item:first-child").css({
      left: "-100%",
      right: "auto"
    });
    $(".home-page-slider").append($(".home-page-slider__item:first-child"));
    $(".home-page-slider__item:last-child").animate({
      left: 0
    });
  });

  $(".home-page-slider-arrow:last-child").click(function(e) {
    $(".home-page-slider__item:first-child").css({
      left: "auto",
      right: "-100%"
    });
    $(".home-page-slider").append($(".home-page-slider__item:first-child"));
    $(".home-page-slider__item:last-child").animate({
      right: 0
    });
  });

  function closeAll() {
    $(".header-nav-menu").removeClass("active");
    $(".home-page-main").removeClass("hidden");
    $(".cap-page-main").removeClass("hidden");
    $(".btn-menu span").removeClass("active");
    $(".btn-burger__item").removeClass("active");
    $(".contacts-container").removeClass("active");
    $(".contacts-item").removeClass("active");
  }

  function openMenu() {
    $(".header-nav-menu").toggleClass("active");
    if ($(".header-nav-menu").hasClass("active")) {
      $(".home-page-main").addClass("hidden");
      $(".cap-page-main").addClass("hidden");
      $(".btn-menu span").addClass("active");
      $(".btn-burger__item").addClass("active");
    } else {
      $(".home-page-main").removeClass("hidden");
      $(".cap-page-main").removeClass("hidden");
      $(".btn-menu span").removeClass("active");
      $(".btn-burger__item").removeClass("active");
    }
    $(".contacts-container").removeClass("active");
    $(".contacts-item").removeClass("active");
  }
});
