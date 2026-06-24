import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service — AI AFLAT Publisher",
  description:
    "Terms of service for AI AFLAT Publisher, the internal tool used to schedule and publish AI AFLAT content to its own social media accounts.",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-navy-light min-h-screen">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
            Terms of Service — AI AFLAT Publisher
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: 24 June 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p>
              AI AFLAT Publisher (&ldquo;the App&rdquo;) is a private, internal tool used by the AI AFLAT podcast to schedule and publish its own content to its own social media accounts. By using the App you agree to these terms.
            </p>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Purpose</h2>
              <p>
                The App lets the operator upload and schedule their own videos to their own connected accounts (including TikTok) via the platforms&rsquo; official APIs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Acceptable use</h2>
              <p>
                The App may be used only to publish content that the operator owns or is authorized to publish, in compliance with each platform&rsquo;s terms and community guidelines (including TikTok&rsquo;s Terms of Service and Community Guidelines).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">No warranty</h2>
              <p>
                The App is provided &ldquo;as is&rdquo;, without warranty of any kind. The operator is responsible for the content they publish and for compliance with applicable laws and platform rules.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Limitation of liability</h2>
              <p>
                The App&rsquo;s authors are not liable for any damages arising from use of the App, including failed uploads, scheduling errors, or platform actions on published content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Third-party platforms</h2>
              <p>
                The App interacts with third-party APIs (e.g., TikTok). Use of those platforms is subject to their own terms. The App is not affiliated with or endorsed by those platforms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Contact</h2>
              <p>
                <a href="mailto:razvanzlavog@gmail.com" className="text-cyan hover:text-cyan/80 transition-colors">
                  razvanzlavog@gmail.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
