import axios from 'axios';

const apiEndpoint = 'http://localhost:5000/api/comment';

export const getCommentsById = async (videoId, callback) => {
 try {
  const response = await axios.get(`${apiEndpoint}/${videoId}`);
  callback(response.data.data);
 } catch (error) {
  console.error('Error fetching data:', error);
  return { status: 'Failed to get data', error: 'Internal Server Error' };
 }
};

export const addComment = async (commentData, callback) => {
 try {
  const response = await axios.post(apiEndpoint, commentData);
  callback(response.data.data);
  return response.data.data;
 } catch (error) {
  console.error('Error adding comment:', error);
  throw error;
 }
};

export const updateComment = async (commentData, callback) => {
 try {
  const response = await axios.put(`${apiEndpoint}/${commentData._id}`, commentData);
  callback(response.data.data);
 } catch (error) {
  console.error('Error updating comment:', error);
  throw error;
 }
};

export const deleteComment = async (commentId, callback) => {
 try {
  const response = await axios.delete(`${apiEndpoint}/${commentId}`);
  callback(response.data.data);
 } catch (error) {
  console.error('Error deleting comment:', error);
  throw error;
 }
};
