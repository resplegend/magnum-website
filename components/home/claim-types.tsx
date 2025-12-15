import Image from "next/image"
import Link from "next/link"

const claimTypes = [
  { name: "Fire Damage", href: "/fire-damage" },
  { name: "Water Damage", href: "/water-damage" },
  { name: "Wind Damage", href: "/wind-damage" },
  { name: "Hail Damage", href: "/hail-damage" },
  { name: "Mold Damage", href: "/mold-damage" },
  { name: "Flood Damage",  href: "/flood-damage" },
  { name: "Storm Damage",  href: "/storm-damage" },
  { name: "Denied Claims",  href: "/denied" },
  { name: "Vehicle Impact",  href: "/vehicle-impact" },
  { name: "Commercial",  href: "/commercial" },
  { name: "Slab Leaks",  href: "/slab-leaks" },
  { name: "Lightning", href: "/lightning" },
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
              <Image alt={claim.name} src={`/images/commercial-claims${claim.href}.png`} width={"100"} height={"100"} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
