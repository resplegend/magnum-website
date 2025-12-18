import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How much do you charge?",
      answer:
        "We work on a contingency fee basis, which is a small percentage of the final settlement. If we don't recover money for you, you owe us nothing.",
    },
    {
      question: "Will hiring a PA slow down my claim?",
      answer:
        "On the contrary, we often expedite the process by providing thorough, professional documentation that speeds up the review process.",
    },
    {
      question: "Can you help me even if my claim has already been filed or denied?",
      answer:
        "Absolutely. We specialize in taking over claims that have been underpaid, delayed, or outright denied by the insurance company.",
    },
    {
      question: "Is a Public Adjuster the same as the adjuster the insurance company sends?",
      answer:
        "No. The insurance company's adjuster works for the insurance company. We work for you. We have no financial incentive to minimize your payout.",
    },
    {
      question: "What types of damage do you handle?",
      answer:
        "We handle all types of property damage including fire, water, wind, hail, flood, storm, mold, lightning, vehicle impact, slab leaks, and more. We work with both residential and commercial properties.",
    },
    {
      question: "How long does the claims process take?",
      answer:
        "The timeline varies depending on the complexity of the claim and the insurance company's response time. However, having a public adjuster often speeds up the process because we ensure all documentation is complete and accurate from the start.",
    },
    {
      question: "Do I need to be present during the inspection?",
      answer:
        "While not always required, we recommend being present or available during the initial inspection so we can discuss your concerns and answer any questions you may have about your property damage.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve all of Florida. We're licensed public adjusters throughout the state and can handle claims anywhere in Florida.",
    },
  ]

  return (
    <section id="faq" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Have questions about working with a public adjuster? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-gray-800 px-4 md:px-6 rounded-lg">
                <AccordionTrigger className="text-left font-semibold hover:text-primary text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8 text-center space-y-3 md:space-y-4 mt-8 md:mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Still have questions?</h3>
            <p className="text-sm md:text-base text-muted-foreground">Contact us today for a free consultation and claim review.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:615-295-1088"
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Call: 615-295-1088
              </a>
              <a
                href="#contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
