import React from 'react';
import weights from '../../img/weights2.svg';
import { Link } from 'react-router-dom';
import ProductCartIco from './ProductCartIco';

function StoreProducts({ products }) {
  return (
    <ul className="products__items-list">
      {products.map(elem => {
        return (
          <Link to='/product' state={elem} key={elem.id}>
            <li className="product__item" >
              <div className="product__weights-wrapper">
                <img src={weights} alt="weights" className="product__weights-ico" />
              </div>
              <div className="product__main-img__wrapper">
                <img src={elem.images[0]} alt={elem.name} className="product__main-img" />
              </div>
              <div className="product__inner-container">
                <h6 className="product__name">{elem.name}</h6>
                <div className="product__avaliability">{Number(elem.quantity) ? "В наявності" : "Немає в наявності"}</div>
                <div className="product__price">{elem.price + " грн"}</div>
                <div className="product__ammount">{elem.ammount + " шт"}</div>
                <ProductCartIco elemId={elem.id} />
              </div>
            </li>
          </Link>
        );
      })
      }
    </ul>
  )
}

export default StoreProducts;