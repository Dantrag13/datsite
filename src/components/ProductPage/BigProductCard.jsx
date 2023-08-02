import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Thumbs } from "swiper/modules";
import manufacturer from '../../img/manufacturer_name1.svg';
import visa from '../../img/payment-visa.svg';
import master_card from '../../img/payment-master.svg';
import dollars from '../../img/paymen-dollars.svg';
import weighter from '../../img/weigher.svg';
import { useProductCart } from '../ProductCart/ProductCart';


function BigProductCard({ product }) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const myCart = useProductCart();

  function cartFillHandler(e) {
    e.preventDefault();
    myCart.addToCart(product);
  }
  console.log(myCart.cart);

  return (
    <>
      <div className="product__item__style__wrapper">
        <div className="product__slider__container">
          <Swiper
            className='main__swiper'
            modules={[Navigation, Thumbs]}
            loop={true}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {product.images.map((img, index) => {
              return (
                <SwiperSlide key={product.name + 'img' + index}><img src={img} alt="" /></SwiperSlide>
              )
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            allowTouchMove={false}
            noSwiping={true}
            preventClicksPropagation={false}
            preventClicks={false}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="swiper__thumbs"
          >
            {product.images.map((img, index) => {
              return (
                <SwiperSlide key={product.name + 'img' + index}><img src={img} alt="" /></SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="product__info__container">
          <h3 className="product__title">{product.name}</h3>
          <div className="product__avaliability">{Boolean(Number(product.quantity)) ? "В наявності" : "Немає в наявності"}</div>
          <div className="product__manufacturer__delivery__container">
            <div className="product__inner__style__wrapper">
              <div className="product__manufacturer__wrapper">
                <div className="product__manufacturer__title">Виробник</div>
                <div className="product__manufacturer__image__name">
                  <img src={manufacturer} alt="FMC Ukraine" /><span>{product.manufacturer}</span>
                </div>
                <div className="product__payment__title">Оплата</div>
                <div className="product__payment__image__wrapper">
                  <img src={visa} alt="visa" /><img src={master_card} alt="master card" /><img src={dollars} alt="dollar" />
                </div>
              </div>
              <div className="product__vertical__style"></div>
              <div className="product__delivery__wrapper">
                <div className="product__delivery__title">Доставка</div>
                <div className="product__delivery__text">Завтра відповідно до тарифів перевізника</div>
                <button className="product__delivery__btn">
                  <div className="delivery__btn__img">
                    <svg width="16" height="16" viewBox="0 0 16 16"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.1974 14.5455L10.0039 10.6764C9.98716 10.6515 9.97573 10.6234 9.97034 10.5938C9.96495 10.5643 9.96572 10.534 9.97258 10.5048C9.97945 10.4755 9.99227 10.4481 10.0102 10.424C10.0282 10.4 10.051 10.3799 10.077 10.3651C10.1031 10.3502 10.132 10.3409 10.1618 10.3377C10.1917 10.3345 10.2219 10.3375 10.2505 10.3466C10.2791 10.3556 10.3056 10.3704 10.3282 10.3901C10.3509 10.4098 10.3692 10.434 10.3821 10.4611L12.5755 14.3302L12.1974 14.5455Z"
                        fill="#E74E13" />
                      <path
                        d="M7.1677 5.45455C7.12929 5.45414 7.09166 5.44373 7.0585 5.42434C7.02535 5.40496 6.99781 5.37727 6.97861 5.34401L4.78516 1.47783L5.16334 1.25964L7.35679 5.12873C7.38412 5.17821 7.3909 5.23645 7.37566 5.29088C7.36042 5.34531 7.32439 5.39156 7.27534 5.41964C7.24278 5.43974 7.20586 5.45172 7.1677 5.45455Z"
                        fill="#E74E13" />
                      <path
                        d="M10.0542 15.1971C9.73207 15.2026 9.41049 15.1674 9.09714 15.0924C5.96987 14.2284 1.86223 6.98182 2.72623 3.85745C3.11949 2.75041 3.8736 1.80777 4.86733 1.18109C5.05932 1.06764 5.25423 0.965818 5.44914 0.872727C5.62802 0.791287 5.83093 0.779869 6.01782 0.840727C6.2047 0.901586 6.36198 1.0303 6.4586 1.20145L8.10223 4.11054C8.1568 4.20584 8.1907 4.31156 8.20173 4.42082C8.21276 4.53009 8.20066 4.64044 8.16623 4.74473C8.13116 4.84924 8.07479 4.94534 8.00068 5.02696C7.92658 5.10858 7.83634 5.17394 7.73569 5.21891C7.57569 5.28873 7.4186 5.36145 7.26732 5.44C6.60696 5.77164 6.22878 6.07127 6.14151 6.33309C5.94078 6.95563 6.17933 8.00873 6.74951 9.01527C7.31969 10.0218 8.08769 10.7607 8.7306 10.8975C8.91969 10.9411 9.31242 10.8975 10.0746 10.3942C10.2201 10.304 10.3655 10.2051 10.5081 10.1033C10.5976 10.0398 10.6995 9.99573 10.8072 9.97403C10.9148 9.95234 11.0258 9.95345 11.133 9.97729C11.2401 10.0011 11.3411 10.0472 11.4294 10.1125C11.5177 10.1778 11.5913 10.2609 11.6455 10.3564L13.2921 13.2655C13.3904 13.4365 13.4208 13.6383 13.3771 13.8308C13.3335 14.0232 13.219 14.1921 13.0564 14.304C12.879 14.4204 12.6899 14.5367 12.4921 14.6444C11.736 15.0227 10.8995 15.2123 10.0542 15.1971ZM5.77205 1.23345C5.7238 1.23435 5.67625 1.24525 5.63242 1.26545C5.45205 1.34982 5.26878 1.44873 5.08842 1.55636C4.19295 2.12583 3.51001 2.9744 3.14514 3.97091C2.7786 5.30036 3.42151 7.712 4.78296 10.112C6.14442 12.512 7.88405 14.304 9.21351 14.6735C10.2548 14.8733 11.3329 14.7261 12.2826 14.2545C12.4688 14.1527 12.6462 14.0451 12.8121 13.9345C12.8833 13.8844 12.9333 13.8095 12.9521 13.7245C12.9709 13.6394 12.9573 13.5504 12.9139 13.4749L11.2673 10.5658C11.2432 10.5235 11.2106 10.4867 11.1716 10.4577C11.1325 10.4286 11.0878 10.408 11.0404 10.3971C10.9906 10.3856 10.9389 10.3849 10.8887 10.3949C10.8385 10.4049 10.7911 10.4255 10.7495 10.4553C10.6011 10.56 10.4586 10.6618 10.3015 10.7462C9.5626 11.2233 9.03023 11.4007 8.62587 11.3105C7.85496 11.136 7.00842 10.3535 6.3626 9.216C5.85933 8.34327 5.42878 7.07491 5.71969 6.18473C5.84478 5.79782 6.27242 5.43127 7.06078 5.02109C7.21787 4.93963 7.38369 4.864 7.54951 4.79127C7.59485 4.77117 7.63556 4.74194 7.6691 4.7054C7.70263 4.66886 7.72827 4.6258 7.74442 4.57891C7.76051 4.53113 7.76623 4.48048 7.76122 4.43032C7.7562 4.38016 7.74056 4.33164 7.71533 4.288L6.06878 1.37891C6.03468 1.33276 5.98982 1.29566 5.93811 1.27081C5.88639 1.24597 5.82938 1.23414 5.77205 1.23636V1.23345Z"
                        fill="#E74E13" />
                    </svg>
                  </div><a href="#!">Замовити дзвінок</a>
                </button>
              </div>
            </div>
            <div className="product__price__container">
              <div className="product__price">{product.price + " грн"}</div>
              <div className="product__price__inner__style__container">
                <button className="product__buy__btn" onClick={cartFillHandler}>
                  <div className="buy__btn__img">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.9077 3.34277C15.8161 3.2115 15.6687 3.13037 15.5086 3.12353L5.58366 2.69572C5.29889 2.68326 5.06093 2.90311 5.04875 3.18655C5.03665 3.46988 5.25614 3.70928 5.53955 3.72145L14.7926 4.12033L12.9732 9.79679H4.87696L3.41425 1.83244C3.38209 1.65788 3.26225 1.51226 3.09697 1.44741L0.701302 0.506255C0.437269 0.402883 0.139327 0.532572 0.0356332 0.796283C-0.0678819 1.06014 0.0617715 1.35826 0.325661 1.46195L2.45579 2.29877L3.94432 10.4029C3.98918 10.6465 4.20151 10.8235 4.44933 10.8235H4.69624L4.13241 12.3896C4.08522 12.5208 4.10466 12.6665 4.18497 12.7805C4.26518 12.8945 4.39562 12.9623 4.53487 12.9623H4.93034C4.68529 13.2351 4.53487 13.5942 4.53487 13.9891C4.53487 14.8383 5.22589 15.5291 6.07495 15.5291C6.92402 15.5291 7.61504 14.8383 7.61504 13.9891C7.61504 13.5942 7.46462 13.2351 7.2196 12.9623H10.5774C10.3322 13.2351 10.1818 13.5942 10.1818 13.9891C10.1818 14.8383 10.8727 15.5291 11.7219 15.5291C12.5712 15.5291 13.262 14.8383 13.262 13.9891C13.262 13.5942 13.1116 13.2351 12.8666 12.9623H13.3476C13.5839 12.9623 13.7754 12.7708 13.7754 12.5345C13.7754 12.2982 13.5839 12.1067 13.3476 12.1067H5.14357L5.60554 10.8233H13.3475C13.5708 10.8233 13.7683 10.6791 13.8363 10.4667L15.9753 3.79295C16.0245 3.64064 15.9993 3.4741 15.9077 3.34277ZM6.07499 14.6737C5.69749 14.6737 5.39049 14.3667 5.39049 13.9892C5.39049 13.6117 5.69749 13.3047 6.07499 13.3047C6.45249 13.3047 6.75945 13.6117 6.75945 13.9892C6.75945 14.3667 6.45249 14.6737 6.07499 14.6737ZM11.7219 14.6737C11.3444 14.6737 11.0374 14.3667 11.0374 13.9892C11.0374 13.6117 11.3444 13.3047 11.7219 13.3047C12.0994 13.3047 12.4064 13.6117 12.4064 13.9892C12.4064 14.3667 12.0994 14.6737 11.7219 14.6737Z"
                        fill="#8C3213" />
                    </svg>
                  </div><a href="!#">Купити</a>
                </button>
                <div className="product__weigts_img"><img src={weighter} alt="weigts" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// onClick={myCart.addToCart(product)}

export default BigProductCard;