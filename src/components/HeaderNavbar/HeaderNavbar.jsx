import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeaderNavbar() {

  const [burgerActive, setBurgerActive] = useState(false);
  const body = document.querySelector('body');


  function showElem(e) {
    if ((window.innerWidth < 976) && (e.target.classList.contains('navbar__forward__link') || e.target.classList.contains('navigation__main'))) {
      setBurgerActive(false);
    }
  }

  useEffect(() => {
    if (burgerActive) {
      body.classList.add('lock');
    } else {
      body.classList.remove('lock');
    }
  }, [body.classList, burgerActive]);


  return (
    <div className="navbar">
      <div className="wrapper-main">
        <nav className={burgerActive ? 'navigation__main active' : 'navigation__main'} onClick={showElem}>
          <ul className="nav__list">
            <li className="nav__item dropdownd-menu"><Link className='navbar__forward__link' to='/'>Про нас</Link>
              <ul className="nav__submenu__list">
                <li className="nav__submenu__item"><Link className='navbar__forward__link' to='/'>Наша Команда</Link></li>
                <li className="nav__submenu__item"><Link className='navbar__forward__link' to='/'>Партнери</Link></li>
                <li className="nav__submenu__item"><Link className='navbar__forward__link' to='/'>Договір</Link></li>
              </ul>
            </li>
            <li className="nav__item"><Link className='navbar__forward__link' to='/store'>Каталог продукії</Link></li>
            <li className="nav__item"><Link className='navbar__forward__link' to='/'>Оплата і доставка</Link></li>
            <li className="nav__item"><Link className='navbar__forward__link' to='/'>Партнери</Link></li>
            <li className="nav__item"><Link className='navbar__forward__link' to='/'>Новини</Link></li>
            <li className="nav__item"><Link className='navbar__forward__link' to='/'>Контакти</Link></li>
          </ul>
        </nav>
        <div className="vertical-line"></div>
        <div className="user-login">
          <div className="logi-variant"><a href="#!">Вхід</a></div>
          <div className="vertical-separator"></div>
          <div className="registration-variant"><a href="#!">Реестрація</a></div>
        </div>
        <div className={burgerActive ? 'header__burger burger active' : 'header__burger burger'} onClick={() => { setBurgerActive(!burgerActive) }}>
          <span className="bureger__line"></span>
        </div>
      </div>
    </div >
  );
}

export default HeaderNavbar;