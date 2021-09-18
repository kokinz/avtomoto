import React from "react";

function SpecificationTab() {
  return (
    <ul className="specification list">
      <li className="specification__item">
        <span className="specification__name">Трансмиссия</span>

        <span className="specification__value">Роботизированная</span>
      </li>
      <li className="specification__item">
        <span className="specification__name">Мощность двигателя, л.с.</span>

        <span className="specification__value">249</span>
      </li>
      <li className="specification__item">
        <span className="specification__name">Тип двигателя</span>

        <span className="specification__value">Бензиновый</span>
      </li>
      <li className="specification__item">
        <span className="specification__name">Привод</span>

        <span className="specification__value">Полный</span>
      </li>
      <li className="specification__item">
        <span className="specification__name">Объем двигателя, л</span>

        <span className="specification__value">2.4</span>
      </li>
      <li className="specification__item">
        <span className="specification__name">Макс. крутящий момент</span>

        <span className="specification__value">370/4500</span>
      </li>
      <li className="specification__item">
        <span className="specification__name">Количество цилиндров</span>

        <span className="specification__value">4</span>
      </li>
    </ul>
  );
}

export default SpecificationTab;
