
function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3)

    const compSel = 
        (choiceNum === 0) ? "Rock" :
        (choiceNum === 1) ? "Paper" : "Scissors"
    
    return compSel
};

function getWinner(plr, comp) {
    let winner;
    // 0 = Tie, 1 = Player wins, 2 = Computer wins
    if (plr === comp) {
        winner = 0
    } else if ((plr === "Rock" && comp === "Scissors") | (plr === "Paper" && comp === "Rock") | (plr === "Scissors" && comp === "Paper")) {
        winner = 1
    } else {
        winner = 2
    };

    return winner;
}

function playRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = "rock";

    const plrSel = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase(); 
    const tieWinLose = getWinner(plrSel, computerChoice);

    if (tieWinLose == 0) {
        console.log("You have tied. Replaying...");
        playRound();
    } else if (tieWinLose == 1) {
        console.log(`You Win! ${plrSel} beats ${computerChoice}`)
    } else if (tieWinLose == 2) {
        console.log(`You Lose! ${computerChoice} beats ${plrSel}`)
    } else {
        console.error("Something went wrong with playRound")
    }
}

console.log(playRound())