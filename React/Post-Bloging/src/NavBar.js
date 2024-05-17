import React from "react";

const NavBar = ({ handleClick, currentPage }) => {
  return (
    <main className="NavBar">
      <div
        className="b1"
        style={
          currentPage === "users"
            ? { backgroundColor: "black",
                Color:"white"
             }
            : { backgroundColor: "white" }
        }
        onClick={(e) => {
          handleClick(e.target.textContent);
        }}
      >
        <p>Users</p>
      </div>
      <div
        className="b2"
        style={
          currentPage === "posts"
            ? (
              { backgroundColor: "black" },
              {  }
              )
              
            : { backgroundColor: "white" }
        }
        onClick={(e) => {
          handleClick(e.target.textContent);
        }}
      >
        <p>Posts</p>
      </div>
      <div
        className="b3"
        style={
          currentPage === "comments"
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
        onClick={(e) => {
          handleClick(e.target.textContent);
        }}
      >
        <p>Comments</p>
      </div>
    </main>
  );
};

export default NavBar;
