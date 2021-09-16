import React from 'react';

function Header() {
  return(
    <header className="header">
      <div className="header-wrapper container">
        <a class="header__logo link" href="/#" aria-label="AVTO MOTO">
          <svg className="header__logo-image" viewBox="0 0 134 55" width={134} height={55}>
            <use xlinkHref="#logo" />
          </svg>
        </a>

        <nav class="header__nav nav">
          <ul class="nav__list list">
            <li class="nav__item">
              <a class="nav__link link" href="/#">Автомобили</a>
            </li>
            <li class="nav__item">
              <a class="nav__link link" href="/#">Контакты</a>
            </li>
            <li class="nav__item">
              <a class="nav__link link" href="/#">Услуги</a>
            </li>
            <li class="nav__item">
              <a class="nav__link link" href="/#">Вакансии</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
