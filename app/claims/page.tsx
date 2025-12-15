import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ClaimTypes } from "@/components/home/claim-types"
import { UnderpaidDeniedSection } from "@/components/claims/underpaid-denied"

export default function ClaimsPage() {
  return (
    <main>
      <PageHeader
        title="Type of Claims"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Claims", href: "/claims" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ClaimTypes />
          </div>
        </div>
      </section>

      <UnderpaidDeniedSection />

      <Footer />
    </main>
  )
}
