const chessboard = document.querySelector(".chessboard");

const pieceImages = {
  r: "imagesBoard/blackRook.png",
  n: "imagesBoard/blackKnight.png",
  b: "imagesBoard/blackBishop.png",
  q: "imagesBoard/blackQueen.png",
  k: "imagesBoard/blackKing.png",
  p: "imagesBoard/blackPawn.png",
  R: "imagesBoard/whiteRook.png",
  N: "imagesBoard/whiteKnight.png",
  B: "imagesBoard/whiteBishop.png",
  Q: "imagesBoard/whiteQueen.png",
  K: "imagesBoard/whiteKing.png",
  P: "imagesBoard/whitePawn.png",
};

const initialPositions = [
  "r", "n", "b", "q", "k", "b", "n", "r",
  "p", "p", "p", "p", "p", "p", "p", "p",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "", "", "", "", "", "", "", "",
  "P", "P", "P", "P", "P", "P", "P", "P",
  "R", "N", "B", "Q", "K", "B", "N", "R"
].map(piece => pieceImages[piece]);

function createCell(position, figure) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  if (figure) {
    const figureElement = document.createElement("img");
    figureElement.classList.add("figure");
    figureElement.src = figure;
    cell.appendChild(figureElement);
  }

  cell.addEventListener("click", () => {
    const selected = document.querySelector(".selected");
    if (selected) {
      if (selected === cell) {
        selected.classList.remove("selected");
      } else {
        const figureToMove = selected.querySelector(".figure");
        selected.removeChild(figureToMove);
        selected.classList.remove("selected");

        if (cell.querySelector(".figure")) {
          cell.removeChild(cell.querySelector(".figure"));
        }

        cell.appendChild(figureToMove);
      }
    } else if (cell.querySelector(".figure")) {
      cell.classList.add("selected");
    }
  });

  return cell;
}

function createChessBoard() {
  for (let i = 0; i < 8; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    chessboard.appendChild(row);
    for (let j = 0; j < 8; ++j) {
      const cell = createCell(j + i * 8, initialPositions[j + i * 8]);
      row.appendChild(cell);
    }
  }
}

createChessBoard();
