import React, {useState, useEffect} from 'react';
import {getUserProfile, updateUserProfile} from "../../services/api";

const EditProfile = ({currentUserId}) => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getUserProfile(currentUserId);
        setUsername(profile.username);
        setBio(profile.bio);
        setProfilePicture(null); // To avoid overwriting fetched picture

      } catch (error) {
        console.error("Failed to fetch user profile", error);
        setError("Could not load profile.Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, [currentUserId]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("bio", bio);
    if (profilePicture) formData.append("profilePicture", profilePicture);
    try {
      await updateUserProfile(currentUserId, formData);
      alert("Profile updated successfully");
      setProfilePicture(null); // Clears image after successful update
    } catch (error) {
      console.error("Failed to update profile", error);
      setError("Update failed. Please try again.");
    }
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleProfileUpdate}>
        <label>
          username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Bio:
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows="4" maxLength="150" // Character limit for bio
          />
          </label>
          <label>
            Profile Picture:
            <input type="file" onChange={handleProfilePictureChange} />
          </label>
          <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;