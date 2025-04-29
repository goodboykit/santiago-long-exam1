import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import uniforms from '../data/uniform'; 
import schoolMerch from '../data/schoolMerch';

const ItemDetails = () => {
  const { sectionId, itemId } = useParams();
  const navigate = useNavigate();

  const items = sectionId === 'uniforms' ? uniforms : schoolMerch;
  const item = items.find((i) => i.id === itemId);

  const [qty, setQty] = useState(1);

  if (!item) return <p>Item not found</p>;

  const addToCart = () => {
    alert(`${qty} x ${item.name} added to cart.`);
    navigate('/cart');
  };

  return (
    <>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="item-details">
        <img
          src={item.imageUrl}
          alt={item.name}
        />
        <div className="item-info">
          <h1>{item.name}</h1>
          <p className="description">{item.description}</p>
          <p className="price">₱{item.price.toFixed(2)}</p>
          <div className="quantity-control">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(+e.target.value)}
            />
          </div>
          <button className="add-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
