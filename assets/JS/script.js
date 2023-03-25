var startButton = document.querySelector("#start-quiz")
var questionArea = document.querySelector("#header-question")
var answerButtons = document.querySelector("#multi-choice")
var subHeader = document.querySelector("#title-subheader")

startButton.addEventListener("click", beginQuiz)




    

questionArea.textContent = "Question 1 | Fill in the blank: 'I like ______! They're comfy and easy to wear.'"
    
var options = ["dresses", "flip-flops", "shorts", "hoodies"]

for (i = 0; i < options.length; i++) {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode(options[i]);
    x.appendChild(t);
    answerButtons.appendChild(x);
}

questionArea.textContent = "Question 2 | The old man in Veridian City does not let you pass the first time you visit because:"

var options = ["You don't have enough money for the toll", "He hasn't had his coffee yet", "There is a dangerous fire up ahead", "He doesn't like your shoes"]

    for (i = 0; i < options.length; i++) {
        var x = document.createElement("BUTTON");
        var t = document.createTextNode(options[i]);
        x.appendChild(t);
        answerButtons.appendChild(x);
}


answerButtons.addEventListener("click", function() {
    answerButtons.removeChild(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild)


    
    questionArea.textContent = "Question 3 | When the train in Goldenrod City is out of service, the conductor considers doing what to help passengers get to their destination:"

    var options = ["Carry them on his back", "Hitch a wagon to his Tauros", "Catch Pigeots to carry them", "Dig a tunnel"]

        for (i = 0; i < options.length; i++) {
            var x = document.createElement("BUTTON");
            var t = document.createTextNode(options[i]);
            x.appendChild(t);
            answerButtons.appendChild(x);
        }
    }
)

function beginQuiz() {
    console.log("ran")
    startButton.remove()
    subHeader.remove()
}

function proceed() {
    answerButtons.removeChild(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild)
}
answerButtons.addEventListener("click", proceed)
startButton.addEventListener("click", beginQuiz)