export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Magnum PA</h2>
          </div>
          <div className="space-y-6 leading-relaxed text-lg text-muted-foreground">
            <p>
              Magnum PA was started in 2025 after the primary adjuster, Craig McGoniale, grew sick of working for the
              insurance company and seeing insureds taken advantage of by insurance companies, and agents selling on
              price. Insureds would think they were covered, but the fine print in the insurance contract would cause
              them to be out of pocket more than their deductible. He has been licensed in Florida since 2014.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg space-y-4 my-8">
              <p className="text-foreground font-semibold text-xl">
                At Magnum PA, we believe that when disaster strikes, you deserve a fair and complete recovery.
              </p>

              <p>
                Insurance policies are complex, and the system is designed for the insurance company's benefit, not
                yours. Our mission is to level the playing field. As licensed Public Adjusters, we have the technical
                expertise and negotiation skills to interpret policies, document every dollar of damage, and
                vigorously negotiate on your behalf.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Our Commitment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">✓</span>
                    <span>Work exclusively for you, not the insurance company</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">✓</span>
                    <span>Maximize your claim settlement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">✓</span>
                    <span>Handle all paperwork and negotiations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">✓</span>
                    <span>Only get paid when you get paid</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Our Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">•</span>
                    <span>Licensed since 2014</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">•</span>
                    <span>Residential & commercial expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">•</span>
                    <span>All disaster types handled</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-bold">•</span>
                    <span>Serving all of Florida</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
