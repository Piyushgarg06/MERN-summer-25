import { useState } from "react";
import Buttons from "./Buttons";

function App() {
  const [color, setColor] = useState("olive");
  const arr = [
    { label: "red", color: "red" },
    { label: "blue", color: "blue" },
    { label: "green", color: "green" },
    { label: "purple", color: "purple" },
  ];
  return (
    <>
      <div
        className="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap px-2 justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap gap-3 rounded-3xl justify-center bg-white px-3 py-2">
            {arr.map((btn, index) => (
              <Buttons
                key={index}
                label={btn.label}
                color={btn.color}
                click={() => setColor(btn.color)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
