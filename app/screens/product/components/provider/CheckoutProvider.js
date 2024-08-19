import React, { createContext, useState, useContext, useEffect } from "react";

import api from "../../../../services";

export const CheckoutContext = createContext();

export const useCheckoutContext = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [address, setAddress] = useState();
  const [listAddress, setListAddress] = useState([]);

  const getAddress = async () => {
    try {
      const res = await api.user.getInfoUser();
      const value = res.data.rs.address ?? [];
      setListAddress(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  useEffect(() => {
    if (listAddress.length > 0 && !address) {
      setAddress(listAddress[0]);
    }
  }, [listAddress]);
  return (
    <CheckoutContext.Provider
      value={{ listAddress, address, setAddress, getAddress }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
