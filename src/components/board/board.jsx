import { useState } from "react";
import "./board.css";
import Cell from "../cell/cell";

const Board = ({ size }) => {
  const createGrid = () =>
    new Array(size)
      .fill()
      .map((r) => new Array(size).fill().map((c) => Math.random() < 0.5));
  const [board, setBoard] = useState(createGrid());
  const toggleLights = (rowIndex, colIndex) => {
    const copyBoard = [...board.map((r) => [...r])];
    copyBoard[rowIndex][colIndex] = !copyBoard[rowIndex][colIndex];

    if (rowIndex < size - 1)
      copyBoard[rowIndex + 1][colIndex] = !copyBoard[rowIndex + 1][colIndex];

    if (rowIndex > 0)
      copyBoard[rowIndex - 1][colIndex] = !copyBoard[rowIndex - 1][colIndex];

    if (colIndex < size - 1)
      copyBoard[rowIndex][colIndex + 1] = !copyBoard[rowIndex][colIndex + 1];

    if (colIndex > 0)
      copyBoard[rowIndex][colIndex - 1] = !copyBoard[rowIndex][colIndex - 1];

    setBoard(copyBoard);
  };

  const gameEnd = () => board.every((row) => row.every((col) => !col));

  return (
    <div className="board">
      {gameEnd() ? (
        <div className="won">You won!</div>
      ) : (
        board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((col, colIndex) => (
              <Cell
                rowIndex={rowIndex}
                colIndex={colIndex}
                isOn={board[rowIndex][colIndex]}
                toggleLights={toggleLights}
                key={`${rowIndex}-${colIndex}`}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
