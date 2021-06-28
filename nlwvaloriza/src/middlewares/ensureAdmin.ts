import { Request, Response, NextFunction } from "express";
import {getCustomRepository} from "typeorm";
import {UsersRepositories} from "../repositores/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
        //Varifica se usuario admin
    const { user_id } = request;

    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne(user_id)

    const { admin } = await usersRepositories.findOne(user_id);

    if (admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    });

}