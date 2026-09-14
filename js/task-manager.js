// Function calculates the weekly goal based on user input and displays it in the HTML element with id "goal-message"
// Uses the original calculation in debug.html
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    console.log("Checking status for: " + userName);
    
    let weeklyTotal = dailyGoal * 5;
    let totalGoal = weeklyTotal + bonusTasks;
    let output = "User: " + userName + "<br>Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;

}

// Event listener for whenever the user clicks the submit button
// Instead of making a seperate variable for goal-btn I just put it directly here but it would be the same either way
document.getElementById("goal-btn").addEventListener("click", function (event) {

    // Prevents the page from reloading like it would normally do, hence the "Default"
    event.preventDefault();

    // Allows the three values to be inputted by the user and stored in variables rather than decided like in debug.html
    let userName = document.getElementById("user-name").value;
    
    // Convert string to number
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Prints everything out using the weeklyGoal function above
    weeklyGoal(userName, dailyGoal, bonusTasks);

});
