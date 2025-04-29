import React from 'react';
import { useParams } from 'react-router-dom';
import uniforms from '../data/uniform'; 
import schoolMerch from '../data/schoolMerch';
import ItemCard from '../components/ItemCard';

const Section = () => {
  const { sectionId } = useParams();
  const items = sectionId === 'uniforms' ? uniforms : schoolMerch;
  const title = sectionId === 'uniforms' ? 'Uniforms' : 'School Merch';
  const bgClass = sectionId === 'uniforms' ? 'uniforms-bg' : 'merch-bg';

  return (
    <div className="section-page-container">
      <div className={`section-header ${bgClass}`}>
        <div className="section-header-content">
          <h1>{title}</h1>
          <div className="section-header-divider"></div>
          <p className="section-header-subtitle">
            {sectionId === 'uniforms' 
              ? 'Official National University uniforms for all programs' 
              : 'NU Bulldogs merchandise and accessories'}
          </p>
        </div>
      </div>
      
      <div className="section-content">
        <div className="category-indicator">
          <div className="category-line"></div>
          <h2 className="category-title">{title} Collection</h2>
          <div className="category-line"></div>
        </div>
        
        <div className="enhanced-item-grid">
          {items.map(item => (
            <ItemCard key={item.id} item={item} section={sectionId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;