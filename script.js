let Score =0;
let hitScore=0;
let id;

function bubbleMaker(){
let bubble = "";
for(let i=1;i<155;i++){
    const ans =Math.floor (Math.random()*10);
    bubble += `<div class="bubble">${ans}</div>`;
}
document.querySelector('.down-box').innerHTML = bubble;
}

function hit(){
    hitScore =Math.floor (Math.random()*10);
    document.querySelector('.js-box1').innerHTML = hitScore;
}

function timer(){
    let time =10;
    document.querySelector('.js-box2').innerHTML = time;
    clearInterval(id);
     id = setInterval(()=>{
        if(time > 0){
            time--;
            document.querySelector('.js-box2').innerHTML = time;
        }
        else{
            clearInterval(id);
            document.querySelector('.down-box').innerHTML = "Game Over";
        }
    },1000);
}

function score(){
    Score += 10;
    document.querySelector('.js-box3').innerHTML = Score;
}

function updateScore(){
    const parent = document.querySelector('.down-box');
    parent.addEventListener('click',(dets)=>{
        let clickedNum = Number(dets.target.textContent);
       if(clickedNum ===hitScore){
        score();
        bubbleMaker();
        hit();
        timer();
       }
    });
}

updateScore();
bubbleMaker();
hit();
timer();
