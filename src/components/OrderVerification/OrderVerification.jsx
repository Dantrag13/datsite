import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import '../../styles/orderverification.scss';
import { useProductCart } from '../ProductCart/ProductCart';

function OrderVerification() {

  const [formData, setFormData] = useState({
    clientName: '',
    clientSurename: '',
    phone: '',
    email: '',
    commentary: '',
    region: '',
    city: '',
    postOffice: '',
    postIndex: '',
    paymentMethod: '',
  });
  // console.log(formData);


  function setClientName(elem) {
    console.log(elem.target.value);
    setFormData({ ...formData, clientName: elem.target.value });
  }
  function setClientSurename(elem) {
    setFormData({ ...formData, clientSurename: elem.target.value });
  }
  function setClientPhone(elem) {
    setFormData({ ...formData, phone: elem.target.value });
  }
  function setClientEmail(elem) {
    setFormData({ ...formData, email: elem.target.value });
  }
  function setRegion(elem) {
    setFormData({ ...formData, region: elem.value });
  }
  function setCity(elem) {
    setFormData({ ...formData, city: elem.value });
  }
  function setPostOffice(elem) {
    setFormData({ ...formData, postOffice: elem.value });
  }
  function setPostIndex(elem) {
    setFormData({ ...formData, postIndex: elem.target.value });
  }

  useEffect(() => {
    if (formData.clientName.length < 3) {
      console.log('less than 3'); return;
    } else {
      let testt = (/^[а-я'іїє]+(?:[ -]{1}[а-я'іїє]*)?$/i).test(formData.clientName);
      console.log(testt);
    }
  });


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


  const region__options = [
    { value: 'none', label: 'Область', isDisabled: true, isFixed: true },
    { value: 'kyivska', label: 'Київська' },
    { value: 'odeska', label: 'Одеська' },
    { value: 'lvivska', label: 'Львівська' },
    { value: 'kharkivska', label: 'Харківська' },

  ];
  const city__options = [
    { value: 'none', label: 'Город', isDisabled: true, isFixed: true },
    { value: 'kyiv', label: 'Київ' },
    { value: 'odesa', label: 'Одеса' },
    { value: 'lviv', label: 'Львів' },
    { value: 'kharkiv', label: 'Харків' },

  ];
  const postOffice__options = [
    { value: 'none', label: 'Відділеня', isDisabled: true, isFixed: true },
    { value: '129', label: '129 Відділення' },
    { value: '133', label: '133 Відділення' },
    { value: '144', label: '144 Відділення' },
    { value: '99', label: '99 Відділення' },

  ];

  const select__styles = {
    control: (styles, state) => ({
      ...styles,
      borderRadius: "20px",
      width: "100%",
      height: "40px",
      outline: "#84C551",
      color: "#84C551",
      boxShadow: "none",
      'active': {
        borderColor: "#84C551",
        outline: "none",
      },
      '&:hover': { borderColor: "#84C551" },

    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: "2px 16px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#84C551" : '',
      '&:hover': { backgroundColor: "#b5e58f" },
      '&:active': { backgroundColor: "#84C551" },

    })
  }

  return (
    <div className="order-verify">
      <div className="wrapper-main order-verify__wrapper">
        <h2 className="order-verify__titel">Оформлення заказу</h2>
        <div className="order-verify__content__wrapper">
          <div className="order-verify__form__container">
            <form className="order-verify__form">
              <div className="order__form__contacts-title">Ваші контакти</div>
              <div className="order__form__contacts__wrapper">
                <div className="order__form__contacts__inputs"><input type="text" placeholder="Ім’я" value={formData.clientName} onChange={setClientName} /></div>
                <div className="order__form__contacts__inputs"><input type="text" placeholder="Фамілія" value={formData.clientSurename} onChange={setClientSurename} /></div>
                <div className="order__form__contacts__inputs"><input type="text" placeholder="Телефон" value={formData.phone} onChange={setClientPhone} /></div>
                <div className="order__form__contacts__inputs"><input type="text" placeholder="E-mail" value={formData.email} onChange={setClientEmail} /></div>
              </div>
              <div className="order__form__contacts__textarea">
                <textarea name="" placeholder="Коментарій"></textarea>
              </div>
              <hr className="style-hr" />
              <div className="order__form__delivery-title">Доставка</div>
              <div className="order__form__selects__container">
                <div className="order__form__delivery__selects">
                  <Select options={region__options} onChange={setRegion} styles={select__styles} placeholder={"Область"} />
                </div>
                <div className="order__form__delivery__selects">
                  <Select options={city__options} onChange={setCity} styles={select__styles} placeholder={"Город"} />
                </div>
                <div className="order__form__delivery__selects">
                  <Select options={postOffice__options} onChange={setPostOffice} styles={select__styles} placeholder={"Відділеня"} />
                </div>
                <div className="order__form__delivery__input"><input type="text" placeholder="Поштовий індекс" value={formData.postIndex} onChange={setPostIndex} /></div>
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