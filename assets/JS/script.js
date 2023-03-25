var startButton = document.querySelector("#start-quiz")
var questionArea = document.querySelector("#header-question")
var answerButtons = document.querySelector("#subheader-multi-choice")

startButton.addEventListener("click", function() {
    questionArea.textContent = "Question 1 | Fill in the blank: 'I like ______! They're comfy and easy to wear.'"
    
    var options = ["dresses", "flip-flops", "shorts", "hoodies"]

    for (i = 0; i < options.length; i++) {
       btn = document.createElement("button");
    }
})


// if
// the button selected by the user does not equal the right answer
// subtract 10 seconds from the clock
// replace question 1 with question 2
// else replace question 1 with question 2
questionArea.textContent = "Question 2 | The old man in Veridian City does not let you pass the first time you visit because:"

var options = ["You don't have enough money for the toll", "He hasn't had his coffee yet", "There is a dangerous fire up ahead", "He doesn't like your shoes"]

// if
// the button selected by the user does not equal the right answer
// subtract 10 seconds from the clock
// replace question 1 with question 2
// else replace question 1 with question 2

questionArea.textContent = "Question 3 | "When the train in Goldenrod City is out of service, the conductor considers doing what to help passengers get to their destination:"

var options = ["Carry them on his back", "Hitch a wagon to his Tauros", "Catch Pigeots to carry them," "Dig a tunnel"]


