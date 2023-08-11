import { Votante } from "../model/Votante";

export class VotanteService {
    
    private votante: Votante;

    constructor(votante: Votante) {
        this.votante = votante;
    }

    async getAllVotantes() {
        try {
            const votantes = await this.votante.selectAll();
            return votantes;
          } catch (error) {
            return Error(`Error al obtener votantes. ${error}`);
          }
    }

    async getUserByDni(dni: string) {
        try {
            const votante = await this.votante.select(parseInt(dni))
            if(!votante) {
                return Error(`El votante con dni ${dni} no existe`)
            }
            return votante
        } catch(error) {
            return Error(`Error al obtener el votante con dni ${dni} ${error}`);
        }
    }

    async addVotante(dni: string) {
        this.votante.add(parseInt(dni))
    }
}