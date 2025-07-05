import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const addVal = () => {
    count = count + 1;
    setCount(count);
  };
  const subVal = () => {
    count = count - 1;
    setCount(count);
  };
  return (
    <>
      <h1>Welcome to React Day3</h1>
      <h2>count : {count}</h2>
      <button onClick={addVal}>count+1</button>
      <br />
      <button onClick={subVal}>count-1</button>
    </>
  );
}

export default App;
