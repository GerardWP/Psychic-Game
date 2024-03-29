//
//  Psychic Game
//  by Gerard Pelly
//

var winText = document.getElementById("wins");
var loseText = document.getElementById("losses");
var guessNum = document.getElementById("remaining");
var myGuesses = document.getElementById("guesses");

var won = 0;
var lost = 0;
var guessed = [];

var letters = ["a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];

var guessesAllowed = 10;

function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

var compChoice = getRandomLetter();


document.onkeyup = function (event) {

    var keyPress = event.key.toLowerCase();


    if (keyPress == compChoice) {
        ++won;
        compChoice = getRandomLetter();
        guessed = [];
        guessesLeft = 0;
    } else {
        guessed.push(keyPress);
        var guessesLeft = guessesAllowed - guessed.length;
        if (guessesLeft <= 0) {
            ++lost;
            guessed = [];
            compChoice = getRandomLetter();
        }
    }

    winText.innerHTML = won;
    loseText.innerHTML = lost;
    guessNum.innerHTML = guessesLeft;
    myGuesses.innerHTML = guessed.join("");
}