# XD Trading Web Application

A modern, high-performance React web application for XD Trading, featuring advanced security, accessibility, and performance optimizations.

## 🚀 Features

### Core Features
- **Modern React 18** with TypeScript for type safety
- **Vite** build tool for fast development and optimized builds
- **Tailwind CSS** for responsive design
- **React Router v7** for client-side routing
- **Netlify Functions** for serverless backend functionality

### Security Enhancements
- ✅ **Input Sanitization** - All form inputs are sanitized to prevent XSS attacks
- ✅ **Rate Limiting** - API endpoints are protected against abuse
- ✅ **Environment Variable Protection** - Sensitive data is properly secured
- ✅ **CSRF Protection** - Forms are protected against cross-site request forgery
- ✅ **Error Boundaries** - Comprehensive error handling throughout the app

### Performance Optimizations
- ✅ **Code Splitting** - React.lazy() for route-based code splitting
- ✅ **React.memo()** - Component memoization for expensive components
- ✅ **Service Worker** - Offline functionality and caching
- ✅ **Image Optimization** - WebP format and proper sizing
- ✅ **Bundle Optimization** - Tree shaking and optimized builds

### Accessibility Improvements
- ✅ **ARIA Labels** - Proper accessibility attributes
- ✅ **Skip Navigation** - Keyboard navigation support
- ✅ **Focus Management** - Proper focus handling for modals
- ✅ **Screen Reader Support** - Semantic HTML and proper labeling
- ✅ **Color Contrast** - WCAG compliant color schemes

### User Experience
- ✅ **Loading States** - Skeleton components and spinners
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Form Validation** - Real-time validation with helpful feedback
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Cookie Consent** - GDPR compliant cookie management

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Latest React with concurrent features
- **TypeScript 5.5.3** - Type safety and better developer experience
- **Vite 5.4.2** - Fast build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Router 7.6.1** - Client-side routing
- **Framer Motion 12.18.1** - Animation library
- **Lucide React 0.344.0** - Icon library

### Backend
- **Netlify Functions** - Serverless backend
- **Nodemailer 6.10.1** - Email functionality
- **Rate Limiting** - Custom implementation for API protection

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Email Configuration
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@domain.com
   SMTP_PASS=your-password
   NOTIFICATION_EMAIL=notifications@domain.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🏗️ Project Structure

```
project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ErrorBoundary.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Skeleton.tsx
│   │   └── SkipNavigation.tsx
│   ├── pages/              # Page components (lazy loaded)
│   ├── sections/           # Page sections
│   ├── services/           # Business logic and API calls
│   ├── assets/             # Static assets
│   └── types/              # TypeScript type definitions
├── netlify/
│   └── functions/          # Serverless functions
├── public/                 # Public assets
│   └── sw.js              # Service worker
└── package.json
```

## 🔒 Security Features

### Input Sanitization
All user inputs are sanitized to prevent XSS attacks:
```javascript
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}
```

### Rate Limiting
API endpoints are protected with rate limiting:
```javascript
function checkRateLimit(ip, limit = 5, windowMs = 15 * 60 * 1000) {
  // Implementation details...
}
```

### Error Boundaries
Comprehensive error handling with user-friendly fallbacks:
```typescript
class ErrorBoundary extends Component<Props, State> {
  // Error handling implementation...
}
```

## ⚡ Performance Features

### Code Splitting
Pages are lazy-loaded for better performance:
```typescript
const WhyXDTrading = React.lazy(() => import('./pages/WhyXDTrading'));
```

### Component Memoization
Expensive components are memoized:
```typescript
const Header: React.FC = React.memo(() => {
  // Component implementation...
});
```

### Service Worker
Offline functionality and caching:
```javascript
// sw.js - Service worker implementation
self.addEventListener('fetch', (event) => {
  // Cache-first strategy...
});
```

## ♿ Accessibility Features

### Skip Navigation
Keyboard users can skip to main content:
```typescript
const SkipNavigation: React.FC = () => {
  // Implementation for keyboard navigation...
};
```

### ARIA Labels
Proper accessibility attributes throughout:
```typescript
<button
  aria-label="Cookie-Einstellungen öffnen"
  aria-expanded={mobileMenuOpen}
  aria-controls="mobile-menu"
>
```

### Focus Management
Proper focus handling for modals and dialogs:
```typescript
<div
  role="dialog"
  aria-modal="true"
  aria-label="Mobilmenü"
>
```

## 🧪 Testing

### Recommended Testing Setup
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

### Test Examples
```typescript
// Component testing
import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders header with navigation', () => {
  render(<Header />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
```

## 🚀 Deployment

### Netlify Deployment
1. Connect your repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy automatically on push to main branch

### Environment Variables
Required environment variables for production:
- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP server port
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password
- `NOTIFICATION_EMAIL` - Notification email address

## 📊 Analytics

Google Analytics integration with cookie consent:
```typescript
// Analytics service with privacy compliance
class AnalyticsService {
  public initialize(preferences: CookiePreferences): void {
    // Only initialize if user consents to statistics
    if (preferences.statistics) {
      // Initialize Google Analytics
    }
  }
}
```

## 🔧 Customization

### Styling
The app uses Tailwind CSS with custom design tokens:
```css
:root {
  --primary-blue: #0E6FFF;
  --secondary-blue: #104B8B;
  --dark-blue: #0A1931;
  --accent-yellow: #FFD700;
  --light-blue: #E5F0FF;
}
```

### Components
All components are built with TypeScript and include proper prop validation:
```typescript
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'blue' | 'gray';
  className?: string;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software owned by XD Trading.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using modern web technologies**
