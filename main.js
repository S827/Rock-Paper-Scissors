const btn = document.querySelector('button');
btn.addEventListener('click', startGame);
const section = document.querySelector('section');
let round = document.querySelector('#round');
round.textContent = `Rounds left: 11`;
const score = document.querySelector('#score');
let initialScore = 0;
let playerScore = 0;
let computerScore = 0;
gameRound = 11;
function startGame(){
    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissor = document.createElement('button');
    rock.textContent = 'ROCK';
    paper.textContent = 'PAPER';
    scissor.textContent = 'SCISSOR';
    section.appendChild(rock);
    section.appendChild(paper);
    section.appendChild(scissor);
    let check = false;
    rock.addEventListener('click', () => {
        let comSelection = computerSelection();
        gameRound -= 1;
        round.textContent = `Rounds left: ${gameRound}`;
        if(gameRound > 0){
            if(comSelection === 'rock'){
                playerScore += 50;
                computerScore += 50;
            } else if(comSelection === 'paper'){
                computerScore += 100;
            } else {
                playerScore += 100;
            }
        } else {
            rock.remove();
            paper.remove();
            scissor.remove();
            // btn.textContent = 'Restart Game';
            restart();
        }
        score.textContent = `Score: Player: ${playerScore} || Computer: ${computerScore}`;
    });
    paper.addEventListener('click', () => {
        let comSelection = computerSelection();
        gameRound -= 1;
        round.textContent = `Rounds left: ${gameRound}`;
        if(gameRound > 0){
            if(comSelection === 'rock'){
                playerScore += 100;
            } else if(comSelection === 'paper'){
                computerScore += 50;
                playerScore += 50;
            } else {
                computerScore += 100;
            }
        } else {
            gameRound = 11;
            rock.remove();
            paper.remove();
            scissor.remove();
            restart();
        }
        score.textContent = `Score: Player: ${playerScore} || Computer: ${computerScore}`;
    });
    if(rock.disabled === true || paper.disabled === true){
        scissor.addEventListener('click', () => {
        
        let comSelection = computerSelection();
        gameRound -= 1;
        round.textContent = `Rounds left: ${gameRound}`;
        if(comSelection === 'rock'){
            computerScore += 100;
        } else if(comSelection === 'paper'){
            playerScore += 100;
        } else {
            playerScore += 50;
            computerScore += 50;
        }
        score.textContent = `Score: Player: ${playerScore} || Computer: ${computerScore}`;
    });
    }
    
}
function playGame(){
    
}
function restart(){
    btn.textContent = 'Restart Game';
    gameRound = 11;
    startGame();

}
function computerSelection() {
    const option = ['rock', 'paper', 'scissor'];
    let selection = Math.floor(Math.random()*3);
    return option[selection];
}
section.appendChild(round);