import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticate(request: Request, response: Response, next: NextFunction){

    //receber o token
    const authToken = request.headers.authorization

    //Validar se o token esta preenchido
    if (!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try{
        //Validar se token é valido
     const { sub } = verify(token,"ff7a604e8bc3e840fb909e40cab1e437") as IPayload;

     request.user_id = sub;

        return next();
    } catch (err){
        return response.status(401).end();
    }


    //Recuperar informação do usuario


}