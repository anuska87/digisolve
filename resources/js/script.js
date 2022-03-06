
$(document).ready(function() {
  /** BASIC EXAMPLE JQuery */
  // $(document).ready(function() {
  //   $(".services-section").click(function() {
  //     $(this).css("background-color", "black");
  //   });
  // })

  /** Waypoint from: http://imakewebthings.com/waypoints/ */
  /** Adding Sticky navigation */
  $(".js--about-section").waypoint(function(direction) {
    if(direction === "down"){
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").removeClass("sticky-nav");
    }
  });

  /** Animations on scroll */
  /** Animations from https://animate.style/ */
  $(".js--about-section").waypoint(function() {
    $(".js--about-box").addClass("animate__animated animate__fadeIn");
  }, {
    offset: "50%"
  });

  $(".js--services-section").waypoint(function() {
    $(".js--service-box").addClass("animate__animated animate__zoomIn");
  }, {
    offset: "50%"
  });

  $(".js--packages-section").waypoint(function() {
    $(".js--enterprise").addClass("animate__animated animate__pulse");
  });

  /** Scrolling to contact section */
  $(".js--scroll-to-contact").click(function() {
    $("html, body").animate({scrollTop:$(".js--contact").offset().top}, 1000)
  });
});
