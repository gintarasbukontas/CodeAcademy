import { forwardRef } from "react";

const CustomVideo = forwardRef(({ videoUrl }, ref) => {
  return (
    <video style={{ height: "600px" }} ref={ref} controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
});

CustomVideo.displayName = "CustomVideo";

export default CustomVideo;
