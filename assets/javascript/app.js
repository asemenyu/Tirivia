
function init () {
	$("#startButton").click(function () {
	clearPage();
// PLAY MUSIC AFTER START BUTTON IS PRESSED
	$("#startButton").click(function (){
		var audio = {};
		audio.src="https://static.mezgrman.de/downloads/wwm/intro.mp3";
	})
	$("#startButton").remove();
	displayEverything();
	startTimer();
});

}

var totalTime = 30;
$("#startButton").on("click", startTimer);

var intervalId;

function startTimer () {
	intervalId = setInterval(decrement, 1000);
}


var countDown = $('#timer');


function startTimer () {
	function doCountdown() {
		totalTime--;
		countDown.text(totalTime);
		if (countDown === 0) {
			stop ();
			alert("Time is up, you!")

		}

	}

}



function stopTimer (){

}



function clearPage () {

}
// Starting game, clicking "start button"
// and removing it right after:


// Display questions and 5 min timer:

function displayEverything () {
displayQuestions ();
};


var questions = [
	{
		text: "Is ice hot?",
		answers: ["yes", "no", "maybe", "hotdog"],
		solution: 1,
		name: "q1"
	},
	{
		text: "Was that dress blue or gold?",
		answers: ["yes", "no", "maybe", "hotdog"],
		solution: 3,
		name: "q2"
	},
	{
		text: "Where does Sponge Bob live?",
		answers: ["Bikini Bottom", "21 Jump Street", "Pineapple", "hotdog"],
		solution: 0,
		name: "q3"
	}
];

function displayQuestions () {
	for (var i=0; i<questions.length; i++) {
		var question = questions[i];
		displayQuestion (question);
	}

};


function displayQuestion (q) {
	var questionDiv = $('<div>');
	questionDiv.text(q.text);
	for (var i=0; i<q.answers.length; i++) {

		var ans = $('<label><input type="radio" name="'+q.name+'">'+q.answers[i]+'</label>');
		questionDiv.append(ans);

		ans.click(function WhatDoIDoAfterClick() {
			q.solution=solution
			q.answers[i] 
			console.log('click');
		});
	}
	$("#questions").append(questionDiv);
};



$(document).ready(function() {
	init();

})





