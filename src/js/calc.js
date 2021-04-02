const pi = 3.14

function calculate() {
    var radius = document.getElementById("radius").value;
    var diameterOutput = document.getElementById("diameter");
    var areaOutput = document.getElementById("area");
    var circumferenceOutput = document.getElementById("circumference");

    var diameter = radius * 2;
    var area = pi * (radius ** 2);
    var circumference = pi * diameter;

    diameterOutput.innerHTML = diameter.toString().substring(0,8);
    areaOutput.innerHTML = area.toString().substring(0,8);
    circumferenceOutput.innerHTML = circumference.toString().substring(0,8);
}