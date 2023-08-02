import React, { useEffect, useState } from 'react';
import { useProductCart } from '../ProductCart/ProductCart';

function ProductCartIco({ elemId }) {

  const [inCart, setInCart] = useState(false);
  const myCart = useProductCart();

  useEffect(() => {
    if (myCart.cart.length > 0) {
      myCart.cart.forEach((item) => {
        if (item.id === elemId) { setInCart(true) }
      });
    }
  }, [myCart.cart, elemId]);


  return (
    <div className={`product__cart-wrapper ${inCart ? "active" : ''}`} >
      <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.908 3.343a.513.513 0 00-.4-.22l-9.924-.427A.512.512 0 105.54 3.72l9.253.4-1.82 5.676H4.877L3.414 1.832a.513.513 0 00-.317-.385L.701.507a.514.514 0 00-.375.955l2.13.837 1.488 8.104c.045.243.258.42.505.42h.247l-.564 1.567a.427.427 0 00.403.572h.395a1.531 1.531 0 00-.395 1.027 1.54 1.54 0 003.08 0c0-.395-.15-.754-.395-1.027h3.357a1.53 1.53 0 00-.395 1.027 1.54 1.54 0 003.08 0c0-.395-.15-.754-.395-1.027h.48a.428.428 0 100-.855H5.145l.462-1.284h7.742c.223 0 .42-.144.488-.356l2.14-6.674a.512.512 0 00-.068-.45zm-9.833 11.33a.685.685 0 11.001-1.37.685.685 0 01-.001 1.37zm5.647 0a.685.685 0 11.001-1.37.685.685 0 01-.001 1.37z" fill="#8C3213" /></svg>
    </div >
  );
}

export default ProductCartIco;