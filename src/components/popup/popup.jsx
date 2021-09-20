import React from 'react';

function Popup() {
  return(
    <div className="popup-wrapper">
      <section className="popup">
        <h2 className="popup__header">Оставить отзыв</h2>

        <form className="popup__form" action="">
          <div className="popup__form-wrapper">
            <input className="popup__text" type="text" placeholder="Имя" required />

            <input className="popup__text" type="text" placeholder="Достоинства" />

            <input className="popup__text" type="text" placeholder="Недостатки" />
          </div>

          <div className="popup__form-wrapper">
            <div className="popup__stars">
              <header className="popup__stars-header">Оцените товар:</header>

              <div className="popup__stars-wrapper">
                <input className="popup__star visually-hidden" id="star-5" name="star" type="radio" value="5" />
                <label className="popup__star-label" htmlFor="star-5">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>

                <input className="popup__star visually-hidden" id="star-4" name="star" type="radio" value="4" />
                <label className="popup__star-label" htmlFor="star-4">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>

                <input className="popup__star visually-hidden" id="star-3" name="star" type="radio" value="3" />
                <label className="popup__star-label" htmlFor="star-3">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>

                <input className="popup__star visually-hidden" id="star-2" name="star" type="radio" value="2" />
                <label className="popup__star-label" htmlFor="star-2">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>

                <input className="popup__star visually-hidden" id="star-1" name="star" type="radio" value="1" />
                <label className="popup__star-label" htmlFor="star-1">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>
              </div>
            </div>

            <textarea className="popup__textarea" name="comment" id="comment" cols="30" rows="5" placeholder="Комментарий" required></textarea>
          </div>

          <button className="popup__submit button" type="submit">Оставить отзыв</button>
        </form>

        <button className="popup__close button" ></button>

      </section>
    </div>
  );
}

export default Popup;
