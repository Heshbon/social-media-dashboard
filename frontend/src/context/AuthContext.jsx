import React, {createContext, useContext, useState, useEffect} from 'react';
import { getUserProfile } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("jwt_token");
      if (!token) {
        setLoading(false);
        return;
      }
      
      try {
        const userData = await getUserProfile();
        setUser(userData); // Set user data after login or session check
        } catch (error) {
          console.log("Failed to fetch user profile");
          localStorage.removeItem("jwt_token"); // Clears invalid token
          setUser(null);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }, []);
    
    // Function to log out the user
    const logout = () => {
      setUser(null); // Clears the user on logout
      localStorage.removeItem("jwt_token"); // Remove JWT token on logout
    };

    return (
      <AuthContext.Provider value={{user, loading, logout}}>
        {children}
      </AuthContext.Provider>
    );
  };

  export const useAuth = () => {
    return useContext(AuthContext);
  };