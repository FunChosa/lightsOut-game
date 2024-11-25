import React from "react";

const BoardSizeSelect = ({ size, changeBoardSize, sizes }) => {
  return (
    <div className="select-container">
      <select
        value={size}
        onChange={(e) => changeBoardSize(parseInt(e.target.value))}
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}x{size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BoardSizeSelect;
