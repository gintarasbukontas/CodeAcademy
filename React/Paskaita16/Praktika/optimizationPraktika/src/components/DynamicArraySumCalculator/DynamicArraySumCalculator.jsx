import { useMemo, useState } from "react";

export default function DynamicArraySumCalculator() {
  const [arrayOfNumbers, setArrayOfNumbers] = useState([1, 2, 3]);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  function handleSubmit() {
    const updatedArray = [...arrayOfNumbers, +inputValue];
    setArrayOfNumbers(updatedArray);
  }

  const storedResult = useMemo(calculateResult, [arrayOfNumbers]);

  function calculateResult() {
    let res = 0;

    arrayOfNumbers.forEach((element) => {
      res += element;
    });
    setResult(res);
    console.log("calculateResult");
    return res;
  }

  console.log(arrayOfNumbers);
  console.log(result);

  return (
    <div>
      <h2>Sum: {storedResult}</h2>
      <label htmlFor="">Enter number</label>
      <br />
      <input type="number" onChange={(e) => setInputValue(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
