interface ClaimTypeIconProps {
  type: string
}

export function ClaimTypeIcon({ type }: ClaimTypeIconProps) {
  const getIcon = () => {
    switch (type) {
      case "fire":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <path d="M50 25C50 25 40 35 40 45C40 52 44 58 50 58C56 58 60 52 60 45C60 35 50 25 50 25Z" fill="#f97316" />
            <path d="M50 35C50 35 45 40 45 46C45 50 47 53 50 53C53 53 55 50 55 46C55 40 50 35 50 35Z" fill="#fb923c" />
          </svg>
        )
      case "water":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <path d="M35 55L40 45L45 50L50 40L55 48L60 43L65 55H35Z" fill="#3b82f6" />
            <ellipse cx="45" cy="35" rx="8" ry="12" fill="#60a5fa" />
          </svg>
        )
      case "wind":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <path
              d="M25 35H55C60 35 65 40 65 45C65 50 60 55 55 55H30"
              stroke="#0ea5e9"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M25 50H60C65 50 70 55 70 60C70 65 65 70 60 70H35"
              stroke="#38bdf8"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )
      case "hail":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <circle cx="35" cy="30" r="12" fill="#60a5fa" />
            <circle cx="55" cy="35" r="10" fill="#60a5fa" />
            <circle cx="45" cy="55" r="6" fill="#3b82f6" />
            <circle cx="60" cy="60" r="6" fill="#3b82f6" />
            <circle cx="35" cy="65" r="6" fill="#3b82f6" />
          </svg>
        )
      case "mold":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <circle cx="40" cy="45" r="12" fill="#22c55e" opacity="0.7" />
            <circle cx="55" cy="50" r="14" fill="#16a34a" opacity="0.7" />
            <circle cx="45" cy="60" r="10" fill="#15803d" opacity="0.7" />
          </svg>
        )
      case "flood":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <path
              d="M20 50C25 45 30 50 35 45C40 50 45 45 50 50C55 45 60 50 65 45C70 50 75 45 80 50V70H20V50Z"
              fill="#0ea5e9"
            />
            <path
              d="M20 60C25 55 30 60 35 55C40 60 45 55 50 60C55 55 60 60 65 55C70 60 75 55 80 60V70H20V60Z"
              fill="#38bdf8"
            />
          </svg>
        )
      case "storm":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <path
              d="M35 30C30 30 25 35 25 40C25 45 30 50 35 50H65C70 50 75 45 75 40C75 35 70 30 65 30H35Z"
              fill="#64748b"
            />
            <path
              d="M45 55L40 70L50 63L45 75"
              stroke="#0ea5e9"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "denied":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#ef4444" strokeWidth="4" />
            <path d="M35 35L65 65" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
          </svg>
        )
      case "vehicle":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <rect x="25" y="40" width="40" height="25" rx="4" fill="#3b82f6" />
            <rect x="30" y="35" width="25" height="15" rx="2" fill="#60a5fa" />
            <circle cx="35" cy="65" r="5" fill="#1e293b" />
            <circle cx="55" cy="65" r="5" fill="#1e293b" />
          </svg>
        )
      case "commercial":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <rect x="30" y="25" width="40" height="50" fill="#3b82f6" />
            <rect x="35" y="30" width="8" height="8" fill="#dbeafe" />
            <rect x="47" y="30" width="8" height="8" fill="#dbeafe" />
            <rect x="59" y="30" width="8" height="8" fill="#dbeafe" />
            <rect x="35" y="42" width="8" height="8" fill="#dbeafe" />
            <rect x="47" y="42" width="8" height="8" fill="#dbeafe" />
            <rect x="59" y="42" width="8" height="8" fill="#dbeafe" />
            <rect x="42" y="60" width="16" height="15" fill="#1e293b" />
          </svg>
        )
      case "slab":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <rect x="25" y="55" width="50" height="15" fill="#64748b" />
            <path
              d="M40 50C45 45 48 40 50 35C52 40 55 45 60 50"
              stroke="#0ea5e9"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )
      case "lightning":
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
            <path d="M55 20L35 50H50L45 80L65 45H50L55 20Z" fill="#fbbf24" />
          </svg>
        )
      default:
        return (
          <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
          </svg>
        )
    }
  }

  return <div className="flex items-center justify-center">{getIcon()}</div>
}
