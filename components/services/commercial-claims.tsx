import Image from "next/image"

export function CommercialClaims() {
  return (
    <section id="commercial" className="py-12 md:py-16 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Image */}
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <Image src="/images/commercial-claims/Commercial.png" alt="Commercial Property Damage" fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Commercial Claims</h2>

              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  As a commercial property owner, you have plenty of things to worry about, but getting your claim paid
                  correctly for property damages shouldn't be one of them.
                </p>

                <p>
                  Commercial claims can be more complex than residential, requiring more attention to detail and
                  extensive knowledge of commercial and business policies. Magnum PA will
                  ensure your position in the claim is protected, the best possible outcome is achieved, income
                  interruption, and how to protect your investment in the future. We have experience in significant
                  condominium losses, retail stores, office space, and warehouse losses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
