// Put your JavaScript code in this file

// This code will display a random answer from the answers array when the user clicks on the magic eight ball image.
var answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "You may rely on it.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good."
];

// Function to display a random answer from the answers array
function displayAnswer() {
    var randomIndex = Math.floor(Math.random() * answers.length);
    var circle = document.getElementById("circle");
    circle.style.display = "block";
    circle.innerHTML = answers[randomIndex];
}

// Check the question and show an answer when either the ball or answer circle is clicked.
function askBall() {
    var question = document.getElementById("question").value.trim();
    if (question === "") {
        alert("The 8 Ball requires a question to be asked.");
        return;
    } else {
        displayAnswer();
    }
}

document.getElementById("ball").addEventListener("mousedown", askBall);
document.getElementById("circle").addEventListener("click", askBall);

// Event listener for the reset button to clear the question and set the circle display to none.
document.getElementById("reset").addEventListener("click", function () {
    var circle = document.getElementById("circle");
    circle.style.display = "none";
    document.getElementById("question").value = "";
});