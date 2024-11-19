import React, { createContext, useContext, useState, useEffect } from "react";
import { getPosts, createPost as createPostAPI } from "../services/api";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts function
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const fetchedPosts = await getPosts(); // Assuming getPosts fetches the data
      setPosts(fetchedPosts);
    } catch (error) {
      console.log("Failed to fetch posts", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Add a new post
  const addPost = async (newPost) => {
    try {
      const createdPost = await createPostAPI(newPost);
      setPosts([createdPost, ...posts]); // Add the new post to the front
    } catch (error) {
      console.log("Failed to create post", error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, loading, fetchPosts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostContext);
};