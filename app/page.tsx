import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { EpisodesSection } from "@/components/sections/episodes"
import { PlatformsSection } from "@/components/sections/platforms"
import { InitiativesSection } from "@/components/sections/initiatives"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

import { Suspense } from "react"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<div className="py-24 sm:py-32 bg-navy-light" />}>
          <EpisodesSection />
        </Suspense>
        <PlatformsSection />
        <InitiativesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
