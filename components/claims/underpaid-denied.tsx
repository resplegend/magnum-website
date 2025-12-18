import Image from "next/image"

export function UnderpaidDeniedSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 md:p-12 shadow-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Underpaid or Denied Claims</h2>

            <p className="text-center text-muted-foreground leading-relaxed">
              When your insurance claim is underpaid or outright denied, it can feel like you're fighting an uphill
              battle. Insurance companies have teams of adjusters and lawyers working to minimize payouts, but you don't
              have to face them alone. Our experienced public adjusters will review your policy, reassess your damages,
              and fight to get you the settlement you're entitled to. We'll handle all negotiations and paperwork,
              giving you peace of mind that your claim is in expert hands.
            </p>

            <div className="text-center pt-4">
              <a
                href="tel:615-295-1088"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Call Now: 615-295-1088
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
