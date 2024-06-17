import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioPlayerRef = useRef();
  const [playing, setPlaying] = useState(false);

  function playOrPause() {
    if (!playing) {
      audioPlayerRef.current.play();
      setPlaying(!playing);
    } else {
      audioPlayerRef.current.pause();
      setPlaying(!playing);
    }
  }

  return (
    <div>
      <audio ref={audioPlayerRef} src="\src\assets\pedro.mp3"></audio>
      <button onClick={playOrPause}>Toggle Audio</button>
    </div>
  );
}
