import React from "react";
import { useRef } from 'react'

const AddNewItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef()

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">AddItem</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        required
        placeholder="Neew thing"
        value={newItem}
        onChange={ (e)=> setNewItem(e.target.value) }

      />
      <button 
        type="submit"
        aria-label='Add Item'
        onClick={()=> inputRef.current.focus()}
      >a</button>

    </form>
  );
};

export default AddNewItem;
