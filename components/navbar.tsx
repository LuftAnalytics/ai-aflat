"use client"

import { useState } from "react"
import { LogoWithText } from "./logo"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

const navLinks = [
  { href: "#episoade", label: "Episoade" },
  { href: "#despre", label: "Despre" },
  { href: "#initiative", label: "Inițiative" },
  { href: "#mcp", label: "MCP Marketplace" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1623]/90 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <LogoWithText />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://buymeacoffee.com/aiaflatpodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#FFDD00] hover:text-[#FFDD00]/80 transition-colors"
            >
              <Heart className="h-4 w-4" />
              Susține
            </a>
            <Button
              size="sm"
              className="bg-cyan text-primary-foreground hover:bg-cyan/90 glow-cyan rounded-full px-5"
              asChild
            >
              <a href="https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL" target="_blank" rel="noopener noreferrer">
                Ascultă acum
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light border-t border-border/50">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://buymeacoffee.com/aiaflatpodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-sm font-semibold text-[#FFDD00] hover:text-[#FFDD00]/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="h-4 w-4" />
              Susține AI AFLAT
            </a>
            <Button
              size="sm"
              className="w-full bg-cyan text-primary-foreground hover:bg-cyan/90 glow-cyan rounded-full mt-4"
              asChild
            >
              <a href="https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL" target="_blank" rel="noopener noreferrer">
                Ascultă acum
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
