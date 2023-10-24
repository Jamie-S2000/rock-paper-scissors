let options = ["rock", "paper", "scissors", "lizard", "spock"]
function computerChoice() {
    for (let i = 0; i > options.length; i++);
    i = Math.floor(Math.random() * 5);
    let compChoice = options[i];
    return compChoice.value;
}
console.log(computerChoice())
