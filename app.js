const holes = document.querySelectorAll('.field');
const scoreBoard = document.querySelector('.score');
const mrBump = document.querySelectorAll('.mrbump');
let score = 0;
let timeUp = false;
let lastHole;




function randomHole(){
    let randIntHole = Math.floor(Math.random() * 6 ) + 1;
    let field = holes[idx];
    score += randIntNum ;

    if (hole == lastHole){
        return randIntHole(field);
    }

}

function show(){
    let time =  randomTime(200, 1000);
    
}





function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
function addHtml (id, value){
    document.getElementById(id).innerHTML= value;
}