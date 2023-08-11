import { Votante } from "../model/Votante";

type statusExist = 'DONT EXIST' | 'EXIST' | Error

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

    async getUserByDni(dni: number) : Promise<statusExist> {
        try {
            const votante = await this.votante.select(dni)
            if(!votante) {
                return 'DONT EXIST'
            } else {
                console.log(votante.dni)
                return 'EXIST'
            }
        } catch(error) {
            return Error(`Error al obtener el votante con dni ${dni} ${error}`);
        }
    }

    async addVotante(dni: number) {
        this.votante.add(dni)
    }
}