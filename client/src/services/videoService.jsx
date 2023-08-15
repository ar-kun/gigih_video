import axios from 'axios';

const apiEndpoint = 'http://localhost:5000/api/video';

export const getVideos = async (callback) => {
 try {
  const response = await axios.get(`${apiEndpoint}`);
  callback(response.data.data);
 } catch (error) {
  console.error('Error fetching data:', error);
  return { status: 'Failed to get data', error: 'Internal Server Error' };
 }
};

export const getVideo = async (videoId, callback) => {
 try {
  const response = await axios.get(`${apiEndpoint}/${videoId}`);
  callback(response.data.data);
 } catch (error) {
  console.error('Error fetching data:', error);
  return { status: 'Failed to get data', error: 'Internal Server Error' };
 }
};
