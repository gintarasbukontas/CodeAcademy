import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  // const [num, setNum] = useState(4);

  // let some;

  // if (num === 2) {
  //   some = <h1>IT IS SOME STUFF</h1>;
  // } else {
  //   some = <h1>SOME OTHER STUFF STUFF</h1>;
  // }
  // const [emoji, setEmoji] = useState();

  const [computerPoints, setComputerPoints] = useState(0);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerSymbol, setComputerSymbol] = useState();
  const [playerSymbol, setPlayerSymbol] = useState();
  const [gameInProgress, setGameInProgress] = useState(false);

  function computerPicksSymbol() {
    const symbols = ["✌️", "🤚", "✊"];
    const random = Math.floor(Math.random() * 3);
    setComputerSymbol(symbols[random]);
  }

  useEffect(() => {
    if (gameInProgress && computerSymbol && playerSymbol) {
      checkOutcome();
      setGameInProgress(false);
    }
  }, [gameInProgress, computerSymbol, playerSymbol]);

  function checkOutcome() {
    if (computerSymbol === playerSymbol) {
      return;
    }

    if (
      (computerSymbol === "✌️" && playerSymbol === "🤚") ||
      (computerSymbol === "🤚" && playerSymbol === "✊") ||
      (computerSymbol === "✊" && playerSymbol === "✌️")
    ) {
      setComputerPoints(computerPoints + 1);
    } else {
      setPlayerPoints(playerPoints + 1);
    }
  }

  function play() {
    computerPicksSymbol();
    setGameInProgress(true);
  }

  return (
    <div>
      <h2>Computer points: {computerPoints}</h2>
      <h2>Player points: {playerPoints}</h2>
      <h2>Computer symbol: {computerSymbol}</h2>
      <h2>Player symbol: {playerSymbol}</h2>
      <button onClick={play}>Play</button>
      <div>
        <br />
        <button onClick={() => setPlayerSymbol("✌️")}>✌️</button>
        <button onClick={() => setPlayerSymbol("🤚")}>🤚</button>
        <button onClick={() => setPlayerSymbol("✊")}>✊</button>
      </div>
    </div>
    // <div>
    //   {emoji === "happy" && <h1>😀</h1>}

    //   {emoji === "sad" && <h1>🙁</h1>}

    //   <button onClick={() => setEmoji("happy")}>Happy</button>
    //   <button onClick={() => setEmoji("sad")}>Sad</button>

    //   {/* {some}

    //   {num > 3 && <h1>YES MORE THAN 3</h1>}

    //   {num === 4 ? <h2>YES IT IS 4</h2> : <h2>NO IT IS NOT 4</h2>} */}
    // </div>
  );
}

export default App;
