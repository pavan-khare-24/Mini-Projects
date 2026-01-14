let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;  // PlayerX  else PlayerO
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// functions of the game
const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("playerX");
        box.classList.remove("playerO");
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    disabledBoxes();
};

const matchDraw = () => {
    msg.innerText = "Out of Moves. Match Draw";
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner", pos1Val);

                showWinner(pos1Val);
            }
        }
    }
}

// main logic starts here
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");

        count++;
        // console.log(count);
        if (count === 9) {
            matchDraw();
        }

        if(turnX) {   // Player-X
            // box.style.color = "#76B947";
            box.classList.add("playerX");
            box.innerText = "X";
            turnX = false;
        } else {     // Player-O
            // box.style.color = "#b0413e";
            box.classList.add("playerO");
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;   //button is disabled after one click

        checkWinner();
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);