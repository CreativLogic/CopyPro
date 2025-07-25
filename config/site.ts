// 🎨 EASY EDIT CONFIGURATION FILE
// Customize your copywriting website by editing the values below

export const siteConfig = {
  // 📝 Basic Site Information
  name: "CopyPro",
  tagline: "Words That Convert. Stories That Sell.",
  description: "Transform your business with compelling copy and high-converting email campaigns",

  // 📧 Contact Information
  contact: {
    email: "hello@copypro.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Ave, Suite 100",
    city: "San Francisco, CA 94105",
    responseTime: "Within 24 hours"
  },

  // 🎯 Hero Section
  hero: {
    mainHeadline: "Words That Convert. Stories That Sell.",
    subHeadline: "Transform your business with compelling copy that drives conversions, builds trust, and grows your revenue through strategic email marketing campaigns.",
    primaryCTA: "Start Your Project",
    secondaryCTA: "View Portfolio"
  },

  // 💼 Services (easily add/edit/remove services)
  services: [
    {
      title: "Email Marketing Campaigns",
      description: "High-converting email sequences that nurture leads and drive sales",
      icon: "📧",
      price: "Starting at $497"
    },
    {
      title: "Sales Pages",
      description: "Persuasive landing pages that convert visitors into customers",
      icon: "🚀",
      price: "Starting at $997"
    },
    {
      title: "Website Copy",
      description: "Compelling website content that builds trust and authority",
      icon: "🌐",
      price: "Starting at $797"
    },
    {
      title: "Ad Copy",
      description: "Attention-grabbing ads for social media and search platforms",
      icon: "📢",
      price: "Starting at $297"
    },
    {
      title: "Product Descriptions",
      description: "Engaging product copy that highlights benefits and drives purchases",
      icon: "🛍️",
      price: "Starting at $197"
    },
    {
      title: "Content Strategy",
      description: "Complete content roadmap aligned with your business goals",
      icon: "📋",
      price: "Starting at $1,497"
    }
  ],

  // 📈 Case Studies/Success Stories
  caseStudies: [
    {
      company: "TechStart Inc.",
      result: "347% increase in email open rates",
      description: "Complete email marketing overhaul resulted in massive engagement boost",
      metric: "347%",
      label: "Open Rate Increase"
    },
    {
      company: "E-Commerce Pro",
      result: "$2.3M additional revenue",
      description: "Sales page optimization drove significant revenue growth",
      metric: "$2.3M",
      label: "Additional Revenue"
    },
    {
      company: "SaaS Solutions",
      result: "89% conversion rate improvement",
      description: "Landing page copy redesign nearly doubled conversions",
      metric: "89%",
      label: "Conversion Boost"
    }
  ],

  // 🎨 About Section
  about: {
    title: "About CopyPro",
    description: "We specialize in crafting high-converting copy and email marketing campaigns that turn prospects into customers and customers into brand advocates.",
    features: [
      {
        title: "Strategic Approach",
        description: "Every piece of copy is crafted with your specific audience and conversion goals in mind.",
        icon: "🎯"
      },
      {
        title: "Data-Driven Results",
        description: "We use analytics and A/B testing to continuously optimize your campaigns for maximum ROI.",
        icon: "📊"
      },
      {
        title: "Fast Turnaround",
        description: "Get high-quality copy delivered on time, every time, without compromising on quality.",
        icon: "⚡"
      }
    ]
  },

  // 📝 Blog Configuration
  blog: {
    title: "The CopyPro Blog",
    description: "Expert insights, proven strategies, and actionable tips to elevate your copywriting and email marketing game.",
    categories: ["All", "Email Marketing", "Copywriting", "Conversion", "Strategy", "Case Studies"],
    newsletterSignup: {
      title: "Never Miss Our Latest Insights",
      description: "Get weekly copywriting tips, email marketing strategies, and exclusive case studies delivered to your inbox.",
      subscriberCount: "15,000+",
      placeholder: "Enter your email address"
    }
  },

  // 🔗 Social Media & Links
  social: {
    email: "mailto:hello@copypro.com",
    phone: "tel:+15551234567",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    instagram: "#"
  },

  // 🎨 Customization Options
  branding: {
    // Primary brand colors (already set in CSS, but documented here)
    primaryColor: "hsl(200, 100%, 65%)", // Electric blue
    accentColor: "hsl(200, 90%, 55%)", // Slightly darker blue
    backgroundColor: "hsl(220, 30%, 8%)", // Dark navy

    // Font settings
    headingFont: "Geist Sans",
    bodyFont: "Geist Sans",

    // Animation preferences
    enableTypingAnimation: true,
    enableGlowEffects: true,
    enableFloatingElements: true
  }
}

// 📄 Sample Blog Articles (easily editable)
export const sampleArticles = [
  {
    id: 1,
    title: "The Psychology Behind High-Converting Email Subject Lines",
    excerpt: "Discover the cognitive triggers that make subscribers click open and how to implement them in your campaigns.",
    category: "Email Marketing",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "📧",
    featured: true,
    content: "Your full article content goes here..."
  },
  {
    id: 2,
    title: "10 Copywriting Formulas That Convert Every Time",
    excerpt: "Master these proven frameworks to write compelling copy that drives action and increases conversions.",
    category: "Copywriting",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    image: "✍️",
    featured: true,
    content: "Your full article content goes here..."
  },
  // Add more articles as needed...
]

export default siteConfig
