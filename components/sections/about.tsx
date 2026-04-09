"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="despre"
      className="py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/20 to-electric-blue/20 blur-xl" />
              <div className="relative rounded-2xl border-2 border-cyan/30 overflow-hidden aspect-[3/4]">
                <Image
                  src="/razvan.jpg"
                  alt="Răzvan Zlăvog"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 448px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-8">
              De ce fac asta
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Oricum consum informație despre AI zilnic — pentru că trebuie, pentru că mă fascinează, pentru că business-ul meu depinde de asta.
              </p>
              <p>
                La un moment dat am realizat că cei din jurul meu nu au acces la aceeași informație filtrată. Nu pentru că nu vor — ci pentru că nu au timpul sau contextul să separe ce contează de ce e hype.
              </p>
              <p>
                Așa a apărut AI AFLAT. Îl fac oricum. Might as well share it.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-xl bg-navy-lighter border-l-4 border-cyan">
              <p className="text-foreground font-medium italic">
                &ldquo;Vreau un mediu de business românesc cât mai bine informat — inevitabil asta înseamnă să beneficiem unii de pe urma cunoașterii celorlalți.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
