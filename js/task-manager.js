// Function calculates the weekly goal based on user input and displays it in the HTML element with id "goal-message"
// Uses the original calculation in debug.html
let myTasks = [];
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    console.log("Checking status for: " + userName);
    
    let weeklyTotal = dailyGoal * 5;
    let totalGoal = weeklyTotal + bonusTasks;
    // CHANGE: Document-write to output
    let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

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

const taskList = document.createElement("ul");
taskList.id = "task-list-ul";
document.getElementById("task-list").appendChild(taskList);

document.getElementById("add-task").addEventListener("click", function (event) {
    const taskName = document.getElementById("task-name").value.trim();
    if (!taskName) {
        return;
    }

    const task = {
        id: myTasks.length + 1,
        name: taskName,
        priority: document.getElementById("task-priority").value,
        isImportant: document.getElementById("task-important").checked,
        isCompleted: false,
    };
    myTasks.push(task);

    const taskItem = document.createElement("li");
    taskItem.classList.toggle("important-task", task.isImportant);
    const completionCheckbox = document.createElement("input");
    completionCheckbox.type = "checkbox";
    completionCheckbox.setAttribute("aria-label", `Mark ${task.name} as completed`);
    completionCheckbox.addEventListener("change", function () {
        task.isCompleted = completionCheckbox.checked;
        taskItem.classList.toggle("completed-task", task.isCompleted);
    });

    taskItem.appendChild(completionCheckbox);
    taskItem.appendChild(document.createTextNode(` ${task.name}`));
    taskList.appendChild(taskItem);
    document.getElementById("task-name").value = "";

    console.log(JSON.stringify(tasks));
});

document.getElementById("clear-tasks").addEventListener("click", function (event) {
    myTasks = [];
    taskList.innerHTML = "";
});