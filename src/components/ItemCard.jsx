import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, section }) => {
  return (
    (section === 'uniforms' || section === 'school-merch') ? (
      <Link to={`/item/${section}/${item.id}`} className="item-card">
        <img src={item.imageUrl} alt={item.name} />
        <div className="info">
          <h3>{item.name}</h3>
          <p>₱{item.price.toFixed(2)}</p>
          <button>Add to Cart</button>
        </div>
      </Link>
    ) : (
      <div className="item-card" key={item.id}>
  <span className="badge-overlay">National U</span>
  <img src={item.imageUrl} alt={item.name} />
  <div className="info">
    <h3>{item.name}</h3>
    <p>₱{item.price.toFixed(2)}</p>
    <button>Add to Cart</button>
  </div>
</div>

    )
  );
};

export default ItemCard;
