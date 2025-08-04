export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  inStock: boolean;
}

export interface RecommendationRequest {
  preferences: string;
  budget?: number;
  category?: string;
}

export interface RecommendationResponse {
  recommendedProducts: number[];
  reasoning: string;
}
