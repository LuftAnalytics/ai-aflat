"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Youtube } from "lucide-react"

export function HeroSection({ communityCount, episodeCount }: { communityCount: number; episodeCount: number }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-background" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1623]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="opacity-0 animate-fade-in-up">
          <Badge
            variant="outline"
            className="mb-6 border-cyan/50 text-cyan bg-cyan/10 px-4 py-1.5 text-sm font-medium"
          >
            EPISOD NOU ÎN FIECARE SĂPTĂMÂNĂ
          </Badge>
        </div>

        <h1 className="opacity-0 animate-fade-in-up animation-delay-100">
          <span className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            AI-ul se mișcă rapid.
          </span>
          <span className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight italic mt-2">
            Povestim despre asta.
          </span>
        </h1>

        <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
          Dacă AI AFLAT deja, ajută-i și pe alții să afle.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
          <Button
            size="lg"
            className="bg-cyan text-primary-foreground hover:bg-cyan/90 glow-cyan rounded-full px-8 gap-2"
            asChild
          >
            <a href="https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL" target="_blank" rel="noopener noreferrer">
              <Play className="h-5 w-5" />
              Ascultă episodul curent
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-electric-blue text-foreground hover:bg-electric-blue/10 rounded-full px-8 gap-2"
            asChild
          >
            <a href="https://www.youtube.com/@aiaflatpodcast" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5" />
              Urmărește pe YouTube
            </a>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto opacity-0 animate-fade-in-up animation-delay-400">
          <div className="text-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-cyan">{episodeCount}</div>
            <div className="text-sm text-muted-foreground mt-1">episoade publicate</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-cyan">{communityCount}+</div>
            <div className="text-sm text-muted-foreground mt-1">în comunitate</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-cyan">100%</div>
            <div className="text-sm text-muted-foreground mt-1">gratuit</div>
          </div>
        </div>
      </div>
    </section>
  )
}
