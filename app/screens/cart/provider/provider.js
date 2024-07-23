import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { createContext, useState, useEffect, useContext } from "react";

import api from "../../../services";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();

  const fetchCart = async () => {
    try {
      const res = await api.user.getInfoUser();
      if (res.data.success) {
        setCart(res.data.rs.cart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};
