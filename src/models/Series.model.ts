import { Schema, model } from "mongoose";
import SeriesDTO, { EpisodeDTO } from "./dtos/Series.dto";
import  VideoSchema  from "./VideoSchema";

const EpisodeSchema = new Schema<EpisodeDTO>({
  no: { type: Number, required: true },
  video: VideoSchema,
});
const SeriesSchema = new Schema<SeriesDTO>({
  title: { type: String, required: true },
  poster: { type: String },
  season: { type: Number, required: true },
  episodes: [EpisodeSchema],
});
const Series = model("Series", SeriesSchema);

export default Series;
