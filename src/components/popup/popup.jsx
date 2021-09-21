import React, {useRef, useState, useEffect} from 'react';

function Popup({onPopupClose}) {
  const layout = useRef();
  const nameInput = useRef();
  const advantagesInput = useRef();
  const disadvantagesInput = useRef();
  const textarea = useRef();

  const [data, setData] = useState({
    name: '',
    advantages: '',
    disadvantages: '',
    rating: 0,
    text: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    text: false,
  });

  useEffect(() => {
    nameInput.current.focus();
  }, []);

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
      })
    }
    console.log('form');
    console.log(data)
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
  }

  return(
    <div className="popup-wrapper" ref={layout} onClick={handleLayoutClick}>
      <section className="popup">
        <h2 className="popup__header">Оставить отзыв</h2>

        <form className="popup__form" action="" onChange={handleFormChange} onSubmit={handleFormSubmit}>
          <div className="popup__form-wrapper">
            <div className="popup__required">
              <input className="popup__text" ref={nameInput} type="text" placeholder="Имя" />
            </div>

            <input className="popup__text" ref={advantagesInput} type="text" placeholder="Достоинства" />

            <input className="popup__text" ref={disadvantagesInput} type="text" placeholder="Недостатки" />
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

            <div className="popup__required">
              <textarea className="popup__textarea" ref={textarea} name="comment" id="comment" cols="30" rows="5" placeholder="Комментарий"></textarea>
            </div>
          </div>

          <button className="popup__submit button" type="submit">Оставить отзыв</button>
        </form>

        <button className="popup__close button" onClick={onPopupClose}></button>

      </section>
    </div>
  );
}

export default Popup;
