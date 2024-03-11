import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 5;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    setCounter((previouscounter) => previouscounter + 1);
    console.log("Value added", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value is: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
