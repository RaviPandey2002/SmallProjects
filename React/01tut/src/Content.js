import React, { useState } from "react";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "tea-leafs",
    },
    {
      id: 2,
      checked: true,
      item: "water",
    },
    {
      id: 3,
      checked: false,
      item: "milk",
    },
    {
      id: 4,
      checked: false,
      item: "cattle",
    },
  ]);

  const handleChange = (id) => {
    const listItems = items.map( (item)=>( item.id === id ? {...item, checked: !item.checked} : item) );
    setItems(listItems);
  }
  const handleClick = (id) => {
    const listItems = items.filter( (item)=>( item.id !== id ) );
    setItems(listItems);
  }

  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={()=> handleChange(item.id)}
          />
          <label 
            style = {(item.checked)? { textDecoration: 'line-through'} : null}
            onDoubleClick={()=> handleChange(item.id)} >{item.item}
          </label>
            
          <button onClick={() => handleClick(item.id)} >Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Content;
