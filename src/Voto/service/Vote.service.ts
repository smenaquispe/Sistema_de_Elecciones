import { Vote } from "../model/Vote";
import { VoteModel } from "../model/Vote.model";

export class VoteService {

    private vote: Vote;

    constructor(vote: Vote) {
        this.vote = vote;
    }

    async getAllVotes() {
        try {
            const votes = await this.vote.selectAll();
            return votes;
        } catch (error) {
            return Error(`Error al obtener usuarios. ${error}`);
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

    async setVoto(dniVotante: number, partidoPolitico: string) {
        try {
            await this.vote.add(dniVotante, partidoPolitico)
        } catch (error) {
            return Error(`Error al ingresar el voto : ${error}`);
        }
    }

}

// aqui LOGICA DE NEGOCIO