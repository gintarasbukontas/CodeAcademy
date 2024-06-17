import { useRef } from "react";

export default function FocusInput() {
  const focusInputRef = useRef();

  return (
    <div>
      <button onClick={() => focusInputRef.current.focus()}>Focus Input</button>
      <input ref={focusInputRef} type="text" />
    </div>
  );
}
