import { Request, Response } from "express";
import { Video, VideoAttributes } from "../../models/Video";

const createVideo = async (req: Request, res: Response) => {
  try {
    const {
      idEntrenador,
      descPublica,
      descPrivada,
      precio,
      etiquetas,
      video,
    }: VideoAttributes = req.body;
  // }: Omit<VideoAttributes, "idVideo"> & { public: boolean } = req.body;

    const newVideo = await Video.create({
      idEntrenador,
      descPublica,
      descPrivada,
      precio,
      etiquetas,
      video,
    });

    res.status(201).json(newVideo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el video" });
  }
};

export default createVideo;