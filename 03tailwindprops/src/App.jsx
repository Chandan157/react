import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  // //object
  // let myObj = {
  //   username: "Chandan",
  //   age: 21,
  // };

  // //array
  // let newArr=[1,2,3]

  return (
    <>
      <h1 className="bg-green-400 tex text-black p-5 rounded-xl mb-4">
        Hello Tailwind
      </h1>
      <Card username="chandanbhai" btnText="click me" />
      <Card username="Chandan" />
    </>
  );
}

export default App;
