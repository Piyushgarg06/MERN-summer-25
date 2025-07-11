import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  let [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const generator = useCallback(() => {
    let passCode = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]=-";
    for (let i = 0; i < length; i++) {
      passCode += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(passCode);
  }, [length, numAllowed, charAllowed, setPassword]);
  useEffect(() => {
    generator();
  }, [length, numAllowed, charAllowed, setPassword]);
  const passwordRef = useRef();
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md bg-gray-800 text-white rounded-xl px-4 py-3 my-8">
        <p className="text-white text-center my-3 text-2xl">
          Password Generator
        </p>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-2 text-black bg-white"
            placeholder="password"
            readOnly
            size={Math.max(100, 8)}
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white shrink-0 px-3 py-0.5 rounded transition-all duration-200 hover:bg-blue-800 active:scale-95 active:bg-blue-900 shadow-md"
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              className="cursor-pointer text-white "
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Label : {length}</label>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
