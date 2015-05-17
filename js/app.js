$(document).ready(function() {

	/* Hovering */
	$('.ryu').mouseenter(function() {
     /*To show ready and hide still position */
      $('.ryu-still').hide();
      $('.ryu-ready').show();
  })
})

   .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
   .mousedown(function() {
    // play hadouken sound
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    /*$('.hadouken').show();*/

    // show hadouken and animate it to the right of the screen
    $('.hadouken').finish().show().animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
      });

    /*keydown(function (e) {
     if (e.which == 88) {
         alert('You pressed X');
     } */
   /* Pressing X
   .keydown(function( event e) { 
    if ( e.which == 88 ) {
   e.preventDefault();
    alert( "Handler for keydown called." );  
   })
    /*$('.ryu').on("keydown", { keyCode: 64} 
     {     //(function(event e) {
    alert( "Handler for keydown called." );
       })*/
  })
  .mouseup(function() {
    // ryu goes back to his ready position
     $('.ryu-throwing').hide();
     $('.ryu-ready').show();
  })
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

