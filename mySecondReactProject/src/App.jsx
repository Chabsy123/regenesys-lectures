import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Vladimir");
  const [count, setCount] = useState(0);
  function changeName() {
    setName("Xi Jinping");
  }

  function increase() {
    if (count >= 0) {
      setCount(count + 1);
    }
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h2>This is {name}</h2>
      <button onClick={changeName}>Change this Name</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
      {/* using styles inside jsx will require two curly brackets, one which means you are writing js and then the second means you are writing an object(which you can use to style)*/}
      <div
        style={{
          display: "flex",
          width: "300px",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={increase}>+</button>
        <h3>{count}</h3>
        <button onClick={decrease}>-</button>
        <br />
        <button onClick={reset}>Reset Count</button>
      </div>
    </>
  );
}
// Hooks are used to re-render React and although variables with const cannot be changed, you can change the values that are defined inside the object

export default App;
