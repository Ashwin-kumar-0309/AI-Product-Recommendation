// Demo testing scenarios for the Product Recommendation System

export const testScenarios = [
  {
    name: "Budget Phone Seeker",
    preferences: "I want a phone under $500 with good camera",
    budget: 500,
    category: "smartphone",
    expectedRecommendations: ["Budget Phone X1", "Google Pixel 8"],
    description: "Should recommend affordable phones within budget"
  },
  {
    name: "Professional User",
    preferences: "I need a laptop for work and presentations",
    budget: 1200,
    category: "laptop",
    expectedRecommendations: ["MacBook Air M3", "Dell XPS 13"],
    description: "Should recommend professional laptops"
  },
  {
    name: "Gaming Enthusiast", 
    preferences: "High performance gaming setup",
    budget: 2000,
    category: "laptop",
    expectedRecommendations: ["Gaming Laptop Pro"],
    description: "Should recommend gaming laptops with high specs"
  },
  {
    name: "Audio Lover",
    preferences: "Best headphones for music and calls",
    budget: 300,
    category: "headphones", 
    expectedRecommendations: ["AirPods Pro 2"],
    description: "Should recommend quality audio products"
  },
  {
    name: "Tech Enthusiast",
    preferences: "Latest technology with premium features",
    budget: undefined,
    category: undefined,
    expectedRecommendations: ["Premium Phone Pro", "iPhone 15"],
    description: "Should recommend flagship devices"
  },
  {
    name: "Budget Conscious",
    preferences: "Good value for money, reliable products",
    budget: 400,
    category: undefined,
    expectedRecommendations: ["Budget Phone X1"],
    description: "Should recommend best value products"
  }
];

export const quickTestPhrases = [
  "I want a phone under $500",
  "Best laptop for students", 
  "Gaming laptop with RTX graphics",
  "Affordable headphones for music",
  "Premium smartphone with best camera",
  "Work laptop that's portable",
  "Budget phone with long battery",
  "High-end device with latest features"
];

// Instructions for manual testing
export const manualTestInstructions = `
Quick Testing Steps:

1. Open the application in your browser
2. Try each test scenario from the testScenarios array
3. Verify that recommendations match expected results
4. Test responsive design by resizing browser
5. Test error handling by disconnecting internet
6. Test form validation with empty inputs
7. Check that images load properly
8. Verify that AI reasoning makes sense

Expected Behavior:
- Products should be centered and well-aligned
- Recommended products appear first with green borders
- AI provides reasoning for recommendations
- Fallback works when AI is unavailable
- Layout is responsive on all screen sizes
`;
