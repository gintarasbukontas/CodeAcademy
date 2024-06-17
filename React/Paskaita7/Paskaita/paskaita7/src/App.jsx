import { useState, useEffect, useRef } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [count, setCount] = useState(0);
  const [showTimer, setshowTimer] = useState(true);

  const persistentValue = useRef();

  function handleClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <button onClick={() => (persistentValue.current = 9)}>
        Change useRef value
      </button>
      <button onClick={() => console.log(persistentValue)}>
        Log persistenValue
      </button>
      <button onClick={handleClick}>Click me</button>
      <h1>{count}</h1>
      <button onClick={() => setshowTimer(!showTimer)}>Toggle timer</button>
      {showTimer && <Timer />}
      <VideoPlayer />
    </div>
  );
}

export default App;
