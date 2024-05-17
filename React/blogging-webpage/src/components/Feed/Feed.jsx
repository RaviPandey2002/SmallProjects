import React from 'react'
import Post from '../Post/Post'
const Feed = ({ items }) => {
  return (
    <>
      {
        items.map(item => {
            return <Post key={item.id} item={item}/>
        })
      }
    </>
  );
};

export default Feed;
