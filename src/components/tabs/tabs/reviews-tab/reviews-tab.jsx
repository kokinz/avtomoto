import React, {useState} from "react";
import Popup from "../../../popup/popup";

function ReviewsTab() {
  const [shownPopup, setShownPopup] = useState(false);

  const handlePopupClose = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();

      setShownPopup(false);

      document.body.style.position = '';
      document.body.style.top = '';
    }
  }

  const handlePopupOpen = (evt) => {
    evt.preventDefault();
    const scrollHeight = window.pageYOffset;

    setShownPopup(true);

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollHeight}px`;

    window.addEventListener('keydown', handlePopupClose);
  }

  return (
    <section className="reviews">
      <ul className="reviews__list list">
        <li className="reviews__list-item">
          <blockquote className="reviews__item">
            <cite className="reviews__author">
              Борис Иванов
            </cite>

            <div className="reviews__advantages advantages">
              <header className="advantages__header">
                <span className="advantages__header-icon">+</span> Достоинства
              </header>

              <ul className="advantages__list list">
                <li>
                  мощность, внешний вид
                </li>
              </ul>
            </div>

            <div className="reviews__disadvantages disadvantages">
              <header className="disadvantages__header">
                <span className="disadvantages__header-icon">-</span> Недостатки
              </header>

              <ul className="disadvantages__list list">
                <li>
                  Слабые тормозные колодки (пришлось заменить)
                </li>
              </ul>
            </div>

            <div className="reviews__comment">
              <header className="reviews__text-header">Комментарий</header>

              <p className="reviews__text">
                Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.
              </p>
            </div>

            <div className="reviews__rating">
              <ul className="reviews__rating-stars list">
                <li className="reviews__rating-star checked">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
                <li className="reviews__rating-star checked">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
                <li className="reviews__rating-star checked">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
                <li className="reviews__rating-star">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
                <li className="reviews__rating-star">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
              </ul>

              <span className="reviews__rating-advise">
                Советует
              </span>
            </div>


            <time className="reviews__time" dateTime="2021-09-20">
              1 минуту назад
            </time>

            <a href="/#" className="reviews__answer-button link">
              Ответить
            </a>
          </blockquote>
        </li>
        <li className="reviews__list-item">
          <blockquote className="reviews__item">
            <cite className="reviews__author">
              Марсель Исмагилов
            </cite>

            <div className="reviews__advantages advantages">
              <header className="advantages__header">
                <span className="advantages__header-icon">+</span> Достоинства
              </header>

              <ul className="advantages__list list">
                <li>
                  Cтиль, комфорт, управляемость
                </li>
              </ul>
            </div>

            <div className="reviews__disadvantages disadvantages">
              <header className="disadvantages__header">
                <span className="disadvantages__header-icon">-</span> Недостатки
              </header>

              <ul className="disadvantages__list list">
                <li>
                   Дорогой ремонт и обслуживание
                </li>
              </ul>
            </div>

            <div className="reviews__comment">
              <header className="reviews__text-header">Комментарий</header>

              <p className="reviews__text">
                Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.
              </p>
            </div>

            <div className="reviews__rating">
              <ul className="reviews__rating-stars list">
                <li className="reviews__rating-star checked">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
                <li className="reviews__rating-star checked">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
                <li className="reviews__rating-star checked">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
                <li className="reviews__rating-star">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
                <li className="reviews__rating-star">
                  <svg viewBox="0 0 17 16" width={17} height={16} fill="currently">
                    <use xlinkHref="#review-star" />
                  </svg>
                </li>
              </ul>

              <span className="reviews__rating-advise">
                Советует
              </span>
            </div>


            <time className="reviews__time" dateTime="2021-09-20">
              1 минуту назад
            </time>

            <a href="/#" className="reviews__answer-button link">
              Ответить
            </a>
          </blockquote>
        </li>
      </ul>

      <button className="reviews__button button" onClick={handlePopupOpen}>
        Оставить отзыв
      </button>

      {shownPopup ? <Popup /> : ''}
    </section>
  );
}

export default ReviewsTab;