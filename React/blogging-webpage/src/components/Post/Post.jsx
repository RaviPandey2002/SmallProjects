import React from "react";
import { Link } from "react-router-dom";

const Home = ({ item }) => {
  return (
    <article className="post">
      <Link to={`/post/${item.id}`}>
        <h3>
          {item.title.length <= 25 ? item.title : `${item.title.slice(0, 25)}`}
        </h3>
      </Link>
      <p>
        {item.body.length <= 89 ? item.body : `${item.body.slice(0, 89)}...`}
      </p>
    </article>
  );
};

export default Home;
