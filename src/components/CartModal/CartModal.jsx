import React from 'react';
import '../../styles/productcart.scss';
import manufacturer from '../../img/manufacturer_name1.svg';
import { useProductCart } from '../ProductCart/ProductCart';
import { Link } from 'react-router-dom';

function CartModal({ toShow }) {

  const myCart = useProductCart();

  return (
    <div className={`modal-bg ${toShow ? 'active' : ''}`} onClick={myCart.cartVisibleToggle}>
      <div className="modal__container" onClick={(e) => { e.stopPropagation() }}>
        <button className="modal__close" onClick={myCart.cartVisibleToggle}></button>
        <div className="product-cart__container">
          <h2 className="cart__title">Кошик</h2>
          <div className="modal__scroll__container">
            <ul className="cart__list">
              {Boolean(myCart.cart.lenght === 0) ?
                (<li className="cart__item">
                  <h3>Кошик порожній</h3>
                </li>) :
                myCart.cart.map((item, index) => {
                  return (
                    <li className="cart__item" key={item.id}>
                      <div className="cart__product-name">{item.name}</div>
                      <div className="cart__product__img-price__wrapper">
                        <div className="product__img__wrapper"><img src={item.images[0]} alt={item.name} /></div>
                        <div className="product__price__wrapper">
                          <div className="product__price">{item.price} грн</div>
                          <p className="product__manufacturer__price-text">Ціна товару</p>
                          <p className="product__manufacturer__title">Виробник</p>
                          <div className="product__manufacturer__img-name__container">
                            <img src={manufacturer} alt="FMC" />
                            <div>{item.manufacturer}</div>
                          </div>
                        </div>
                        <div className="quantity__wrapper">
                          <div className="quantity__control__container">
                            <div className="quantity__name">Кількість</div>
                            <div className="quantity__decrement" onClick={() => { myCart.removeProduct(item, index) }}></div>
                            <div className="quantity__amount">{item.incart}</div>
                            <div className="quantity__increment" onClick={() => { myCart.addProduct(item, index) }}></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="cart__buttons__wraper">
            <Link className="store__return" to="/store" onClick={myCart.cartVisibleToggle}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.9077 3.34277C15.8161 3.2115 15.6687 3.13037 15.5086 3.12353L5.58366 2.69572C5.29889 2.68326 5.06093 2.90311 5.04875 3.18655C5.03665 3.46988 5.25614 3.70928 5.53955 3.72145L14.7926 4.12033L12.9732 9.79679H4.87696L3.41425 1.83244C3.38209 1.65788 3.26225 1.51226 3.09697 1.44741L0.701302 0.506255C0.437269 0.402883 0.139327 0.532572 0.0356332 0.796283C-0.0678819 1.06014 0.0617715 1.35826 0.325661 1.46195L2.45579 2.29877L3.94432 10.4029C3.98918 10.6465 4.20151 10.8235 4.44933 10.8235H4.69624L4.13241 12.3896C4.08522 12.5208 4.10466 12.6665 4.18497 12.7805C4.26518 12.8945 4.39562 12.9623 4.53487 12.9623H4.93034C4.68529 13.2351 4.53487 13.5942 4.53487 13.9891C4.53487 14.8383 5.22589 15.5291 6.07495 15.5291C6.92402 15.5291 7.61504 14.8383 7.61504 13.9891C7.61504 13.5942 7.46462 13.2351 7.2196 12.9623H10.5774C10.3322 13.2351 10.1818 13.5942 10.1818 13.9891C10.1818 14.8383 10.8727 15.5291 11.7219 15.5291C12.5712 15.5291 13.262 14.8383 13.262 13.9891C13.262 13.5942 13.1116 13.2351 12.8666 12.9623H13.3476C13.5839 12.9623 13.7754 12.7708 13.7754 12.5345C13.7754 12.2982 13.5839 12.1067 13.3476 12.1067H5.14357L5.60554 10.8233H13.3475C13.5708 10.8233 13.7683 10.6791 13.8363 10.4667L15.9753 3.79295C16.0245 3.64064 15.9993 3.4741 15.9077 3.34277ZM6.07499 14.6737C5.69749 14.6737 5.39049 14.3667 5.39049 13.9892C5.39049 13.6117 5.69749 13.3047 6.07499 13.3047C6.45249 13.3047 6.75945 13.6117 6.75945 13.9892C6.75945 14.3667 6.45249 14.6737 6.07499 14.6737ZM11.7219 14.6737C11.3444 14.6737 11.0374 14.3667 11.0374 13.9892C11.0374 13.6117 11.3444 13.3047 11.7219 13.3047C12.0994 13.3047 12.4064 13.6117 12.4064 13.9892C12.4064 14.3667 12.0994 14.6737 11.7219 14.6737Z"
                  fill="#8C3213" />
              </svg>
              Продовжити покупки </Link>
            <Link className="go__buy" to="/order-verifivation" onClick={myCart.cartVisibleToggle}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8558 2.62037H12.0465V1.81092C12.0465 1.54903 11.7608 1.43001 11.4989 1.43001H10.0943C9.76096 0.477697 8.92768 0.00154151 7.97537 0.00154151C7.03354 -0.0338659 6.17688 0.543636 5.85648 1.43001H4.47564C4.21375 1.43001 3.95186 1.54903 3.95186 1.81092V2.62037H2.14244C1.07019 2.63181 0.192978 3.47767 0.142578 4.54878V18.1906C0.142578 19.2381 1.09489 20 2.14244 20H13.8558C14.9034 20 15.8557 19.2381 15.8557 18.1906V4.54883C15.8053 3.47767 14.9281 2.63181 13.8558 2.62037ZM4.90413 2.38232H6.21357C6.44214 2.35443 6.62574 2.18054 6.66593 1.95378C6.80692 1.33978 7.3456 0.899032 7.97537 0.882445C8.59931 0.901356 9.12987 1.34347 9.26098 1.95378C9.30367 2.18837 9.49939 2.3645 9.73713 2.38232H11.0942V4.28694H4.90413V2.38232ZM14.9034 18.1906C14.9034 18.7144 14.3796 19.0477 13.8558 19.0477H2.14244C1.61866 19.0477 1.09489 18.7144 1.09489 18.1906V4.54883C1.14347 4.00363 1.59515 3.58271 2.14244 3.57273H3.95182V4.78693C3.97697 5.05369 4.20801 5.25324 4.47559 5.23929H11.4988C11.7713 5.25419 12.0096 5.05738 12.0464 4.78693V3.57268H13.8558C14.403 3.58271 14.8548 4.00359 14.9033 4.54878V18.1906H14.9034Z"
                  fill="white" />
                <path
                  d="M6.16544 10.6436C5.98685 10.4553 5.69038 10.4447 5.4988 10.6198L3.9751 12.072L3.33229 11.4054C3.15371 11.2171 2.85723 11.2066 2.66566 11.3816C2.48124 11.5748 2.48124 11.8788 2.66566 12.072L3.64176 13.0719C3.72624 13.1665 3.84828 13.2189 3.97505 13.2148C4.10064 13.213 4.22044 13.1617 4.30835 13.0719L6.16535 11.3102C6.34945 11.1413 6.36175 10.8551 6.19283 10.6711C6.18417 10.6615 6.17501 10.6523 6.16544 10.6436Z"
                  fill="white" />
                <path
                  d="M12.9988 11.6674H7.52303C7.26005 11.6674 7.04688 11.8805 7.04688 12.1435C7.04688 12.4065 7.26005 12.6197 7.52303 12.6197H12.9988C13.2618 12.6197 13.4749 12.4065 13.4749 12.1435C13.4749 11.8805 13.2618 11.6674 12.9988 11.6674Z"
                  fill="white" />
                <path
                  d="M6.16544 6.83436C5.98685 6.64611 5.69038 6.63549 5.4988 6.81057L3.9751 8.26283L3.33229 7.59619C3.15371 7.40795 2.85723 7.39733 2.66566 7.57241C2.48124 7.76562 2.48124 8.06962 2.66566 8.26283L3.64176 9.26277C3.72624 9.35737 3.84828 9.40969 3.97505 9.40563C4.10064 9.40385 4.22044 9.3525 4.30835 9.26277L6.16535 7.501C6.34945 7.33212 6.36175 7.04594 6.19283 6.86188C6.18417 6.85227 6.17501 6.84311 6.16544 6.83436Z"
                  fill="white" />
                <path
                  d="M12.9988 7.85803H7.52303C7.26005 7.85803 7.04688 8.0712 7.04688 8.33418C7.04688 8.59716 7.26005 8.81033 7.52303 8.81033H12.9988C13.2618 8.81033 13.4749 8.59716 13.4749 8.33418C13.4749 8.0712 13.2618 7.85803 12.9988 7.85803Z"
                  fill="white" />
                <path
                  d="M6.16544 14.4527C5.98685 14.2645 5.69038 14.2539 5.4988 14.429L3.9751 15.8812L3.33229 15.2146C3.15371 15.0263 2.85723 15.0158 2.66566 15.1908C2.48124 15.384 2.48124 15.688 2.66566 15.8812L3.64176 16.8812C3.72624 16.9758 3.84828 17.0281 3.97505 17.024C4.10064 17.0222 4.22044 16.9709 4.30835 16.8812L6.16535 15.1194C6.34945 14.9505 6.36175 14.6643 6.19283 14.4803C6.18417 14.4707 6.17501 14.4615 6.16544 14.4527Z"
                  fill="white" />
                <path
                  d="M12.9988 15.4766H7.52303C7.26005 15.4766 7.04688 15.6897 7.04688 15.9527C7.04688 16.2157 7.26005 16.4289 7.52303 16.4289H12.9988C13.2618 16.4289 13.4749 16.2157 13.4749 15.9527C13.4749 15.6897 13.2618 15.4766 12.9988 15.4766Z"
                  fill="white" />
              </svg>
              Оформити замовленя</Link>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CartModal;