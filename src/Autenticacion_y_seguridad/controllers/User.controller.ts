import { User } from "../model/User";
import { UserService } from "../service/User.service";

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
}