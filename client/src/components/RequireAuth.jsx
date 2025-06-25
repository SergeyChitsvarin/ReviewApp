import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { auth } = useAuth();

  return auth?.accessToken ? children : <Navigate to="/" />;
};

export default RequireAuth;
