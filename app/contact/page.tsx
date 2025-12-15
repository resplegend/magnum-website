import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactFormSection } from "@/components/contact/contact-form-section"

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <ContactFormSection />
      <Footer />
    </main>
  )
}
