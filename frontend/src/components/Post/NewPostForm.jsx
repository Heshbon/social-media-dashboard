import React, {useState} from 'react';
import { createPost } from '../../services/api';

const NewPostForm = ({currentUserId, onPostCreated}) => {
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null); // Handling error msgs.
  const [imageError, setImageError] = useState(null); // To handle image-specific error msgs.

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        setImageError("Image file size must be less than 5MB");
        setImage(null); // Resets image state if file is too large.
      } else {
        setImage(file);
        setImageError(null); // Clears the error if the size is valid.
      }
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!postContent.trim() && !image) {
      setError("Post conntent or image is required");
      return; // Prevents submission if neither conntent nor image is provided.
    }
    
    setError(null); // Clears the previous error
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("content", postContent);
    if (image) {
      formData.append("image", image);
    }
    
    try {
      const newPost = await createPost(currentUserId, formData);
      onPostCreated(newPost); // Callback to notify parent component of a new post
      setPostContent(""); // Clears post content
      setImage(null); // Clears the image
      } catch (error) {
        console.error("Failed to create post", error);
        setError("An error occurred while creating the post. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    };
    
    return (
    <div className="new-post-form">
      <h2>Create a New Post</h2>
      {error && <p style={{color: "red"}}>{error}</p>}
      <form onSubmit="handleSubmit">
        <textarea value={postContent} onChange={handleContentChange} placeholder="What's on your mind?" rows="4"/>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imageError && <p style={{color: "red"}}>{imageError}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Posting..." : "Post"}
          </button>
      </form>
    </div>
  );
};

export default NewPostForm;