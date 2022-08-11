let lastValue = "0";
let display = document.getElementById("display");
display.textContent = "player 1's turn to play"
// get all div (box) or button
let boxes = document.querySelectorAll(".box");

// set click listener on all boxes
for (let box of boxes) {
    box.addEventListener("click", () => {
        if (box.textContent !=="") {
            return
        }

        if (lastValue === "X") {
            box.textContent = "O";
            lastValue = "O";
            display.textContent = "Player 1's turn to play";
            checkGameStatus();
            checkDraw();
        } else {
            box.textContent = "X";
            lastValue = "X";
            display.textContent = "Player 2's turn to play";
            checkGameStatus();
            checkDraw();
        }
    })
}

let controlBtn = document.getElementById("controlBtn");
controlBtn.addEventListener("click", () => {
    window.location.href = "game.html"
})

function checker(first, second, third) {
    if (
        boxes[first].textContent === "X" &&
        boxes[second].textContent === "X" &&
        boxes[third].textContent === "X"
    ) {
        disableButtonWhenGameIsWon("Player 1");
    } else if (
        boxes[first].textContent === "O" &&
        boxes[second].textContent === "O" &&
        boxes[third].textContent === "O"
    ) {
        disableButtonWhenGameIsWon("Player 2");
    }
}

function checkGameStatus() {
    checker(0, 1, 2);
    checker(3, 4, 5);
    checker(6, 7, 8);
    checker(0, 3, 6);
    checker(1, 4, 7);
    checker(2, 5, 8);
    checker(0, 4, 8);
    checker(2, 4, 6);
}

function disableButtonWhenGameIsWon(player) {
    for (let box of boxes) {
        if (box.textContent === "") {
            // box.addEventListener("click", ()=>{});
            box.toggleAttribute("disabled");
        }
    }
    display.textContent = player + " won the game";
}

function checkDraw() {
    for (let box of boxes) {
        if (box.textContent === "") {
            return;
        }
    }
    display.textContent ="Draw"
}