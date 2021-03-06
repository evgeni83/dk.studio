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

  $(".services-list-item-details").hide();

  $(".page-wrapper").on("scroll", function() {
    if ($("main").offset().top < $("header").height()) {
      $("header").addClass("not-transparent");
    } else {
      $("header").removeClass("not-transparent");
    }
  });

  $(window).resize(function() {
    $(".page-slider__img").offset({ top: 0, left: 0 });
    $(".page-dots__btn").offset({ top: 0, left: 0 });
    $(".page-dots__btn").css({
      "background-position": "center",
      "background-size": "cover"
    });

    if ($(window).innerWidth() > 480) {
      $(".services-list-item-desc-text").removeAttr("style");
    }
  });

  $(document).click(function(e) {
    if ($(e.target).hasClass("btn-contacts")) {
      if ($(".contacts-container").hasClass("active")) {
        closeAll();
        return;
      }
      $(".contacts-container").toggleClass("active");
      $(".contacts-item").toggleClass("active");
      $(".header-nav-menu").removeClass("active");
      $(".home-page-main").removeClass("hidden");
      $(".portfolio-main").removeClass("hidden");
      $(".cap-page-main").removeClass("hidden");
      $(".btn-menu span").removeClass("active");
      $(".btn-burger__item").removeClass("active");
      $(".project-main").addClass("hidden");
      return;
    }

    if (
      $(e.target).hasClass("btn-menu") ||
      $(e.target)
        .parent()
        .hasClass("btn-menu")
    ) {
      $(".cursor-pad").addClass("hidden");
      openMenu();
      return;
    }

    if (
      $(e.target).hasClass("btn-burger") ||
      $(e.target)
        .parent()
        .hasClass("btn-burger")
    ) {
      $(".cursor-pad").addClass("hidden");
      openMenu();
      return;
    }

    if (($(e.target).hasClass("project-main") || $(e.target).parents(".project-main").length > 0) && $(window).innerWidth() < 767) {
      if ($(".project-main").hasClass("hidden")) {
        closeAll();
        $(".project-main").removeClass("hidden");
        $(".cursor-pad").addClass("hidden");
        return;
      }
      closeAll();
      return;
    }

    if ($(e.target).hasClass("full-size-btn") || $(e.target).parents(".full-size-btn").length > 0) {
      closeAll();
      var currentImagePath = $(".slick-current .project-slider__img").attr("src");
      var currentImage = `<img src="${currentImagePath}" alt="foto" class="img">`;
      $(".project-popup__img").empty();
      $(".project-popup__img").append(currentImage);
      $(".header").hide();
      $(".cursor-pad").hide();
      $(".project-main").hide();
      $(".project-popup").removeClass("hidden");
      return;
    }

    if ($(e.target).hasClass("project-popup") || $(e.target).parents(".project-popup").length > 0) {
      $(".project-popup").addClass("hidden");
      $(".header").show();
      $(".cursor-pad").show();
      $(".project-main").show();
      return;
    }

    if ($(e.target).parents(".services-list-item").length > 0) {
      closeAll();

      if (
          $(e.target)
              .parents(".services-list-item")
              .find(".services-list-item-details .item")
              .hasClass("hidden")
      ) {
        $(".services-list-item-details .item").addClass("hidden");
        $(".services-list-item-details").slideUp();

        if ($(window).innerWidth() < 481) {
          $(".services-list-item-desc-text").slideUp();
        }

        $(e.target)
            .parents(".services-list-item")
          .find(".services-list-item-details")
          .slideDown();

        if ($(window).innerWidth() < 481) {
          $(e.target)
            .parents(".services-list-item")
            .find(".services-list-item-desc-text")
            .slideDown();
        }

        setTimeout(function() {
          $(e.target)
            .parents(".services-list-item")
            .find(".services-list-item-details .item")
            .removeClass("hidden");
        }, 300);
      } else {
        $(".services-list-item-details .item").addClass("hidden");
        $(".services-list-item-details").slideUp();
        if ($(window).innerWidth() < 481) {
          $(".services-list-item-desc-text").slideUp();
        }
      }
      return;
    }

    closeAll();
    return;
  });

  $(".page-dots__btn").click(function(e) {
    if (
      $(".page-slider__item:last-child .page-slider__img").attr("src") ==
      $(e.currentTarget).attr("data-img")
    ) {
      return;
    }

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

    if (targetImagePath == "img/82_003.jpg") {
      $(".home-page-main__content").html(
        '<p class="home-page-main__text">Проект загородного дома из бруса</p><a href="4-male-character-classic-style.html" class="home-page-main__link">смотреть</a>'
      );
    }

    if (targetImagePath == "img/97_002.jpg") {
      $(".home-page-main__content").html(
        '<p class="home-page-main__text">Проект дома у озера в современном стиле</p><a href="6-rhapsody-by-the-lake-modern-classic.html" class="home-page-main__link">смотреть</a>'
      );
    }

    if (targetImagePath == "img/69_02.jpg") {
      $(".home-page-main__content").html(
        '<p class="home-page-main__text">Проект дома современном скандинавском стиле</p><a href="7-scandinavian-motifs-in-modern-performance.html" class="home-page-main__link">смотреть</a>'
      );
    }

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
          $(targetImageElement).offset({ top: 0, left: 0 });
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

  $(".project-slider").slick({
    lazyLoad: "progressive",
    prevArrow: $(".cursor-pad__btn_left"),
    nextArrow: $(".cursor-pad__btn_right")
  });

  // маска ввода телефона
  $("#userTel").mask("+7(999) 999-9999");

  // Отправка данных на сервер
  $('.form').trigger('reset');
  $(function () {
    'use strict';
    $('.form').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        url: 'send.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: new FormData(this),
        success: function (msg) {
          console.log(msg);
          if (msg == 'ok') {
            closeAll();
            $(".contacts-page__main").addClass("hidden");
            $(".popup").removeClass("hidden");
            $(".popup__success-msg").removeClass("hidden");
            $('.form').trigger('reset'); // очистка формы
          } else {
            closeAll();
            $(".contacts-page__main").addClass("hidden");
            $(".popup").removeClass("hidden");
            $(".popup__error-msg").removeClass("hidden");
          }
        }
      });
    });
  });

  function closeAll() {
    $(".header-nav-menu").removeClass("active");
    $(".home-page-main").removeClass("hidden");
    $(".about-page__main").removeClass("hidden");
    $(".portfolio-main").removeClass("hidden");
    $(".services-main").removeClass("hidden");
    $(".contacts-page__main").removeClass("hidden");
    $(".popup").addClass("hidden");
    $(".popup__success-msg").addClass("hidden");
    $(".popup__error-msg").addClass("hidden");
    $(".cap-page-main").removeClass("hidden");
    $(".btn-menu span").removeClass("active");
    $(".btn-burger__item").removeClass("active");
    $(".contacts-container").removeClass("active");
    $(".contacts-item").removeClass("active");
    $(".project-main").addClass("hidden");
    $(".cursor-pad").removeClass("hidden");
  }

  function openMenu() {
    $(".header-nav-menu").toggleClass("active");
    if ($(".header-nav-menu").hasClass("active")) {
      $(".home-page-main").addClass("hidden");
      $(".about-page__main").addClass("hidden");
      $(".portfolio-main").addClass("hidden");
      $(".cap-page-main").addClass("hidden");
      $(".project-main").addClass("hidden");
      $(".services-main").addClass("hidden");
      $(".contacts-page__main").addClass("hidden");
      $(".btn-menu span").addClass("active");
      $(".btn-burger__item").addClass("active");
    } else {
      $(".home-page-main").removeClass("hidden");
      $(".about-page__main").removeClass("hidden");
      $(".portfolio-main").removeClass("hidden");
      $(".cap-page-main").removeClass("hidden");
      $(".services-main").removeClass("hidden");
      $(".contacts-page__main").removeClass("hidden");
      $(".btn-menu span").removeClass("active");
      $(".btn-burger__item").removeClass("active");
    }
    $(".contacts-container").removeClass("active");
    $(".contacts-item").removeClass("active");
  }
});
