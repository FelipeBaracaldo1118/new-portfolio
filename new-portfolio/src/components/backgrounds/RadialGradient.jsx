import React from 'react';
import './RadialGradienBackground.css';

const variants = {
  hero: [
    {
      top: '-100px',
      left: '-100px',
      width: '400px',
      height: '400px',
      colors: [
        { color: 'rgba(119, 251, 39, 0.3)', stop: '0%' },
        { color: 'transparent', stop: '60%' },
      ],
      blur: '100px',
      opacity: 0.5,
    },
    {
      bottom: '-120px',
      right: '-80px',
      width: '300px',
      height: '300px',
      colors: [
        { color: 'rgba(210, 255, 114, 0.3)', stop: '0%' },
        { color: 'transparent', stop: '70%' },
      ],
      blur: '80px',
      opacity: 0.4,
    },
  ],
};

const RadialGradientBackground = ({ variant = 'hero', gradients = [] }) => {
  const activeGradients = variant === 'custom' ? gradients : variants[variant] || [];

  const generateGradient = (colors) => {
    const stops = colors.map(({ color, stop }) => `${color} ${stop}`).join(', ');
    return `radial-gradient(circle at center, ${stops})`;
  };

  return (
    <div className="radial-gradient-container">
      {activeGradients.map((g, index) => (
        <div
          key={index}
          className="radial-gradient"
          style={{
            top: g.top,
            left: g.left,
            bottom: g.bottom,
            right: g.right,
            width: g.width,
            height: g.height,
            background: generateGradient(g.colors),
            filter: `blur(${g.blur})`,
            opacity: g.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
