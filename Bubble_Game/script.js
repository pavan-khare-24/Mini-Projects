let timer = 60;
let score = 0;
let randHit = 0;
let panelBtm = document.querySelector("#panel-btm");

function makeBubble() {
    let clutter = "";

    for(var i=1; i<=189; i++) {
        let randNum = Math.floor(Math.random() * 10) + 1;
        clutter += `<div class="bubble">${randNum}</div>`;
    }

    document.querySelector("#panel-btm").innerHTML = clutter;
}

function updateScore() {
    score += 1;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    randHit = Math.floor(Math.random() * 10) +1;
    document.querySelector("#hitVal").innerHTML = randHit;
}

function runTimer() {
    let setTimer = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(setTimer);
            panelBtm.innerHTML = `<h1>Game Over!</h1>`
        }
    }, 1000);
}

panelBtm.addEventListener("click", (details) => {
    let clickedNum = Number(details.target.textContent);
    if(clickedNum === randHit) {
        updateScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
