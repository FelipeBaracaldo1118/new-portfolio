import React from 'react';
import './RadialGradienBackground.css'; // Importa su propio CSS

const RadialGradientBackground = ({ className = '', variant = 'default' }) => {
  return (
    <div className={`radial-gradient-bg ${variant} ${className}`} />
  );
};

export default RadialGradientBackground;
