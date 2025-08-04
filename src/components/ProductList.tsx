import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../types';
import './ProductList.css';

interface ProductListProps {
  products: Product[];
  recommendedIds?: number[];
  reasoning?: string;
}

export const ProductList: React.FC<ProductListProps> = ({ 
  products, 
  recommendedIds = [], 
  reasoning 
}) => {
  // Sort products to show recommended ones first
  const sortedProducts = [...products].sort((a, b) => {
    const aRecommended = recommendedIds.includes(a.id);
    const bRecommended = recommendedIds.includes(b.id);
    
    if (aRecommended && !bRecommended) return -1;
    if (!aRecommended && bRecommended) return 1;
    return 0;
  });

  const recommendedProducts = sortedProducts.filter(p => recommendedIds.includes(p.id));
  const otherProducts = sortedProducts.filter(p => !recommendedIds.includes(p.id));

  return (
    <div className="product-list">
      {reasoning && recommendedIds.length > 0 && (
        <div className="recommendations-section">
          <div className="section-header">
            <h2>AI Recommendations</h2>
            <div className="reasoning">
              <h4>Why these products?</h4>
              <p>{reasoning}</p>
            </div>
          </div>
          <div className="products-grid">
            {recommendedProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isRecommended={true}
              />
            ))}
          </div>
        </div>
      )}

      {otherProducts.length > 0 && (
        <div className="other-products-section">
          <div className="section-header">
            <h2>{recommendedIds.length > 0 ? 'Other Products' : 'All Products'}</h2>
            <p>Browse our complete collection of products</p>
          </div>
          <div className="products-grid">
            {otherProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isRecommended={false}
              />
            ))}
          </div>
        </div>
      )}

      {products.length === 0 && (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};
