$(document).ready(function() {
    $('.ryu').mouseenter(function() {
      $('.ryu-still').hide();
      $('.ryu-ready').show();
  })

  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })

  .mousedown(function() {
    playSound('#hadouken-sound');
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {'left': '1020px'},500, function() {
    $(this).hide();
    $(this).css('left','520px');
  });
  })

  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
})

$("html").keydown(function (e){
  if (e.keyCode == 88) {
    $(".ryu-ready").hide();
    $(".ryu-cool").show();
  }
});
$("html").keyup(function (e){
  if (e.keyCode == 88) {
    $(".ryu-ready").show();
    $(".ryu-cool").hide();
  }
});

function playSound(selector) {
  $(selector)[0].volume = 0.5;
  $(selector)[0].load();
  $(selector)[0].play();
}
