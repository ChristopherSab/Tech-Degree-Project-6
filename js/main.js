
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

//This function adds the letters of a string to a display
function addPhraseToDisplay(arr){

    for(let i =0; i < arr.length; i+=1){

        let stringCharacter = arr[i].split("");

        for(j=0; j < stringCharacter.length; j+=1){

                      
            let listItem = document.createElement("LI");
            listItem.innerHTML = stringCharacter[j];
            let newItem = document.getElementById("phrase").appendChild(listItem);

            var letters = /^[A-Za-z]+$/;
            if(newItem.innerHTML.includes(letters)){
                newItem.classList.add("letter");
            }

        }  
   
    }
}

const phrasesArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phrasesArray);





