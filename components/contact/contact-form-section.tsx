"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Thank you for contacting us! We'll be in touch soon.")
  }

  return (
    <section id="contact" className="py-12 md:py-16 bg-white dark:bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-700 rounded-lg overflow-hidden shadow-xl">
            <div className="flex flex-col md:grid md:grid-cols-2">
              {/* Left Column - Info */}
              <div className="bg-slate-700 text-white p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold">You Have Questions,</h2>
                  <h2 className="text-2xl md:text-3xl font-bold">We Have Answers</h2>
                </div>

                <p className="text-white/90 leading-relaxed text-sm md:text-base">
                  At Magnum PA, we're here to help you navigate the complex world of insurance claims. Whether you're dealing with property damage, a denied claim, or need guidance on your policy, our experienced team is ready to assist you.
                </p>

                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-semibold mb-2">Service Area</h3>
                    <p className="text-white/80 text-sm">Serving all of Florida</p>
                    <p className="text-white/80 text-sm">Licensed Public Adjusters</p>
                    <p className="text-white/80 text-sm">Since 2014</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="text-white/80 text-sm">Call 8AM-5PM, text anytime</p>
                    <p className="text-white/80 text-sm font-semibold text-lg mt-2">(615)-295-1088</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Why Choose Us</h3>
                    <ul className="space-y-1 text-white/80 text-sm">
                      <li>• Work exclusively for you</li>
                      <li>• Maximize your claim settlement</li>
                      <li>• Only get paid when you get paid</li>
                      <li>• Licensed since 2014</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 lg:p-12">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">Tell Us What You Need</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-2">
                      Our team is ready to assist you with every detail, big or small.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" required />
                      <Input placeholder="Last Name" required />
                    </div>

                    <Input placeholder="Email Address" type="email" required />
                    <Input placeholder="Phone Number" type="tel" required />

                    <Textarea placeholder="Message" rows={5} required />

                    <div className="text-xs text-muted-foreground">
                      By clicking submit, I agree to be contacted by Magnum PA for marketing purposes.
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
