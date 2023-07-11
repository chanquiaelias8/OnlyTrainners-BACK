import { User, UserAttributes } from "../../models/User"
import {Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
    try {
      const {
        userName,
        firstName,
        lastName,
        email,
        password,
        Birthdate,
        nationality,
        sex,
        typeUser,
      }: UserAttributes = req.body;

      const haduserName =await User.count({where:{userName}})
      if(haduserName>0) return res.status(400).json({error:"usuario ya existe"})
      const hadmail= await User.count({where:{email}})
      if (hadmail>0) return res.status(400).json({error:"email ya existe"})
      //formato de la fecha en el objeto JSON y utiliza el formato "YYYY-MM-DD". 
      const birthdated= new Date(Birthdate)
  
      const newUser = await User.create({
        userName,
        firstName,
        lastName,
        email,
        password,
        Birthdate:birthdated,
        nationality,
        sex,
        typeUser,
      })
      const newUserWithoutPassword = {
        ...newUser.toJSON(),
        password: undefined,
      };      
      console.log(newUserWithoutPassword)
      res.status(201).json(newUserWithoutPassword);
    } catch (error:any) {
        console.log(error)
      res.status(500).json({ error: error.message });
    }
  }

  export default createUser