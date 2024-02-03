import VideoDTO from "./Video.dto";

export default interface MovieDTO {
  title: string;
  poster?: string;
  video: VideoDTO;
}
