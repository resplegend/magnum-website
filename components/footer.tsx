import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image src="/images/image.png" alt="Magnum PA Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">Magnum PA</span>
                <span className="text-xs font-semibold text-primary">Blueprint Claims</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">Orlando Public Adjusters serving all of Florida</p>
            <div className="relative h-20 w-40">
              <Image src="/images/image.png" alt="FAPIA Member" fill className="object-contain" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/claims" className="text-muted-foreground hover:text-primary">
                  Type of Claims
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#residential" className="text-muted-foreground hover:text-primary">
                  Residential Claims
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-muted-foreground hover:text-primary">
                  Commercial Claims
                </Link>
              </li>
              <li>
                <Link href="/claims" className="text-muted-foreground hover:text-primary">
                  Denied Claims
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
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
                <Link href="/contact" className="text-primary hover:underline">
                  Schedule Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Magnum PA Blueprint Claims. All rights reserved.</p>
          <p className="mt-2">Licensed Public Adjusters in Florida since 2014</p>
        </div>
      </div>
    </footer>
  )
}
