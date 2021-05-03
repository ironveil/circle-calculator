// This is the calculator script for the website

// Pi to 2dp
const pi = 3.14

// Activates when the user clicks the button
function calculate() {

    // Gets the user entered radius
    var radius = document.getElementById("radius").value;

    // Gets the outputs
    var diameterOutput = document.getElementById("diameter");
    var areaOutput = document.getElementById("area");
    var circumferenceOutput = document.getElementById("circumference");

    // Basic maths
    var diameter = radius * 2;
    var area = pi * (radius ** 2);
    var circumference = pi * diameter;

    // Returns the outputs
    diameterOutput.innerHTML = diameter.toString().substring(0,8);
    areaOutput.innerHTML = area.toString().substring(0,8);
    circumferenceOutput.innerHTML = circumference.toString().substring(0,8);
}