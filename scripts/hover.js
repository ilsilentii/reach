$(document).ready(function(){
  $("#onHover")[0].volume = 0.2;

  $(".select1").mouseenter(function() {
    if (!$( ".select1" ).hasClass( "pulse" )) {
    $(".select1").addClass("pulse");
    $(".select2").removeClass("pulse");
    $("#onHover")[0].play();
  }
  });

  $(".select2").mouseenter(function() {
    if (!$( ".select2" ).hasClass( "pulse" )) {
    $(".select2").addClass("pulse");
    $(".select1").removeClass("pulse");
    $("#onHover")[0].play();
  }
  });
});
