import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { createContext, useState, useEffect, useContext } from "react";

import { ACCESS_TOKEN_KEY } from "../services/httpclient";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
        setIsLoggedIn(!!accessToken);
      } catch (error) {
        console.error("Error checking accessToken:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAccessToken();
  }, []);

  const login = async (token) => {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error setting accessToken:", error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error removing accessToken:", error);
      await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
      setIsLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
