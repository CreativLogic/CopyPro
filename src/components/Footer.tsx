"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-accent-foreground">C</span>
              </div>
              <span className="text-xl font-bold electric-text">CopyPro</span>
            </div>
            <p className="text-muted-foreground">
              Professional copywriting and email marketing services that drive real results for your business.
            </p>
            <div className="flex space-x-4">
              {['📧', '📱', '💼', '🔗'].map((icon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 glow-hover border-accent/30 hover:border-accent"
                >
                  <span className="text-lg">{icon}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-accent transition-colors">Email Marketing</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Sales Pages</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Website Copy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Ad Copy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Content Strategy</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Templates</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 hello@copypro.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Business Ave, Suite 100</p>
              <p>🌐 San Francisco, CA 94105</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 CopyPro. All rights reserved. Made with ⚡ for copywriters.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
