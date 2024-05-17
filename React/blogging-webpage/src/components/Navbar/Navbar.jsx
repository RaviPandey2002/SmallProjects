import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="Nav">
      <form className="searchForm" onSubmit={(e)=>{e.preventDefault()}}>
        <label className="labelForNav">
          Here is the label for Input for Search bar
        </label>
        <input 
          className="search"
          type="text"
          placeholder="Search Here"        
          
        />
      </form>
      <ul>
        <li><Link to="/home"> Home </Link></li>
        <li><Link to="/post"> Create Post </Link></li>
        <li><Link to="/about"> About </Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
