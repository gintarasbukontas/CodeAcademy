import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  const timerIntervalRef = useRef(); // suteikia prieiga prie html elemento, galima panaudoti jei norime turetu reiksme kuri taip paprastai neisnyksta

  useEffect(() => {
    timerIntervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      // return funkcija suveikia kai elementas issitrina
      clearInterval(timerIntervalRef.current);
    };
  }, []); // tuscias [] pakrauna pirma karta uzsikrovus elementui

  return (
    <div>
      <h3>{time}</h3>
      <button
        onClick={() => {
          clearInterval(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }}
      >
        Pause timer
      </button>
      <button
        onClick={() => {
          if (!timerIntervalRef.current) {
            timerIntervalRef.current = setInterval(() => {
              setTime((prev) => prev + 1);
            }, 1000);
          }
        }}
      >
        Play timer
      </button>
    </div>
  );
}
