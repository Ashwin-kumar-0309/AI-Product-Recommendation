import React, { useState } from 'react';
import type { RecommendationRequest } from '../types';
import './RecommendationForm.css';

interface RecommendationFormProps {
  onSubmit: (request: RecommendationRequest) => void;
  isLoading: boolean;
}

export const RecommendationForm: React.FC<RecommendationFormProps> = ({ onSubmit, isLoading }) => {
  const [preferences, setPreferences] = useState('');
  const [budget, setBudget] = useState<number | ''>('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preferences.trim()) return;

    const request: RecommendationRequest = {
      preferences: preferences.trim(),
      budget: budget || undefined,
      category: category || undefined
    };

    onSubmit(request);
  };

  const handleReset = () => {
    setPreferences('');
    setBudget('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="recommendation-form">
      <div className="form-header">
        <h2>Get AI-Powered Product Recommendations</h2>
        <p>Tell us what you're looking for and let our AI find the perfect products for you!</p>
      </div>

      <div className="form-group">
        <label htmlFor="preferences">What are you looking for?</label>
        <textarea
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          placeholder="e.g., I want a phone under $500 with a good camera for photography"
          rows={3}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="budget">Budget (optional)</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value ? Number(e.target.value) : '')}
            placeholder="e.g., 500"
            min="0"
            step="10"
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category (optional)</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All categories</option>
            <option value="smartphone">Smartphones</option>
            <option value="laptop">Laptops</option>
            <option value="headphones">Headphones</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-secondary"
          disabled={isLoading}
        >
          Clear
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading || !preferences.trim()}
        >
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              Getting Recommendations...
            </>
          ) : (
            'Get Recommendations'
          )}
        </button>
      </div>
    </form>
  );
};
