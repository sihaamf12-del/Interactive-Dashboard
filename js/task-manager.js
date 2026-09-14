// Function calculates the weekly goal based on user input and displays it in the HTML element with id "goal-message"
// Uses the original calculation in debug.html
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    let weeklyTotal = dailyGoal * 5;
    let totalGoal = weeklyTotal + bonusTasks;
    // CHANGE: Document-write to output
    let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;

}

// Event listener for whenever the user clicks the submit button
document.getElementById("goal-btn").addEventListener("click", function (event) {

    event.preventDefault();

    // Allows the three values to be inputted by the user and stored in variables rather than decided like in debug.html
    let userName = document.getElementById("user-name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    console.log("Checking status for: " + userName);
    weeklyGoal(userName, dailyGoal, bonusTasks);

});
