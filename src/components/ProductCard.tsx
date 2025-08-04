import React from 'react';
import type { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  isRecommended?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isRecommended = false }) => {
  return (
    <div className={`product-card ${isRecommended ? 'recommended' : ''}`}>
      {isRecommended && <div className="recommended-badge">Recommended</div>}
      <img 
        src={product.imageUrl} 
        alt={product.name}
        className="product-image"
        onError={(e) => {
          e.currentTarget.src = `https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`;
        }}
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-features">
          {product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="feature-tag more">+{product.features.length - 3} more</span>
          )}
        </div>
        <div className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>
    </div>
  );
};
