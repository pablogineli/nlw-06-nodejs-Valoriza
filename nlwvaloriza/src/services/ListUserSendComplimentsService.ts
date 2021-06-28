import {getCustomRepository} from "typeorm";
import {ComplimentsRepositories} from "../repositores/ComplimentsRepositories";


class ListUserSendComplimentsService{
    async execute(user_id: string){
        const complimentsRespositories =getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRespositories.find({
            where:{
                user_sender: user_id
            },
        });

        return compliments;
    }
}

export { ListUserSendComplimentsService }