var startButton = document.querySelector("#start-quiz")
var timer = document.querySelector("#timer")
var introText = document.querySelector("#intro-text")
var secondsLeft = 10
var questionSpace = document.querySelector("#question")
var multiChoiceSpace = document.querySelector("#multi-choice")
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var choice4 = document.querySelector("#choice4")
var titleHeader = document.querySelector("#intro-header")

// starts the quiz at question 1
var questionNumber = 0

// every question, options, and answer stored as an array
var questions = [
    {
        questionText: "Question 1 | Fill in the blank: 'I like ______! They're comfy and easy to wear.'",
        multiChoiceOptions: ["Dresses", "Sandals", "Shorts", "Hoodies"],
        correctChoice: "Shorts",
    }, {
        questionText: "Question 2 | When you first arrive in Veridian City, why won't the old man less you pass?",
        multiChoiceOptions: ["You don't have enough money to pay the toll", "He hasn't had his coffee yet", "He doesn't like your attitude", "There's a dangerous Pokemon up ahead"],
        correctChoice: "He hasn't had his coffee yet",
    }, {
        questionText: "Question 3 | While the train at Goldenrod City is out of service, how does the conductor consider as a way to get passengers to their destinations?",
        multiChoiceOptions: ["Carry them on his back", "Hitch a wagon to his Tauros", "Catch some Pigeots to fly passengers", "Have Diglett dig a tunnel"],
        correctChoice: "Carry them on his back",
    }, {
        questionText: "Question 4 | Which one of these types is Grass weak against?",
        multiChoiceOptions: ["Water", "Fire", "Rock", "Normal"],
        correctChoice: "Fire",
    }, {
        questionText: "Question 5 | What does the item Soft Sand do?",
        multiChoiceOptions: ["Evolves a Ground type Pokemon", "Powers up Rock type moves", "Raises Sp Def by 1", "Powers up Ground type moves"],
        correctChoice: "Powers up Ground type moves",
    },
]

// starts off the quiz when the Start Quiz button is clicked
function beginQuiz() {
    startButton.style.display= "none"
    introText.style.display= "none"
    multiChoiceSpace.style.display= "flex"
    questionSpace.style.display= "block"
    console.log("Quiz begun");
    setTime()
    questionDisplay();
}

// starts the timer when the Start Quiz button is clicked
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";
        
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            alert("TIME'S UP!")
            gameOver()
        }
    }, 1000);
}

// moves on to the next question and deducts time if appropriate
function nextQuestion() {
   
    if (questionNumber >= (questions.length-1)) {
        gameOver()
    } else {

    questionNumber++;
    // if (USER-CLICKED-ANSWER == questions[questionNumber].correctChoice) {
    //     questionNumber++
    // } else {
    //     questionNumber++;
    //     (secondsLeft--);
    // }
    questionDisplay();
   }}

// displays the appropriate content based on current question counter; triggered by function nextQuestion
function questionDisplay() {
    questionSpace.textContent = questions[questionNumber].questionText
    choice1.textContent = questions[questionNumber].multiChoiceOptions[0]
    choice2.textContent = questions[questionNumber].multiChoiceOptions[1]
    choice3.textContent = questions[questionNumber].multiChoiceOptions[2]
    choice4.textContent = questions[questionNumber].multiChoiceOptions[3]
    console.log(questionNumber)
}


// moves the player to the final screen that displays final score
function gameOver() {
    introText.style.display= "block"
    introText.textContent= "Your final score is..."
    titleHeader.textContent= "WELL DONE!"
    multiChoiceSpace.style.display= "none"
    questionSpace.style.display= "none"
}







// event listeners
startButton.addEventListener("click", function (begin) {
    begin.preventDefault();
    beginQuiz();
})

choice1.addEventListener("click", function (answer) {
    answer.preventDefault()
    nextQuestion()
})
choice2.addEventListener("click", function (answer) {
    answer.preventDefault()
    nextQuestion()
})
choice3.addEventListener("click", function (answer) {
    answer.preventDefault()
    nextQuestion()
})
choice4.addEventListener("click", function (answer) {
    answer.preventDefault()
    nextQuestion()
})


