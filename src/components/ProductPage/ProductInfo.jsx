import React, { useState } from 'react';

function ProductInfo() {

  const [infoVisible, setInfoVisible] = useState(true);

  function infoToggleHandler(e) {
    console.log(e.target.classList.contains("tab__item-1"));

    if (e.target.classList.contains("tab__item-1") && (infoVisible === false)) {
      setInfoVisible(true);
    } else if (e.target.classList.contains("tab__item-2") && (infoVisible === true)) {
      setInfoVisible(false);
    } else {
      return
    }
  }


  return (
    <div className="product__description__container">
      <div className="description__tabs__wrapper">
        <div className={`description__tabs__item tab__item-1 ${infoVisible ? "active" : ""}`} onClick={infoToggleHandler}>Опис</div>
        <div className={`description__tabs__item tab__item-2 ${infoVisible ? "" : "active"}`} onClick={infoToggleHandler}>Відгуки</div>
      </div>
      <div className="description__content__wrapper">
        <div className={`description__content__item content__item-1 ${infoVisible ? "active" : ""}`}>
          <div className="content__inner__title">Генерал на полі</div>
          <p className="content__text">Генерал на полі. Досходовий гербіцид для боротьби з однорічними
            дводольними та деякими злаковими бур’янами в посівах ріпаку та інших культур.</p>
          <p className="content__text"><span className="content__green">Діюча речовина:</span>Кломазон, 480 г/л</p>
          <p className="content__text"><span className="content__green">Препаративна форма:</span>Концентрат емульсії
          </p>
          <p className="content__text"><span className="content__green">Норма використання:</span>0,2-0,6 л/га</p>
          <p className="content__text"><span className="content__green">Клас токсичності:</span>2.</p>
          <p className="content__text"><span className="content__green">Термін зберігання:</span>2 роки</p>
          <div className="content__inner__title">Характеристики</div>
          <p className="content__text">Системний препарат потрапляє до рослини через гіпокотиль (підсім´ядольне
            колінце) та кореневу систему і рухається по ксилемі до листків;
          </p>
          <ul>
            <li className="conent__list__item">Проникаючи в рослину, припиняє процес утворення хлорофілу і
              каротину, тим самим зупиняє процес фотосинтезу;
            </li>
            <li className="conent__list__item">Знищує бур’яни та створює умови озимому ріпаку для доброго росту
              і розвитку в осінній період, усуваючи конкуренцію рослин за світло, вологу та поживні
              речовини на самих ранніх етапах органогенезу;
            </li>
            <li className="conent__list__item">Добре зв´язується у грунті та слабо промивається;
            </li>
            <li className="conent__list__item">Для комплексного захисту ріпаку зазвичай;
            </li>
            <li className="conent__list__item">Використовується у бакових сумішах із д.р. метазахлор та
              пропізохлор;
            </li>
            <li className="conent__list__item">В країнах Східної Європи (Чехія, Словаччина, Польща)
              використання Комманд® на посівах ріпаку є обов’язковим елементом в технології його
              вирощування;
            </li>
            <li className="conent__list__item">Широко використовується більше, ніж в 100 країнах світу на
              посівах ріпаку, сої, тютюну, перцю, моркви, картоплі, баштанних, бавовни та інших культур.
            </li>
          </ul>
          <div className="content__inner__title">Рекомендації:</div>
          <ul>
            <li className="conent__list__item">Для досягнення максимального ефекту потрібен якісний обробіток
              ґрунту: відсутність грудок, вирівняна поверхня поля, відсутність рослинних решток;
            </li>
            <li className="conent__list__item">Обприскування ґрунту проводиться впродовж двох днів, а найкраще
              відразу ж після посіву;
            </li>
            <li className="conent__list__item">За недостачі ґрунтової вологи після обприскування рекомендується
              провести коткування ґрунту кільчасто- шпоровими котками;
            </li>
            <li className="conent__list__item">Норма витрати залежить від вмісту гумусу в ґрунті, на
              малогумусних ґрунтах її можна дещо знизити;
            </li>
            <li className="conent__list__item">Може виникнути побіління першої пари листочків ріпаку, проте в
              подальшому воно зникає, а рослини мають більш розвинену кореневу систему, краще витримують
              низькі температури;
            </li>
            <li className="conent__list__item">За потреби пересіву через 30-60 днів після обробки ріпак та сою
              можна сіяти після поверхневого обробітку ґрунту на глибину 8-10 см, для всіх інших культур
              рекомендується провести глибоку оранку;
            </li>
            <li className="conent__list__item">Обов´язковою вимогою під час внесення препарату є забезпечення
              суцільного покриття поверхні поля.</li>
          </ul>
        </div>
        <div className={`description__content__item content__item-2 ${infoVisible ? "" : "active"}`}>
          <form className="description__content__form">
            <div className="content__input__wrapper">
              <input type="text" className="content__input__name" placeholder="Ім’я" />
              <input type="text" className="content__input__mail" placeholder="Пошта" />
            </div>
            <textarea name="content__input" className="content__textarea" placeholder="Відгук"></textarea>
            <button className="content__submit__btn">Додати відгук</button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default ProductInfo