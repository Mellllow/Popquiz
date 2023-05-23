//Make a timer for starting fucntion

document.getElementById("StartButton").onclick = "";

// make a timer for ending
const Timer = timerDown(GameOver, 10000)

function GameOver() {
    document.getElementById("XXX").innerHTML = "Game Over!"

}
//countdow of true and false
//if time goes to 0 go to game over, if true next qustion loop?




//make a array of questions
var questionsAll = [question1, question2, question3, question4, question5];

var question1 = ["What is a fruit", "apple", "ball"];
var question2 = ["What is a ball", "apple", "ball"];
var question3 = ["What is a not a ball", "apple", "ball"];
var question4 = ["What is a round opject", "apple", "ball"];
var question5 = ["What is a apple made of", "apple", "ball"];