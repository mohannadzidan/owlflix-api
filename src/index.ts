//Importing project dependancies that we installed earlier
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import v1 from "./v1/index";
import { setupMinIO } from "./config/minio";
//App Varaibles
dotenv.config();

//intializing the express app
const app = express();

//using the dependancies
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/v1", v1);

//exporting app

const { MONGO_DB, PORT = 80 } = process.env;

async function main() {
  await mongoose.connect(MONGO_DB);
  await setupMinIO();
  app.listen(PORT, async () => {
    console.log(`listening on port ${PORT}`);
  });
}
main();
