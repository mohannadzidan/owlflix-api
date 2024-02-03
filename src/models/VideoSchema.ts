import { Schema } from "mongoose";
import VideoDTO from "./dtos/Video.dto";

const VideoSchema = new Schema<VideoDTO>(
  {
    url: { type: String, required: true },
    thumbnail: { type: String, required: true },
    id: { type: String, required: true },
    subtitles: [
      {
        lang: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  },
  { id: false }
);

export default VideoSchema;
