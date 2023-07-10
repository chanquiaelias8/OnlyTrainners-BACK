import { Router } from "express";
import createVideo from "../controllers/video/postvideo";
import getVideo from "../controllers/video/getvideos";

const routesVideos = Router()

routesVideos.post("/createvideo", createVideo)

routesVideos.get("/getvideo", getVideo)

export default routesVideos