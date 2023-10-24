/**
 * computer choices and function to choose randomly
 */
let options = ["rock", "paper", "scissors", "lizard", "Spock"]
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

function gameReset() {
    let winsTotal = parseInt(document.getElementById("wins-total").innerText);
    let loseTotal = parseInt(document.getElementById("lose-total").innerText);
    let drawTotal = parseInt(document.getElementById("draws-total").innerText);
    let gameCount = winsTotal + loseTotal + drawTotal;
    if (gameCount >= 9) {
        if (winsTotal == loseTotal) {
            alert(`
            You won ${winsTotal} times.
            You lost ${loseTotal} times.
            You drew ${drawTotal} times
            Draw!`)
        } else if (winsTotal > loseTotal) {
            alert(`
            You won ${winsTotal} times.
            You lost ${loseTotal} times.
            You drew ${drawTotal} times
            You win!`)
        } else if (winsTotal < loseTotal) {
            alert(`
            You won ${winsTotal} times.
            You lost ${loseTotal} times.
            You drew ${drawTotal} times
            You lose!`)
        }
    document.getElementById("wins-total").innerHTML = 0
    document.getElementById("lose-total").innerHTML = 0
    document.getElementById("draws-total").innerHTML = 0
    }
}

/**
 * Code to decide who wins
 */

function rockPick() {
    let compChoice = computerChoice();
    if (compChoice === "rock") {
        alert(`You chose rock. The computer chose rock. You draw!`);
        drawCount();
    } else if (compChoice === "scissors" || compChoice ===  "lizard"){
        alert(`You chose rock. The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "paper" || compChoice ===  "spock"){
        alert(`You chose rock. The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

function paperPick() {
    let compChoice = computerChoice();
    if (compChoice === "paper") {
        alert(`You chose paper. The computer chose paper. You draw!`);
        drawCount();
    } else if (compChoice === "rock" || compChoice ===  "spock"){
        alert(`You chose paper. The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "scissors" || compChoice ===  "lizard"){
        alert(`You chose paper. The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

function scissorsPick() {
    let compChoice = computerChoice();
    if (compChoice === "scissors") {
        alert(`You chose scissors. The computer chose scissors. You draw!`);
        drawCount();
    } else if (compChoice === "paper" || compChoice ===  "lizard"){
        alert(`You chose scissors. The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "spock" || compChoice ===  "rock"){
        alert(`You chose scissors. The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

function lizardPick() {
    let compChoice = computerChoice();
    if (compChoice === "lizard") {
        alert(`You chose lizard. The computer chose lizard. You draw!`);
        drawCount();
    } else if (compChoice === "spock" || compChoice ===  "paper"){
        alert(`You chose lizard. The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "rock" || compChoice ===  "scissors"){
        alert(`You chose lizard. The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

function spockPick() {
    let compChoice = computerChoice();
    if (compChoice === "Spock") {
        alert(`You chose Spock. The computer chose spock. You draw!`);
        drawCount();
    } else if (compChoice === "scissors" || compChoice ===  "rock"){
        alert(`You chose Spock. The computer chose ${compChoice}. You Win!`);
        winCount();
    } else if (compChoice === "paper" || compChoice ===  "lizard"){
        alert(`You chose Spock. The computer chose ${compChoice}. You lose.`);
        loseCount();
    }
}

/**
 * listens for user pick
 */
document.addEventListener("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("id") === "rock") {
                rockPick();
            } else if (this.getAttribute("id") === "paper") {
                paperPick();
            } else if (this.getAttribute("id") === "scissors") {
                scissorsPick();
            } else if (this.getAttribute("id") === "lizard") {
                lizardPick();
            } else if (this.getAttribute("id") === "spock") {
                spockPick();
            }
            gameReset();
        })
    }
})

