import { Request, Response } from "express";
import { Video, VideoAttributes } from "../../models/Video";

const createVideo = async (req: Request, res: Response) => {
  try {
    const {
      url,
      position,
      public: isPublic,
      description,
    }: Omit<VideoAttributes, "idVideo"> & { public: boolean } = req.body;

    const newVideo = await Video.create({
      url,
      position,
      public: isPublic,
      description,
    });

    res.status(201).json(newVideo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el video" });
  }
};

export default createVideo;