document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault();

    var num = parseFloat(document.getElementById("value").value);
    var selection = document.getElementsByTagName("select")[0].selectedIndex + 1;
    var result;
    var unit;
    var initial;

    if (selection === 1) {
        result = num * 2.54;
        unit = "centimeters";
        initial = "inches";
    } else if (selection === 2) {
        result = num * 30.48;
        unit = "centimeters";
        initial = "feet";
    } else if (selection === 3) {
        result = num * 0.91;
        unit = "meters";
        initial = "yards";
    } else if (selection === 4) {
        result = num * 1.61;
        unit = "kilometers";
        initial = "miles";
    } else if (selection === 5) {
        result = num * 0.39;
        unit = "inches";
        initial = "centimeters";
    } else if (selection === 6) {
        result = num * 0.0328;
        unit = "feet";
        initial = "meters";
    } else if (selection === 7) {
        result = num * 1.09;
        unit = "yards";
        intial = "meters";
    } else if (selection === 8) {
        result = num * 0.62;
        unit = "miles";
        initial = "kilometers";
    }

    document.getElementById("result").innerHTML =
        num + " " + initial + " is " + result.toFixed(2) + " " + unit;
});