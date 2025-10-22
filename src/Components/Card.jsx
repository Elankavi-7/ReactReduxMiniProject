import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'medium',
  ...props 
}) => {
  const cardClass = `card ${className} ${hover ? 'card-hover' : ''} card-padding-${padding}`;
  
  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`card-content ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>
    {children}
  </div>
);

export default Card;