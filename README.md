# AI Operators Collective Landing Page

A high-converting landing page for AI Operators Collective built with Next.js 15, Tailwind CSS, and TypeScript.

## Features

- **Modern Design**: Pure black background with purple accents
- **Responsive**: Mobile-first design that looks great on all devices
- **Fast**: Built with Next.js 15 for optimal performance
- **Animations**: Smooth fade-in and slide-up animations using Framer Motion
- **Accessible**: Semantic HTML and ARIA labels where needed
- **SEO-Optimized**: Meta tags and structured data

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Mono

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main landing page
└── globals.css         # Global Tailwind styles
```

## Customization

### Update Video URL
In `app/page.tsx`, find the video embed section and replace the `src` attribute:

```tsx
<iframe
  src="YOUR_VIDEO_URL_HERE"
  // ...
/>
```

### Update Brand Colors
Modify colors in `tailwind.config.ts`:
- `#000000` - Black background
- `#7C3AED` - Purple accent
- `#111111` - Dark backgrounds

### Update Copy & Content
All text content is directly in `app/page.tsx`. Feel free to modify:
- Headlines
- Descriptions
- Social proof numbers
- FAQ questions and answers
- Module names

### Update CTA Buttons
Replace `button` click handlers with your actual links:

```tsx
<button onClick={() => window.location.href = 'YOUR_CALENDLY_LINK'}>
  Apply Now
</button>
```

## Performance Tips

1. **Image Optimization**: Replace the emoji photo placeholder with an optimized image using Next.js `Image` component
2. **Video Optimization**: Use a video hosting service (YouTube, Vimeo) instead of embedding
3. **Analytics**: Add Google Analytics or your preferred tracking tool in `layout.tsx`
4. **Fonts**: The Geist fonts are self-hosted for better performance

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to any Node.js hosting platform:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean
- etc.

## License

© 2024 AI Operators Collective. All rights reserved.
