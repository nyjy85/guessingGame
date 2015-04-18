// $(document).ready(function() { 

//  	var answer = Math.round(Math.random() * 100);	
//  	var guess = [];
//  	var count = 1;

 	
//  	var feedback = $('p.feedback');
//  	var gameOver = "Game over. You lose";
//  	var noRepeats = "DRY Bitch DRY";
//  	var won = "Congrats, you fucking won!!";
//  	var turn = $('p#count');


//  	function play(userInput){ // this will be an onclick event
//  		if (count === 5) return feedback.text(gameOver);
//  		guess.push(parseInt(userInput));
//  		var lastNum = guess[guess.length-1];
//  		if (isRepeat(lastNum)) {
//  			feedback.text(noRepeats);
//  			count = count;
//  			$('input:text').val('');
//  		} else {
//  			compare(lastNum);
//  		}
//  	};

//  	function compare(lastNum){
//  		turn.text(count++);
//  		if (lastNum === answer) return feedback.text(won);
//  		if (lastNum < answer) {
//  			var higher = difference(lastNum, answer) + ", guess higher";
//  			feedback.text(higher);
//  		}
//  		if (lastNum > answer) {
//  			var lower = difference(lastNum, answer) + ", guess lower";
//  			feedback.text(lower);
//  		}
//  		$('input:text').val('');
//  	};

//  	function difference(lastNum, answer){
//  		if (Math.abs(answer - lastNum) <= 5) return "You are  a ghost pepper, deathly HOT";
//  		if (Math.abs(answer - lastNum) <= 10) return "You are a habanero pepper, on the verge of tears";
//  		if (Math.abs(answer - lastNum) <= 20) return "You are a Jalapeno pepper, very spicy but tolerable";
//  		if (Math.abs(answer - lastNum) <= 30) return "You are a peperoncini, a small kick";
//  		else return "You are as cold and mild as a green bell pepper";
//  	};

//  	function isRepeat(lastNum){
//  		for (var i = 0; i < guess.length-1; i++){
//  			if (lastNum === guess[i]) return true;
//  		}
//  		return false;
//  	};


//  $('#submit').on("click", function(){
//  	var userInput = $('input:text').val();
//  	play(userInput);
//  });

//  $('#gimme').on("click", function(){
//  	feedback.text(answer);
//  });

//  $('#again').on("click", function(){
//  	$('input:text').val('');
//  	feedback.text("Have another go!");
//  	count = 1;
//  	turn.text('');
//  	guess = [];
//  	answer = Math.round(Math.random() * 100);
//  });
  
// });
// $(document).ready(function() { 

//   $('#submit').on("click", function(){
//     var userInput = $('input:text').val();
//  	play(userInput);
//   });

//   $('#gimme').on("click", function(){
//     feedback.text(answer);
//   });

//   $('#again').on("click", function(){
//   	$('input:text').val('');
//  	feedback.text("Have another go!");
//  	count = 1;
//  	turn.text('');
//  	guess = [];
//  	answer = Math.round(Math.random() * 100);
//   });

// });

// var answer = Math.round(Math.random() * 100);	
// // holds all player guesses in an array
// var guess = [];
// var count = 1;


// var feedback = $('p.feedback');
// var turn = $('p#count');


// var output = {
//   ghostPepper: "You are a ghost pepper, deathly HOT",
//   habanero: "You are a habanero pepper, on the verge of tears",
//   jalapeno: "You are a Jalapeno pepper, very spicy but tolerable",
//   peperoncini: "You are a peperoncini, a small kick",
//   bellPepper: "You are as cold and mild as a green bell pepper",
//   gameOver: "Game over. You lose",
//   noRepeats: "DRY Bitch DRY",
//   won: "Congrats, you fucking won!!"
// };

// function play(userInput){ 
//   if (count === 5) return feedback.text(output.gameOver);
//   // pushes user input into an array
//   guess.push(parseInt(userInput));
//   // sets the last value of the array as the number to compare to answer
//   var lastNum = guess[guess.length-1];
//   if (isRepeat(lastNum)) {
//     feedback.text(output.noRepeats);
//  	count = count;
//  	$('input:text').val('');
//    } else {
//    	  compare(lastNum);
//    	}
// };

// function compare(lastNum){
//   turn.text(count++);
//   if (lastNum === answer) return feedback.text(output.won);
//   if (lastNum < answer) {
//  	var higher = difference(lastNum, answer) + ", guess higher"; 
//  	feedback.text(higher);
//   }
//   if (lastNum > answer) {
//  	var lower = difference(lastNum, answer) + ", guess lower";
//  	feedback.text(lower);
//   }
//   $('input:text').val('');
// };

// function difference(lastNum, answer){
//   if (Math.abs(answer - lastNum) <= 5) return output.ghostPepper;
//   if (Math.abs(answer - lastNum) <= 10) return output.habanero;
//   if (Math.abs(answer - lastNum) <= 20) return output.jalapeno;
//   if (Math.abs(answer - lastNum) <= 30) return output.peperoncini;
//   else return output.bellPepper;
// };

// function isRepeat(lastNum){
//   for (var i = 0; i < guess.length-1; i++){
//  	if (lastNum === guess[i]) return true;
//   }
//   return false;
// };
 
 // for testing purposes

//  function GuessingGame() { 
// var answer = Math.round(Math.random() * 100);
//  	var guess = [];
//  	var count = 0;

//  	this.play = function (){ // this will be an onclick event
//  		if (count === 5) return "Game over. You lose";
//  		guess.push(parseInt(prompt('Enter a number')));
//  		var lastNum = guess[guess.length-1];
//  		if (isRepeat(lastNum)) {
//  			alert("DRY");
//  			this.play();
//  		} else {
//  			this.compare(lastNum);
//  		}
//  	};

//  	this.compare = function (lastNum){
//  		count++;
//  		if (lastNum === answer) return console.log("Congrats, you fucking won!!");
//  		if (lastNum < answer) alert(this.difference(lastNum, answer) + ", guess higher");
//  		if (lastNum > answer) alert(this.difference(lastNum, answer) + ", guess lower");
//  		this.play();
//  	};

//  	this.difference = function (lastNum, answer){
//  		if (Math.abs(answer - lastNum) <= 5) return "You are ghost pepper hot";
//  		if (Math.abs(answer - lastNum) <= 10) return "You are a habanero pepper";
//  		if (Math.abs(answer - lastNum) <= 20) return "You are a Jalapeno pepper";
//  		if (Math.abs(answer - lastNum) <= 30) return "You are a peperoncini";
//  		else return "You are a green bell pepper";
//  	};

//  	function isRepeat(lastNum){
//  		for (var i = 0; i < guess.length-1; i++){
//  			if (lastNum === guess[i]) return true;
//  		}
//  		return false;
//  	}
// }

// var round1 = new GuessingGame();
// round1.play();


//  	var answer = Math.round(Math.random() * 100);
//  	var guess = [];
//  	var count = 0;

//  	function play(){ // this will be an onclick event
//  		if (count === 5) return "Game over. You lose";
//  		guess.push(parseInt(prompt('Enter a number')));
//  		var lastNum = guess[guess.length-1];
//  		if (isRepeat(lastNum)) {
//  			alert("DRY");
//  			play();
//  		} else {
//  			compare(lastNum);
//  		}
//  	}

//  	function compare(lastNum){
//  		count++;
//  		if (lastNum === answer) return console.log("Congrats, you fucking won!!");
//  		if (lastNum < answer) alert(difference(lastNum, answer) + ", guess higher");
//  		if (lastNum > answer) alert(difference(lastNum, answer) + ", guess lower");
//  		play();
//  	}

//  	function difference(lastNum, answer){
//  		if (Math.abs(answer - lastNum) <= 5) return "You are ghost pepper hot";
//  		if (Math.abs(answer - lastNum) <= 10) return "You are a habanero pepper";
//  		if (Math.abs(answer - lastNum) <= 20) return "You are a Jalapeno pepper";
//  		if (Math.abs(answer - lastNum) <= 30) return "You are a peperoncini";
//  		else return "You are a green bell pepper";
//  	}

//  	function isRepeat(lastNum){
//  		for (var i = 0; i < guess.length-1; i++){
//  			if (lastNum === guess[i]) return true;
//  		}
//  		return false;
//  	}



// play();


