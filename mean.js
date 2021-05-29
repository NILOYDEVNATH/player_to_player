const p1ScoreDisplay = document.getElementById('player1score');
const p2ScoreDisplay = document.getElementById('player2score');

const winingScoreDisplay = document.querySelector('p span');

const inputScore = document.getElementById('inputScore');

const p1Btn = document.getElementById('player1Btn');
const p2Btn = document.getElementById('player2Btn');
const resetBtn = document.getElementById('reset');

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;

let gameOver = false

function winner(oldScore,winingScore){
    if(oldScore === winingScore){

        if(p1Score == winingScore){
            p1ScoreDisplay.classList.add('winner')
        } 
        else
        {
            p2ScoreDisplay.classList.add('winner')
        }
        gameOver = true;
        p1Btn.setAttribute('disabled','disabled');
        p2Btn.setAttribute('disabled','disabled');
    }
}

function reset(){
    p1Score = 0
    p2Score = 0
    gameOver = false
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
    p1ScoreDisplay.classList.remove('winner')
    p2ScoreDisplay.classList.remove('winner')
}

p1Btn.addEventListener('click', function(){
    if(!gameOver){
        p1Score++

        // if(p1Score === winingScore){
        //     gameOver = true;
        //     p1Btn.setAttribute('disabled','disabled');
        //     p2Btn.setAttribute('disabled','disabled');
        // }

        winner(p1Score,winingScore)

        p1ScoreDisplay.textContent = p1Score
    }
    
})



p2Btn.addEventListener('click', ()=>{
    if(!gameOver){
        p2Score++

        // if(p2Score === winingScore){
            
        //     p1Btn.setAttribute('disabled','disabled');
        //     p2Btn.setAttribute('disabled','disabled');
        // }

        winner(p2Score,winingScore)

        p2ScoreDisplay.textContent = p2Score
    }
    
})



resetBtn.addEventListener('click', reset)

inputScore.addEventListener('change', ()=>{
    winingScore = Number(inputScore.value);
    winingScoreDisplay.textContent = inputScore.value
    inputScore.value = '';
    reset();

    
})