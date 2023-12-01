let randnum = parseInt(Math.random()*10+1);
const submit = document.querySelector('#subt');
const inp = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1;
let play = true;

if(play){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(inp.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a Valid Number');
  }
  else if(guess < 1 || guess >100 ){alert('Number Should be Greater then 0 and Small then 10')}
  else {
    prevGuess.push(guess);
    if(numGuess == 10){
      displayGuess(guess);
      displayMess(`GAME OVER! Number is: ${randnum}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  if(guess === randnum){
    displayMess(`Congratulation, Matched ${guess}`)
    endGame();
  }
  else if(guess < randnum){displayMess(`Guessed Number is TOO Low`);}
  else if(guess > randnum){displayMess(`Guessed Number is TOO High`);}

}
function displayGuess(guess){
  inp.value='';
  guessSlot.innerHTML +=`${guess} ,`;
  numGuess++;
  remaining.innerHTML=`${11 - numGuess}`;
}
function displayMess(message){
  loworHi.innerHTML=`<h3>${message}</h3>`;
  
}
function endGame(){
  inp.value= '';
  inp.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
  startOver.appendChild(p);
  play = false;
  newGame();
}
function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randnum = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess=1;
    guessSlot.innerHTML = ''
    remaining.innerHTML=`${11 - numGuess}`;
    inp.removeAttribute('disabled');
    startOver.removeChild(p);
    play = true;
  })
}
