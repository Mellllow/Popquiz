window.onload = function () {
var seconds;
var counter;
    var questionArea = document.getElementById('Questions');
    var  answerArea  = document.getElementById('answersArea');
      
    var currentIndex = 0

    // questions
var questionsAll =[
     { 
        question : "What is a fruit", 
        answers: ["apple", "ball"],
        correct: "apple",
    },
     { 
        question : "What is made of the ocean", 
        answers: ["water", "dirt"],
        correct: "water",
    },
     { 
        question : "What is the color of leaves", 
        answers: ["Green", "fire"],
        correct: "Green",
    },
    { 
        question : "What is a ball?", 
        answers: ["apple", "ball"],
        correct: "ball",
    },
    { 
        question : "What do humans breath", 
        answers: ["water", "Air"],
        correct: "Air",
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
     seconds = 20;
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
    if(answerButton.value !== questionsAll[currentIndex].correct){
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