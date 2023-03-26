var startQuiz = document.querySelector("#start-quiz")
var timer = document.querySelector("#timer")
var timeLeft = 75
var questionSpace = document.querySelector("#header-question")
var multiChoiceSpace = document.querySelector("#multi-choice")
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var choice4 = document.querySelector("#choice4")


var questionNumber = 0

var questions = [
    {
        questionText: "Question 1 | Fill in the blank: 'I like ______! They're comfy and easy to wear.'"
        multiChoiceOptions: ["Dresses", "Sandals", "Shorts", "Hoodies"]
        correctChoice: "Shorts"
    }

    {
        questionText: "Question 2 | When you first arrive in Veridian City, why won't the old man less you pass?"
        multiChoiceOptions: ["You don't have enough money to pay the toll", "He hasn't had his coffee yet", "He doesn't like your attitude", "There's a dangerous Pokemon up ahead"]
        correctChoice: "He hasn't had his coffee yet"
    }

    {
        questionText: "Question 3 | While the train at Goldenrod City is out of service, how does the conductor consider as a way to get passengers to their destinations?"
        multiChoiceOptions: ["Carry them on his back", "Hitch a wagon to his Tauros", "Catch some Pigeots to fly passengers", "Have Diglett dig a tunnel"]
        correctChoice: "Carry them on his back"
    }

    {
        questionText: "Question 4 | Which one of these types is Grass weak against?"
        multiChoiceOptions: ["Water", "Fire", "Rock", "Normal"]
        correctChoice: "Fire"
    }

    {
        questionText: "Question 5 | What does the item Soft Sand do?"
        multiChoiceOptions: ["Evolves a ground type Pokemon", "Powers up Rock type moves", "Raises Sp Def by 1", "Powers up Ground type moves"]
        correctChoice: "Powers up Ground type moves"
    }
]

function beginQuiz() {
    // remove #intro-header and intro-text and start button
    // unhide question, multi-choice, and buttons
    // show question 1
}

function questionDisplay() {
    questionSpace.textContent = questions[questionNumber].questionText
    choice1.textContent = questions[questionNumber].multiChoiceOptions[0]
    choice2.textContent = questions[questionNumber].multiChoiceOptions[1]
    choice3.textContent = questions[questionNumber].multiChoiceOptions[2]
    choice4.textContent = questions[questionNumber].multiChoiceOptions[3]
}

function nextQuestion() {
    questionNumber++
}

startQuiz.onclick = beginQuiz()

choice1.onclick = nextQuestion()
choice2.onclick = nextQuestion()
choice3.onclick = nextQuestion()
choice4.onclick = nextQuestion()