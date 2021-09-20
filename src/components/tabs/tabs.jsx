import React, {useState} from 'react';

import SpecificationTab from './tabs/specification-tab/specification-tab';
import ContactsTab from './tabs/contacts-tab/contacts-tab';
import ReviewsTab from './tabs/reviews-tab/reviews-tab';

import {Tab} from '../../const';

function Tabs() {
  const [activeTab, setActiveTab] = useState(Tab.SPECIFICATIONS);
  const tabs = Object.values(Tab);

  const handleMouseClick = (evt) => {
    evt.preventDefault();

    setActiveTab(evt.target.innerText);
  };

  return (
    <section className="tabs container">
      <ul className="tabs__list list">
        {tabs.map((tab) => (
          <li key={tab} className="tabs__item">
            <a href="/" className={`tabs__link link ${tab === activeTab ? 'tabs__link--active' : ''}`} onClick={handleMouseClick}>{tab}</a>
          </li>
        ))}
      </ul>
      {activeTab === Tab.SPECIFICATIONS && <SpecificationTab />}
      {activeTab === Tab.CONTACTS && <ContactsTab />}
      {activeTab === Tab.REVIEWS && <ReviewsTab />}
    </section>
  );

}

export default Tabs;
