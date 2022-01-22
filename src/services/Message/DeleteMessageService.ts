import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../../repository/MessagesRepository";

interface IMessage {
    id: string;
}

class DeleteMessageService {
    async execute({id}: IMessage){
        const messageRepository = getCustomRepository(MessagesRepository);

        if(!id){
            throw new Error("Por favor informe um id!")
        }

        const newMessage = messageRepository.delete(id)

        await messageRepository.delete(id);

        return newMessage;
    }
}

export  { DeleteMessageService }