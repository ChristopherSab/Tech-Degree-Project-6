// Variables //
const keyboardButtons = document.getElementById("qwerty");
const ul = phrase.querySelector('ul');
const startGame = document.getElementsByClassName("btn__reset")[0];
const lives = document.getElementsByClassName("tries");

let incorrectGuesses = 0;

//Start the game //
startGame.addEventListener("click", () => {

    let screenOverlay = document.getElementById("overlay");
    screenOverlay.style.display = 'none';

});

// An array of cliche phrases //
const phrases = [
    "Love Is Blind",
    "Brave As A Lion",
    "Opposites Attract",
    "Jack Of All Trades",
    "Time Flies",
    "Only Time Will Tell",
    "Add Insult To Injury",
    "Against All Odds",
    "Benefit Of The Doubt",
    "Beat Around The Bush",
    "Better Late Than Never",
    "Bend Over Backwards",
    "Can Of Worms",
    "Come Hell Or High Water",
    "Dog Eat Dog",
    "Eye For An Eye",
    "If The Shoe Fits"
];

// This function gets a random phrase as an array
function getRandomPhraseAsArray(arr) {
    const arrayIndex = Math.floor(Math.random() * arr.length);
    return arr[arrayIndex].split('');
}

//This function adds the letters of a string to a display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let listItem = document.createElement("LI");
        ul.appendChild(listItem);
        listItem.innerHTML = arr[i];
        if (arr[i] === ' ') {
            listItem.classList.add("space");
        } else {
            listItem.classList.add("letter");
        }
    }
}

const phrasesArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phrasesArray);

// This function reveals a letter by adding a .show class to it in the hidden phrase
function checkLetter(pressedButton) {
    letterFound = false;
    const letters = document.querySelectorAll('.letter');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].innerHTML.toLowerCase() === pressedButton) {
            letterFound = pressedButton;
            letters[i].classList.add("show");
        }
    }
}


keyboardButtons.addEventListener("click", (event) => {

    if (event.target.tagName == 'BUTTON') {

        checkLetter(event.target.innerHTML);
        event.target.classList.add("chosen");
        event.target.disabled = true;

        if (!letterFound) {
            incorrectGuesses += 1;
            lives[incorrectGuesses - 1].firstChild.src = 'images/lostHeart.png';
        }
    }

    checkWin();

});

//This function checks whether the player has won or lost the game
function checkWin() {

    const letters = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    const headLine = document.getElementsByClassName("title")[0];

    if (letters.length == show.length) {
        const overlay = document.getElementById('overlay');
        overlay.classList.remove("start");
        overlay.classList.remove("lose");
        overlay.classList.add("win");
        overlay.style.display = "flex";
        headLine.innerHTML = "Congratulations, You Won!";
        startGame.classList.add("restart");
        startGame.innerHTML = "Play Again";

    } else if (incorrectGuesses > 4) {
        const overlay = document.getElementById('overlay');
        overlay.classList.remove("start");
        overlay.classList.add("lose");
        overlay.style.display = "flex";
        headLine.innerHTML = "Sorry, You Lost!";
        startGame.classList.add("restart");
        startGame.innerHTML = "Try Again";
    }

    restartGame();

}

//This function resets the game when a User clicks, Play Again or Try again
function restartGame() {

    const restartGame = document.getElementsByClassName("restart")[0];

    restartGame.addEventListener("click", () => {

        const letters = document.querySelectorAll('#phrase ul li');


        for (let i = 0; i < letters.length; i++) {
            ul.removeChild(letters[i]);
        }

        const chosenLetters = document.querySelectorAll('.chosen');
        for (let i = 0; i < chosenLetters.length; i++) {
            chosenLetters[i].classList.remove("chosen");
            chosenLetters[i].disabled = false;
        }

        for (let i = 0; i < lives.length; i++) {
            lives[i].firstChild.src = 'images/liveHeart.png';
        }

        incorrectGuesses = 0;

        const newPhrasesArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(newPhrasesArray);

    });

}





