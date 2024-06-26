import { useRef, useState, useEffect } from "react";

export function useHover() {
  const [hover, setHover] = useState(false);

  const elementRef = useRef();

  useEffect(() => {
    function handleMouseOver(e) {
      setHover((prevHover) => {
        const newHover = true;
        console.log(`hover: ${newHover}`);
        return newHover;
      });
      e.target.style.color = "red";
    }

    function handleMouseLeave(e) {
      setHover((prevHover) => {
        const newHover = false;
        console.log(`hover: ${newHover}`);
        return newHover;
      });
      e.target.style.color = "white";
    }

    elementRef.current.addEventListener("mouseenter", handleMouseOver);

    elementRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      elementRef.current.removeEventListener("mouseenter", handleMouseOver);

      elementRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [elementRef.current]);

  return elementRef;
}
