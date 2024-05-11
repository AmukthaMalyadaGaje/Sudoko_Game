import React, { useState } from "react";

const SudokuBoard = () => {
  const initialBoard = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [userBoard, setUserBoard] = useState(initialBoard);
  const [message, setMessage] = useState("");

  const solveSudoku = (initialBoard) => {
    const sBoard = JSON.parse(JSON.stringify(initialBoard));

    const isValid = (row, col, num) => {
      // Check if the number is already present in the row
      for (let i = 0; i < 9; i++) {
        if (sBoard[row][i] === num) {
          return false;
        }
      }
      // Check if the number is already present in the column
      for (let i = 0; i < 9; i++) {
        if (sBoard[i][col] === num) {
          return false;
        }
      }
      // Check if the number is already present in the 3x3 grid
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (sBoard[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }
      return true;
    };

    const solve = () => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (sBoard[row][col] === null) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(row, col, num)) {
                sBoard[row][col] = num;
                if (solve()) {
                  return true;
                } else {
                  sBoard[row][col] = null;
                }
              }
            }
            return false;
          }
        }
      }
      return true;
    };

    solve();
    return sBoard;
  };

  const handleCellClick = (rowIndex, colIndex) => {
    const newValue = prompt("Enter value (1-9):");
    if (newValue && !isNaN(newValue) && newValue >= 1 && newValue <= 9) {
      const newBoard = [...userBoard];
      newBoard[rowIndex][colIndex] = parseInt(newValue);
      setUserBoard(newBoard);
    }
  };

  const handleNewPuzzle = () => {
    // Your logic to generate a new puzzle
    setBoard(newPuzzle);
    setUserBoard(newPuzzle);
    setMessage("");
  };

  const compareSolutions = () => {
    const solvedBoard = solveSudoku(board);
    setUserBoard(solvedBoard);
    let isEqual = true;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (userBoard[i][j] !== solvedBoard[i][j]) {
          isEqual = false;
          break;
        }
      }
      if (!isEqual) break;
    }
    if (isEqual) {
      setMessage("Congratulations! You solved the puzzle!");
    } else {
      setMessage("Sorry! Your solution is incorrect.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-6/12 h-5.5/6 bg-gray-200 border border-gray-400 rounded-lg p-2 relative">
        <table className="m-4">
          <tbody>
            {userBoard.map((row, rowIndex) => (
              <tr key={rowIndex} className="p-4">
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className="w-[60px] h-[60px] border border-gray-300 bg-white text-center cursor-pointer"
                    style={{ margin: "2px" }}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {cell || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {message && (
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
            <div
              className={`text-lg ${
                message.includes("Congratulations")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between ml-4">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          onClick={handleNewPuzzle}
        >
          Get New Puzzle
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={compareSolutions}
        >
          Get Solution
        </button>
      </div>
    </div>
  );
};

export default SudokuBoard;
