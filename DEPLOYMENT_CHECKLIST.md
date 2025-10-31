# 🚀 Deployment Checklist

## Pre-Deployment Setup

### 1. Volet Account Configuration
- [ ] Create Volet business account at [volet.com](https://volet.com)
- [ ] Configure SCI store with correct URLs:
  - Success URL: `https://yourdomain.com/payment/success`
  - Fail URL: `https://yourdomain.com/payment/failed`
  - Status URL: `https://yourdomain.com/.netlify/functions/voletWebhook`
- [ ] Note down your Volet credentials:
  - Account Email
  - SCI Name
  - SCI Password

### 2. Environment Variables Setup

#### Local Development (.env.local)
```env
VITE_VOLET_ACCOUNT_EMAIL=your-volet-account@example.com
VITE_VOLET_SCI_NAME=your-store-name
VITE_VOLET_SCI_PASSWORD=your-sci-password
NOTIFICATION_EMAIL=support@xdtrading.com
```

#### Netlify Environment Variables
Set these in your Netlify dashboard under Site Settings > Environment Variables:
```env
VITE_VOLET_ACCOUNT_EMAIL=your-volet-account@example.com
VITE_VOLET_SCI_NAME=your-store-name
VITE_VOLET_SCI_PASSWORD=your-sci-password
VOLET_SCI_PASSWORD=your-sci-password
NOTIFICATION_EMAIL=support@xdtrading.com
```

### 3. GitHub Repository Setup
- [ ] Push code to GitHub repository
- [ ] Set up GitHub Secrets for CI/CD:
  - `REACT_APP_VOLET_ACCOUNT_EMAIL`
  - `REACT_APP_VOLET_SCI_NAME`
  - `REACT_APP_VOLET_SCI_PASSWORD`
  - `NOTIFICATION_EMAIL`
  - `NETLIFY_AUTH_TOKEN`
  - `NETLIFY_SITE_ID`

### 4. Netlify Deployment
- [ ] Connect GitHub repository to Netlify
- [ ] Configure build settings:
  - Build Command: `npm run build`
  - Publish Directory: `dist`
  - Node Version: `18`
- [ ] Set environment variables in Netlify dashboard
- [ ] Enable Netlify Functions
- [ ] Test webhook endpoint: `https://yourdomain.com/.netlify/functions/voletWebhook`

## Testing Checklist

### 1. Local Testing
- [ ] Run `npm run dev` - application starts without errors
- [ ] Run `npm run build` - production build succeeds
- [ ] Run `npm run lint` - no linting errors
- [ ] Run `npm run type-check` - no TypeScript errors

### 2. Payment Testing
- [ ] Test course payment flow (use test credentials)
- [ ] Test VIP signals payment flow (all plans)
- [ ] Verify payment success page loads correctly
- [ ] Verify payment failed page loads correctly
- [ ] Test webhook endpoint with test data

### 3. Production Testing
- [ ] Deploy to Netlify staging environment
- [ ] Test all payment flows with real Volet credentials
- [ ] Verify webhook receives and processes payments
- [ ] Test email notifications
- [ ] Verify SSL certificate is active

## Security Checklist

- [ ] All environment variables are properly secured
- [ ] No sensitive data in code or public files
- [ ] HTTPS enforced for all communications
- [ ] Webhook signature verification working
- [ ] Payment data validation implemented

## Performance Checklist

- [ ] Images optimized and compressed
- [ ] Code splitting implemented
- [ ] Lazy loading for heavy components
- [ ] CDN configured for static assets
- [ ] Caching headers properly set

## Monitoring Setup

- [ ] Netlify analytics enabled
- [ ] Error tracking configured
- [ ] Payment monitoring dashboard
- [ ] Uptime monitoring
- [ ] Performance monitoring

## Go-Live Checklist

- [ ] All tests passing
- [ ] Production environment variables set
- [ ] Domain configured and SSL active
- [ ] DNS records updated
- [ ] Backup strategy in place
- [ ] Support contact information updated
- [ ] Documentation updated

---

## 🎯 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📞 Support

If you encounter any issues during deployment:
1. Check the [Volet Integration Guide](VOLET_INTEGRATION.md)
2. Review Netlify function logs
3. Verify environment variable configuration
4. Contact: support@xdtrading.com

---

**Ready for production! 🚀**
