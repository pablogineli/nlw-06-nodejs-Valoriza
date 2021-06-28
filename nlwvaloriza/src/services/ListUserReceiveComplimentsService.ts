import {getCustomRepository} from "typeorm";
import {ComplimentsRepositories} from "../repositores/ComplimentsRepositories";


class ListUserReceiveComplimentsService{
    async execute(user_id: string){
        const complimentsRespositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRespositories.find({
            where:{
                user_receiver: user_id
            },
        });

        return compliments;
    }
}

export { ListUserReceiveComplimentsService }