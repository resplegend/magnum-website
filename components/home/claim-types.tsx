import Image from "next/image"
import Link from "next/link"

const claimTypes = [
  { name: "Fire Damage", href: "/fire-damage", image: "fire-damage.png" },
  { name: "Water Damage", href: "/water-damage", image: "water-damage.png" },
  { name: "Wind Damage", href: "/wind-damage", image: "wind-damage.png" },
  { name: "Hail Damage", href: "/hail-damage", image: "hail-damage.png" },
  { name: "Mold Damage", href: "/mold-damage", image: "mold-damage.png" },
  { name: "Flood Damage",  href: "/flood-damage", image: "flood-damage.png" },
  { name: "Storm Damage",  href: "/storm-damage", image: "storm-damage.png" },
  { name: "Denied Claims",  href: "/denied", image: "denied-claims.png" },
  { name: "Vehicle Impact",  href: "/vehicle-impact", image: "Vehicle-Impact.png" },
  { name: "Commercial",  href: "/commercial", image: "Commercial.png" },
  { name: "Slab Leaks",  href: "/slab-leaks", image: "Slab-Leaks.png" },
  { name: "Lightning", href: "/lightning", image: "Lightning.png" },
]

export function ClaimTypes() {
  return (
    <section id="claims" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Insurance Claims EXPERTS that work for YOU!
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {claimTypes.map((claim) => (
            <Link
              key={claim.name}
              href={claim.href}
              className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <Image alt={claim.name} src={`/images/commercial-claims/${claim.image}`} width={100} height={100} />
              <span className="text-sm font-medium text-center text-foreground">{claim.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
