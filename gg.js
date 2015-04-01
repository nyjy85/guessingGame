
var feedback = $('p.feedback'), turn = $('p#count');

$(document).ready(function() { 
  
  var round = new GuessingGame();

  $('#submit').on("click", function(){
    var userInput = $('input:text').val();
 	  round.play(userInput);
  });

  $('#gimme').on("click", function(){
    feedback.text(round.getAnswer());
  });

  $('#again').on("click", function(){
  	$('input:text').val('');
  	turn.text('');
 	  feedback.text("Have another go!");
 	  round = new GuessingGame();
  });

  $('.show').on("click", function(){
    $(this).toggleClass('pull', 1500);
    $('.table').slideToggle('slow');
  });

});

function GuessingGame() {
  // set `count` to private var so users can't cheat
  var count = 1;
  this.getCount = function(){return count};
  this.setCount = function(){count++};
  this.guess = [];

  var answer = Math.round(Math.random() * 100);	//set to private variable
  this.getAnswer = function(){return answer};


  this.output = {
    ghostPepper: "You are a ghost pepper, deathly HOT",
    habanero: "You are a habanero pepper, on the verge of tears",
    jalapeno: "You are a Jalapeno pepper, very spicy but tolerable",
    peperoncini: "You are a peperoncini, a small kick",
    bellPepper: "You are as cold and mild as a green bell pepper",
    gameOver: "Game over. You lose",
    noRepeats: "Don't Repeat Yoself",
    won: "Congrats, you fucking won!!"
  };
}


GuessingGame.prototype.play = function(userInput){
  this.guess.push(parseInt(userInput));
  var lastNum = this.guess[this.guess.length-1];
  if (this.isRepeat(lastNum)) this.tellThem(this.output.noRepeats);
  else this.compare(lastNum);
};

GuessingGame.prototype.compare = function(lastNum){
  if (lastNum === this.getAnswer()) return this.tellThem(this.output.won);
  this.displayCount();
  this.giveFeedback(lastNum);
};

GuessingGame.prototype.giveFeedback = function(lastNum){
  var higher = this.difference(lastNum) + ", guess higher"; 
  var lower = this.difference(lastNum) + ", guess lower";
  if (this.getCount() > 5) return this.tellThem(this.output.gameOver);
  lastNum < this.getAnswer() ? this.tellThem(higher) : this.tellThem(lower);
};

GuessingGame.prototype.difference = function(lastNum){
  var diff = Math.abs(this.getAnswer() - lastNum)
  return this.scale(diff);
};

GuessingGame.prototype.scale = function(diff){
  if (diff <= 5) return this.output.ghostPepper; 
  if (diff <= 10) return this.output.habanero;
  if (diff <= 15) return this.output.jalapeno;
  if (diff <= 20) return this.output.peperoncini;
  else return this.output.bellPepper;
}
>>>>>>> master

GuessingGame.prototype.isRepeat = function(lastNum){
  for (var i = 0; i < this.guess.length-1; i++){
    if (lastNum === this.guess[i]) return true;
  }
  return false;
};

GuessingGame.prototype.displayCount = function(){
  turn.text(this.getCount());  
  this.setCount();
};

GuessingGame.prototype.tellThem = function(output){
  feedback.text(output);
  $('input:text').val('');
};

