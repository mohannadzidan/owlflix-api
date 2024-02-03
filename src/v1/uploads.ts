import { Router } from "express";
import { Server, Path, GET, PathParam } from "typescript-rest";
import MovieDTO from "../models/dtos/Movie.dto";
import Movie from "../models/Movie.model";
import minio from "../config/minio";
import { nanoid } from "nanoid";

@Path("/uploads")
class Movies {
  @Path("presigned")
  @GET
  async getPresignedUrl(): Promise<{ url: string; uploadUrl: string, id: string }> {
    const id = nanoid();
    const uploadUrl = await minio.presignedPutObject(
      "uploads",
      id,
      24 * 60 * 60
    );
    const [_, sign] = uploadUrl.split("?", 2);
    const url = `/uploads/${id}`;
    return {
      id,
      url,
      uploadUrl: `${url}?${sign}`,
    };
  }
}

export default Movies;
