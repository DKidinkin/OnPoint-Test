$(window).on("touchmove", function(evt) {
  var touch = evt.originalEvent.touches[0];
  var y = touch.pageY;
  
  if (y > 1550) {
    $(".down").fadeOut("slow");
  } else {
    $(".down").fadeIn("fast");
  }
});

