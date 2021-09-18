import React from 'react';

function Header() {
  return(
    <header className="header">
      <div className="header-wrapper container">
        <a className="header__logo link" href="/#" aria-label="AVTO MOTO">
          <svg className="header__logo-image" viewBox="0 0 134 55" width={134} height={55}>
            <use xlinkHref="#logo" />
          </svg>
        </a>

        <nav className="header__nav nav">
          <ul className="nav__list list">
            <li className="nav__item">
              <a className="nav__link link" href="/#">Автомобили</a>
            </li>
            <li className="nav__item">
              <a className="nav__link link" href="/#">Контакты</a>
            </li>
            <li className="nav__item">
              <a className="nav__link link" href="/#">Услуги</a>
            </li>
            <li className="nav__item">
              <a className="nav__link link" href="/#">Вакансии</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
