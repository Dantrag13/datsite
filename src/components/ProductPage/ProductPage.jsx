import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/productpage.scss';
import BigProductCard from './BigProductCard';
import ProductInfo from './ProductInfo';

function ProductPage() {
  const location = useLocation();
  const propsData = location.state;
  return (
    <div className="product__item__container">
      <div className="wrapper-main product__item__wrapper">
        <BigProductCard product={propsData} />
        <ProductInfo product={propsData} />
      </div>
    </div>
  )
}

export default ProductPage;