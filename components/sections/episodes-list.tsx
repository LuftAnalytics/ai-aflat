"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart } from "lucide-react"

interface EpisodeData {
  number: number
  title: string
  description: string
  spotify_url: string | null
  apple_url: string | null
  youtube_url: string | null
}

function PlatformIcon({ platform }: { platform: string }) {
  const icons: Record<string, JSX.Element> = {
    spotify: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
    apple: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    youtube: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  }
  return icons[platform] || null
}

function LikeButton({ episodeNumber }: { episodeNumber: number }) {
  const storageKey = `liked-ep-${episodeNumber}`
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(localStorage.getItem(storageKey) === "true")
  }, [storageKey])

  const toggle = () => {
    const next = !liked
    setLiked(next)
    if (next) {
      localStorage.setItem(storageKey, "true")
    } else {
      localStorage.removeItem(storageKey)
    }
  }

  return (
    <button
      onClick={toggle}
      className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-red-400 transition-colors group/like"
      aria-label={liked ? "Retrage like" : "Dă like"}
    >
      <Heart
        className={`h-4 w-4 transition-all ${
          liked
            ? "fill-red-400 text-red-400 scale-110"
            : "group-hover/like:scale-110"
        }`}
      />
      <span className={liked ? "text-red-400" : ""}>
        {liked ? "Îți place" : "Îmi place"}
      </span>
    </button>
  )
}

export function EpisodesList({ episodes }: { episodes: EpisodeData[] }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Extract YouTube video ID from the latest episode
  const latestYoutubeUrl = episodes[0]?.youtube_url
  const latestVideoId = latestYoutubeUrl
    ? new URL(latestYoutubeUrl).searchParams.get("v")
    : null

  return (
    <section
      ref={sectionRef}
      id="episoade"
      className="py-24 sm:py-32 bg-navy-light"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Episoade recente
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Ce s-a întâmplat în AI. Ce contează pentru business.
          </p>
        </div>

        {latestVideoId && (
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-4 text-center">
                ▶ Ultimul episod: <span className="text-cyan">{episodes[0]?.title}</span>
              </h3>
              <div className="relative w-full overflow-hidden rounded-xl border border-border/50" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${latestVideoId}`}
                  title={episodes[0]?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode, index) => {
            const platforms = [
              episode.spotify_url ? "spotify" : null,
              episode.apple_url ? "apple" : null,
              episode.youtube_url ? "youtube" : null,
            ].filter(Boolean) as string[]

            // If no URLs yet, show all platform icons as placeholders
            const displayPlatforms = platforms.length > 0 ? platforms : ["spotify", "apple", "youtube"]

            // Pick first available URL for the "Asculta" link
            const listenUrl = episode.spotify_url || episode.apple_url || episode.youtube_url

            return (
              <article
                key={episode.number}
                className={`group relative rounded-xl bg-navy border-l-4 border-cyan p-6 hover:bg-navy-lighter transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <Badge
                  variant="outline"
                  className="mb-4 border-electric-blue/50 text-electric-blue bg-electric-blue/10"
                >
                  EP {episode.number}
                </Badge>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-cyan transition-colors">
                  {episode.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6">
                  {episode.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {displayPlatforms.map((platform) => (
                      <span key={platform} className="hover:text-foreground transition-colors">
                        <PlatformIcon platform={platform} />
                      </span>
                    ))}
                  </div>

                  {listenUrl ? (
                    <a
                      href={listenUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-cyan text-sm font-medium hover:gap-2 transition-all"
                    >
                      Ascultă
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-cyan/50 text-sm font-medium">
                      În curând
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </div>

                <LikeButton episodeNumber={episode.number} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
