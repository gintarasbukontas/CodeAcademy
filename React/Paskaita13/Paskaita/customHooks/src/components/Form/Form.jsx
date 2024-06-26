import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useDisappearingElement } from "../../hooks/useDisappearingElement";

export default function Form() {
  const name = useInput("name");
  const email = useInput("email");
  const elementRef = useDisappearingElement();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(`name: ${name.value}, email: ${email.value}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 ref={elementRef}>As pradingstu</h1>
        <input type="text" {...name} />
        <br />
        <input type="text" {...email} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// isskleidus pagal pavadinima supranta
// ka kur priskirt {...name} = value={email.value} onChange={email.onChange}
