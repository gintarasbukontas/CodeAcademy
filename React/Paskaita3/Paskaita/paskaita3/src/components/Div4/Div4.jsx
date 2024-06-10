import { useState } from "react";

export default function Div4() {
  const [getImage, setImage] = useState(
    "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
  );

  function setImageToCat() {
    setImage(
      "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
    );
  }

  function setImageToDog() {
    setImage(
      "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
    );
  }

  return (
    <div>
      <br />
      <img src={getImage} alt="" style={{ width: "200px" }} />
      <br />
      <button onClick={setImageToCat}>Cat</button>
      <button onClick={setImageToDog}>Dog</button>
    </div>
  );
}
