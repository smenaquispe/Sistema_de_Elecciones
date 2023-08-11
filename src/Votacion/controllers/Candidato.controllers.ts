import { Candidato } from "../model/Candidato";
import { CandidatoService } from "../service/Candidato.service";

export class CandidatoController {

    private service: CandidatoService;
    private candidato_: Candidato;

    constructor() {
        this.candidato_ = new Candidato
        this.service = new CandidatoService(this.candidato_)
    }

    getAll() {
        return this.service.getAllCandidatos()
    }

    getByDni(dni: string) {
        return this.service.getcandidatoByDni(dni)
    }
}