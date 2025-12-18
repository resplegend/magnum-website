import { Hero } from "@/components/home/hero"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ResidentialClaims } from "@/components/services/residential-claims"
import { CommercialClaims } from "@/components/services/commercial-claims"
import { ClaimTypes } from "@/components/home/claim-types"
import { UnderpaidDeniedSection } from "@/components/claims/underpaid-denied"
import { AboutSection } from "@/components/home/about-section"
import { FAQSection } from "@/components/home/faq-section"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { DIYSection } from "@/components/home/diy-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <ResidentialClaims />
      <CommercialClaims />
      <ClaimTypes />
      <UnderpaidDeniedSection />
      <FAQSection />
      <ContactFormSection />
      <DIYSection />
      <Footer />
    </main>
  )
}
