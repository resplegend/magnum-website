"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Thank you! We'll contact you soon.")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-blue-700">Get a FREE consultation</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Connect with one of our expert public adjusters for a free claim consultation
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Name" required className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
          <Input
            placeholder="Email"
            type="email"
            required
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Phone"
            type="tel"
            required
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <Input
            placeholder="Florida"
            defaultValue="Florida"
            required
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Zip Code"
            required
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <Select required>
            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue placeholder="Commercial" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Textarea
          placeholder="Tell us about your claim"
          rows={5}
          required
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-base shadow-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  )
}
