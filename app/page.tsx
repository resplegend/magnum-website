import { Hero } from "@/components/home/hero"
import { ClaimTypes } from "@/components/home/claim-types"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { DIYSection } from "@/components/home/diy-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <ClaimTypes />
      <DIYSection />
      <Footer />
    </main>
  )
}
