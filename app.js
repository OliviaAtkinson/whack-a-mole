const holes = document.querySelectorAll('.field');
const scoreBoard = document.querySelector('.score');
const mrBumps = document.querySelectorAll('.mrbump');
let score = 0;
let prevNum = -1;
let isPlaying = false;

function startGame() {
    if(!isPlaying) {
        isPlaying = true
        score = 0;
        let intervalId = setInterval(newBump, 1000);
        setTimeout(endGame, 30000, intervalId);    
    }
}
//starts the game, if playing is true , score = 0, every 1.5 seconds there is a new bumb that shows. 
//the game lasts for 30 seconds.

function newBump() {
    let randBump = Math.floor(Math.random() * 6);
    
    if(randBump == prevNum) {
        console.log("duplicate");
        newBump()
    } else {
        mrBumps[randBump].style.visibility = "visible";
    }
    prevNum = randBump;
    setTimeout(resetGame, 500, randBump);
}
//new bumb, randomly chooses 

function resetGame(randBump) {
    mrBumps[randBump].style.visibility = "hidden";
    startGame();
}
//after showing mr bumb, the visibility resets after a certain ammount of time which is shown in the new bumb function.

function endGame(intervalId) {
    alert('Time Up!');
    clearInterval(intervalId);
    isPlaying = false;
}
//alerts the user that the game has finished, clears the end game interval after 30000 milliseconds, and sets isplaying to false.

function clickBump (){
    // let clickingMrBumps = document.addEventListener(".mrbump");
    this.parentNode.classList.remove('up');
    score+= 1;
    //everytime you click the bumb it increments the score of 1.
    scoreBoard.innerHTML = score;
}

mrBumps.forEach(mrbump => mrbump.addEventListener('click', clickBump));
//for each mrBumbs click the mrbumb function 


//need to make the reset button reset the score after the alert.