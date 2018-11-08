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
        let intervalId = setInterval(newBump, 1500);
        setTimeout(endGame, 30000, intervalId);    
    }
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
    setTimeout(reset, 1000, randBump);
}
function reset(randBump) {
    mrBumps[randBump].style.visibility = "hidden";
}
function endGame(intervalId) {
    alert('Time Up!');
    clearInterval(intervalId);
    isPlaying = false;
}
function clickBump (){
    // let clickingMrBumps = document.addEventListener(".mrbump");
  
    this.parentNode.classList.remove('up');
    score+= 1;
    scoreBoard.innerHTML = score;

}
mrBumps.forEach(mrbump => mrbump.addEventListener('click', clickBump));