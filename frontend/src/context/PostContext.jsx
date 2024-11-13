import React, {createContext, useContext, useState, useEffect} from "react";
import {getPosts, createPost as createPostAPI } from "../services/api";

const PostContext = createContext();

export const PostProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchPosts = await getPosts();
        setPosts(fetchPosts);
      } catch (error) {
        console.log("Failed to fetch posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (newPost) => {
    try {
      const createdPost = await createPostAPI(newPost);
      setPosts([createdPost, ...posts]); // Add the new post to the front
    } catch (error) {
      console.log("Failed to create post", error);
    }
  };

  return (
    <PostContext.Provider value={{posts, loading, addPost}}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostContext);
};