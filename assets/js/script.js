/**
 * computer choices and function to choose randomly
 */
let options = ["rock", "paper", "scissors", "lizard", "spock"]
function computerChoice() {
    for (let i = 0; i > options.length; i++);
    i = Math.floor(Math.random() * 5);
    let compChoice = options[i];
    return compChoice;
}

/**
 * iterate Wins
 */
function winCount() {
    let winsTotal = parseInt(document.getElementById("wins-total").innerText);
    document.getElementById("wins-total").innerHTML = ++winsTotal;
}

/**
 * iterate lose
 */
function loseCount() {
    let loseTotal = parseInt(document.getElementById("lose-total").innerText);
    document.getElementById("lose-total").innerHTML = ++loseTotal;
}

/**
 * iterate draw
 */
function drawCount() {
    let drawTotal = parseInt(document.getElementById("draws-total").innerText);
    document.getElementById("draws-total").innerHTML = ++drawTotal;
}


/**
 * Code to decide who wins
 */

function rockPick() {
    let compChoice = computerChoice();
    if (compChoice === "rock") {
        alert(`The computer chose rock. You draw!`);
        drawCount();
    } else if (compChoice === "scissors" || compChoice ===  "lizard"){
        alert(`The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "paper" || compChoice ===  "spock"){
        alert(`The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

function paperPick() {
    let compChoice = computerChoice();
    if (compChoice === "paper") {
        alert(`The computer chose paper. You draw!`);
        drawCount();
    } else if (compChoice === "rock" || compChoice ===  "spock"){
        alert(`The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "scissors" || compChoice ===  "lizard"){
        alert(`The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

function scissorsPick() {
    let compChoice = computerChoice();
    if (compChoice === "scissors") {
        alert(`The computer chose scissors. You draw!`);
        drawCount();
    } else if (compChoice === "paper" || compChoice ===  "lizard"){
        alert(`The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "spock" || compChoice ===  "rock"){
        alert(`The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

function lizardPick() {
    let compChoice = computerChoice();
    if (compChoice === "lizard") {
        alert(`The computer chose lizard. You draw!`);
        drawCount();
    } else if (compChoice === "spock" || compChoice ===  "paper"){
        alert(`The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "rock" || compChoice ===  "scissors"){
        alert(`The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

function spockPick() {
    let compChoice = computerChoice();
    if (compChoice === "spock") {
        alert(`The computer chose spock. You draw!`);
        drawCount();
    } else if (compChoice === "scissors" || compChoice ===  "rock"){
        alert(`The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "paper" || compChoice ===  "lizard"){
        alert(`The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}