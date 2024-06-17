import { useRef } from "react";

export default function VideoPlayer() {
  //   const videoPlayer = document.querySelector("video");

  const videoPlayerRef = useRef();

  //   console.log(videoPlayerRef.current);

  return (
    <div>
      <video ref={videoPlayerRef} src="\src\assets\videoplayback.mp4"></video>
      <br />
      <button onClick={() => videoPlayerRef.current.play()}>Play</button>
      <button onClick={() => videoPlayerRef.current.pause()}>Pause</button>
    </div>
  );
}
