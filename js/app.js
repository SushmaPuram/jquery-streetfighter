$(document).ready(function() {

  /* Hovering */
  $('.ryu').mouseenter(function() {
    /*To show ready and hide still position */
    $('.ryu-still').hide();
    $('.ryu-ready').show();
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

    // show hadouken and animate it to the right of the screen
    $('.hadouken').finish().show().animate(
        {'left': '1020px'},
        500,
        function() {
          $(this).hide();
          $(this).css('left', '520px');
        });
  })
  .mouseup(function() {
    // ryu goes back to his ready position
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  $(document).keydown(function (e) {
    if (e.keyCode == 88) {
      console.log('You pressed X');
    }
  })
  /*.keyup(function(e) {

  });*/

  function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

});