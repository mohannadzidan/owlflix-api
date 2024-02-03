import Subtitles from "./Subtitles.dto";

export default interface VideoDTO {
  url: string;
  id: string;
  thumbnail: string;
  subtitles: Subtitles[];
}
