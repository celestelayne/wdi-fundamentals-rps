////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {

    if (playerMove === computerMove) {
        return "Tie";
    }
    switch (playerMove) {
        case 'rock':
        if (computerMove === 'paper') { // given that the playerMove is 'rock', the computerMove 
            console.log('Computer wins!');
            return 'computer';
        } else {  // computer must be scissors
            console.log('Player wins!');
            return 'player';
        }
            break;
        case 'paper':
        if (computerMove === 'rock') {
            console.log('Player wins!');
            return 'player';
        } else { // computer must be scissors
            console.log('Computer wins!');
            return 'computer';
        }
            break;
        case 'scissors':
        if (computerMove === 'rock') {
            console.log('Computer wins!');
            return 'computer';
        } else { // computer must be paper
            console.log('Player wins!');
            return 'player';
        }
            break;
        default:
            console.log('You must choose rock, paper or scissors');
            return 'You screwed up';
    }

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;

    for (var i = 1; ; i++) {
        console.log('Round ' + i + ':');
        playerMove = getPlayerMove();
        console.log('Player move: ' + playerMove);
        computerMove = getComputerMove();
        console.log('Computer move: ' + computerMove);

        winner = getWinner(playerMove, computerMove);
        if (winner === 'player') {
            playerWins += 1;
            console.log('Player won round ' + i);
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log('Computer won round ' + i);
        } else {
            console.log('Round ' + i + ' was a tie');
        }

        console.log('Scoreboard: Player - ' + playerWins + ', Computer - ' + computerWins);
        
        if (playerWins === 5) {
            console.log("Player wins the match");
            return [playerWins, computerWins];
        } else if (computerWins === 5) {
            console.log("Computer wins the match");
            return [playerWins, computerWins];
        }
    }
}

