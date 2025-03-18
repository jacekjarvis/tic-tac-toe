import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function handleSelectedButton(rowIndex, colIndex) {
//   console.log(rowIndex, colIndex);
//   setGameBoard((prevBoard) => {
//     //create copy of the current board
//     const updatedBoard = [...prevBoard.map((row) => [...row])];

//     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//     return updatedBoard;
//   });

//   onSelectSquare();
// }

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  //onClick={() => handleSelectedButton(rowIndex, colIndex)}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
