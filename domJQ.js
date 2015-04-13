
var feedback = $('p.feedback'), turn = $('p#count');
var $img = $('<img src="./habanero.jpg" />')
var $overlay = $('<div id="overlay"></div>');
var $winMessage = $('<p id="winmsg">Congrats you won Habanero peppers!</p>');

// for the winning message
$overlay.append($img).append($winMessage);
$("body").append($overlay);

$overlay.on("click", function(){
  $(this).hide();
});

$(document).ready(function() { 
  
  var round = new GuessingGame();

  $('#submit').on("click", function(){
    var userInput = parseInt($('input:text').val(), 10);
    if (isNaN(userInput)) alert ("please enter a valid number");
 	  else round.play(userInput);
  });

  $('#gimme').on("click", function(){
    feedback.text(round.getAnswer()+ " sucka");
  });

  $('#again').on("click", function(){
  	$('input:text').val('');
  	turn.text('');
 	  feedback.text("Have another go!");
 	  round = new GuessingGame();
  });

  
  $('.table').hide();
  $('.show').on("click", function(){
    $(this).toggleClass('pull', 1500);
    $('.table').slideToggle('slow').show();
  });

});
