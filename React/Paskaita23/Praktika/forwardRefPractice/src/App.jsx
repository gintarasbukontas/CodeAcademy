import { useRef } from "react";
import "./App.css";
import CustomVideo from "./components/CustomVideo/CustomVideo";

function App() {
  const videoRef = useRef();

  function playVideo() {
    videoRef.current.play();
  }

  function pauseVideo() {
    videoRef.current.pause();
  }

  function rewindVideo() {
    videoRef.current.currentTime -= 2;
  }

  return (
    <div>
      <CustomVideo videoUrl="./public/1.mp4" ref={videoRef} />
      <br />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
      <button onClick={rewindVideo}>Rewind by 2 sec</button>
    </div>
  );
}

export default App;
