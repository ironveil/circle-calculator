// Randomised footer notes

// Notes
var notes = [
    "Made with blood, sweat and tears",
    "obama",
    "CSS Grids are actually quite cool :)",
    "This took way longer than it should",
    "Thanks, StackOverflow",
    "Insert text here",
    "This website is pretty cool"
];
var maxNotes = notes.length;

// Runs on page startup
function getRandomNote() {

    // Gets the footer
    var footerText = document.getElementById("footer");

    // Picks random number
    var index = Math.floor(Math.random() *  (maxNotes - 1));

    // Replaces footer text with random text
    footerText.innerHTML = notes[index];
}