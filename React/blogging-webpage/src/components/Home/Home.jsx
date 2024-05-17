import React, { useEffect, useState } from "react";
import Feed from '../Feed/Feed'

const Home = () => {
  const API_URL = "http://localhost:3500/posts";
  // const EXERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts"
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError ] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const response =  await fetch(API_URL)
        if(!response.ok) throw Error("FETCH ERROR")
        const data = await response.json();
        setIsLoading(false)
        setItems(data);
      } catch (err) {
        console.log("FetchError");
        setFetchError(err.message)
        setIsLoading(false)
      }
    };
    fetchListItems()
    
  }, []);

  return (
    <main className="Home">
      {isLoading && <p>Content is Loading please wait!!</p> }
      {!isLoading && fetchError && <p>Error: {fetchError}</p> }
      {!isLoading && !fetchError && <Feed items={items} /> }
    </main>
  );
};

export default Home;
