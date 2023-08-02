import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import magnifier from '../../img/magnifier.svg';
import phone from '../../img/phone-ico.svg';
import SearcBarCart from './SearcBarCart';

function HeaderSearchbar() {

  useEffect(() => {
  }, []);

  return (
    <div className="wrapper-main wrapper-main-second">
      <div className="search-cart-bar">
        <div className="header__logo"><Link to='./'><img src={logo} alt="logo" /></Link></div>
        <form className="header__form">
          <input className="header__form__input" type="text" placeholder="Пошук" name="search" />
          <button className="header__form__button"><img src={magnifier} alt="magnifier" /></button>
        </form>
        <div className="header__phones__style__wrapper">
          <div className="header__phones__container">
            <img src={phone} alt="phone" />
            <div className="phones__group">
              <a href="tel: 380671150058">+38 (067) 115 00 58</a>
              <a href="#!">Замовити зворотній зв’язок</a>
              <a href="tel: 380501150058">+38 (050) 115 00 58</a>
              <a href="tel: 380671150058">+38 (067) 115 00 58</a>
            </div>
          </div>
        </div>
        <SearcBarCart />
      </div>
    </div>
  )
}

export default HeaderSearchbar;
