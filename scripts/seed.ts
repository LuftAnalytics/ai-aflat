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

  // Create subscribers table
  await sql`
    CREATE TABLE IF NOT EXISTS subscribers (
      id SERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      subscribed_at TIMESTAMP DEFAULT NOW(),
      active BOOLEAN DEFAULT TRUE
    )
  `;

  console.log("Created subscribers table");

  // Create platform_stats table
  await sql`
    CREATE TABLE IF NOT EXISTS platform_stats (
      id SERIAL PRIMARY KEY,
      platform TEXT NOT NULL UNIQUE,
      subscribers INTEGER NOT NULL DEFAULT 0,
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  const stats = [
    { platform: "youtube", subscribers: 45 },
    { platform: "tiktok", subscribers: 17 },
    { platform: "facebook", subscribers: 85 },
    { platform: "linkedin", subscribers: 28 },
    { platform: "buymeacoffee", subscribers: 1 },
  ];

  for (const s of stats) {
    await sql`
      INSERT INTO platform_stats (platform, subscribers)
      VALUES (${s.platform}, ${s.subscribers})
      ON CONFLICT (platform) DO UPDATE SET
        subscribers = EXCLUDED.subscribers,
        updated_at = NOW()
    `;
  }

  console.log("Created and seeded platform_stats table");

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
