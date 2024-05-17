import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const { id } = useParams();
  const API_URL = "http://localhost:3500/posts";
  const reqURL = `${API_URL}/${id}`;
  const [data, setData] = useState("");

  useEffect(() => {
    console.log(reqURL)
    const apiRequest = async () => {
      try {
        const res = await fetch(reqURL);
        if(!res.ok) throw Error(res)
        const data = await res.json()
        setData(data)
      } catch (err) {
        console.log("EEEEE");
      } finally {
      }
  };

    apiRequest();


  }, []);

  return (
    <main className="PostPage">
      {/* {console.log(data)} */}
      <article className="post">
        {data && (
          <>
            <h2>{data.title}</h2>
            <p>{data.datetime}</p>
            <p>{data.body}</p>
          </>
        )}
        <button>d</button>
      </article>
    </main>
  );
};

export default PostPage;
