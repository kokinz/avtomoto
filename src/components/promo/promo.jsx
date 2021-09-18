import React from 'react';

function Promo() {
  return(
    <section className="promo container">
      <div className="promo__info-wrapper">
        <h2 className="promo__header">Марпех 11</h2>

        <ul className="characteristics list">
          <li className="characteristics__item">
            <svg className="characteristics__image" viewBox="0 0 53 40" width={53} height={40}>
              <use xlinkHref="#gas-station" />
            </svg>
            Бензин
          </li>
          <li className="characteristics__item">
            <svg className="characteristics__image" viewBox="0 0 40 40" width={40} height={40}>
              <use xlinkHref="#transmission" />
            </svg>
            Механика
          </li>
          <li className="characteristics__item">
            <svg className="characteristics__image" viewBox="0 0 40 40" width={40} height={40}>
              <use xlinkHref="#horsepower" />
            </svg>
            100 л.с.
          </li>
          <li className="characteristics__item">
            <svg className="characteristics__image" viewBox="0 0 40 40" width={40} height={40}>
              <use xlinkHref="#engine-volume" />
            </svg>
            1.4 л
          </li>
        </ul>

        <ul className="prices list">
          <li className="prices__new">
            2 300 000 ₽
          </li>
          <li className="prices__old">
            2 &nbsp;400 000 ₽
          </li>
        </ul>

        <button className="button prices__order-button">
          Оставить заявку
        </button>

        <button className="button prices__credit-button button--white">
          В кредит от 11 000 ₽
        </button>
      </div>

      <div className="promo__images-wrapper">
        <img className="promo__image" src="../img/car-photo.png" width="600" height="375" alt="Фото автомобиля" />

        <p className="promo__label">
          New model
        </p>

        <div className="promo__pagination-wrapper">
          <button className="promo__pagination-button promo__pagination-button--prev button">
            <svg className="promo__pagination-arrow promo__pagination-arrow--prev" viewBox="0 0 20 13" width={20} height={13}>
              <use xlinkHref="#pagination-arrow" />
            </svg>
          </button>

          <ul className="promo__pagination-list list">
            <li>
              <img className="promo__pagination-image" src="../img/car-photo.png" width="128" height="80" alt="Превью фото автомобиля" />
            </li>
            <li>
              <img src="../img/vehicle-interior.png" width="128" height="80" alt="Превью фото салона автомобиля" />
            </li>
            <li>
              <img src="../img/dashboard.png" width="128" height="80" alt="Превью фото панели автомобиля" />
            </li>

          </ul>

          <button className="promo__pagination-button promo__pagination-button--next button">
            <svg className="promo__pagination-arrow promo__pagination-arrow--next" viewBox="0 0 20 13" width={20} height={13}>
              <use xlinkHref="#pagination-arrow" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Promo;
