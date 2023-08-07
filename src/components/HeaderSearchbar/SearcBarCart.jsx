import React, { useEffect, useState } from 'react';
import CartModal from '../CartModal/CartModal';
import { useProductCart } from '../ProductCart/ProductCart';

function SearcBarCart() {

  const myCart = useProductCart();
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0.0);


  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    setShowCartModal(myCart.cartVisible);
  }, [myCart.cartVisible]);



  useEffect(() => {
    if (myCart.cart.length > 0) {
      let money = 0;
      let items = myCart.cart.length;
      myCart.cart.forEach((item) => {
        money += Number(item.price);
      });
      setCartTotalPrice(money);
      setCartItemsCount(items);
    } else {
      setCartItemsCount(0);
      setCartTotalPrice(0.0);
    }

  }, [myCart.cart]);


  return (
    <div className="header__icons_groupe">
      <span className="header__icon__item"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.9331 9.76746L13.2374 5.27437L15.6566 4.60237C15.9061 4.53309 16.0521 4.27471 15.9828 4.02528C15.9135 3.77584 15.6551 3.62978 15.4057 3.69909L12.3985 4.5344C12.3983 4.53446 12.3981 4.53453 12.3978 4.53459L8.46877 5.62596V0.468994C8.46877 0.210119 8.25889 0.000244141 8.00002 0.000244141C7.74114 0.000244141 7.53127 0.210119 7.53127 0.468994V5.88637L3.36118 7.04468C3.36096 7.04475 3.36074 7.04481 3.36052 7.04484L0.343425 7.8829C0.0939564 7.95218 -0.0520436 8.21056 0.0172064 8.46C0.0748627 8.66747 0.263269 8.8034 0.468581 8.8034C0.510113 8.8034 0.552363 8.79784 0.5943 8.78618L2.47511 8.26375L0.0669876 12.2778C0.0233001 12.3506 0.000175152 12.434 0.000175152 12.5189C0.000175152 14.4384 1.56183 16 3.48133 16C5.40089 16 6.96252 14.4384 6.96252 12.5189C6.96252 12.434 6.93943 12.3506 6.89571 12.2778L4.20002 7.78465L11.5124 5.7535L9.1043 9.76746C9.06061 9.84031 9.03749 9.92368 9.03749 10.0086C9.03749 11.9281 10.5991 13.4897 12.5186 13.4897C13.4485 13.4897 14.3227 13.1276 14.9802 12.4701C15.6378 11.8126 15.9999 10.9384 15.9998 10.0086C15.9999 9.92365 15.9768 9.84028 15.9331 9.76746ZM3.48133 15.0625C2.23892 15.0625 1.20218 14.167 0.981456 12.9877H5.98121C5.76052 14.167 4.72377 15.0625 3.48133 15.0625ZM5.66596 12.0502H1.29677L3.48133 8.4089L5.66596 12.0502ZM12.5186 5.89862L14.7033 9.53984H10.3341L12.5186 5.89862ZM12.5187 12.5522C11.2763 12.5522 10.2395 11.6567 10.0188 10.4774H15.0186C14.7979 11.6567 13.7611 12.5522 12.5187 12.5522Z"
          fill="#8C3213" />
      </svg><span className="header__icons__counter weighter-counter">1</span></span>
      <span className="header__icon__item" onClick={myCart.cartVisibleToggle}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.9077 3.34277C15.8161 3.2115 15.6687 3.13037 15.5086 3.12353L5.58366 2.69572C5.29889 2.68326 5.06093 2.90311 5.04875 3.18655C5.03665 3.46988 5.25614 3.70928 5.53955 3.72145L14.7926 4.12033L12.9732 9.79679H4.87696L3.41425 1.83244C3.38209 1.65788 3.26225 1.51226 3.09697 1.44741L0.701302 0.506255C0.437269 0.402883 0.139327 0.532572 0.0356332 0.796283C-0.0678819 1.06014 0.0617715 1.35826 0.325661 1.46195L2.45579 2.29877L3.94432 10.4029C3.98918 10.6465 4.20151 10.8235 4.44933 10.8235H4.69624L4.13241 12.3896C4.08522 12.5208 4.10466 12.6665 4.18497 12.7805C4.26518 12.8945 4.39562 12.9623 4.53487 12.9623H4.93034C4.68529 13.2351 4.53487 13.5942 4.53487 13.9891C4.53487 14.8383 5.22589 15.5291 6.07495 15.5291C6.92402 15.5291 7.61504 14.8383 7.61504 13.9891C7.61504 13.5942 7.46462 13.2351 7.2196 12.9623H10.5774C10.3322 13.2351 10.1818 13.5942 10.1818 13.9891C10.1818 14.8383 10.8727 15.5291 11.7219 15.5291C12.5712 15.5291 13.262 14.8383 13.262 13.9891C13.262 13.5942 13.1116 13.2351 12.8666 12.9623H13.3476C13.5839 12.9623 13.7754 12.7708 13.7754 12.5345C13.7754 12.2982 13.5839 12.1067 13.3476 12.1067H5.14357L5.60554 10.8233H13.3475C13.5708 10.8233 13.7683 10.6791 13.8363 10.4667L15.9753 3.79295C16.0245 3.64064 15.9993 3.4741 15.9077 3.34277ZM6.07499 14.6737C5.69749 14.6737 5.39049 14.3667 5.39049 13.9892C5.39049 13.6117 5.69749 13.3047 6.07499 13.3047C6.45249 13.3047 6.75945 13.6117 6.75945 13.9892C6.75945 14.3667 6.45249 14.6737 6.07499 14.6737ZM11.7219 14.6737C11.3444 14.6737 11.0374 14.3667 11.0374 13.9892C11.0374 13.6117 11.3444 13.3047 11.7219 13.3047C12.0994 13.3047 12.4064 13.6117 12.4064 13.9892C12.4064 14.3667 12.0994 14.6737 11.7219 14.6737Z"
          fill="#8C3213" />
      </svg><span className={`header__icons__counter cart-conter ${cartItemsCount ? 'active' : ''}`}>{cartItemsCount}</span></span>
      <span className="cart__summary">{cartTotalPrice} грн</span>
      <CartModal toShow={showCartModal} />
    </div>
  )
}

export default SearcBarCart;