import Link from "next/link"

interface PageHeaderProps {
  title: string
  breadcrumbs?: { label: string; href: string }[]
  backgroundImage?: string
}

export function PageHeader({ title, breadcrumbs, backgroundImage }: PageHeaderProps) {
  return (
    <div
      className="relative h-64 flex items-center justify-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        imageRendering: "high-quality",
      }}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/30 z-0" />}
      <div className="container mx-auto px-4 text-center text-white space-y-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {breadcrumbs && (
          <nav className="flex items-center justify-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                <Link href={crumb.href} className="hover:text-accent transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}
