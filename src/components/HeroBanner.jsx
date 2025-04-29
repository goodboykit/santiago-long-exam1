import React from 'react';

const HeroBanner = ({
  image,
  title,
  subtitle,
  ctaText,
  ctaLink
}) => (
  <section
    className="hero-banner"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="hero-overlay">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="hero-button">
            {ctaText}
          </a>
        )}
      </div>
    </div>
  </section>
);

export default HeroBanner;
