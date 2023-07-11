import { Plan, PlanAttributes } from "../../models/Plan";
import { Video, VideoAttributes } from "../../models/Video";
import { Request, Response } from "express";

const createPlan = async (req: Request, res: Response) => {
  try {
    const {
      title,
      privateDescription,
      publicDescription,
      price,
      tags,
      videos,
    }: PlanAttributes & { videos: VideoAttributes[] } = req.body;

    // Crear el nuevo plan
    const newPlan = await Plan.create({
      title,
      privateDescription,
      publicDescription,
      price,
      tags,
    });

    // Asociar los videos al plan
    if (videos && videos.length > 0) {
      const videoPromises = videos.map((video) =>
        Video.create({
          idVideo:video.idVideo,
          url: video.url,
          publico: video.publico,
          description: video.description,
        })
      );
      await Promise.all(videoPromises);
    }

    res.status(200).json(newPlan);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el plan" });
  }
};

export default createPlan;