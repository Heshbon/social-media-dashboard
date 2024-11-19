import React, { createContext, useContext, useState, useEffect } from "react";
import { getPosts } from "../services/api";

const PostContext = createContext();

export const usePosts = () => {
  return useContext(PostContext);
}

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await getPosts();
      setPosts(data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading, fetchPosts, error }}>
      {children}
    </PostContext.Provider>
  );
};