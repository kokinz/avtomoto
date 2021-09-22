import React from "react";

function ContactsTab() {
  return (
    <section className="contacts">
      <ul className="contacts__list list">
        <li className="contacts__item">
          <p className="contacts__type">
            Адрес
          </p>
          <p className="contacts__info">
            Санкт-Петербург, <br />набережная реки Карповки, дом 5
          </p>
        </li>
        <li className="contacts__item">
          <p className="contacts__type">
            Режим работы
          </p>
          <p className="contacts__info">
            Ежедневно, с 10:00 до 21:00
          </p>
        </li>
        <li className="contacts__item">
          <p className="contacts__type">
            Телефон
          </p>
          <p className="contacts__info">
            8 (800) 333-55-99
          </p>
        </li>
        <li className="contacts__item">
          <p className="contacts__type">
            E-mail
          </p>
          <p className="contacts__info">
            info@avto-moto.ru
          </p>
        </li>
      </ul>
      <div className="contacts__map">
        <iframe className="contacts__iframe" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8300125432079!2d30.31430331604047!3d59.968143166680335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1632159401226!5m2!1sru!2sru" width="431" height="271" style={({border:0})} allowFullScreen="" loading="lazy">
        </iframe>
      </div>
    </section>
  );
}

export default ContactsTab;
