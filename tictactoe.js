document.addEventListener("DOMContentLoaded", function () {
    const b1 = document.getElementById("gb1");
    const b2 = document.getElementById("gb2");
    const b3 = document.getElementById("gb3");
    const b4 = document.getElementById("gb4");
    const b5 = document.getElementById("gb5");
    const b6 = document.getElementById("gb6");
    const b7 = document.getElementById("gb7");
    const b8 = document.getElementById("gb8");
    const b9 = document.getElementById("gb9");
    const buttonO = document.getElementById("button1");
    const buttonX = document.getElementById("button2");
    const gridButtons = Array.from(document.getElementsByClassName("gridButton"));
    const resultBox = document.querySelector(".resultBox");
    const startButton = document.getElementById("startButton");

    let currentPlayer = "X";
    let gameOver = false;
    let moveCount = 0;

    const grid2D = [];
    const gridSize = 3;
    for (let row = 0; row < gridSize; row++) {
        const currentRow = [];
        for (let col = 0; col < gridSize; col++) {
            const index = row * gridSize + col;
            currentRow.push(gridButtons[index]);
        }
        grid2D.push(currentRow);
    }

    function clearAll() {
        moveCount = 0;
        gameOver = false;
        gridButtons.forEach(btn => {
            btn.innerHTML = "";
            btn.disabled = false;
        });
        resultBox.style.display = "none";
        resultBox.textContent = "";
        buttonX.style.backgroundColor = "white";
        buttonO.style.backgroundColor = "white";
    }

    function showResult() {
        resultBox.style.display = "block";
        resultBox.textContent = `${currentPlayer} wins!!!!!!!`;
        gameOver = true;

        // Disable all buttons after win
        gridButtons.forEach(btn => btn.disabled = true);
    }

    function check(i, j) {
        const symbol = grid2D[i][j].textContent;
        if (
            grid2D[i][0].textContent === symbol &&
            grid2D[i][1].textContent === symbol &&
            grid2D[i][2].textContent === symbol
        ) {
            showResult();
            return true;
        }

        // Vertical Column Check
        if (
            grid2D[0][j].textContent === symbol &&
            grid2D[1][j].textContent === symbol &&
            grid2D[2][j].textContent === symbol
        ) {
            showResult();
            return true;
        }

        // Diagonal ↘ (i === j)
        if (i === j &&
            symbol === grid2D[0][0].textContent &&
            symbol === grid2D[1][1].textContent &&
            symbol === grid2D[2][2].textContent) {
            showResult();
            return true;
        }

        // Diagonal ↙ (i + j === 2)
        if (i + j === 2 &&
            symbol === grid2D[0][2].textContent &&
            symbol === grid2D[1][1].textContent &&
            symbol === grid2D[2][0].textContent) {
            showResult();
            return true;
        }
        
    }

    function resultCheck(button) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (button === grid2D[i][j]) {
                    return check(i, j);
                }
            }
        }
        return false;
    }

    gridButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (gameOver || button.innerHTML !== "") return;

            button.textContent = currentPlayer;
            moveCount++;

            const hasWon = resultCheck(button);

            if (hasWon) return;

            if (moveCount === 9 && !hasWon) {
                resultBox.textContent = "It's a draw!";
                resultBox.style.display = "block";
                gameOver = true;
                return;
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";

            if (currentPlayer === "X") {
                buttonX.style.backgroundColor = "crimson";
                buttonO.style.backgroundColor = "white";
            } else {
                buttonO.style.backgroundColor = "crimson";
                buttonX.style.backgroundColor = "white";
            }
        });
    });

    startButton.addEventListener("click", function () {
        clearAll();
        currentPlayer = "X";
        buttonX.style.backgroundColor = "crimson";
    });
});
