import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import BoardSizeSelect from "./components/BoardSizeSelect";
import Board from "./components/Board";

function App() {
  const [size, setSize] = useState(5);
  const sizes = [2, 3, 4, 5, 6, 7];

  const changeBoardSize = (size) => {
    setSize(size);
  };

  return (
    <div className="App">
      <Title />
      <BoardSizeSelect
        size={size}
        changeBoardSize={changeBoardSize}
        sizes={sizes}
      />
      <Board size={size} key={size} />
    </div>
  );
}

export default App;
