var right = 0;
var wrong = 0;
var unanswered = 0;
var timer = 60;
var clockRunning = false;
var intervalId;
var userGuess = [];


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





//  The decrement function.


// Question 1 object
var choices1 = {
    "question1": "What was the first production car to reach 200 mph?",
    "options1": [
        "Porsche 959",
        "Ferrari F40",
        "Lamborghini Countach",
        "BMW M1"
    ]
};
// var userGuess1 button click something  Would this be var userGuesss1 = document.getElementById("idName").value?
if (userGuess1 === choices1.options1[1]) {
    console.log("Correct!");
    right++;
} else if (userGuess !== options1[1]) {
    console.log("Wrong!");
    wrong++;

} else {
    console.log("Incomplete");
    unanswered++;
};

// Question 2 object
var choices2 = {
    "question2": "What supercar manufacturer started out by making tractors?",
    "options2": [
        "Mercedes Benz",
        "Lamborghini",
        "Ferrari",
        "Pagani"
    ]
};

// var userGuess2 button click something
if (userGuess2 === options2[1]) {
    console.log("Correct!");
    right++;
} else if (userGuess !== options1[1]) {
    console.log("Wrong!");
    wrong++;

} else {
    console.log("Incomplete");
    unanswered++;
};

// Question 3 object
var choices3 = {
    "question3": "How many seats are in a McLaren F1?",
    "options3": [
        "4",
        "2",
        "1",
        "3"
    ]
};
// var userGuess3 button click something
if (userGuess3 === options3[3]) {
    console.log("Correct!");
    right++;
} else if (userGuess !== options1[3]) {
    console.log("Wrong!");
    wrong++;

} else {
    console.log("Incomplete");
    unanswered++;
};

// Question 4 object
var choices4 = {
    "quesiton4": "What was the nickname ohe Porsche 930?",
    "options4": [
        "The Bug",
        "The Widowmaker",
        "The German",
        "Whale Tail"
    ]
};
// var userGuess4 button click something
if (userGuess4 === options4[1]) {
    console.log("Correct!");
    right++;
} else if (userGuess !== options1[1]) {
    console.log("Wrong!");
    wrong++;

} else {
    console.log("Incomplete");
    unanswered++;
};

// Question 5 object
var choices5 = {
    "question5": "Volkswagen owns which car company?",
    "options5": [
        "Bentley",
        "BMW",
        "Aston Martin",
        "Rolls Royce"
    ]
};
// var userGuess5 button click something
if (userGuess5 === options5[0]) {
    console.log("Correct!");
    right++;
} else if (userGuess !== options1[1]) {
    console.log("Wrong!");
    wrong++;

} else {
    console.log("Incomplete");
    unanswered++;
};



//User submits answers and stops the timer
$("#submitAnswers").on("click", stop);


