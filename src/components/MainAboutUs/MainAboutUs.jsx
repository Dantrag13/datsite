import React from 'react'
import '../../styles/mainaboutus.scss'
import farmer_with_soil from '../../img/mainaboutus-img.jpg'

function MainAboutUs() {
  return (
    <div className="mainaboutus__container">
      <div className="wrapper-main mainaboutus__wrapper">
        <div className="mainaboutus__content-container">
          <div className="mainaboutus__img-container">
            <img src={farmer_with_soil} alt="farmer with soil" />
          </div>
          <div className="mainaboutus__text-style-wrapper">
            <h1 className="mainaboutus__title">Про нас</h1>
            <p className="mainaboutus__text"><span>«Компанія ТОВ “ДАМАР АГРОТРЕЙД”</span> — молода команда, яка з’явилась на
              аграрному ринку у
              2020 році. Ми не боїмось труднощів і викликів. Тому навіть складний ковідний період, світова пандемія не стали
              на заваді успішному старту.
            </p>
            <p className="mainaboutus__text">Отже, <span>ми — сміливі, ми — драйвові</span>, ми — ті, що розвивають рослинництво
              та допомагають
              ставати успішними тисячам вітчизняних аграріїв.</p>
            <p className="mainaboutus__text"><span>Бачення:</span> компанія ТОВ “ДАМАР АГРОТРЕЙД” тримає курс на підвищення
              престижності,
              довіри до засобів захисту рослин made in UA. Прагнемо, аби в кожному регіоні України наш споживач мав доступ
              до
              якісної продукції та консалтингу від фахівців команди.
            </p>
            <p className="mainaboutus__text"><span>Місія:</span> усе продуктове портфоліо, консультативні послуги ТОВ “ДАМАР
              АГРОТРЕЙД”
              направлені на підвищення рентабельності рослинництва в мінливих кліматичних умовах України. Також ставимо собі
              завдання підвищувати обізнаність клієнтів щодо сучасних методів ведення рослинництва...</p>
            <a href="#!" className="mainaboutus__button">Докладніше</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAboutUs