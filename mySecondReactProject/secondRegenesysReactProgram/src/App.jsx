import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Vladimir")

  function changeName(){
    setName('Xi Jinping')
  }

  return (
  <>
  <h2>I am {name}</h2>
  <button onClick={changeName}>Change this name</button>
  </>
  );
}

export default App;
