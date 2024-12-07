import React from 'react';

const cardStyle = {
  display: 'block',
  position: 'relative',
  margin: '0.5rem 0',
  padding: '1rem 1.5rem',
  backgroundColor: 'white',
  border: '1px solid rgba(17, 24, 39, 0.1)',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  width: '100%',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'border-color 0.2s ease'
};

const iconStyle = {
  fontSize: '1.5rem',
  marginBottom: '0.25rem'
};

const titleStyle = {
  fontSize: '1rem',
  fontWeight: 600,
  color: '#111827',
  marginTop: '0.5rem',
  marginBottom: '0.5rem'
};

const descriptionStyle = {
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  color: '#4B5563',
  margin: 0
};

export default function CardGrid({ cards }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      marginTop: '1rem',
      marginBottom: '1rem'
    }}>
      {cards.map(card => (
        <a key={card.title} href={card.link} style={cardStyle}>
          <div style={iconStyle}>
            {card.icon}
          </div>
          <h2 style={titleStyle}>
            {card.title}
          </h2>
          <p style={descriptionStyle}>
            {card.description}
          </p>
        </a>
      ))}
    </div>
  );
} 