$(document).ready(function() {
  /** Example JQuery */
  // $(".services-section").click(function() {
  //   $(this).css("background-color", "black");
  // });

  /** Waypoint from: http://imakewebthings.com/waypoints/ */
  $(".about-section").waypoint(function(direction) {
    if(direction === "down"){
      $("nav").addClass('sticky-nav');
    } else {
      $("nav").removeClass('sticky-nav');
    }
  });
});