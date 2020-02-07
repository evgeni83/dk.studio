let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

$(document).ready(function() {
  $(".page-slider").css(
    "background-image",
    `url(${$(".page-slider__item:last-child")
      .children()
      .attr("src")})`
  );

  $(".page-dots__btn").each(function(i, elem) {
    var imgPath = $(elem).data("img");
    $(elem).css("background-image", `url(${imgPath})`);
  });

  $(".page-slider__img").offset({ top: 0, left: 0 });
  $(".page-dots__btn").offset({ top: 0, left: 0 });
  $(".page-dots__btn").css({
    "background-position": "center",
    "background-size": "cover"
  });

  $(window).resize(function() {
    $(".page-slider__img").offset({ top: 0, left: 0 });
    $(".page-dots__btn").offset({ top: 0, left: 0 });
    $(".page-dots__btn").css({
      "background-position": "center",
      "background-size": "cover"
    });
  });

  $(document).click(function(e) {
    if ($(e.target).hasClass("btn-contacts")) {
      $(".contacts-container").toggleClass("active");
      $(".contacts-item").toggleClass("active");
      $(".header-nav-menu").removeClass("active");
      $(".home-page-main").removeClass("hidden");
      $(".portfolio-page-main").removeClass("hidden");
      $(".cap-page-main").removeClass("hidden");
      $(".btn-menu span").removeClass("active");
      $(".btn-burger__item").removeClass("active");
      return;
    }

    if (
      $(e.target).hasClass("btn-menu") ||
      $(e.target).parent().hasClass("btn-menu")
    ) {
      openMenu();
      return;
    }

    if (
      $(e.target).hasClass("btn-burger") ||
      $(e.target).parent().hasClass("btn-burger")
    ) {
      openMenu();
      return;
    }

    closeAll();
    return;
  });

  $(".page-dots__btn").click(function(e) {
    if (
      $(".page-slider__item:last-child .page-slider__img").attr(
        "src"
      ) == $(e.currentTarget).attr("data-img")
    ) {
      return;
    }

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
      ".page-slider__img[src='" + targetImagePath + "']"
    );
    var targetSlide = targetImageElement.parent();

    $(".page-slider").append(targetSlide);

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
          $(".page-slider__img").offset({ top: 0, left: 0 });
        },
        done: function() {
          $(".page-slider").css(
            "background-image",
            `url(${$(".page-slider__item:last-child")
              .children()
              .attr("src")})`
          );
        }
      }
    );

    $(".page-slider__item:not(:last-child)").removeAttr("style");
  });

  $(".page-slider-arrow:first-child").click(function(e) {
    $(".page-slider__item:first-child").css({
      left: "-100%",
      right: "auto"
    });
    $(".page-slider").append($(".page-slider__item:first-child"));
    $(".page-slider__item:last-child").animate({
      left: 0
    });
  });

  $(".page-slider-arrow:last-child").click(function(e) {
    $(".page-slider__item:first-child").css({
      left: "auto",
      right: "-100%"
    });
    $(".page-slider").append($(".page-slider__item:first-child"));
    $(".page-slider__item:last-child").animate({
      right: 0
    });
  });

  function closeAll() {
    $(".header-nav-menu").removeClass("active");
    $(".home-page-main").removeClass("hidden");
    $(".portfolio-page-main").removeClass("hidden");
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
      $(".portfolio-page-main").addClass("hidden");
      $(".cap-page-main").addClass("hidden");
      $(".btn-menu span").addClass("active");
      $(".btn-burger__item").addClass("active");
    } else {
      $(".home-page-main").removeClass("hidden");
      $(".portfolio-page-main").removeClass("hidden");
      $(".cap-page-main").removeClass("hidden");
      $(".btn-menu span").removeClass("active");
      $(".btn-burger__item").removeClass("active");
    }
    $(".contacts-container").removeClass("active");
    $(".contacts-item").removeClass("active");
  }
});
