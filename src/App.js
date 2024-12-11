import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  

  function Square({value, handleClick}) {
     return (
      <button
        className="square"
        onClick={handleClick}
      >
        {value}
      </button>
    );

  }

  function Board() {

    const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);
    const [xIsNext, setXIsNext] = useState(true);
    const [status, setStatus] = useState(null);
    
    function ResetButton() {
      function clickReset() {
        setStatus(null);
        setSquares([null, null, null, null, null, null, null, null, null]);
      }
      return (
        <button
         
          onClick={clickReset}
        >
          Reset Game
        </button>
      );
    }
    function handleClick(index) {
      if (squares[index]) {
        return;
      }
    
      // Tạo bản sao của mảng squares
      const updatedSquares = [...squares];

      // Cập nhật giá trị tại vị trí index
      
      updatedSquares[index] = xIsNext == true ? 'X': 'O';

      // Cập nhật state
      setSquares(updatedSquares);
      const winner = calculateWinner(updatedSquares);
      console.log("winner" + winner);
      if (winner == "X") {
        console.log("X winner");
        setStatus("X winner")
      } else if (winner == "O") {
        console.log("O winner");
        setStatus("O winner")
      }

      setXIsNext(!xIsNext);
    }

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
    
    return (
      <><div className="status">{status}</div>
      <div className="grid-container">
        <div className="board-row">
          <Square value={squares[0]} handleClick={() => handleClick(0)} />
          <Square value={squares[1]} handleClick={() => handleClick(1)} />
          <Square value={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} handleClick={() => handleClick(3)} />
          <Square value={squares[4]} handleClick={() => handleClick(4)} />
          <Square value={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} handleClick={() => handleClick(6)} />
          <Square value={squares[7]} handleClick={() => handleClick(7)} />
          <Square value={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
      <br/>
      <ResetButton/>
      </>
  
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Caro Game 
        </p>
       <Board/>
       
      </header>

    </div>
  );
}

export default App;
