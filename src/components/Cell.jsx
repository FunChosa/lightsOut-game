const Cell = ({ rowIndex, colIndex, isOn, toggleLights }) => {
  const handleClick = () => toggleLights(rowIndex, colIndex);

  return <button onClick={handleClick} className={isOn ? "on" : "off"} />;
};

export default Cell;
