
$(document).ready(function() {
  /** BASIC EXAMPLE JQuery */
  // $(document).ready(function() {
  //   $(".services-section").click(function() {
  //     $(this).css("background-color", "black");
  //   });
  // })

  /** Waypoint from: http://imakewebthings.com/waypoints/ */
  /** Adding Sticky navigation */
  $(".about-section").waypoint(function(direction) {
    if(direction === "down"){
      $("nav").addClass('sticky-nav');
    } else {
      $("nav").removeClass('sticky-nav');
    }
  });

  /** Animation on scroll */
  $(".js--about-section").waypoint(function() {
    $(".js--about-box").addClass("animate__animated animate__fadeIn");
  }, {
    offset: "50%"
  });
});
