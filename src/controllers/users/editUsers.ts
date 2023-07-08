import { Request, Response } from 'express';
import { User } from '../../models/User';

export const changeFirstname =async (req:Request,res:Response) => {
    try {
        const{idUsuario,firstname}= req.body
        if(!idUsuario||!firstname) return res.status(400).json({Error:"id usuario o firstname no fueron resividos"})
        const searchUser = await User.findByPk(idUsuario)
        if(!searchUser) return res.status(400).json({Error:"Usuario no existe"});
        searchUser.firstname = firstname
        await searchUser.save()
        res.status(200).json({...searchUser.toJSON(),password:undefined})
    } catch (error:any) {
        res.status(500).json({error:error.message})
    }
}

export const changeLastname =async (req:Request,res:Response) => {
    try {
        const {idUsuario,lastName} = req.body
        if(!idUsuario||!lastName) return res.status(400).json({Error:"id o lastname no existe"})
        const searchUser = await User.findByPk(idUsuario)
        if(!searchUser)return res.status(400).json({Error:"Usuario no existe"})
        searchUser.lastName = lastName
        await searchUser.save()
        res.status(200).json({...searchUser.toJSON(),password:undefined})
    } catch (error:any) {
        res.status(500).json({error: error.message})
        
    }
}

export const changeEmail = async (req: Request, res: Response) => {
    try {
      const { idUsuario, email } = req.body;
      if (!idUsuario || !email) {
        return res.status(400).json({ Error: "id usuario o email no fueron recibidos" });
      }
  
      const searchUser = await User.findByPk(idUsuario);
      if (!searchUser) {
        return res.status(400).json({ Error: "Usuario no existe" });
      }
  
      searchUser.email = email;
      await searchUser.save();
  
      res.status(200).json({ ...searchUser.toJSON(), password: undefined });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const changePassword = async (req: Request, res: Response) => {
    try {
      const { idUsuario, password } = req.body;
      if (!idUsuario || !password) {
        return res.status(400).json({ Error: "id usuario o password no fueron recibidos" });
      }
  
      const searchUser = await User.findByPk(idUsuario);
      if (!searchUser) {
        return res.status(400).json({ Error: "Usuario no existe" });
      }
  
      searchUser.password = password;
      await searchUser.save();
  
      res.status(200).json({ ...searchUser.toJSON(), password: undefined });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };