import { Candidato } from "../model/Candidato";

export class CandidatoService {
    
    private candidato_: Candidato;

    constructor(candidato_: Candidato) {
        this.candidato_ = candidato_;
    }

    async getAllCandidatos() {
        try {
            const candidatos = await this.candidato_.selectAll();
            const parseCandidatos = candidatos.map((candidato, index) => {
                return { partidoPolitico: candidato.partidoPolitico , nombre: candidato.user.nombre, id: index + 1 }
            })
            return parseCandidatos;
          } catch (error) {
            return Error(`Error al obtener usuarios. ${error}`);
          }
    }

    async getcandidatoByDni(dni: string) {
        try {
            const user = await this.candidato_.select(dni)
            if(!user) {
                return Error(`El usuario con dni ${dni} no existe`)
            }
            return user
        } catch(error) {
            return Error(`Error al obtener el usuario con dni ${dni} ${error}`);
        }
    }
}
