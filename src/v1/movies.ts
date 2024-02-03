import { Path, GET, PathParam, POST, DELETE, Errors } from "typescript-rest";
import MovieDTO from "../models/dtos/Movie.dto";
import Movie from "../models/Movie.model";
import minio from "../config/minio";

@Path("/movies")
class Movies {
  @GET
  getAll(): Promise<MovieDTO[]> {
    return Movie.find({});
  }

  @Path(":id")
  @GET
  async getById(@PathParam("id") id: string): Promise<MovieDTO> {
    return Movie.findById(id);
  }

  @POST
  async create(body: MovieDTO) {
    return Movie.create(body);
  }

  @Path(":id")
  @DELETE
  async deleteById(@PathParam("id") id: string): Promise<MovieDTO> {
    const movie = await Movie.findById(id);
    if (!movie) throw new Errors.NotFoundError();
    await minio.removeObject("uploads", movie.video.id as string);
    return;
  }
}

export default Movies;
