# Testing Guide for AI Product Recommendation System

## Overview
This document provides comprehensive testing instructions for the AI-powered product recommendation system, covering both manual testing and automated approaches.

## Manual Testing Checklist

### 1. Basic Functionality Tests

#### Product Display
- [ ] **Test**: Load the application
- [ ] **Expected**: All 10 products display with proper layout
- [ ] **Verify**: Each product shows image, name, price, description, features, and stock status
- [ ] **Check**: Products are properly centered and aligned

#### Responsive Design
- [ ] **Test**: Resize browser window (Desktop → Tablet → Mobile)
- [ ] **Expected**: Layout adapts smoothly to different screen sizes
- [ ] **Verify**: All text remains readable, buttons accessible
- [ ] **Mobile Test**: Test on actual mobile device if available

### 2. AI Recommendation System Tests

#### Basic AI Integration
- [ ] **Test**: Enter "I want a phone under $500"
- [ ] **Expected**: AI recommendations appear at top, with reasoning
- [ ] **Verify**: Budget Phone X1 ($299) and Google Pixel 8 ($599) should be recommended
- [ ] **Check**: Reasoning explains why these products match

#### Advanced Preference Tests
- [ ] **Test**: "I need a gaming laptop with high performance"
- [ ] **Expected**: Gaming Laptop Pro should be top recommendation
- [ ] **Verify**: Reasoning mentions gaming, performance, RTX graphics

- [ ] **Test**: "Affordable headphones for music"
- [ ] **Expected**: AirPods Pro 2 should be recommended
- [ ] **Verify**: Features like noise cancellation are highlighted

#### Budget Filter Tests
- [ ] **Test**: Set budget to $700, preferences "smartphone"
- [ ] **Expected**: Only phones under $700 recommended
- [ ] **Verify**: iPhone 15 ($799) should NOT appear in recommendations

#### Category Filter Tests
- [ ] **Test**: Select "laptops" category, any preference
- [ ] **Expected**: Only laptop products in recommendations
- [ ] **Verify**: No smartphones or headphones appear

### 3. Error Handling Tests

#### Network/API Failures
- [ ] **Test**: Block internet connection, submit recommendation request
- [ ] **Expected**: Fallback recommendations appear with warning message
- [ ] **Verify**: Application remains functional, no crashes

#### Invalid Input Tests
- [ ] **Test**: Submit empty preference field
- [ ] **Expected**: Submit button disabled until text entered
- [ ] **Verify**: Form validation prevents submission

- [ ] **Test**: Enter extremely long text (500+ characters)
- [ ] **Expected**: Application handles gracefully
- [ ] **Verify**: No UI breaking or performance issues

### 4. User Experience Tests

#### Loading States
- [ ] **Test**: Submit recommendation request
- [ ] **Expected**: Loading spinner appears, button shows "Getting Recommendations..."
- [ ] **Verify**: User knows system is processing

#### Visual Feedback
- [ ] **Test**: Hover over product cards
- [ ] **Expected**: Cards lift slightly with shadow effect
- [ ] **Verify**: Smooth animations, no lag

#### Recommended Product Highlighting
- [ ] **Test**: Get recommendations
- [ ] **Expected**: Recommended products have green border and "Recommended" badge
- [ ] **Verify**: Clear visual distinction from other products

### 5. Content and Data Tests

#### Product Information Accuracy
- [ ] **Test**: Review each product
- [ ] **Expected**: All prices, descriptions, features are logical
- [ ] **Verify**: Images load properly and are relevant

#### AI Reasoning Quality
- [ ] **Test**: Try 5 different preference inputs
- [ ] **Expected**: AI explanations are relevant and helpful
- [ ] **Verify**: Reasoning connects user input to product features

## Test Scenarios with Expected Results

### Scenario 1: Budget-Conscious User
```
Input: "I want a good phone but I'm on a tight budget"
Budget: $400
Category: smartphone

Expected Results:
- Budget Phone X1 ($299) should be top recommendation
- Reasoning should mention affordability and value
- Higher-priced phones should appear in "Other Products" section
```

### Scenario 2: Professional User
```
Input: "I need a laptop for work, presentations, and travel"
Budget: $1500
Category: laptop

Expected Results:
- MacBook Air M3 or Dell XPS 13 should be recommended
- Reasoning should mention portability, battery life, professional use
- Gaming laptop might be mentioned but ranked lower
```

### Scenario 3: Tech Enthusiast
```
Input: "I want the latest technology with premium features"
Budget: Not specified
Category: smartphone

Expected Results:
- Premium Phone Pro ($1199) should be top recommendation
- iPhone 15 and Samsung Galaxy S24 also recommended
- Reasoning should highlight cutting-edge features
```

### Scenario 4: Fallback Testing
```
Input: Any preference (with internet disconnected)

Expected Results:
- Warning message about AI service being unavailable
- Rule-based recommendations still appear
- Application remains fully functional
```

## Performance Testing

### Load Time Tests
- [ ] **Test**: Initial page load
- [ ] **Target**: < 3 seconds on standard broadband
- [ ] **Verify**: Images load progressively

### API Response Tests
- [ ] **Test**: AI recommendation request
- [ ] **Target**: < 10 seconds response time
- [ ] **Verify**: Loading indicator shows during wait

## Accessibility Testing

### Keyboard Navigation
- [ ] **Test**: Navigate using only Tab and Enter keys
- [ ] **Expected**: All interactive elements accessible
- [ ] **Verify**: Focus indicators visible

### Screen Reader Compatibility
- [ ] **Test**: Use browser's accessibility inspector
- [ ] **Expected**: Proper ARIA labels and semantic HTML
- [ ] **Verify**: Alt text on images, form labels

## Browser Compatibility

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] Mobile Chrome
- [ ] Mobile Safari
- [ ] Samsung Internet (if available)

## Security Testing

### API Key Security
- [ ] **Test**: Check browser developer tools
- [ ] **Verify**: API key not exposed in network requests
- [ ] **Note**: In production, this should be handled by backend

### Input Sanitization
- [ ] **Test**: Enter HTML/script tags in preference field
- [ ] **Expected**: No script execution, safe handling

## Automated Testing Setup (Optional)

### Unit Tests
Create test files for:
- `RecommendationService.test.ts`
- `ProductCard.test.tsx`
- `RecommendationForm.test.tsx`

### Example Test Command
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
npm test
```

## Bug Reporting Template

When reporting issues, include:
1. **Steps to reproduce**
2. **Expected behavior**
3. **Actual behavior**
4. **Browser/device information**
5. **Screenshots (if visual issue)**
6. **Console errors (if any)**

## Success Criteria

The application passes testing if:
- ✅ All products display correctly
- ✅ AI recommendations work with OpenAI API
- ✅ Fallback system works without API
- ✅ Responsive design functions on all screen sizes
- ✅ No console errors during normal usage
- ✅ Loading states provide clear user feedback
- ✅ Form validation prevents invalid submissions
- ✅ Visual design is polished and professional

## Quick Test Commands

To quickly test the application:

1. **Start the application**:
   ```bash
   npm run dev
   ```

2. **Test basic functionality**: Enter "phone under $500" and verify results

3. **Test responsiveness**: Resize browser window

4. **Test error handling**: Disconnect internet and try recommendations

5. **Test different categories**: Try "laptop", "headphones", "smartphone"

This comprehensive testing approach ensures the product recommendation system meets all requirements and provides a reliable user experience.
