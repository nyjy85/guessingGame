
 function GuessingGame() {
 	var answer = Math.round(Math.random() * 100);	

 	function play(){
 		var guess = parseInt(document.getElementsByTagName('input')[0].value);
 		if (guess === answer) return "Congrats, you fucking won!!";
 		if (guess < answer) console.log(compare(guess, answer) + ", guess higher");
 		if (guess > answer) console.log(compare(guess, answer) + ", guess lower");
 		play();
 	};

 	function compare(guess, answer){
 		if (Math.abs(answer - guess) <= 5) return "You are ghost pepper hot";
 		if (Math.abs(answer - guess) <= 10) return "You are a habanero pepper";
 		if (Math.abs(answer - guess) <= 20) return "You are a Jalapeno pepper";
 		if (Math.abs(answer - guess) <= 30) return "You are a peperoncini";
 		else return "You are a green bell pepper";
 	};


 }

 // for testing purposes


 	var answer = Math.round(Math.random() * 100);

 	function play(){
 		var guess = parseInt(prompt('Enter a number'));
 		if (guess === answer) return console.log("Congrats, you fucking won!!");
 		if (guess < answer) alert(compare(guess, answer) + ", guess higher");
 		if (guess > answer) alert(compare(guess, answer) + ", guess lower");
 		play();
 	}

 	function compare(guess, answer){
 		if (Math.abs(answer - guess) <= 5) return "You are ghost pepper hot";
 		if (Math.abs(answer - guess) <= 10) return "You are a habanero pepper";
 		if (Math.abs(answer - guess) <= 20) return "You are a Jalapeno pepper";
 		if (Math.abs(answer - guess) <= 30) return "You are a peperoncini";
 		else return "You are a green bell pepper";
 	}

play();
