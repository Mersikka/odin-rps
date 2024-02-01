
function getComputerChoice() {
    const choiceNum = Math.floor(Math.random() * 3)

    const compSel = 
        (choiceNum === 0) ? "Rock" :
        (choiceNum === 1) ? "Paper" : "Scissors"
    
    return compSel
};

function getPlayerChoice() {
    let playerInput;
    playerInput = prompt("Choose what to play? (Rock, Paper or Scissors): ", "");
    if (playerInput === null) {
        playerInput = ""
    }
    let playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();
    const options = ["Rock", "Paper", "Scissors"];

    if (options.indexOf(playerChoice) !== -1) {
        return playerChoice
    }
    
    console.log("Please enter a valid choice: ");
    return getPlayerChoice();
}

function getWinner(plr, comp) {
    let winner;
    // 0 = Tie, 1 = Player wins, 2 = Computer wins
    if (plr === comp) {
        winner = 0
    } else if ((plr === "Rock" && comp === "Scissors") || (plr === "Paper" && comp === "Rock") || (plr === "Scissors" && comp === "Paper")) {
        winner = 1
    } else {
        winner = 2
    };

    return winner;
}

function playRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice()
    const tieWinLose = getWinner(playerChoice, computerChoice);
    return { tieWinLose, playerChoice, computerChoice };
}

function getOutput(winner, plrSel, compSel) {
    let resultMessage;

    if (winner == 0) {
        resultMessage = "You have tied. Replaying..."
    } else if (winner == 1) {
        resultMessage = `You Win! ${plrSel} beats ${compSel}`
    } else {
        resultMessage = `You Lose! ${compSel} beats ${plrSel}`
    }

    return resultMessage
}

let plrWinAmount = 0;
let compWinAmount = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let playRoundValues = playRound();
        let winner = playRoundValues.tieWinLose;
        let plrSel = playRoundValues.playerChoice;
        let compSel = playRoundValues.computerChoice

        console.log(getOutput(winner, plrSel, compSel))

        // code for the Bo5 behaviour

        if (plrWinAmount == 3 || compWinAmount == 3) {
            if (plrWinAmount == 3) {
                console.log(`You have won the set ${plrWinAmount} - ${compWinAmount}!`)
            } else {
                console.log(`You have lost to the computer ${plrWinAmount} - ${compWinAmount}.`)
            }
            break
        } else if (winner == 1) {
            plrWinAmount++
        } else if (winner == 2) {
            compWinAmount++
        } else if (winner == 0) {
            i-- // play again when tied
        }
    }
}

//game()