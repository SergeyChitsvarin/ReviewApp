import React from 'react'
import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'



export default function AuthProvider() {

    const AuthContext = createContext(undefined);
    const useAuth = () =>{
        const authContext = useContext(AuthContext);

        if (!authContext){
            throw new Error("useAuth must be used within a AuthProvider");
        }

        return authContext;
    };
    const AuthProvider = ({ children }) => {
        const [token, setToken] = useState();

        useEffect(() =>{
            const fetchMe = async () => {
                try {
                    const response = await fetch('http://localhost:5000/users');
                    setToken(response.data.accessToken);
                    
                } catch {
                    setToken(null);    
                }
            }
        })
    }

  return (
    <></>
  )
}
