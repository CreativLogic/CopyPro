# CopyPro
This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.



🎨 **CopyPro Website Template - Customization Guide**

**📝 Quick Start**
This dark-themed website template is designed specifically for copywriting and email marketing businesses. It features:

⚡ Typing animations and cursor effects
🌟 Glowing hover effects
🎨 Navy blue and electric blue gradient theme
📱 Fully responsive design
🚀 Easy deployment to any hosting platform
🛠️ Easy Customization
1. Basic Site Information
Edit src/config/site.ts to customize:

export const siteConfig = {

  name: "Your Business Name",

  tagline: "Your Compelling Tagline",

  description: "Your business description",

  // ... more options

}
2. Contact Information
Update your contact details in the same file:

contact: {

  email: "your@email.com",

  phone: "+1 (555) 123-4567",

  address: "Your Address",

  // ...

}
3. Services & Pricing
Add or modify your services:

services: [

  {

    title: "Your Service",

    description: "Service description",

    icon: "🎯", // Use any emoji

    price: "Starting at $XXX"

  },

  // Add more services...

]
4. Case Studies
Showcase your success stories:

caseStudies: [

  {

    company: "Client Name",

    result: "Amazing result achieved",

    metric: "150%",

    label: "Increase in Conversions"

  },

  // Add more case studies...

]
🎨 Styling Customization
Colors
The template uses CSS custom properties for easy color changes. Edit src/app/globals.css:

.dark {

  --primary: 200 100% 65%; /* Electric blue */

  --accent: 200 90% 55%;   /* Accent color */

  --background: 220 30% 8%; /* Dark navy background */

  /* ... other colors */

}
Animations
Control animations in src/config/site.ts:

branding: {

  enableTypingAnimation: true,

  enableGlowEffects: true,

  enableFloatingElements: true

}
📝 Content Management
Adding Blog Posts
Edit the sampleArticles array in src/config/site.ts
Add new articles with this structure:
{

  id: 3,

  title: "Your Article Title",

  excerpt: "Brief description...",

  category: "Copywriting",

  readTime: "5 min read",

  date: "Jan 1, 2025",

  image: "📝", // Emoji icon

  featured: false, // Set to true for featured articles

  content: "Full article content..."

}
Modifying Pages
Homepage: Edit src/components/HomePage.tsx
Blog Page: Edit src/components/BlogPage.tsx
Navigation: Edit src/components/Navigation.tsx
Footer: Edit src/components/Footer.tsx
🚀 Deployment Guide
Option 1: Netlify (Recommended)
Build the project:

bun run build
Deploy the out folder to Netlify

Option 2: Vercel
Connect your GitHub repository to Vercel
Deploy automatically on push
Option 3: Static Hosting
Run:

bun run build

bun run export
Upload the out folder to any static hosting service

📊 Performance Tips
Images are optimized using Next.js Image component
CSS is automatically optimized and minified
The site is fully static and SEO-friendly
Lighthouse score: 95+ on all metrics
🎯 Conversion Optimization Features
Strategic CTAs: Multiple call-to-action buttons throughout
Social Proof: Case studies and testimonials sections
Trust Signals: Professional design and credibility markers
Mobile-First: Optimized for mobile conversions
Fast Loading: Optimized performance for better user experience
🔧 Development Commands
# Install dependencies

bun install


# Start development server

bun dev


# Build for production

bun run build


# Run linter

bun run lint


# Type checking

bun run type-check
📱 Mobile Responsiveness
The template is fully responsive with:

Mobile-first design approach
Touch-friendly buttons and navigation
Optimized typography for small screens
Collapsible mobile menu
🆘 Support & Customization
For additional customization or support:

Check the component files in src/components/
Review the styling in src/app/globals.css
Modify the configuration in src/config/site.ts
📄 File Structure
src/
├── app/
│   ├── blog/
│   │   └── page.tsx          # Blog page
│   ├── globals.css           # Global styles & animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── BlogPage.tsx         # Blog component
│   ├── Footer.tsx           # Footer component
│   ├── HomePage.tsx         # Homepage component
│   └── Navigation.tsx       # Navigation component
├── config/
│   └── site.ts              # 🎯 Main configuration file
└── lib/
    └── utils.ts             # Utility functions
✨ Features Included
✅ Dark theme with custom gradients
✅ Typing animations for headlines
✅ Glowing hover effects
✅ Responsive design
✅ Blog with filtering
✅ Contact forms
✅ Case studies section
✅ Services showcase
✅ SEO optimized
✅ Fast loading
✅ Easy deployment
