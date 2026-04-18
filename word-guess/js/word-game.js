// doc elements
const cond = document.getElementById("status");
const restartButton = document.getElementById("restartButton");

// Picks a random word that will become the targetwordd
const WORDS = ["apple", "other", "fresh", "clean", "dance", "light", "loyal", "happy", "music", "peace"]
let answer = WORDS[Math.floor(Math.random() * WORDS.length)];

// Game object
const game = {
    targetWord: answer.toUpperCase(), //ensures that the answer is always uppercase
    totalrow: 6, //how many total rows(guesses player can make) thier are
    currentRow: 0, // sets which row the player is currently on
    nextLetter: 0, // sets which box the player is at
    currentGuess:[], // letters that the player has inputed
    state: "playing" // state the game is currently in
}

// Initilazes the game board
function initBoard() {
    let board = document.getElementById("gameboard");
    board.innerHTML = ""; // clears the game board from any leftover guess from previous games

    // Creats a row for the amount of 'totalrow' default is 6 (could be increased in future for more guesses)
    for (let i = 0; i < game.totalrow; i++) {
        let row = document.createElement("div")
        row.className = "letterrow"

        // Creates a row of 5 boxes
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letterbox"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
    // Updates status text and logs the targetword for debug purposes
    cond.textContent = "Game in progress";
    console.log(game.targetWord)
}

// process the input from and keypress
function processInput(key) {
    // handles deletion of inputed letter when backspace is press
    if (key === "BACKSPACE") {
        if (game.nextLetter > 0) {
            game.nextLetter--;
            game.currentGuess.pop();
            renderGame();
        }
    } 
    // handles submition of guess when enter key is pressed and 5 letters have been inputed
    else if (key === "ENTER") {
        if (game.nextLetter === 5) {
            enteredGuess = game.currentGuess.join('');
            checkGuess(enteredGuess); 
        }
        else if (game.nextLetter < 5) {
            cond.textContent = "Not Enough Letters";
        }
    } 
    // when the player inputing letters
    else if (key.length === 1 && /[A-Z]/.test(key)) {
        if (game.nextLetter < 5) {
            game.currentGuess.push(key); // addes inputed letter to Guess array
            game.nextLetter++; // moves to next input box
            renderGame();
        }
    }
    else if (key === "1") {
        restartGame()
    }
}

// handles the visual rending of inputed letters
function renderGame() {
    const board = document.getElementById("gameboard");
    const rows = board.getElementsByClassName("letterrow");
    const currentRowElement = rows[game.currentRow];

    // Clear current row before rendering
    const boxes = currentRowElement.getElementsByClassName("letterbox");
    for (let i = 0; i < 5; i++) {
        boxes[i].textContent = game.currentGuess[i] || "";
    }
}

// checks to see if the inputed guess is correct
function checkGuess(guess){
    const correctGuess = game.targetWord.split("") // splits answer into array so that each letter can be checked and then colored
    const curguess = game.currentGuess

    let colors = []

    for (let i = 0; i < 5; i++){
        if (curguess[i] === correctGuess[i]){
            colors[i] = "correct";
            curguess[i] = null; // removes letter so it woun't be repeated
            correctGuess[i] = null; // removes letter so it woun't be repeated
        }
    }

    for (let i = 0; i < 5; i++){
        if (!colors[i]){
            if (correctGuess.includes(curguess[i])){
                colors[i] = "misplaced"
                curguess[i] = null; // removes letter so it woun't be repeated
                correctGuess[i] = null; // removes letter so it woun't be repeated
            }
            else{
                colors[i] = "incorrect"
            }
        }
    }

    // colors the rows
    colorRow(colors)

    // handles what to do if the player guess the word correctly
    if (guess === game.targetWord) {
        game.currentRow++; //goes to next row of boxes so anwser is visible after game ends
        cond.textContent = "Correct Guess! You Win!"; // updates status text
        game.state = "win"; // ends the game
    } 
    // handles if player guess incorrectly on thier final try 
    else if (game.currentRow === game.totalrow - 1) { 
        cond.textContent = `Game Over! You Lose! Word was ${answer}`; // updates status text
        game.state = "lose"; // ends the game
    }
    // handles if player guess is incorrect and not on final row
    else { 
        game.currentRow++; // moves down a row
        cond.textContent = "Incorrect Guess! Try Again!"; //updates status text
        game.currentGuess = []
        game.nextLetter = 0;
    } 
}

// handles the coloring of boxes within the rows
function colorRow(color) {
    const board = document.getElementById("gameboard");
    const rows = board.getElementsByClassName("letterrow");
    const currentRowElement = rows[game.currentRow];

    const boxes = currentRowElement.getElementsByClassName("letterbox");

    // colors the box based on "correct", "misplaced", or "incorrect" class
    for (let i = 0; i < 5; i++) {
        boxes[i].classList.add(color[i]);
    }
}

// restarts the game
function restartGame() {
    event.target.blur();
    answer = WORDS[Math.floor(Math.random() * WORDS.length)];
    game.targetWord = answer.toUpperCase();
    game.currentRow = 0;
    game.currentGuess = [];
    game.nextLetter = 0;
    game.state = "playing"

    let board = document.getElementById("gameboard");
    board.innerHTML = "";

    initBoard();
}

// only allows inputs when game is playing
document.addEventListener("keydown", (event) => {

    const key = event.key.toUpperCase();
    processInput(key);
    renderGame();
})

initBoard()