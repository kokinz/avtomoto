import React from 'react';

function Footer() {
  return(
    <footer className="footer">
      <div className="footer-wrapper container">

        <nav class="footer__nav nav">
          <ul class="footer__list nav__list list">
            <li class="nav__item footer__item">
              <a class="nav__link link" href="/#">Корпоративным клиентам</a>
            </li>
            <li class="nav__item footer__item">
              <a class="nav__link link" href="/#">Клиентам</a>
            </li>
            <li class="nav__item footer__item">
              <a class="nav__link link" href="/#">Аренда авто</a>
            </li>
            <li class="nav__item footer__item">
              <a class="nav__link link" href="/#">Каршеринг</a>
            </li>
            <li class="nav__item footer__item">
              <a class="nav__link link" href="/#">Как продать авто</a>
            </li>
            <li class="nav__item footer__item">
              <a class="nav__link link" href="/#">Trade-in</a>
            </li>
            <li class="nav__item footer__item">
              <a class="nav__link link" href="/#">Test drive</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
