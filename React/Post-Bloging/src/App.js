import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Content from "./Content";

const App = () => {
  const [currentPage, setCurrentPage] = useState("users");
  const [listItems, setListItems] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "https://jsonplaceholder.typicode.com";

  const fetchItems = async (reqFor = "users") => {
    try {
      const reqURL = `${API_URL}/${reqFor}?limit=10`;
      const response = await fetch(reqURL);
      if (!response.ok) throw Error("Error occoured  while fetching");
      setIsLoading(false);
      setListItems(await response.json());
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchItems(currentPage);
    }, 2000);
  }, []);

  const handleClick = (Name) => {
    setCurrentPage(Name.toLowerCase());
    fetchItems(Name.toLowerCase());
  };

  return (
    <>
      <NavBar handleClick={handleClick} currentPage={currentPage}/>
      {isLoading && (
        <p style={{ color: "red", textAlign: "center" }}>
          <strong>Content</strong> is loading please wait
        </p>
      )}
      {!isLoading && (
        <Content currentPage={currentPage} listItems={listItems} />
      )}
    </>
  );
};

export default App;
