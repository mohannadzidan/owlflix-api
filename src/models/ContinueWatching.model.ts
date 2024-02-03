import { Schema, model } from "mongoose";
import ContinueWatching from "./dtos/ContinueWatching.dto";
import { VideoSchema } from "./Movie.model";

const ContinueWatchingSchema = new Schema<ContinueWatching>({
  type: { type: String, enum: ["episode", "movie"], required: true },
  title: { type: String, required: true },
  elapsed: { type: Number, required: true },
  total: { type: Number, required: true },
  video: { type: VideoSchema, required: true },
  show: { type: String, required: true },
  no: {
    type: Number,
    required: function () {
      return this.type === "episode";
    },
  },
  season: {
    type: Number,
    required: function () {
      return this.type === "episode";
    },
  },
  poster: String,
});
const ContinueWatching = model("ContinueWatching", ContinueWatchingSchema);

export default ContinueWatching;