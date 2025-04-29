import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ItemCard = ({ item, section }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Prevent event bubbling
    addToCart(item.id, 1);
    alert(`${item.name} added to cart.`);
  };

  const handleItemClick = () => {
    navigate(`/item/${section}/${item.id}`);
  };

  return (
    <div className="enhanced-item-card" onClick={handleItemClick}>
      <div className="item-card-banner">
        <span>NATIONAL BULLDOGS EXCHANGE</span>
      </div>
      <div className="item-card-image-container">
        <img src={item.imageUrl} alt={item.name} className="item-card-image" />
      </div>
      <div className="item-card-logo">
        <div className="small-logo-circle"></div>
      </div>
      <div className="item-card-content">
        <h3 className="item-card-title">{item.name}</h3>
        <div className="item-card-divider"></div>
        <p className="item-card-price">₱{item.price.toFixed(2)}</p>
        <button className="item-card-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;