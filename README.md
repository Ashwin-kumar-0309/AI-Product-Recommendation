# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# AI-Powered Product Recommendation System

A modern React TypeScript application that provides intelligent product recommendations using AI. Built as a demonstration of integrating AI APIs with frontend development.

## 🎯 Project Overview

This project demonstrates:
- Modern React development with TypeScript
- AI API integration (OpenAI GPT-3.5-turbo)
- Responsive web design
- Clean, maintainable code architecture

## ✨ Features

- 🤖 **AI-Powered Recommendations**: Integration with OpenAI API for intelligent product suggestions
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎯 **Smart Filtering**: Filter products by budget, category, and preferences
- ⚡ **Fast Performance**: Built with Vite for optimal development and production performance
- 🎨 **Modern UI**: Clean, intuitive interface with smooth animations
- 🛡️ **TypeScript**: Full type safety and enhanced developer experience
- 💫 **Fallback System**: Rule-based recommendations when AI is unavailable

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **AI Integration**: OpenAI API (GPT-3.5-turbo)
- **HTTP Client**: Axios
- **Styling**: Custom CSS with responsive design
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- OpenAI API key (optional - fallback recommendations work without it)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashwin-kumar-0309/AI-Product-Recommendation.git
   cd AI-Product-Recommendation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_actual_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Enter Your Preferences**: Describe what you're looking for in natural language
   - Example: "I want a phone under $500 with a good camera"

2. **Set Optional Filters**: 
   - Budget limit
   - Product category

3. **Get AI Recommendations**: Click "Get Recommendations" to receive personalized suggestions

4. **Browse Results**: View recommended products first, followed by other available items

## Project Structure

```
src/
├── components/          # React components
│   ├── ProductCard.tsx     # Individual product display
│   ├── ProductList.tsx     # Product grid and recommendations
│   └── RecommendationForm.tsx  # User input form
├── data/               # Sample data
│   └── products.ts        # Product catalog
├── services/           # API services
│   └── recommendationService.ts  # OpenAI integration
├── types/              # TypeScript definitions
│   └── index.ts           # Application types
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## API Integration

The application integrates with OpenAI's GPT-3.5-turbo model to provide intelligent recommendations. The AI analyzes user preferences and matches them against the product catalog.

### Security Note

⚠️ **Important**: This demo includes the OpenAI API key in the frontend for simplicity. In production:
- Use a backend service to handle API calls
- Never expose API keys in client-side code
- Implement proper authentication and rate limiting

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Adding Products

Edit `src/data/products.ts` to add or modify products in the catalog.

### Modifying AI Prompts

Update the prompt in `src/services/recommendationService.ts` to customize how the AI analyzes preferences.

### Styling

Each component has its own CSS file for easy customization:
- `ProductCard.css` - Individual product styling
- `ProductList.css` - Grid layout and sections
- `RecommendationForm.css` - Form styling
- `App.css` - Global styles and layout

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## 👨‍💻 Author

**Ashwin Kumar**
- GitHub: [@Ashwin-kumar-0309](https://github.com/Ashwin-kumar-0309)
- Project: [AI Product Recommendation](https://github.com/Ashwin-kumar-0309/AI-Product-Recommendation)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- OpenAI for providing the GPT API
- React team for the excellent framework
- Vite team for the fast build tool
- Unsplash for product images

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
