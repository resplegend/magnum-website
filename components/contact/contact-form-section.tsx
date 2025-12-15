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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-700 rounded-lg overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Column - Info */}
              <div className="bg-slate-700 text-white p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">You Have Questions,</h2>
                  <h2 className="text-3xl font-bold">We Have Answers</h2>
                </div>

                <p className="text-white/90 leading-relaxed">
                  Discover experiences you won't find anywhere else – thoughtfully designed in immense youth the heart
                  of the destination. Soulful stories waiting to be lived.
                </p>

                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-white/80 text-sm">Anantara Oceanfront Resort</p>
                    <p className="text-white/80 text-sm">123 Serenity Bay Road</p>
                    <p className="text-white/80 text-sm">Koh Samui, Thailand 84320</p>
                    <p className="text-white/80 text-sm">Monday–Sunday | 08:00 - 22:00 (local time)</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Social Media</h3>
                    <div className="space-y-1">
                      <p className="text-white/80 text-sm">Instagram</p>
                      <p className="text-white/80 text-sm">LinkedIn</p>
                      <p className="text-white/80 text-sm">Facebook</p>
                      <p className="text-white/80 text-sm">TikTok</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-white/80 text-sm">stay@anantararesort.com</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="text-white/80 text-sm">+66 77 123 456</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white p-8 md:p-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Tell Us What You Need</h3>
                    <p className="text-sm text-muted-foreground mt-2">
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
