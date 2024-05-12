import "./App.css";
import NavBar from "./components/NavBar";
import SudokuBoard from "./components/SudokoBoard";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <SudokuBoard />
    </>
  );
}

export default App;

// const initialBoard = [
//   [5, 3, null, null, 7, null, null, null, null],
//   [6, null, null, 1, 9, 5, null, null, null],
//   [null, 9, 8, null, null, null, null, 6, null],
//   [8, null, null, null, 6, null, null, null, 3],
//   [4, null, null, 8, null, 3, null, null, 1],
//   [7, null, null, null, 2, null, null, null, 6],
//   [null, 6, null, null, null, null, 2, 8, null],
//   [null, null, null, 4, 1, 9, null, null, 5],
//   [null, null, null, null, 8, null, null, 7, 9],
// ];

// const [board, setBoard] = useState(initialBoard);
// const [userBoard, setUserBoard] = useState(initialBoard);
// const [message, setMessage] = useState("");

// const solveSudoku = (boardToBeSolved) => {
//   const sBoard = JSON.parse(JSON.stringify(boardToBeSolved));

//   const isValid = (row, col, num) => {
//     for (let i = 0; i < 9; i++) {
//       if (sBoard[row][i] === num) {
//         return false;
//       }
//     }
//     for (let i = 0; i < 9; i++) {
//       if (sBoard[i][col] === num) {
//         return false;
//       }
//     }
//     const startRow = Math.floor(row / 3) * 3;
//     const startCol = Math.floor(col / 3) * 3;
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         if (sBoard[startRow + i][startCol + j] === num) {
//           return false;
//         }
//       }
//     }
//     return true;
//   };

//   const solve = () => {
//     for (let row = 0; row < 9; row++) {
//       for (let col = 0; col < 9; col++) {
//         if (sBoard[row][col] === null) {
//           for (let num = 1; num <= 9; num++) {
//             if (isValid(row, col, num)) {
//               sBoard[row][col] = num;
//               if (solve()) {
//                 return true;
//               } else {
//                 sBoard[row][col] = null;
//               }
//             }
//           }
//           return false;
//         }
//       }
//     }
//     return true;
//   };

//   solve();
//   return sBoard;
// };

// const handleCellClick = (rowIndex, colIndex) => {
//   const newValue = prompt("Enter value (1-9):");
//   if (newValue && !isNaN(newValue) && newValue >= 1 && newValue <= 9) {
//     const newBoard = [...userBoard];
//     newBoard[rowIndex][colIndex] = parseInt(newValue);
//     setUserBoard(newBoard);
//   }
// };

// const handleNewPuzzle = async () => {
//   //had to be done
//   let res = await fetch("https://sudoku-api.vercel.app/api/dosuku");
//   res = await res.json();
//   // console.log(res.newboard.grids[0].value);
//   let newBoard = res.newboard.grids[0].value;
//   for (let i = 0; i < 9; i++) {
//     if (newBoard[i] == 0) newBoard[i] = null;
//   }

//   setBoard(newBoard);
//   console.log("Borad:", board);
//   setUserBoard(newBoard);
//   setMessage("");
// };

// const compareSolutions = () => {
//   const solvedBoard = solveSudoku(board);
//   console.log("Dolved borad:", solvedBoard);

//   let isEqual = true;

//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (userBoard[i][j] !== solvedBoard[i][j]) {
//         isEqual = false;
//         break;
//       }
//     }
//     if (!isEqual) break;
//   }
//   if (isEqual) {
//     setMessage("Congratulations! You solved the puzzle!");
//   } else {
//     setMessage("Sorry! Your solution is incorrect.");
//   }
//   setUserBoard(solvedBoard);
// };
