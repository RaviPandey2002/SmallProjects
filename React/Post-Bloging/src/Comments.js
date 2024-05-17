import React from "react";

const Comments = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>;
      })}
    </ul>
  );
};

export default Comments;
