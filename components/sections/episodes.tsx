import { getLatestEpisodes } from "@/lib/db"
import { EpisodesList } from "./episodes-list"

export async function EpisodesSection() {
  const episodes = await getLatestEpisodes(6)

  return <EpisodesList episodes={episodes} />
}
