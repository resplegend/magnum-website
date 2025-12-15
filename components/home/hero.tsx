import { ConsultationForm } from "./consultation-form"

export function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/tropical-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-white space-y-6 pt-8">
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-white/90">Serving all of Florida</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">Orlando Public Adjusters</h1>
            </div>

            <p className="text-base text-white/95 leading-relaxed max-w-2xl">
              Don't wait until it's too late. The sooner we get involved, the better we can protect your interests.
              Contact us today for a free, no-obligation review of your damage and your policy.
            </p>

            <ul className="space-y-3 text-white pt-2">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base">Professional </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base">Only pay if you get paid</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div id="consultation" className="bg-white rounded-xl shadow-2xl p-8 lg:p-10">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
