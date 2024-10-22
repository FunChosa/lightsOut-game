import { useState } from "react";
import "./App.css";
import Board from "./components/board/board";
import Title from "./components/title/title";

function App() {
  const [size, setSize] = useState(5);
  const sizes = [2, 3, 4, 5, 6, 7];
  return (
    <div className="App">
      <Title />
      <div className="select-container">
        <select
          value={size}
          onChange={(e) => setSize(parseInt(e.target.value))}
        >
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}x{size}
            </option>
          ))}
        </select>
      </div>
      <Board size={size} key={size} />
    </div>
  );
}

export default App;
