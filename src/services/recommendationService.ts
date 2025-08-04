import OpenAI from 'openai';
import type { Product, RecommendationRequest, RecommendationResponse } from '../types';

// Note: In a real application, you should use environment variables and a backend service
// to securely handle API keys. This is for demonstration purposes only.
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true // Only for demo - should use backend in production
});

export class RecommendationService {
  static async getRecommendations(
    request: RecommendationRequest, 
    products: Product[]
  ): Promise<RecommendationResponse> {
    try {
      const productList = products.map(p => 
        `ID: ${p.id}, Name: ${p.name}, Category: ${p.category}, Price: $${p.price}, Description: ${p.description}, Features: ${p.features.join(', ')}`
      ).join('\n');

      const prompt = `
You are a product recommendation expert. Based on the user's preferences, recommend the most suitable products from the following list.

User preferences: "${request.preferences}"
${request.budget ? `Budget: $${request.budget}` : ''}
${request.category ? `Preferred category: ${request.category}` : ''}

Available products:
${productList}

Please respond with a JSON object containing:
1. "recommendedProducts": An array of product IDs (numbers) that best match the user's preferences
2. "reasoning": A brief explanation of why these products were recommended

Focus on matching the user's specific requirements like budget, features, and use case.
Return only the JSON object, no additional text.
`;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 500
      });

      const content = response.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No response from AI service');
      }

      try {
        const parsed = JSON.parse(content) as RecommendationResponse;
        
        // Validate the response structure
        if (!Array.isArray(parsed.recommendedProducts) || typeof parsed.reasoning !== 'string') {
          throw new Error('Invalid response format from AI service');
        }

        // Filter out invalid product IDs
        const validProductIds = products.map(p => p.id);
        parsed.recommendedProducts = parsed.recommendedProducts.filter(id => 
          validProductIds.includes(id)
        );

        return parsed;
      } catch (parseError) {
        console.error('Failed to parse AI response:', content);
        throw new Error('Failed to parse AI response');
      }
    } catch (error) {
      console.error('AI recommendation error:', error);
      
      // Fallback: simple rule-based recommendations
      return this.getFallbackRecommendations(request, products);
    }
  }

  private static getFallbackRecommendations(
    request: RecommendationRequest, 
    products: Product[]
  ): RecommendationResponse {
    let filtered = products.filter(p => p.inStock);

    // Filter by budget if specified
    if (request.budget) {
      filtered = filtered.filter(p => p.price <= request.budget!);
    }

    // Filter by category if specified
    if (request.category) {
      filtered = filtered.filter(p => 
        p.category.toLowerCase().includes(request.category!.toLowerCase())
      );
    }

    // Simple keyword matching
    const keywords = request.preferences.toLowerCase().split(' ');
    const scored = filtered.map(product => {
      const searchText = `${product.name} ${product.description} ${product.features.join(' ')}`.toLowerCase();
      const score = keywords.reduce((acc, keyword) => {
        return acc + (searchText.includes(keyword) ? 1 : 0);
      }, 0);
      return { product, score };
    });

    // Sort by score and price
    scored.sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      return a.product.price - b.product.price;
    });

    const recommendedProducts = scored.slice(0, 3).map(item => item.product.id);

    return {
      recommendedProducts,
      reasoning: `Based on your preferences "${request.preferences}", I found ${recommendedProducts.length} products that match your criteria. ${request.budget ? `Filtered by budget of $${request.budget}. ` : ''}${request.category ? `Filtered by category: ${request.category}. ` : ''}Recommendations are sorted by relevance and price.`
    };
  }
}
