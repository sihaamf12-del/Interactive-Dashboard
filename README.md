# Interactive-Dashboard
# This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
## TODO: Future Enhancements
- [X] Add a metric conversion tool.
- [X] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [x] Add a weekly task calculator
## Weekly Task Goals
The program takes the user's input of their name, daily goal, and bonus tasks from the form and uses it for the calculation. The calculation then takes these inputs and multiplies the daily goal by 5 to get the value of the weekly goal. The button prints out the information that the user inputted onto the webpage. In the task-manager.js, the daily goal and bonus tasks inputted are converted into numbers, since they are put in as strings. Those two values need to be converted before completing the calculation.
## Imperial/Metric Converter
This program's purpose is to be able to take whatever number the user inputs and convert it to either an imperial or metric value. First, the program will ask for the number that will be converted. Next, the program asks if this is an Imperial measurement they want to convert to a Metric measurement or vice versa. Then, depending on which option is chosen, the program will ask for the specific type of conversion they want. The program will then take this information and do the calculations based on whatever type of conversion was chosen. Finally, the program will print out both the initial number and the conversion. The measurments that can be converted are inch, foot, yard, centimeter, meter, and kilometer.
### Logic and Pseudocode
    BEGIN
    DISPLAY “Please provide a number”
    INPUT num
    DISPLAY “Please pick a conversion type:”
    DISPLAY “1 - Imperial to Metric”
    DISPLAY “2 - Metric to Imperial”
    INPUT type

IF type = 1 THEN
	DISPLAY “Please choose a conversion:”
	DISPLAY “1 - Inch to Centimeter”
	DISPLAY “2 - Foot to Centimeter”
	DISPLAY “3 - Yard to Meter”
	DISPLAY “4 - Mile to Kilometer”
	INPUT selection
	IF selection = 1 THEN
		SET result = num * 2.54
	ELSE IF selection = 2
		SET result = num * 30.48
	ELSE IF selection = 3
		SET result = num * 0.91
	ELSE IF selection = 4
		SET result = num * 1.61
ELSE
	DISPLAY “Please choose a conversion:”
	DISPLAY “1 - Centimeter to Inch”
	DISPLAY “2 - Centimeter to Foot”
	DISPLAY “3 - Meter to Yard”
	DISPLAY “4 - Kilometer to Mile”
	INPUT selection
	IF selection = 1 THEN
		SET result = num * 0.39
	ELSE IF selection = 2
		SET result = num * 0.0328
	ELSE IF selection = 3
		SET result = num * 1.09
	ELSE IF selection = 4
		SET result = num * 0.62
DISPLAY "Initial Number: “ + num + “ Conversion: “ + result
END
## Magic 8 Ball
The program allows the user to ask a question. Once the ball is clicked, it will produce a random answer from a list, which will be either positive, negative, or a phrase like "try again". Once the user clicks the button below, it will erase the question asked to make way for a new one.
## Task Manager
It allows the user to create a list of their tasks. When they input a task into the form and submit it, the input box will clear and the text they inputted will be added to the list.