import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useProductCart = () => {
  return useContext(CartContext);
}

function ProductCartProvider({ children }) {

  const [productCart, setProductCart] = useState([]);

  function addToCart(product) {
    const newItem = [...productCart, product];
    setProductCart(newItem);
  }

  return (
    <CartContext.Provider value={{
      cart: productCart,
      addToCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default ProductCartProvider;