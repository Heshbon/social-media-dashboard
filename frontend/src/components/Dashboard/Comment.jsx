import React, {useState, useEffect} from 'react';
import {getComments, addComment} from "../../services/api";

const Comment = ({postId}) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const response = await getComments(postId);
        setComments(response);
      } catch (error) {
        setError("Failed to load comments.");
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      try {
        setLoading(true);
        await addComment(postId, {content: newComment});
        setNewComment(""); //Clears the input field
        const updatedComments = await getComments(postId); //Refetches comments
        setComments(updatedComments);
      } catch (error) {
        setError("Failed to post comment.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="comments-section">
      <h4>Comments</h4>
      {loading && <p>Loading comments...</p>}
      {error && <p style={{color:"red"}}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Write a comment..." disabled={loading} />
        <button type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </form>

      <div className="comment-list">
        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          comments.map((comment) => {
            <div key={comment._id} className="comment-item">
              <p><strong>{comment.user.name}</strong>: {comment.content}</p>
              </div>
          })
        )}
      </div>
    </div>
  );
};

export default Comment;