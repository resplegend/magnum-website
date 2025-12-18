import Image from "next/image"

export function ResidentialClaims() {
  return (
    <section id="residential" className="py-16 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Residential Claims</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Handling your residential claim yourself, whether for a burst pipe, slab leak, hail, water, wind, flood,
              lightning, fire, or vehicle impact, can be daunting and cause undue stress and aggravation. Magnum PA
              will ensure your position in the claim is protected, the best possible outcome is
              achieved, and how to protect your investment in the future. We have experience in
              significant residential losses, condominiums, and all types of property damage.
            </p>
          </div>

          {/* Before/After Images */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/commercial-claims/fire-damage.png" alt="Fire Damage" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white font-semibold">Fire Damage</span>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/commercial-claims/water-damage.png" alt="Water Damage" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white font-semibold">Water Damage</span>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/commercial-claims/flood-damage.png" alt="Flood Damage" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-white font-semibold">Flood Damage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
