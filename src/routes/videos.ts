import { Router } from "express";
import createVideo from "../controllers/video/postvideo";
import getVideo from "../controllers/video/getvideos";

const router = Router()

router.post("/createvideo", createVideo)

router.get("/getvideo", getVideo)