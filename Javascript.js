window.onload = function () {
var seconds;
var counter;
    var questionArea = document.getElementById('Questions');
    var answerArea  = document.getElementById('answersArea');
    var score = 0  
    var currentIndex = 0

    // questions
var questionsAll =[
     { 
        question : "Commonly used data types do NOT include", 
        answers: ["Boolean", "Alerts", "Strings", "Numbers"],
        correct: "Alerts",
    },
     { 
        question : "The condition of an if/else statement is enclosed within ______.", 
        answers: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        correct: "Parentheses",
    },
     { 
        question : "Arrays in Javascript can be used to store ______.", 
        answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Rest"],
        correct: "All of the Rest",
    },
    { 
        question : "String values must be enclosed within ______ when being assigned to variables", 
        answers: ["Quotes", "Curly Brackets", "Commas", "Parentheses"],
        correct: "Quotes",
    },
    { 
        question : "A very useful tool used during development and debugging for printing content to the debugger is:", 
        answers: ["Javascript", "console.log", "Terminal/Bash", "For Loops"],
        correct: "console.log",
    }

]

var StartButton = document.getElementById("StartButton");

StartButton.addEventListener("click",StartGame);

//starts game
function StartGame(){
    timerDown();
    questionsUp();
    StartButton.classList.add('hide');
}

//Starts the timer and counts down
function timerDown(){
     seconds = 60;
    function tick() {
         counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if(seconds > 0){
                setTimeout(tick, 1000);
            } else {
                gameOver    ()
            }
    }
    tick();
}

//brings the questions up
function questionsUp(){
    var currentQuestion = questionsAll[currentIndex]

    questionArea.textContent = currentQuestion.question;
    console.log(questionArea)
    answerArea.innerHTML ="";
        for (var i = 0; i < currentQuestion.answers.length; i++){
            var currentChoices = currentQuestion.answers[i];
            var choiceBTN = document.createElement("button");
            choiceBTN.setAttribute("class", "choice");
            choiceBTN.setAttribute("value", currentChoices);
            choiceBTN.textContent=currentChoices;
            answerArea.appendChild(choiceBTN)
        }
        }



// when clicking the answer, brigns up next question and game overs it if seconds reach 0
function answerClick(event){
    var answerButton = event.target
    if(!answerButton.matches(".choice")){
        return;
    }
    if (answerButton.value == questionsAll[currentIndex].correct) {
        score++; // Increment score if the answer is correct
        document.getElementById('Score').textContent = score;
    } else {
        seconds -= 3;
        counter.textContent = seconds;
    }
    currentIndex++
    if (seconds <=0 || currentIndex === questionsAll.length){
        gameOver();
    }
    else{
        questionsUp();

    }
    //game over function needed

}
// End Screen
    var endScreen = document.getElementById('end-screen');
function gameOver() {
    clearInterval(timerDown); 
    Questions.classList.add('hide');
    answersArea.classList.add('hide');
    endScreen.classList.remove('hide');
    document.getElementById('score').textContent = score;
}
// retry btt document.reload, hide button till gameOver appeared
function Restart(){
    window.location.reload();
}
var retryGame = document.getElementById("Restart");
retryGame.addEventListener("click",Restart);



//
answerArea.onclick = answerClick;

// retry button: hide it
//

};