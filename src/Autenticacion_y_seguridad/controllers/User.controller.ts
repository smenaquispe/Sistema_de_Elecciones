import { User } from "../models/User";
import { UserService } from "../services/User.service";

export class UserController {

    private service: UserService;
    private user: User;

    constructor() {
        this.user = new User
        this.service = new UserService(this.user)
    }

    // aqui implementamos ruta
    getAll() {
        return this.service.getAllUsers()
    }

    getByDni(dni: string) {
        return this.service.getUserByDni(dni)
    }

    // login
    login(dni: string, nombre: string) {
        return this.service.authenticate(dni, nombre);
    }
}