import React from 'react';
import { useParams } from 'react-router-dom';
import uniforms from '../data/uniform'; 
import schoolMerch from '../data/schoolMerch';
import ItemCard from '../components/ItemCard';

const Section = () => {
  const { sectionId } = useParams();
  const items = sectionId === 'uniforms' ? uniforms : schoolMerch;
  const title = sectionId === 'uniforms' ? 'Uniforms' : 'School Merch';

  return (
    <div>
      <h1 style={{ padding: '2rem' }}>{title}</h1>
      <div className="item-grid">
        {items.map(item => (
          <ItemCard key={item.id} item={item} section={sectionId} />
        ))}
      </div>
    </div>
  );
};

export default Section;
