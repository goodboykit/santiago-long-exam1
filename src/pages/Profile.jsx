import React, { useState } from 'react';
import logo from '../assets/nubdexchange_logo.png';
import uniforms from '../data/uniform'; 

import schoolMerch from '../data/schoolMerch';

const STATUS_KEYS = ['toPay', 'toShip', 'toReceived', 'toReturn'];
const STATUS_LABELS = {
  toPay: 'To Pay',
  toShip: 'To Ship',
  toReceived: 'To Received',
  toReturn: 'To Return',
};

function Profile() {
  const [selected, setSelected] = useState('toPay');

  // Sample data
  const orders = {
    toPay: [
      { id: '1', name: 'Classic Uniform Set', price: 29.99, imageUrl: uniforms[0].imageUrl },
      { id: '4', name: 'Premium Blazer', price: 49.99, imageUrl: uniforms[1].imageUrl },
    ],
    toShip: [
      { id: '2', name: 'School Hoodie', price: 39.99, imageUrl: schoolMerch[0].imageUrl },
    ],
    toReceived: [],
    toReturn: [
      { id: '3', name: 'Branded Mug', price: 9.99, imageUrl: schoolMerch[1].imageUrl },
    ],
  };

  const items = orders[selected] || [];

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <img className="avatar" src={logo} alt="avatar" />
        <h1 className="profile-name">Cyrus Robles</h1>
        <p className="profile-email">cyrusrobles@example.com</p>
        <p className="profile-joined">Member since January 12, 2023</p>
      </div>

      <main className="profile-main">
        <div className="summary-bar">
          {STATUS_KEYS.map(key => (
            <div
              key={key}
              className={`summary-item ${selected === key ? 'active' : ''}`}
              onClick={() => setSelected(key)}
            >
              <span className="count">{orders[key]?.length || 0}</span>
              <span className="label">{STATUS_LABELS[key]}</span>
            </div>
          ))}
        </div>

        <section className="order-section">
          <h2>{STATUS_LABELS[selected]}</h2>

          {items.length > 0 ? (
            <ul className="order-items">
              {items.map(item => (
                <li key={item.id} className="order-item">
                  <img src={item.imageUrl} alt={item.name} className="item-thumb" />
                  <div className="item-details">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">₱{item.price.toFixed(2)}</span>
                  </div>
                  <button
                    className="view-btn"
                    onClick={() => window.alert(`View details for ${item.name}`)}
                  >
                    View
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-items">
              You have no items {STATUS_LABELS[selected].toLowerCase()}.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default Profile;
