import { Votante } from "../model/Votante";
import { VotanteService } from "../service/Votante.service";

export class VotanteController {

    private service: VotanteService;
    private votante: Votante;

    constructor() {
        this.votante = new Votante
        this.service = new VotanteService(this.votante)
    }

    // aqui implementamos ruta
    getAll() {
        return this.service.getAllVotantes()
    }

    getByDni(dni: string) {
        return this.service.getUserByDni(dni)
    }

    addVotante(dni: string) {
        return this.service.addVotante(dni);
    }
}