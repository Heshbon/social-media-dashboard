import React, { useEffect, useState } from 'react';
import {usePosts} from "../../context/PostContext";
import Post from "./Post";

const Feed = () => {
  const {posts, loading, error, fetchPosts} = usePosts();

  useEffect(() => {
    if (!posts.length) {
      fetchPosts();
    }
  }, [posts, fetchPosts]);
    
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{color:"red"}}>{error}</p>;

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Feed;