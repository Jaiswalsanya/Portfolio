$(document).ready(function () {
  $(".nav-toggle").click(function () {
    $(".collapse-toggle").toggle("slow");
    $("body").toggleClass("toggle-effect");
  });

  $(window).on("scroll", function () {
    console.log("window", window.scrollY);
    if (window.scrollY > 350) {
      $(".navbar_header").addClass("fix_header");
    } else {
      $(".navbar_header").removeClass("fix_header");
    }
  });
});
