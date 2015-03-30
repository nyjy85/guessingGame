var feedback = $('p.feedback');
var turn = $('p#count');

$(document).ready(function() { 
  
  var round = new GuessingGame();

  $('#submit').on("click", function(){
    var userInput = $('input:text').val();
 	round.play(userInput);
  });

  $('#gimme').on("click", function(){
    feedback.text(round.answer);
  });

  $('#again').on("click", function(){
  	$('input:text').val('');
  	turn.text('');
 	feedback.text("Have another go!");
 	round = new GuessingGame();
  });

});

function GuessingGame() {

  var count = 1;
  var guess = [];

  this.answer = Math.round(Math.random() * 100);	

  this.output = {
    ghostPepper: "You are a ghost pepper, deathly HOT",
    habanero: "You are a habanero pepper, on the verge of tears",
    jalapeno: "You are a Jalapeno pepper, very spicy but tolerable",
    peperoncini: "You are a peperoncini, a small kick",
    bellPepper: "You are as cold and mild as a green bell pepper",
    gameOver: "Game over. You lose",
    noRepeats: "DRY Bitch DRY",
    won: "Congrats, you fucking won!!"
  };

  this.play = function(userInput){ 
    // pushes user input into an array
    guess.push(parseInt(userInput));
    // sets the last value of the array as the number to compare to answer
    var lastNum = guess[guess.length-1];
    if (this.isRepeat(lastNum)) {
      feedback.text(output.noRepeats);
 	  count = count;
 	  $('input:text').val('');
    } else {
   	  this.compare(lastNum);
    }
    if (count > 5) return feedback.text(this.output.gameOver);
  };

  this.compare = function(lastNum){
    if (lastNum === this.answer) return feedback.text(this.output.won);
    turn.text(count++);
    if (lastNum < this.answer) {
 	  var higher = this.difference(lastNum, this.answer) + ", guess higher"; 
 	  feedback.text(higher);
    }
    if (lastNum > this.answer) {
 	  var lower = this.difference(lastNum, this.answer) + ", guess lower";
 	  feedback.text(lower);
    }
    $('input:text').val('');
  };

  this.difference = function(lastNum, answer){
    if (Math.abs(answer - lastNum) <= 5) return this.output.ghostPepper;
    if (Math.abs(answer - lastNum) <= 10) return this.output.habanero;
    if (Math.abs(answer - lastNum) <= 15) return this.output.jalapeno;
    if (Math.abs(answer - lastNum) <= 20) return this.output.peperoncini;
    else return this.output.bellPepper;
  };

  this.isRepeat = function(lastNum){
    for (var i = 0; i < guess.length-1; i++){
 	  if (lastNum === guess[i]) return true;
    }
    return false;
  };
}