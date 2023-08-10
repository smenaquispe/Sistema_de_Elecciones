import { User } from "../model/User";

export class UserService {
    
    private user: User;

    constructor(user: User) {
        this.user = user;
    }

    async getAllUsers() {
        try {
            const users = await this.user.selectAll();
            return users;
          } catch (error) {
            return Error(`Error al obtener usuarios. ${error}`);
          }
    }

    async getUserByDni(dni: string) {
        try {
            const user = await this.user.select(dni)
            if(!user) {
                return Error(`El usuario con dni ${dni} no existe`)
            }
            return user
        } catch(error) {
            return Error(`Error al obtener el usuario con dni ${dni} ${error}`);
        }
    }
}

// aqui LOGICA DE NEGOCIO