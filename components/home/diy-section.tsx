export function DIYSection() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-card dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6 md:p-8 space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">DIY</h2>

          <p className="text-base md:text-lg leading-relaxed text-center italic text-muted-foreground px-4">
            If your claim has been denied, or you don't have enough money to get the work done, give us a call to get an
            honest opinion of your claim's value and expected results should you decide to hire us.
          </p>

          <div className="text-center">
            <a
              href="tel:615-295-1088"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Call Now: 615-295-1088
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
