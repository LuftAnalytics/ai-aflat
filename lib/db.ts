import { sql } from "@vercel/postgres";

export interface Episode {
  id: number;
  number: number;
  title: string;
  description: string;
  published_at: string;
  spotify_url: string | null;
  apple_url: string | null;
  youtube_url: string | null;
  created_at: string;
}

export async function getEpisodes(): Promise<Episode[]> {
  const { rows } = await sql<Episode>`
    SELECT * FROM episodes ORDER BY number DESC
  `;
  return rows;
}

export async function getLatestEpisodes(limit = 3): Promise<Episode[]> {
  const { rows } = await sql<Episode>`
    SELECT * FROM episodes ORDER BY number DESC LIMIT ${limit}
  `;
  return rows;
}
