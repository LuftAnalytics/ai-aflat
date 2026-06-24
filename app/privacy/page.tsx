import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — AI AFLAT Publisher",
  description:
    "Privacy policy for AI AFLAT Publisher, the internal tool used to schedule and publish AI AFLAT content to its own social media accounts.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-navy-light min-h-screen">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
            Privacy Policy — AI AFLAT Publisher
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: 24 June 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p>
              AI AFLAT Publisher (&ldquo;the App&rdquo;) is a private, internal tool used by the AI AFLAT podcast to schedule and publish its own video content to its own social media accounts (including TikTok). This policy explains how the App handles data.
            </p>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Who we are</h2>
              <p>
                The App is operated by the owner of the AI AFLAT podcast. Contact:{" "}
                <a href="mailto:razvanzlavog@gmail.com" className="text-cyan hover:text-cyan/80 transition-colors">
                  razvanzlavog@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">What data the App accesses</h2>
              <p>
                When you authorize the App with TikTok, it receives an access token that lets it upload videos to your own TikTok account as private drafts. It accesses only your TikTok access/refresh tokens, basic account info required for the upload, and the video files and captions you choose to publish.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">How data is stored</h2>
              <p>
                All credentials and tokens are stored locally on the user&rsquo;s own computer. The App runs locally and operates no server. No data is sent to third parties other than the official APIs of the platforms you publish to (e.g., TikTok).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">How data is used</h2>
              <p>
                Solely to schedule and upload the user&rsquo;s own content to the user&rsquo;s own accounts. The App does not sell, share, or use data for advertising or analytics.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Data retention and deletion</h2>
              <p>
                Tokens remain on the user&rsquo;s computer until revoked (by deleting the local token file or revoking the App in TikTok settings). Deleting the App removes all locally stored credentials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Your rights</h2>
              <p>
                You may revoke access at any time from TikTok&rsquo;s connected-apps settings or by deleting the local token file. Questions:{" "}
                <a href="mailto:razvanzlavog@gmail.com" className="text-cyan hover:text-cyan/80 transition-colors">
                  razvanzlavog@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground">Changes</h2>
              <p>
                This policy may be updated; the &ldquo;Last updated&rdquo; date reflects the latest version.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
