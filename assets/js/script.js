var startButton = document.querySelector(".container h1");
var timerCount = document.getElementById("timer");
var buttonOne = document.querySelector("#btn0");
var buttonTwo = document.querySelector("#btn1");
var buttonThree = document.querySelector("#btn2");  
var buttonFour = document.querySelector("#btn3");
var progressBar = document.querySelector ("#progress")

function startQuiz() {
    timeRemaining = 50;
    
      var timeInterval = setInterval(function () {
       if (timeRemaining > 1) {
        timerCount.textContent = timeRemaining + " seconds remaining";
        timeRemaining--;
       } else if (timeRemaining === 1) {
        timerCount.textContent = timeRemaining + " second remaining";
       } else if (timeRemaining === 0) {
        timerCount.textContent = '   ';
        clearInterval(timeInterval);
        startButton.textContent = "Game Over";
       }
    
      }, 1000)
    }

    startButton.addEventListener ("click", function () {
        startQuiz()
        startButton.textContent = "What Does CSS stand for?";
        console.log("start button clicked")
        buttonOne.textContent = "Computer Science Section";
        buttonTwo.textContent = "Cascading Style Sheets";
        buttonThree.textContent = "Calculated Sheet Style";
        buttonFour.textContent = "Configure System Style";
        document.getElementById("progress").style.display = 'none'
    });     