import axios from './axios';

const refresh = async () => {
  const response = await axios.get('/auth/refresh');
  return response.data.accessToken;
};

export default refresh;
