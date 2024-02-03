import { Router } from "express";
import { Server, Path, GET, PathParam } from "typescript-rest";
import "./movies";
import "./uploads";

const v1 = Router();
Server.buildServices(v1);

export default v1;
