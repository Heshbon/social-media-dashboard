import React, {useState} from 'react';
import LikeButton from "./LikeButton";
import Comment from "./Comment";

const Post = () => {
  return (
    <div className="post">
      <h3>{post.user.name}</h3>
      <p>{post.content}</p>
      <LikeButton postId={post._id} />
      <Comment postId={post._id} />
    </div>
  );
};

export default Post;