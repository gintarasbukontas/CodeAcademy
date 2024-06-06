export default function Button() {
  function consoleSomething() {
    console.log("Aš esu mygtuko komponentas");
  }
  return <button onClick={consoleSomething}>Click me</button>;
}
