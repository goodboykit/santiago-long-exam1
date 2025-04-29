import React from 'react';
import { useNavigate } from 'react-router-dom';
import uniforms from '../data/uniform';
import schoolMerch from '../data/schoolMerch';
import { useCart } from '../context/CartContext';
import HeroBanner from '../components/HeroBanner';
import bannerImg from '../assets/nu_bulldogex_banner.jpg';

const ProductCard = ({ item, section }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item.id, 1);
    alert(`${item.name} added to cart.`);
  };

  const handleViewDetails = () => {
    navigate(`/item/${section}/${item.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-badge">NATIONAL BULLDOGS EXCHANGE</div>
      <div className="product-image-container" onClick={handleViewDetails}>
        <img src={item.imageUrl} alt={item.name} className="product-image" />
        <div className="nu-badge"></div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{item.name}</h3>
        <div className="product-divider"></div>
        <p className="product-price">₱{item.price.toFixed(2)}</p>
        <button 
          className="product-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const SectionTitle = ({ title }) => (
  <div className="section-title-container">
    <div className="section-line"></div>
    <h2 className="section-title">{title}</h2>
    <div className="section-line"></div>
  </div>
);

const Recommended = () => {
  // Get items from each category
  const recommendedUniforms = uniforms.slice(0, 3);
  const recommendedMerch = schoolMerch.slice(0, 3);
  
  // Combined items for a 3x3 grid (top 3 uniforms + top 3 merch + 3 mixed items)
  const mixedItems = [
    ...uniforms.slice(3, 4),
    ...schoolMerch.slice(3, 5),
  ];
  
  return (
    <div className="page-container">
      <HeroBanner
        image={bannerImg}
        title="Welcome to Bulldogz Exchange"
        subtitle="Explore our latest uniforms & school merch"
        ctaText="Shop Now"
        ctaLink="/section/uniforms"
      />
      
      <div className="recommended-container">
        <SectionTitle title="Recommended Uniforms" />
        
        <div className="products-grid">
          {recommendedUniforms.map(item => (
            <ProductCard key={item.id} item={item} section="uniforms" />
          ))}
        </div>
        
        <SectionTitle title="Recommended School Merchandise" />
        
        <div className="products-grid">
          {recommendedMerch.map(item => (
            <ProductCard key={item.id} item={item} section="school-merch" />
          ))}
        </div>
        
        <SectionTitle title="More Items You Might Like" />
        
        <div className="products-grid">
          {mixedItems.map(item => {
            const section = item.id.startsWith('u') ? 'uniforms' : 'school-merch';
            return <ProductCard key={item.id} item={item} section={section} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommended;