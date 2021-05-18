import { Request, Response } from "express";
import { User } from "../users/users.model";
import { IUser } from '../users/users.interface';

export const signup = (req: Request, res: Response) => {
    const { firstname, lastname, username, email, password } = req.body
    
    const newUser:IUser = new User({
        firstname, lastname, username, email, password
    })
    res.json(newUser)
    newUser.save()
        .then((createdUser) => {
        res.status(201).json(createdUser)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
        })
    })
}