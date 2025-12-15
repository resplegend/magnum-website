import Link from "next/link"
import { ClaimTypeIcon } from "@/components/claim-type-icon"

const claimTypes = [
  { name: "Fire Damage", icon: "fire", href: "/claims#fire" },
  { name: "Water Damage", icon: "water", href: "/claims#water" },
  { name: "Wind Damage", icon: "wind", href: "/claims#wind" },
  { name: "Hail Damage", icon: "hail", href: "/claims#hail" },
  { name: "Mold Damage", icon: "mold", href: "/claims#mold" },
  { name: "Flood Damage", icon: "flood", href: "/claims#flood" },
  { name: "Storm Damage", icon: "storm", href: "/claims#storm" },
  { name: "Denied Claims", icon: "denied", href: "/claims#denied" },
  { name: "Vehicle Impact", icon: "vehicle", href: "/claims#vehicle" },
  { name: "Commercial", icon: "commercial", href: "/claims#commercial" },
  { name: "Slab Leaks", icon: "slab", href: "/claims#slab" },
  { name: "Lightning", icon: "lightning", href: "/claims#lightning" },
]

export function ClaimTypes() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Insurance Claims EXPERTS that work for YOU!
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {claimTypes.map((claim) => (
            <Link
              key={claim.name}
              href={claim.href}
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow group"
            >
              <ClaimTypeIcon type={claim.icon} />
              <span className="text-center font-bold text-sm uppercase tracking-wide group-hover:text-primary transition-colors">
                {claim.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
