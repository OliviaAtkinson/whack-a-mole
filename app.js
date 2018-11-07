const holes = document.querySelectorAll('.field');
const scoreBoard = document.querySelector('.score');
const mrBumps = document.querySelectorAll('.mrbump');
let score = 0;
let timeUp = false;
let lastHole;
let prevNum = -1;

function startGame() {
    timeUp = false;
    score = 0;
    let intervalId = setInterval(newBump, 3000);
    setTimeout(endGame, 30000, intervalId);
}

function newBump() {
    let randBump = Math.floor(Math.random() * 6);
    
    if(randBump == prevNum) {
        console.log("duplicate");
        newBump()
    } else {
        mrBumps[randBump].style.visibility = "visible";
    }
    prevNum = randBump;
    setTimeout(reset, 2500, randBump);
}

function reset(randBump) {
    mrBumps[randBump].style.visibility = "hidden";
}

function endGame(intervalId) {
    alert('Time Up!');
    clearInterval(intervalId);
}