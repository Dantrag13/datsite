import React from 'react'
import '../../styles/footer.scss'
import arrow from "../../img/arrow.svg"
import email_ico from "../../img/email-ico.svg"
import logo from "../../img/logo.svg"
import phone_ico from "../../img/phone-ico.svg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer__container">
      <div className="wrapper-main footer__wprapper">
        <div className="footer__content__style__container">
          <div className="footer__content__style footer__style__logo">
            <Link className="footer__logo__link" to='./'><img src={logo} alt="logo" /></Link>
            <div className="footer__logo__text">Пропонуємо покупцям широкий вибір насіння овочів</div>
          </div>
          <div className="footer__content__style footer__style__info-goods">
            <div className="footer__col__info">
              <h5 className="info__title">Інформація</h5>
              <div className="info__item"><Link className="info__link" to='./'>Про компанію</Link></div>
              <div className="info__item"><Link className="info__link" to='./'>Оплата і доставка</Link></div>
              <div className="info__item"><Link className="info__link" to='./'>Партнери</Link></div>
            </div>
            <div className="footer__col__goods">
              <h5 className="goods__title">Товари</h5>
              <div className="goods__item"><Link className="goods__link" to='/store'>Каталог продукції</Link></div>
              <div className="goods__item"><Link className="goods__link" to='/store/plant-protection'>Засоби захисту рослин</Link></div>
              <div className="goods__item"><Link className="goods__link" to='/store/seeds'>Насіння</Link></div>
              <div className="goods__item"><Link className="goods__link" to='/store/fertilizers'>Добрива</Link></div>
              <div className="goods__item"><Link className="goods__link" to='/store/agro-to-help'>Агроному в поміч</Link></div>
            </div>
          </div>
          <div className="footer__content__style footer__style__contacts">
            <h5 className="contacts__title">Контакти</h5>
            <div className="footer__phones__container">
              <img src={phone_ico} alt="phone" />
              <div className="phones__group">
                <a href="tel: 380671150058">+38 (067) 115 00 58</a>
                <a href="#!">Замовити зворотній зв’язок</a>
                <a href="tel: 380501150058">+38 (050) 115 00 58</a>
                <a href="tel: 380671150058">+38 (067) 115 00 58</a>
              </div>
            </div>
            <div className="footer__email__container">
              <img src={email_ico} alt="email" />
              <div className="email__group">
                <a href="mailto:">DAT@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="footer__copy">© 2022 DAT</div>
        <a className="footer__arrow__up" href="#header"><img src={arrow} alt="arrow" /></a>
      </div>
    </div>
  )
}

export default Footer