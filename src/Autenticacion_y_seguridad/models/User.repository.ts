import { UserModel } from "./User.model"

export interface UserRepository {
    selectAll(): Promise<UserModel[]>
    select(dni: string): Promise<UserModel | null>
    add(user: UserModel): Promise<void>
    delete(dni: string): Promise<void>
}
