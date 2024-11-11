import React, {useState, useEffect} from 'react';
import {followUser, unfollowUser} from "../../services/api";
import axios from 'axios';

const FollowButton = ({currentUserId, targetUserId}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const response = await axios.get(`/api/users/${currentUserId}/following`);
        setIsFollowing(response.data.include(targetUserId)); // Checks if a user is already following
      } catch (error) {
        console.error("Error checking follow status", error);
      }
    };
    checkFollowStatus();
  }, [currentUserId, targetUserId]);

  const handleFollowClick = async () => {
    try {
      if (isFollowing) {
        await unfollowUser(currentUserId, targetUserId);
        setIsFollowing(false);
      } else {
        await followUser(currentUserId, targetUserId);
        setIsFollowing(true);
      }
    } catch (error) {
      console.error("Error handling follow/unfollow action", error);
    }
  };

  return (
    <button onClick={handleFollowClick}>
      {isFollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;