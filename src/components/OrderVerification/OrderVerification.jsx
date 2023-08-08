import React from 'react';
import '../../styles/orderverification.scss';
import { useProductCart } from '../ProductCart/ProductCart';

function OrderVerification() {

  const myCart = useProductCart();

  function cartSummary() {
    let sum = 0;
    if (myCart.cart.length > 0) {
      myCart.cart.forEach(elem => {
        sum += (Number(elem.price) * Number(elem.incart));

      });
      return sum;
    } else {
      return 0;
    }
  }
  const summ = cartSummary();

  return (
    <div className="order-verify">
      <div className="wrapper-main order-verify__wrapper">
        <h2 className="order-verify__titel">Оформлення заказу</h2>
        <div className="order-verify__content__wrapper">
          <div className="order-verify__form__container">
            <form className="order-verify__form">
              <div className="order__form__contacts-title">Ваші контакти</div>
              <div className="order__form__contacts__wrapper">
                <div className="order__form__contacts__inputs"><input type="text" placeholder="Ім’я" /></div>
                <div className="order__form__contacts__inputs"><input type="text" placeholder="Фамілія" /></div>
                <div className="order__form__contacts__inputs"><input type="text" placeholder="Телефон" /></div>
                <div className="order__form__contacts__inputs"><input type="text" placeholder="E-mail" /></div>
              </div>
              <div className="order__form__contacts__textarea">
                <textarea name="" placeholder="Коментарій"></textarea>
              </div>
              <hr className="style-hr" />
              <div className="order__form__delivery-title">Доставка</div>
              <div className="order__form__selects__container">
                <div className="order__form__delivery__selects">
                  <select name="noname" id="" placeholder="Поштовий індекс">
                    <option value="placeholder">hallo!</option>
                  </select>
                </div>
                <div className="order__form__delivery__selects">
                  <select name="noname" id="" placeholder="Поштовий індекс">
                    <option value="placeholder">hallo!</option>
                  </select>
                </div>
                <div className="order__form__delivery__selects">
                  <select name="noname" id="" placeholder="Поштовий індекс">
                    <option value="placeholder">hallo!</option>
                  </select>
                </div>
                <div className="order__form__delivery__input"><input type="text" placeholder="Поштовий індекс" /></div>
              </div>
              <hr className="style-hr" />
              <div className="order__form__payment-title">Оплата</div>
              <div className="order__form__radio__container">
                <label className="form-control order__form__label">
                  <input type="radio" name="radio" className="order__form__input" />
                  Готівка
                </label>
                <label className="form-control order__form__label">
                  <input type="radio" name="radio" className="order__form__input" />
                  Оплата картою
                </label>
                <label className="form-control order__form__label">
                  <input type="radio" name="radio" className="order__form__input" />
                  Оплата картою онлайн
                </label>
              </div>
            </form>
          </div>
          <div className="order-verify__in-cart__container">
            <div className="order-verify__title">Товари у кошику</div>
            <ul className="order-verify__list">
              {Boolean(myCart.cart.length === 0) ? ""
                :
                myCart.cart.map((item) => {
                  return (
                    <li className="order-verify__item" key={item.id}>
                      <div className="order-verify__item__title-style">
                        <div className="order-verify__item__title">{item.name}</div>
                        <button className="order-verify__item__btn">X</button>
                      </div>
                      <div className="order-verify__item__image-price-style">
                        <div className="order-verify__item__image"><img src={item.images[0]} alt={item.name} /></div>
                        <div className="order-verify__item__price">{item.price} грн</div>
                        <div className="order-verify__item__quantity">x{item.incart}</div>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
            <div className="order-verify__summary__container">
              <div className="order__items">Разом: <span>{myCart.cart.length} товари</span></div>
              <div className="order__price">На суму: <span>{summ} грн</span></div>
            </div>
            <button className="order-verify__confirm__btn">Підтвердити заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderVerification;