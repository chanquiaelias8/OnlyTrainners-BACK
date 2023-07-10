import { Request,Response } from "express";
import { Video } from "../../models/Video";

const getVideo =async (_req:Request,res:Response) => {
    try {
        const video = await Video.findAll()
       return res.status(200).json(video)
       
    } catch (error:any) {
        res.status(500).json({error:error.message})
       
    }
    
}

export default getVideo