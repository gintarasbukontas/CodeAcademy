import { useHover } from "../../hooks/useHover";

export default function BigH1() {
  const elementRef = useHover();

  return (
    <div>
      <h1 ref={elementRef}>This is h1</h1>
      <p>This is a paragraph</p>
      <h1>This is another h1</h1>
    </div>
  );
}
