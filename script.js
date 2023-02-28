const playerScore = document.getElementById('player-score');
const aiScore = document.getElementById('ai-score');
const playeGameBtn = document.getElementById('startGameBtn');
const instruction = document.getElementById('instruction');
const roundNum = document.getElementById('round-num');
const startPanel = document.getElementById('start-panel');
const winner = document.getElementById('winner');
const playerOptions = document.getElementsByClassName('options');
const roundWinn = document.getElementById('round-winner');
const gameWinner = document.getElementById('game-winner');
let x = Number(playerScore.textContent);
let y = Number(aiScore.textContent);

let round = 0;
function playGame(){
        round = 0;
        x = 0;
        y = 0;
        gameWinner.classList.remove('show');
        roundWinn.classList.remove('show');
        
        playeGameBtn.classList.add('unshow');
        startPanel.classList.add('show');
        
        // displayRound(round);
        roundWinner();
        console.log(playerScore.textContent);
        
        
    
}
function gameEnd(){
    startPanel.classList.remove('show');
    gameWinner.classList.add('show');
    console.log(x);
console.log(y);
    if(x > y){
        gameWinner.textContent = `Player has won the game with score ${x}`;
    } else if(x < y){
        gameWinner.textContent = `AI has won the game with score ${y}`;
    } else {
        gameWinner.textContent = `Game has Tied with score of ${x}`;
    }
    playeGameBtn.textContent = "Restart the Game";
    playeGameBtn.classList.remove('unshow');
}
function displayRound(round){
        roundNum.textContent = `Round: ${round+1}`;
}
function roundWinner(a){
    let plScore = 0;
    let comScore = 0;
    console.log(computerSelection().toLowerCase())
    console.log(a)
    let com = computerSelection().toLowerCase();
    let player = a;
    if(player === 'rock' && com === 'rock'){
        plScore += 100;
        comScore += 100;
    } else if(player === 'rock' && com === 'paper'){
        comScore += 200;
    } else if (player === 'rock' && com === 'scissor'){
        plScore += 200;
    } else if(player === 'paper' && com === 'rock'){
        plScore += 200;
    } else if(player === 'paper' && com === 'paper'){
        comScore += 100;
        plScore += 100;
    } else if (player === 'paper' && com === 'scissor'){
        comScore += 200;
    } if(player === 'scissor' && com === 'scissor'){
        plScore += 100;
        comScore += 100;
    } else if(player === 'scissor' && com === 'rock'){
        comScore += 200;
    } else if (player === 'scissor' && com === 'paper'){
        plScore += 200;
    }
    
    round += 1;
   
    if(round >= 0 && round <= 12){
        displayRound(round-1);
        currentRoundWinner(plScore, comScore, round);
        scoreUpdate(plScore, comScore, round);
        if(round === 12){
            startPanel.classList.remove('show');
            
            scoreUpdate(plScore, comScore, round);
            gameEnd();
        }
    }
    
    
    console.log(round);

    // return [plScore, comScore];
}
function currentRoundWinner(pl, com, round){
    if(pl > com) {
        roundWinn.textContent = `Player has won round ${round-1}`;
        roundWinn.classList.add('show');
    } else if(pl < com){
        roundWinn.textContent = `AI has won round ${round-1}`;
        roundWinn.classList.add('show');
    } else if(round > 1 && pl === com){
        roundWinn.textContent = `Round ${round -1} is tie.`;
        roundWinn.classList.add('show');
    }
}
function computerSelection(){
    const option = ['ROCK', 'PAPER', 'SCISSOR'];
    const indexAI = Math.floor(Math.random() * 3);
    return option[indexAI];
}

function scoreUpdate(player, ai){
    console.log(typeof player);
    x +=player;
    y += ai;
    playerScore.textContent = x;
    aiScore.textContent = y;
    console.log(x);
console.log(y);
}
function playerSelection(id){
    return roundWinner(id);
}