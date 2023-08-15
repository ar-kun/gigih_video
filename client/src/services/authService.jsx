import axios from 'axios';

const apiEndpoint = 'http://localhost:5000/api/auth';

export const login = async (userData, callback) => {
 try {
  const response = await axios.post(`${apiEndpoint}/login`, userData);
  callback(response.data.data);
  return response.data.data;
 } catch (error) {
  console.error('Error logging in:', error);
  throw error;
 }
};

export const register = async (userData, callback) => {
 try {
  const response = await axios.post(`${apiEndpoint}/register`, userData);
  callback(response.data.data);
  return response.data.data;
 } catch (error) {
  console.error('Error registering:', error);
  throw error;
 }
};
