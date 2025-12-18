import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <a href="#top" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="Magnum PA Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">Magnum PA</span>
              </div>
            </a>
            <p className="text-sm text-muted-foreground">Magnum PA serving all of Florida</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#top" className="text-muted-foreground hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#claims" className="text-muted-foreground hover:text-primary">
                  Type of Claims
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#residential" className="text-muted-foreground hover:text-primary">
                  Residential Claims
                </a>
              </li>
              <li>
                <a href="#commercial" className="text-muted-foreground hover:text-primary">
                  Commercial Claims
                </a>
              </li>
              <li>
                <a href="#claims" className="text-muted-foreground hover:text-primary">
                  Denied Claims
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Call 8AM-5PM, text anytime</li>
              <li>
                <a href="tel:615-295-1088" className="text-xl font-bold text-accent hover:text-accent/80">
                  615-295-1088
                </a>
              </li>
              <li className="pt-2">
                <a href="#contact" className="text-primary hover:underline">
                  Schedule Free Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Magnum PA. All rights reserved.</p>
          <p className="mt-2">Licensed Public Adjusters in Florida since 2014</p>
        </div>
      </div>
    </footer>
  )
}
