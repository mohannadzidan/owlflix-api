import VideoDTO from "./Video.dto";

export interface EpisodeDTO {
  no: number;
  video: VideoDTO;
}

export default interface SeriesDTO {
  title: string;
  poster?: string;
  season: number;
  episodes: EpisodeDTO[];
}