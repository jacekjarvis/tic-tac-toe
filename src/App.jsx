import Player from "./components/Player";

function App() {
  return (
    // PLAYERS
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>

        <h2>GAME BOARD</h2>
      </div>
      <h2>Log</h2>
    </main>
  );
}

export default App;
