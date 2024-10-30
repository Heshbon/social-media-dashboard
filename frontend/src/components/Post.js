import React, { useState } from 'react';
import './Post.css';

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes || 0);
    const [comments, setComments] = useState(post.comments || []);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        const newComment = event.target.elements.comment.value; // obtain comment from input
        if (newComment) {
            setComments([...comments, { text: newComment }]);
            event.target.reset();
        }
    };

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p className="post-author">Posted by: {post.author}</p>
            <div className="post-actions">
                <button className="like-button" onClick={handleLike}>👍 {likes} Likes</button>
            </div>
            <div className="comments-section">
                <h3>Comments:</h3>
                {comments.length === 0 ? (
                    <p>No comments yet.</p>
                ) : (
                    comments.map((comment, index) => (
                        <p key={index}>{comment.text}</p>
                    ))
                )}
                <form onSubmit={handleCommentSubmit}>
                    <input type="text" name="comment" placeholder="Add a comment..." required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Post;