import { useState } from 'react';
import { RecommendationForm } from './components/RecommendationForm';
import { ProductList } from './components/ProductList';
import { RecommendationService } from './services/recommendationService';
import { sampleProducts } from './data/products';
import type { RecommendationRequest, RecommendationResponse } from './types';
import './App.css';

function App() {
  const [recommendations, setRecommendations] = useState<RecommendationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRecommendationRequest = async (request: RecommendationRequest) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await RecommendationService.getRecommendations(request, sampleProducts);
      setRecommendations(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get recommendations');
      console.error('Recommendation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🛍️ AI Product Recommendations</h1>
        <p>Discover the perfect products with AI-powered recommendations</p>
      </header>

      <main>
        <RecommendationForm 
          onSubmit={handleRecommendationRequest}
          isLoading={isLoading}
        />

        {error && (
          <div className="error-message">
            <p>⚠️ {error}</p>
            <p className="error-subtitle">
              Don't worry! We've provided fallback recommendations based on your preferences.
            </p>
          </div>
        )}

        <ProductList 
          products={sampleProducts}
          recommendedIds={recommendations?.recommendedProducts}
          reasoning={recommendations?.reasoning}
        />
      </main>

      <footer className="app-footer">
        <p>Built with React, TypeScript, and OpenAI • Ashwin Kumar 2025</p>
      </footer>
    </div>
  );
}

export default App;
