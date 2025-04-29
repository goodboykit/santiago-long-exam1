import React from 'react';
import uniforms from '../data/uniform';
import schoolMerch from '../data/schoolMerch';
import ItemCard from '../components/ItemCard';
import HeroBanner from '../components/HeroBanner';
import bannerImg from '../assets/nu_bulldogex_banner.jpg';

const Recommended = () => {
  // pick a few from each
  const recommended = [
    ...uniforms.slice(0, 2).map(i => ({ ...i, section: 'uniforms' })),
    ...schoolMerch.slice(0, 2).map(i => ({ ...i, section: 'school-merch' })),
  ];

  return (
    <div>
      <HeroBanner
        image={bannerImg}
        title="Welcome to Bulldogz Exchange"
        subtitle="Explore our latest uniforms & school merch"
        ctaText="Shop Now"
        ctaLink="/section/uniforms"
      />
      <h1 style={{ padding: '1.5rem' }}>Recommended Items</h1>
      <div className="item-grid">
        {recommended.map(item => (
          <div className="item-card" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <p>₱{item.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Recommended;
