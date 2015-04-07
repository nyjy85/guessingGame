

function GuessingGame() {
  // set `count` and `answer` to private var so users can't cheat
  var count = 1;
  this.getCount = function(){return count};
  this.setCount = function(){count++};
  this.guess = [];

  var answer = Math.round(Math.random() * 100);	
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


//IIFE?
(function protect(GG){


  GG.play = function(userInput){
    this.guess.push(userInput);
    var lastNum = this.guess[this.guess.length-1];
    if (this.isRepeat(lastNum)) this.tellThem(this.output.noRepeats);
    else this.compare(lastNum);
  };

  GG.compare = function(lastNum){
    if (lastNum === this.getAnswer()) {
      $overlay.show();
      return this.tellThem(this.output.won);
    }
    this.displayCount();
    this.giveFeedback(lastNum);
  };

  GG.giveFeedback = function(lastNum){
    var higher = this.difference(lastNum) + ", guess higher"; 
    var lower = this.difference(lastNum) + ", guess lower";
    if (this.getCount() > 5) return this.tellThem(this.output.gameOver);
    lastNum < this.getAnswer() ? this.tellThem(higher) : this.tellThem(lower);
  };

  GG.difference = function(lastNum){
    var diff = Math.abs(this.getAnswer() - lastNum)
    return this.scale(diff);
  };

  GG.scale = function(diff){
    if (diff <= 5) return this.output.ghostPepper; 
    if (diff <= 10) return this.output.habanero;
    if (diff <= 15) return this.output.jalapeno;
    if (diff <= 20) return this.output.peperoncini;
    else return this.output.bellPepper;
  }

  GG.isRepeat = function(lastNum){
    for (var i = 0; i < this.guess.length-1; i++){
      if (lastNum === this.guess[i]) return true;
    }
    return false;
  };

  GG.displayCount = function(){
    turn.text(this.getCount());  
    this.setCount();
  };

  GG.tellThem = function(output){
    feedback.text(output);
    $('input:text').val('');
  };
})(GuessingGame.prototype);

