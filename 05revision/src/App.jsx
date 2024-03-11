import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(7);
  const [charAllowed, setChar] = useState(false);
  const [numberAllowed, setnumber] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+=-`~[]{}";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.random() * str.length + 1;
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);
  return (
    <>
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-red bg-blue-500 px-4 py-5 my-8 rounded-lg">
        <h1 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
          />
          <button className="bg-blue-700 px-4 py-2">Copy</button>
        </div>
        <div className="flex">
          <div className="flex">
            <input
              type="range"
              min={5}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length">Length:{length}</label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setnumber((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setChar((prev) => !prev);
              }}
              name=""
              id=""
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
