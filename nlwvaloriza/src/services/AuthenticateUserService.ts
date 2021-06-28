import {getCustomRepository} from "typeorm";
import { compare } from "bcryptjs";
import { UsersRepositories } from "../repositores/UsersRepositories";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest{
    email: string,
    password: string;
}

class AuthenticateUserService{

    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        //verificar se Email Existe
        const user = await usersRepositories.findOne({
            email
        });

        if (!user){
            throw new Error("Email/Password incorrect")
        }

        //verficar se Senha esta correta
       const passwordMatch = await compare(password, user.password);


        if (!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        //Gerar Token
        const token = sign({
            email: user.email
        }, "ff7a604e8bc3e840fb909e40cab1e437", {
            subject : user.id,
            expiresIn : "1d"
        });

        return token;

    }
}

export  { AuthenticateUserService }