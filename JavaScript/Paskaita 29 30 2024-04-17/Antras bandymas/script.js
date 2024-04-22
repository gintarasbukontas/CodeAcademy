const gameBoard = document.querySelector("#gameBoard");
const scoreText = document.querySelector("#score");

let board = [];
const rows = 4;
const columns = 4;
let score = 0;

window.onload = function () {
  generateBoard();
};

function generateBoard() {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const tile = document.createElement("div");
      gameBoard.append(tile);
      tile.id = r.toString() + "-" + c.toString();
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
  addTile();
  addTile();
}

function hasEmptyTile() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] == 0) {
        return true;
      }
    }
  }
  return false;
}

function addTile() {
  if (!hasEmptyTile()) {
    return;
  }

  const oneToTen = Math.floor(Math.random() * 10 + 1);

  let found = false;

  while (!found) {
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);

    if (board[r][c] == 0) {
      if (oneToTen == 1) {
        board[r][c] = 4;
        let tile = document.getElementById(r.toString() + "-" + c.toString());
        tile.innerText = "4";
        tile.classList.add("x4");
      } else {
        board[r][c] = 2;
        let tile = document.getElementById(r.toString() + "-" + c.toString());
        tile.innerText = "2";
        tile.classList.add("x2");
      }
      found = true;
    }
  }
}

function updateTile(tile, num) {
  tile.innerText = "";
  tile.classList.value = "";
  tile.classList.add("tile");
  if (num !== 0) {
    tile.innerText = num;
    tile.classList.add("x" + num.toString());
  }
}

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") {
    moveUp();
    addTile();
  } else if (e.key === "ArrowDown") {
    moveDown();
    addTile();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
    addTile();
  } else if (e.key === "ArrowRight") {
    moveRight();
    addTile();
  }
  scoreText.textContent = score;
  setTimeout(checkIfWon, 2000);
});

function filterZero(row) {
  return row.filter((num) => num != 0);
}

function slide(row) {
  row = filterZero(row);

  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] == row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
    }
  }
  row = filterZero(row);

  while (row.length < columns) {
    row.push(0);
  }
  return row;
}

function moveLeft() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row = slide(row);
    board[r] = row;

    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function moveRight() {
  for (let r = 0; r < rows; r++) {
    let row = board[r];
    row.reverse();
    row = slide(row);
    row.reverse();
    board[r] = row;

    for (let c = 0; c < columns; c++) {
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function moveUp() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row = slide(row);

    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function moveDown() {
  for (let c = 0; c < columns; c++) {
    let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
    row.reverse();
    row = slide(row);
    row.reverse();

    for (let r = 0; r < rows; r++) {
      board[r][c] = row[r];
      let tile = document.getElementById(r.toString() + "-" + c.toString());
      let num = board[r][c];
      updateTile(tile, num);
    }
  }
}

function checkIfWon() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] == 2048) {
        alert("Laimejote");
      }
    }
  }
}
