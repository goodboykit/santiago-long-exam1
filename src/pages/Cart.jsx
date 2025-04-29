// src/pages/Cart.jsx
import React from 'react';

const Cart = () => {
  // mock cart data – replace with real state later
  const cartItems = [
    {
      id: 'u2',
      name: 'Premium Blazer',
      price: 49.99,
      imageUrl:
        'https://scontent.xx.fbcdn.net/...jpg',   // 180 × 180 or larger
    },
  ];

  const handleRemove = id => alert(`Removed ${id}`);
  const handleCheckout = () => alert('Proceed to checkout');

  return (
    <div className="profile-container">
      <h1 className="page-heading">Your Cart</h1>

      {cartItems.length ? (
        <>
          <ul className="order-items">
            {cartItems.map(item => (
              <li key={item.id} className="order-item">
                <img className="item-thumb" src={item.imageUrl} alt={item.name} />

                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">₱{item.price.toFixed(2)}</span>
                </div>

                <button className="view-btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      ) : (
        <p className="no-items">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
