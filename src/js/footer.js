var notes = [
    "Made with blood, sweat and tears",
    "obama",
    "CSS Grids are actually quite cool :)",
    "This took way longer than it should",
    "Thanks, StackOverflow",
    "Insert text here",
    "This website is pretty cool",
    "footer"
];
var maxNotes = notes.length;

function getRandomNote() {
    var footerText = document.getElementById("footer");
    var index = Math.floor(Math.random() *  (maxNotes - 1));

    footerText.innerHTML = notes[index];
}