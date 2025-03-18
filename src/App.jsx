import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Logs from "./components/Logs";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectedSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const currTurn = {
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer,
      };

      const updatedTurns = [currTurn, ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    // PLAYERS
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        <GameBoard onSelectSquare={handleSelectedSquare} turns={gameTurns} />
      </div>
      <Logs />
    </main>
  );
}

export default App;
