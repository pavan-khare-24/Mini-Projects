let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");

const genBotChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#E55B13";
};

const showWinner = (userWin, userChoice, botChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = `${userScore}`;
        msg.innerText = `You win! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "#104210";
    } else {
        botScore++;
        botScorePara.innerHTML = `${botScore}`;
        msg.innerText = `You lost. ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#E43D40";
    }
};

const playGame = (userChoice) => {
    // Generate computer choice
    const botChoice = genBotChoice();

    if (userChoice === botChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // bot choices -> paper, scissors
            userWin = botChoice === "scissors" ? true : false;  // Ternary Operator
        } else if (userChoice === "paper") {
            // bot choices -> rock, scissors
            userWin = botChoice === "rock" ? true : false;
        } else {
            // user choice -> scissors
            // bot choices -> rock, paper
            userWin = botChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, botChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);

        playGame(userChoice);
    });
});