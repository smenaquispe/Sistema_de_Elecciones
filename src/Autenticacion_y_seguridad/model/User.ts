import { UserRepository } from "./User.repository";
import { UserEntity } from "./User.entity";

// aqui con SQL (SET GET)
export class User implements UserRepository {
    
    async selectAll(): Promise<UserEntity[]> {
        return await UserEntity.findAll();
    }

    async select(dni: string): Promise<UserEntity | null> {
        return UserEntity.findOne({where:{id: dni}});
    }

    async add(user: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(dni: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}