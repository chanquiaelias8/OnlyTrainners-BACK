import { Request, Response } from 'express';
import { Plan } from '../../models/Plan';

const getPlan = async(_req:Request,res:Response)=>{
  try {
      const plan = await Plan.findAll()
      res.status(200).json(plan)
  } catch (error:any) {
      res.status(500).json({error:error.message})
  }
}

export default getPlan