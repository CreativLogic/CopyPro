"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  const [typedText, setTypedText] = useState('')
  const fullText = "Words That Convert. Stories That Sell."

  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="electric-gradient text-primary-foreground mb-4 float-animation">
                Professional Copywriting Services
              </Badge>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
                <span className="cursor-glow">{typedText}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto slide-in-up">
                Transform your business with compelling copy that drives conversions, builds trust, and grows your revenue through strategic email marketing campaigns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-in-up">
              <Button
                size="lg"
                className="glow-hover electric-gradient text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center float-animation">
          <span className="text-2xl">✍️</span>
        </div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center float-animation" style={{animationDelay: '1s'}}>
          <span className="text-xl">📧</span>
        </div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center float-animation" style={{animationDelay: '2s'}}>
          <span className="text-xl">📈</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 electric-text">About CopyPro</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in crafting high-converting copy and email marketing campaigns that turn prospects into customers and customers into brand advocates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <CardTitle className="text-accent">Strategic Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every piece of copy is crafted with your specific audience and conversion goals in mind.
                </p>
              </CardContent>
            </Card>

            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle className="text-accent">Data-Driven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use analytics and A/B testing to continuously optimize your campaigns for maximum ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="navy-gradient border-accent/20 glow-hover">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle className="text-accent">Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get high-quality copy delivered on time, every time, without compromising on quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 electric-text">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive copywriting solutions to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((service, index) => (
              <Card key={index} className="navy-gradient border-accent/20 glow-hover group">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <CardTitle className="text-accent">{service.title}</CardTitle>
                  <Badge className="electric-gradient text-primary-foreground w-fit">
                    {service.price}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 electric-text">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results for real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((study, index) => (
              <Card key={index} className="navy-gradient border-accent/20 glow-hover">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold electric-text mb-2">{study.metric}</div>
                    <Badge className="electric-gradient text-primary-foreground">
                      {study.label}
                    </Badge>
                  </div>
                  <CardTitle className="text-accent text-center">{study.company}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-medium mb-2">{study.result}</p>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card via-background to-card">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-5xl font-bold electric-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's create copy that converts and email campaigns that drive real results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="glow-hover electric-gradient text-primary-foreground px-12 py-6 text-xl font-semibold"
              >
                Get Your Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground px-12 py-6 text-xl"
              >
                View Pricing
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Free revisions</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✓</span>
                <span>Expert support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 electric-text">Get In Touch</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="font-semibold text-accent">Email</h3>
              <p className="text-muted-foreground">hello@copypro.com</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-accent">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold text-accent">Response Time</h3>
              <p className="text-muted-foreground">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
