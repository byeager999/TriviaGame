var right = 0;
var wrong = 0;
var unanswered = 0;
var timer = 60;
var clockRunning = false;
var intervalId;
var userGuess = [];

var questions = [
    {
        "question1": "What was the first production car to reach 200 mph?",
        "options1": [
            "Porsche 959",
            "Ferrari F40",
            "Lamborghini Countach",
            "BMW M1"
        ],
        options1Answer: 1
    },
    {
        "question2": "What supercar manufacturer started out by making tractors?",
        "options2": [
            "Mercedes Benz",
            "Lamborghini",
            "Ferrari",
            "Pagani"
        ],
        options2Answer: 1

    },
    {
        "question3": "How many seats are in a McLaren F1?",
        "options3": [
            "4",
            "2",
            "1",
            "3"
        ],
        options3Answer: 3
    },
    {
        "quesiton4": "What was the nickname ohe Porsche 930?",
        "options4": [
            "The Bug",
            "The Widowmaker",
            "The German",
            "Whale Tail"
        ],
        options4Answer: 1
    },
    {
        "question5": "Volkswagen owns which car company?",
        "options5": [
            "Bentley",
            "BMW",
            "Aston Martin",
            "Rolls Royce"
        ],
        options5Answer: 0
    }
];

// function to submit answers
function submitAns(){
    $("#submitAnswers").on("click", function(e){
        e.preventDefault();
        userGuess.length = 0;

        // record user answer to question
        var userChoice = $(#)
    }
    )
}

// User starts game

// Countdown timer begins

$("#start").on("click", run);


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the number in the #show-number tag.
    $("#countdownTimer").html("<h2>" + timer + "</h2>");


    //  Once number hits zero...
    if (timer === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
    }
}
function stop() {

    //  Clears our intervalId
    clearInterval(intervalId);
}


function displayEnd() {
	clearQ();
	$("#content").append('<h3>' + "Correct answers: " + correct + '</h3><br><h3>' + "Incorrect answers: " + incorrect + '</h3><br><h3>' + "Skipped questions: " + missed + '</h3><br><br><a href="#" class="btn btn-primary btn-lg" id="restart-button">' + "Restart Game" + '</a>');
	//Restart game
	$("#restart-button").on("click", function(event) {
		event.preventDefault();
		//Displays the first question
		reset();
		clearQ();
		displayStart();
	});
};






//User submits answers and stops the timer
$("#submitAnswers").on("click", stop);


