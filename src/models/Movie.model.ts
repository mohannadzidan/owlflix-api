import { Schema, model } from "mongoose";
import VideoSchema from "./VideoSchema";

const MovieSchema = new Schema({
  title: { type: String, required: true },
  poster: { type: String },
  video: VideoSchema,
});

const Movie = model("Movie", MovieSchema);

export default Movie;
