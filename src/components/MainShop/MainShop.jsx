import React from 'react';
import "../../styles/mainshop.scss";

function MainShop() {
  return (
    <div className="agri-store-bg">
      <div className="wrapper-main agri-store__wrapper">
        <div className="agri-store__container">
          <h1 className="agri-store__title">Аграрний</h1>
          <div className="agri-store__sub-title">інтернет-магазин</div>
          <p className="agri-store__tex">Основна сфера діяльності – дистрибуція насіння, засобів захисту рослин, мінеральних
            макро
            - та мікродобрив</p>
          <div className="agri-store__img-wrapper">
            <div className="agri-store__img-container">
              <img src={require('../../img/harvest-ripening-of-tomatoes-in-a-greenhouse2.jpg')} alt="farmer with tomatos" />
            </div>
          </div>
          <a href='#!' className="agri-store__button">Про компанію</a>
        </div>
      </div>
    </div>
  );
}

export default MainShop;