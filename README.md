# RAALC Web Application

## Deployment Checklist

### Pre-deployment Steps
1. Run image optimization:
   ```bash
   npm run optimize-images
   ```

2. Build the application:
   ```bash
   npm run build
   ```

3. Test the production build locally:
   ```bash
   npm run preview
   ```

### Environment Setup
1. Create `.env` file based on `.env.example`
2. Configure the following environment variables:
   - `VITE_API_URL`: Your API endpoint
   - `VITE_ENABLE_SERVICE_WORKER`: Set to `true` for production
   - `VITE_EMAIL_SERVICE_ID`: Email service ID for contact form
   - `VITE_EMAIL_TEMPLATE_ID`: Email template ID
   - `VITE_EMAIL_USER_ID`: Email user ID

### Production Optimizations
- [x] Image optimization implemented
- [x] Lazy loading for images
- [x] Service Worker for offline support
- [x] Asset caching
- [x] Bundle splitting
- [x] Security headers

### Deployment Instructions
1. Ensure all environment variables are set
2. Run `npm run build`
3. Deploy the `dist` directory to your hosting provider
4. Configure the following headers on your hosting platform:
   ```
   Cross-Origin-Embedder-Policy: require-corp
   Cross-Origin-Opener-Policy: same-origin
   Cross-Origin-Resource-Policy: same-origin
   X-Content-Type-Options: nosniff
   X-Frame-Options: DENY
   X-XSS-Protection: 1; mode=block
   Cache-Control: public, max-age=31536000, immutable
   ```

### Post-deployment Checklist
1. Verify all images are loading correctly
2. Test contact form functionality
3. Verify service worker registration
4. Check offline functionality
5. Test on multiple browsers and devices
6. Verify all API endpoints are working
7. Run performance tests (Lighthouse)

## Development

### Prerequisites
- Node.js >= 14
- npm >= 6

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run optimize-images`: Optimize images for production

### Project Structure
```
raalc/
├── public/
│   ├── images/
│   │   └── optimized/
│   └── sw.js
├── src/
│   ├── components/
│   ├── pages/
│   └── main.jsx
└── package.json
``` 