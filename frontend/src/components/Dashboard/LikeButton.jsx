import React, {useState} from 'react';
import { likePost } from '../../services/api';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLike = async () => {
    setLoading(true); // Sets loading to true when starting the like action
    setError(null); // Clears error state before attempting to like
    try {
      await likePost(postId);
      setLiked(!liked); // Toggle liked state after successful API call
    } catch (error) {
      setError("Failed to like the post.");
    } finally {
      setLoading(false);
    }
};

return (
  <div>
    <button onClick={handleLike} disabled={loading}>
      {loading ? "Liking..." : liked ? "Unlike" : "Like"}
    </button>
    {error && <p style={{color: "red"}}>{error}</p>}
  </div>
);

};

export default LikeButton;