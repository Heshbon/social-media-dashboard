import React, {useEffect, useState} from 'react';
import Post from "../Dashboard/Post";
import {getUserPosts} from "../../services/api";

const UserPosts = ({userId}) => {
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const posts = await getUserPosts(userId);
        setUserPosts(posts);
      } catch (error) {
        console.error("Failed to fetch user posts", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserPosts();
  }, [userId]);

  return (
    <div className="user-posts">
      <h2>User Posts</h2>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : userPosts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        userPosts.map((post) => <Post key={post._id} post={post} />)
      )}
    </div>
  );
};

export default UserPosts;