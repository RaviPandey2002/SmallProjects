import React from "react";

const Posts = ({ listItems }) => {
  return (
    <ul>
      {listItems.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>;
      })}
    </ul>
  );
};

export default Posts;
