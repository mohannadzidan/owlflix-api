import VideoDTO from "./Video.dto";
import ID from "../helpers/id";

interface ContinueWatchingBase {
  type: string;
  elapsed: number;
  total: number;
  video: VideoDTO;
  show: ID<{}>["_id"];
  title: string;
  poster?: string;
}

export interface ContinueWatchingMovieDTO extends ContinueWatchingBase {
  type: "movie";
}

export interface ContinueWatchingEpisodeDTO extends ContinueWatchingBase {
  type: "episode";
  no: number;
  season: number;
}

type ContinueWatching = ContinueWatchingMovieDTO | ContinueWatchingEpisodeDTO;

export default ContinueWatching;
