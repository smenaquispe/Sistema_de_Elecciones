import { User } from "../models/User";
import { statusAuth } from "../types/types";

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

    async authenticate(dni: string, nombre: string) : Promise<statusAuth | Error> {
        try {
            const user = await this.user.select(dni)

            if(!user) {
                return {
                    message: 'Usuario no existente',
                    status: 'DENIED'
                }
            }

            if(user.nombre != nombre) {
                return {
                   message: 'Dni y/o nombre incorrectos',
                   status: 'DENIED'
                }
            }
           
            return {
                message: 'Usuario autorizado',
                status: 'AUTHORIZED'
            }
        } catch(error) {
            return Error(`Error al obtener el usuario con dni ${dni} ${error}`);
        }
    }
}

// aqui LOGICA DE NEGOCIO