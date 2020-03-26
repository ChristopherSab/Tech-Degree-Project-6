
// Variables //
const keyboardButtons = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startGame = document.getElementsByClassName("btn__reset")[0];
let incorrectGuesses = 0;

//Start the game
startGame.addEventListener("click", () => {

    let screenOverlay = document.getElementById("overlay");
    screenOverlay.style.display = 'none';
   
});

// An array of cliche phrases
const phrases = [
    "Love Is Blind",
    "What Goes Around Comes Around",
    "Everything That Glitters Is Not Gold",
    "Jack Of All Trades",
    "You Cannot Cry Over Spilt Milk"
];

// This function gets a random phrase as an array
function getRandomPhraseAsArray(arr) {
  
    const arrayIndex = Math.floor( Math.random() * arr.length) + 1;

    return arr[arrayIndex].split('');

}

//This function adds the letters of a string to a display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      let listItem = document.createElement("LI");
      phrase.appendChild(listItem);
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
    const letters =   document.querySelectorAll('.letter');
      for(let i=0; i < letters.length; i ++){
          if(letters[i].innerHTML.toLowerCase() === pressedButton){

              letterFound = pressedButton;
              letters[i].classList.add("show");

          }
      }
  } 

keyboardButtons.addEventListener("click", (event) => {

    if(event.target.tagName == 'BUTTON'){

        checkLetter(event.target.innerHTML);
        event.target.classList.add("chosen");
        event.target.disabled = true;
        
        if(!letterFound) {

            incorrectGuesses += 1;
            console.log(incorrectGuesses);

        }
    } 
   
});



