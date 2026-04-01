import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { EpisodesSection } from "@/components/sections/episodes"
import { PlatformsSection } from "@/components/sections/platforms"
import { InitiativesSection } from "@/components/sections/initiatives"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { getCommunityStats, getEpisodes } from "@/lib/db"

import { Suspense } from "react"

export const dynamic = "force-dynamic"

export default async function Home() {
  const [stats, episodes] = await Promise.all([
    getCommunityStats(),
    getEpisodes(),
  ])

  return (
    <>
      <Navbar />
      <main>
        <HeroSection communityCount={stats.grandTotal} episodeCount={episodes.length} />
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
