import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); 

  const addItem = (product) => {
    setItems((prevItems) => [...prevItems, product]);
  };

  const removeItem = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}
