import axios from "axios";

const API_URL = "http://localhost:5173/api";

const handleError = (error) => {
  console.error("API Error: ", error.response || error.message);
  throw error;
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login` , credentials);
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