

var right = 0;
var wrong = 0;
var unanswered = 0;
var timer = 60;
var clockRunning = false;
var intervalId;


// User starts game

// Countdown timer begins
$("#start").on("click", run);


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//   Loads questions


//  The decrement function.
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
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}



// function() {
//     / Question 1

//     // Question 1 conditionals
//     var choices1 = ["Porsche 959", "Ferrari F40", "Lamborghini Countach", "BMW M1"]
//     // var userGuess1 button click something  Would this be var userGuesss1 = document.getElementById("idName").value?
//     if (userGuess1 === choices1[1]) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }

//     // Question 2

//     // Question 2 conditionals
//     var choices2 = ["Mercedes Benz", "Lamborghini", "Ferrari", "Pagani"]
//     // var userGuess2 button click something
//     if (userGuess2 === choices2[1]) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }

//     // Question 3

//     // Question 3 conditionals
//     var choices3 = ["4", "2", "1", "3"]
//     // var userGuess3 button click something

//     if (userGuess3 === choices3[3]) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }

//     // Question 4

//     // Question 4 conditionals
//     var choices4 = ["The Bug", "The Widowmaker", "The German", "Whale Tail"]
//     // var userGuess4 button click something

//     if (userGuess4 === choices4[1]) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }

//     // Question 5

//     // Question 5 conditionals
//     var choices5 = ["Bentley", "BMW", "Aston Martin", "Rolls Royce"]
//     // var userGuess5 button click something

//     if (userGuess5 === choices5[0]) {
//         console.log("Correct!");
//     } else {
//         console.log("Wrong!");
//     }

// }


//User submits answers
$("#submitAnswers").on("click", stop);


    // Submits answers and stops the timer
