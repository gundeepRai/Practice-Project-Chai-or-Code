let random_num = parseInt(Math.random()*100 + 1);
console.log(random_num);

// OR console.log(Math.floor(Math.random()*100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuesses = 0;

let playGame = true;

const p = document.createElement('p');

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let userGuess = parseInt(userInput.value);
        userInput.value = '';
        validateGuess(userGuess);
        
    });
}


// ab ayega logic
function validateGuess(guess){
    if(isNaN(guess)) alert('Please enter a valid number');
    else if(guess < 1) alert('Please enter a number greater than 0');
    else if(guess > 100) alert('Please enter a number less than 100');
    else{
        // prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess){
    if(guess === random_num){
        displayMessage(`Congratulations! You guessed it right in ${numGuesses} guesses`);
        endGame();
    }else if(guess < random_num && numGuesses < 10){
        displayMessage(`Your guess is too low!`);
    }else if(guess > random_num && numGuesses < 10){
        displayMessage(`Your guess is too high!`);
    }else if(numGuesses === 10 ){
        displayMessage(`Game Over! The number was ${random_num}`);
        endGame();
    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}   `;
    numGuesses++;
    remaining.innerHTML = 10 - numGuesses;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // as in case of disabled, setAttribute main 2 arguments hote hain, so next arg is ''
    // submit.setAttribute('disabled', '');

    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
    startOver.appendChild(p);

    playGame = false;
    newGame(); 
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function(e){
        random_num = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuesses = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = 10;
        lowOrHi.innerHTML = '';
        p.remove();
        userInput.removeAttribute('disabled');
        playGame = true;
    });
}






