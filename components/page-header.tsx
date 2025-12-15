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
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white space-y-4">
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
