
// Variables //
const keyboardButtons = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.getElementsByClassName("btn__reset");
let incorrectGuesses = 0;

//Start the game
startGame.addEventListener("click", () => {

    let screenOverlay = document.getElementById("overlay");
    screenOverlay.style.display = 'none';
   

});


// An array of cliche phrases
const phrasesArray = [
    "Love is Blind",
    "What goes around comes around",
    "Everything that glitters is not gold",
    "Jack of all trades",
    "You cannot cry over spilt milk"
];

// This function gets a random phrase as an array
function getRandomPhraseAsArray(arr) {
  
    const arrayIndex = Math.floor( Math.random() * arr.length) + 1;

    return arr[arrayIndex].split('');

}








