import React from "react";

const ColorTyper = ({ colorName, setColorName }) => {
  return (
    <form className="addForm" onsubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        placeholder="Add color name"
        type="text"
        value={colorName}
        onChange={(e) => {
          setColorName(e.target.value);
        }}
      />
    </form>
  );
};

export default ColorTyper;
