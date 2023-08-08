import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useProductCart = () => {
  return useContext(CartContext);
}

function ProductCartProvider({ children }) {

  const [productCart, setProductCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function cartVisibilityToggle() {
    setIsCartVisible(prev => !prev);
  }

  function addToCart(product) {
    let found = false;
    if (productCart.length === 0) {
      const newItem = [...productCart, { ...product, incart: 1 }];
      setProductCart(newItem);
    } else {
      productCart.forEach((item, index) => {
        if (item.id === product.id) {
          found = true;
          const changedItem = { ...item, incart: (item.incart + 1) }
          const newItem = [...productCart];
          newItem[index] = changedItem;
          setProductCart(newItem);
        } else {
          if (!found) {
            const newItem = [...productCart, { ...product, incart: 1 }];
            setProductCart(newItem);
          }
        }
      });
    }
  }
  function incrementProductInCart(product, index) {
    const changedItem = { ...product, incart: (product.incart + 1) }
    const newItem = [...productCart];
    newItem[index] = changedItem;
    setProductCart(newItem);

  }
  function decrementProductInCart(product, index) {
    if (product.incart > 1) {
      const changedItem = { ...product, incart: (product.incart - 1) }
      const newItem = [...productCart];
      newItem[index] = changedItem;
      setProductCart(newItem);
    }
  }

  return (
    <CartContext.Provider value={{
      cart: productCart,
      addToCart,
      cartVisible: isCartVisible,
      cartVisibleToggle: cartVisibilityToggle,
      addProduct: incrementProductInCart,
      removeProduct: decrementProductInCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default ProductCartProvider;