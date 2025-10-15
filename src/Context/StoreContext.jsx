import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});

//   const addCartItem = (itemId) => {
//     if (!cart[itemId]) {
//       setCart((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//   };

const addCartItem = (itemId) => {
  setCart((prev) => ({
    ...prev,
    [itemId]: (prev[itemId] || 0) + 1, 
  }));
};

  const removeCartItem = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    food_list,
    addCartItem,
    removeCartItem,
    cart,
    setCart,
  };
  console.log(contextValue);

  useEffect(()=>{
    console.log(cart)
  },[cart])

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
    
  );
};

export default StoreContextProvider;
