function updateClock() {
// creates a new Date object to get the current date and time
  const now = new Date();
  const hours = now.getHours();
// determines wheter it's AM or PM based on the hour
  const session = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
// makes sure it always displays two digits even if it's less than 10, for example "09" instead of "9"
  const formattedHours = displayHours < 10 ? `0${displayHours}` : displayHours;
  const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
  const date = now.toLocaleDateString();

  document.getElementById("clock-face").innerHTML =
    `${formattedHours}:${minutes}:${seconds} ${session}`;
  document.getElementById("calendar-date").innerHTML = date;
}

// function called to update the clock every second to make sure its accurate
updateClock();
setInterval(updateClock, 1000);