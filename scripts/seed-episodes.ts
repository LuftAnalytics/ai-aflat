import { sql } from "@vercel/postgres";

async function seedEpisodes() {
  // Clear existing episodes and reseed with real data
  await sql`DELETE FROM episodes`;

  const episodes = [
    {
      number: 5,
      title: "Re:structurare - Allow once?",
      description: "Cum AI restructureaza totul si cum sa pregatesti echipa pentru automatizare fara haos",
      spotify_url: "https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL",
      apple_url: "https://podcasts.apple.com/us/podcast/ai-aflat/id1877735682",
      youtube_url: "https://www.youtube.com/@aiaflatpodcast",
    },
    {
      number: 4,
      title: "Ritmul (inca) accelereaza",
      description: "Ce aduc modelele noi si ce inseamna viteza asta pentru business",
      spotify_url: "https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL",
      apple_url: "https://podcasts.apple.com/us/podcast/ai-aflat/id1877735682",
      youtube_url: "https://www.youtube.com/@aiaflatpodcast",
    },
    {
      number: 3,
      title: "Siguranta devine strategie de business",
      description: "De ce securitatea AI nu mai e doar o problema tehnica, ci una de boardroom",
      spotify_url: "https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL",
      apple_url: "https://podcasts.apple.com/us/podcast/ai-aflat/id1877735682",
      youtube_url: "https://www.youtube.com/@aiaflatpodcast",
    },
    {
      number: 2,
      title: "Geopolitica si avantaj strategic",
      description: "Cum geopolitica AI influenteaza business-ul si de ce conteaza pentru Romania",
      spotify_url: "https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL",
      apple_url: "https://podcasts.apple.com/us/podcast/ai-aflat/id1877735682",
      youtube_url: "https://www.youtube.com/@aiaflatpodcast",
    },
    {
      number: 1,
      title: "Anul calului. Calule, mananci ovaz?",
      description: "Primul episod AI AFLAT — de ce facem asta si ce vine",
      spotify_url: "https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL",
      apple_url: "https://podcasts.apple.com/us/podcast/ai-aflat/id1877735682",
      youtube_url: "https://www.youtube.com/@aiaflatpodcast",
    },
    {
      number: 0,
      title: "SAAS brother, where art thou?",
      description: "Episodul pilot — o explorare a peisajului SaaS si AI",
      spotify_url: "https://open.spotify.com/show/62QsfbjV2FjS9wnxvhxpkL",
      apple_url: "https://podcasts.apple.com/us/podcast/ai-aflat/id1877735682",
      youtube_url: "https://www.youtube.com/@aiaflatpodcast",
    },
  ];

  for (const ep of episodes) {
    await sql`
      INSERT INTO episodes (number, title, description, spotify_url, apple_url, youtube_url)
      VALUES (${ep.number}, ${ep.title}, ${ep.description}, ${ep.spotify_url}, ${ep.apple_url}, ${ep.youtube_url})
    `;
    console.log(`Seeded episode ${ep.number}: ${ep.title}`);
  }

  console.log("Done! 5 episodes + 1 pilot seeded.");
}

seedEpisodes().catch(console.error);
