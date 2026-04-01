"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Boxes } from "lucide-react"

export function InitiativesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setMessage("Gata! Te anunțăm la lansare.")
        setEmail("")
      } else {
        const data = await res.json()
        setStatus("error")
        setMessage(data.error || "Ceva nu a mers.")
      }
    } catch {
      setStatus("error")
      setMessage("Ceva nu a mers. Încearcă din nou.")
    }
  }

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
      id="initiative"
      className="py-24 sm:py-32 bg-navy-light"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            Inițiative
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Proiecte care extind misiunea AI AFLAT
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* MCP Marketplace Card */}
          <div
            id="mcp"
            className={`rounded-2xl bg-navy p-8 border border-border/50 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-electric-blue/10 text-electric-blue">
                <Boxes className="h-6 w-6" />
              </div>
              <Badge className="bg-cyan/10 text-cyan border-cyan/30">
                În curând
              </Badge>
            </div>

            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              MCP Marketplace România
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Un director curatorizat de servere MCP testate și relevante pentru business-ul românesc. Găsește unealta potrivită fără să pierzi ore în cercetare.
            </p>

            {status === "success" ? (
              <div className="p-3 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan font-medium text-sm">
                {message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="email@exemplu.ro"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-navy-lighter border-border/50 focus:border-cyan text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-cyan text-primary-foreground hover:bg-cyan/90 whitespace-nowrap"
                >
                  {status === "loading" ? "..." : "Notifică-mă la lansare"}
                </Button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-red-400">{message}</p>
            )}
          </div>

          {/* Community Card */}
          <div
            className={`rounded-2xl bg-navy p-8 border border-border/50 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-3 rounded-xl bg-electric-blue/10 text-electric-blue mb-6 w-fit">
              <Users className="h-6 w-6" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Business mai informat
            </h3>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Schimb de cunoaștere între manageri, fondatori și lideri care urmăresc AI AFLAT. Întrebări reale, răspunsuri din practică.
            </p>

            <Button
              variant="outline"
              className="border-electric-blue text-foreground hover:bg-electric-blue/10"
              asChild
            >
              <a href="https://www.linkedin.com/company/111767602" target="_blank" rel="noopener noreferrer">
                Intră în comunitate
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
