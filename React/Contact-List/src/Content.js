import React from "react";
import ItemList from "./ItemList"

const Content = ({ items, handleClick, handleDelete }) => {
  return (
    <>
      {items.length ? (
          <ItemList 
              
              items={items}
              handleClick={handleClick}
              handleDelete={handleDelete}
          />
      ) : (
        <p style ={ { marginTop: '2rem' } } >
          You'r shopping list is empty!
        </p>
      )}

    </>
  );
};

export default Content;
