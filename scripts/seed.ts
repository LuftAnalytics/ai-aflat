import { sql } from "@vercel/postgres";

async function seed() {
  // Create episodes table
  await sql`
    CREATE TABLE IF NOT EXISTS episodes (
      id SERIAL PRIMARY KEY,
      number INTEGER NOT NULL UNIQUE,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      published_at DATE,
      spotify_url TEXT,
      apple_url TEXT,
      youtube_url TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  console.log("Created episodes table");

  // Seed with existing episodes
  const episodes = [
    {
      number: 6,
      title: "Modelele care schimbă regulile",
      description:
        "Ce aduce nou GPT-4.5, Claude 3.5 și ce înseamnă pentru business",
      spotify_url: null,
      apple_url: null,
      youtube_url: null,
    },
    {
      number: 5,
      title: "Când AI restructurează totul",
      description:
        "Cum să pregătești echipa pentru automatizare fără haos",
      spotify_url: null,
      apple_url: null,
      youtube_url: null,
    },
    {
      number: 4,
      title: "Promptul perfect nu există",
      description:
        "De ce contextul bate tehnicile de prompt engineering",
      spotify_url: null,
      apple_url: null,
      youtube_url: null,
    },
  ];

  for (const ep of episodes) {
    await sql`
      INSERT INTO episodes (number, title, description, spotify_url, apple_url, youtube_url)
      VALUES (${ep.number}, ${ep.title}, ${ep.description}, ${ep.spotify_url}, ${ep.apple_url}, ${ep.youtube_url})
      ON CONFLICT (number) DO UPDATE SET
        title = EXCLUDED.title,
        description = EXCLUDED.description,
        spotify_url = EXCLUDED.spotify_url,
        apple_url = EXCLUDED.apple_url,
        youtube_url = EXCLUDED.youtube_url
    `;
    console.log(`Seeded episode ${ep.number}`);
  }

  console.log("Done!");
}

seed().catch(console.error);
