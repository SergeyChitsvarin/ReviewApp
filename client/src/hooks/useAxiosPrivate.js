import axios from '../api/axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import refresh from '../api/refreshToken';

const useAxiosPrivate = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    const responseIntercept = axios.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error.config;
        if (error.response?.status === 403 && !prevRequest._retry) {
          prevRequest._retry = true;
          const newAccessToken = await refresh();
          setAuth(prev => ({ ...prev, accessToken: newAccessToken }));
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestIntercept);
      axios.interceptors.response.eject(responseIntercept);
    };
  }, [auth, setAuth]);

  return axios;
};

export default useAxiosPrivate;
