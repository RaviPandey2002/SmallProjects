import React from "react";

const LineItem = ({ item, handleClick, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => {
          handleClick(item.id);
        }}
        checked={item.checked}
      />
      <label 
        style={ (item.checked) ? {textDecoration:'line-through'}: null }
      onDoubleClick={() => handleClick(item.id)}>{item.item}</label>
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        d
      </button>
    </li>
  );
};

export default LineItem;
