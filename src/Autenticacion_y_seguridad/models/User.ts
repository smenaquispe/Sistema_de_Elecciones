import { UserRepository } from "./User.repository";
import { UserEntity } from "./User.entity";
import { CandidatoEntity } from "../../Votacion/model/Candidato.entity";

// aqui con SQL (SET GET)
export class User implements UserRepository {
    
    selectAll(): Promise<UserEntity[]> {
        return UserEntity.findAll();
    }

    select(dni: string): Promise<UserEntity | null> {
        return UserEntity.findOne({where:{dni}});
    }

    add(user: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    delete(dni: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}