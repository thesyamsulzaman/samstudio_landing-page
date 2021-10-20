document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(() => {
    //$(window).height();
    //$(window).scrollTop();
    //$(element).offset();

    $(document).revealOnScroll = function () {
      return this.each(function () {});
    };
    $(".hero__header .display-5").css("opacity", 0);
    $(".about__img").css("opacity", 0);

    $(window).scroll(function () {
      $(".debug-label").html($(window).scrollTop());
      console.log(
        "Header Offset : ",
        $(".hero__header .display-5").offset().top
      );
      console.log("Top           : ", $(window).scrollTop());
      console.log(
        "Bottom        : ",
        $(window).scrollTop() + $(window).height()
      );

      if (!$(".hero__header .display-5").hasClass("animation-complete")) {
        if (
          $(window).scrollTop() + $(window).height() >
          $(".hero__header .display-5").offset().top
        ) {
          $(".hero__header .display-5")
            .animate({ opacity: 1 }, 1000)
            .addClass("animation-complete");
          $(".about__img").animate({ opacity: 1 }, 1000);
        }
      }
    });
  });
});
