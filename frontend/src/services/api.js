import axios from "axios";

const API_URL = "http://localhost:5173/api";

const handleError = (error) => {
  console.error("API Error: ", error.response || error.message);
  throw error;
};

const validateImage = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (file && file.size > maxSize) {
    throw new Error("Image file size must be less than 5MB");
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const registerUser = async ({email, password}) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {email, password});
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getComments = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const addComment = async (postId, commentData) => {
  try {
    const response = await axios.post(`${API_URL}/posts/${postId}/comments`, commentData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const createPost = async (postData) => {
  try {
    // Validates if image exists
    if (postData.image) {
      validateImage(postData.image); // Checks image size
    }
    // Checks if content or image exists
    if (!postData.content.trim() && !postData.image) {
      throw new Error("Post content of image is required");
    }
    
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const likePost = async (postId) => {
  try {
    const response = await axios.post(`${API_URL}/posts/${postId}/like`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const followUser = async (currentUserId, targetUserId) => {
try {
  const response = await axios.post(`${API_URL}/users/${currentUserId}/follow`, { targetUserId });
  return response.data;
} catch (error) {
  handleError(error);
}
};

export const unfollowUser = async (currentUserId, targetUserId) => {
  try {
    const response = await axios.post(`${API_URL}/users/${currentUserId}/unfollow`, { targetUserId });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};