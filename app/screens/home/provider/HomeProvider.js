import React, { createContext, useState, useEffect, useContext } from "react";

import api from "../../../services";

export const HomeContext = createContext();

export const useHomeContext = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [category, setCategory] = useState();

  useEffect(() => {
    Promise.all([fetchCategory()]);
  }, []);

  const fetchCategory = async () => {
    try {
      const res = await api.home.getCategoty();
      setCategory(res.data.createCategory);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        category,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
