import React from "react";

const ColorPallet = ({ colorName }) => {
  return (
    <div
      className="b1"
      style={{
        backgroundColor: `${colorName}`,
      }}
    >
        {colorName ? colorName : "Empty Value"}
    </div>
  );
};

export default ColorPallet;
