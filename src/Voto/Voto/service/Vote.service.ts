import { Vote } from "../model/Vote";
import { VoteModel } from "../model/Vote.model";

export class VoteService {

    private vote: Vote;

    constructor(vote: Vote) {
        this.vote = vote;
    }

    async getAllUsers() {
        try {
            const votes = await this.vote.selectAll();
            return votes;
        } catch (error) {
            return Error(`Error al obtener usuarios. ${error}`);
        }
    }

    async getUserByDni(dni: string) {
        try {
            const vote = await this.vote.select(dni)
            if (!vote) {
                return Error(`El usuario con dni ${dni} no existe`)
            }
            return vote
        } catch (error) {
            return Error(`Error al obtener el usuario con dni ${dni} ${error}`);
        }
    }

    async getVotesByCandidate(partido: string) {
        try {
            const n_votos = await this.vote.count(partido)
            if (!n_votos) {
                return Error(`No se pudo contar los votos del partido politico ${partido}`)
            }
            console.log(`El partido ${partido} obtuvo un total de ${n_votos} votos.`);
            return n_votos
        } catch (error) {
            return Error(`Error al contar los votos de partido politico ${partido}: ${error}`);
        }
    }

    async setVoto(vote: VoteModel) {
        try {
            await this.vote.add(vote)
        } catch (error) {
            return Error(`Error al ingresar el voto : ${error}`);
        }
    }

}

// aqui LOGICA DE NEGOCIO