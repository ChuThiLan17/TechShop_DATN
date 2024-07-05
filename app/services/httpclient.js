// httpClient.js
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

import { API_URL, TIMEOUT } from "./config";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const createHTTPClient = (baseURL, timeout, onTokenError) => {
  const client = axios.create({
    baseURL,
    timeout,
  });

  client.interceptors.request.use(
    async (config) => {
      try {
        const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Failed to retrieve access token", error);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 401) {
        try {
          await AsyncStorage.removeItem(ACCESS_TOKEN_KEY);
          await AsyncStorage.removeItem(REFRESH_TOKEN_KEY);
        } catch (removeError) {
          console.error("Failed to remove tokens", removeError);
        }
        onTokenError && onTokenError();
      }
      return Promise.reject(error);
    }
  );

  return client;
};

const onTokenError = () => {
  console.log("Token error: Logging out");
  // Implement your own logout logic here
};
const v1 = createHTTPClient(API_URL, TIMEOUT, onTokenError);

const clients = {
  v1,
};

export default clients;
