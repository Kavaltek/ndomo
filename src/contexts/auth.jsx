import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";
export const AuthContext = createContext(); 
export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const revoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem("token");
    if(revoveredUser && token){
      setUser(JSON.parse(revoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);
  const login = async (email, password) => {
    const response = await createSession (email, password);
    console.log("login", response.data);
    const loggedUser = response.data.user;
    const token = response.data.access_token;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);
    setUser(loggedUser)
    navigate("/")
  };
  const logout = () => {
    console.log("logout")
    api.defaults.headers.Authorization = null;
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("login");
  };
  return <AuthContext.Provider value={{authenticated: !! user, loading, login, logout}}>
    {children}
  </AuthContext.Provider>
}