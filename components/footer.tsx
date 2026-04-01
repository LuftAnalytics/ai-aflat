import { LogoWithText } from "./logo"

const navLinks = [
  { href: "#episoade", label: "Episoade" },
  { href: "#despre", label: "Despre" },
  { href: "#initiative", label: "Inițiative" },
  { href: "#mcp", label: "MCP Marketplace" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-navy-light border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <LogoWithText />
            <p className="text-sm text-muted-foreground">
              Ce s-a întâmplat în AI. Ce contează pentru business.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 AI AFLAT · Muzică: Transmission X by Mehul Choudhary (CC BY 3.0)
          </p>
        </div>
      </div>
    </footer>
  )
}
