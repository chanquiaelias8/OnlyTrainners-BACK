import { Plan,PlanAttributes } from "../../models/Plan";
import { Request,Response } from "express";

const createplan =async (req:Request, res:Response) => {
    try {
        const {
            title,
            privateDescription,
            publicDescription,
            price,
            type,
            tags
        }: PlanAttributes=req.body


        const newPlan = await Plan.create({
            title,
            privateDescription,
            publicDescription,
            price,
            type,
            tags,
            
        })

        res.status(200).json(newPlan)
        
    } catch (error) {
        
    }
    
}