import {Request, Response} from 'express';

export const getUsers = (req: Request, res:Response) =>{
    res.json({
        msg: 'getUsers'
    })
}

export const getUser = (req: Request, res:Response) =>{
    const {id} = req.params;
    res.json({
        msg: 'getUser',
        id: id
    })
}

export const createUser = (req: Request, res:Response) =>{
    const {name, lastname, mail, password} = req.body;

    res.json({
        msg: 'user created',
        name,
        lastname,
        mail,
        password
    })
}

export const updateUser = (req: Request, res:Response) =>{
    const {name, lastname, mail, password} = req.body;

    res.json({
        msg: 'updated user',
        name,
        lastname,
        mail,
        password
    })
}

export const deleteUser = (req: Request, res:Response) =>{
    const {id} = req.params;
    res.json({
        msg: 'deleted user',
        id: id
    })
}