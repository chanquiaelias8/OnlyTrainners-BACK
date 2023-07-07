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