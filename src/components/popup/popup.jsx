import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function Popup({onPopupClose, onReviewAdd}) {
  const layout = useRef();
  const nameInput = useRef();
  const advantagesInput = useRef();
  const disadvantagesInput = useRef();
  const textarea = useRef();
  const tempData = localStorage.getItem('temp-data') ? JSON.parse(localStorage.getItem('temp-data')) : {name: '', advantages: '', disadvantages: '', rating: 0, text: ''};
  const reviewsData = localStorage.getItem('reviews-data') ? JSON.parse(localStorage.getItem('reviews-data')) : [];

  console.log(reviewsData);

  const [data, setData] = useState(tempData);

  const [errors, setErrors] = useState({
    name: false,
    text: false,
  });

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('temp-data', JSON.stringify(data));
  }, [data]);

  const handleLayoutClick = (evt) => {
    if (evt.target === layout.current) {
      onPopupClose();
    }
  }

  const handleFormChange = (evt) => {
    if (evt.target.name === 'star') {
      setData({
        ...data,
        rating: Number(evt.target.value),
      });
    } else {
      setData({
        ...data,
        name: nameInput.current.value,
        advantages: advantagesInput.current.value,
        disadvantages: disadvantagesInput.current.value,
        text: textarea.current.value,
      });

      setErrors({
        name: false,
        text: false,
      });
    }
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (data.name === '') {
      setErrors({
        ...errors,
        name: true,
      })

      nameInput.current.focus();

      return;
    }

    if (data.text === '') {
      setErrors({
        ...errors,
        text: true,
      })

      textarea.current.focus();

      return;
    }

    onReviewAdd(tempData);

    onPopupClose();

    reviewsData.push(tempData);
    console.log(reviewsData)
    localStorage.setItem('reviews-data', JSON.stringify(reviewsData));
    localStorage.removeItem('temp-data');
  }

  return(
    <div className="popup-wrapper" ref={layout} onClick={handleLayoutClick}>
      <section className="popup">
        <h2 className="popup__header">Оставить отзыв</h2>

        <form className="popup__form" action="https://echo.htmlacademy.ru/" onSubmit={handleFormSubmit}>
          <div className="popup__form-wrapper">
            <div className={`popup__required ${errors.name ? 'popup__required--error' : ''}`}>
              <input className="popup__text" ref={nameInput} type="text" placeholder="Имя" value={data.name} onChange={handleFormChange} />
            </div>

            <input className="popup__text" ref={advantagesInput} type="text" placeholder="Достоинства" value={data.advantages} onChange={handleFormChange} />

            <input className="popup__text" ref={disadvantagesInput} type="text" placeholder="Недостатки" value={data.disadvantages} onChange={handleFormChange} />
          </div>

          <div className="popup__form-wrapper">
            <div className="popup__stars">
              <header className="popup__stars-header">Оцените товар:</header>

              <div className="popup__stars-wrapper">
                <input className="popup__star visually-hidden" id="star-5" name="star" type="radio" value="5" checked={data.rating === 5} onChange={handleFormChange} />
                <label className="popup__star-label" htmlFor="star-5">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>

                <input className="popup__star visually-hidden" id="star-4" name="star" type="radio" value="4" checked={data.rating === 4} onChange={handleFormChange} />
                <label className="popup__star-label" htmlFor="star-4">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>

                <input className="popup__star visually-hidden" id="star-3" name="star" type="radio" value="3" checked={data.rating === 3} onChange={handleFormChange} />
                <label className="popup__star-label" htmlFor="star-3">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>

                <input className="popup__star visually-hidden" id="star-2" name="star" type="radio" value="2" checked={data.rating === 2} onChange={handleFormChange} />
                <label className="popup__star-label" htmlFor="star-2">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>

                <input className="popup__star visually-hidden" id="star-1" name="star" type="radio" value="1" checked={data.rating === 1} onChange={handleFormChange} />
                <label className="popup__star-label" htmlFor="star-1">
                  <svg width="27" height="25" viewBox="0 0 27 25" fill="currently">
                    <use xlinkHref="#review-big-star" />
                  </svg>
                </label>
              </div>
            </div>

            <div className={`popup__required ${errors.text ? 'popup__required--error' : ''}`}>
              <textarea className="popup__textarea" ref={textarea} name="comment" id="comment" cols="30" rows="5" placeholder="Комментарий" value={data.text} onChange={handleFormChange}></textarea>
            </div>
          </div>

          <button className="popup__submit button" type="submit">Оставить отзыв</button>
        </form>

        <button className="popup__close button" onClick={onPopupClose}></button>

      </section>
    </div>
  );
}

Popup.propTypes = {
  onPopupClose: PropTypes.func.isRequired,
  onReviewAdd: PropTypes.func.isRequired,
};

export default Popup;
