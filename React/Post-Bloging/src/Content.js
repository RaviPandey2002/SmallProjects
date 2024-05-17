import React from "react";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";

const Content = ({ currentPage, listItems }) => {
  return (
    <>
      {currentPage === "users" && <Users listItems={listItems} />}
      {currentPage === "posts" && <Posts listItems={listItems} />}
      {currentPage === "comments" && <Comments listItems={listItems} />}
    </>
  );
};

export default Content;
