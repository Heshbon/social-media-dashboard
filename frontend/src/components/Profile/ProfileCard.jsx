import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileCard = ({user}) => {
  const { id } = useParams;
  return (
    <div className="profile-card">
      <h2>Profile of User ID: {id}</h2>
      <h2>{user?.name || "Guest User"}</h2>
      <p>{user?.bio || "No bio available"}</p>
      <button>Follow</button>
    </div>
  );
};

export default ProfileCard;