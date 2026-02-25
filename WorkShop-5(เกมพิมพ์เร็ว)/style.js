const level_btn = document.getElementById("level-btn");
const settings = document.getElementById("settings");
const levelFormEl = document.getElementById("level-form");
const levelEl = document.getElementById("level");
const wordEl = document.getElementById("word");
const textEl = document.getElementById("text");
const gameoverEl = document.getElementById("gameover-container");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

const words=["ไก่","เศรษฐี" ,"แมว","หมู","แมว"];

let randomText;
let score=0;
let time=10; /* easy =>15 ,medium =>10 ,hard =>5 */
let level= 'medium';
const saveMode = localStorage.getItem("mode") !==null ? localStorage.getItem("mode"): 'medium' ;
const timeInterval = setInterval(updateTime,1000);

function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)]
}

function displayWordToUi(){
    timeEl.innerHTML = time;
    randomText = getRandomWord();
    wordEl.innerHTML =randomText;
}
textEl.addEventListener('input',(e)=>{
    const inputText = e.target.value;
    if(inputText === randomText){
        if(saveMode == 'easy'){
        time+=5;
    }else if (saveMode == 'medium'){
        time+=3;
    }else{
        time+=2;
    }
        displayWordToUi();
        updateScore();
        updateTime();
        e.target.value = '';
    }
});
function updateScore(){
    score+=10
    scoreEl.innerHTML=score;
}

function updateTime(){
    time--
    timeEl.innerHTML = time;
    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}
function gameOver(){
    gameoverEl.innerHTML = `<h1>จบเกมแล้ว</h1>
                            <p>คะแนนของคุณ = ${score} คะแนน</p>
                            <button onclick="location.reload()">เล่นอีกครั้ง</button>`
    gameoverEl.style.display='flex'
}

function startGame(){
    levelEl.value=saveMode;

    if(saveMode == 'easy'){
        time=15;
    }else if (saveMode == 'medium'){
        time=10;
    }else{
        time=5;
    }
    displayWordToUi();
}
level_btn.addEventListener('click',()=>{
    settings.classList.toggle('hide');
});
levelEl.addEventListener('change',(e)=>{
    level= e.target.value;
    localStorage.setItem("mode",level);
});
startGame();
textEl.focus();