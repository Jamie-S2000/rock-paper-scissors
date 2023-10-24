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

}

function paperPick() {

}

function scissorsPick() {

}

function lizardPick() {

}

function spockPick() {

}