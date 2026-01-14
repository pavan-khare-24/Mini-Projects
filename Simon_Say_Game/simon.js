let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
// let score = document.querySelector("#scoreBox");
// let highScore = document.querySelector("#hiscoreBox");

document.addEventListener("keypress", () => {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("curr level : ", level);
    
    if(userSeq[idx] === gameSeq[idx]) {
        // console.log("same value");
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        document.querySelector("body").style.backgroundColor = "red";
        h2.innerHTML = `Game over! Your score is <b>${level}</b> Press any key to start.`;
        // score.innerHTML = `Score: ${level}`;

        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";

        }, 200);
        // console.log("Highest Score : ", getHighest(high));

        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// // High Score in local storage
// let hiScore = localStorage.getItem("hiscore");

// let hiScoreVal;
// if(hiScore === null) {
//     hiScoreVal = 0;
//     localStorage.setItem("hiScore", JSON.stringify(hiScoreVal));
// } else {
//     hiScoreVal = JSON.parse(hiScore);
//     hiscoreBox.innerHTML = "High Score: " + hiScore;
// }


