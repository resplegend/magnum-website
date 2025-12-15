import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ResidentialClaims } from "@/components/services/residential-claims"
import { CommercialClaims } from "@/components/services/commercial-claims"

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        backgroundImage="/tropical-background.jpg"
      />
      <ResidentialClaims />
      <CommercialClaims />
      <Footer />
    </main>
  )
}
