"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Our services" },
    { href: "/claims", label: "Type of Claims" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-48">
              <Image
                src="/blueprint-logo.png"
                alt="Magnum PA Blueprint Claims"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA and Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-gray-600">Call 8AM-5PM, text anytime</div>
            </div>
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-5 text-sm font-semibold shadow-lg"
            >
              <Link href="/#consultation">(615)-295-1088</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                <Link href="/#consultation">(615)-295-1088</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
