import React from 'react';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h2>{user?.name || "User"}</h2>
      <p>{user?.bio || "No bio available"}</p>
      <button>Follow</button>
    </div>
  );
};

export default ProfileCard;