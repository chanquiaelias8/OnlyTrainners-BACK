import { Request, Response } from 'express';
import { User } from '../../models/User';

const getUsers = async(_req:Request,res:Response)=>{
  try {
      const users = await User.findAll()
      res.status(200).json(users)
  } catch (error:any) {
      res.status(500).json({error:error.message})
  }
}

export default getUsers